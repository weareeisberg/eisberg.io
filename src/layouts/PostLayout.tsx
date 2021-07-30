import { styled } from "../../stitches.config";

import Nav from "../components/Nav";

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
});

const Footer = styled("footer", {
  paddingTop: "1rem",
  paddingBottom: "4rem",
  gridColumn: "2/12",

  "@medium": {
    gridColumn: "3/11",
  },
});

const PostLayout: React.FunctionComponent = ({ children }) => (
  <Container>
    <Nav />
    {children}
    <Footer>
      Sicher können wir dir auch helfen. Schreibe uns dazu einfach eine{" "}
      <a href="mailto:hi@eisberg.io">Nachricht</a> oder kontaktiere uns via{" "}
      <a href="https://www.linkedin.com/company/eisberg-it">LinkedIn</a>.
    </Footer>
  </Container>
);

export default PostLayout;
