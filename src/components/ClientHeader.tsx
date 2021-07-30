import { styled } from "../../stitches.config";
import { ExternalLinkIcon, LapTimerIcon, CubeIcon } from "@modulz/radix-icons";
import Box from "./Box";

const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  fontSize: "0.85rem",

  "@small": {
    flexDirection: "row",
  },

  "*": {
    textAlign: "center",
  },
});

const ClientHeader: React.FunctionComponent<{
  duration: string;
  stack: string;
  link: string;
}> = ({
  duration = "1 month",
  stack = "React, Nextjs, BigCommerce",
  link = "https://eisberg.io",
}) => {
  return (
    <Container>
      <Box css={{ flex: 1, "@small": { borderRight: "1px solid $blue4" } }}>
        <LapTimerIcon />
        <Box
          css={{
            borderTop: "1px solid $blue4",
            paddingTop: ".25rem",
            marginTop: ".25rem",
          }}
        >
          {duration}
        </Box>
      </Box>
      <Box css={{ flex: 1, "@small": { borderRight: "1px solid $blue4" } }}>
        <CubeIcon />
        <Box
          css={{
            borderTop: "1px solid $blue4",
            paddingTop: ".25rem",
            marginTop: ".25rem",
          }}
        >
          {stack}
        </Box>
      </Box>
      <Box css={{ flex: 1 }}>
        <ExternalLinkIcon />
        <Box
          css={{
            borderTop: "1px solid $blue4",
            paddingTop: ".25rem",
            marginTop: ".25rem",
          }}
        >
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </Box>
      </Box>
    </Container>
  );
};

export default ClientHeader;
