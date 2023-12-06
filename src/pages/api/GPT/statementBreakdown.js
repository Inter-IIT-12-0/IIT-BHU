import { GPT } from "../recommendation/recommend";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(statement) {
  
  const messages = [
    {
      role: "system",
      content: `The given statement is a problem statement given by a client so in order to allow the Talents to better understand the statement and the flow of the requirements elaborate the problem statement accordingly and provide the new problem statement which can include some technnical specifications as well, in JSON format only
      No text other than JSON. Return JSON structure is as follows:
      {
        "newstatement":".........",
      }
      `,
    },
    { role: "user", content: statement },
  ];
  return messages;
}

export default async function createStatement(statement) {
  const messages = await generateMessages(statement);
  //   console.log(messages);
  const json_response = await GPT(messages);
  console.log(json_response);
  return json_response;
}
