import urllib.request
import urllib.parse
import json
import os
import time

queries = {
    'un_mundo_feliz.jpg': 'Brave New World book cover',
    'papelucho.jpg': 'Papelucho historiador portada',
    'padrino.jpg': 'The Godfather movie poster',
    'goodfellas.jpg': 'Goodfellas movie poster',
    'casino.jpg': 'Casino 1995 movie poster',
    'hobbit.jpg': 'The Hobbit An Unexpected Journey poster',
    'spirit.jpg': 'Spirit Stallion of the Cimarron poster',
    'akira.jpg': 'Akira 1988 movie poster',
    'invasor_zim.jpg': 'Invader Zim logo poster',
    'arnold.jpg': 'Hey Arnold logo poster',
    'simpsons.jpg': 'The Simpsons family poster',
    'futurama.jpg': 'Futurama logo poster',
    '31_minutos.jpg': '31 Minutos logo',
    'marcela_paz.jpg': 'Marcela Paz escritora',
    'nicanor_parra.jpg': 'Nicanor Parra',
    'kendrick.jpg': 'Kendrick Lamar portrait',
    'kamasi.jpg': 'Kamasi Washington portrait',
    'malcolm_x.jpg': 'Malcolm X portrait',
    'pedro_aguirre.jpg': 'Pedro Aguirre Cerda presidente',
    'jose_miguel.jpg': 'Jose Miguel Carrera retrato',
    'carlos_sombra.jpg': 'Carlos La Sombra 31 minutos'
}

def search_ddg_image(query):
    url = f"https://duckduckgo.com/i.js?q={urllib.parse.quote(query)}&o=json"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            if data and 'results' in data and len(data['results']) > 0:
                return data['results'][0]['image']
    except Exception as e:
        print(f"Error searching {query}: {e}")
    return None

def download_image(url, filename):
    filepath = os.path.join('public', filename)
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req, timeout=10) as response, open(filepath, 'wb') as out_file:
            out_file.write(response.read())
            print(f"Downloaded {filename}")
            return True
    except Exception as e:
        print(f"Failed to download {filename} from {url}: {e}")
        return False

for filename, query in queries.items():
    print(f"Searching for {query}...")
    img_url = search_ddg_image(query)
    if img_url:
        download_image(img_url, filename)
    else:
        print(f"No image found for {query}")
    time.sleep(1)
