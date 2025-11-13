
import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    console.warn("API_KEY environment variable not set. AI features will not work.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY! });

export const getAiResponse = async (context: string, question: string): Promise<string> => {
    if (!API_KEY) {
        return "AI service is not available. Please configure the API key.";
    }

    try {
        // FIX: Use systemInstruction to provide context and instructions to the model, which is a better practice.
        const systemInstruction = `Based on the following document content, please answer the user's question. Be concise and helpful. If the question cannot be answered from the document, say that the information is not available in the provided text.`;
        const prompt = `DOCUMENT:\n---\n${context}\n---\n\nQUESTION: ${question}`;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                systemInstruction,
            },
        });

        return response.text;
    } catch (error) {
        console.error("Error fetching AI response:", error);
        return "Sorry, I encountered an error trying to process your request.";
    }
};
