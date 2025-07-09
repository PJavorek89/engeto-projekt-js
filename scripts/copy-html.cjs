const fs = require("fs");
const path = require("path");

const distPath = path.resolve(__dirname, "../dist");
const pagesPath = path.join(distPath, "pages");

if (fs.existsSync(pagesPath)) {
  fs.readdirSync(pagesPath).forEach((file) => {
    const origPath = path.join(pagesPath, file);
    const newPath = path.join(distPath, file);
    fs.renameSync(origPath, newPath);
  });
  fs.rmdirSync(pagesPath);
}
