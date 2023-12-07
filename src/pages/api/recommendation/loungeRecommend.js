import { GPT } from "./recommend";
import axios from "axios";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(alldomains, userdomain) {
    const messages = [
        {
            role: "system",
            content:
                "I am proving you an array of all domains present across our discussion channels, and user domain in my user prompt and i want you to return the domains which are close enough to user's domain so that he will be recommended the best options as recommendation, all possible domains listed across are" +
                JSON.stringify(alldomains) +
                '. Return in the form of an array only. For example, ["Domain 1", "Domain 2"]. . No other extra text should be in the response other than array ',
        },
        { role: "user", content: "The user domain is " + userdomain },
    ];
    return messages;
}

export default async function recommendLounge(alldomains,userdomain) {
    const messages = await generateMessages(alldomains,userdomain);
    const json_response = await GPT(messages);
    return json_response;
    // res.status(200).json(json_response);
}