import { recommendEngine } from "./recommend";
import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(userPrompt) {
    const url = `/api/recommendation/projectDetails`;
    const response = await axios.get(url)
    const listOfWords = response.data
    const messages = {
        key_words: listOfWords,
        prompt: userPrompt
    };
    return messages;
}

export default async function recommendProject(statement) {
    const messages = await generateMessages(statement);
    const json_response = await recommendEngine(messages);
    return json_response;
}