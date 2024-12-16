module.exports = {
  "/api": {
    target: process.env["services__weatherforecastapi__https__0"],
    secure: process.env["NODE_ENV"] !== "development",
    pathRewrite: {
      "^/api": "",
    },
  },
};
