import { GPT } from "./recommend";
import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(userPrompt) {
    const url = `/api/recommendation/projectDetails`;
    console.log(url);
    const response = await axios.get(url)
    const listOfWords = response.data
    console.log(listOfWords);
    const messages = [
        {
            role: "system",
            content:
                "Extract tags from the paragraph input by the user (don't respond to user's question. Just extract the tags) and output the related tags, using words only from this list, " +
                listOfWords +
                '. Return in the form of an array only. For example, ["Tag 1", "Tag 2"]. Return empty array if no project found or any context is missing. No other extra text should be in the response other than array',
        },
        { role: "user", content: userPrompt },
    ];
    return messages;
}

export default async function recommendProject(statement) {
    const messages = await generateMessages(statement);
    const json_response = await GPT(messages);
    return json_response;
    // res.status(200).json(json_response);
}