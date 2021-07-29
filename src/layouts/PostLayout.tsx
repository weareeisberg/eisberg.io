import { styled } from "../../stitches.config";

import Nav from "../components/Nav";

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
});

const PostLayout: React.FunctionComponent = ({ children }) => (
  <Container>
    <Nav />
    {children}
  </Container>
);

export default PostLayout;
