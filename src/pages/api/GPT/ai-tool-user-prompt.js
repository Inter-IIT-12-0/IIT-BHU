export default function aiToolUserPrompt(domain, tool, userInput, messages,setMessages) {
    if (messages.length === 0) {
      messages.push({
        role: "system",
        content: `You are an expert in ${domain} domain, used as/for ${tool}.`,
      });
    }
    messages.push({ role: "user", content: userInput });
    setMessages(messages);
  };