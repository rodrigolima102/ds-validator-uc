export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Figma-Token, X-Figma-Path');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const token = req.headers['x-figma-token'];
  if (!token) {
    return res.status(401).json({ error: 'Token não informado' });
  }

  const figmaPath = req.headers['x-figma-path'];
  if (!figmaPath) {
    return res.status(400).json({ error: 'Header X-Figma-Path ausente' });
  }

  const url = `https://api.figma.com/v1/${figmaPath}`;

  const response = await fetch(url, {
    headers: { 'X-Figma-Token': token }
  });

  const data = await response.json();
  return res.status(response.status).json(data);
}
