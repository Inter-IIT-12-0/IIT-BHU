export default function messageGenerator(domain, tool, input) {
  // Define system prompts based on domain and tool
  console.log(input)
  const systemPrompts = {
    "Engineering": {
      "Write Technical Specifications":
        "You are an experienced engineer tasked with writing technical specifications. Provide detailed documentation.",
      "Bug Report":
        "You are an engineer reporting a bug. Describe the issue and steps to reproduce.",
      "Generate Code Snippet":
        "You are a programmer creating a code snippet. Generate a concise and functional code snippet.",
      "Penetration Test Report":
        "You are a security expert conducting a penetration test. Document the findings and recommendations.",
      "Help Documentation":
        "You are creating help documentation for a software tool. Write clear and informative instructions.",
      "Test Plan":
        "You are a QA engineer developing a test plan. Outline the testing strategy and criteria.",
      "Data Visualisation":
        "You are a data analyst creating a visual representation of data. Design an effective data visualization.",
      "Data Analysis":
        "You are a data scientist analyzing a dataset. Provide insights and conclusions based on the data.",
    },
    "Research Documentation": {
      "Summarizes Text": "You are summarizing text.",
      "Analyses and Finds Resources":
        "You are analyzing and finding resources.",
    },
    // Add more domains as needed
  };

  const toolPrompt = systemPrompts[domain]?.[tool];
  const userPrompt = generateUserPrompt(domain, tool, input);

  const messages = [
    { role: "system", content: toolPrompt },
    { role: "user", content: userPrompt },
  ];

  // console.log(messages)

  return messages;
}

// Function to generate the user prompt based on the tool input parameters
function generateUserPrompt(domain, tool, input) {
  switch (domain) {
    case "Engineering":
      return generateEngineeringPrompt(tool, input);

    case "Research Documentation":
      return generateResearchDocumentationPrompt(tool, input);

    // Add more cases for additional domains if needed

    default:
      return ""; // Default case if no specific user prompt is defined for the domain
  }
}

// Function to generate the user prompt for Engineering domain
function generateEngineeringPrompt(tool, input) {
  switch (tool) {
    case "Write Technical Specifications":
      return `Provide detailed technical specifications based on the given requirements (${input.businessRequirements}), systems involved (${input.systemsInvolved}), and best practices (${input.bestPractices}).`;

    case "Bug Report":
      return `Describe the bug you encountered. Include any context (${input.context}) or steps to reproduce the issue if available.`;

    case "Generate Code Snippet":
      return `Write code for ${input.codeTask} in ${input.codeLanguage}.`;

    case "Penetration Test Report":
      return `Document the findings and recommendations from the penetration test. Include the test scope (${input.testScope}), system architecture (${input.systemArchitecture}), and test results (${input.testResults}).`;

    case "Help Documentation":
      return `Create documentation to help users understand a feature or product. Include information about the feature (${input.feature}), product (${input.product}), and any additional information.`;

    case "Test Plan":
      return `Develop a test plan for testing a system or feature. Include details about business requirements (${input.businessRequirements}), systems involved (${input.systemsInvolved}), technical design (${input.technicalDesign}), output category (${input.outputCategory}), and testing type (${input.testingType}).`;

    default:
      return ""; // Default case if no specific user prompt is defined for the tool
  }
}

// Function to generate the user prompt for Research Documentation domain
function generateResearchDocumentationPrompt(tool, input) {
  switch (tool) {
    case "Summarizes Text":
      return `Summarize the given text (${input.text}) to provide a concise overview.`;

    case "Analyses and Finds Resources":
      return `Analyze a given use case (${input.useCase}) and find relevant resources.`;

    default:
      return ""; // Default case if no specific user prompt is defined for the tool
  }
}
