const fs = require('fs');
const html = fs.readFileSync('index.old.html', 'utf8');
const names = {
  'Sea Battle interface': 'sea-battle',
  'Last Card interface': 'last-card',
  'Winnie-the-Pooh chat interface': 'winnie-pooh'
};
fs.mkdirSync('public/assets/screenshots', { recursive: true });
const re = /<img src="data:image\/(\w+);base64,([^"]+)" alt="([^"]*)"/g;
let m;
while ((m = re.exec(html))) {
  const name = names[m[3]];
  if (!name) continue;
  const ext = m[1] === 'jpeg' ? 'jpg' : m[1];
  fs.writeFileSync(`public/assets/screenshots/${name}.${ext}`, Buffer.from(m[2], 'base64'));
  console.log('saved', `${name}.${ext}`);
}