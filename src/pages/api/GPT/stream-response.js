/**
 * This code demonstrates how to use the OpenAI API to generate chat completions.
 * The generated completions are received as a stream of data from the API and the
 * code includes functionality to handle errors and abort requests using an AbortController.
 * The API_KEY variable needs to be updated with the appropriate value from OpenAI for successful API communication.
 */
import messageGenerator from "./messageGenerator";

const API_URL = "https://api.openai.com/v1/chat/completions";
// const API_KEY = "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";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

let controller = null; // Store the AbortController instance

export const generate = async (domain, tool, input, result, setResult) => {
  // Alert the user if no prompt value
  console.log(process.env.NEXT_PUBLIC_OPENAI_API_KEY);
  if (!input) {
    alert("Please enter a prompt.");
    return;
  }

  // Disable the generate button and enable the stop button
  setResult("Generating...");

  // Create a new AbortController instance
  controller = new AbortController();
  const signal = controller.signal;

  try {
    const messages = messageGenerator(domain, tool, input);
    console.log(messages);
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
        max_tokens: 200,
        stream: true, // For streaming responses
      }),
      signal, // Pass the signal to the fetch request
    });

    // Read the response as a stream of data
    const reader = response.body.getReader();
    const decoder = new TextDecoder("utf-8");
    setResult("");
    result = ""
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }
      // Massage and parse the chunk of data
      const chunk = decoder.decode(value);
      const lines = chunk.split("\n");
      const parsedLines = lines
        .map((line) => line.replace(/^data: /, "").trim()) // Remove the "data: " prefix
        .filter((line) => line !== "" && line !== "[DONE]") // Remove empty lines and "[DONE]"
        .map((line) => JSON.parse(line)); // Parse the JSON string

      for (const parsedLine of parsedLines) {
        const { choices } = parsedLine;
        const { delta } = choices[0];
        const { content } = delta;
        // Update the UI with the new content
        if (content) {
          setResult(result + content);
          result += content
        }
      }
    }
  } catch (error) {
    // Handle fetch request errors
    if (signal.aborted) {
      setResult("Request aborted.");
    } else {
      /* console.error("Error:", error); */
      console.log(domain, tool, input, result, setResult);
      setResult("Error occurred while generating.");
    }
  } finally {
    // Enable the generate button and disable the stop button
    controller = null; // Reset the AbortController instance
  }
};

export const stop = (controller, setResult) => {
  // Abort the fetch request by calling abort() on the AbortController instance
  setResult("Stopped");
  if (controller) {
    controller.abort();
    controller = null;
  }
};
