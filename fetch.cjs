const fs = require('fs');
const https = require('https');
const path = require('path');

const file = 'src/components/Extras/Extras.tsx';
let content = fs.readFileSync(file, 'utf8');

const regex = /img: '(https:\/\/upload\.wikimedia\.org\/[^']+)'/g;
const urls = [...content.matchAll(regex)].map(m => m[1]);

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join('public', filename);
    const fileStream = fs.createWriteStream(dest);
    
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (${res.statusCode})`));
        return;
      }
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    const ext = path.extname(url.split('?')[0]) || '.jpg';
    // Decoded filename
    let safeName = path.basename(url).replace(/[^a-zA-Z0-9.\-_]/g, '_');
    console.log(`Downloading ${safeName}...`);
    try {
      await downloadImage(url, safeName);
      content = content.replace(url, `/${safeName}`);
    } catch (e) {
      console.log('Error downloading', url, e.message);
    }
  }
  fs.writeFileSync(file, content);
  console.log('Done!');
}
run();
