import { NextResponse } from 'next/server';

// This would typically be an environment variable
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_TRANSCRIPTION_SESSION_URL = 'https://api.openai.com/v1/realtime/transcription_sessions';

export async function POST(_request: Request) {
  if (!OPENAI_API_KEY) {
    console.error('OpenAI API key is not configured.');
    return NextResponse.json({ error: 'OpenAI API key not configured' }, { status: 500 });
  }

  try {
    // TODO: Potentially get some configuration from the request body if needed
    // const clientConfig = await request.json(); 

    const payload = {
      // input_audio_format: clientConfig.input_audio_format || 'pcm16', // Or keep it fixed
      // input_audio_transcription: {
      //   model: clientConfig.model || 'gpt-4o-transcribe',
      //   language: clientConfig.language || 'en',
      //   prompt: clientConfig.prompt || 'Transcribe the incoming audio.'
      // },
      // turn_detection: clientConfig.turn_detection || { type: "server_vad", silence_duration_ms: 1000 }
      // For MVP, we can start with fixed reasonable defaults for session creation
      input_audio_format: 'pcm16',
      input_audio_transcription: {
        model: 'gpt-4o-transcribe',
        language: 'en' // Default language, could be passed from client
      },
      turn_detection: { type: "server_vad", silence_duration_ms: 1000 }
    };

    const response = await fetch(OPENAI_TRANSCRIPTION_SESSION_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
        'OpenAI-Beta': 'assistants=v2' // As per OpenAI examples for session creation
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`OpenAI API error: ${response.status} ${response.statusText}`, errorBody);
      return NextResponse.json({ error: `OpenAI API error: ${response.statusText}`, details: errorBody }, { status: response.status });
    }

    const data = await response.json();
    const ephemeralToken = data?.client_secret?.value;

    if (!ephemeralToken) {
      console.error('Ephemeral token not found in OpenAI response:', data);
      return NextResponse.json({ error: 'Ephemeral token not found in OpenAI response' }, { status: 500 });
    }

    console.log('Successfully created OpenAI transcription session and obtained ephemeral token.');
    return NextResponse.json({ ephemeralToken });

  } catch (error: unknown) {
    let errorMessage = 'Internal server error';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.error('Error creating OpenAI transcription session:', error);
    return NextResponse.json({ error: 'Internal server error', details: errorMessage }, { status: 500 });
  }
} 