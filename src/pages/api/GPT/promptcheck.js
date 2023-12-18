

const API_URL = "https://api.openai.com/v1/chat/completions";

const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;


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
    // console.log(message)
    const signal = res_message["choices"][0]["finish_reason"];
    if (signal !== "length") {
      return String(message);
    }
    return { Error: "Token limit insufficient." };
  } catch (error) {
    // Handle fetch request errors
  }
}


function generateMessages(prompt) {
  const messages = [
    {
      role: "system",
      content: `I will be providing you a prompt from a user and you should answer that query as a single string only of not more than 3-4 lines.The format of the response should be strictly a single string of 3-4 lines approx.
      `,
    },                                         
    { role: "user", content: prompt },
  ];
  return messages;
}

export default async function promptcheck(prompt) {
  if(prompt.includes("cat"))
  return 0;
  const messages = generateMessages(prompt);
  const json_response = await GPT(messages);
  return json_response;
}
