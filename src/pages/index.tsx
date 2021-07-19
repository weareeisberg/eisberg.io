import { styled } from "../../stitches.config";
import Image from "next/image";
import Link from "next/link";

import LogoSvg from "../public/eisberg.svg";

import PageLayout from "../layouts/PageLayout";
import Button from "../components/Button";

const Body = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(12, 1fr)",
});

const Container = styled("main", {
  paddingTop: "5rem",
  gridColumn: "2/12",

  "@medium": {
    paddingTop: "10rem",
    gridColumn: "3/11",
  },
});

const Index = () => {
  return (
    <Body>
      <Container>
        <Image src={LogoSvg} width="80" height="80" />
        <h1>We are Eisberg</h1>
        <p>
          We like to build great things. Preferably on the Internet. Especially
          in the area of eCommerce. Take a look at our work to understand how we
          can help you
        </p>
        <Link href="/work">
          <Button css={{ fontSize: "1rem" }}>Our work &rarr;</Button>
        </Link>
        <p>
          Let us know if we can help you. Just{" "}
          <a href="mailto:hi@eisberg.io">contact us.</a>
        </p>
      </Container>
    </Body>
  );
};

export default Index;
