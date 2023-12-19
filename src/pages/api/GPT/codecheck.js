

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
    const signal = res_message["choices"][0]["finish_reason"];
    if (signal !== "length") {
      return JSON.parse(message);
    }
    return { Error: "Token limit insufficient." };
  } catch (error) {
    // Handle fetch request errors
  }
}


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
  return json_response;
}
