async function translateText() {
    const text = document.getElementById('textToTranslate').value;
    const source_language = document.getElementById('sourceLanguage').value;
    const target_language = document.getElementById('targetLanguage').value;

    const url = "https://google-translate113.p.rapidapi.com/api/v1/translator/text";
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': 'YOUR-API-KEY',
            'X-RapidAPI-Host': 'google-translate113.p.rapidapi.com'
        },
        body: new URLSearchParams({
            from: source_language,
            to: target_language,
            text: text
        })
    };

    // Verificar si el texto está vacío
    if (!text.trim()) {
        alert("Por favor, introduce el texto a traducir.");
        return;
    }

    const translationResultTextarea = document.getElementById('translationResult');

    // Alert para confirmar el idioma actual
    const confirmLanguage = confirm(`¿Está seguro de que el texto a traducir está en ${source_language.toUpperCase()}?`);
    if (!confirmLanguage) {
        return;
    }

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        if (result && result.trans) {
            const translatedText = result.trans;
            translationResultTextarea.value = translatedText;
            translationResultTextarea.style.display = 'block';
        } else {
            translationResultTextarea.value = 'No se encontró traducción';
            translationResultTextarea.style.display = 'block';
        }
    } catch (error) {
        console.error(error);
        translationResultTextarea.value = 'Error al traducir';
        translationResultTextarea.style.display = 'block';
    }
}