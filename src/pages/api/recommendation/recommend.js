import axios from "axios";
const API_URL = "http://trumio.pythonanywhere.com/recommend";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY

async function generateMessages(userPrompt) {
  const url = `/api/recommendation/userDetails/`;
  const response = await axios.get(url);
  const listOfWords = response.data;
  const messages = {
    key_words: listOfWords,
    prompt: userPrompt
  };
  return messages;
}

export async function recommendEngine(messages) {
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
      },
      body: JSON.stringify(messages),
    });

    // Read the response as a stream of data
    const res_message = await response.json();
    return res_message['keys'];
  } catch (error) {
    // Handle fetch request errors
    console.error(error)
  }
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
        max_tokens: 1000,
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
    console.log(error);
  }
}

export default async function recommend(statement) {
  const messages = await generateMessages(statement);
  const json_response = await recommendEngine(messages);
  return json_response;
}
