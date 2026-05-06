export const prerender = false;

export async function POST({ request }: { request: Request }) {
  const { audience, situation, tone, outcome } = await request.json();

  const apiKey = import.meta.env.ANTHROPIC_API_KEY;

  const response = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: JSON.stringify({
      model: 'claude-haiku-4-5',
      max_tokens: 1024,
      messages: [
        {
          role: 'user',
          content: `You are a professional communication expert. Write a clear, professional message for the following situation:

Audience: ${audience}
Situation: ${situation}
Desired tone: ${tone}
Desired outcome: ${outcome}

Write only the message itself, no preamble or explanation.`,
        },
      ],
    }),
  });

  const data = await response.json();
  const message = data.content[0].text;

  return new Response(JSON.stringify({ message }), {
    headers: { 'Content-Type': 'application/json' },
  });
}