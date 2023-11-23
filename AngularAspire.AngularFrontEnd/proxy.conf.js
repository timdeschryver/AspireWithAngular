module.exports = {
  "/api": {
    target: process.env["services__weatherforecastapi__1"],
    pathRewrite: {
      "^/api": "",
    },
  },
};
