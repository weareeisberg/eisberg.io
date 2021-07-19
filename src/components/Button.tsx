import { styled } from "../../stitches.config";

const Button = styled("button", {
  backgroundColor: "$blue6",
  color: "$slate12",
  padding: "0.4rem 0.9rem",
  borderRadius: "0.3rem",
  cursor: "pointer",
  fontSize: "16px",

  border: "none",
  appearance: "none",

  "&:hover": {
    backgroundColor: "$blue7",
  },

  "&:active, &:target, &:focus": {
    boxShadow: "0 0 0 1px $blue8",
  },

  transition: "all 0.1s",
});

export default Button;
