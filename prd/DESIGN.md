---
name: Neo-Brutalist Tech Scrapbook
colors:
  surface: '#f9f9ff'
  surface-dim: '#ccdaf8'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e8eeff'
  surface-container-high: '#dfe8ff'
  surface-container-highest: '#d6e3ff'
  on-surface: '#0d1c32'
  on-surface-variant: '#434657'
  inverse-surface: '#233148'
  inverse-on-surface: '#ecf0ff'
  outline: '#747688'
  outline-variant: '#c4c5da'
  surface-tint: '#0046fa'
  primary: '#0035c5'
  on-primary: '#ffffff'
  primary-container: '#0047ff'
  on-primary-container: '#d4d9ff'
  inverse-primary: '#b9c3ff'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fdd400'
  on-secondary-container: '#6f5c00'
  tertiary: '#004f68'
  on-tertiary: '#ffffff'
  tertiary-container: '#006889'
  on-tertiary-container: '#aee3ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b9c3ff'
  on-primary-fixed: '#001257'
  on-primary-fixed-variant: '#0033c0'
  secondary-fixed: '#ffe170'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#c0e8ff'
  tertiary-fixed-dim: '#7bd1fa'
  on-tertiary-fixed: '#001e2b'
  on-tertiary-fixed-variant: '#004d66'
  background: '#f9f9ff'
  on-background: '#0d1c32'
  surface-variant: '#d6e3ff'
  canvas-bg: '#FFFFFF'
  paper-wash: '#FEFCE8'
  blueprint-cyan: '#7DD3FC'
  caution-yellow: '#FFD600'
  electric-blue: '#0047FF'
  ink-black: '#000000'
  terminal-night: '#0A192F'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '500'
    lineHeight: 26px
  body-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
spacing:
  gutter: 1.5rem
  margin: 2rem
  gutter-mobile: 1rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-density, tactile Neo-Brutalist "Tech Scrapbook" aesthetic tailored for technical portfolios, developer engineering logs, and creative coder artifacts. It fuses the pragmatic rigor of an architectural blueprint and unix terminal prompt with the tactile charm of physical stationery, zines, and workshop workbenches.

The interface targets developers, engineering managers, and technical founders seeking craftsmanship, transparency, and personality over sanitized corporate uniformity. Visual signatures include hard offsets, high-contrast structural linework, file folder tabs, pinned status badges, and terminal annotations. It eschews soft shadows, delicate blurs, and decorative gradients in favor of sharp geometry, bold pigment, and graphic utility.

## Colors

The palette operates with striking visual contrast, using bright technical primaries balanced by deep structural inks:

- **Primary (`#0047FF` - Electric Blue):** Serves as the primary structural spine. Applied to high-energy borders, hard drop shadows, interactive links, and prominent folder borders.
- **Secondary (`#FFD600` - Caution Yellow):** High-impact functional highlight for stickers, sticky notes, pinned badges, callouts, and primary active call-to-action buttons.
- **Tertiary (`#7DD3FC` - Blueprint Cyan):** Represents technical blueprints, subtle background fills, code metadata blocks, and informational tags.
- **Neutral (`#0A192F` - Terminal Night):** Deep structural graphite/navy used for heavy line borders, high-priority hard shadows, terminal windows, and foundational body text.

### Color Roles & Text Contrast
- **Canvas Base:** Pure White (`#FFFFFF`) layered with an optional subtle SVG dot-grid pattern (`#7DD3FC` at 25% opacity, 16px grid pitch).
- **Surface Elevation:** Paper Wash (`#FEFCE8`) for highlighted notes/scrapbook snippets, and Crisp White (`#FFFFFF`) for standard content containers.
- **Text:** Always rendered in Terminal Night (`#0A192F`) or Ink Black (`#000000`) on light backgrounds for AA/AAA compliance. When displayed on Terminal Night containers, text shifts to Pure White (`#FFFFFF`) or Blueprint Cyan (`#7DD3FC`).

## Typography

The typographic hierarchy pairs the bold, industrial personality of **Space Grotesk** with the utilitarian precision of **JetBrains Mono**.

- **Display & Headings (Space Grotesk):** Provides structured, geometric impact. Display titles adopt tight letter tracking (`-0.03em` to `-0.01em`) and punchy sentence-case or structural UPPERCASE formats.
- **Body & UI Elements (JetBrains Mono):** Governs all body copy, navigation labels, prompts, status banners, directory paths, and metadata. Monospaced rendering reinforces the engineering sketchbook motif and guarantees vertical alignment across multi-column data readouts.

## Layout & Spacing

The layout model is anchored on a rigid 12-column modular bento grid system calibrated for desktop screens, collapsing cleanly into 6 columns on tablet devices and a single-column sequence on mobile.

- **Grid Structure:** Elements snap into distinct rectangular blocks mimicking physical index cards, blueprint cutouts, and terminal windows.
- **Rhythm & Padding:** Component interiors maintain disciplined inner spacing using `space-md` (16px) and `space-lg` (24px). Layout items maintain intentional clearance to prevent hard drop shadows from colliding with adjacent elements.
- **Tactile Offsets:** Certain sticker badges, sticky memos, and pinned tags break the vertical grid lines through slight CSS rotations (`-1.5deg` to `2deg`) and absolute corner anchors, contrasting the rigid grid framework.

## Elevation & Depth

This design system strictly forbids blurry dropshadows, diffuse ambient glows, and skeumorphic gradient skews. Depth is expressed exclusively through **hard-edge brutalist offsets** and layered structural planes:

- **Base Elevation (Interactive / Flat Containers):** Solid offset shadow: `3px 3px 0px #0A192F` or `4px 4px 0px #0047FF`.
- **Raised Elevation (Floating Modals, Active Cards, Sticky Notes):** Prominent solid offset: `6px 6px 0px #0A192F`.
- **Pressed / Active State:** On interaction or mouse click, elements translate by `+3px +3px` or `+4px +4px` along the X/Y axes while the solid shadow collapses to `0px 0px 0px`, simulating mechanical push-button feedback.
- **Tactile Tape & Pinning:** Document attachments, image frames, and callout blocks can feature pseudo-element "masking tape" strips (semi-translucent ivory bars `rgba(254, 252, 232, 0.85)` with a dashed outline or angled cuts) layered at card edges.

## Shapes

The geometric architecture relies on **Level 0 (Sharp)**: 0px border-radius across cards, buttons, window headers, input frames, and modular bento cells. 

- **Exceptions for Badges:** Pill-style sticker tags may employ an explicit full circular radius (`9999px`) to create an authentic tactile vinyl sticker or adhesive label aesthetic against the razor-sharp cards.
- **Linework:** All structural containers feature unbroken `2px` or `3px` solid stroke borders using `#0A192F` or `#0047FF`.

## Components

### Buttons
- **Primary Action Button:** Electric Blue (`#0047FF`) or Caution Yellow (`#FFD600`) solid background with a `2px solid #0A192F` border, 0px border radius, and bold `JetBrains Mono` label. Features a `4px 4px 0px #0A192F` drop shadow. Hover shifts color brightness slightly; active click triggers `transform: translate(4px, 4px)` with shadow reset to `0px 0px 0px`.
- **Secondary / Outline Button:** White (`#FFFFFF`) background, `2px solid #0A192F`, `3px 3px 0px #0047FF` offset shadow.

### Cards & Bento Modules
- Built with crisp white or pale paper backgrounds (`#FFFFFF` or `#FEFCE8`), bounded by `2px solid #0A192F`, with a `4px 4px 0px #0047FF` or `#0A192F` hard shadow.
- **Folder Tab Headers:** Cards frequently utilize an integrated top tab displaying file names (e.g., `README.md`, `project_01.sh`), rendered with an inverted background bar and monospaced title.

### Chips, Tags & Sticker Badges
- **Terminal System Tags:** Monospaced directory path syntax like `[ ~/Ibnuprtma.vercel.app/projects ]` set in `body-sm` with `1.5px solid #0A192F` borders and `#7DD3FC` (Blueprint Cyan) fill.
- **Sticker Pins:** Rotated pill tags (`rounded-full`) in Caution Yellow (`#FFD600`) featuring `2px solid #0A192F` borders and `2px 2px 0px #0A192F` shadows, placed overlapping card headers.

### Form Inputs & Text Fields
- Square corners (`0px`), white backgrounds, and a `2px solid #0A192F` boundary.
- Active focus state adds a sharp `3px 3px 0px #0047FF` offset outline with zero roundedness and an immediate caret blink.

### Checkboxes & Selection Controls
- Sharp 18x18px square boxes with `2px solid #0A192F`. When checked, the box fills with Caution Yellow (`#FFD600`) or Electric Blue (`#0047FF`) and renders an angular black or white geometric "X" or checkmark.

### Terminal Logbook / Activity Timeline
- Inverted dark surface (`#0A192F`) container, framed with `2px solid #0047FF` and `5px 5px 0px #0047FF`. Employs a simulated macOS/Linux header bar with three monochrome window dots, followed by green, yellow, and cyan monospaced log lines prefixed with `$` or `>`.