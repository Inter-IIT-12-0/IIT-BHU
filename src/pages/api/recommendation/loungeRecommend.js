import { recommendEngine } from "./recommend";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(alldomains, userdomain) {
  const messages = {
    key_words: alldomains,
    prompt: userdomain.toString()
  };
  return messages;
}

export default async function recommendLounge(alldomains, userdomain) {
  const messages = await generateMessages(alldomains, userdomain);
  const json_response = await recommendEngine(messages);
  return json_response;
  // res.status(200).json(json_response);
}
