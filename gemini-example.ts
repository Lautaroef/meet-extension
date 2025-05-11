import { GoogleGenerativeAI, GenerativeModel } from '@google/generative-ai'
import { GEMINI_API_KEY } from '@/constants'

// Ensure API keys are available (replace with your actual key handling)
if (!GEMINI_API_KEY) {
  console.error('GEMINI_API_KEY is missing or empty')
  // Optionally throw an error or handle appropriately
  // throw new Error('Gemini API key is missing or empty');
}

/**
 * Type for Gemini model names relevant to this simplified setup.
 */
export type GeminiModelName =
  | 'gemini-2.0-flash'
  | 'gemini-2.0-flash-lite'
  | 'gemini-2.5-pro-preview-03-25' // The Gemini 2.5 Pro model

/**
 * Initializes the GoogleGenerativeAI client.
 */
export const getGeminiClient = (): GoogleGenerativeAI => {
  if (!GEMINI_API_KEY) {
    // This check is technically redundant due to the top-level check,
    // but kept for clarity within the function.
    throw new Error('Gemini API key is missing or empty')
  }
  return new GoogleGenerativeAI(GEMINI_API_KEY)
}

/**
 * Gets a specific Gemini model instance, potentially configured with Helicone.
 *
 * @param modelName The name of the Gemini model to use.
 * @param systemInstruction Optional system instruction for the model.
 * @returns Configured GenerativeModel instance.
 */
export const getGeminiModel = (
  modelName: GeminiModelName,
  systemInstruction?: string,
): GenerativeModel => {
  const geminiClient = getGeminiClient()

  // Basic model parameters
  const modelParams: any = {
    model: modelName,
  }

  if (systemInstruction) {
    modelParams.systemInstruction = systemInstruction
  }

  // When Helicone API key is available, route through Helicone's gateway
  // if (HELICONE_API_KEY) {
  //   console.log('Configuring Gemini model with Helicone proxy...')
  //   return geminiClient.getGenerativeModel(modelParams, {
  //     baseUrl: 'https://gateway.helicone.ai',
  //     customHeaders: {
  //       'Helicone-Auth': `Bearer ${HELICONE_API_KEY}`,
  //       'Helicone-Target-URL': 'https://generativelanguage.googleapis.com',
  //     },
  //   } as any) // Use 'as any' to bypass potential strict type mismatches
  // }

  // Without Helicone, use direct connection
  console.log('Configuring Gemini model for direct connection...')
  return geminiClient.getGenerativeModel(modelParams)
}

/**
 * Calls the specified Gemini model with system and user prompts.
 *
 * @param modelName The Gemini model to use (e.g., 'gemini-2.5-pro-preview-03-25').
 * @param systemPrompt The system instruction for the model.
 * @param userPrompt The user's prompt.
 * @param temperature Optional temperature setting (default: 0.7).
 * @param maxTokens Optional max output tokens (default: 8192).
 * @param responseFormat Optional response format ('text' or 'json', default: 'text').
 * @returns The text response from the Gemini model.
 */
export async function callGemini(
  modelName: GeminiModelName,
  systemPrompt: string,
  userPrompt: string,
  temperature: number = 0.7,
  maxTokens: number = 8192,
  responseFormat: 'text' | 'json' = 'text',
): Promise<string> {
  try {
    const model = getGeminiModel(modelName, systemPrompt)

    const generationConfig = {
      temperature: temperature,
      maxOutputTokens: maxTokens,
      // Specify JSON output if requested
      ...(responseFormat === 'json' && {
        responseMimeType: 'application/json',
      }),
      // Add other generationConfig options like topP, topK if needed
    }

    const chatSession = model.startChat({
      generationConfig,
      history: [], // Start a new chat session for each call
    })

    const result = await chatSession.sendMessage(userPrompt)
    const response = result.response

    if (
      response.promptFeedback?.blockReason ||
      response.candidates?.[0]?.finishReason !== 'STOP'
    ) {
      console.error(
        'Gemini response potentially blocked or incomplete:',
        response.promptFeedback,
        response.candidates?.[0]?.finishReason,
      )
      // Handle blocked or incomplete responses appropriately
      throw new Error(
        `Gemini response blocked or incomplete. Reason: ${
          response.promptFeedback?.blockReason ||
          response.candidates?.[0]?.finishReason
        }`,
      )
    }

    return response.text()
  } catch (error) {
    console.error(`Error calling Gemini model ${modelName}:`, error)
    throw error // Re-throw the error for upstream handling
  }
}

// --- Example Usage (Optional - Uncomment to test) ---
/*
async function testGemini() {
  const modelToUse: GeminiModelName = 'gemini-2.0-flash'; // Use a model supporting JSON mode, e.g., flash
 
  try {
    // --- Text Example ---
    const systemText = 'You are a helpful assistant that provides concise answers.';
    const userText = 'Explain the concept of zero-shot learning in 2 sentences.';
    console.log(`Calling ${modelToUse} for text response...`);
    const responseText = await callGemini(modelToUse, systemText, userText);
    console.log('\nGemini Text Response:', responseText);

    // --- JSON Example ---
    const systemJson = `You are an expert data extractor. Given a block of text describing a job candidate, extract their name, years of experience, and primary skill. Respond ONLY with a valid JSON object containing the keys 'name', 'yearsExperience', and 'primarySkill'.`;
    const userJson = `Candidate profile: Alex Jordan has over 5 years of experience as a data scientist, with a core focus on machine learning using Python.`;
 
    console.log(`\nCalling ${modelToUse} for JSON response...`);
    // Ensure the model and prompt are suitable for JSON output
    const responseJsonString = await callGemini(
      modelToUse,
      systemJson,
      userJson,
      0.1, // Lower temp often better for structured output
      1024,
      'json', // Request JSON format
    );
    const responseJson = JSON.parse(responseJsonString); // Parse the JSON string
    console.log('\nGemini JSON Response:', responseJson);
    // Example accessing data: console.log("Candidate Name:", responseJson.name);
  } catch (e) {
    console.error('\nFailed to call Gemini:', e);
  }
}

testGemini(); // Call the test function if uncommented
*/
