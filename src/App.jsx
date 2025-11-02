// PicoArt v22 - Main App
import React, { useState } from 'react';
import UploadScreen from './components/UploadScreen';
import StyleSelection from './components/StyleSelection';
import ProcessingScreen from './components/ProcessingScreen';
import ResultScreen from './components/ResultScreen';
import './styles/App.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('upload');
  const [uploadedPhoto, setUploadedPhoto] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState(null);
  const [resultImage, setResultImage] = useState(null);

  // Handler: Photo uploaded
  const handlePhotoUpload = (photoFile) => {
    setUploadedPhoto(photoFile);
    setCurrentScreen('style');
  };

  // Handler: Style selected
  const handleStyleSelect = (style) => {
    setSelectedStyle(style);
    setCurrentScreen('processing');
  };

  // Handler: Processing complete
  const handleProcessingComplete = (style, resultImageUrl) => {
    setResultImage(resultImageUrl);
    setCurrentScreen('result');
  };

  // Handler: Reset to start
  const handleReset = () => {
    setCurrentScreen('upload');
    setUploadedPhoto(null);
    setSelectedStyle(null);
    setResultImage(null);
  };

  return (
    <div className="app">
      {/* Header */}
      {currentScreen !== 'processing' && currentScreen !== 'result' && (
        <header className="app-header">
          <div className="header-content">
            <h1 className="app-title">🎨 PicoArt</h1>
            <p className="app-tagline">AI가 당신의 사진을 거장의 그림으로</p>
            <p className="app-version">v22 - 44개 화가 명시 / 하이브리드 모델</p>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="app-main">
        {currentScreen === 'upload' && (
          <UploadScreen onUpload={handlePhotoUpload} />
        )}

        {currentScreen === 'style' && (
          <StyleSelection onSelect={handleStyleSelect} />
        )}

        {currentScreen === 'processing' && (
          <ProcessingScreen
            photo={uploadedPhoto}
            selectedStyle={selectedStyle}
            onComplete={handleProcessingComplete}
          />
        )}

        {currentScreen === 'result' && (
          <ResultScreen
            originalPhoto={uploadedPhoto}
            resultImage={resultImage}
            selectedStyle={selectedStyle}
            onReset={handleReset}
          />
        )}
      </main>

      {/* Footer */}
      {currentScreen !== 'processing' && currentScreen !== 'result' && (
        <footer className="app-footer">
          <div className="footer-content">
            <p className="footer-info">
              특허: 10-2018-0016297 (사진 분석 자동 작품 선정), 10-2018-0122600 (사진 드로잉 변환)
            </p>
            <p className="footer-copyright">
              © 2025 PicoArt. All rights reserved.
            </p>
          </div>
        </footer>
      )}

      <style>{`
        .app {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        .app-header {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          padding: 2rem;
          text-align: center;
        }

        .header-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .app-title {
          font-size: 3rem;
          margin: 0 0 0.5rem 0;
          font-weight: 800;
        }

        .app-tagline {
          font-size: 1.2rem;
          margin: 0 0 0.5rem 0;
          opacity: 0.95;
        }

        .app-version {
          font-size: 0.9rem;
          opacity: 0.8;
          margin: 0;
          padding: 0.5rem 1rem;
          background: rgba(255,255,255,0.2);
          border-radius: 20px;
          display: inline-block;
        }

        .app-main {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .app-footer {
          background: #2d3748;
          color: white;
          padding: 1.5rem;
          text-align: center;
        }

        .footer-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .footer-info {
          font-size: 0.85rem;
          margin: 0 0 0.5rem 0;
          opacity: 0.9;
        }

        .footer-copyright {
          font-size: 0.75rem;
          margin: 0;
          opacity: 0.7;
        }

        @media (max-width: 768px) {
          .app-header {
            padding: 1.5rem 1rem;
          }

          .app-title {
            font-size: 2rem;
          }

          .app-tagline {
            font-size: 1rem;
          }

          .app-version {
            font-size: 0.8rem;
            padding: 0.4rem 0.8rem;
          }

          .app-footer {
            padding: 1rem;
          }

          .footer-info {
            font-size: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
