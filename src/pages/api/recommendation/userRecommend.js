const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(userPrompt) {
  const url = `${process.env.NEXTAUTH_URL}/api/recommendation/userDetails`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch user details");
  }
  const keyWords = await response.json();
  const listOfWords = JSON.stringify(keyWords);
  const messages = [
    {
      role: "system",
      content:
        "Extract tags from the paragraph input by the user and output the related tags, using words only from this list," +
        listOfWords +
        ". Return in form of JS list [...,...]. Return empty list [] if none found. No other text should be output.",
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
        max_tokens: 100,
      }),
    });

    // Read the response as a stream of data
    const res_message = await response.json();
    const message = res_message["choices"][0]["message"]["content"];

    return JSON.parse(message);
  } catch (error) {
    // Handle fetch request errors
  }
}

export default async function recommend(req, res) {
  const messages = await generateMessages(
    "I am currently in search of a talented frontend developer to join our dynamic team. The ideal candidate should possess a strong proficiency in HTML, CSS, and JavaScript, with a keen eye for detail in crafting visually appealing and user-friendly interfaces. You will play a crucial role in translating design mockups into responsive and interactive web applications. Experience with modern frontend frameworks such as React, Angular, or next.js is highly desirable. As a frontend developer, you will collaborate closely with our design and backend teams to ensure seamless integration and optimal user experiences."
  );
  const json_response = await GPT(messages);
  res.status(200).json(json_response);
}
