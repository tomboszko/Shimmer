import * as fs from "fs";
import * as path from "path";
import OpenAI from "openai";

const openai = new OpenAI({
        apiKey: ''
});

const speechFile = path.resolve("./speech.mp3");

async function main() {
    try {
        const mp3 = await openai.audio.speech.create({
            model: "tts-1",
            voice: "shimmer",
            input: "Today is a wonderful day to build something people love!",
        });
        console.log(speechFile);
        const buffer = Buffer.from(await mp3.arrayBuffer());
        await fs.promises.writeFile(speechFile, buffer);
    } catch (error) {
        console.error(`An error occurred: ${error.message}`);
    }
}

main();