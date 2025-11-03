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

    console.log('Starting SDXL prediction...', {
      promptLength: prompt.length,
      imageSize: image.length,
      apiKeyPresent: !!process.env.REPLICATE_API_KEY
    });

    // lucataco의 SDXL img2img 모델 사용 (검증됨)
    const response = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.REPLICATE_API_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'wait'
      },
      body: JSON.stringify({
        version: "afb00c975d2c3ac545839b0b540be9b7dd445a8e0ba60e0e6d6e40d0a8c5c7a2",
        input: {
          image: image,
          prompt: prompt,
          strength: 0.4,
          num_inference_steps: 30,
          guidance_scale: 7.5
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
    console.log('SDXL prediction created:', data.id);
    res.status(200).json(data);
  } catch (error) {
    console.error('SDXL API Error:', error);
    res.status(500).json({ 
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    });
  }
}
