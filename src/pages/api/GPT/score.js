import { GPT } from "../recommendation/recommend";

const API_URL = "https://api.openai.com/v1/chat/completions";
const API_KEY = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

function getDistinctDomainsByTeam(teams) {
  const result = {};

  teams.forEach((team) => {
    const teamId = team._id; // Assuming your team ID field is named _id
    const distinctDomains = Array.from(new Set(team.teamUserMap.map((user) => user.domain)));

    result[`team ${teamId}`] = distinctDomains;
  });

  return result;
}

async function generateMessages(obj,ps) {
  
  const statement = JSON.stringify(ps) + ":" + JSON.stringify(obj);
  const messages = [
    {
      role: "system",
      content: `I am providing you a problem statement and detaching through a delimeter : a skillset of each team against their ids for some Client requirements  which has multiple teams participating in it i want you to provide me some probbaility of each team of getting their bid accepted through some model the teams skills against their teamId will be mentioned to you in the statement Now i want you to apply normalisation and stuff and other things and give me mathematical probbaility associated with each team of getting their bid accepted the output should be in JSON format as
      {
        team1 :"..",
        team2 :"...",
        ...
      }
      where the blank space contains mathematical probability which is also normalised 
      `,
    },
    { role: "user", content: statement },
  ];
  return messages;
}

export default async function score(teams,ps) {
  const obj = getDistinctDomainsByTeam(teams);
  const messages = await generateMessages(obj,ps);
  console.log(messages);
  //   console.log(messages);
  const json_response = await GPT(messages);
  console.log(json_response);
  return json_response;
}
