// Used for Lounge Recommendation
import { recommendEngine } from "./recommend";

async function generateMessages(alldomains, userdomain) {
  const messages = {
    key_words: alldomains,
    prompt: userdomain.toString()
  };
  return messages;
}

export default async function recommendLounge(alldomains, userdomain) {
  const messages = await generateMessages(alldomains, userdomain);
  const json_response = await recommendEngine(messages);
  return json_response;
}
