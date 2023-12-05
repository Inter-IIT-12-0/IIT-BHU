import axios from "axios";
const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(userPrompt) {
  const url = `/api/recommendation/userDetails/`;
  const response = await axios.get(url);
  const listOfWords = response.data;
  const messages = [
    {
      role: "system",
      content:
        "Extract tags from the paragraph input by the user (don't respond to user's question. Just extract the tags) and output the related tags only from this list," +
        listOfWords +
        '. Return in form of array only in order of weight of their importance wrt to the paragraph. No other text. For example, ["Tag 1", "Tag 2"].  Return empty array if no project found or any context is missing. No other extra text should be in the response other than array',
    },
    { role: "user", content: userPrompt },
  ];
  return messages;
}

export async function GPT(messages) {
  // Alert the user if no prompt value
  if (messages.length === 0) {
    alert("Please enter a prompt.");
    return;
  }

  try {
    // Fetch the response from the OpenAI API with the signal from AbortController
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: messages,
        max_tokens: 500,
      }),
    });

    // Read the response as a stream of data
    const res_message = await response.json();
    const message = res_message["choices"][0]["message"]["content"];
    const signal = res_message["choices"][0]["finish_reason"];
    if (signal !== "length") {
      console.log(message);
      return JSON.parse(message);
    }
    return { Error: "Token limit insufficient." };
  } catch (error) {
    // Handle fetch request errors
  }
}

export default async function recommend(statement) {
  const messages = await generateMessages(statement);
  // console.log(messages);
  const json_response = await GPT(messages);
  return json_response;
}
