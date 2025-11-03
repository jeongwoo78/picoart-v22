// PicoArt v22 - 화가 명시 확장 (하이브리드 모델)
// 연대기 순 정렬 (고대 → 현대)
// 총 41개: 고대 2 + 르네상스 5 + 바로크 5 + 로코코 3 + 낭만 4 + 인상 5 + 후기인상 4 + 야수 3 + 표현 4 + 거장 3 + 동양 3

export const styleCategories = {
  ancient: { name: '고대 미술', period: 'BC 800 ~ AD 500', order: 1 },
  byzantineIslamic: { name: '비잔틴·이슬람', period: 'AD 400 ~ 1400', order: 2 },
  renaissance: { name: '르네상스', period: '1400-1600', order: 3 },
  baroque: { name: '바로크', period: '1600-1750', order: 4 },
  rococo: { name: '로코코', period: '1700-1780', order: 5 },
  romanticism: { name: '낭만주의', period: '1780-1850', order: 6 },
  impressionism: { name: '인상주의', period: '1860-1890', order: 7 },
  postImpressionism: { name: '후기인상주의', period: '1880-1910', order: 8 },
  fauvism: { name: '야수파', period: '1900-1910', order: 9 },
  expressionism: { name: '표현주의', period: '1905-1925', order: 10 },
  masters: { name: '거장', period: '1862-1989', order: 11 },
  oriental: { name: '동양화', period: '1600-1900', order: 12 }
};

export const artStyles = [
  
  // ==================== 1. 고대 미술 ====================
  
  {
    id: 'greek-roman',
    category: 'ancient',
    model: 'SDXL',
    order: 1,
    name: '그리스·로마',
    nameEn: 'Greek & Roman Art',
    description: '고전 조각의 이상적 균형미',
    artist: {
      name: '고전 조각 양식',
      nameEn: 'Classical Sculpture Style',
      period: 'BC 800 ~ AD 500',
      birth: null,
      death: null,
      lifespan: 'BC 800 ~ AD 500',
      nationality: '그리스·로마',
      movement: '고대 미술',
      features: '이상적 인체 비례, 사실적 표현, 완벽한 균형미',
      masterpieces: ['밀로의 비너스', '라오콘 군상', '아우구스투스 조각상'],
      intro: '그리스·로마 미술은 인체의 이상적 아름다움을 추구했습니다. 완벽한 비례와 균형을 통해 신과 영웅을 표현했으며, 서양 미술의 기초가 되었습니다.'
    },
    prompt: 'Classical Greek and Roman sculpture painting style, idealized human proportions with perfect symmetry, marble-like smooth rendering, heroic noble figures, classical drapery folds, temple architecture background, serene dignified expressions, painted in ancient classical masterpiece quality',
    color: '#8B7355',
    icon: '🏛️'
  },

  {
    id: 'byzantine-islamic',
    category: 'byzantineIslamic',
    model: 'SDXL',
    order: 2,
    name: '비잔틴·이슬람',
    nameEn: 'Byzantine & Islamic Art',
    description: '황금 모자이크와 기하학 문양',
    artist: {
      name: '비잔틴·이슬람 양식',
      nameEn: 'Byzantine & Islamic Style',
      period: 'AD 400 ~ 1400',
      birth: null,
      death: null,
      lifespan: 'AD 400 ~ 1400',
      nationality: '동로마·이슬람 문화권',
      movement: '고대 미술',
      features: '황금 모자이크, 기하학 문양, 종교적 상징성',
      masterpieces: ['하기아 소피아 모자이크', '알함브라 궁전', '바위의 돔'],
      intro: '비잔틴은 황금빛 모자이크로 신성함을, 이슬람은 기하학 문양으로 무한의 아름다움을 표현했습니다.'
    },
    subStyles: {
      byzantine: {
        prompt: 'Byzantine religious icon painting style, golden mosaic background, sacred solemn frontal figures, ornate halos, jewel-toned colors, flattened perspective, spiritual transcendent atmosphere, painted in Byzantine masterpiece quality'
      },
      islamic: {
        prompt: 'Islamic decorative art painting style, intricate geometric arabesque patterns, Islamic calligraphy elements, turquoise and cobalt blue colors, gold accents, no human figures, symmetrical designs, ornamental floral motifs, painted in Islamic art masterpiece quality'
      }
    },
    color: '#FFD700',
    icon: '🕌'
  },

  // ==================== 2. 르네상스 ====================
  
  {
    id: 'davinci',
    category: 'renaissance',
    model: 'FLUX',
    order: 3,
    name: '레오나르도 다 빈치',
    nameEn: 'Leonardo da Vinci',
    description: '스푸마토 기법의 대가',
    artist: {
      name: '레오나르도 다 빈치',
      nameEn: 'Leonardo da Vinci',
      period: '1452-1519',
      birth: 1452,
      death: 1519,
      lifespan: '1452-1519 (67세)',
      nationality: '이탈리아',
      movement: '르네상스',
      features: '스푸마토(연기처럼 흐릿한 경계), 신비로운 미소, 정교한 해부학',
      masterpieces: ['모나리자', '최후의 만찬', '비트루비우스적 인간'],
      intro: '르네상스의 천재. 과학자이자 예술가로서 스푸마토 기법을 통해 신비롭고 생동감 있는 인물화를 창조했습니다.'
    },
    prompt: 'Leonardo da Vinci Renaissance painting style, sfumato technique with soft hazy edges, mysterious enigmatic smiles, meticulous anatomical precision, subtle atmospheric perspective, warm golden brown tones, scientific observation of nature, painted in da Vinci masterpiece quality',
    color: '#8B6914',
    icon: '🎨'
  },

  {
    id: 'michelangelo',
    category: 'renaissance',
    model: 'FLUX',
    order: 4,
    name: '미켈란젤로',
    nameEn: 'Michelangelo',
    description: '역동적 인체 표현의 거장',
    artist: {
      name: '미켈란젤로 부오나로티',
      nameEn: 'Michelangelo Buonarroti',
      period: '1475-1564',
      birth: 1475,
      death: 1564,
      lifespan: '1475-1564 (88세)',
      nationality: '이탈리아',
      movement: '르네상스',
      features: '웅장한 근육질 인체, 역동적 포즈, 조각적 형태감',
      masterpieces: ['천지창조', '다비드상', '최후의 심판'],
      intro: '조각가이자 화가. 인체의 역동성과 힘을 완벽하게 표현했으며, 시스티나 성당 천장화로 불멸의 명성을 얻었습니다.'
    },
    prompt: 'Michelangelo Renaissance painting style, monumental muscular heroic figures, dynamic twisting poses (contrapposto), sculptural three-dimensional forms, dramatic foreshortening, powerful athletic bodies, painted in Michelangelo Sistine Chapel fresco quality',
    color: '#CD853F',
    icon: '💪'
  },

  {
    id: 'raphael',
    category: 'renaissance',
    model: 'FLUX',
    order: 5,
    name: '라파엘로',
    nameEn: 'Raphael',
    description: '조화로운 구도의 완성',
    artist: {
      name: '라파엘로 산치오',
      nameEn: 'Raffaello Sanzio',
      period: '1483-1520',
      birth: 1483,
      death: 1520,
      lifespan: '1483-1520 (37세)',
      nationality: '이탈리아',
      movement: '르네상스',
      features: '완벽한 균형미, 우아한 인물, 조화로운 구도',
      masterpieces: ['아테네 학당', '시스티나 마돈나', '초원의 성모'],
      intro: '르네상스의 완성자. 완벽한 조화와 균형으로 이상적 아름다움을 표현했으며, 37세의 젊은 나이에 요절했습니다.'
    },
    prompt: 'Raphael Renaissance painting style, perfect harmonious composition with balanced symmetry, graceful elegant figures, serene beautiful faces, soft pastel colors, clear spatial organization, idealized beauty, painted in Raphael masterpiece quality',
    color: '#DEB887',
    icon: '👼'
  },

  {
    id: 'botticelli',
    category: 'renaissance',
    model: 'FLUX',
    order: 6,
    name: '산드로 보티첼리',
    nameEn: 'Sandro Botticelli',
    description: '우아한 곡선의 시인',
    artist: {
      name: '산드로 보티첼리',
      nameEn: 'Sandro Botticelli',
      period: '1445-1510',
      birth: 1445,
      death: 1510,
      lifespan: '1445-1510 (65세)',
      nationality: '이탈리아',
      movement: '르네상스',
      features: '유려한 곡선, 우아한 여성상, 신화적 주제',
      masterpieces: ['비너스의 탄생', '봄(프리마베라)', '마그니피카트의 성모'],
      intro: '초기 르네상스의 대표 화가. 신화를 주제로 한 우아하고 시적인 작품으로 여성미의 정수를 표현했습니다.'
    },
    prompt: 'Sandro Botticelli Renaissance painting style, flowing graceful curved lines, ethereal delicate female figures, mythological themes, pale luminous skin tones, golden hair with gentle waves, decorative floral details, painted in Botticelli masterpiece quality',
    color: '#F0E68C',
    icon: '🌸'
  },

  {
    id: 'titian',
    category: 'renaissance',
    model: 'FLUX',
    order: 7,
    name: '티치아노',
    nameEn: 'Titian',
    description: '베네치아파의 색채 거장',
    artist: {
      name: '티치아노 베첼리오',
      nameEn: 'Tiziano Vecellio',
      period: '1488-1576',
      birth: 1488,
      death: 1576,
      lifespan: '1488-1576 (88세)',
      nationality: '이탈리아',
      movement: '르네상스',
      features: '풍부한 색채, 대담한 붓터치, 황금빛 톤',
      masterpieces: ['우르비노의 비너스', '바쿠스와 아리아드네', '성모 승천'],
      intro: '베네치아파의 거장. 풍부한 색채와 빛의 표현으로 바로크를 예고했으며, 88세까지 활동한 장수 화가입니다.'
    },
    prompt: 'Titian Venetian Renaissance painting style, rich saturated colors with golden tones, bold expressive brushwork, warm glowing skin, luxurious fabrics and textures, dramatic lighting, sensual compositions, painted in Titian masterpiece quality',
    color: '#DAA520',
    icon: '👑'
  },

  // ==================== 3. 바로크 ====================
  
  {
    id: 'caravaggio',
    category: 'baroque',
    model: 'FLUX',
    order: 8,
    name: '카라바조',
    nameEn: 'Caravaggio',
    description: '테네브리즘의 창시자',
    artist: {
      name: '미켈란젤로 메리시 다 카라바조',
      nameEn: 'Michelangelo Merisi da Caravaggio',
      period: '1571-1610',
      birth: 1571,
      death: 1610,
      lifespan: '1571-1610 (39세)',
      nationality: '이탈리아',
      movement: '바로크',
      features: '극적인 명암 대비(테네브리즘), 사실적 인물, 드라마틱한 조명',
      masterpieces: ['성 마태오의 소명', '바쿠스', '유디트와 홀로페르네스'],
      intro: '바로크의 혁명가. 극적인 빛과 어둠의 대비로 강렬한 종교화를 그렸으며, 파란만장한 삶을 살다 39세에 요절했습니다.'
    },
    prompt: 'Caravaggio Baroque painting style, dramatic tenebrism with stark light and shadow contrasts, single spotlight illumination from darkness, gritty realistic figures, theatrical composition, intense psychological drama, painted in Caravaggio chiaroscuro masterpiece quality',
    color: '#2C1810',
    icon: '🕯️'
  },

  {
    id: 'rembrandt',
    category: 'baroque',
    model: 'FLUX',
    order: 9,
    name: '렘브란트',
    nameEn: 'Rembrandt',
    description: '빛의 마술사',
    artist: {
      name: '렘브란트 판 레인',
      nameEn: 'Rembrandt van Rijn',
      period: '1606-1669',
      birth: 1606,
      death: 1669,
      lifespan: '1606-1669 (63세)',
      nationality: '네덜란드',
      movement: '바로크',
      features: '따뜻한 황금빛, 내면의 감정 표현, 부드러운 명암',
      masterpieces: ['야경', '자화상 시리즈', '돌아온 탕자'],
      intro: '네덜란드 황금시대의 거장. 빛의 표현과 인간 내면의 심리 묘사에 탁월했으며, 평생 100여 점의 자화상을 남겼습니다.'
    },
    prompt: 'Rembrandt Baroque painting style, warm golden light glowing from within, subtle gradations of light and shadow, psychological depth and introspection, rich earth tones, contemplative mood, expressive faces revealing inner life, painted in Rembrandt masterpiece quality',
    color: '#8B4513',
    icon: '💡'
  },

  {
    id: 'rubens',
    category: 'baroque',
    model: 'FLUX',
    order: 10,
    name: '페테르 파울 루벤스',
    nameEn: 'Peter Paul Rubens',
    description: '역동적 육체미의 대가',
    artist: {
      name: '페테르 파울 루벤스',
      nameEn: 'Peter Paul Rubens',
      period: '1577-1640',
      birth: 1577,
      death: 1640,
      lifespan: '1577-1640 (63세)',
      nationality: '플랑드르',
      movement: '바로크',
      features: '풍만한 육체, 역동적 움직임, 화려한 색채',
      masterpieces: ['십자가에서 내림', '마리 드 메디치의 생애', '삼미신'],
      intro: '플랑드르 바로크의 거장. 풍만하고 역동적인 인체 표현으로 유명하며, 외교관으로도 활동한 국제적 화가였습니다.'
    },
    prompt: 'Peter Paul Rubens Baroque painting style, voluptuous full-figured bodies in dynamic motion, swirling energetic compositions, rich vibrant colors, sensual flesh tones, dramatic gestures, abundant life force, painted in Rubens masterpiece quality',
    color: '#CD5C5C',
    icon: '🎭'
  },

  {
    id: 'vermeer',
    category: 'baroque',
    model: 'FLUX',
    order: 11,
    name: '요하네스 베르메르',
    nameEn: 'Johannes Vermeer',
    description: '빛의 진주',
    artist: {
      name: '요하네스 베르메르',
      nameEn: 'Johannes Vermeer',
      period: '1632-1675',
      birth: 1632,
      death: 1675,
      lifespan: '1632-1675 (43세)',
      nationality: '네덜란드',
      movement: '바로크',
      features: '진주 같은 빛, 정교한 디테일, 고요한 실내',
      masterpieces: ['진주 귀걸이를 한 소녀', '우유를 따르는 여인', '델프트의 풍경'],
      intro: '네덜란드의 빛의 화가. 35점만 남긴 희소한 작가지만, 빛의 표현과 색채 감각이 탁월해 "북방의 레오나르도"로 불립니다.'
    },
    prompt: 'Johannes Vermeer Baroque painting style, pearl-like luminous light quality, meticulous attention to detail, quiet intimate domestic interiors, brilliant ultramarine blue, soft diffused natural window light, serene contemplative mood, painted in Vermeer masterpiece quality',
    color: '#4682B4',
    icon: '💎'
  },

  {
    id: 'velazquez',
    category: 'baroque',
    model: 'FLUX',
    order: 12,
    name: '디에고 벨라스케스',
    nameEn: 'Diego Velázquez',
    description: '스페인 황금시대의 궁정화가',
    artist: {
      name: '디에고 벨라스케스',
      nameEn: 'Diego Rodríguez de Silva y Velázquez',
      period: '1599-1660',
      birth: 1599,
      death: 1660,
      lifespan: '1599-1660 (61세)',
      nationality: '스페인',
      movement: '바로크',
      features: '자연스러운 붓터치, 공간감, 복잡한 구도',
      masterpieces: ['시녀들', '교황 인노켄티우스 10세', '브레다의 항복'],
      intro: '스페인 바로크의 대가. 스페인 왕실 화가로 활동하며 자연스럽고 생생한 궁정 초상화를 남겼습니다.'
    },
    prompt: 'Diego Velázquez Baroque painting style, naturalistic loose brushwork, sophisticated spatial composition, atmospheric perspective, subtle color harmonies, dignified court portraits, painted in Velázquez masterpiece quality',
    color: '#8B4789',
    icon: '👑'
  },

  // ==================== 4. 로코코 ====================
  
  {
    id: 'boucher',
    category: 'rococo',
    model: 'FLUX',
    order: 13,
    name: '프랑수아 부셰',
    nameEn: 'François Boucher',
    description: '관능적 우아함',
    artist: {
      name: '프랑수아 부셰',
      nameEn: 'François Boucher',
      period: '1703-1770',
      birth: 1703,
      death: 1770,
      lifespan: '1703-1770 (67세)',
      nationality: '프랑스',
      movement: '로코코',
      features: '관능적 표현, 파스텔 색조, 신화적 주제',
      masterpieces: ['퐁파두르 부인', '비너스의 화장', '목욕하는 다이애나'],
      intro: '로코코의 대표 화가. 루이 15세의 궁정화가로 활동하며 우아하고 관능적인 작품으로 로코코 시대를 상징했습니다.'
    },
    prompt: 'François Boucher Rococo painting style, sensual soft curves, pastel pink and blue tones, mythological romantic scenes, decorative ornate details, playful cherubs, elegant aristocratic leisure, painted in Boucher masterpiece quality',
    color: '#FFB6C1',
    icon: '🌹'
  },

  {
    id: 'fragonard',
    category: 'rococo',
    model: 'FLUX',
    order: 14,
    name: '장 오노레 프라고나르',
    nameEn: 'Jean-Honoré Fragonard',
    description: '경쾌한 즐거움',
    artist: {
      name: '장 오노레 프라고나르',
      nameEn: 'Jean-Honoré Fragonard',
      period: '1732-1806',
      birth: 1732,
      death: 1806,
      lifespan: '1732-1806 (74세)',
      nationality: '프랑스',
      movement: '로코코',
      features: '경쾌한 붓터치, 생동감 있는 움직임, 로맨틱한 정원',
      masterpieces: ['그네', '빗장', '읽는 소녀'],
      intro: '로코코 후기의 거장. 경쾌하고 유희적인 장면을 즐겨 그렸으며, 프랑스 혁명으로 로코코 시대가 끝나며 쇠락했습니다.'
    },
    prompt: 'Jean-Honoré Fragonard Rococo painting style, light playful brushwork, joyful movement and energy, romantic garden settings, bright cheerful colors, frivolous intimate moments, painted in Fragonard masterpiece quality',
    color: '#FFE4E1',
    icon: '🎠'
  },

  {
    id: 'chardin',
    category: 'rococo',
    model: 'FLUX',
    order: 15,
    name: '장 바티스트 시메옹 샤르댕',
    nameEn: 'Jean-Baptiste-Siméon Chardin',
    description: '정물화의 대가',
    artist: {
      name: '장 바티스트 시메옹 샤르댕',
      nameEn: 'Jean-Baptiste-Siméon Chardin',
      period: '1699-1779',
      birth: 1699,
      death: 1779,
      lifespan: '1699-1779 (80세)',
      nationality: '프랑스',
      movement: '로코코',
      features: '차분한 정물화, 서민적 주제, 소박한 아름다움',
      masterpieces: ['가오리', '비누 방울', '시장에서 돌아온 하녀'],
      intro: '로코코 시대의 이단아. 화려한 로코코와 달리 소박한 정물화와 일상을 그려 진정성 있는 작품세계를 보여줬습니다.'
    },
    prompt: 'Jean-Baptiste-Siméon Chardin Rococo painting style, quiet contemplative still lifes, humble domestic subjects, subtle muted colors, meticulous texture rendering, honest simplicity, painted in Chardin masterpiece quality',
    color: '#D2B48C',
    icon: '🍎'
  },

  // ==================== 5. 낭만주의 ====================
  
  {
    id: 'delacroix',
    category: 'romanticism',
    model: 'FLUX',
    order: 16,
    name: '외젠 들라크루아',
    nameEn: 'Eugène Delacroix',
    description: '격정의 색채',
    artist: {
      name: '외젠 들라크루아',
      nameEn: 'Eugène Delacroix',
      period: '1798-1863',
      birth: 1798,
      death: 1863,
      lifespan: '1798-1863 (65세)',
      nationality: '프랑스',
      movement: '낭만주의',
      features: '격정적 색채, 역동적 구도, 이국적 오리엔탈리즘',
      masterpieces: ['민중을 이끄는 자유의 여신', '알제의 여인들', '사르다나팔루스의 죽음'],
      intro: '낭만주의의 선구자. 강렬한 색채와 역동적 구도로 혁명과 열정을 표현했으며, 인상주의에 큰 영향을 주었습니다.'
    },
    prompt: 'Eugène Delacroix Romantic painting style, passionate intense colors, dynamic dramatic compositions, exotic orientalist subjects, swirling energetic movement, emotional turbulence, bold expressive brushwork, painted in Delacroix masterpiece quality',
    color: '#C0392B',
    icon: '🔥'
  },

  {
    id: 'friedrich',
    category: 'romanticism',
    model: 'FLUX',
    order: 17,
    name: '카스파 다비드 프리드리히',
    nameEn: 'Caspar David Friedrich',
    description: '숭고한 자연',
    artist: {
      name: '카스파 다비드 프리드리히',
      nameEn: 'Caspar David Friedrich',
      period: '1774-1840',
      birth: 1774,
      death: 1840,
      lifespan: '1774-1840 (65세)',
      nationality: '독일',
      movement: '낭만주의',
      features: '숭고한 자연, 안개 낀 풍경, 고독한 인물',
      masterpieces: ['안개 바다 위의 방랑자', '떡갈나무 숲의 수도원', '북극해의 난파선'],
      intro: '독일 낭만주의의 대표 화가. 웅장한 자연 앞의 작은 인간을 통해 숭고함과 고독을 표현했습니다.'
    },
    prompt: 'Caspar David Friedrich Romantic painting style, sublime awe-inspiring landscapes, misty atmospheric effects, solitary contemplative figures, rugged mountains and vast seascapes, spiritual transcendent mood, symbolic use of light, painted in Friedrich masterpiece quality',
    color: '#34495E',
    icon: '⛰️'
  },

  {
    id: 'turner',
    category: 'romanticism',
    model: 'FLUX',
    order: 18,
    name: '조지프 말로드 윌리엄 터너',
    nameEn: 'J.M.W. Turner',
    description: '빛과 대기의 마술',
    artist: {
      name: '조지프 말로드 윌리엄 터너',
      nameEn: 'Joseph Mallord William Turner',
      period: '1775-1851',
      birth: 1775,
      death: 1851,
      lifespan: '1775-1851 (76세)',
      nationality: '영국',
      movement: '낭만주의',
      features: '빛의 폭발, 대기의 표현, 추상적 경향',
      masterpieces: ['노예선', '비, 증기, 속도', '전함 테메레르'],
      intro: '영국 낭만주의의 거장. 빛과 색채의 혁명적 표현으로 인상주의를 예고했으며, "빛을 그리는 화가"로 불렸습니다.'
    },
    prompt: 'J.M.W. Turner Romantic painting style, luminous explosive light effects, turbulent dramatic weather, swirling atmospheric mists and clouds, sublime power of nature, loose expressive brushwork bordering abstraction, golden radiant sunlight, painted in Turner masterpiece quality',
    color: '#F39C12',
    icon: '🌅'
  },

  {
    id: 'gericault',
    category: 'romanticism',
    model: 'FLUX',
    order: 19,
    name: '테오도르 제리코',
    nameEn: 'Théodore Géricault',
    description: '비극적 드라마',
    artist: {
      name: '테오도르 제리코',
      nameEn: 'Théodore Géricault',
      period: '1791-1824',
      birth: 1791,
      death: 1824,
      lifespan: '1791-1824 (32세)',
      nationality: '프랑스',
      movement: '낭만주의',
      features: '드라마틱한 순간, 인간의 고통, 사실적 묘사',
      masterpieces: ['메두사의 뗏목', '엡섬 경마', '정신병자 초상 시리즈'],
      intro: '낭만주의 초기의 천재. 인간의 극한 상황을 사실적으로 그렸으며, 32세에 낙마 사고로 요절했습니다.'
    },
    prompt: 'Théodore Géricault Romantic painting style, dramatic human suffering and struggle, powerful muscular figures in distress, dynamic diagonal compositions, stark realism, intense emotional impact, painted in Géricault masterpiece quality',
    color: '#8B0000',
    icon: '⚡'
  },

  // ==================== 6. 인상주의 ====================
  
  {
    id: 'monet',
    category: 'impressionism',
    model: 'FLUX',
    order: 20,
    name: '클로드 모네',
    nameEn: 'Claude Monet',
    description: '빛과 색채의 순간 포착',
    artist: {
      name: '클로드 모네',
      nameEn: 'Claude Monet',
      period: '1840-1926',
      birth: 1840,
      death: 1926,
      lifespan: '1840-1926 (86세)',
      nationality: '프랑스',
      movement: '인상주의',
      features: '빛의 순간 포착, 수련 연작, 대기의 표현',
      masterpieces: ['인상, 해돋이', '수련 연작', '루앙 대성당 연작'],
      intro: '인상주의의 창시자. "인상, 해돋이"로 인상주의라는 이름을 만들었으며, 말년에 지베르니 정원에서 수련을 그렸습니다.'
    },
    prompt: 'Claude Monet Impressionist painting style, soft feathery brushstrokes creating shimmering light effects, pastel colors with lavender purple pink and soft blue, water lilies floating on pond with reflections, dissolving forms in atmospheric misty light, Japanese bridge and weeping willows, dappled sunlight, painted in Monet late Impressionist masterpiece quality',
    color: '#A8D5E2',
    icon: '🌸'
  },

  {
    id: 'renoir',
    category: 'impressionism',
    model: 'FLUX',
    order: 21,
    name: '피에르 오귀스트 르누아르',
    nameEn: 'Pierre-Auguste Renoir',
    description: '따뜻한 인물화의 대가',
    artist: {
      name: '피에르 오귀스트 르누아르',
      nameEn: 'Pierre-Auguste Renoir',
      period: '1841-1919',
      birth: 1841,
      death: 1919,
      lifespan: '1841-1919 (78세)',
      nationality: '프랑스',
      movement: '인상주의',
      features: '따뜻한 피부 톤, 행복한 일상, 부드러운 형태',
      masterpieces: ['물랭 드 라 갈레트', '뱃놀이 파티의 점심', '피아노 치는 소녀들'],
      intro: '인상주의의 인물화가. 행복하고 따뜻한 일상의 순간을 포착했으며, 말년에 류머티즘으로 고통받으면서도 그림을 그렸습니다.'
    },
    prompt: 'Pierre-Auguste Renoir Impressionist painting style, warm luminous rosy skin tones with peach and pink, soft rounded forms with gentle blurred edges, joyful intimate scenes of people in gardens and cafes, dappled sunlight filtering through trees, sensual beautiful figures with rosy cheeks, delicate feathery brushstrokes, painted in Renoir mature Impressionist masterpiece quality',
    color: '#FFB6C1',
    icon: '💃'
  },

  {
    id: 'manet',
    category: 'impressionism',
    model: 'FLUX',
    order: 22,
    name: '에두아르 마네',
    nameEn: 'Édouard Manet',
    description: '근대 회화의 선구자',
    artist: {
      name: '에두아르 마네',
      nameEn: 'Édouard Manet',
      period: '1832-1883',
      birth: 1832,
      death: 1883,
      lifespan: '1832-1883 (51세)',
      nationality: '프랑스',
      movement: '인상주의',
      features: '대담한 구도, 평면적 색면, 현대적 주제',
      masterpieces: ['올랭피아', '풀밭 위의 점심', '폴리 베르제르의 술집'],
      intro: '인상주의의 선구자이자 근대 회화의 아버지. 전통을 파괴하고 현대 도시 생활을 혁신적으로 표현했습니다.'
    },
    prompt: 'Édouard Manet modern Impressionist painting style, bold simplified forms with strong contrasts, confident visible brushstrokes, contemporary urban Parisian scenes, dramatic use of black and white, flat areas of color with minimal modeling, revolutionary composition, painted in Manet groundbreaking masterpiece quality',
    color: '#2C3E50',
    icon: '🎩'
  },

  {
    id: 'degas',
    category: 'impressionism',
    model: 'FLUX',
    order: 23,
    name: '에드가 드가',
    nameEn: 'Edgar Degas',
    description: '발레리나와 움직임',
    artist: {
      name: '에드가 드가',
      nameEn: 'Edgar Degas',
      period: '1834-1917',
      birth: 1834,
      death: 1917,
      lifespan: '1834-1917 (83세)',
      nationality: '프랑스',
      movement: '인상주의',
      features: '발레 장면, 움직임 포착, 독특한 구도',
      masterpieces: ['무용 수업', '압생트', '14세의 어린 무희'],
      intro: '인상주의의 이단아. 야외가 아닌 실내, 특히 발레 연습실을 즐겨 그렸으며, 사진처럼 순간을 포착하는 독특한 구도를 사용했습니다.'
    },
    prompt: 'Edgar Degas Impressionist painting style, dynamic compositions capturing movement and motion, ballet dancers in rehearsal or performance, unusual cropped perspectives like photographic snapshots, pastel colors with emphasis on pink and blue, visible energetic brushstrokes showing gesture, behind-the-scenes intimate moments, painted in Degas distinctive Impressionist masterpiece quality',
    color: '#E6B8AF',
    icon: '🩰'
  },

  {
    id: 'pissarro',
    category: 'impressionism',
    model: 'FLUX',
    order: 24,
    name: '카미유 피사로',
    nameEn: 'Camille Pissarro',
    description: '시골 풍경의 시인',
    artist: {
      name: '카미유 피사로',
      nameEn: 'Camille Pissarro',
      period: '1830-1903',
      birth: 1830,
      death: 1903,
      lifespan: '1830-1903 (73세)',
      nationality: '덴마크령 세인트토마스',
      movement: '인상주의',
      features: '시골 풍경, 작은 붓터치, 자연스러운 색채',
      masterpieces: ['몽마르트르 대로', '붉은 지붕', '퐁투아즈의 채소밭'],
      intro: '인상주의의 대부. 유일하게 8번의 인상파 전시회에 모두 참여했으며, 세잔과 고갱의 스승이기도 했습니다.'
    },
    prompt: 'Camille Pissarro Impressionist painting style, rural countryside and village scenes, small broken pointillist-like brushstrokes, earthy natural color palette with greens and browns, farmers and peasants in daily activities, atmospheric perspective with soft distant hills, humble pastoral subjects, painted in Pissarro gentle Impressionist masterpiece quality',
    color: '#8B7355',
    icon: '🌾'
  },

  // ==================== 7. 후기인상주의 ====================
  
  {
    id: 'vangogh',
    category: 'postImpressionism',
    model: 'FLUX',
    isMaster: true,
    order: 25,
    name: '빈센트 반 고흐',
    nameEn: 'Vincent van Gogh',
    description: '소용돌이치는 별밤',
    artist: {
      name: '빈센트 반 고흐',
      nameEn: 'Vincent van Gogh',
      period: '1853-1890',
      birth: 1853,
      death: 1890,
      lifespan: '1853-1890 (37세)',
      nationality: '네덜란드',
      movement: '후기인상주의',
      features: '소용돌이치는 붓터치, 강렬한 색채, 감정의 폭발',
      masterpieces: ['별이 빛나는 밤', '해바라기', '아를의 침실'],
      intro: '후기인상주의의 천재. 생전에 단 한 점만 팔렸지만, 열정적인 붓터치와 색채로 현대미술에 지대한 영향을 미쳤습니다. 37세에 자살했습니다.'
    },
    prompt: 'Vincent van Gogh Post-Impressionist painting style, bold expressive swirling brushstrokes full of emotion, vibrant intense colors with yellows blues and oranges, thick impasto paint application creating texture, turbulent energetic movement, starry nights and sunflower fields, cypress trees, painted in van Gogh passionate masterpiece quality',
    color: '#F4C430',
    icon: '🌟'
  },

  {
    id: 'gauguin',
    category: 'postImpressionism',
    model: 'FLUX',
    order: 26,
    name: '폴 고갱',
    nameEn: 'Paul Gauguin',
    description: '타히티의 색채',
    artist: {
      name: '폴 고갱',
      nameEn: 'Paul Gauguin',
      period: '1848-1903',
      birth: 1848,
      death: 1903,
      lifespan: '1848-1903 (54세)',
      nationality: '프랑스',
      movement: '후기인상주의',
      features: '평면적 색면, 타히티 원시주의, 상징주의',
      masterpieces: ['우리는 어디서 왔는가', '타히티의 여인들', '황색 그리스도'],
      intro: '후기인상주의의 모험가. 문명을 떠나 타히티로 가서 원시적이고 상징적인 작품을 그렸으며, 반 고흐와의 우정으로 유명합니다.'
    },
    prompt: 'Paul Gauguin Post-Impressionist painting style, bold flat areas of saturated color, exotic Tahitian tropical paradise scenes, symbolic primitive art influences, strong dark outlines separating color regions, warm rich palette with oranges reds and yellows, mystical spiritual atmosphere, decorative pattern-like compositions, painted in Gauguin synthetist masterpiece quality',
    color: '#FF6B35',
    icon: '🏝️'
  },

  {
    id: 'cezanne',
    category: 'postImpressionism',
    model: 'FLUX',
    order: 27,
    name: '폴 세잔',
    nameEn: 'Paul Cézanne',
    description: '현대미술의 아버지',
    artist: {
      name: '폴 세잔',
      nameEn: 'Paul Cézanne',
      period: '1839-1906',
      birth: 1839,
      death: 1906,
      lifespan: '1839-1906 (67세)',
      nationality: '프랑스',
      movement: '후기인상주의',
      features: '기하학적 단순화, 다시점, 구축적 붓터치',
      masterpieces: ['생트빅투아르 산', '카드 놀이하는 사람들', '사과와 오렌지'],
      intro: '현대미술의 아버지. 자연을 원통, 구, 원뿔로 단순화하여 입체주의의 길을 열었으며, 피카소와 마티스에게 영향을 주었습니다.'
    },
    prompt: 'Paul Cézanne Post-Impressionist painting style, simplified geometric forms reducing subjects to cylinders spheres and cones, visible constructive brushstrokes building form, multiple viewpoints combined, Mont Sainte-Victoire and still life arrangements, muted earth tones with blues and greens, structured analytical approach, painted in Cézanne revolutionary masterpiece quality',
    color: '#7B9971',
    icon: '🍎'
  },

  {
    id: 'seurat',
    category: 'postImpressionism',
    model: 'FLUX',
    order: 28,
    name: '조르주 쇠라',
    nameEn: 'Georges Seurat',
    description: '점묘법의 과학',
    artist: {
      name: '조르주 쇠라',
      nameEn: 'Georges Seurat',
      period: '1859-1891',
      birth: 1859,
      death: 1891,
      lifespan: '1859-1891 (31세)',
      nationality: '프랑스',
      movement: '후기인상주의',
      features: '점묘법(Pointillism), 과학적 색채 이론, 정적인 구도',
      masterpieces: ['그랑드자트 섬의 일요일 오후', '서커스', '아니에르의 수욕'],
      intro: '신인상주의의 창시자. 색채 과학을 연구하여 점묘법을 개발했으며, 31세의 젊은 나이에 디프테리아로 사망했습니다.'
    },
    prompt: 'Georges Seurat Post-Impressionist Pointillist painting style, meticulous tiny dots of pure color, scientific color theory application, luminous optical mixing, static harmonious compositions, Sunday afternoon leisure scenes, painted in Seurat Neo-Impressionist masterpiece quality',
    color: '#9FE2BF',
    icon: '🔵'
  },

  // ==================== 8. 야수파 ====================
  
  {
    id: 'matisse',
    category: 'fauvism',
    model: 'FLUX',
    isMaster: true,
    order: 29,
    name: '앙리 마티스',
    nameEn: 'Henri Matisse',
    description: '색채의 조화',
    artist: {
      name: '앙리 마티스',
      nameEn: 'Henri Matisse',
      period: '1869-1954',
      birth: 1869,
      death: 1954,
      lifespan: '1869-1954 (84세)',
      nationality: '프랑스',
      movement: '야수파',
      features: '순수한 색채, 장식적 패턴, 춤과 음악',
      masterpieces: ['춤', '빨강의 조화', '푸른 누드'],
      intro: '야수파의 리더. 순수한 색채와 단순한 형태로 조화와 기쁨을 표현했으며, 84세까지 장수하며 말년에는 종이 컷아웃 작품을 만들었습니다.'
    },
    prompt: 'Henri Matisse Fauvist painting style, bold pure non-naturalistic colors for emotional effect, simplified decorative forms with flowing contours, vibrant reds greens blues and purples in harmonious arrangements, dance and music themes with joyful movement, flat pattern-like surfaces, sensual elegant compositions, painted in Matisse refined Fauvist masterpiece quality',
    color: '#FF1744',
    icon: '💃'
  },

  {
    id: 'derain',
    category: 'fauvism',
    model: 'FLUX',
    order: 30,
    name: '앙드레 드랭',
    nameEn: 'André Derain',
    description: '순수 색채의 해방',
    artist: {
      name: '앙드레 드랭',
      nameEn: 'André Derain',
      period: '1880-1954',
      birth: 1880,
      death: 1954,
      lifespan: '1880-1954 (74세)',
      nationality: '프랑스',
      movement: '야수파',
      features: '폭발적 색채, 강렬한 보색 대비, 자유로운 붓터치',
      masterpieces: ['런던 브리지', '콜리우르의 배들', '풍경'],
      intro: '야수파의 공동 창립자. 마티스와 함께 야수파 운동을 이끌었으며, 자연의 색을 무시하고 순수한 색채로 감정을 표현했습니다.'
    },
    prompt: 'André Derain Fauvist painting style, explosive arbitrary colors unrelated to natural appearance, vivid complementary color contrasts, thick expressive brushstrokes, landscapes and portraits with wild color, brilliant saturated palette, spontaneous energetic paint application, painted in Derain dynamic Fauvist masterpiece quality',
    color: '#00BCD4',
    icon: '🦁'
  },

  {
    id: 'vlaminck',
    category: 'fauvism',
    model: 'FLUX',
    order: 31,
    name: '모리스 드 블라맹크',
    nameEn: 'Maurice de Vlaminck',
    description: '격정적 색채의 폭풍',
    artist: {
      name: '모리스 드 블라맹크',
      nameEn: 'Maurice de Vlaminck',
      period: '1876-1958',
      birth: 1876,
      death: 1958,
      lifespan: '1876-1958 (82세)',
      nationality: '프랑스',
      movement: '야수파',
      features: '폭력적 색채, 튜브에서 직접 짜낸 물감, 격정적 에너지',
      masterpieces: ['샤투의 센 강', '붉은 나무들', '폭풍우 치는 풍경'],
      intro: '야수파 중 가장 격정적. 튜브에서 직접 짜낸 순수한 색으로 본능적으로 그렸으며, "나는 반 고흐보다 더 사랑한다"고 말했습니다.'
    },
    prompt: 'Maurice de Vlaminck Fauvist painting style, violent intense colors applied with raw energy, thick impasto paint squeezed directly from tube, turbulent dynamic brushwork, dramatic stormy skies and windswept landscapes, emotional power over composition, instinctive spontaneous painting, painted in Vlaminck passionate Fauvist masterpiece quality',
    color: '#FF5722',
    icon: '⚡'
  },

  // ==================== 9. 표현주의 ====================
  
  {
    id: 'munch',
    category: 'expressionism',
    model: 'FLUX',
    isMaster: true,
    order: 32,
    name: '에드바르 뭉크',
    nameEn: 'Edvard Munch',
    description: '절규하는 영혼',
    artist: {
      name: '에드바르 뭉크',
      nameEn: 'Edvard Munch',
      period: '1863-1944',
      birth: 1863,
      death: 1944,
      lifespan: '1863-1944 (80세)',
      nationality: '노르웨이',
      movement: '표현주의',
      features: '실존적 불안, 소용돌이치는 형태, 비명, 고독',
      masterpieces: ['절규', '마돈나', '병실에서의 죽음'],
      intro: '표현주의의 선구자. 실존적 불안과 고독을 표현했으며, "절규"는 현대인의 불안을 상징하는 아이콘이 되었습니다.'
    },
    prompt: 'Edvard Munch Expressionist painting style, intense psychological anxiety and existential emotion, distorted swirling forms conveying inner turmoil, sinuous flowing lines creating movement, dramatic color contrasts with reds oranges and blues, isolated alienated figures, screaming faces and expressions of anguish, haunting atmospheric quality, painted in Munch emotionally powerful masterpiece quality',
    color: '#E74C3C',
    icon: '😱'
  },

  {
    id: 'kirchner',
    category: 'expressionism',
    model: 'FLUX',
    order: 33,
    name: '에른스트 루트비히 키르히너',
    nameEn: 'Ernst Ludwig Kirchner',
    description: '베를린 거리의 긴장',
    artist: {
      name: '에른스트 루트비히 키르히너',
      nameEn: 'Ernst Ludwig Kirchner',
      period: '1880-1938',
      birth: 1880,
      death: 1938,
      lifespan: '1880-1938 (58세)',
      nationality: '독일',
      movement: '표현주의',
      features: '각진 형태, 도시의 소외, 강렬한 색 대비',
      masterpieces: ['베를린 거리', '자화상', '다섯 명의 여인'],
      intro: '독일 표현주의 그룹 브뤼케의 리더. 현대 도시의 긴장과 소외를 표현했으며, 나치에 의해 퇴폐 예술가로 낙인찍혀 자살했습니다.'
    },
    prompt: 'Ernst Ludwig Kirchner Expressionist painting style, angular jagged brushstrokes creating tension, elongated distorted figures with mask-like faces, vibrant clashing colors with acidic greens and harsh pinks, urban Berlin street scenes with psychological edge, woodcut-like bold black outlines, sense of alienation and anxiety in modern city, painted in Kirchner intense German Expressionist masterpiece quality',
    color: '#27AE60',
    icon: '🏙️'
  },

  {
    id: 'nolde',
    category: 'expressionism',
    model: 'FLUX',
    order: 34,
    name: '에밀 놀데',
    nameEn: 'Emil Nolde',
    description: '격렬한 색채의 폭발',
    artist: {
      name: '에밀 놀데',
      nameEn: 'Emil Nolde',
      period: '1867-1956',
      birth: 1867,
      death: 1956,
      lifespan: '1867-1956 (88세)',
      nationality: '독일',
      movement: '표현주의',
      features: '폭발적 색채, 종교적 격정, 수채화적 번짐',
      masterpieces: ['최후의 만찬', '춤추는 사람들', '가면들'],
      intro: '독일 표현주의의 색채 거장. 극도로 채도 높은 색으로 종교적 격정을 표현했으며, 나치 시대에 그림 금지를 당했지만 비밀리에 1000점 이상 그렸습니다.'
    },
    prompt: 'Emil Nolde Expressionist painting style, violent explosive colors with maximum saturation, loose gestural brushwork conveying raw emotion, watercolor-like bleeding and mixing of pigments, religious and mystical subjects with primitive intensity, glowing luminous color contrasts, spontaneous uninhibited application of paint, passionate spiritual energy, painted in Nolde powerful Expressionist masterpiece quality',
    color: '#8E44AD',
    icon: '💥'
  },

  {
    id: 'schiele',
    category: 'expressionism',
    model: 'FLUX',
    order: 35,
    name: '에곤 실레',
    nameEn: 'Egon Schiele',
    description: '뒤틀린 신체의 고백',
    artist: {
      name: '에곤 실레',
      nameEn: 'Egon Schiele',
      period: '1890-1918',
      birth: 1890,
      death: 1918,
      lifespan: '1890-1918 (28세)',
      nationality: '오스트리아',
      movement: '표현주의',
      features: '뒤틀린 신체, 각진 윤곽선, 성적 솔직함',
      masterpieces: ['포옹', '자화상', '죽음과 소녀'],
      intro: '오스트리아 표현주의의 천재. 에로틱하고 뒤틀린 신체로 내면의 불안을 표현했으며, 클림트의 제자였습니다. 28세에 스페인 독감으로 사망했습니다.'
    },
    prompt: 'Egon Schiele Expressionist painting style, contorted angular body poses expressing psychological intensity, thin nervous contour lines with sharp edges, raw sexual and emotional honesty, emaciated distorted figures, muted earth tones with occasional bright accents, sense of vulnerability and isolation, provocative uncomfortable compositions, painted in Schiele confrontational Austrian Expressionist masterpiece quality',
    color: '#D35400',
    icon: '🎨'
  },

  // ==================== 10. 거장 (거장 탭 전용) - 연대기순 ====================
  
  {
    id: 'vangogh-master',
    category: 'masters',
    model: 'FLUX',
    isMaster: true,
    order: 36,
    name: '빈센트 반 고흐',
    nameEn: 'Vincent van Gogh',
    description: '소용돌이치는 별밤',
    artist: {
      name: '빈센트 반 고흐',
      nameEn: 'Vincent van Gogh',
      period: '1853-1890',
      birth: 1853,
      death: 1890,
      lifespan: '1853-1890 (37세)',
      nationality: '네덜란드',
      movement: '후기인상주의',
      features: '격렬한 감정의 직접적 표현, 두터운 임파스토, 회오리치는 에너지',
      masterpieces: ['별이 빛나는 밤', '해바라기', '까마귀가 나는 밀밭'],
      intro: '비극적 삶과 불멸의 예술. 10년간 그린 900점의 작품으로 표현주의와 20세기 미술 전체에 혁명을 일으킨 천재입니다.'
    },
    prompt: 'Vincent van Gogh Post-Impressionist painting style, bold expressive swirling brushstrokes full of emotion, vibrant intense colors with yellows blues and oranges, thick impasto paint application creating texture, turbulent energetic movement, starry nights and sunflower fields, cypress trees, painted in van Gogh passionate masterpiece quality',
    color: '#F4C430',
    icon: '🌟'
  },

  {
    id: 'klimt',
    category: 'masters',
    model: 'FLUX',
    isMaster: true,
    order: 37,
    name: '구스타프 클림트',
    nameEn: 'Gustav Klimt',
    description: '황금빛 장식의 대가',
    artist: {
      name: '구스타프 클림트',
      nameEn: 'Gustav Klimt',
      period: '1862-1918',
      birth: 1862,
      death: 1918,
      lifespan: '1862-1918 (55세)',
      nationality: '오스트리아',
      movement: '아르누보',
      features: '황금시대 비잔틴 부활, 에로티시즘과 신성함의 융합, 장식예술의 회화적 승화',
      masterpieces: ['키스', '아델레 블로흐바우어의 초상', '다나에'],
      intro: '세기말 비엔나의 황제. 빈 분리파를 이끌며 전통과 결별했고, 황금빛 장식으로 현대 그래픽 디자인의 토대를 세웠습니다.'
    },
    prompt: 'Gustav Klimt Art Nouveau style, luxurious gold leaf and metallic patterns, intricate decorative ornamental designs with spirals and geometric shapes, sensual elongated figures embraced in golden embrace, mosaic-like surfaces with Byzantine influence, rich jewel-tone colors, symbolic mystical imagery, flat ornamental space, painted in Klimt opulent Viennese Art Nouveau masterpiece quality',
    color: '#FFD700',
    icon: '✨'
  },

  {
    id: 'munch-master',
    category: 'masters',
    model: 'FLUX',
    isMaster: true,
    order: 38,
    name: '에드바르 뭉크',
    nameEn: 'Edvard Munch',
    description: '절규하는 영혼',
    artist: {
      name: '에드바르 뭉크',
      nameEn: 'Edvard Munch',
      period: '1863-1944',
      birth: 1863,
      death: 1944,
      lifespan: '1863-1944 (80세)',
      nationality: '노르웨이',
      movement: '표현주의',
      features: '심리적 두려움의 시각화, 색채 심리학, 반복적 주제 탐구',
      masterpieces: ['절규', '생명의 춤', '별이 빛나는 밤'],
      intro: '현대인의 불안을 그린 선지자. "절규"는 20세기 가장 영향력 있는 이미지가 되었으며, 80년 생애 동안 실존적 고통을 예술로 승화시켰습니다.'
    },
    prompt: 'Edvard Munch Expressionist painting style, intense psychological anxiety and existential emotion, distorted swirling forms conveying inner turmoil, sinuous flowing lines creating movement, dramatic color contrasts with reds oranges and blues, isolated alienated figures, screaming faces and expressions of anguish, haunting atmospheric quality, painted in Munch emotionally powerful masterpiece quality',
    color: '#E74C3C',
    icon: '😱'
  },

  {
    id: 'matisse-master',
    category: 'masters',
    model: 'FLUX',
    isMaster: true,
    order: 39,
    name: '앙리 마티스',
    nameEn: 'Henri Matisse',
    description: '색채의 조화',
    artist: {
      name: '앙리 마티스',
      nameEn: 'Henri Matisse',
      period: '1869-1954',
      birth: 1869,
      death: 1954,
      lifespan: '1869-1954 (84세)',
      nationality: '프랑스',
      movement: '야수파',
      features: '색채 자체의 독립적 힘, 평면적 장식성, 기쁨의 철학',
      masterpieces: ['춤', '음악', '재즈 (컷아웃)'],
      intro: '20세기 색채혁명의 거장. 피카소와 쌍벽을 이루며 현대미술을 이끌었고, 84세까지 끊임없이 혁신하며 "가위로 그림을 그렸습니다".'
    },
    prompt: 'Henri Matisse Fauvist painting style, bold pure non-naturalistic colors for emotional effect, simplified decorative forms with flowing contours, vibrant reds greens blues and purples in harmonious arrangements, dance and music themes with joyful movement, flat pattern-like surfaces, sensual elegant compositions, painted in Matisse refined Fauvist masterpiece quality',
    color: '#FF1744',
    icon: '💃'
  },

  {
    id: 'picasso',
    category: 'masters',
    model: 'FLUX',
    isMaster: true,
    order: 40,
    name: '파블로 피카소',
    nameEn: 'Pablo Picasso',
    description: '입체주의의 혁명가',
    artist: {
      name: '파블로 피카소',
      nameEn: 'Pablo Picasso',
      period: '1881-1973',
      birth: 1881,
      death: 1973,
      lifespan: '1881-1973 (91세)',
      nationality: '스페인',
      movement: '입체주의',
      features: '시점의 혁명적 해체, 형태의 기하학적 재구성, 끊임없는 양식 변화',
      masterpieces: ['아비뇽의 처녀들', '게르니카', '꿈'],
      intro: '20세기 미술의 절대 군주. 입체주의로 500년 원근법을 파괴했고, 91년 생애 동안 5만점을 창조하며 미술사 자체를 재정의했습니다.'
    },
    prompt: 'Pablo Picasso Cubist painting style, fragmented geometric forms showing multiple viewpoints simultaneously, angular faceted planes intersecting, analytical deconstruction of subjects, overlapping transparent surfaces, revolutionary approach to perspective and space, painted in Picasso groundbreaking Cubist masterpiece quality',
    color: '#795548',
    icon: '🎭'
  },

  {
    id: 'dali',
    category: 'masters',
    model: 'FLUX',
    isMaster: true,
    order: 41,
    name: '살바도르 달리',
    nameEn: 'Salvador Dalí',
    description: '초현실주의의 꿈',
    artist: {
      name: '살바도르 달리',
      nameEn: 'Salvador Dalí',
      period: '1904-1989',
      birth: 1904,
      death: 1989,
      lifespan: '1904-1989 (84세)',
      nationality: '스페인',
      movement: '초현실주의',
      features: '무의식의 정밀한 시각화, 편집광적 비판방법, 상징의 극대화',
      masterpieces: ['기억의 지속', '아토믹 레다', '십자가의 성 요한'],
      intro: '광기와 천재의 경계. 프로이트의 무의식을 완벽한 기교로 구현했고, 예술가를 브랜드화한 최초의 현대 아티스트입니다.'
    },
    prompt: 'Salvador Dalí Surrealist painting style, hyper-realistic precise details in impossible dreamlike scenes, melting distorted objects defying physics and logic, vast empty desert landscapes with dramatic perspective, symbolic metaphorical imagery from subconscious mind, smooth glossy surfaces with meticulous rendering, mysterious golden light creating long shadows, painted in Dalí iconic Surrealist masterpiece quality',
    color: '#F39C12',
    icon: '🎨'
  },

  // ==================== 11. 동양화 ====================
  
  {
    id: 'korean-minhwa',
    category: 'oriental',
    model: 'FLUX',
    order: 39,
    name: '한국 민화',
    nameEn: 'Korean Minhwa',
    description: '호랑이와 모란의 해학',
    artist: {
      name: '한국 민화 양식',
      nameEn: 'Korean Folk Painting Style',
      period: '조선시대 (1600-1900)',
      birth: null,
      death: null,
      lifespan: '조선시대 (1600-1900)',
      nationality: '한국',
      movement: '동양화',
      features: '소박한 해학, 밝은 원색(오방색), 호랑이와 까치',
      masterpieces: ['호작도', '화조도', '책거리'],
      intro: '조선시대 서민들의 그림. 밝은 원색과 해학적 표현으로 민간 신앙과 염원을 담았으며, 소박하지만 생명력 넘치는 한국 미의 정수입니다.'
    },
    prompt: 'Korean Minhwa folk painting style, naive charming simplicity with playful expressions, bold vibrant primary colors (red, blue, yellow) in traditional obangsaek, decorative flattened perspective, cheerful folk art aesthetic, tigers and magpies, peony flowers and auspicious symbols, painted on Korean hanji paper, painted in Joseon dynasty folk art masterpiece quality',
    color: '#FF6B6B',
    icon: '🐯'
  },

  {
    id: 'chinese-ink',
    category: 'oriental',
    model: 'FLUX',
    order: 40,
    name: '중국 수묵화',
    nameEn: 'Chinese Ink Painting',
    description: '먹의 농담과 여백의 미',
    artist: {
      name: '중국 수묵화 양식',
      nameEn: 'Chinese Ink Wash Painting Style',
      period: '송~청대 (1000-1900)',
      birth: null,
      death: null,
      lifespan: '송~청대 (1000-1900)',
      nationality: '중국',
      movement: '동양화',
      features: '먹의 농담, 여백의 미, 사군자(매난국죽)',
      masterpieces: ['제백석의 새우', '팔대산인의 물고기', '정섭의 대나무'],
      intro: '중국 문인화의 정수. 먹 하나로 농담을 표현하며, 비어있는 여백을 통해 무한을 담아냅니다. 정신의 표현을 최고로 여깁니다.'
    },
    prompt: 'Chinese ink wash painting style (shuimohua), monochrome black ink gradations from dark to light, expressive calligraphic brushstrokes, shrimp bamboo plum blossoms, minimalist elegant simplicity, white negative space (liubai), literati scholar painting tradition, spontaneous gestural marks, painted in Chinese xieyi masterpiece quality',
    color: '#2C3E50',
    icon: '🖌️'
  },

  {
    id: 'japanese-ukiyoe',
    category: 'oriental',
    model: 'FLUX',
    order: 41,
    name: '일본 우키요에',
    nameEn: 'Japanese Ukiyo-e',
    description: '파도와 후지산',
    artist: {
      name: '일본 우키요에 양식',
      nameEn: 'Japanese Ukiyo-e Woodblock Print Style',
      period: '에도시대 (1600-1900)',
      birth: null,
      death: null,
      lifespan: '에도시대 (1600-1900)',
      nationality: '일본',
      movement: '동양화',
      features: '목판화, 대담한 구도, 프러시안 블루',
      masterpieces: ['호쿠사이의 파도', '히로시게의 비', '우타마로의 미인도'],
      intro: '에도시대 서민 문화의 꽃. 목판화 기법으로 대담한 구도와 선명한 색채를 보여주며, 인상파 화가들에게 큰 영향을 주었습니다.'
    },
    prompt: 'Japanese Ukiyo-e woodblock print style, bold graphic composition with dramatic cropping, vibrant flat colors with Prussian blue, The Great Wave and Mount Fuji motifs, beautiful geisha and landscapes, strong black outlines, stylized clouds and water, intricate kimono patterns, painted in Edo period ukiyo-e masterpiece quality',
    color: '#4169E1',
    icon: '🗻'
  }
];

// 거장 필터링 (거장 탭용)
export const masterArtists = artStyles.filter(style => style.isMaster === true);

// 카테고리별로 화가 가져오기
export function getArtistsByCategory(category) {
  return artStyles
    .filter(style => style.category === category)
    .sort((a, b) => a.order - b.order);
}

// 화가 ID로 찾기
export function getArtistById(id) {
  return artStyles.find(style => style.id === id);
}

// 카테고리 정보 가져오기
export function getCategoryInfo(category) {
  return styleCategories[category];
}
