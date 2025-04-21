export async function GET() {
  const now = new Date().toISOString();
  return Response.json({ time: now });
}
