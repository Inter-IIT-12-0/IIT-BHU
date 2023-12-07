import { GPT } from "../recommendation/recommend";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

async function generateMessages(object) {
  
  const messages = [
    {
      role: "system",
      content: `I am providing you an Activity associated with some sub Milestones and task of a project which contains an array of any updates on any of the subTask/subMilestones. I want a summarised report for each subTask in JSON format as
      {
        "subMilestone1" : Summary of submilestone1,
        "subMilestone2" : Summary of submilestone2,
        ......

      }
      `,
    },
    { role: "user", content: JSON.stringify(object)},
  ];
  return messages;
}

export default async function summariseActivity(object) {
  const messages = await generateMessages(object);
  const json_response = await GPT(messages);
  console.log(json_response);
  return json_response;
}
