# Medical Chatbot Frontend

This is the frontend for the medical chatbot application. It allows users to ask medical-related questions and receive responses from a backend server powered by Google Generative AI.

## Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/medical-chatbot-front.git
   cd medical-chatbot-front
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

## Running the Application

1. Start the backend server:

   ```bash
   node server.js
   ```

2. Start the frontend application:

   ```bash
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000` to use the application.

## Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```
GOOGLE_GEN_AI_KEY=your-google-generative-ai-key
```

## Usage

- Enter your question in the input field and click "მკითხე" to get a response.
- Click "გასუფთავება" to clear the chat history.
- Click "კითხვის გენერირება!" to generate a random question.

## Project Structure

- `src/App.js`: Main React component for the frontend application.
- `server.js`: Backend server code to handle chat requests.

## License

This project is licensed under the MIT License.