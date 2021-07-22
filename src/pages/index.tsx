import { InferGetStaticPropsType } from "next";
import { styled } from "../../stitches.config";
import Image from "next/image";
import Link from "next/link";

import LogoSvg from "../../public/eisberg.svg";
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

const Index = ({ content }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Body>
      <Container>
        <Image src={LogoSvg} width="80" height="80" alt="Eisberg Logo" />
        <h1>{content.headline}</h1>
        <p>{content.subheadline}</p>
        <Link href="/work" passHref>
          <Button css={{ fontSize: "1rem" }}>
            {content.buttonText} &rarr;
          </Button>
        </Link>
        <p dangerouslySetInnerHTML={{ __html: content.cta }} />
      </Container>
    </Body>
  );
};

export const getStaticProps = async ({ locale }) => {
  const TEXT = {
    de: {
      headline: "Wir sind Eisberg",
      subheadline:
        "Wir bauen gute Dinge. Vorzugweise im Internet. Besonders im Bereich eCommerce. Schau dir unsere Arbeit an um zu verstehen, wie wir helfen können.",
      cta: 'Sag uns einfach Bescheid wenn wir helfen können. Schicke uns dazu einfach <a href="mailto:hi@eisberg.io">eine Nachricht.</a>',
      buttonText: "Unsere Arbeit",
    },
    en: {
      headline: "We are Eisberg",
      subheadline:
        " We like to build great things. Preferably on the Internet. Especially in the area of eCommerce. Take a look at our work to understand how we can help you.",
      cta: 'Let us know if we can help you. Just <a href="mailto:hi@eisberg.io">contact us.</a>',
      buttonText: "Our work",
    },
  };

  return {
    props: {
      content: TEXT[locale],
    },
  };
};

export default Index;
