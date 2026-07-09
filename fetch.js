const https = require('https');

const queries = [
  'Brave New World',
  'Papelucho',
  'The Godfather',
  'Goodfellas',
  'Casino (film)',
  'The Hobbit (film series)',
  'Spirit: Stallion of the Cimarron',
  'Akira (1988 film)',
  'Invader Zim',
  'Hey Arnold!',
  'The Simpsons',
  'Futurama',
  '31 Minutos',
  'Section.80',
  'Drip or Drown 2',
  'Joao Gilberto',
  'The Infamous',
  'The Epic (album)',
  'Kind of Blue',
  'Marcela Paz',
  'Nicanor Parra',
  'Kendrick Lamar',
  'Kamasi Washington',
  'Malcolm X',
  'Pedro Aguirre Cerda',
  'Jose Miguel Carrera',
  'Carlos La Sombra'
];

async function getWikiImage(query) {
  return new Promise((resolve) => {
    const url = 'https://en.wikipedia.org/wiki/' + encodeURIComponent(query.replace(/ /g, '_'));
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const match = data.match(/<meta property="og:image" content="([^"]+)"/);
        if (match) {
          resolve({ query, url: match[1] });
        } else {
           const esUrl = 'https://es.wikipedia.org/wiki/' + encodeURIComponent(query.replace(/ /g, '_'));
           https.get(esUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (esRes) => {
             let esData = '';
             esRes.on('data', chunk => esData += chunk);
             esRes.on('end', () => {
               const esMatch = esData.match(/<meta property="og:image" content="([^"]+)"/);
               resolve({ query, url: esMatch ? esMatch[1] : 'NOT FOUND' });
             });
           }).on('error', () => resolve({ query, url: 'ERROR' }));
        }
      });
    }).on('error', () => resolve({ query, url: 'ERROR' }));
  });
}

async function run() {
  for (const q of queries) {
    const result = await getWikiImage(q);
    console.log(result.query + '::::' + result.url);
  }
}
run();
