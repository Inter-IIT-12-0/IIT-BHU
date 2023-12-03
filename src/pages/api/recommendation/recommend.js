import axios from "axios";
const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
// // Usage
// getAllUniqueKeywords()
//   .then((result)= > {
// console.log(result)
//})
//   .catch((error)= > {
// console.error(error)
// })
async function generateMessages(userPrompt) {
  const url = `/api/recommendation/userDetails/`;
  console.log(url);
  const response = await axios.get(url)
  const listOfWords = response.data
  console.log(listOfWords);
  const messages = [
    {
      role: "system",
      content:
        "Extract tags from the paragraph input by the user and output the related tags only from this list," +
        listOfWords +
        ". Return in form of JS list in order of weight of their importance wrt to the paragraph. No other text.",
    },
    { role: "user", content: userPrompt },
  ];
  // console.log(messages);
  return messages;
}

async function GPT(messages) {
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
        max_tokens: 100,
      }),
    });

    // Read the response as a stream of data
    const res_message = await response.json();
    console.log("response",res_message);
    const message = res_message["choices"][0]["message"]["content"];

    return JSON.parse(message);
  } catch (error) {
    // Handle fetch request errors
  }
}

export default async function recommend(statement) {
  const messages = await generateMessages(
    statement
  );
  // console.log(messages);
  const json_response = await GPT(messages);
  return json_response;
  // return json_response;
  // "I am currently in search of a talented frontend developer to join our dynamic team. The ideal candidate should possess a strong proficiency in HTML, CSS, and JavaScript, with a keen eye for detail in crafting visually appealing and user-friendly interfaces. You will play a crucial role in translating design mockups into responsive and interactive web applications. Experience with modern frontend frameworks such as React, Angular, or next.js is highly desirable. As a frontend developer, you will collaborate closely with our design and backend teams to ensure seamless integration and optimal user experiences."
}
