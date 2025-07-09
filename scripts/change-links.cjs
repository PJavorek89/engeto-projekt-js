const fs = require("fs");
const path = require("path");

const indexPath = path.resolve(__dirname, "../dist/index.html");
let html = fs.readFileSync(indexPath, "utf-8");

//nahrazeni odkazu
html = html.replace(/href="\/pages\/(.*?)"/g, 'href="/$1"');
fs.writeFileSync(indexPath, html);
