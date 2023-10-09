const showdown = require("showdown");
const fs = require("fs-extra");
const path = require("path");

const htmlTemplate = (content) => {
  return `<!doctype html>
<html lang="zh-cmn-Hans">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    />
    <title>QiShaoXuan's resume</title>
  </head>
  <body>${content}</body>
</html>
`;
};

const start = async () => {
  const markdown = await fs.readFile(
    path.join(__dirname, "./readme.md"),
    "utf8",
  );

  const converter = new showdown.Converter();
  const html = converter.makeHtml(markdown);
  await fs.outputFile("./resume.html", htmlTemplate(html));
};

start().catch(console.error);
