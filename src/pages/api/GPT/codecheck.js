import { GPT } from "../recommendation/recommend";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(code) {
  const usercode = JSON.stringify(code);
  const messages = [
    {
      role: "system",
      content: `I will provide you a code. Ensure that it is the program to print "Hello World" in C++. i.e., Test whether it is cout << "Hello World"; or not. If the provided code is correct with no compilation errors and prints "Hello World", return 1 in the response. Else, return 0. 
      The response should be strictly 0 or 1 only. If any error in understanding the code I have provided,  return 0
      `,
    },                                         
    { role: "user", content: usercode },
  ];
  return messages;
}

export default async function codecheck(code) {
  const messages = await generateMessages(code);
  const json_response = await GPT(messages);
  console.log(json_response);
  return json_response;
}
