function translateText() {
    var text = document.getElementById('textToTranslate').value;
    var languageChoice = document.getElementById('languageChoice').value;
    var target_language, source_language;

    if (languageChoice === "es-en") {
        source_language = "es";
        target_language = "en";
    } else if (languageChoice === "en-es") {
        source_language = "en";
        target_language = "es";
    }

    var url = "https://text-translator2.p.rapidapi.com/translate";
    var data = {
        text: text,
        target_language: target_language,
        source_language: source_language
    };

    fetch(url, {
        method: "POST",
        headers: {
            "content-type": "application/x-www-form-urlencoded",
            "X-RapidAPI-Key": "a71e103d4bmsh2d23398c391c2ddp1690cajsn1bc2aaf2288a",
            "X-RapidAPI-Host": "text-translator2.p.rapidapi.com"
        },
        body: new URLSearchParams(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success" && data.data.translatedText) {
            document.getElementById('translationResult').innerText = data.data.translatedText;
        } else {
            document.getElementById('translationResult').innerText = 'No se encontró traducción';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('translationResult').innerText = 'Error al traducir';
    });
}



