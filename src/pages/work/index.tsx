import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { styled } from "../../../stitches.config";
import { NextSeo } from "next-seo";

import PageLayout from "../../layouts/PageLayout";
import { postFilePaths, POSTS_PATH } from "../../utils/mdxUtils";

import Box from "../../components/Box";
import PostPreview from "../../components/PostPreview";

const sortByPublished = (a, b) =>
  Date.parse(b.data.published) - Date.parse(a.data.published);

const Container = styled("main", {
  gridColumn: "2/12",

  "@medium": {
    gridColumn: "3/11",
  },
});

const Work = ({ clients, content }) => {
  return (
    <>
      <NextSeo
        title={content.seo.title}
        description={content.seo.description}
        canonical="https://eisberg.io/work"
      />
      <Container>
        <h1>{content.headline}</h1>
        <Box as="ul" css={{ margin: 0, padding: 0, listStyle: "none" }}>
          {clients.sort(sortByPublished).map((post) => (
            <PostPreview post={post} key={post.data.title} />
          ))}
        </Box>
      </Container>
    </>
  );
};

Work.Layout = PageLayout;

export default Work;

export const getStaticProps = ({ locale }) => {
  const TEXT = {
    de: {
      headline: "Unser Kunden und ihre Geschichten",
      seo: {
        title: "Unsere Arbeit",
        description: "Eisbergs Kunden und ihre Geschichten",
      },
    },
    en: {
      headline: "Our clients and their stories",
      seo: {
        title: "Our work",
        description:
          "Find Eisbergs client stories and how we improved their business.",
      },
    },
  };

  const _clients = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  const clientsInLanguage = _clients.filter(
    (client) => client.data.lang === locale
  );
  const clients = clientsInLanguage.length ? clientsInLanguage : [];

  return { props: { clients, content: TEXT[locale] } };
};
