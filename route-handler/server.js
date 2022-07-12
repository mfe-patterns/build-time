var express = require("express");
var app = express();
var httpProxy = require("http-proxy");
var apiProxy = httpProxy.createProxyServer();
var ServerOne = "http://localhost:8080",
  ServerTwo = "http://localhost:8081",
  ServerThree = "http://localhost:8082";

app.all("/app1/*", function (req, res) {
  console.log("redirecting to Server1");
  apiProxy.web(req, res, { target: ServerOne });
});

app.all("/app2/*", function (req, res) {
  console.log("redirecting to Server2");
  apiProxy.web(req, res, { target: ServerTwo });
});

app.all("/app2/*", function (req, res) {
  console.log("redirecting to Server3");
  apiProxy.web(req, res, { target: ServerThree });
});

app.all("/*", function (req, res) {
  console.log("redirecting to Server1");
  apiProxy.web(req, res, { target: ServerOne });
});

app.listen(3000);