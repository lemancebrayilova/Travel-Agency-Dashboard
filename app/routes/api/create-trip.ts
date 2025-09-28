import { GoogleGenerativeAI } from "@google/generative-ai";
import type { ActionFunctionArgs } from "react-router";

export const action = async ({ request }: ActionFunctionArgs) => {
    const {
        country,
        numberOfDays,
        travelStyle,
        interests,
        budget,
        groupType,
        userId,
    } = await request.json();

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const unsplashApiKey = process.env.UNSPLASH_ACCESS_KEY!;

    try {
        const prompt = `
            Generate a ${numberOfDays}-day itinerary for ${country} based on the follow info:
            Budget: '${budget}}'
            Interests: '${interests}'
            
        `;
    } catch (e) {
        console.error('Error generating travel plan: ', error);
    }
}