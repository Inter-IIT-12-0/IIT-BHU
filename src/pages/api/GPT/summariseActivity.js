
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
      console.log(message);
      return JSON.parse(message);
    }
    return { Error: "Token limit insufficient." };
  } catch (error) {
    // Handle fetch request errors
  }
}

async function generateMessages(object) {
  
  const messages = [
    {
      role: "system",
      content: `I am providing you an Activity associated with some sub Milestones and task of a project which contains an array of any updates on any of the subTask/subMilestones. I want a summarised report for each subTask in JSON format as
      {
        "subMilestone1" : Summary of submilestone1,
        "subMilestone2" : Summary of submilestone2,
        ......

      }
      `,
    },
    { role: "user", content: JSON.stringify(object)},
  ];
  return messages;
}

export default async function summariseActivity(object) {
  const messages = await generateMessages(object);
  const json_response = await GPT(messages);
  console.log(json_response);
  return json_response;
}
