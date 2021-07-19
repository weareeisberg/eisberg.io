import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { styled } from "../../../stitches.config";

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

const Work = ({ clients }) => {
  return (
    <Container>
      <h1>Our clients and their stories</h1>
      <Box as="ul" css={{ margin: 0, padding: 0, listStyle: "none" }}>
        {clients.sort(sortByPublished).map((post) => (
          <PostPreview post={post} key={post.data.title} />
        ))}
      </Box>
    </Container>
  );
};

Work.Layout = PageLayout;

export default Work;

export function getStaticProps() {
  const clients = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { clients } };
}
