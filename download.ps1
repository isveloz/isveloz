$urls = @{
    "un_mundo_feliz.jpg" = "https://upload.wikimedia.org/wikipedia/en/6/62/BraveNewWorld_FirstEdition.jpg"
    "papelucho.jpg" = "https://upload.wikimedia.org/wikipedia/commons/4/4b/Papelucho_historiador.jpg"
    "padrino.jpg" = "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg"
    "goodfellas.jpg" = "https://upload.wikimedia.org/wikipedia/en/7/7b/Goodfellas.jpg"
    "casino.jpg" = "https://upload.wikimedia.org/wikipedia/en/d/d4/Casino_poster.jpg"
    "hobbit.jpg" = "https://upload.wikimedia.org/wikipedia/en/b/b3/The_Hobbit-_An_Unexpected_Journey.jpeg"
    "spirit.jpg" = "https://upload.wikimedia.org/wikipedia/en/b/ba/Spirit_Stallion_of_the_Cimarron_poster.jpg"
    "akira.jpg" = "https://upload.wikimedia.org/wikipedia/en/5/5d/AKIRA_%281988_poster%29.jpg"
    "invasor_zim.png" = "https://upload.wikimedia.org/wikipedia/en/2/27/Invader_Zim_title_card.png"
    "arnold.jpg" = "https://upload.wikimedia.org/wikipedia/en/5/52/Hey_Arnold%21_title_card.jpg"
    "simpsons.png" = "https://upload.wikimedia.org/wikipedia/en/0/0d/Simpsons_FamilyPicture.png"
    "futurama.svg" = "https://upload.wikimedia.org/wikipedia/en/8/84/Futurama_title.svg"
    "31_minutos.png" = "https://upload.wikimedia.org/wikipedia/en/5/5a/31_minutos_logo.png"
    "marcela_paz.jpg" = "https://upload.wikimedia.org/wikipedia/commons/b/bc/Marcela_Paz_%281968%29.jpg"
    "nicanor_parra.jpg" = "https://upload.wikimedia.org/wikipedia/commons/e/ec/Nicanor_Parra_1969.jpg"
    "kendrick.jpg" = "https://upload.wikimedia.org/wikipedia/commons/3/32/Pulitzer2018-portraits-kendrick-lamar.jpg"
    "kamasi.jpg" = "https://upload.wikimedia.org/wikipedia/commons/4/4e/Kamasi_Washington_-_Pori_Jazz_2015_%281%29_%28cropped%29.jpg"
    "malcolm_x.jpg" = "https://upload.wikimedia.org/wikipedia/commons/c/cb/Malcolm_X_NYWTS_2a.jpg"
    "pedro_aguirre.jpg" = "https://upload.wikimedia.org/wikipedia/commons/2/23/Pedro_Aguirre_Cerda_en_1938.jpg"
    "jose_miguel.jpg" = "https://upload.wikimedia.org/wikipedia/commons/7/71/Jos%C3%A9_Miguel_Carrera_y_Verdugo.JPG"
    "section_80.png" = "https://upload.wikimedia.org/wikipedia/en/4/42/Kendrick_Lamar_-_Section.80.png"
    "drip_drown.jpg" = "https://upload.wikimedia.org/wikipedia/en/0/05/Drip_or_Drown_2.jpg"
    "joao_gilberto.jpg" = "https://upload.wikimedia.org/wikipedia/commons/7/75/Jo%C3%A3o_Gilberto_1969.jpg"
    "mobb_deep.png" = "https://upload.wikimedia.org/wikipedia/en/6/6c/Mobb_Deep_-_The_Infamous.png"
    "kind_of_blue.jpg" = "https://upload.wikimedia.org/wikipedia/commons/2/24/Miles_Davis_by_Palumbo_in_the_1950s.jpg"
}

foreach ($key in $urls.Keys) {
    $url = $urls[$key]
    $outfile = "public\$key"
    Write-Host "Downloading $key from $url"
    try {
        Invoke-WebRequest -Uri $url -OutFile $outfile -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36" -ErrorAction Stop
        Start-Sleep -Seconds 1
    } catch {
        Write-Host "Error downloading $key"
    }
}
