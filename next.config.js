const withTM = require("next-transpile-modules")(["unist-util-visit"]);

module.exports = withTM({
  i18n: {
    locales: ["en", "de"],
    defaultLocale: "de",
  },
});
