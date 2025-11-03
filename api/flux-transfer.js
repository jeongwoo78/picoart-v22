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

    // API Key 체크
    if (!process.env.REPLICATE_API_KEY) {
      console.error('REPLICATE_API_KEY not found');
      return res.status(500).json({ 
        error: 'API key not configured',
        details: 'Please set REPLICATE_API_KEY in Vercel environment variables'
      });
    }

    if (!image || !prompt) {
      return res.status(400).json({ error: 'Missing image or prompt' });
    }

    // Base64 검증
    if (!image.startsWith('data:image/')) {
      return res.status(400).json({ error: 'Invalid image format' });
    }

    console.log('Starting FLUX prediction...', {
      promptLength: prompt.length,
      imageSize: image.length,
      apiKeyPresent: !!process.env.REPLICATE_API_KEY
    });

    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        version: "f2c31c31d81278a91b2447a304dae654c64a5d5a70340fba811bb1cbd41019a2",
        input: {
          prompt: prompt,
          control_image: image,
          control_type: "depth",
          control_strength: 0.5,
          steps: 28,
          guidance_scale: 3.5,
          output_format: "jpg",
          output_quality: 90
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Replicate API error:', {
        status: response.status,
        statusText: response.statusText,
        error: errorText
      });
      
      return res.status(response.status).json({ 
        error: `Replicate API error: ${response.status}`,
        details: errorText,
        hint: response.status === 401 ? 'Check API key' : 
              response.status === 402 ? 'Insufficient credits' : 
              'Check Replicate API status'
      });
    }

    const data = await response.json();
    console.log('FLUX prediction created:', data.id);
    res.status(200).json(data);
  } catch (error) {
    console.error('FLUX API Error:', error);
    res.status(500).json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
