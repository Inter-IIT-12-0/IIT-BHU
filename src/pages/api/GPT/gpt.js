import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function GPT(messages) {
  try {
    console.log(messages)

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: messages,
      temperature: 0,
      max_tokens: 10,
    });

    console.log(response.choices[0].finish_reason)

    return response.choices[0]?.message.content.trim() || 'No response from GPT-3.5 Turbo';
  } catch (error) {
    console.error('Error calling GPT-3.5 Turbo API:', error.message);
    throw error;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { domain, tool, input } = req.body;

  if (!domain || !tool || !input) {
    return res.status(400).json({ error: 'Domain, tool, and input are required' });
  }

  // Define system prompts based on domain and tool
  const systemPrompts = {
    'Engineering': {
      'Write Technical Specifications': 'You are an experienced engineer tasked with writing technical specifications. Provide detailed documentation.',
      'Bug Report': 'You are an engineer reporting a bug. Describe the issue and steps to reproduce.',
      'Generate Code Snippet': 'You are a programmer creating a code snippet. Generate a concise and functional code snippet.',
      'Penetration Test Report': 'You are a security expert conducting a penetration test. Document the findings and recommendations.',
      'Help Documentation': 'You are creating help documentation for a software tool. Write clear and informative instructions.',
      'Test Plan': 'You are a QA engineer developing a test plan. Outline the testing strategy and criteria.',
      'Data Visualisation': 'You are a data analyst creating a visual representation of data. Design an effective data visualization.',
      'Data Analysis': 'You are a data scientist analyzing a dataset. Provide insights and conclusions based on the data.',
    },
    // Add more domains as needed
  };

  const toolPrompt = systemPrompts[domain]?.[tool];

  if (!toolPrompt) {
    return res.status(400).json({ error: 'Invalid domain or tool' });
  }

  const messages = [
    { role: "system", content: toolPrompt },
    { role: "user", content: input },
  ];

  try {
    const output = await GPT(messages);
    res.status(200).json({ output });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
