import { styled } from "../../stitches.config";
import Link from "next/link";
import Box from "./Box";
import Tag from "./Tag";

const Wrapper = styled("li", {
  padding: "1rem 0",
});

const H2 = styled("h2", {
  margin: 0,
  fontSize: "1.5rem",
  flex: 1,
});

const PostPreview: React.FunctionComponent<{
  post: {
    content: string;
    data: {
      description: string;
      published: string;
      title: string;
      tags: string[];
    };
    filePath: string;
  };
}> = ({ post }) => {
  return (
    <Wrapper>
      <Link href={`work/${post.filePath.replace(/\.mdx?$/, "")}`} passHref>
        <Box
          as="a"
          css={{
            color: "inherit",
            "&:hover": { color: "inherit" },
          }}
        >
          <Box
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <H2>{post.data.title}</H2>
            <Box as="time" dateTime={post.data.published} css={{color: '$slate11'}}>
              {post.data.published}
            </Box>
          </Box>
          <p>{post.data.description}</p>
          <Box css={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              as="ul"
              css={{
                listStyle: "none",
                padding: 0,
                display: "flex",
                gap: "0.4rem",
              }}
            >
              {post.data.tags.map((tag) => (
                <Tag as="li" key={tag}>
                  {tag}
                </Tag>
              ))}
            </Box>
            <Box>
              <Tag
                as="button"
                css={{
                  appearance: "none",
                  border: "none",
                  color: "$blue12",
                  cursor: "pointer",
                }}
              >
                &rarr;
              </Tag>
            </Box>
          </Box>
        </Box>
      </Link>
    </Wrapper>
  );
};

export default PostPreview;
