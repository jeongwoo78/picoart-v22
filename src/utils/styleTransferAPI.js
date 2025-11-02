// PicoArt v22 - Style Transfer API (하이브리드 모델: FLUX + SDXL)
import { MODEL_CONFIG } from './modelConfig';

// File to Base64 conversion
const fileToBase64 = async (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
};

// Image resizing
const resizeImage = async (file, maxWidth = 1024) => {
  return new Promise((resolve) => {
    const img = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    img.onload = () => {
      let width = img.width;
      let height = img.height;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(img, 0, 0, width, height);
      
      canvas.toBlob((blob) => {
        resolve(new File([blob], file.name, { type: 'image/jpeg' }));
      }, 'image/jpeg', 0.95);
    };
    
    img.src = URL.createObjectURL(file);
  });
};

// Sleep utility
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Get model configuration based on style
const getModelForStyle = (style) => {
  const model = style.model || 'SDXL'; // Default to SDXL
  return MODEL_CONFIG[model];
};

// FLUX ControlNet API call
const callFluxAPI = async (photoBase64, stylePrompt, onProgress) => {
  if (onProgress) onProgress('FLUX 고품질 변환 시작...');

  const response = await fetch('/api/flux-transfer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image: photoBase64,
      prompt: stylePrompt,
      control_type: 'depth',
      control_strength: 0.5,
      num_inference_steps: 28,
      guidance_scale: 3.5
    })
  });

  if (!response.ok) {
    throw new Error(`FLUX API error: ${response.status}`);
  }

  return response.json();
};

// SDXL API call
const callSDXLAPI = async (photoBase64, stylePrompt, onProgress) => {
  if (onProgress) onProgress('SDXL 표준 변환 시작...');

  const response = await fetch('/api/sdxl-transfer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image: photoBase64,
      prompt: stylePrompt,
      num_inference_steps: 30,
      guidance_scale: 7.5
    })
  });

  if (!response.ok) {
    throw new Error(`SDXL API error: ${response.status}`);
  }

  return response.json();
};

// Poll for prediction result
const pollPrediction = async (predictionId, modelConfig, onProgress) => {
  let attempts = 0;
  const maxAttempts = 90; // 3 minutes max
  
  while (attempts < maxAttempts) {
    await sleep(2000);
    attempts++;

    const checkResponse = await fetch(`/api/check-prediction?id=${predictionId}`);
    
    if (!checkResponse.ok) {
      throw new Error('Failed to check status');
    }

    const result = await checkResponse.json();

    if (result.status === 'succeeded') {
      return result;
    }

    if (result.status === 'failed') {
      throw new Error('Processing failed');
    }

    // Update progress
    if (onProgress) {
      const progress = Math.min(95, 10 + (attempts * 1.0));
      onProgress(`변환 중... ${Math.floor(progress)}%`);
    }
  }

  throw new Error('Processing timeout');
};

// Main style transfer function with hybrid model support
export const processStyleTransfer = async (photoFile, selectedStyle, apiKey, onProgress) => {
  try {
    // 1. Resize image
    const resizedPhoto = await resizeImage(photoFile, 1024);
    const photoBase64 = await fileToBase64(resizedPhoto);

    // 2. Get model configuration
    const modelConfig = getModelForStyle(selectedStyle);
    
    if (onProgress) {
      onProgress(`${modelConfig.label} 모델 준비 중...`);
    }

    // 3. Call appropriate API based on model
    let prediction;
    if (modelConfig.model.includes('flux')) {
      prediction = await callFluxAPI(photoBase64, selectedStyle.prompt, onProgress);
    } else {
      prediction = await callSDXLAPI(photoBase64, selectedStyle.prompt, onProgress);
    }

    // 4. Poll for result
    const result = await pollPrediction(prediction.id, modelConfig, onProgress);

    if (result.status !== 'succeeded') {
      throw new Error('Processing did not succeed');
    }

    // 5. Get result URL
    const resultUrl = Array.isArray(result.output) ? result.output[0] : result.output;

    if (!resultUrl) {
      throw new Error('No result image');
    }

    // 6. Download and create local blob
    if (onProgress) onProgress('이미지 다운로드 중...');
    
    const imageResponse = await fetch(resultUrl);
    const blob = await imageResponse.blob();
    const localUrl = URL.createObjectURL(blob);

    return {
      success: true,
      resultUrl: localUrl,
      blob,
      remoteUrl: resultUrl,
      model: modelConfig.model,
      cost: modelConfig.cost,
      time: modelConfig.time
    };

  } catch (error) {
    console.error('Style transfer error:', error);
    return {
      success: false,
      error: error.message
    };
  }
};

// Mock function for testing without API
export const mockStyleTransfer = async (photoFile, selectedStyle, onProgress) => {
  return new Promise((resolve) => {
    let progress = 0;
    const modelConfig = getModelForStyle(selectedStyle);
    
    const interval = setInterval(() => {
      progress += 10;
      if (onProgress) {
        onProgress(`${modelConfig.label} 변환 중... ${progress}%`);
      }
      
      if (progress >= 100) {
        clearInterval(interval);
        const url = URL.createObjectURL(photoFile);
        resolve({
          success: true,
          resultUrl: url,
          blob: photoFile,
          model: modelConfig.model,
          isMock: true
        });
      }
    }, 200);
  });
};

// Export for backward compatibility
export const applyStyleTransfer = processStyleTransfer;
