import { createCss } from "@stitches/react";
import { blueDark, slateDark } from "@radix-ui/colors";

export const { styled, css, global, keyframes, getCssString, theme } =
  createCss({
    theme: {
      colors: {
        ...blueDark,
        ...slateDark,
      },
      shadows: {
        ...blueDark,
        ...slateDark,
      },
    },
    media: {
      small: "(min-width: 576px)",
      medium: "(min-width: 768px)",
      large: "(min-width: 992px)",
      xlarge: "(min-width: 1200px)",
    },
  });

// const darkTheme = theme({
//   colors: {
//     ...grassDark,
//     ...oliveDark,
//   },
// })

export const globalStyles = global({
  body: {
    margin: 0,
    padding: 0,
    minHeight: "100vh",
    backgroundColor: "$blue1",
    color: "$slate12",

    fontFamily: "Raleway",
    fontStyle: "normal",
    fontSize: "16px",
    lineHeight: "29px",

    letterSpacing: "0.05em",
  },
  a: {
    border: "none",
    appearance: "none",
    textDecoration: "none",
    boxShadow: "0px 2px $blue6",
    color: "inherit",

    "&:hover": {
      color: "$blue9",
    },

    "&:active, &:focus": {
      color: "$blue10",
    },
  },
  "p, a, li": {
    lineHeight: "1.4rem",
  },

  "h1, h2, h3": {
    fontFamily: "Montserrat, sans-serif",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },

  h1: {
    fontSize: "2.2rem",
    lineHeight: "3rem",
    fontStyle: "normal",
    fontWeight: "normal",

    // marginBlockStart: "3rem",
    // marginBlockEnd: "3rem",
  },

  h2: {
    fontSize: "1.5em",
    lineHeight: "1.65em",
    fontStyle: "normal",
    fontWeight: "normal",

    /* margin-block-start: 0.83rem; */
    /* marg,in-block-end: 3rem; */
  },

  h3: {
    fontSize: "1.17em",
    lineHeight: "1.23em",
    fontStyle: "normal",
    fontWeight: "normal",

    /* margin-block-start: 0.83rem; */
    /* margin-block-end: 3rem; */
  },

  // Code blocks
  pre: {
    padding: "0.75rem",
    borderRadius: "0.3rem",
    overflowY: "auto",
  },

  // Line numbers
  code: {
    counterReset: "step",
    counterIncrement: "step 0",

    ".line::before": {
      content: "counter(step)",
      counterIncrement: "step",
      width: "1rem",
      marginRight: "1.5rem",
      display: "inline-block",
      textAlign: "right",
      color: "rgba(115,138,148,.4)",
    },
  },
});
