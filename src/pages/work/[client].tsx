import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Image from "next/image";
import { styled } from "../../../stitches.config";
import path from "path";
import CustomLink from "../../components/CustomLink";
import PostLayout from "../../layouts/PostLayout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";
import { shikiRemarkPlugin } from "../../utils/mdxUtils";
import imageSize from "rehype-img-size";
import ClientHeader from "../../components/ClientHeader";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

const components = {
  a: CustomLink,
  img: (props) => (
    <Image
      {...props}
      layout="responsive"
      loading="lazy"
      alt="Custom Eisberg Image"
    />
  ),
  ClientHeader,
  Head,
};

const Container = styled("main", {
  gridColumn: "2/12",

  "@medium": {
    gridColumn: "3/11",
  },
});

const PostPage = ({ source, frontMatter }) => {
  const { asPath, basePath, pathname } = useRouter();
  console.log(basePath);
  console.log(pathname);
  console.log(asPath);
  return (
    <>
      <NextSeo
        title={frontMatter.title}
        description={frontMatter.description}
        canonical={`https://eisberg.io${asPath}`}
        openGraph={{
          type: "website",
          url: `https://eisberg.io${asPath}`,
          title: frontMatter.title,
          description: frontMatter.description,
          images: [
            {
              url: `https://eisberg.io${asPath}.png`,
              width: 1012,
              height: 506,
              alt: "Og Image Alt",
            },
          ],
          site_name: "eisberg.io",
        }}
        twitter={{
          handle: "@eisberg_io",
          site: "@eisberg_io",
          cardType: "summary_large_image",
        }}
      />
      <Container>
        <main>
          <MDXRemote {...source} components={components} />
        </main>
      </Container>
    </>
  );
};

PostPage.Layout = PostLayout;

export default PostPage;

export const getStaticProps = async ({ params, locale }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.client}.${locale}.mdx`);
  const source = fs.readFileSync(postFilePath);

  const { content, data } = matter(source);

  const shiki = await import("shiki");
  const highlighter = await shiki.getHighlighter({
    theme: "github-dark",
  });

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [[shikiRemarkPlugin, { highlighter }]],
      rehypePlugins: [[imageSize, { dir: "public" }]],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = postFilePaths
    .map((path) => {
      const [client, locale] = path.split(".");
      return { client, locale };
    })
    .map(({ client, locale }) => ({ params: { client }, locale }));

  return {
    paths,
    fallback: false,
  };
};
