import { NextResponse } from 'next/server';
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export function POST(req: Request) {
  try {
  } catch (error) {
    console.log('[CONVERSATION_ERROR]', error);
    return new NextResponse('Interval error', { status: 500 });
  }
}
