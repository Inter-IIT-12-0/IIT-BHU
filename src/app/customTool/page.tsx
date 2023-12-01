"use client";
import { useState } from "react";
import { generate, stop } from "../../pages/api/GPT/conversation";
import aiToolUserPrompt from "../../pages/api/GPT/ai-tool-user-prompt";
import Button from "../../components/Button";
import ResultDisplay from "../../components/ResultDisplay";

export default function Home() {
  const [result, setResult] = useState("");
  const [controller, setController] = useState(null);

  const handleGenerate = async () => {
    // ... (your existing input validation)
    let messages = [];
    messages = aiToolUserPrompt(
      "Agriculture",
      "Assistant",
      "What is Wheat?",
      messages
    );
    messages = await generate(messages, result, setResult);
    console.log(messages);
    messages = aiToolUserPrompt(
      "Agriculture",
      "Assistant",
      "Repeat your previous response.",
      messages
    );
    messages = await generate(messages, result, setResult);
    console.log(messages);
  };

  const handleStop = () => {
    stop(controller, setResult);
  };

  return (
    <div>
      <Button onClick={handleGenerate} label="Generate" />
      <br />
      <Button onClick={handleStop} label="Stop" />
      <br />
      <ResultDisplay result={result} />
    </div>
  );
}
