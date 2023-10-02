import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { prompt, amount, resolution } = body;

    const response = await openai.images.generate({
      prompt,
      n: Number(amount),
      size: resolution
    });

    return NextResponse.json({ data: response.data });
  } catch (error) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}
