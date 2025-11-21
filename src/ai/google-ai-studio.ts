import { google } from "@ai-sdk/google";
import { generateText, streamText } from "ai";

export type GoogleGenerativeAIModelId = Parameters<typeof google>[0];

export async function generateStream(
  geminiId: GoogleGenerativeAIModelId,
  prompt: string,
  streamRes: boolean = true
) {
  const model = google(geminiId);

  const result = streamRes
    ? streamText({
        model,
        prompt,
      })
    : generateText({
        model,
        prompt,
      });

  return result;
}

// generateStream("gemini-2.5-flash", "write 1000 word esay on ai.").then(
//   async (res) => {
//     if ("textStream" in res) {
//       for await (const chunk of res.textStream) {
//         process.stdout.write(chunk);
//       }
//       console.log("\n");
//     } else {
//       console.log(res.text);
//     }
//   }
// );
