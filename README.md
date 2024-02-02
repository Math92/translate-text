# Text Translator Application

This application is a simple text translator that uses an external API to translate text from one language to another. It is built using HTML, CSS, and JavaScript, making it easily deployable on any web server.

## Features

- **Language Selection**: Users can select both the source and target languages from a predefined list.
- **Text Input**: A textarea is provided for users to input the text they wish to translate.
- **Translation Execution**: A button triggers the translation process.
- **Translation Display**: Translated text is displayed in a separate, read-only textarea.

## How It Works

The main functionality is encapsulated in an asynchronous JavaScript function `translateText()`, which performs the following steps:

1. Collects user input including the text to translate and the source and target languages.
2. Constructs a request to an external translation API.
3. Sends the request and handles the response by displaying the translated text in the UI.

## User Interface

The application's UI is straightforward, consisting of:

- A header with an application title image.
- Dropdown menus for selecting the source and target languages.
- A textarea for inputting the text to be translated.
- A button to initiate the translation.
- A textarea to display the translated text.

## External Dependencies

- **Bootstrap**: Used for styling the application and making it responsive.
- **External Translation API**: The application relies on an external API for text translation, which requires an API key for access.

## Setup

To run this application, simply open the HTML file in a web browser. Ensure you have an internet connection to access the external translation API.

## Security Note

The included JavaScript file contains an API key for the translation service. In a production environment, it's crucial to secure this key to prevent unauthorized use.

## Contribution

Contributions to this project are welcome. Please fork the repository and submit a pull request with your proposed changes or improvements.