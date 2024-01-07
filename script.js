function translateText() {
    const text = document.getElementById('textToTranslate').value;
    const source_language = document.getElementById('sourceLanguage').value;
    const target_language = document.getElementById('targetLanguage').value;

    const url = "https://translated-mymemory---translation-memory.p.rapidapi.com/get";
    const params = `langpair=${source_language}|${target_language}&q=${encodeURIComponent(text)}&mt=1&onlyprivate=0&de=your-email@example.com`;

    // Verificar si el texto está vacío
    if (!text.trim()) {
        alert("Por favor, introduce el texto a traducir.");
        return;
    }

    const languageName = getLanguageName(source_language);

    if (!confirm(`¿Seguro que el texto a traducir está en ${languageName}?`)) {
        return; // Detiene la función si el usuario no confirma
    }

    fetch(url + "?" + params, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "06e5ac1403msha140fb1e47962a2p1d59c2jsn3ed80b5f41b5",
            "X-RapidAPI-Host": "translated-mymemory---translation-memory.p.rapidapi.com"
        }
    })
        .then(response => response.json())
        .then(data => {
            var translationResultTextarea = document.getElementById('translationResult');
            if (data.responseStatus === 200 && data.responseData.translatedText) {
                translationResultTextarea.value = data.responseData.translatedText;
                translationResultTextarea.style.display = 'block'; // Asegúrate de mostrar el textarea
            } else {
                translationResultTextarea.value = 'No se encontró traducción';
                translationResultTextarea.style.display = 'block';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            translationResultTextarea.value = 'Error al traducir';
            translationResultTextarea.style.display = 'block';
        });
}


function getLanguageName(code) {
    const languageMap = {
        "af": "Afrikáans",
        "ar": "Árabe",
        "zh-TW": "Chino",
        "de": "Alemán",
        "en": "Inglés",
        "es": "Español",
        "fr": "Francés",
        "it": "Italiano",
        "ja": "Japonés",
        "pt": "Portugués",
        "ru": "Ruso"
    };

    return languageMap[code] || code;
}