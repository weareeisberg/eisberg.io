import type { AppProps } from "next/app";
import React from "react";
import { globalStyles } from "../../stitches.config";
import SEO from "../utils/next-seo.config";
import { DefaultSeo } from "next-seo";

const MyApp = ({
  Component,
  pageProps,
}: AppProps & { Component: { Layout?: React.FunctionComponent } }) => {
  //   Apply page layout
  const Layout = Component.Layout || (({ children }) => <>{children}</>);

  //   Add global CSS
  globalStyles();

  return (
    <Layout>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
