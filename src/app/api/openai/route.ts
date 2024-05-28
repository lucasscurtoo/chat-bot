import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

export async function POST(req: Request, res: Response){
  const { messages } = await req.json()

  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'Example text.'
      },
      ...messages
    ],
    stream: true,
    temperature: 1,
  })


  const stream = OpenAIStream(response)

  return new StreamingTextResponse(stream)
}
