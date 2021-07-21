import { styled } from "../../stitches.config";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import LogoSvg from "../../public/eisberg.svg";

const Container = styled("nav", {
  padding: "4rem 0",
  gridColumn: "2/12",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  "@medium": {
    paddingTop: "8rem 0",
    gridColumn: "3/11",
  },

  // Reset a styles
  a: {
    textDecoration: "none",
    border: "none",
    boxShadow: "none",
  },
});

const Ul = styled("ul", {
  padding: 0,
  margin: 0,
  appearance: "none",
  listStyle: "none",
  display: "flex",
  justifyContent: "flex-end",

  li: {
    paddingLeft: "1rem",
  },

  a: {
    boxShadow: "none",
  },
});

const Li = styled("li", {
  variants: {
    isActive: {
      true: {
        a: {
          boxShadow: "0px 2px $blue6",
        },
      },
      false: {
        a: {
          boxShadow: "none",
        },
      },
    },
  },
});

const Nav = () => {
  const { asPath } = useRouter();
  console.log(asPath);
  return (
    <Container>
      <Link href="/" passHref>
        <a>
          <Image src={LogoSvg} width="50" height="50" />
        </a>
      </Link>
      <Ul>
        <Li isActive={asPath === "/"}>
          <Link href="/">Eisberg</Link>
        </Li>
        <Li isActive={asPath === "/work"}>
          <Link href="/work">Work</Link>
        </Li>
      </Ul>
    </Container>
  );
};

export default Nav;
