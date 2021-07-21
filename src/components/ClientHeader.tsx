import { styled } from "../../stitches.config";
import { ExternalLinkIcon, LapTimerIcon, CubeIcon } from "@modulz/radix-icons";

const Table = styled("table", {
  width: "100%",

  "*": {
    textAlign: "center",
  },

  "thead > td": {
    borderBottom: "1px solid $blue4",
  },

  td: {
    borderRight: "1px solid $blue4",
    padding: "0.25rem",
    fontSize: "0.85rem",
  },

  "td:last-of-type": {
    borderRight: "none",
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
    <Table>
      <thead>
        <td>
          <LapTimerIcon />
        </td>
        <td>
          <CubeIcon />
        </td>
        <td>
          <ExternalLinkIcon />
        </td>
      </thead>
      <tbody>
        <td>{duration}</td>
        <td>{stack}</td>
        <td>
          <a href={link} target="_blank" rel="noopener noreferrer">
            {link}
          </a>
        </td>
      </tbody>
    </Table>
  );
};

export default ClientHeader;
