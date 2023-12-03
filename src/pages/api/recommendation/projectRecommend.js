import { GPT } from "./userRecommend";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(userPrompt) {
  const url = `${process.env.NEXTAUTH_URL}/api/recommendation/projectDetails`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch project details.");
  }
  const keyWords = await response.json();
  const listOfWords = JSON.stringify(keyWords);
  const messages = [
    {
      role: "system",
      content:
        "Extract tags from the paragraph input by the user and output the related tags, using words only from this list," +
        listOfWords +
        ". Return in form of JS list [...,...]. Return empty list [] if none found. No other text should be output.",
    },
    { role: "user", content: userPrompt },
  ];
  return messages;
}

export default async function recommend(req, res) {
  const messages = await generateMessages("Project in engineering domain.");
  const json_response = await GPT(messages);
  res.status(200).json(json_response);
}
