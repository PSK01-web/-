# 🎨 Clean & Chic Redesign Guide
## 이솝(Aesop) / 오니스트 스타일 재디자인 가이드

---

## 📋 핵심 컨셉

> "**섹션 2(문제)**에서는 논문과 그래프로 **'과학책'**처럼 신뢰를 주고,  
> **섹션 3(해결)**에서는 텍스트를 확 줄여서 **'잡지'**처럼 여백의 미를 살려주세요.  
> 색감은 형광등 불빛이 아니라, **오후 5시의 따뜻한 노을빛**으로 통일해주세요."

---

## 🔄 SECTION 3. 온기 3단계 (SOLUTION) - Clean & Chic

### ❌ Before (복잡한 설명)
- 긴 문장과 논문 레퍼런스
- 과학적 설명이 길게 나열
- 동의보감 인용 + 현대 과학 설명 + 논문 레퍼런스

### ✅ After (Clean & Chic)

#### 레이아웃
**가로형 3단 배열** (Desktop)  
**세로 3단** (Mobile)  
**여백을 많이** 줄 것

---

### 📐 3단계 카드 구조

```html
<div class="steps-clean-grid">
    <!-- STEP 1: Wake Up -->
    <div class="step-clean-card">
        <div class="step-icon">🌿</div>
        <h3 class="step-number">STEP 1</h3>
        <h4 class="step-title-en">Wake Up</h4>
        <p class="step-title-kr">깨우다</p>
        
        <div class="step-keyword">
            <h5 class="keyword-title">Cineol</h5>
            <p class="keyword-subtitle">(시네올)</p>
        </div>
        
        <p class="step-oneline">긴장 이완 & 순환 준비</p>
    </div>
    
    <!-- STEP 2: Flow -->
    <div class="step-clean-card">
        <div class="step-icon">💧</div>
        <h3 class="step-number">STEP 2</h3>
        <h4 class="step-title-en">Flow</h4>
        <p class="step-title-kr">돌리다</p>
        
        <div class="step-keyword">
            <h5 class="keyword-title">Omega-3</h5>
            <p class="keyword-subtitle">(오메가3)</p>
        </div>
        
        <p class="step-oneline">막힘없는 온기 전달</p>
    </div>
    
    <!-- STEP 3: Lock -->
    <div class="step-clean-card">
        <div class="step-icon">🐟</div>
        <h3 class="step-number">STEP 3</h3>
        <h4 class="step-title-en">Lock</h4>
        <p class="step-title-kr">가두다</p>
        
        <div class="step-keyword">
            <h5 class="keyword-title">High-Protein</h5>
            <p class="keyword-subtitle">(고단백)</p>
        </div>
        
        <p class="step-oneline">스스로 열을 내는 힘</p>
    </div>
</div>
```

---

### 🎨 CSS 스타일 (Clean & Chic)

```css
.steps-clean-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 40px;
}

.step-clean-card {
    text-align: center;
    padding: 60px 40px;
    background: white;
    border-radius: 0; /* 이솝 스타일: 모서리 각지게 */
    border: 1px solid #E8E4DE;
    transition: all 0.3s ease;
}

.step-clean-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.08);
}

.step-icon {
    font-size: 4rem;
    margin-bottom: 30px;
}

.step-number {
    font-size: 0.85rem;
    font-weight: 500;
    color: #999;
    letter-spacing: 2px;
    margin-bottom: 10px;
}

.step-title-en {
    font-size: 1.8rem;
    font-weight: 600;
    color: #2C2520;
    margin-bottom: 8px;
}

.step-title-kr {
    font-size: 1rem;
    font-weight: 400;
    color: #666;
    margin-bottom: 40px;
}

.step-keyword {
    margin: 40px 0;
    padding: 30px 20px;
    background: linear-gradient(135deg, #FFF8F0, #FFF);
    border-left: 3px solid #D97742;
}

.keyword-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #D97742;
    margin-bottom: 5px;
}

.keyword-subtitle {
    font-size: 0.95rem;
    color: #666;
}

.step-oneline {
    font-size: 1rem;
    line-height: 1.6;
    color: #555;
    margin-top: 30px;
}

/* Mobile */
@media (max-width: 768px) {
    .steps-clean-grid {
        grid-template-columns: 1fr;
        gap: 40px;
        padding: 60px 20px;
    }
}
```

---

### 📝 하단 각주 (References)

```html
<div class="steps-footer-references">
    <p class="ref-footnote">
        *Key Ingredients Ref: Metabolism (2012), Am J Clin Nutr (2009), 
        J. Pharm. Pharmacol (2004)
    </p>
</div>
```

```css
.steps-footer-references {
    text-align: center;
    margin-top: 60px;
    padding-top: 30px;
    border-top: 1px solid #E8E4DE;
}

.ref-footnote {
    font-size: 0.75rem;
    color: #999;
    font-style: italic;
}
```

---

### 🔍 시너지 원료 15종

```html
<div class="synergy-ingredients">
    <h4 class="synergy-title">시너지 원료 15종</h4>
    <div class="ingredient-icons">
        <span class="ingredient-icon" title="생강">🫚</span>
        <span class="ingredient-icon" title="고춧가루">🌶️</span>
        <span class="ingredient-icon" title="흑후추">⚫</span>
        <span class="ingredient-icon" title="검은콩">🫘</span>
        <span class="ingredient-icon" title="마늘">🧄</span>
        <span class="ingredient-icon" title="양파">🧅</span>
        <span class="ingredient-icon" title="대파">🌱</span>
        <span class="ingredient-icon" title="된장">🍜</span>
        <span class="ingredient-icon" title="들깨">🌰</span>
        <span class="ingredient-icon" title="참기름">🛢️</span>
        <span class="ingredient-icon" title="발아현미">🌾</span>
        <span class="ingredient-icon" title="사골육수">🍖</span>
        <span class="ingredient-icon" title="소금">🧂</span>
        <span class="ingredient-icon" title="천연조미료">✨</span>
        <span class="ingredient-icon" title="Non-GMO 대두유">🌿</span>
    </div>
    <p class="synergy-subtitle">"3단계를 돕는 조연 원료들"</p>
</div>
```

```css
.synergy-ingredients {
    max-width: 800px;
    margin: 80px auto 0;
    padding: 50px 40px;
    background: #FFF8F0;
    border: 1px solid #E8E4DE;
    text-align: center;
}

.synergy-title {
    font-size: 1.2rem;
    font-weight: 600;
    color: #2C2520;
    margin-bottom: 30px;
}

.ingredient-icons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
    margin-bottom: 20px;
}

.ingredient-icon {
    font-size: 2rem;
    opacity: 0.8;
    transition: all 0.3s ease;
    cursor: help;
}

.ingredient-icon:hover {
    opacity: 1;
    transform: scale(1.2);
}

.synergy-subtitle {
    font-size: 1rem;
    color: #666;
    font-style: italic;
}
```

---

## 🔬 SECTION 4. 기술력 (TECHNOLOGY) - 질감 승부

### 비주얼 컨셉
**초고화질 질감(Texture) 승부**

### 이미지
고운 **미숫가루 색의 가루**가 **따뜻한 물에 닿아 사르르 녹아내리는 순간**을 포착한 **매크로(확대) 샷**

### 메시지
> "소화가 걱정되나요?  
> 뼈까지 녹여낸 **고압 유화 & 미세 분말**입니다."

### HTML 구조

```html
<section class="technology-section">
    <div class="technology-container">
        <!-- 매크로 이미지 -->
        <div class="technology-hero-image">
            <img src="macro-powder-dissolving.jpg" alt="미세 분말이 물에 녹는 순간" />
        </div>
        
        <!-- 메시지 -->
        <div class="technology-message">
            <h2 class="technology-title">소화가 걱정되나요?</h2>
            <p class="technology-subtitle">
                뼈까지 녹여낸<br>
                <strong>고압 유화 & 미세 분말</strong>입니다.
            </p>
        </div>
        
        <!-- 기술 설명 (최소화) -->
        <div class="technology-specs">
            <div class="spec-item">
                <h4>Micro-Powder</h4>
                <p>초미세 입자 가공</p>
            </div>
            <div class="spec-item">
                <h4>120°C High-Pressure</h4>
                <p>고압 유화 공정</p>
            </div>
        </div>
    </div>
</section>
```

### CSS 스타일

```css
.technology-section {
    background: #FFF;
    padding: 120px 0;
}

.technology-hero-image {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto 60px;
    overflow: hidden;
    border-radius: 0; /* 각진 모서리 */
}

.technology-hero-image img {
    width: 100%;
    height: auto;
    display: block;
}

.technology-message {
    text-align: center;
    margin-bottom: 80px;
}

.technology-title {
    font-size: 2.5rem;
    font-weight: 600;
    color: #2C2520;
    margin-bottom: 20px;
}

.technology-subtitle {
    font-size: 1.3rem;
    line-height: 1.8;
    color: #666;
}

.technology-subtitle strong {
    color: #D97742;
    font-weight: 700;
}

.technology-specs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    max-width: 800px;
    margin: 0 auto;
}

.spec-item {
    text-align: center;
    padding: 40px;
    background: #FFF8F0;
    border: 1px solid #E8E4DE;
}

.spec-item h4 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #D97742;
    margin-bottom: 10px;
}

.spec-item p {
    font-size: 1rem;
    color: #666;
}
```

### AI 이미지 프롬프트 (매크로 샷)

```
Ultra macro photography of fine beige powder (resembling misugaru/roasted grain powder) 
dissolving in warm water. Extreme close-up showing texture and particles dispersing. 
Soft warm lighting, golden hour tones. Scientific beauty, premium food photography. 
Shallow depth of field. Burnt orange and warm greige color palette. 
High-resolution, 8K quality, cinematic.
```

---

## ✅ SECTION 5. 추천 대상 (TARGET) - Line Art

### 비주얼
**라인 드로잉(Line Art) 일러스트**

### 스타일
펜으로 슥슥 그린 듯한 **감성적인 선화**  
색상: **번트 오렌지 (#D97742)**

### 내용 (체크박스 스타일)

```html
<div class="target-checklist">
    <div class="target-item">
        <div class="checkbox">☐</div>
        <div class="target-icon">❄️</div>
        <p class="target-text">수족냉증</p>
    </div>
    
    <div class="target-item">
        <div class="checkbox">☐</div>
        <div class="target-icon">🫄</div>
        <p class="target-text">소화불량</p>
    </div>
    
    <div class="target-item">
        <div class="checkbox">☐</div>
        <div class="target-icon">🤰</div>
        <p class="target-text">임신준비</p>
    </div>
    
    <div class="target-item">
        <div class="checkbox">☐</div>
        <div class="target-icon">📋</div>
        <p class="target-text">성분깐깐</p>
    </div>
</div>
```

**이미 구현된 RECOMMENDATION 섹션을 이 스타일로 수정하면 됩니다.**

---

## 🧾 SECTION 6. 투명성 (TRUST) - 영수증 컨셉

### 비주얼
**영수증(Receipt) 또는 성적표 컨셉**

### 색상
- **배경**: 완전한 화이트 (Pure White #FFFFFF)
- **글씨**: 검정 (Black #000000)

### 의도
> "감성을 싹 빼고 **팩트**(원료 18종, 마더투세이프, 불검출 성적서)만 **건조하게** 보여주어 **'거짓 없음'**을 강조."

### HTML 구조

```html
<section class="trust-section">
    <div class="trust-container">
        <h2 class="trust-title">TRANSPARENCY</h2>
        
        <!-- 영수증 스타일 박스 -->
        <div class="receipt-box">
            <div class="receipt-header">
                <p>온애정 추어탕</p>
                <p>전성분 공개</p>
                <p>───────────────</p>
            </div>
            
            <div class="receipt-items">
                <div class="receipt-line">
                    <span class="item-name">미꾸라지 (남원산)</span>
                    <span class="item-check">✓</span>
                </div>
                <div class="receipt-line">
                    <span class="item-name">사골육수</span>
                    <span class="item-check">✓</span>
                </div>
                <div class="receipt-line">
                    <span class="item-name">발아현미</span>
                    <span class="item-check">✓</span>
                </div>
                <div class="receipt-line">
                    <span class="item-name">검은콩</span>
                    <span class="item-check">✓</span>
                </div>
                <!-- ... 총 19가지 -->
            </div>
            
            <div class="receipt-footer">
                <p>───────────────</p>
                <div class="receipt-line total">
                    <span>TOTAL INGREDIENTS</span>
                    <span>19종</span>
                </div>
            </div>
        </div>
        
        <!-- 검사 성적서 -->
        <div class="certificate-grid">
            <div class="cert-item">
                <h4>중금속 검사</h4>
                <p class="cert-result">불검출</p>
            </div>
            <div class="cert-item">
                <h4>항생제 검사</h4>
                <p class="cert-result">불검출</p>
            </div>
            <div class="cert-item">
                <h4>마더투세이프</h4>
                <p class="cert-result">인증 완료</p>
            </div>
        </div>
    </div>
</section>
```

### CSS 스타일 (영수증)

```css
.trust-section {
    background: #FFFFFF; /* Pure White */
    padding: 120px 0;
}

.trust-title {
    font-size: 2rem;
    font-weight: 600;
    color: #000000;
    text-align: center;
    letter-spacing: 3px;
    margin-bottom: 60px;
}

.receipt-box {
    max-width: 600px;
    margin: 0 auto 80px;
    padding: 40px;
    background: #FFFFFF;
    border: 2px solid #000000;
    font-family: 'Courier New', monospace; /* 영수증 폰트 */
}

.receipt-header,
.receipt-footer {
    text-align: center;
    margin-bottom: 20px;
}

.receipt-header p,
.receipt-footer p {
    font-size: 0.9rem;
    color: #000000;
    line-height: 1.6;
}

.receipt-items {
    margin: 30px 0;
}

.receipt-line {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px dotted #CCCCCC;
    font-size: 0.95rem;
    color: #000000;
}

.receipt-line.total {
    border-bottom: 2px solid #000000;
    font-weight: 700;
    margin-top: 20px;
    padding-top: 20px;
}

.item-check {
    color: #2E7D32;
    font-weight: 700;
}

.certificate-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    max-width: 900px;
    margin: 0 auto;
}

.cert-item {
    text-align: center;
    padding: 40px 20px;
    background: #FFFFFF;
    border: 2px solid #000000;
}

.cert-item h4 {
    font-size: 1.1rem;
    font-weight: 600;
    color: #000000;
    margin-bottom: 15px;
}

.cert-result {
    font-size: 1.3rem;
    font-weight: 700;
    color: #2E7D32;
}

/* Mobile */
@media (max-width: 768px) {
    .certificate-grid {
        grid-template-columns: 1fr;
        gap: 20px;
    }
}
```

---

## 🎨 전체 색상 시스템 (오후 5시 노을빛)

```css
:root {
    /* Primary Colors */
    --burnt-orange: #D97742;
    --warm-greige: #C4B5A0;
    --deep-brown: #4A3829;
    --golden-light: #F4E0C8;
    --sunset-glow: #E8956F;
    
    /* Neutral */
    --pure-white: #FFFFFF;
    --pure-black: #000000;
    --warm-sand: #EBE3D5;
    --light-greige: #E8E4DE;
    
    /* Gradients */
    --golden-gradient: linear-gradient(135deg, #F4E0C8 0%, #D97742 100%);
    --warm-gradient: linear-gradient(135deg, #FFF8F0, #FFF);
}
```

---

## 💡 디자인 철학 (이솝 / 오니스트 스타일)

### 특징
1. **미니멀리즘**: 텍스트 최소화, 여백 극대화
2. **각진 모서리**: `border-radius: 0`
3. **모노스페이스 폰트**: 영수증 섹션에 `Courier New` 사용
4. **고급 타이포그래피**: Letter-spacing, 대소문자 혼용
5. **건조한 팩트**: 감성 배제, 사실만 나열

### 색상 사용
- **섹션 2 (문제)**: 그래프, 차트, 데이터 중심
- **섹션 3 (해결)**: 여백, 아이콘, 키워드만
- **섹션 6 (투명성)**: Pure White + Black (영수증)

### 타이포그래피
- **제목**: Sans-serif, 굵게, Letter-spacing
- **본문**: Serif, 가늘게, 여백 많이
- **영수증**: Monospace (Courier New)

---

## 📝 구현 우선순위

### 1순위 (필수)
- [x] SECTION 3 (온기 3단계) - Clean & Chic 3단 카드
- [ ] SECTION 4 (기술력) - 매크로 이미지 + 짧은 메시지
- [ ] SECTION 6 (투명성) - 영수증 컨셉

### 2순위 (권장)
- [ ] SECTION 5 (추천 대상) - Line Art 개선
- [ ] 시너지 원료 15종 - 아이콘 나열

### 3순위 (선택)
- [ ] 전체 폰트 통일 (Noto Sans KR + Noto Serif KR)
- [ ] 색상 시스템 재정비 (오후 5시 노을빛)

---

## 🚀 빠른 적용 가이드

### Step 1: HTML 교체
기존 복잡한 SOLUTION 섹션을 위의 **3단 카드** 구조로 교체

### Step 2: CSS 추가
`styles_golden.css`에 **Clean & Chic 스타일** 추가

### Step 3: 이미지 준비
- 매크로 샷 (기술력 섹션)
- Line Art (추천 대상 섹션)

### Step 4: 테스트
- Desktop 3단 배열 확인
- Mobile 1단 배열 확인
- 여백 충분한지 확인

---

**작성일**: 2024-12-06  
**버전**: Clean & Chic Redesign Guide  
**스타일**: 이솝(Aesop) / 오니스트 (Honest)  
**컬러**: 오후 5시 노을빛  
**작성자**: Genspark AI Developer
