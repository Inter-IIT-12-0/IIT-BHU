// Used to generate sub-milestones for a user using GPT
import { GPT } from "../GPT/statementBreakdown";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(milestones) {
  milestones = JSON.stringify(milestones);
  const messages = [
    {
      role: "system",
      content: `Divide the provided milestones into detailed sub-tasks to create a comprehensive checklist. Produce a JSON response containing each milestone, accompanied by its description. For each milestone, include a list of submilestones with their descriptive descriptions and an "iscompleted" property set to false for each submilestone. Ensure that the number of milestones in the output matches the number of unique milestones provided by the user and does not exceed that count. The response should strictly adhere to the JSON format, and no other text should be included.
      No text other than JSON. Return JSON structure is as follows:
      
      {
        "Milestone 0": {
          "Submilestones": [
            {
              "work": "....",
              "IsCompleted": false
            },
            {
              "work": "....",
              "IsCompleted": false
            },
            ]
        }
        ....
      }
      `,
    },
    { role: "user", content: milestones },
  ];
  return messages;
}

export default async function createSubMilestones(milestones) {
  const messages = await generateMessages(milestones);
  const json_response = await GPT(messages);
  return json_response;
}
