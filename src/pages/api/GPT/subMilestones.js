import { GPT } from "../recommendation/recommend";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(milestones) {
  milestones = JSON.stringify(milestones);
  const messages = [
    {
      role: "system",
      content: `Divide the given milestones into multiple sub-tasks to be done, to be used as a checklist. Milestone 0 is "Start of the Project". Return your response as a JSON containing Milestone, its description, under it, submilestone with its description and iscompleted property for each submilestone, set to false. 
      No text other than JSON. Return JSON structure is as follows:
      
      {
        "Milestone 0": {
          "Description": "....,",
          "Submilestones": [
            {
              "Description": "....",
              "IsCompleted": false
            },
            {
              "Description": "....",
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
  //   console.log(messages);
  const json_response = await GPT(messages);
  console.log(json_response);
  return json_response;
}
