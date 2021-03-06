import { styled } from "../../stitches.config";
import SEO from "../utils/next-seo.config";
import { DefaultSeo } from "next-seo";

import Nav from "../components/Nav";

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
});

const PageLayout: React.FunctionComponent = ({ children }) => (
  <Container>
    <DefaultSeo {...SEO} />
    <Nav />
    {children}
  </Container>
);

export default PageLayout;
