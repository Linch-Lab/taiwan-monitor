// Taiwan Monitor: minimal bootstrap — returns empty defaults
export default function handler(req, res) {
  res.status(200).json({ ok: true, result: {} });
}
