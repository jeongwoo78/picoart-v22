// PicoArt v22 - ProcessingScreen (이중 교육 시스템)
// 변환 중: 사조/거장/동양화 설명
import React, { useEffect, useState } from 'react';
import { processStyleTransfer } from '../utils/styleTransferAPI';
import { educationContent } from '../data/educationContent';

const ProcessingScreen = ({ photo, selectedStyle, onComplete }) => {
  const [stage, setStage] = useState(1);
  const [statusText, setStatusText] = useState('준비 중...');
  const [showEducation, setShowEducation] = useState(false);

  useEffect(() => {
    processImage();
  }, []);

  const processImage = async () => {
    try {
      // Stage 1: 사진 업로드 확인
      setStage(1);
      setStatusText('사진 준비 중...');
      await sleep(800);

      // Stage 2: 교육 컨텐츠 표시 (사조/거장/동양화 설명)
      setStage(2);
      const eduContent = getEducationContent();
      if (eduContent) {
        setStatusText(`${eduContent.title} 스타일 적용 중...`);
        setShowEducation(true);
        await sleep(3000); // 3초간 교육 컨텐츠 표시
      }

      // Stage 3: AI 변환 시작
      setStage(3);
      setShowEducation(false);
      setStatusText('AI가 예술 작품을 생성하고 있습니다...');

      // Get API key
      const apiKey = import.meta.env.VITE_REPLICATE_API_KEY;

      // Process with progress callback
      const result = await processStyleTransfer(
        photo,
        selectedStyle,
        apiKey,
        (progressText) => setStatusText(progressText)
      );

      if (!result.success) {
        // API 키 문제인지 확인
        if (result.error && result.error.includes('401')) {
          throw new Error('API 키가 설정되지 않았습니다. Vercel 환경 변수를 확인해주세요.');
        }
        if (result.error && result.error.includes('402')) {
          throw new Error('Replicate 계정의 크레딧이 부족합니다.');
        }
        if (result.error && result.error.includes('500')) {
          throw new Error('API 서버 오류입니다. 잠시 후 다시 시도해주세요.');
        }
        throw new Error(result.error || 'Style transfer failed');
      }

      // Stage 4: Complete
      setStage(4);
      setStatusText('완성되었습니다!');
      await sleep(500);

      onComplete(selectedStyle, result.resultUrl);

    } catch (error) {
      console.error('Processing error:', error);
      
      // 에러 메시지 분류
      let errorMessage = error.message;
      
      if (error.message.includes('API 키')) {
        errorMessage = '⚠️ ' + error.message + '\n\n해결 방법:\n1. Vercel Dashboard 접속\n2. Settings → Environment Variables\n3. REPLICATE_API_KEY 추가';
      } else if (error.message.includes('크레딧')) {
        errorMessage = '💳 ' + error.message + '\n\nReplicate.com에서 크레딧을 충전해주세요.';
      } else if (!errorMessage) {
        errorMessage = '알 수 없는 오류가 발생했습니다. 다시 시도해주세요.';
      }
      
      setStatusText(`오류: ${errorMessage}`);
      setStage(1); // 다시 시도할 수 있도록 stage 리셋
    }
  };

  // 변환 중 교육 컨텐츠 가져오기
  const getEducationContent = () => {
    const category = selectedStyle.category;
    
    // 1. 사조 탭 → 사조 설명
    if (category !== 'masters' && category !== 'oriental') {
      return educationContent.movements[category];
    }
    
    // 2. 거장 탭 → 거장 소개 (기존 artist.intro 사용)
    if (category === 'masters') {
      return {
        title: selectedStyle.artist.name,
        desc: selectedStyle.artist.intro
      };
    }
    
    // 3. 동양화 탭 → 동양화 전통 설명
    if (category === 'oriental') {
      const orientalTitles = {
        korean: '한국 전통 회화',
        chinese: '중국 수묵화',
        japanese: '일본 우키요에'
      };
      const orientalDescs = {
        korean: '한국 전통화는 먹과 채색으로 자연의 정신을 담아냅니다. 여백의 미를 중시하며, 선비정신과 자연 사랑이 담긴 산수화, 화조화가 발전했습니다.',
        chinese: '중국 수묵화는 먹의 농담만으로 자연과 정신세계를 표현합니다. 기운생동(氣韻生動)을 최고로 여기며, 문인화 전통이 깊습니다.',
        japanese: '일본 우키요에는 에도시대 서민 문화를 담은 목판화입니다. "떠도는 세상의 그림"이란 뜻으로, 대담한 구도와 선명한 색채가 특징입니다.'
      };
      const styleType = selectedStyle.id.replace('-', ''); // korean, chinese, japanese
      return {
        title: orientalTitles[styleType] || '동양화',
        desc: orientalDescs[styleType] || '동양의 전통적인 회화 기법입니다.'
      };
    }

    return null;
  };

  const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  return (
    <div className="processing-screen">
      <div className="processing-content">
        <h2>🎨 변환 중</h2>

        {/* Progress stages */}
        <div className="progress-stages">
          <div className={`stage ${stage >= 1 ? 'active' : ''} ${stage > 1 ? 'complete' : ''}`}>
            <span className="stage-number">1</span>
            <span className="stage-label">준비</span>
          </div>
          <div className={`stage ${stage >= 2 ? 'active' : ''} ${stage > 2 ? 'complete' : ''}`}>
            <span className="stage-number">2</span>
            <span className="stage-label">스타일 설명</span>
          </div>
          <div className={`stage ${stage >= 3 ? 'active' : ''} ${stage > 3 ? 'complete' : ''}`}>
            <span className="stage-number">3</span>
            <span className="stage-label">AI 변환</span>
          </div>
          <div className={`stage ${stage >= 4 ? 'active' : ''}`}>
            <span className="stage-number">4</span>
            <span className="stage-label">완성</span>
          </div>
        </div>

        {/* Status text */}
        <p className="status-text">{statusText}</p>

        {/* Loading animation */}
        <div className="loading-animation">
          <div className="spinner"></div>
        </div>

        {/* 교육 컨텐츠 - 변환 중 */}
        {showEducation && (
          <div className="education-content">
            <div className="education-header">
              <div className="education-icon">{selectedStyle.icon || '🎨'}</div>
              <h3>{getEducationContent()?.title}</h3>
            </div>
            <div className="education-body">
              <p className="education-desc">{getEducationContent()?.desc}</p>
            </div>
          </div>
        )}

        <p className="processing-note">
          고품질 변환을 위해 {selectedStyle?.model === 'FLUX' ? '50-60초' : '30-40초'} 정도 소요됩니다.
          {selectedStyle?.model === 'FLUX' && ' (FLUX 최고 품질 모드)'}
        </p>
      </div>

      <style>{`
        .processing-screen {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .processing-content {
          background: white;
          border-radius: 20px;
          padding: 3rem;
          max-width: 600px;
          width: 100%;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .processing-content h2 {
          text-align: center;
          color: #333;
          margin-bottom: 2rem;
          font-size: 2rem;
        }

        .progress-stages {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
          position: relative;
        }

        .progress-stages::before {
          content: '';
          position: absolute;
          top: 20px;
          left: 0;
          right: 0;
          height: 2px;
          background: #e0e0e0;
          z-index: 0;
        }

        .stage {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          z-index: 1;
          position: relative;
        }

        .stage-number {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #e0e0e0;
          color: #999;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          transition: all 0.3s;
        }

        .stage.active .stage-number {
          background: #667eea;
          color: white;
          animation: pulse 2s infinite;
        }

        .stage.complete .stage-number {
          background: #10b981;
          color: white;
        }

        .stage-label {
          font-size: 0.85rem;
          color: #666;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }

        .status-text {
          text-align: center;
          color: #667eea;
          font-size: 1.1rem;
          margin: 1.5rem 0;
          min-height: 1.5rem;
        }

        .loading-animation {
          display: flex;
          justify-content: center;
          margin: 2rem 0;
        }

        .spinner {
          width: 50px;
          height: 50px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #667eea;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* 교육 컨텐츠 - 변환 중 */
        .education-content {
          background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 2rem;
          margin: 1.5rem 0;
          animation: fadeIn 0.5s;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .education-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #dee2e6;
        }

        .education-icon {
          font-size: 3rem;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
        }

        .education-header h3 {
          margin: 0;
          color: #333;
          font-size: 1.5rem;
        }

        .education-body {
          color: #555;
        }

        .education-desc {
          line-height: 1.8;
          font-size: 1rem;
          margin: 0;
        }

        .processing-note {
          text-align: center;
          color: #999;
          font-size: 0.9rem;
          margin-top: 2rem;
        }

        @media (max-width: 640px) {
          .processing-content {
            padding: 2rem 1.5rem;
          }

          .progress-stages {
            flex-wrap: wrap;
            gap: 1rem;
          }

          .stage-number {
            width: 35px;
            height: 35px;
            font-size: 0.9rem;
          }

          .stage-label {
            font-size: 0.75rem;
          }

          .education-icon {
            font-size: 2.5rem;
          }

          .education-content {
            padding: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ProcessingScreen;
