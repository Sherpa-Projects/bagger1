// src/app/api/health/route.ts

export const runtime = 'nodejs'; // erzwingt Node statt Edge-Runtime

export async function GET() {
  return new Response(
    JSON.stringify({ ok: true, timestamp: Date.now() }),
    { status: 200, headers: { 'Content-Type': 'application/json' } }
  );
}