export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Figma-Token');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const token = req.headers['x-figma-token'];
  if (!token) {
    return res.status(401).json({ error: 'Token não informado' });
  }

  // /api/figma?path=files/FILEID
  const figmaPath = req.query.path;
  if (!figmaPath) {
    return res.status(400).json({ error: 'Parâmetro path ausente' });
  }

  try {
    const response = await fetch(`https://api.figma.com/v1/${figmaPath}`, {
      headers: { 'X-Figma-Token': token }
    });

    const data = await response.json();
    return res.status(response.status).json(data);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
