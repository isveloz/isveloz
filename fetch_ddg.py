import urllib.request
import urllib.parse
import re
import os
import time

queries = {
    'papelucho.jpg': 'Papelucho historiador portada',
    'padrino.jpg': 'The Godfather movie poster',
    'casino.jpg': 'Casino 1995 movie poster',
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

def download_ddg_image(filename, query):
    url = f"https://html.duckduckgo.com/html/?q={urllib.parse.quote(query + ' filetype:jpg')}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        match = re.search(r'src="//external-content\.duckduckgo\.com/iu/\?u=([^&"]+)', html)
        if match:
            img_url = urllib.parse.unquote(match.group(1))
            print(f"Found {img_url} for {query}")
            
            # Download the image
            filepath = os.path.join('public', filename)
            img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(img_req, timeout=10) as response, open(filepath, 'wb') as out_file:
                out_file.write(response.read())
            print(f"Downloaded {filename}")
            return True
        else:
            print(f"No image found for {query}")
    except Exception as e:
        print(f"Error for {query}: {e}")
    return False

for filename, query in queries.items():
    print(f"Searching {query}...")
    download_ddg_image(filename, query)
    time.sleep(2)
