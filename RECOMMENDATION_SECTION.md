# 🎯 추천 대상 (Checklist) 섹션 - 구현 완료

## 📋 개요

**SECTION 4.5 - 추천 대상 (Checklist)**을 TECHNOLOGY 섹션 바로 아래에 추가했습니다.

---

## 📍 위치 및 논리

### 위치
- **SECTION 4 (TECHNOLOGY)** 바로 아래
- **SECTION 5 (TRANSPARENCY)** 바로 위

### 전략적 배치 논리
> "소화가 이렇게 잘 된다고? 그럼 나한테 딱이네!"

사용자가 기술력(마이크로 분말화, 120°C 고압 유화)을 보고 나서, "이게 나한테 필요한가?"를 판단할 수 있는 **최적의 타이밍**입니다.

---

## 🎨 디자인 컨셉

### 색상 시스템
- **배경**: Warm Sand (#EBE3D5) - 차분하고 따뜻한 샌드 톤
- **라인 아트**: Burnt Orange (#D97742) - 섬세한 펜 드로잉 스타일
- **카드 배경**: White (#FFFFFF)
- **강조 박스**: Golden Gradient (#FFF8F0 → #FFEFD5)

### 스타일 특징
- 얇고 섬세한 라인 아트 (Line Art)
- 딱딱한 픽토그램 대신 **감성적인 드로잉**
- 번트 오렌지 색상으로 통일감 유지

---

## 👥 4가지 추천 유형

### 1️⃣ 냉증 (Cold)
#### 대상
손발이 차가운 분

#### 카피
> "한여름 에어컨 바람에도  
> 손발이 시려 양말을 찾는 분"

#### 시각화 (AI Line Art)
- **모티프**: 따뜻한 찻잔을 감싸 쥔 손
- **프롬프트**:
```
Line art of hands gently holding a warm steaming cup, focus on the warmth radiating from the cup.
```

#### 연결되는 강점
**STEP 1, 2 (쑥 & 들기름의 순환)**

---

### 2️⃣ 소화 (Digestion)
#### 대상
소화가 걱정인 분

#### 카피
> "보양식은 좋지만,  
> 먹고 나면 속이 더부룩했던 분"

#### 시각화 (AI Line Art)
- **모티프**: 배에 손을 얹고 편안해하는 모습
- **프롬프트**:
```
Line art of a person gently placing a hand on their stomach with a peaceful expression, symbolizing digestive comfort.
```

#### 연결되는 강점
**기술력 (미세가루 & 고압 유화)**

---

### 3️⃣ 습관 (Routine)
#### 대상
지친 직장인

#### 카피
> "퇴근 후, 지친 몸을 데워줄  
> 나만의 따뜻한 의식이 필요한 분"

#### 시각화 (AI Line Art)
- **모티프**: 노을 진 창가를 바라보며 휴식하는 뒷모습
- **프롬프트**:
```
Line art of a person relaxing on a chair looking out a window at sunset, silhouette style, cozy atmosphere.
```

#### 연결되는 강점
**컨셉 (밤의 습관)**

---

### 4️⃣ 안전 (Safety)
#### 대상
깐깐한 엄마/임산부

#### 카피
> "내 아이와 내가 먹을 거니까,  
> 성분표를 깐깐하게 따지는 분"

#### 시각화 (AI Line Art)
- **모티프**: 임산부가 배를 감싼 모습
- **프롬프트**:
```
Line art of a pregnant woman gently holding her belly, representing safety and care.
```

#### 연결되는 강점
**투명성 (마더투세이프, 19가지 전성분)**

---

## 📝 메인 카피

### 타이틀
> **이런 분들이라면, 꼭 시작해보세요.**

### 서브타이틀
> "당신의 밤이 오늘보다 **1℃ 더 따뜻해질 것**입니다."

### 결론 메시지
> "하나라도 해당된다면, **온애정 추어탕**이 당신의 답입니다."

---

## 💻 레이아웃 & 구조

### Desktop (1200px)
```
┌─────────────────────────────────────┐
│   타이틀 + 서브타이틀 (Center)        │
├─────────────────────────────────────┤
│  ┌────────┐  ┌────────┐             │
│  │ 냉증   │  │ 소화   │   (2x2 Grid) │
│  └────────┘  └────────┘             │
│  ┌────────┐  ┌────────┐             │
│  │ 습관   │  │ 안전   │             │
│  └────────┘  └────────┘             │
├─────────────────────────────────────┤
│   결론 메시지 (Center, White Box)    │
└─────────────────────────────────────┘
```

### Tablet (1024px 이하)
- **1 Column** 레이아웃
- 카드 순서: 냉증 → 소화 → 습관 → 안전

### Mobile (768px 이하)
- **1 Column** 레이아웃
- 패딩 감소 (40px → 25px)
- 타이틀 크기 축소 (2.5rem → 1.8rem)

---

## 🎨 카드 디자인 상세

### 카드 구조
```html
┌──────────────────────────────┐
│   [Illustration - SVG Line]  │  ← Line Art (Burnt Orange)
├──────────────────────────────┤
│   [Badge: 냉증/소화/습관/안전] │  ← Burnt Orange Background
│                              │
│   [Title: 손발이 차가운 분]   │  ← Dark Charcoal
│                              │
│   [Situation Copy]           │  ← Gray #666
│   "한여름 에어컨..."          │
│                              │
│  ┌────────────────────────┐  │
│  │ 연결되는 강점           │  │  ← Golden Gradient Box
│  │ STEP 1, 2 (쑥 & 들기름) │  │
│  └────────────────────────┘  │
└──────────────────────────────┘
```

### 호버 효과
- `translateY(-8px)` - 위로 8px 이동
- `box-shadow: 0 15px 40px rgba(217,119,66,0.2)` - 그림자 강화
- `border-color: var(--burnt-orange)` - 테두리 강조

---

## 🖼️ AI 이미지 프롬프트 (전체)

### 공통 프롬프트
```
Minimalist continuous line art illustration in Burnt Orange color on a Warm Greige background. 
Elegant, sophisticated, simple, conveying warmth and comfort.
```

### 각 유형별 프롬프트

#### 1. 냉증 (Cold)
```
Line art of hands gently holding a warm steaming cup, focus on the warmth radiating from the cup.
```

#### 2. 소화 (Digestion)
```
Line art of a person gently placing a hand on their stomach with a peaceful expression, symbolizing digestive comfort.
```

#### 3. 습관 (Routine)
```
Line art of a person relaxing on a chair looking out a window at sunset, silhouette style, cozy atmosphere.
```

#### 4. 안전 (Safety)
```
Line art of a pregnant woman gently holding her belly, representing safety and care.
```

---

## 💡 전략적 의도

### 1. 타이밍
기술력 섹션을 본 직후, "이게 나한테 맞는가?"를 판단할 수 있는 최적의 순간.

### 2. 개인화
4가지 유형으로 **다양한 타겟층**을 포괄:
- 냉증: 순환 문제 (20~40대 여성)
- 소화: 보양식 부담 (중장년층)
- 습관: 일상 루틴 필요 (직장인)
- 안전: 성분 투명성 중시 (임산부, 육아맘)

### 3. 연결성
각 유형을 **제품의 구체적인 강점**과 연결:
- 냉증 → STEP 1, 2 (온기 3단계)
- 소화 → 기술력 (마이크로 분말화)
- 습관 → 컨셉 (밤의 습관)
- 안전 → 투명성 (마더투세이프)

### 4. 전환 유도
"하나라도 해당된다면" → 구매 의사 결정 촉진

---

## 📱 반응형 디자인

### Desktop (1200px+)
- 2x2 Grid 레이아웃
- 카드 크기: 균등 분배
- 호버 효과: 활성화

### Tablet (1024px 이하)
- 1 Column 레이아웃
- 타이틀 크기: 2rem
- 카드 간격 유지

### Mobile (768px 이하)
- 1 Column 레이아웃
- 카드 패딩: 25px
- 타이틀 크기: 1.8rem
- 카드 타이틀: 1.3rem

---

## 🔧 기술 스택

### HTML
- Semantic HTML5
- SVG inline (Line Art)
- Grid layout structure

### CSS
- CSS Grid (2 columns)
- Flexbox (card internals)
- CSS Variables (color palette)
- Transition & Transform (hover effects)
- Media Queries (responsive)

### Design System
- Warm Sand background (#EBE3D5)
- Burnt Orange line art (#D97742)
- Golden Gradient connection box
- White card background
- Consistent spacing & typography

---

## ✅ 완료된 작업

### HTML 구현
- [x] 추천 섹션 HTML 구조 작성
- [x] 4개 카드 컴포넌트 구현
- [x] SVG 라인 아트 placeholder
- [x] 연결 강점 박스 추가

### CSS 구현
- [x] 섹션 스타일 (Warm Sand 배경)
- [x] 카드 레이아웃 (2x2 Grid)
- [x] 호버 효과 (translateY, border)
- [x] 라인 아트 스타일 (Burnt Orange)
- [x] 반응형 디자인 (Desktop/Tablet/Mobile)

### Git & 문서
- [x] Git commit 완료
- [x] 상세 커밋 메시지
- [x] 원격 Push 완료
- [x] 이 문서 작성

---

## 🚀 Live Preview

### URL
**https://8000-ia90c4vz3slz6trhwsto6-d0b9e1e2.sandbox.novita.ai**

> ⚠️ **브라우저 캐시 클리어 권장** (Ctrl+Shift+R / Cmd+Shift+R)

---

## 📊 섹션 흐름 (최종)

```
1. INTRO (노을빛을 받은 식탁)
   ↓
2. PROBLEM (차가움과 따뜻함의 대비)
   ↓
3. SOLUTION (빛으로 흐르는 과학 - Core Warming System)
   ↓
4. TECHNOLOGY (노을에 비친 질감 - 마이크로 분말화 & 고압 유화)
   ↓
★ 4.5. RECOMMENDATION (추천 대상 - Checklist) ← 새로 추가!
   ↓
5. TRANSPARENCY (해 질 녘의 서재 - 안전성 & 투명성)
   ↓
6. OUTRO (완전한 온기의 포옹)
```

---

## 🎯 기대 효과

### 1. 개인화된 공감
각 타겟층이 "나를 위한 제품이다"라고 느낄 수 있음

### 2. 구매 전환율 향상
명확한 추천 유형 제시 → 의사결정 촉진

### 3. 제품 강점 재확인
각 유형을 제품 강점과 연결 → 신뢰도 강화

### 4. 스토리 흐름 개선
기술력 → 추천 대상 → 안전성 (자연스러운 전환)

---

## 📝 다음 단계 (선택사항)

### AI 이미지 생성
현재 SVG placeholder를 실제 AI 생성 라인 아트로 교체:
1. Midjourney, DALL-E, Stable Diffusion 등 사용
2. 각 유형별 프롬프트 입력
3. Burnt Orange 라인 아트 스타일로 생성
4. HTML의 `.illustration-placeholder` 영역에 삽입

---

**작성일**: 2024-12-06  
**버전**: Golden Hour Warmth v1.1  
**섹션**: SECTION 4.5 - Recommendation (Checklist)  
**작성자**: Genspark AI Developer
