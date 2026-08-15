/* Builds two outputs from app/shell.html + app/data.js:
     eight-week-app.html — body-only, for publishing as a Claude Artifact
     index.html          — full HTML document with PWA manifest + service worker,
                           served by GitHub Pages from the repository root      */
const fs = require('fs');
const data  = fs.readFileSync('app/data.js', 'utf8');
const shell = fs.readFileSync('app/shell.html', 'utf8');
if (!shell.includes('/*__DATA__*/')) { console.error('marker /*__DATA__*/ missing'); process.exit(1); }

const app = shell.replace('/*__DATA__*/', data);
fs.writeFileSync('eight-week-app.html', app);

const head = [
  '<meta charset="utf-8">',
  '<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">',
  '<meta name="theme-color" content="#2E6440">',
  '<meta name="mobile-web-app-capable" content="yes">',
  '<link rel="manifest" href="manifest.webmanifest">',
  '<link rel="icon" href="icon-192.png">',
  '<link rel="apple-touch-icon" href="icon-192.png">'
].join('\n');

const reg = '<script>if("serviceWorker" in navigator){window.addEventListener("load",function(){'
          + 'navigator.serviceWorker.register("sw.js").catch(function(){});});}<\/script>';

const headBlock = app.match(/<title>[\s\S]*?<\/style>/)[0];
const body = app.replace(/<title>[\s\S]*?<\/style>/, '').trim();

fs.writeFileSync('index.html',
  '<!doctype html>\n<html lang="en">\n<head>\n' + head + '\n' + headBlock + '\n</head>\n<body>\n'
  + body + '\n' + reg + '\n</body>\n</html>\n');

console.log('eight-week-app.html', fs.statSync('eight-week-app.html').size, 'bytes');
console.log('index.html         ', fs.statSync('index.html').size, 'bytes');
