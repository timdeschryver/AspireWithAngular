console.log(process.env["OTEL_EXPORTER_OTLP_ENDPOINT"]);
module.exports = {
  "/api": {
    target: process.env["services__weatherforecastapi__1"],
    secure: false,
  },
};
