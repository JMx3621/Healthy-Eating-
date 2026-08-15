const fs = require('fs');
const data = fs.readFileSync('app/data.js', 'utf8');
const shell = fs.readFileSync('app/shell.html', 'utf8');
if (!shell.includes('/*__DATA__*/')) { console.error('marker missing'); process.exit(1); }
fs.writeFileSync('eight-week-app.html', shell.replace('/*__DATA__*/', data));
console.log('built eight-week-app.html', fs.statSync('eight-week-app.html').size, 'bytes');
