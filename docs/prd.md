# Alfaazi — Product Requirements Document

## Overview
Alfaazi is a shayari and poetry creation studio — a SaaS platform for creating beautiful poetry graphics, managing collections, and sharing across social media. This build is the marketing site + fully interactive demo, deployed to GitHub Pages.

## Scope (GitHub Pages Build)
Full landing page with interactive poetry design studio demo. The demo lets users actually create a shayari graphic in-browser — type poetry, choose a template, customize, and see the result.

## Landing Page Requirements

### Hero Section
- Stunning opening with Urdu calligraphy element
- Headline in both English and Urdu
- "The Poetry Studio" positioning
- CTA: "Start Creating — Free"
- Background: subtle ink-wash texture or calligraphic flourish

### How It Works
3-step flow:
1. **Write** — Type your shayari in Urdu, Hindi, or Roman
2. **Design** — Choose from 50+ poetry-specific templates
3. **Share** — Export HD images for Instagram, WhatsApp, Stories

### Feature Sections

1. **Poetry Editor**
   - Rich text editor with Urdu/Hindi keyboard support
   - Auto-detection of script direction (RTL/LTR)
   - Poetry structure support (sher, ghazal, nazm, rubai formats)
   - Rhyme highlighting and meter guidance
   - Visual: Editor with bilingual text

2. **Design Studio**
   - 50+ templates designed specifically for poetry/shayari
   - Customizable backgrounds, fonts, colors, borders
   - Multiple export sizes (Instagram post, story, WhatsApp status, Twitter)
   - Calligraphic border and ornament library
   - Visual: Template selection + live preview

3. **Script Transliteration**
   - Type in Roman script → auto-converts to Urdu Nastaliq
   - Type in Roman → auto-converts to Hindi Devanagari
   - Bidirectional conversion between all three scripts
   - Visual: Side-by-side script comparison

4. **Poetry Collections**
   - Organize shayari into themed collections (ishq, dard, zindagi, etc.)
   - Personal library with search and tags
   - Import from text, screenshot OCR
   - Visual: Collection grid with themes

5. **Social Sharing**
   - One-click export to Instagram, WhatsApp, Facebook
   - Watermark-free for premium users
   - Scheduling for social media posts
   - Analytics on shares and engagement
   - Visual: Share dialog with platform previews

6. **Poet Profiles**
   - Attribute shayari to poets (Ghalib, Faiz, Mir, etc.)
   - Browse poetry by poet
   - Create your own poet profile
   - Visual: Poet cards with portraits

### Interactive Demo — Poetry Design Studio
This is the centerpiece. A fully working in-browser poetry design studio where visitors can:
1. Type or paste a sher (couplet)
2. See it rendered in beautiful Nastaliq calligraphy
3. Choose from 6-8 template styles
4. Customize colors, background, text size
5. See a live preview of the final design
6. Download the result (as a PNG — using html2canvas or similar)

### Template Gallery
Show 8-12 pre-designed poetry templates:
- Minimalist dark (white text on black)
- Golden manuscript (gold calligraphy on dark)
- Watercolor wash (text over subtle watercolors)
- Film noir (high contrast, cinematic)
- Floral border (traditional Mughal-style borders)
- Modern gradient (subtle teal/dark gradient)
- Parchment (warm, aged paper look)
- Geometric (Islamic geometric patterns as borders)

### Pricing Section
- **Free:** 5 designs/month, basic templates, watermarked exports
- **Creator ($29/mo):** Unlimited designs, all templates, no watermark, HD export, transliteration, collections
- **Studio ($79/mo):** Everything + brand kits, team collab, scheduling, API, analytics, bulk export

### Testimonials
Quotes from "shayari creators" and "poetry enthusiasts" — realistic personas

### Footer
- Links, social, newsletter
- "हर लफ़्ज़ एक कहानी" / "ہر لفظ ایک کہانی" (Every word is a story)

## Technical Requirements
- Single page React app (Vite + TypeScript)
- Google Fonts: Noto Nastaliq Urdu, Amiri, Playfair Display, DM Sans
- RTL support for Urdu text sections
- Interactive demo with real template rendering
- Responsive (mobile-first)
- `npm run build` must pass clean
- Deploy to GitHub Pages at warriorsushi.github.io/alfaazi/

## Non-Goals
- No actual backend/auth
- No real social media integration
- No real file storage
- Marketing site + interactive demo only
