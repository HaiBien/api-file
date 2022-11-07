const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const pg = require('./api/resources/files/upload_file')
const PORT = process.env.PORT || 3000;

import {checkTempFolder, multipartMiddleware} from './api/utils/fileUtils';

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (request, response) => {
  response.json({info: "Crawl and Search API"});
});

app.get("/api/files", pg.getAllFiles);
app.get("/api/files/:id", pg.getById);
app.delete("/api/files/:id", pg.delById);
app.post("/api/files", pg.createFiles);
app.post("/api/upload", checkTempFolder, multipartMiddleware, pg.uploadFile);

app.listen(PORT, () => {
  console.log(`Server is running at PORT http://localhost:${PORT}`);
});