# Alfaazi — Design Document

## Design Context

### Users
South Asian poetry lovers — from teenagers sharing romantic shayari on Instagram to serious poets curating their ghazal collections. They're mobile-first, visually driven, and deeply emotional about their craft. The tool should feel like it respects the art form.

### Brand Personality
**Elegant. Soulful. Modern.**
Not a generic design tool with Urdu slapped on. This breathes poetry. The interface itself should feel like opening a beautiful book of verse — spacious, reverent, with calligraphic touches.

### Aesthetic Direction
**Dark editorial luxury** — OLED black canvas that makes text and calligraphy glow. The aesthetic is a modern poetry journal — think Monocle magazine meets traditional Urdu manuscript. Gold/amber accents evoke ink on parchment. Typography is the hero — Nastaliq script displayed with the reverence it deserves.

### Anti-references
- Bright, noisy Indian apps with too many colors and gradients
- Generic Canva-style design tools
- Low-quality shayari apps with ad banners everywhere
- Western poetry sites that don't understand RTL or Urdu aesthetics

### Design References
- Traditional Urdu calligraphy manuscripts (gold ink on dark backgrounds)
- Arc browser (polish, thoughtfulness)
- Bear app (writing-focused, calm)
- Figma (creation studio feel)

## Color Palette
- **Background:** #0a0a0b (OLED black — the canvas)
- **Surface:** #111113 (elevated surfaces)
- **Surface 2:** #1a1a1d (cards, panels)
- **Border:** #2a2a2e
- **Border active:** #3a3a40
- **Primary:** #14b8a6 (teal-500 — actions, interactive)
- **Primary muted:** #0d9488
- **Accent gold:** #d4a44c (warm gold — calligraphy, poetry highlights)
- **Accent gold muted:** #a67c3a
- **Accent gold ghost:** rgba(212, 164, 76, 0.1)
- **Secondary:** #38bdf8 (sky — informational)
- **Text primary:** #f0f0f2
- **Text secondary:** #8a8a96
- **Text tertiary:** #5a5a66
- **Text warm:** #e8d5b0 (warm off-white for poetry display)

## Typography
- **Urdu Display:** "Noto Nastaliq Urdu" — proper Nastaliq rendering for Urdu script
- **Urdu Body:** "Amiri" — clean Arabic/Urdu body text
- **Latin Display:** "Playfair Display" — editorial, poetic
- **Latin Body:** "DM Sans" — clean, modern
- **Mono:** "JetBrains Mono" — for UI elements

## Layout Principles
- Mobile-first — poetry is consumed on phones
- Poetry always centered, generous vertical whitespace
- RTL support for Urdu text, LTR for Hindi/English
- Canvas-like workspace for the design studio
- Split view: editor left, preview right (desktop)
- Full-screen preview on mobile

## Key Screens (Landing Page + Demo)
1. **Hero** — atmospheric with calligraphy, shows the studio
2. **How It Works** — write → design → share workflow
3. **Features** — poetry editor, design templates, transliteration, collections, sharing
4. **Template Gallery** — preview of beautiful shayari templates
5. **Interactive Demo** — live poetry design studio
6. **Pricing** — free/creator/studio tiers
7. **CTA** — early access signup
8. **Footer**

## Iconography
- Lucide icons only
- Key: PenTool, Type, Image, Palette, Share2, BookOpen, Heart, Download, Layout, Languages, Sparkles

## Motion
- Elegant, slow reveals (poetry is unhurried)
- Text fade-in word by word for poetry display
- Smooth canvas interactions
- No bouncy/elastic — smooth deceleration
