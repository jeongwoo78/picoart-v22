export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { image, prompt } = req.body;

    if (!process.env.REPLICATE_API_KEY) {
      return res.status(500).json({ error: 'API key not configured' });
    }

    if (!image || !prompt) {
      return res.status(400).json({ error: 'Missing image or prompt' });
    }

    console.log('Starting FLUX Redux prediction...');

    // FLUX Redux - 원본 핵심 요소 보존하면서 화풍만 변경
    const response = await fetch('https://api.replicate.com/v1/models/black-forest-labs/flux-redux-dev/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_API_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'wait'
      },
      body: JSON.stringify({
        input: {
          image: image,
          prompt: prompt,
          guidance: 3.5,
          num_inference_steps: 28,
          output_format: "jpg",
          output_quality: 90
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('FLUX Redux error:', response.status, errorText);
      return res.status(response.status).json({ 
        error: `API error: ${response.status}`,
        details: errorText
      });
    }

    const data = await response.json();
    console.log('FLUX Redux prediction created:', data.id);
    res.status(200).json(data);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: error.message });
  }
}
