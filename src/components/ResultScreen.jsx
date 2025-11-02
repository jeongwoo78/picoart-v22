// PicoArt v22 - ResultScreen (이중 교육 시스템)
// 결과물: 화가/화법 세부 설명
import React, { useState } from 'react';
import BeforeAfter from './BeforeAfter';
import { artistTechniques, educationContent } from '../data/educationContent';

const ResultScreen = ({ originalPhoto, resultImage, selectedStyle, onReset }) => {
  const [showInfo, setShowInfo] = useState(true);

  const handleDownload = async () => {
    try {
      const response = await fetch(resultImage);
      const blob = await response.blob();
      
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `picoart-${selectedStyle.id}-${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Download failed:', error);
      alert('다운로드에 실패했습니다.');
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'PicoArt - AI 예술 변환',
          text: `${getTechniqueInfo().title}로 변환한 작품`,
          url: window.location.href
        });
      } catch (error) {
        console.log('Share cancelled or failed');
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('링크가 클립보드에 복사되었습니다!');
    }
  };

  // 결과물 화법 설명 가져오기
  const getTechniqueInfo = () => {
    const category = selectedStyle.category;
    
    // 1. 사조 탭 → 선정된 화가 화법 설명
    if (category !== 'masters' && category !== 'oriental') {
      return {
        title: `${selectedStyle.artist.name}의 화법`,
        technique: artistTechniques[selectedStyle.id] || selectedStyle.artist.features
      };
    }
    
    // 2. 거장 탭 → 화법 세부 설명
    if (category === 'masters') {
      return {
        title: `${selectedStyle.artist.name}의 화법`,
        technique: educationContent.masters[selectedStyle.id]?.technique || selectedStyle.artist.features
      };
    }
    
    // 3. 동양화 탭 → 화법 세부 설명
    if (category === 'oriental') {
      const styleType = selectedStyle.id.replace('-', ''); // korean, chinese, japanese
      return {
        title: `${selectedStyle.name} 화법`,
        technique: educationContent.oriental[styleType]?.technique || selectedStyle.artist.features
      };
    }

    return {
      title: '화법 설명',
      technique: selectedStyle.artist.features
    };
  };

  return (
    <div className="result-screen">
      <div className="result-container">
        <div className="result-header">
          <h1>✨ 완성!</h1>
          <p className="result-subtitle">
            {selectedStyle.artist.name} ({selectedStyle.artist.lifespan}) 화풍으로 변환되었습니다
          </p>
        </div>

        {/* Before/After Slider */}
        <div className="comparison-wrapper">
          <BeforeAfter 
            beforeImage={URL.createObjectURL(originalPhoto)}
            afterImage={resultImage}
          />
          <p className="comparison-hint">
            💡 슬라이더를 좌우로 드래그하여 원본과 비교해보세요!
          </p>
        </div>

        {/* 화법 설명 Toggle */}
        <div className="info-toggle">
          <button 
            className="toggle-button"
            onClick={() => setShowInfo(!showInfo)}
          >
            {showInfo ? '🔽 화법 설명 숨기기' : '🔼 화법 설명 보기'}
          </button>
        </div>

        {/* 화법 설명 카드 */}
        {showInfo && (
          <div className="technique-card">
            <div className="card-header">
              <div className="technique-icon">{selectedStyle.icon || '🎨'}</div>
              <div>
                <h2>{getTechniqueInfo().title}</h2>
                <p className="technique-subtitle">{selectedStyle.nameEn}</p>
              </div>
            </div>

            <div className="card-content">
              <div className="technique-explanation">
                <h3>🖌️ 이 화가는 이렇게 그렸습니다</h3>
                <p>{getTechniqueInfo().technique}</p>
              </div>

              {/* 기본 정보 */}
              <div className="info-grid">
                <div className="info-box">
                  <span className="info-label">생애</span>
                  <span className="info-text">{selectedStyle.artist.lifespan}</span>
                </div>
                <div className="info-box">
                  <span className="info-label">국적</span>
                  <span className="info-text">{selectedStyle.artist.nationality}</span>
                </div>
                <div className="info-box">
                  <span className="info-label">미술사조</span>
                  <span className="info-text">{selectedStyle.artist.movement}</span>
                </div>
              </div>

              {/* 대표작 */}
              <div className="info-section">
                <h3>✨ 대표작</h3>
                <div className="masterpieces">
                  {selectedStyle.artist.masterpieces.map((work, idx) => (
                    <span key={idx} className="masterpiece-tag">{work}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="action-buttons">
          <button className="btn btn-download" onClick={handleDownload}>
            <span className="btn-icon">📥</span>
            다운로드
          </button>
          <button className="btn btn-share" onClick={handleShare}>
            <span className="btn-icon">🔗</span>
            공유하기
          </button>
          <button className="btn btn-reset" onClick={onReset}>
            <span className="btn-icon">🔄</span>
            다시 만들기
          </button>
        </div>
      </div>

      <style>{`
        .result-screen {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .result-container {
          max-width: 900px;
          width: 100%;
        }

        .result-header {
          text-align: center;
          color: white;
          margin-bottom: 2rem;
        }

        .result-header h1 {
          font-size: 2.5rem;
          margin: 0 0 0.5rem 0;
        }

        .result-subtitle {
          font-size: 1.1rem;
          opacity: 0.95;
          margin: 0;
        }

        .comparison-wrapper {
          background: white;
          padding: 1.5rem;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          margin-bottom: 1.5rem;
        }

        .comparison-hint {
          text-align: center;
          color: #666;
          font-size: 0.9rem;
          margin: 1rem 0 0 0;
        }

        .info-toggle {
          text-align: center;
          margin-bottom: 1rem;
        }

        .toggle-button {
          background: rgba(255,255,255,0.2);
          border: 2px solid white;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 25px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
        }

        .toggle-button:hover {
          background: white;
          color: #667eea;
        }

        .technique-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
          margin-bottom: 1.5rem;
          animation: slideDown 0.3s ease-out;
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .card-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding-bottom: 1.5rem;
          border-bottom: 2px solid #e0e0e0;
          margin-bottom: 1.5rem;
        }

        .technique-icon {
          font-size: 4rem;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.2));
        }

        .card-header h2 {
          margin: 0;
          color: #333;
          font-size: 1.75rem;
        }

        .technique-subtitle {
          color: #666;
          font-size: 0.95rem;
          margin: 0.25rem 0 0 0;
        }

        .technique-explanation {
          background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
          padding: 1.5rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          border-left: 4px solid #667eea;
        }

        .technique-explanation h3 {
          color: #667eea;
          font-size: 1.1rem;
          margin: 0 0 1rem 0;
        }

        .technique-explanation p {
          color: #333;
          line-height: 1.8;
          font-size: 1rem;
          margin: 0;
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .info-box {
          background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
          padding: 1rem;
          border-radius: 12px;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .info-label {
          font-size: 0.75rem;
          color: #999;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 600;
        }

        .info-text {
          color: #333;
          font-weight: 600;
          font-size: 1rem;
        }

        .info-section {
          margin-bottom: 1.5rem;
        }

        .info-section:last-child {
          margin-bottom: 0;
        }

        .info-section h3 {
          color: #667eea;
          font-size: 1.1rem;
          margin: 0 0 0.75rem 0;
        }

        .masterpieces {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .masterpiece-tag {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .action-buttons {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1rem;
        }

        .btn {
          padding: 1rem 1.5rem;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-icon {
          font-size: 1.2rem;
        }

        .btn-download {
          background: #10b981;
          color: white;
        }

        .btn-download:hover {
          background: #059669;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(16, 185, 129, 0.3);
        }

        .btn-share {
          background: #3b82f6;
          color: white;
        }

        .btn-share:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(59, 130, 246, 0.3);
        }

        .btn-reset {
          background: white;
          color: #667eea;
          border: 2px solid #667eea;
        }

        .btn-reset:hover {
          background: #667eea;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);
        }

        @media (max-width: 768px) {
          .result-screen {
            padding: 1rem;
          }

          .result-header h1 {
            font-size: 2rem;
          }

          .result-subtitle {
            font-size: 0.95rem;
          }

          .comparison-wrapper {
            padding: 1rem;
          }

          .technique-card {
            padding: 1.5rem;
          }

          .technique-icon {
            font-size: 3rem;
          }

          .card-header h2 {
            font-size: 1.5rem;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .action-buttons {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default ResultScreen;
