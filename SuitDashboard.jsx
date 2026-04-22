import { useState } from "react";

const COLORS = {
  bg: "#0e0e0e",
  surface: "#161616",
  card: "#1c1c1c",
  border: "#2a2a2a",
  gold: "#c9a84c",
  goldLight: "#e8c97a",
  cream: "#f5f0e8",
  muted: "#6b6b6b",
  text: "#e8e2d9",
  accent: "#8b6914",
};

const fonts = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap');
`;

const styleTag = `
  ${fonts}
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: ${COLORS.bg}; color: ${COLORS.text}; font-family: 'Jost', sans-serif; }
  
  .suit-app {
    min-height: 100vh;
    background: ${COLORS.bg};
    color: ${COLORS.text};
    font-family: 'Jost', sans-serif;
    font-weight: 300;
  }

  .header {
    border-bottom: 1px solid ${COLORS.border};
    padding: 28px 40px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${COLORS.surface};
    position: sticky;
    top: 0;
    z-index: 100;
  }

  .logo {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    letter-spacing: 0.08em;
    color: ${COLORS.gold};
    font-style: italic;
  }

  .logo span {
    color: ${COLORS.cream};
    font-style: normal;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.25em;
    display: block;
    margin-top: 2px;
    font-family: 'Jost', sans-serif;
  }

  .gender-toggle {
    display: flex;
    gap: 0;
    border: 1px solid ${COLORS.border};
    border-radius: 2px;
    overflow: hidden;
  }

  .gender-btn {
    padding: 8px 22px;
    background: transparent;
    border: none;
    color: ${COLORS.muted};
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.25s;
  }

  .gender-btn.active {
    background: ${COLORS.gold};
    color: #0e0e0e;
    font-weight: 600;
  }

  .nav {
    display: flex;
    gap: 0;
    padding: 0 40px;
    background: ${COLORS.surface};
    border-bottom: 1px solid ${COLORS.border};
    overflow-x: auto;
  }

  .nav-btn {
    padding: 16px 28px;
    background: transparent;
    border: none;
    border-bottom: 2px solid transparent;
    color: ${COLORS.muted};
    font-family: 'Jost', sans-serif;
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
    white-space: nowrap;
  }

  .nav-btn.active {
    color: ${COLORS.gold};
    border-bottom-color: ${COLORS.gold};
  }

  .nav-btn:hover:not(.active) { color: ${COLORS.text}; }

  .main { padding: 48px 40px; max-width: 1400px; margin: 0 auto; }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: 36px;
    color: ${COLORS.cream};
    margin-bottom: 6px;
    font-weight: 400;
  }

  .section-title em {
    color: ${COLORS.gold};
    font-style: italic;
  }

  .section-sub {
    color: ${COLORS.muted};
    font-size: 13px;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    margin-bottom: 48px;
  }

  .divider {
    width: 60px;
    height: 1px;
    background: ${COLORS.gold};
    margin: 16px 0 40px 0;
  }

  /* PROFILE SECTION */
  .profile-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
    margin-bottom: 40px;
  }

  .profile-card {
    background: ${COLORS.card};
    border: 1px solid ${COLORS.border};
    padding: 28px;
    transition: border-color 0.2s;
  }

  .profile-card:hover { border-color: ${COLORS.accent}; }

  .profile-card-title {
    font-size: 11px;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: ${COLORS.gold};
    margin-bottom: 20px;
  }

  .option-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8px;
  }

  .option-btn {
    padding: 10px 12px;
    background: transparent;
    border: 1px solid ${COLORS.border};
    color: ${COLORS.text};
    font-family: 'Jost', sans-serif;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
    letter-spacing: 0.05em;
  }

  .option-btn.selected {
    border-color: ${COLORS.gold};
    background: rgba(201,168,76,0.1);
    color: ${COLORS.gold};
  }

  .option-btn:hover:not(.selected) {
    border-color: ${COLORS.muted};
    color: ${COLORS.cream};
  }

  .profile-result {
    background: linear-gradient(135deg, #1a1500 0%, #1c1c1c 100%);
    border: 1px solid ${COLORS.accent};
    padding: 36px;
    margin-top: 32px;
  }

  .result-label {
    font-size: 10px;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    color: ${COLORS.gold};
    margin-bottom: 12px;
  }

  .result-title {
    font-family: 'Playfair Display', serif;
    font-size: 28px;
    color: ${COLORS.cream};
    margin-bottom: 16px;
  }

  .result-desc {
    color: ${COLORS.text};
    line-height: 1.7;
    font-size: 14px;
    font-weight: 300;
    max-width: 700px;
  }

  .result-tags {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 20px;
  }

  .tag {
    padding: 6px 16px;
    border: 1px solid ${COLORS.gold};
    color: ${COLORS.gold};
    font-size: 11px;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }

  /* SUIT BUILDER */
  .builder-layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 32px;
  }

  .builder-sidebar { display: flex; flex-direction: column; gap: 20px; }

  .builder-group {
    background: ${COLORS.card};
    border: 1px solid ${COLORS.border};
    padding: 24px;
  }

  .builder-group-title {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${COLORS.gold};
    margin-bottom: 16px;
  }

  .color-swatch-row {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .color-swatch {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    cursor: pointer;
    border: 2px solid transparent;
    transition: all 0.2s;
    flex-shrink: 0;
  }

  .color-swatch.selected {
    border-color: ${COLORS.gold};
    transform: scale(1.15);
    box-shadow: 0 0 0 2px #0e0e0e, 0 0 0 4px ${COLORS.gold};
  }

  .select-input {
    width: 100%;
    background: #111;
    border: 1px solid ${COLORS.border};
    color: ${COLORS.text};
    padding: 10px 14px;
    font-family: 'Jost', sans-serif;
    font-size: 13px;
    cursor: pointer;
    appearance: none;
    outline: none;
  }

  .select-input:focus { border-color: ${COLORS.gold}; }

  /* OUTFIT PREVIEW */
  .outfit-preview {
    background: ${COLORS.card};
    border: 1px solid ${COLORS.border};
    padding: 36px;
  }

  .outfit-name {
    font-family: 'Playfair Display', serif;
    font-size: 24px;
    color: ${COLORS.cream};
    margin-bottom: 6px;
  }

  .outfit-occasion {
    font-size: 11px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${COLORS.muted};
    margin-bottom: 32px;
  }

  .outfit-visual {
    display: flex;
    gap: 24px;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .suit-mannequin {
    width: 180px;
    flex-shrink: 0;
    position: relative;
  }

  .mannequin-svg { width: 100%; }

  .accessory-list {
    flex: 1;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .accessory-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 14px 18px;
    background: #111;
    border-left: 3px solid ${COLORS.gold};
  }

  .accessory-icon {
    font-size: 22px;
    width: 36px;
    text-align: center;
    flex-shrink: 0;
  }

  .accessory-info {}
  .accessory-type {
    font-size: 10px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: ${COLORS.muted};
    margin-bottom: 2px;
  }
  .accessory-value {
    font-size: 14px;
    color: ${COLORS.cream};
    font-weight: 400;
  }

  .tip-box {
    margin-top: 28px;
    background: rgba(201,168,76,0.05);
    border: 1px solid rgba(201,168,76,0.2);
    padding: 20px;
    display: flex;
    gap: 14px;
  }

  .tip-icon { font-size: 18px; flex-shrink: 0; margin-top: 1px; }
  .tip-text { font-size: 13px; line-height: 1.6; color: ${COLORS.text}; font-weight: 300; }
  .tip-text strong { color: ${COLORS.gold}; font-weight: 500; }

  /* WEEKLY PLANNER */
  .week-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    margin-bottom: 32px;
  }

  .day-card {
    background: ${COLORS.card};
    border: 1px solid ${COLORS.border};
    padding: 24px 20px;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
    overflow: hidden;
  }

  .day-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: ${COLORS.gold};
    transform: scaleX(0);
    transition: transform 0.25s;
    transform-origin: left;
  }

  .day-card:hover::before, .day-card.active::before { transform: scaleX(1); }
  .day-card.active { border-color: ${COLORS.accent}; background: rgba(139,105,20,0.08); }

  .day-name {
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${COLORS.gold};
    margin-bottom: 14px;
  }

  .day-outfit-name {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    color: ${COLORS.cream};
    margin-bottom: 8px;
    line-height: 1.3;
  }

  .day-outfit-desc {
    font-size: 12px;
    color: ${COLORS.muted};
    line-height: 1.5;
  }

  .day-emoji { font-size: 28px; margin-bottom: 12px; display: block; }

  .day-detail {
    background: ${COLORS.card};
    border: 1px solid ${COLORS.border};
    padding: 40px;
  }

  .detail-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .detail-col {}
  .detail-label {
    font-size: 10px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${COLORS.gold};
    margin-bottom: 18px;
  }

  .detail-item {
    display: flex;
    gap: 12px;
    margin-bottom: 12px;
    align-items: center;
  }

  .detail-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${COLORS.gold};
    flex-shrink: 0;
  }

  .detail-text { font-size: 13px; color: ${COLORS.text}; font-weight: 300; }

  /* WOMEN'S SECTION */
  .women-hero {
    background: linear-gradient(135deg, #0e0a00 0%, #1c1412 50%, #0e0e0e 100%);
    border: 1px solid ${COLORS.border};
    padding: 48px;
    margin-bottom: 32px;
    position: relative;
    overflow: hidden;
  }

  .women-hero::after {
    content: '♀';
    position: absolute;
    right: 48px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 180px;
    opacity: 0.04;
    color: ${COLORS.gold};
    line-height: 1;
  }

  .women-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    margin-bottom: 32px;
  }

  .women-card {
    background: ${COLORS.card};
    border: 1px solid ${COLORS.border};
    overflow: hidden;
    transition: all 0.25s;
    cursor: pointer;
  }

  .women-card:hover { border-color: ${COLORS.accent}; transform: translateY(-2px); }

  .women-card-header {
    padding: 24px 24px 0;
    font-size: 32px;
    margin-bottom: 12px;
  }

  .women-card-body { padding: 0 24px 24px; }

  .women-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 17px;
    color: ${COLORS.cream};
    margin-bottom: 8px;
  }

  .women-card-desc {
    font-size: 12px;
    color: ${COLORS.muted};
    line-height: 1.6;
    margin-bottom: 14px;
  }

  .women-picks {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }

  .mini-tag {
    padding: 3px 10px;
    background: rgba(201,168,76,0.1);
    border: 1px solid rgba(201,168,76,0.3);
    color: ${COLORS.gold};
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  /* STYLE TIPS */
  .tips-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
  }

  .tip-card {
    background: ${COLORS.card};
    border: 1px solid ${COLORS.border};
    padding: 32px;
    transition: border-color 0.2s;
  }

  .tip-card:hover { border-color: ${COLORS.accent}; }

  .tip-card-icon { font-size: 36px; margin-bottom: 16px; }

  .tip-card-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    color: ${COLORS.cream};
    margin-bottom: 10px;
  }

  .tip-card-body {
    font-size: 13px;
    color: ${COLORS.text};
    line-height: 1.75;
    font-weight: 300;
  }

  .tip-card-body li {
    margin-bottom: 8px;
    padding-left: 16px;
    position: relative;
  }

  .tip-card-body li::before {
    content: '—';
    position: absolute;
    left: 0;
    color: ${COLORS.gold};
    font-size: 11px;
  }

  .gold-rule {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, ${COLORS.gold} 0%, transparent 100%);
    margin: 48px 0;
  }

  .quote-block {
    padding: 40px 0;
    text-align: center;
  }

  .quote-text {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-style: italic;
    color: ${COLORS.cream};
    max-width: 600px;
    margin: 0 auto 12px;
    line-height: 1.5;
  }

  .quote-author {
    font-size: 11px;
    letter-spacing: 0.25em;
    text-transform: uppercase;
    color: ${COLORS.muted};
  }

  @media (max-width: 900px) {
    .profile-grid { grid-template-columns: 1fr 1fr; }
    .week-grid { grid-template-columns: 1fr 1fr; }
    .women-grid { grid-template-columns: 1fr 1fr; }
    .tips-grid { grid-template-columns: 1fr; }
    .builder-layout { grid-template-columns: 1fr; }
    .detail-grid { grid-template-columns: 1fr; }
    .main { padding: 32px 20px; }
    .header { padding: 20px; }
    .nav { padding: 0 20px; }
    .nav-btn { padding: 14px 16px; }
  }

  @media (max-width: 600px) {
    .profile-grid { grid-template-columns: 1fr; }
    .week-grid { grid-template-columns: 1fr; }
    .women-grid { grid-template-columns: 1fr; }
  }
`;

// DATA
const bodyTypes = {
  men: ["Slim / Lean", "Athletic", "Regular", "Broad Shoulder", "Stocky / Full"],
  women: ["Petite", "Slim", "Hourglass", "Athletic", "Full / Curvy"],
};

const colorSeasons = {
  men: ["Cool Winter", "Warm Autumn", "Cool Summer", "Warm Spring"],
  women: ["Cool Winter", "Warm Autumn", "Cool Summer", "Warm Spring"],
};

const stylePersonalities = {
  men: ["Classic Executive", "Modern Minimalist", "Creative Director", "Power Player", "Smart Casual"],
  women: ["Boardroom Chic", "Understated Elegance", "Bold & Structured", "Feminine Power", "Creative Professional"],
};

const profileResults = {
  men: {
    "Classic Executive + Cool Winter + Athletic": {
      name: "The Refined Authoritarian",
      desc: "Your physique and cool tones make you a natural for sharp, structured navy and charcoal suits. Lean into peak lapels, French cuff shirts, and silver hardware. Avoid warm browns and earth tones — they fight your natural coloring.",
      tags: ["Structured Fit", "Cool Palette", "Peak Lapels", "French Cuffs"],
    },
    default: {
      name: "The Distinguished Gentleman",
      desc: "Your profile signals a man who values quality over trend. Focus on timeless cuts that flatter your silhouette, build a foundation in neutrals (navy, charcoal, grey), then add depth through accessories and pocket squares. Every piece should feel intentional.",
      tags: ["Timeless", "Intentional", "Quality-First", "Neutral Base"],
    },
  },
  women: {
    default: {
      name: "The Power Aesthete",
      desc: "Your profile reveals a woman who commands presence through considered dressing. Structured blazers with clean lines, wide-leg trousers or tailored midi skirts become your foundation. Choose fabrics that move with confidence — crepe, wool, ponte. Your accessories should punctuate, not decorate.",
      tags: ["Structured", "Commanding", "Clean Lines", "Elevated Fabric"],
    },
  },
};

const suitColors = [
  { name: "Charcoal", hex: "#36454F" },
  { name: "Navy", hex: "#1B2A4A" },
  { name: "Black", hex: "#1a1a1a" },
  { name: "Mid Grey", hex: "#7b7b7b" },
  { name: "Camel", hex: "#C19A6B" },
  { name: "Burgundy", hex: "#6B1A2A" },
  { name: "Forest", hex: "#2D4A3E" },
  { name: "Light Grey", hex: "#b0b0b0" },
  { name: "Cream", hex: "#F5F0E8" },
  { name: "Taupe", hex: "#9B8472" },
];

const getOutfitRecommendation = (gender, suitColor, fabric, occasion) => {
  const isWomen = gender === "women";
  const colorName = suitColor?.name || "Charcoal";
  const recs = {
    "Charcoal": {
      shirt: isWomen ? "Ivory silk blouse or crisp white poplin" : "White or pale blue poplin",
      tie: isWomen ? "N/A — opt for a silk scarf in navy or gold" : "Burgundy or silver grenadine",
      shoes: isWomen ? "Black leather pumps or pointed-toe kitten heel" : "Black oxford or derby",
      belt: isWomen ? "Thin black or cognac leather belt" : "Black leather with silver buckle",
      pocket: isWomen ? "Ivory silk handkerchief" : "White linen square, flat fold",
      watch: isWomen ? "Silver or rose gold, minimal dial" : "Silver or steel with white dial",
      tip: isWomen
        ? "Charcoal is your workhorse — it pairs with everything. A flash of jewellery at the neck elevates it instantly."
        : "Charcoal is the most versatile suit colour. Match metal tones — silver tie bar with silver cufflinks.",
    },
    "Navy": {
      shirt: isWomen ? "White or pale pink silk blouse" : "White, light blue, or lavender shirt",
      tie: isWomen ? "Printed silk scarf or gold chain necklace" : "Gold, brown, or polka-dot silk",
      shoes: isWomen ? "Nude or cognac leather heels" : "Brown oxford (try burgundy or tan)",
      belt: isWomen ? "Cognac or tan leather" : "Brown leather with gold buckle",
      pocket: isWomen ? "Coral or blush silk square" : "Navy with white border or solid white",
      watch: isWomen ? "Gold or two-tone, slim case" : "Gold or brown leather strap",
      tip: isWomen
        ? "Navy is endlessly flattering. Brown accessories (tan, cognac) break the corporate feel and add warmth."
        : "Navy and brown is a classic European combination — never wear black shoes with navy.",
    },
    "Black": {
      shirt: isWomen ? "White, ivory, or bold colour blouse" : "White or pale grey",
      tie: isWomen ? "Silver jewellery or contrast-colour scarf" : "Black, silver, or deep jewel tones",
      shoes: isWomen ? "Black patent or a bold colour pump" : "Black cap-toe oxford — nothing else",
      belt: isWomen ? "Black leather, minimal hardware" : "Black leather, minimal hardware",
      pocket: isWomen ? "White or bold contrast silk" : "White silk, TV fold",
      watch: isWomen ? "Black or silver, structured case" : "Black or silver",
      tip: isWomen
        ? "Black suits need life — give it through texture (crepe vs. matte), a sharp lip, or one statement piece."
        : "Black suits are formal. Reserve for evening, funerals, or very formal workplaces. Not an everyday choice.",
    },
  };
  return recs[colorName] || recs["Charcoal"];
};

const weekdayPlans = {
  men: [
    {
      day: "Monday",
      emoji: "🌅",
      outfit: "The Authority Open",
      desc: "Navy suit, white shirt, confidence sets the week",
      details: {
        suit: "Navy 2-button single-breasted",
        shirt: "White poplin, slim collar",
        tie: "Solid burgundy silk",
        shoes: "Tan leather oxford",
        accessories: ["Brown leather belt", "Silver watch", "White pocket square (flat)"],
        avoidances: ["Patterned shirt with patterned tie", "Black shoes with navy"],
      },
    },
    {
      day: "Tuesday",
      emoji: "⚡",
      outfit: "Mid-Week Power",
      desc: "Charcoal suit, blue shirt, sharp and decisive",
      details: {
        suit: "Charcoal 3-piece or 2-piece",
        shirt: "Light blue Egyptian cotton",
        tie: "Silver or grey striped silk",
        shoes: "Black derby or oxford",
        accessories: ["Black leather belt", "Steel watch", "Silver tie bar"],
        avoidances: ["Brown shoes (too casual)", "No tie for formal settings"],
      },
    },
    {
      day: "Wednesday",
      emoji: "🔥",
      outfit: "Creative Edge",
      desc: "Grey suit, open collar, softer authority",
      details: {
        suit: "Mid grey slim fit",
        shirt: "White with subtle texture or soft stripe",
        tie: "Optional – if worn, bold or printed",
        shoes: "Burgundy loafer or suede oxford",
        accessories: ["Cognac leather strap watch", "Pocket square (casual fold)"],
        avoidances: ["Heavy tie – let the suit breathe today"],
      },
    },
    {
      day: "Thursday",
      emoji: "💼",
      outfit: "Boardroom Ready",
      desc: "Dark navy or black, maximum formality",
      details: {
        suit: "Dark navy or charcoal with faint stripe",
        shirt: "White French cuff",
        tie: "Gold or navy silk grenadine",
        shoes: "Black cap-toe oxford, freshly polished",
        accessories: ["Cufflinks (gold or silver)", "Leather portfolio", "Minimal pocket square"],
        avoidances: ["Casual fabrics", "Unpolished shoes – fatal mistake"],
      },
    },
    {
      day: "Friday",
      emoji: "🎯",
      outfit: "Smart Casual Sign-Off",
      desc: "Blazer + trousers, relaxed mastery",
      details: {
        suit: "Navy or camel blazer (separate trousers)",
        shirt: "Chambray, OCBD, or soft stripe",
        tie: "No tie – or knit tie if preferred",
        shoes: "Loafers, suede chukka, or clean leather sneaker",
        accessories: ["No tie bar needed", "Casual leather watch"],
        avoidances: ["Treating Friday as 'anything goes' – still be intentional"],
      },
    },
  ],
  women: [
    {
      day: "Monday",
      emoji: "🌅",
      outfit: "Commanding Presence",
      desc: "Tailored blazer + wide-leg trousers",
      details: {
        suit: "Navy power blazer + matching wide-leg trousers",
        shirt: "White silk blouse or ivory turtleneck",
        tie: "N/A",
        shoes: "Black pointed-toe heels or block heels",
        accessories: ["Gold earrings (small)", "Structured handbag", "Minimal necklace"],
        avoidances: ["Overly decorative jewellery on Monday", "Casual bag with a formal suit"],
      },
    },
    {
      day: "Tuesday",
      emoji: "⚡",
      outfit: "Structured Confidence",
      desc: "Charcoal suit with feminine touch",
      details: {
        suit: "Charcoal blazer + pencil skirt or slim trousers",
        shirt: "Blush or dusty rose silk blouse",
        tie: "N/A – fine chain necklace",
        shoes: "Nude or blush pointed pumps",
        accessories: ["Pearl or gold stud earrings", "Gold watch", "Leather clutch"],
        avoidances: ["Matching top to trouser exactly in blush (too matchy)"],
      },
    },
    {
      day: "Wednesday",
      emoji: "🔥",
      outfit: "Elevated Creative",
      desc: "Blazer + midi skirt, textured layers",
      details: {
        suit: "Cream or camel blazer + pleated midi skirt",
        shirt: "Silk cami or fitted knit top",
        tie: "N/A – scarf or statement earring",
        shoes: "Tan mule or loafer heel",
        accessories: ["Silk scarf", "Gold bangles", "Tote bag"],
        avoidances: ["Heavy pattern mixing without a unifying colour"],
      },
    },
    {
      day: "Thursday",
      emoji: "💼",
      outfit: "Boardroom Authority",
      desc: "Matching suit, commanding formality",
      details: {
        suit: "Black or midnight navy matched set",
        shirt: "White poplin or ivory blouse",
        tie: "N/A – structured necklace or brooch",
        shoes: "Black heels, polished (kitten or mid-heel)",
        accessories: ["Pearl or diamond studs", "Structured handbag", "Minimal rings"],
        avoidances: ["Platform shoes (undermines suit elegance)", "Overly casual hair"],
      },
    },
    {
      day: "Friday",
      emoji: "🎯",
      outfit: "Refined Ease",
      desc: "Blazer over midi dress or elevated separates",
      details: {
        suit: "Oversized blazer + tailored midi dress or culottes",
        shirt: "Fitted turtleneck or soft wrap top",
        tie: "N/A",
        shoes: "Block heel mules, loafers, or ankle boots",
        accessories: ["Statement earrings", "Relaxed-tone bag", "Stack bracelets"],
        avoidances: ["Going fully casual – still curated, still intentional"],
      },
    },
  ],
};

const womenCategories = [
  {
    icon: "👔",
    title: "The Power Suit",
    desc: "A perfectly tailored blazer and matching trousers is the modern woman's armour. Fit is everything — structured shoulders, a defined waist.",
    picks: ["Double-breasted Navy", "Charcoal Pinstripe", "Ivory Linen", "Chocolate Brown"],
  },
  {
    icon: "👗",
    title: "Blazer + Midi Skirt",
    desc: "The blazer-and-skirt combination balances structure with femininity. A-line, pleated, or pencil — each signals a different power level.",
    picks: ["Blazer + A-line Midi", "Blazer + Pencil", "Long Blazer + Maxi", "Cropped + Pleated"],
  },
  {
    icon: "🧣",
    title: "Statement Accessories",
    desc: "For women in suiting, accessories are the punctuation. Too little and the look goes flat. Too much and the suit loses its authority.",
    picks: ["Fine Gold Chain", "Silk Scarf", "Pearl Studs", "Structured Handbag"],
  },
  {
    icon: "👠",
    title: "Footwear Strategy",
    desc: "The shoe changes everything. The same suit reads differently in a stiletto, a loafer, or a pointed flat. Heel height affects perceived authority.",
    picks: ["Block Heel Pump", "Kitten Heel", "Pointed Loafer", "Ankle Boot"],
  },
  {
    icon: "🎨",
    title: "Colour Palette Guide",
    desc: "Women in suiting have more colour latitude than men. Build a neutral base, then add one seasonal colour signature that becomes your trademark.",
    picks: ["Navy + Blush", "Black + Ivory", "Camel + White", "Forest + Gold"],
  },
  {
    icon: "📐",
    title: "Fit Principles",
    desc: "A suit that fits perfectly makes you appear more confident, capable, and polished — even before you say a word. Never skip tailoring.",
    picks: ["Shoulder seam alignment", "Jacket length rule", "Trouser break", "Skirt knee placement"],
  },
];

const styleTips = [
  {
    icon: "📏",
    title: "The Fit Hierarchy",
    body: [
      "Fit overrides fabric, brand, and price — always.",
      "Shoulder seams must sit exactly at your shoulder edge.",
      "Jacket sleeves should show ½ inch of shirt cuff.",
      "Trouser break: slight (slim) to no break (modern) is preferred.",
      "Never button the bottom button of a 2-button jacket.",
    ],
  },
  {
    icon: "🎨",
    title: "Colour Architecture",
    body: [
      "Build a wardrobe around 3 core neutrals: navy, charcoal, and grey.",
      "Add one 'personality colour' each season — rotate it through ties, scarves, accessories.",
      "Avoid matching exact shades — contrast is more sophisticated.",
      "Warm skin tones thrive in camel, brown, olive, and warm grey.",
      "Cool skin tones thrive in navy, black, cool grey, and burgundy.",
    ],
  },
  {
    icon: "🧵",
    title: "Fabric Intelligence",
    body: [
      "Wool is the gold standard — breathes, drapes, and holds its shape.",
      "Summer: fresco wool, linen, or cotton-linen blends.",
      "Avoid polyester blends — they shine and pill over time.",
      "Super 110s–150s wool for best everyday wearability.",
      "Invest in fabric quality before brand prestige.",
    ],
  },
  {
    icon: "💡",
    title: "The 10-Item Suit Wardrobe",
    body: [
      "2 suits (navy + charcoal) as your foundation.",
      "5 shirts (3 white, 1 blue, 1 subtle stripe).",
      "3 ties (solid, stripe, subtle pattern).",
      "2 pairs of shoes (black oxfords + brown oxfords/loafers).",
      "Accessories: 1 silver watch, 1 leather belt per shoe colour.",
    ],
  },
  {
    icon: "✂️",
    title: "When to Tailor",
    body: [
      "Always tailor off-the-rack suits — budget for it.",
      "Priority alterations: jacket sleeves, trouser hem, waist suppression.",
      "Side seams on jacket for fit: the cheapest transformation.",
      "Good tailor adds £50–£200 of value to a £300 suit.",
      "Never wear a suit without at least checking sleeve length.",
    ],
  },
  {
    icon: "⌚",
    title: "The Accessory Code",
    body: [
      "Match metals consistently: all gold or all silver.",
      "Belt and shoe leather should always match in colour family.",
      "Pocket square should complement, not match, the tie.",
      "One statement accessory maximum per outfit.",
      "Tie length: the tip should just touch the trouser waistband.",
    ],
  },
];

// COMPONENTS
function StyleProfile({ gender }) {
  const [body, setBody] = useState(null);
  const [season, setSeason] = useState(null);
  const [personality, setPersonality] = useState(null);

  const profileKey = personality && season ? `${personality} + ${season} + ${body}` : null;
  const result = gender === "men"
    ? (profileResults.men[profileKey] || (body && season && personality ? profileResults.men.default : null))
    : (body && season && personality ? profileResults.women.default : null);

  return (
    <div>
      <div className="profile-grid">
        <div className="profile-card">
          <div className="profile-card-title">Your Body Type</div>
          <div className="option-grid">
            {bodyTypes[gender].map(t => (
              <button key={t} className={`option-btn${body === t ? " selected" : ""}`} onClick={() => setBody(t)}>{t}</button>
            ))}
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-card-title">Colour Season</div>
          <div className="option-grid" style={{ gridTemplateColumns: "1fr" }}>
            {colorSeasons[gender].map(s => (
              <button key={s} className={`option-btn${season === s ? " selected" : ""}`} onClick={() => setSeason(s)}>{s}</button>
            ))}
          </div>
        </div>
        <div className="profile-card">
          <div className="profile-card-title">Style Personality</div>
          <div className="option-grid" style={{ gridTemplateColumns: "1fr" }}>
            {stylePersonalities[gender].map(p => (
              <button key={p} className={`option-btn${personality === p ? " selected" : ""}`} onClick={() => setPersonality(p)}>{p}</button>
            ))}
          </div>
        </div>
      </div>

      {result && (
        <div className="profile-result">
          <div className="result-label">Your Style Archetype</div>
          <div className="result-title">{result.name}</div>
          <div className="result-desc">{result.desc}</div>
          <div className="result-tags">
            {result.tags.map(t => <span key={t} className="tag">{t}</span>)}
            {body && <span className="tag">{body}</span>}
            {season && <span className="tag">{season}</span>}
          </div>
        </div>
      )}

      {!result && (
        <div style={{ textAlign: "center", padding: "60px", color: COLORS.muted, border: `1px dashed ${COLORS.border}` }}>
          <div style={{ fontSize: "36px", marginBottom: "12px" }}>✦</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: COLORS.text, marginBottom: "8px" }}>Complete your profile above</div>
          <div style={{ fontSize: "13px" }}>Select your body type, colour season, and style personality to reveal your archetype</div>
        </div>
      )}
    </div>
  );
}

function SuitBuilder({ gender }) {
  const [suitColor, setSuitColor] = useState(suitColors[0]);
  const [fabric, setFabric] = useState("Wool Twill");
  const [occasion, setOccasion] = useState("Business Formal");

  const rec = getOutfitRecommendation(gender, suitColor, fabric, occasion);
  const isWomen = gender === "women";

  const items = [
    { icon: isWomen ? "👚" : "👔", type: isWomen ? "Blouse / Top" : "Shirt", value: rec.shirt },
    { icon: "👞", type: "Shoes", value: rec.shoes },
    { icon: "⌚", type: "Watch", value: rec.watch },
    { icon: isWomen ? "💍" : "👔", type: isWomen ? "Jewellery / Scarf" : "Tie", value: rec.tie },
    { icon: "🧣", type: isWomen ? "Belt (Optional)" : "Belt", value: rec.belt },
    { icon: "🎩", type: "Pocket Square", value: rec.pocket },
  ];

  return (
    <div className="builder-layout">
      <div className="builder-sidebar">
        <div className="builder-group">
          <div className="builder-group-title">Suit Colour</div>
          <div className="color-swatch-row">
            {suitColors.map(c => (
              <div
                key={c.name}
                className={`color-swatch${suitColor?.name === c.name ? " selected" : ""}`}
                style={{ background: c.hex }}
                title={c.name}
                onClick={() => setSuitColor(c)}
              />
            ))}
          </div>
          <div style={{ marginTop: "12px", fontSize: "13px", color: COLORS.muted }}>Selected: <span style={{ color: COLORS.gold }}>{suitColor?.name}</span></div>
        </div>
        <div className="builder-group">
          <div className="builder-group-title">Fabric</div>
          <select className="select-input" value={fabric} onChange={e => setFabric(e.target.value)}>
            {["Wool Twill", "Fresco Wool", "Wool-Cashmere", "Cotton-Linen", "Velvet (Evening)", "Flannel"].map(f => <option key={f}>{f}</option>)}
          </select>
        </div>
        <div className="builder-group">
          <div className="builder-group-title">Occasion</div>
          <select className="select-input" value={occasion} onChange={e => setOccasion(e.target.value)}>
            {["Business Formal", "Board Meeting", "Client Lunch", "Smart Casual", "Evening / Gala", "Wedding (Guest)"].map(o => <option key={o}>{o}</option>)}
          </select>
        </div>
        <div className="builder-group">
          <div className="builder-group-title">Lapel Style</div>
          <select className="select-input">
            {["Notch Lapel (Classic)", "Peak Lapel (Power)", "Shawl Collar (Evening)"].map(l => <option key={l}>{l}</option>)}
          </select>
        </div>
      </div>

      <div className="outfit-preview">
        <div className="outfit-name">{suitColor?.name} {fabric}</div>
        <div className="outfit-occasion">{occasion} — {gender === "women" ? "Women's Edit" : "Men's Edit"}</div>

        <div className="outfit-visual">
          {/* SVG Suit Silhouette */}
          <div className="suit-mannequin">
            <svg viewBox="0 0 180 320" className="mannequin-svg" xmlns="http://www.w3.org/2000/svg">
              {/* Body */}
              <ellipse cx="90" cy="50" rx="22" ry="26" fill="#3a3a3a"/>
              {/* Suit jacket */}
              <path d="M45,90 Q35,150 38,280 L80,280 L80,160 L90,175 L100,160 L100,280 L142,280 Q145,150 135,90 Q120,80 100,85 L90,105 L80,85 Q60,80 45,90Z" fill={suitColor?.hex || "#36454F"}/>
              {/* Lapels */}
              <path d="M80,85 L90,110 L90,130 L70,100 L65,90 Z" fill={suitColor?.hex ? suitColor.hex : "#36454F"} stroke="#555" strokeWidth="0.5"/>
              <path d="M100,85 L90,110 L90,130 L110,100 L115,90 Z" fill={suitColor?.hex ? suitColor.hex : "#36454F"} stroke="#555" strokeWidth="0.5"/>
              {/* Shirt visible */}
              <path d="M82,88 L90,108 L98,88" fill="#e8e2d9" stroke="#ccc" strokeWidth="0.5"/>
              {/* Button line */}
              <line x1="90" y1="120" x2="90" y2="220" stroke="#555" strokeWidth="0.5" strokeDasharray="3,4"/>
              {/* Buttons */}
              <circle cx="90" cy="135" r="2.5" fill="#888"/>
              <circle cx="90" cy="155" r="2.5" fill="#888"/>
              {/* Arms */}
              <path d="M45,90 Q28,130 30,200 L48,198 Q50,150 58,115Z" fill={suitColor?.hex || "#36454F"}/>
              <path d="M135,90 Q152,130 150,200 L132,198 Q130,150 122,115Z" fill={suitColor?.hex || "#36454F"}/>
              {/* Trousers */}
              <path d="M55,270 L55,310 L82,310 L90,285 L98,310 L125,310 L125,270Z" fill={suitColor?.hex || "#36454F"}/>
              {/* Shoes */}
              <ellipse cx="68" cy="313" rx="16" ry="6" fill="#222"/>
              <ellipse cx="112" cy="313" rx="16" ry="6" fill="#222"/>
              {/* Pocket square */}
              <path d="M108,118 L120,110 L118,125 Z" fill="#e8e2d9" opacity="0.9"/>
            </svg>
          </div>

          <div className="accessory-list">
            {items.map(item => (
              <div key={item.type} className="accessory-item">
                <div className="accessory-icon">{item.icon}</div>
                <div className="accessory-info">
                  <div className="accessory-type">{item.type}</div>
                  <div className="accessory-value">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="tip-box">
          <div className="tip-icon">💡</div>
          <div className="tip-text"><strong>Stylist Note:</strong> {rec.tip}</div>
        </div>
      </div>
    </div>
  );
}

function WeeklyPlanner({ gender }) {
  const [activeDay, setActiveDay] = useState(0);
  const plans = weekdayPlans[gender];
  const plan = plans[activeDay];

  return (
    <div>
      <div className="week-grid">
        {plans.map((p, i) => (
          <div key={p.day} className={`day-card${i === activeDay ? " active" : ""}`} onClick={() => setActiveDay(i)}>
            <span className="day-emoji">{p.emoji}</span>
            <div className="day-name">{p.day}</div>
            <div className="day-outfit-name">{p.outfit}</div>
            <div className="day-outfit-desc">{p.desc}</div>
          </div>
        ))}
      </div>

      <div className="day-detail">
        <div style={{ marginBottom: "28px" }}>
          <div style={{ fontSize: "11px", letterSpacing: "0.25em", textTransform: "uppercase", color: COLORS.gold, marginBottom: "8px" }}>{plan.day}'s Complete Look</div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: COLORS.cream }}>{plan.outfit}</div>
        </div>
        <div className="detail-grid">
          <div className="detail-col">
            <div className="detail-label">The Outfit</div>
            {[
              ["Suit", plan.details.suit],
              ["Shirt / Top", plan.details.shirt],
              ["Tie / Neckwear", plan.details.tie],
              ["Shoes", plan.details.shoes],
            ].map(([label, val]) => (
              <div key={label} className="detail-item">
                <div className="detail-dot"/>
                <div className="detail-text"><strong style={{ color: COLORS.gold, fontWeight: 500 }}>{label}:</strong> {val}</div>
              </div>
            ))}
            {plan.details.accessories.map(a => (
              <div key={a} className="detail-item">
                <div className="detail-dot"/>
                <div className="detail-text">{a}</div>
              </div>
            ))}
          </div>
          <div className="detail-col">
            <div className="detail-label">What To Avoid</div>
            {plan.details.avoidances.map(a => (
              <div key={a} style={{ display: "flex", gap: "12px", marginBottom: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "#8b2020", fontSize: "14px", flexShrink: 0, marginTop: "1px" }}>✕</span>
                <div className="detail-text">{a}</div>
              </div>
            ))}
            <div className="tip-box" style={{ marginTop: "24px" }}>
              <div className="tip-icon">✦</div>
              <div className="tip-text">
                <strong>The Rule of {plan.day}:</strong> {
                  ["Monday signals your week's intention. Dress sharply and own the room.",
                   "Tuesday is for precision. No excuses — you're in full execution mode.",
                   "Wednesday allows one creative flourish. Keep the suit, break one rule elegantly.",
                   "Thursday is your power day — treat it like the most important day of the week.",
                   "Friday is earned ease. Intentional, not sloppy."][activeDay]
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WomensSection() {
  return (
    <div>
      <div className="women-hero">
        <div className="result-label">Exclusively For Her</div>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "38px", color: COLORS.cream, marginBottom: "16px", fontWeight: 400 }}>
          The Art of <em style={{ color: COLORS.gold, fontStyle: "italic" }}>Feminine Power Dressing</em>
        </div>
        <div style={{ fontSize: "14px", color: COLORS.text, maxWidth: "620px", lineHeight: 1.7, fontWeight: 300 }}>
          Power dressing for women is not about mimicking men's suiting — it is about owning your authority while expressing your individuality. 
          Structure, intention, and confidence are your three non-negotiables.
        </div>
      </div>

      <div className="women-grid">
        {womenCategories.map(cat => (
          <div key={cat.title} className="women-card">
            <div className="women-card-header">{cat.icon}</div>
            <div className="women-card-body">
              <div className="women-card-title">{cat.title}</div>
              <div className="women-card-desc">{cat.desc}</div>
              <div className="women-picks">
                {cat.picks.map(p => <span key={p} className="mini-tag">{p}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="gold-rule"/>

      <div className="quote-block">
        <div className="quote-text">"Dressing well is a form of good manners — and for a woman in a boardroom, it is also a form of power."</div>
        <div className="quote-author">— The Dressed Edit</div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
        {[
          {
            title: "The Blazer Fit Checklist",
            items: [
              "Shoulder seam sits exactly at the edge of your shoulder — no wider, no narrower",
              "When buttoned, jacket should not pull or gap at the chest",
              "Sleeve length: shows ½ inch of blouse if layered; if not, hits the wrist bone",
              "Back vent should lay flat — not pull open when standing",
              "Jacket length: classic hits mid-hip; cropped hits natural waist",
            ]
          },
          {
            title: "Skirt & Trouser Guidelines",
            items: [
              "Pencil skirt hem: at or just below the knee for professional settings",
              "Midi skirt: flows 4–6 inches below the knee — choose structured fabrics",
              "Wide-leg trousers: should graze the floor slightly in heels",
              "Avoid skirts with excessive volume (A-line flares) in formal meetings",
              "Pleat direction matters: forward pleats add volume, backward pleats streamline",
            ]
          }
        ].map(section => (
          <div key={section.title} className="tip-card">
            <div className="tip-card-title" style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: COLORS.cream, marginBottom: "16px" }}>{section.title}</div>
            <ul className="tip-card-body" style={{ listStyle: "none" }}>
              {section.items.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function StyleGuide() {
  return (
    <div>
      <div className="tips-grid">
        {styleTips.map(tip => (
          <div key={tip.title} className="tip-card">
            <div className="tip-card-icon">{tip.icon}</div>
            <div className="tip-card-title">{tip.title}</div>
            <ul className="tip-card-body" style={{ listStyle: "none" }}>
              {tip.body.map(item => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>

      <div className="gold-rule"/>

      <div className="quote-block">
        <div className="quote-text">"Elegance is not about being noticed, it is about being remembered."</div>
        <div className="quote-author">— Giorgio Armani</div>
      </div>

      <div style={{ background: COLORS.card, border: `1px solid ${COLORS.border}`, padding: "40px" }}>
        <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: COLORS.cream, marginBottom: "8px" }}>The Non-Negotiable Rules</div>
        <div style={{ color: COLORS.muted, fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "28px" }}>Principles that separate dressed from well-dressed</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "20px" }}>
          {[
            ["01", "Fit is King", "No fabric, brand, or price compensates for poor fit. Tailor everything."],
            ["02", "Match Your Metals", "Silver watch = silver cufflinks = silver tie bar. Always consistent."],
            ["03", "Shoes Tell the Story", "Polished shoes signal discipline. A great suit with dirty shoes signals neglect."],
            ["04", "Dress for the Room", "Know where you're going. Overdressing is respectful. Underdressing is careless."],
            ["05", "Less Is More", "One statement piece per outfit. Rings, tie pin, AND bold watch is too much."],
            ["06", "Iron Everything", "Wrinkles communicate disorganisation. This is not negotiable."],
          ].map(([num, title, body]) => (
            <div key={num} style={{ borderTop: `1px solid ${COLORS.border}`, paddingTop: "20px" }}>
              <div style={{ fontSize: "11px", color: COLORS.gold, fontWeight: 600, letterSpacing: "0.1em", marginBottom: "8px" }}>{num}</div>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: COLORS.cream, marginBottom: "8px" }}>{title}</div>
              <div style={{ fontSize: "12px", color: COLORS.muted, lineHeight: 1.6, fontWeight: 300 }}>{body}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// MAIN APP
export default function SuitDashboard() {
  const [gender, setGender] = useState("men");
  const [tab, setTab] = useState("profile");

  const tabs = [
    { id: "profile", label: "Style Profile" },
    { id: "builder", label: "Suit Builder" },
    { id: "weekly", label: "Weekly Planner" },
    { id: "women", label: "Women's Edit" },
    { id: "guide", label: "Style Guide" },
  ];

  return (
    <>
      <style>{styleTag}</style>
      <div className="suit-app">
        <header className="header">
          <div className="logo">
            The Dressed Edit
            <span>Personal Style Intelligence</span>
          </div>
          <div className="gender-toggle">
            <button className={`gender-btn${gender === "men" ? " active" : ""}`} onClick={() => setGender("men")}>Men</button>
            <button className={`gender-btn${gender === "women" ? " active" : ""}`} onClick={() => setGender("women")}>Women</button>
          </div>
        </header>

        <nav className="nav">
          {tabs.map(t => (
            <button key={t.id} className={`nav-btn${tab === t.id ? " active" : ""}`} onClick={() => setTab(t.id)}>{t.label}</button>
          ))}
        </nav>

        <main className="main">
          {tab === "profile" && (
            <>
              <div className="section-title">Understand Your <em>Style DNA</em></div>
              <div className="divider"/>
              <div className="section-sub">Complete the profile to reveal your personal style archetype</div>
              <StyleProfile gender={gender} />
            </>
          )}
          {tab === "builder" && (
            <>
              <div className="section-title">Build Your <em>Perfect Outfit</em></div>
              <div className="divider"/>
              <div className="section-sub">Select suit colour, fabric & occasion to generate your complete look</div>
              <SuitBuilder gender={gender} />
            </>
          )}
          {tab === "weekly" && (
            <>
              <div className="section-title">Your <em>Weekly Wardrobe</em></div>
              <div className="divider"/>
              <div className="section-sub">A curated outfit for every day of your professional week</div>
              <WeeklyPlanner gender={gender} />
            </>
          )}
          {tab === "women" && (
            <>
              <div className="section-title">Women's <em>Power Dressing</em></div>
              <div className="divider"/>
              <div className="section-sub">Suits, skirts, and the art of boardroom elegance</div>
              <WomensSection />
            </>
          )}
          {tab === "guide" && (
            <>
              <div className="section-title">The <em>Style Guide</em></div>
              <div className="divider"/>
              <div className="section-sub">The principles that separate dressed from well-dressed</div>
              <StyleGuide />
            </>
          )}
        </main>
      </div>
    </>
  );
}
