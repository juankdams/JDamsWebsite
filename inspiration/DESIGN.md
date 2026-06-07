---
name: Data Architect Narrative
colors:
  surface: '#f9f9ff'
  surface-dim: '#cfdaf2'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eeff'
  surface-container-high: '#dee8ff'
  surface-container-highest: '#d8e3fb'
  on-surface: '#111c2d'
  on-surface-variant: '#3d4a42'
  inverse-surface: '#263143'
  inverse-on-surface: '#ecf1ff'
  outline: '#6d7a72'
  outline-variant: '#bccac0'
  surface-tint: '#006c4a'
  primary: '#006948'
  on-primary: '#ffffff'
  primary-container: '#00855d'
  on-primary-container: '#f5fff7'
  inverse-primary: '#68dba9'
  secondary: '#006780'
  on-secondary: '#ffffff'
  secondary-container: '#76dcff'
  on-secondary-container: '#006077'
  tertiary: '#9b3e3b'
  on-tertiary: '#ffffff'
  tertiary-container: '#ba5551'
  on-tertiary-container: '#fffbff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#85f8c4'
  primary-fixed-dim: '#68dba9'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#005137'
  secondary-fixed: '#b7eaff'
  secondary-fixed-dim: '#6cd3f7'
  on-secondary-fixed: '#001f28'
  on-secondary-fixed-variant: '#004e61'
  tertiary-fixed: '#ffdad7'
  tertiary-fixed-dim: '#ffb3ae'
  on-tertiary-fixed: '#410004'
  on-tertiary-fixed-variant: '#7f2928'
  background: '#f9f9ff'
  on-background: '#111c2d'
  surface-variant: '#d8e3fb'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-snippet:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
---

## Brand & Style
The design system is engineered for high-stakes technical environments where clarity, precision, and information density are paramount. The brand personality is scholarly yet cutting-edge—resembling a modern technical manuscript. It targets data engineers, architects, and analysts who require a "heads-up display" experience that minimizes cognitive load while maximizing data visibility.

The style is **Modern Corporate Minimalism**. It eschews decorative flourishes in favor of structural integrity, utilizing whitespace as a functional tool to group complex data sets. The aesthetic response should be one of professional "sobriety": calm, organized, and authoritative.

## Colors
The palette is rooted in a "Paper & Ink" philosophy, optimized for long-term legibility.
- **Surface & Background:** A pure white (#FFFFFF) is used for primary content cards and modals to provide maximum contrast, while a soft Slate-tinted grey (#F8FAFC) is used for the application background to reduce eye strain.
- **Typography:** Deep Slate (#1E293B) serves as the primary text color, providing a softer, more professional alternative to pure black while maintaining AA/AAA accessibility.
- **Accents:** Emerald (#059669) is the primary action color, signaling "go," "success," or "active." Cyan (#0891B2) acts as the secondary accent for data visualization, links, and informational highlights.

## Typography
This design system utilizes **Inter** across all levels to ensure a systematic, utilitarian feel. The hierarchy is strictly enforced to manage high information density:
- **Headlines:** Use tighter letter-spacing and bold weights to anchor sections.
- **Body:** Standardized at 14px for the majority of data-heavy interfaces, ensuring a high ratio of content-to-screen-real-estate.
- **Labels:** Small, uppercase, and slightly tracked-out (0.05em) to differentiate metadata from primary content.
- **Numerical Data:** Should utilize Inter's tabular lining feature (tnum) to ensure columns of figures align perfectly in data tables.

## Layout & Spacing
The layout follows a **Fixed-Fluid Hybrid Grid**. Content areas use a 12-column grid on desktop with a fixed max-width of 1440px to prevent excessive line lengths. 

- **Density:** A strict 4px baseline grid is used. For data-dense views (like schema builders), use "Compact" spacing (8px padding). For marketing or dashboard overviews, use "Default" spacing (16px padding).
- **Breakpoints:**
  - Mobile: 0-599px (4 columns, 16px margins).
  - Tablet: 600-1023px (8 columns, 24px margins).
  - Desktop: 1024px+ (12 columns, 32px margins).

## Elevation & Depth
In this design system, depth is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than heavy shadows.
- **Level 0 (Background):** #F8FAFC. Used for the main canvas.
- **Level 1 (Card/Container):** #FFFFFF with a 1px border of #E2E8F0 (Slate-200). No shadow.
- **Level 2 (Dropdowns/Modals):** #FFFFFF with a subtle, highly diffused ambient shadow (0px 4px 20px rgba(30, 41, 59, 0.05)) and a #CBD5E1 border.
- **Interactions:** Hover states on interactive elements should shift the background color to #F1F5F9 rather than increasing shadow depth.

## Shapes
The shape language is disciplined and modern.
- **Subtle Rounding:** A base radius of 4px (`rounded-sm` / 0.25rem) is applied to all buttons, inputs, and cards. This maintains a sharp, professional "architectural" feel while feeling more contemporary than strict 90-degree corners.
- **Strictness:** Do not use pill-shaped buttons; all rectangular elements should maintain the 4px radius for a consistent structural rhythm.

## Components
- **Buttons:** Primary buttons use a solid Emerald (#059669) fill with white text. Secondary buttons use a #F1F5F9 background with Slate-800 text.
- **Input Fields:** 1px border (#E2E8F0) with a 4px radius. On focus, the border changes to Cyan (#0891B2) with a subtle 2px outer glow of the same color at 10% opacity.
- **Chips/Badges:** Use a "Ghost" style. For example, a "Success" tag uses a light emerald tint (#ECFDF5) with dark emerald text (#065F46). No borders on chips.
- **Data Tables:** These are the core of the design system. Use a flat header with a light grey fill (#F1F5F9) and 1px horizontal dividers. No vertical dividers except for the leftmost column.
- **Cards:** White background, 1px Slate-200 border, and no shadow. Use a 16px padding for standard content and 24px for headers.
- **Status Indicators:** Use small 8px circles for "live" statuses, utilizing Emerald for active and Slate-300 for inactive.