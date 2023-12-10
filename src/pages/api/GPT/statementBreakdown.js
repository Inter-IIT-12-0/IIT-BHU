

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

async function generateMessages(statement) {
  
  const messages = [
    {
      role: "system",
      content: `The given statement is a problem statement given by a client so in order to allow the Talents to better understand the statement and the flow of the requirements elaborate the problem statement accordingly and provide the new problem statement which can include some technnical specifications as well, in JSON format only
      No text other than JSON. JSON should only contain the newstatement. And newstatement should be of string type only also keep in mind that it should be elaborative and must be of length greater then the provided buyt should be in a single paragraph format only and no spacing between the paragraphs. Return JSON structure is as follows:
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
  const json_response = await GPT(messages);
  return json_response;
}
