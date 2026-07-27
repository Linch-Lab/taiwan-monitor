export const config = { runtime: 'edge' };
export async function GET() {
  return Response.json({ ok: true, brief: '', summary: '' });
}
