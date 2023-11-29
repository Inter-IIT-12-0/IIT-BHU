// /app/gpt/page.tsx
"use client"
// pages/index.js
import { useState } from "react";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import ResultDisplay from "../../components/ResultDisplay";
import { generate, stop } from "../../pages/api/GPT/stream-response";

export default function Home() {
  const [result, setResult] = useState("");
  const [controller, setController] = useState(null);

  const handleGenerate = async (codeTask, codeLanguage) => {
    // ... (your existing input validation)
    await generate("Engineering", "Generate Code Snippet", { "codeTask": "Hello World Program", "codeLanguage": "C"}, result, setResult);
  };

  const handleStop = () => {
    stop(controller, setResult);
  };

  return (
    <div>
      <Button onClick={handleGenerate} label="Generate" />
      <br/>
      <Button onClick={handleStop} label="Stop" />
      <br/>
      <ResultDisplay result={result} />
    </div>
  );
}
