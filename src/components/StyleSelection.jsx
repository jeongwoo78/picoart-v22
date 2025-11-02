// PicoArt v22 - StyleSelection (카테고리별 시기 표시 + 화가 명시)
import React, { useState, useMemo } from 'react';
import { artStyles, styleCategories } from '../data/artStyles';

const StyleSelection = ({ onSelect }) => {
  const [activeCategory, setActiveCategory] = useState('renaissance');

  // 카테고리별로 스타일 그룹화
  const groupedStyles = useMemo(() => {
    const groups = {};
    
    // 카테고리 순서대로 정렬
    const sortedCategories = Object.entries(styleCategories)
      .sort((a, b) => a[1].order - b[1].order);

    sortedCategories.forEach(([key, category]) => {
      groups[key] = {
        category,
        styles: artStyles.filter(style => style.category === key)
      };
    });

    return groups;
  }, []);

  // 카테고리별 스타일 수 계산
  const getCategoryCount = (categoryKey) => {
    return groupedStyles[categoryKey]?.styles.length || 0;
  };

  return (
    <div className="style-selection">
      <div className="selection-container">
        <div className="selection-header">
          <h1>🎨 화풍 선택</h1>
          <p className="header-subtitle">
            총 {artStyles.length}개의 화가와 스타일 중에서 선택하세요
          </p>
        </div>

        {/* 카테고리 네비게이션 */}
        <div className="category-nav">
          <div className="category-tabs">
            {Object.entries(groupedStyles).map(([key, { category }]) => (
              <button
                key={key}
                className={`category-tab ${activeCategory === key ? 'active' : ''}`}
                onClick={() => setActiveCategory(key)}
              >
                <span className="tab-name">{category.name}</span>
                <span className="tab-period">{category.period}</span>
                <span className="tab-count">{getCategoryCount(key)}개</span>
              </button>
            ))}
          </div>
        </div>

        {/* 선택된 카테고리의 스타일 그리드 */}
        <div className="styles-section">
          {groupedStyles[activeCategory] && (
            <>
              <div className="section-header">
                <h2>{groupedStyles[activeCategory].category.name}</h2>
                <p className="section-period">
                  {groupedStyles[activeCategory].category.period}
                </p>
              </div>

              <div className="styles-grid">
                {groupedStyles[activeCategory].styles.map(style => (
                  <button
                    key={style.id}
                    className="style-card"
                    onClick={() => onSelect(style)}
                  >
                    <div className="card-icon">{style.icon}</div>
                    
                    <div className="card-content">
                      <div className="card-header">
                        <h3>{style.name}</h3>
                        <p className="card-english">{style.nameEn}</p>
                      </div>

                      {style.artist && (
                        <div className="artist-info">
                          <span className="artist-name">
                            {style.artist.name}
                          </span>
                          {style.artist.lifespan && (
                            <span className="artist-lifespan">
                              {style.artist.lifespan}
                            </span>
                          )}
                        </div>
                      )}

                      <p className="card-description">{style.description}</p>

                      {style.model && (
                        <div className="model-badge">
                          {style.model === 'FLUX' ? '⚡ FLUX' : '🚀 SDXL'}
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <style>{`
        .style-selection {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 2rem;
        }

        .selection-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .selection-header {
          text-align: center;
          color: white;
          margin-bottom: 2rem;
        }

        .selection-header h1 {
          font-size: 2.5rem;
          margin: 0 0 0.5rem 0;
        }

        .header-subtitle {
          font-size: 1.1rem;
          opacity: 0.95;
          margin: 0;
        }

        .category-nav {
          margin-bottom: 2rem;
        }

        .category-tabs {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.75rem;
          max-width: 100%;
        }

        .category-tab {
          background: rgba(255, 255, 255, 0.15);
          border: 2px solid rgba(255, 255, 255, 0.3);
          color: white;
          padding: 1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.25rem;
          backdrop-filter: blur(10px);
        }

        .category-tab:hover {
          background: rgba(255, 255, 255, 0.25);
          transform: translateY(-2px);
        }

        .category-tab.active {
          background: white;
          color: #667eea;
          border-color: white;
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .tab-name {
          font-size: 0.95rem;
          font-weight: 700;
        }

        .tab-period {
          font-size: 0.75rem;
          opacity: 0.8;
        }

        .tab-count {
          font-size: 0.7rem;
          opacity: 0.7;
          background: rgba(255,255,255,0.2);
          padding: 0.125rem 0.5rem;
          border-radius: 10px;
          margin-top: 0.25rem;
        }

        .category-tab.active .tab-count {
          background: rgba(102, 126, 234, 0.2);
        }

        .styles-section {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        .section-header {
          text-align: center;
          margin-bottom: 2rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #e0e0e0;
        }

        .section-header h2 {
          color: #333;
          font-size: 2rem;
          margin: 0 0 0.5rem 0;
        }

        .section-period {
          color: #667eea;
          font-size: 1.1rem;
          font-weight: 600;
          margin: 0;
        }

        .styles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 1.5rem;
        }

        .style-card {
          background: linear-gradient(135deg, #f6f8fb 0%, #e9ecef 100%);
          border: 2px solid transparent;
          border-radius: 16px;
          padding: 1.5rem;
          cursor: pointer;
          transition: all 0.3s;
          text-align: left;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .style-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 24px rgba(102, 126, 234, 0.2);
          border-color: #667eea;
          background: white;
        }

        .card-icon {
          font-size: 3rem;
          text-align: center;
          filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.1));
        }

        .card-content {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          flex: 1;
        }

        .card-header h3 {
          margin: 0;
          color: #333;
          font-size: 1.3rem;
        }

        .card-english {
          color: #666;
          font-size: 0.85rem;
          margin: 0.25rem 0 0 0;
        }

        .artist-info {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0.75rem;
          background: white;
          border-radius: 8px;
          border-left: 3px solid #667eea;
        }

        .artist-name {
          font-weight: 600;
          color: #333;
          font-size: 0.95rem;
        }

        .artist-lifespan {
          font-size: 0.8rem;
          color: #999;
        }

        .card-description {
          color: #555;
          font-size: 0.9rem;
          line-height: 1.5;
          margin: 0;
          flex: 1;
        }

        .model-badge {
          display: inline-block;
          padding: 0.4rem 0.75rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          align-self: flex-start;
        }

        @media (max-width: 1024px) {
          .styles-grid {
            grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .style-selection {
            padding: 1rem;
          }

          .selection-header h1 {
            font-size: 2rem;
          }

          .header-subtitle {
            font-size: 0.95rem;
          }

          .category-tabs {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.5rem;
          }

          .category-tab {
            padding: 0.75rem;
          }

          .tab-name {
            font-size: 0.85rem;
          }

          .tab-period {
            font-size: 0.7rem;
          }

          .styles-section {
            padding: 1.5rem;
          }

          .section-header h2 {
            font-size: 1.5rem;
          }

          .section-period {
            font-size: 0.95rem;
          }

          .styles-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .card-icon {
            font-size: 2.5rem;
          }

          .card-header h3 {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 640px) {
          .category-tabs {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default StyleSelection;
