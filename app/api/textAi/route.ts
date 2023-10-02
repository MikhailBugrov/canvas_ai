import { NextResponse, NextRequest } from 'next/server';
import OpenAI from 'openai';

import generatePrompt from '@/utils/generatePrompt';
import openaiConfig from '@/utils/openaiConfig';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { userInput } = body;

    if (!userInput) {
      return new NextResponse('User input is required', { status: 400 });
    }

    const response = await openai.completions.create({
      ...openaiConfig,
      prompt: generatePrompt(userInput)
    });

    return NextResponse.json({ result: response.choices[0].text });
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
