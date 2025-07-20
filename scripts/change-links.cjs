const fs = require("fs");
const path = require("path");

const indexPath = path.resolve(__dirname, "../dist/index.html");
let html = fs.readFileSync(indexPath, "utf-8");

//nahrazeni odkazu
const base = "/engeto-projekt-js/";
html = html.replace(/href="\/?pages\/(.*?)"/g, `href="${base}/$1"`);
fs.writeFileSync(indexPath, html);
