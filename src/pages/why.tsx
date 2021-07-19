import { styled } from "../../stitches.config";
import Image from "next/image";

import LogoSvg from "../public/eisberg.svg";
import PageLayout from "../layouts/PageLayout";

const Container = styled("main", {
  gridColumn: "2/12",

  "@medium": {
    gridColumn: "3/11",
  },

  ul: {
    margin: 0,
    padding: 0,
  },

  li: {
    margin: "1rem 0",
    listStyleType: "none",
  },
});

const Why = () => {
  return (
    <>
      <Container>
        <Image src={LogoSvg} width="80" height="80" />
        <h1>Come and work with us</h1>
        <div>
          Eisberg is a place for passionate developers. A lot of dev agencies
          these days chase money and customers, while leaving the passion and
          fun behind. At Eisberg we only do real projects that effect real
          people treating our job as a craft.
        </div>
        <ul>
          <li>
            <div>👨‍👩‍👧‍👧</div>
            <div>
              We are a tiny and passionate team. We all have the same voice. We
              all participate in the company success.
            </div>
          </li>
          <li>
            <div>🚀</div>
            <div>
              We believe in modern tech. That's why we use the latest and most
              awesome tech available - for all of our projects.
            </div>
          </li>
          <li>
            <div>💻</div>
            <div>
              We love OpenSource. That's why we incorporate OSS work deeply in
              our day to day basis.
            </div>
          </li>
        </ul>
        <div>
          Sounds good?
          <a
            href="mailto:hi@eisberg.io"
            target="_blank"
            rel="noopener"
            aria-label="Send eMail"
          >
            {" "}
            Then let us know!
          </a>
        </div>
      </Container>
    </>
  );
};

Why.Layout = PageLayout;

export default Why;
