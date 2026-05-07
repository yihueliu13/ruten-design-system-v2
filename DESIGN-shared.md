---
role: token-sot
version: 0.3
status: active
last_updated: 2026-05-07
description: 露天設計系統共用 token SOT — Phase 1 第一批完整 truth chain（ref 補齊）
source: v1 design-system-all.tokens.json (681 tokens 全集，本檔為 304 個第一批)
---

# DESIGN-shared.md

> 露天設計系統 Token Source of Truth — **Phase 1 第一批 migration（v0.3 補齊 ref）**。
>
> 範圍：ref + sys + comp.button = **304 tokens**（v1 全 681 中的第一條完整 truth chain）。
>
> v0.3 補齊原因：v0.2 只搬 ref.color，但 sys.{border, opacity, radius, spacing, typography} 全部 alias 到 ref.* — 沒搬齊 ref → CSS variable cascade 失敗 → button 直角 / 沒 border / size 沒梯度。reality 教我們 ref 要一次搬齊。
>
> 結構規範詳見 [`specs/tokens/design-md-structure.md`](specs/tokens/design-md-structure.md)。

## Token 統計

| Layer | Category | Count |
|-------|----------|-------|
| ref | color | 45 |
| ref | border | 9 |
| ref | opacity | 8 |
| ref | radius | 9 |
| ref | spacing | 13 |
| ref | typography | 36 |
| sys | color | 46 |
| sys | opacity | 10 |
| sys | border | 8 |
| sys | radius | 6 |
| sys | spacing | 10 |
| sys | typography | 38 |
| comp | button | 66 |
| **Total** | | **304** |

---

## `ref.color` — 原子色階

| Token | Value | Description |
|-------|-------|-------------|
| `ref.color.orange.50` | `#FFF8F1` | ⚠️ RAW PALETTE — orange 50. Do not use directly. |
| `ref.color.orange.100` | `#FFEAD5` | ⚠️ RAW PALETTE — orange 100. Do not use directly. |
| `ref.color.orange.200` | `#FDDCAB` | ⚠️ RAW PALETTE — orange 200. Do not use directly. |
| `ref.color.orange.300` | `#FDB772` | ⚠️ RAW PALETTE — orange 300. Do not use directly. |
| `ref.color.orange.400` | `#FFAA4D` | ⚠️ RAW PALETTE — orange 400. Do not use directly. |
| `ref.color.orange.500` | `#FF963B` | ⚠️ RAW PALETTE — orange 500. Do not use directly. |
| `ref.color.orange.600` | `#E6781F` | ⚠️ RAW PALETTE — orange 600. Do not use directly. |
| `ref.color.orange.700` | `#C85F12` | ⚠️ RAW PALETTE — orange 700. Do not use directly. |
| `ref.color.orange.800` | `#9F470D` | ⚠️ RAW PALETTE — orange 800. Do not use directly. |
| `ref.color.orange.900` | `#7A3208` | ⚠️ RAW PALETTE — orange 900. Do not use directly. |
| `ref.color.neutral.0` | `#FFFFFF` | ⚠️ RAW PALETTE — neutral 0. Do not use directly. |
| `ref.color.neutral.50` | `#F6F7FE` | ⚠️ RAW PALETTE — neutral 50. Do not use directly. |
| `ref.color.neutral.100` | `#EBECF3` | ⚠️ RAW PALETTE — neutral 100. Do not use directly. |
| `ref.color.neutral.200` | `#E3E4EB` | ⚠️ RAW PALETTE — neutral 200. Do not use directly. |
| `ref.color.neutral.300` | `#D2D3D9` | ⚠️ RAW PALETTE — neutral 300. Do not use directly. |
| `ref.color.neutral.400` | `#B9BABF` | ⚠️ RAW PALETTE — neutral 400. Do not use directly. |
| `ref.color.neutral.500` | `#9798A2` | ⚠️ RAW PALETTE — neutral 500. Do not use directly. |
| `ref.color.neutral.600` | `#73747B` | ⚠️ RAW PALETTE — neutral 600. Do not use directly. |
| `ref.color.neutral.700` | `#47484D` | ⚠️ RAW PALETTE — neutral 700. Do not use directly. |
| `ref.color.neutral.800` | `#33343B` | ⚠️ RAW PALETTE — neutral 800. Do not use directly. |
| `ref.color.neutral.900` | `#161619` | ⚠️ RAW PALETTE — neutral 900. Do not use directly. |
| `ref.color.neutral.1000` | `#000000` | ⚠️ RAW PALETTE — neutral 1000. Do not use directly. |
| `ref.color.red.50` | `#FFE5E5` | ⚠️ RAW PALETTE — red 50. Do not use directly. |
| `ref.color.red.100` | `#FFB1B2` | ⚠️ RAW PALETTE — red 100. Do not use directly. |
| `ref.color.red.300` | `#FF818E` | ⚠️ RAW PALETTE — red 300. Do not use directly. |
| `ref.color.red.500` | `#FF4E51` | ⚠️ RAW PALETTE — red 500. Do not use directly. |
| `ref.color.red.700` | `#C71C1F` | ⚠️ RAW PALETTE — red 700. Do not use directly. |
| `ref.color.yellow.50` | `#FFF6DB` | ⚠️ RAW PALETTE — yellow 50. Do not use directly. |
| `ref.color.yellow.100` | `#FFEEBC` | ⚠️ RAW PALETTE — yellow 100. Do not use directly. |
| `ref.color.yellow.300` | `#FFE180` | ⚠️ RAW PALETTE — yellow 300. Do not use directly. |
| `ref.color.yellow.500` | `#FFDF4F` | ⚠️ RAW PALETTE — yellow 500. Do not use directly. |
| `ref.color.yellow.700` | `#A17605` | ⚠️ RAW PALETTE — yellow 700. Do not use directly. |
| `ref.color.blue.50` | `#E5EEFF` | ⚠️ RAW PALETTE — blue 50. Do not use directly. |
| `ref.color.blue.100` | `#CDDFFF` | ⚠️ RAW PALETTE — blue 100. Do not use directly. |
| `ref.color.blue.300` | `#9CBAFF` | ⚠️ RAW PALETTE — blue 300. Do not use directly. |
| `ref.color.blue.500` | `#3B82F6` | ⚠️ RAW PALETTE — blue 500. Do not use directly. |
| `ref.color.blue.700` | `#123CAA` | ⚠️ RAW PALETTE — blue 700. Do not use directly. |
| `ref.color.teal.50` | `#DBFFF6` | ⚠️ RAW PALETTE — teal 50. Do not use directly. |
| `ref.color.teal.100` | `#B5FFEC` | ⚠️ RAW PALETTE — teal 100. Do not use directly. |
| `ref.color.teal.300` | `#40DBC4` | ⚠️ RAW PALETTE — teal 300. Do not use directly. |
| `ref.color.teal.500` | `#00B79C` | ⚠️ RAW PALETTE — teal 500. Do not use directly. |
| `ref.color.teal.700` | `#0D7D67` | ⚠️ RAW PALETTE — teal 700. Do not use directly. |
| `ref.color.black.60a` | `#000000` | ⚠️ RAW PALETTE — black 60% alpha. Do not use directly. |
| `ref.color.black.40a` | `#000000` | ⚠️ RAW PALETTE — black 40% alpha. Do not use directly. |
| `ref.color.black.15a` | `#000000` | ⚠️ RAW PALETTE — black 15% alpha. Do not use directly. |

## `ref.border` — 原子邊框寬度

| Token | Value | Description |
|-------|-------|-------------|
| `ref.border.width.none` | `0px` | ⚠️ RAW VALUE — border-width none = 0px. Do not use directly. |
| `ref.border.width.hairline` | `0.5px` | ⚠️ RAW VALUE — border-width hairline = 0.5px. Do not use directly. |
| `ref.border.width.thin` | `1px` | ⚠️ RAW VALUE — border-width thin = 1px. |
| `ref.border.width.medium` | `1.5px` | ⚠️ RAW VALUE — border-width medium = 1.5px. |
| `ref.border.width.thick` | `2px` | ⚠️ RAW VALUE — border-width thick = 2px. |
| `ref.border.width.heavy` | `3px` | ⚠️ RAW VALUE — border-width heavy = 3px. |
| `ref.border.style.solid` | `solid` | ⚠️ RAW VALUE — border-style solid. |
| `ref.border.style.dashed` | `dashed` | ⚠️ RAW VALUE — border-style dashed. |
| `ref.border.style.none` | `none` | ⚠️ RAW VALUE — border-style none. |

## `ref.opacity` — 原子透明度

| Token | Value | Description |
|-------|-------|-------------|
| `ref.opacity.0` | `0` | ⚠️ RAW VALUE — opacity 0 = 0. |
| `ref.opacity.50` | `0.5` | ⚠️ RAW VALUE — opacity 50 = 0.5. |
| `ref.opacity.100` | `1` | ⚠️ RAW VALUE — opacity 100 = 1.0. |
| `ref.opacity.hover` | `0.07999999821186066` | ⚠️ RAW VALUE — opacity hover = 0.08. |
| `ref.opacity.focus` | `0.11999999731779099` | ⚠️ RAW VALUE — opacity focus = 0.12. |
| `ref.opacity.pressed` | `0.11999999731779099` | ⚠️ RAW VALUE — opacity pressed = 0.12. |
| `ref.opacity.dragged` | `0.1599999964237213` | ⚠️ RAW VALUE — opacity dragged = 0.16. |
| `ref.opacity.disabled` | `0.3799999952316284` | ⚠️ RAW VALUE — opacity disabled = 0.38. |

## `ref.radius` — 原子圓角

| Token | Value | Description |
|-------|-------|-------------|
| `ref.radius.none` | `0px` | ⚠️ RAW VALUE — radius none = 0px. Do not use directly. |
| `ref.radius.xs` | `2px` | ⚠️ RAW VALUE — radius xs = 2px. Do not use directly. |
| `ref.radius.sm` | `4px` | ⚠️ RAW VALUE — radius sm = 4px. Do not use directly. |
| `ref.radius.md` | `8px` | ⚠️ RAW VALUE — radius md = 8px. Do not use directly. |
| `ref.radius.lg` | `12px` | ⚠️ RAW VALUE — radius lg = 12px. Do not use directly. |
| `ref.radius.xl` | `16px` | ⚠️ RAW VALUE — radius xl = 16px. Do not use directly. |
| `ref.radius.2xl` | `20px` | ⚠️ RAW VALUE — radius 2xl = 20px. Do not use directly. |
| `ref.radius.3xl` | `24px` | ⚠️ RAW VALUE — radius 3xl = 24px. Do not use directly. |
| `ref.radius.full` | `9999px` | ⚠️ RAW VALUE — radius full = 9999px. Do not use directly. |

## `ref.spacing` — 原子間距

| Token | Value | Description |
|-------|-------|-------------|
| `ref.spacing.0` | `0px` | ⚠️ RAW VALUE — spacing 0 = 0px. Do not use directly. |
| `ref.spacing.1` | `4px` | ⚠️ RAW VALUE — spacing 1 = 4px. Do not use directly. |
| `ref.spacing.2` | `8px` | ⚠️ RAW VALUE — spacing 2 = 8px. Do not use directly. |
| `ref.spacing.3` | `12px` | ⚠️ RAW VALUE — spacing 3 = 12px. Do not use directly. |
| `ref.spacing.4` | `16px` | ⚠️ RAW VALUE — spacing 4 = 16px. Do not use directly. |
| `ref.spacing.5` | `20px` | ⚠️ RAW VALUE — spacing 5 = 20px. Do not use directly. |
| `ref.spacing.6` | `24px` | ⚠️ RAW VALUE — spacing 6 = 24px. Do not use directly. |
| `ref.spacing.8` | `32px` | ⚠️ RAW VALUE — spacing 8 = 32px. Do not use directly. |
| `ref.spacing.10` | `40px` | ⚠️ RAW VALUE — spacing 10 = 40px. Do not use directly. |
| `ref.spacing.12` | `48px` | ⚠️ RAW VALUE — spacing 12 = 48px. Do not use directly. |
| `ref.spacing.16` | `64px` | ⚠️ RAW VALUE — spacing 16 = 64px. Do not use directly. |
| `ref.spacing.20` | `80px` | ⚠️ RAW VALUE — spacing 20 = 80px. Do not use directly. |
| `ref.spacing.24` | `96px` | ⚠️ RAW VALUE — spacing 24 = 96px. Do not use directly. |

## `ref.typography` — 原子字級 / 字重 / 行高

| Token | Value | Description |
|-------|-------|-------------|
| `ref.typography.font-family.primary` | `PingFang TC` | ⚠️ RAW VALUE — 中文主字型: PingFang TC (蘋方). |
| `ref.typography.font-family.english` | `SF Pro` | ⚠️ RAW VALUE — 英文主字型: SF Pro (Apple San Francisco). |
| `ref.typography.font-family.fallback` | `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif` | ⚠️ RAW VALUE — System fallback font stack. |
| `ref.typography.font-size.display-lg` | `40px` | ⚠️ RAW VALUE — font-size display-lg = 40px. |
| `ref.typography.font-size.display-md` | `36px` | ⚠️ RAW VALUE — font-size display-md = 36px. |
| `ref.typography.font-size.display-sm` | `32px` | ⚠️ RAW VALUE — font-size display-sm = 32px. |
| `ref.typography.font-size.headline-lg` | `28px` | ⚠️ RAW VALUE — font-size headline-lg = 28px. |
| `ref.typography.font-size.headline-md` | `24px` | ⚠️ RAW VALUE — font-size headline-md = 24px. |
| `ref.typography.font-size.headline-sm` | `20px` | ⚠️ RAW VALUE — font-size headline-sm = 20px. |
| `ref.typography.font-size.title-lg` | `18px` | ⚠️ RAW VALUE — font-size title-lg = 18px. |
| `ref.typography.font-size.title-md` | `16px` | ⚠️ RAW VALUE — font-size title-md = 16px. |
| `ref.typography.font-size.title-sm` | `14px` | ⚠️ RAW VALUE — font-size title-sm = 14px. |
| `ref.typography.font-size.body-lg` | `16px` | ⚠️ RAW VALUE — font-size body-lg = 16px. |
| `ref.typography.font-size.body-md` | `14px` | ⚠️ RAW VALUE — font-size body-md = 14px. |
| `ref.typography.font-size.body-sm` | `12px` | ⚠️ RAW VALUE — font-size body-sm = 12px. |
| `ref.typography.font-size.label-lg` | `14px` | ⚠️ RAW VALUE — font-size label-lg = 14px. |
| `ref.typography.font-size.label-md` | `12px` | ⚠️ RAW VALUE — font-size label-md = 12px. |
| `ref.typography.font-size.label-sm` | `11px` | ⚠️ RAW VALUE — font-size label-sm = 11px. |
| `ref.typography.font-size.label-xs` | `10px` | ⚠️ RAW VALUE — font-size label-xs = 10px. |
| `ref.typography.font-size.label-2xs` | `8px` | ⚠️ RAW VALUE — 8px. Smallest readable label size. Do not use directly. |
| `ref.typography.font-size.display-xl` | `48px` | ⚠️ RAW VALUE — font-size display-xl = 48px. |
| `ref.typography.font-size.display-2xl` | `56px` | ⚠️ RAW VALUE — font-size display-2xl = 56px. |
| `ref.typography.font-size.display-3xl` | `64px` | ⚠️ RAW VALUE — font-size display-3xl = 64px. |
| `ref.typography.font-size.body-md-alt` | `13px` | ⚠️ RAW VALUE — 13px. Legacy body size for migration compatibility. Do not use directly. |
| `ref.typography.font-weight.regular` | `400` | ⚠️ RAW VALUE — font-weight regular = 400. |
| `ref.typography.font-weight.medium` | `500` | ⚠️ RAW VALUE — font-weight medium = 500. |
| `ref.typography.font-weight.semibold` | `600` | ⚠️ RAW VALUE — font-weight semibold = 600. |
| `ref.typography.font-weight.bold` | `700` | ⚠️ RAW VALUE — font-weight bold = 700. |
| `ref.typography.line-height.tight` | `1.2000000476837158` | ⚠️ RAW VALUE — line-height tight = 1.2. |
| `ref.typography.line-height.normal` | `1.399999976158142` | ⚠️ RAW VALUE — line-height normal = 1.4. |
| `ref.typography.line-height.relaxed` | `1.5` | ⚠️ RAW VALUE — line-height relaxed = 1.5. |
| `ref.typography.line-height.loose` | `1.75` | ⚠️ RAW VALUE — line-height loose = 1.75. |
| `ref.typography.letter-spacing.tight` | `-0.019999999552965164px` | ⚠️ RAW VALUE — letter-spacing tight = -0.02em. |
| `ref.typography.letter-spacing.normal` | `0px` | ⚠️ RAW VALUE — letter-spacing normal = 0em. |
| `ref.typography.letter-spacing.wide` | `0.019999999552965164px` | ⚠️ RAW VALUE — letter-spacing wide = 0.02em. |
| `ref.typography.letter-spacing.wider` | `0.03999999910593033px` | ⚠️ RAW VALUE — letter-spacing wider = 0.04em. |

## `sys.color` — 語意 role · 色彩

| Token | Alias / Value | Type | Description |
|-------|--------------|------|-------------|
| `sys.color.primary` | → `ref.color.orange.500` | color | Primary brand color. Use for primary buttons, active nav, key CTAs, selected states. Do NOT use for error states, body text. Pair with on-primary. |
| `sys.color.on-primary` | → `ref.color.neutral.0` | color | Foreground on primary. Use for text/icons on primary backgrounds. Pair with primary. |
| `sys.color.primary-container` | → `ref.color.orange.100` | color | Soft primary bg. Use for chips, badges, selected list items. Pair with on-primary-container. |
| `sys.color.on-primary-container` | → `ref.color.orange.800` | color | Foreground on primary-container. Text/icons on soft primary bg. |
| `sys.color.secondary` | → `ref.color.orange.600` | color | Secondary brand accent. Use for secondary buttons, filter chips, progress bars. Pair with on-secondary. |
| `sys.color.on-secondary` | → `ref.color.neutral.0` | color | Foreground on secondary. Text/icons on secondary backgrounds. |
| `sys.color.secondary-container` | → `ref.color.orange.50` | color | Soft secondary bg. Use for toggles, secondary highlights. Pair with on-secondary-container. |
| `sys.color.on-secondary-container` | → `ref.color.orange.700` | color | Foreground on secondary-container. Text/icons on soft secondary bg. |
| `sys.color.surface` | → `ref.color.neutral.0` | color | Default page background. Base layer of all UI — pages, modals, cards, sheets. |
| `sys.color.on-surface` | → `ref.color.neutral.800` | color | Primary text/icons on surface. Headings, body text, primary icons. |
| `sys.color.on-surface-variant` | → `ref.color.neutral.600` | color | Secondary text. Captions, placeholders, helper text, metadata. Do NOT use for primary content. |
| `sys.color.surface-dim` | → `ref.color.neutral.50` | color | Dimmed surface. Page bg behind cards, list area grey bg, secondary panels, sidebar. |
| `sys.color.surface-container` | → `ref.color.neutral.0` | color | Standard container bg. Card backgrounds, input fields, dropdown menus. |
| `sys.color.surface-container-high` | → `ref.color.neutral.100` | color | Elevated container. Search bar, sticky header, floating card, nav bar. |
| `sys.color.inverse-surface` | → `ref.color.neutral.800` | color | Inverted surface for snackbars, tooltips. Pair with inverse-on-surface. |
| `sys.color.inverse-on-surface` | → `ref.color.neutral.50` | color | Text on inverse-surface. Snackbar text, tooltip labels. |
| `sys.color.surface-brand` | → `ref.color.orange.500` | color | Brand color full surface. Top nav bar, promo hero sections, brand-colored headers. Pair with on-surface-brand. |
| `sys.color.surface-brand-dim` | → `ref.color.orange.50` | color | Brand color light surface. Subtle brand bg, promo banner light bg, badge bg, campaign section. |
| `sys.color.on-surface-brand` | → `ref.color.neutral.0` | color | Foreground on brand surfaces. White text/icons for readability on brand color bg. |
| `sys.color.outline` | → `ref.color.neutral.400` | color | Default border. Input borders (default state), card outlines, dividers with clear visibility. |
| `sys.color.outline-variant` | → `ref.color.neutral.200` | color | Subtle border. Decorative dividers, secondary card borders, table separators. |
| `sys.color.error` | → `ref.color.red.500` | color | Error/destructive states. Form validation errors, destructive buttons, alert banners. NEVER use ref/color/red directly. Pair with on-error. |
| `sys.color.on-error` | → `ref.color.neutral.0` | color | Foreground on error. Text/icons on error backgrounds. |
| `sys.color.error-container` | → `ref.color.red.50` | color | Soft error bg. Inline error banners, form field error highlights. Pair with on-error-container. |
| `sys.color.on-error-container` | → `ref.color.red.700` | color | Foreground on error-container. Error message text, error icons on light red bg. |
| `sys.color.warning` | → `ref.color.yellow.500` | color | Warning states. Warning alerts, limit indicators, non-blocking issues. Pair with on-warning. |
| `sys.color.on-warning` | → `ref.color.neutral.900` | color | Foreground on warning. Dark text for readability on yellow. Do NOT use white on yellow. |
| `sys.color.warning-container` | → `ref.color.yellow.50` | color | Soft warning bg. Warning banners, notice blocks. Pair with on-warning-container. |
| `sys.color.on-warning-container` | → `ref.color.yellow.700` | color | Foreground on warning-container. Warning text on light yellow bg. |
| `sys.color.success` | → `ref.color.teal.500` | color | Success confirmation. Success alerts, verified badges, completed steps, payment confirmed. Pair with on-success. |
| `sys.color.on-success` | → `ref.color.neutral.0` | color | Foreground on success. Text/icons on success backgrounds. |
| `sys.color.success-container` | → `ref.color.teal.50` | color | Soft success bg. Success banners, order confirmation blocks. Pair with on-success-container. |
| `sys.color.on-success-container` | → `ref.color.teal.700` | color | Foreground on success-container. Success text on light green bg. |
| `sys.color.info` | → `ref.color.blue.500` | color | Informational states. Info alerts, help tooltips, status indicators. Pair with on-info. |
| `sys.color.on-info` | → `ref.color.neutral.0` | color | Foreground on info. Text/icons on info backgrounds. |
| `sys.color.info-container` | → `ref.color.blue.50` | color | Soft info bg. Info banners, help blocks, feature announcements. Pair with on-info-container. |
| `sys.color.on-info-container` | → `ref.color.blue.700` | color | Foreground on info-container. Info text on light blue bg. |
| `sys.color.scrim` | → `ref.color.black.60a` | color | Modal backdrop (60% black). Behind modal dialogs, bottom sheets, full-screen overlays. |
| `sys.color.scrim-medium` | → `ref.color.black.40a` | color | Medium overlay (40% black). Semi-transparent backdrops, image overlays. |
| `sys.color.scrim-light` | → `ref.color.black.15a` | color | Light overlay (15% black). Hover overlays, pressed states on thumbnails. |
| `sys.color.price` | → `ref.color.red.500` | color | Price highlight color. Red for promotional price emphasis. Use for current price display. NOT for error states — use sys/color/error for errors. |
| `sys.color.on-price` | → `ref.color.neutral.0` | color | Foreground on price backgrounds. White text on red price badges. |
| `sys.color.primary-container-dim` | → `ref.color.orange.50` | color | Light orange tinted background. Use for subtle primary-brand surface tints (e.g. tag filter active background). |
| `sys.color.surface-container-low` | → `ref.color.neutral.50` | color | Light neutral background surface. Use for inactive filter containers, secondary card backgrounds. |
| `sys.color.primary-variant` | → `ref.color.orange.400` | color | Lighter primary brand variant. Use for active/hover states where full primary (#FF963B) is too strong. |
| `sys.color.on-surface-medium` | → `ref.color.neutral.700` | color | Medium emphasis foreground. Neutral/700 (#47484D). Between on-surface (#33343B) and on-surface-variant (#73747B). Use for secondary tab inactive text, or any context needing medium-emphasis text on both white and brand surfaces. |

## `sys.opacity` — 語意 role · 透明度

| Token | Alias / Value | Type | Description |
|-------|--------------|------|-------------|
| `sys.opacity.transparent` | → `ref.opacity.0` | number | Fully transparent. Use for hidden elements, animation start states. |
| `sys.opacity.hover` | → `ref.opacity.hover` | number | 0.08. MD3 hover state layer. Apply as overlay on interactive elements on hover. |
| `sys.opacity.focus` | → `ref.opacity.focus` | number | 0.12. MD3 focus state layer. Apply as overlay on focused interactive elements. |
| `sys.opacity.pressed` | → `ref.opacity.pressed` | number | 0.12. MD3 pressed state layer. Apply as overlay on active/pressed elements. |
| `sys.opacity.dragged` | → `ref.opacity.dragged` | number | 0.16. MD3 dragged state layer. Apply as overlay on elements being dragged. |
| `sys.opacity.disabled` | → `ref.opacity.disabled` | number | 0.38. Disabled state opacity. Apply to entire disabled component (button, input, etc). |
| `sys.opacity.medium` | → `ref.opacity.50` | number | 0.5. Medium opacity. Use for semi-transparent backgrounds, watermarks. |
| `sys.opacity.opaque` | → `ref.opacity.100` | number | 1.0. Fully opaque. Default state for all visible elements. |
| `sys.opacity.hover-overlay` | 0.8500000238418579 | number | Opacity for hover overlay. Use for interactive elements on hover state. Do NOT use for disabled states. |
| `sys.opacity.pressed-overlay` | 0.699999988079071 | number | Opacity for pressed overlay. Use for interactive elements on pressed/active state. Do NOT use for disabled states. |

## `sys.border` — 語意 role · 邊框

| Token | Alias / Value | Type | Description |
|-------|--------------|------|-------------|
| `sys.border.width.none` | → `ref.border.width.none` | number | 0px. No border. Use for borderless cards, flat buttons. |
| `sys.border.width.hairline` | → `ref.border.width.hairline` | number | 0.5px. Hairline border. Use for subtle dividers on retina screens. |
| `sys.border.width.default` | → `ref.border.width.thin` | number | 1px. Default border. Use for input fields, card borders, dividers. |
| `sys.border.width.focus` | → `ref.border.width.thick` | number | 2px. Focus border. Use for focused inputs, selected cards, active tab indicator. |
| `sys.border.width.active` | → `ref.border.width.heavy` | number | 3px. Active/emphasis border. Use for active tab bottom border, selected navigation indicator. |
| `sys.border.style.solid` | → `ref.border.style.solid` | string | Solid border. Default for all borders. |
| `sys.border.style.dashed` | → `ref.border.style.dashed` | string | Dashed border. Use for upload drop zones, empty state containers, placeholder areas. |
| `sys.border.style.none` | → `ref.border.style.none` | string | No border style. Use with border-width-none. |

## `sys.radius` — 語意 role · 圓角

| Token | Alias / Value | Type | Description |
|-------|--------------|------|-------------|
| `sys.radius.none` | → `ref.radius.none` | number | 0px. No rounding. Use for full-width banners, table cells, square thumbnails. |
| `sys.radius.sm` | → `ref.radius.sm` | number | 4px. Subtle rounding. Use for tags, small badges, compact chips. |
| `sys.radius.md` | → `ref.radius.md` | number | 8px. Standard component radius. Use for buttons, inputs, cards, dropdowns. Default for most interactive components. |
| `sys.radius.lg` | → `ref.radius.lg` | number | 12px. Prominent rounding. Use for modal dialogs, bottom sheets, large cards. |
| `sys.radius.xl` | → `ref.radius.xl` | number | 16px. Extra rounding. Use for floating action buttons, image cards, promotional containers. |
| `sys.radius.full` | → `ref.radius.full` | number | 9999px. Fully rounded. Use for pills, avatars, circular badges, round icon buttons. |

## `sys.spacing` — 語意 role · 間距

| Token | Alias / Value | Type | Description |
|-------|--------------|------|-------------|
| `sys.spacing.none` | → `ref.spacing.0` | number | 0px. No spacing. Use for flush-aligned elements. |
| `sys.spacing.2xs` | → `ref.spacing.1` | number | 4px. Tightest spacing. Use for inline icon-to-text gaps, compact badge padding. |
| `sys.spacing.xs` | → `ref.spacing.2` | number | 8px. Use for button internal padding, form field gaps, tag spacing, tight card padding. |
| `sys.spacing.sm` | → `ref.spacing.3` | number | 12px. Use for standard component internal padding, list item vertical padding. |
| `sys.spacing.md` | → `ref.spacing.4` | number | 16px. Use for card padding, section gaps, form group spacing, page margin on mobile. |
| `sys.spacing.lg` | → `ref.spacing.6` | number | 24px. Use for large section gaps, modal padding, content area spacing. |
| `sys.spacing.xl` | → `ref.spacing.8` | number | 32px. Use for major section separation, hero padding, page-level spacing. |
| `sys.spacing.2xl` | → `ref.spacing.12` | number | 48px. Use for page top/bottom margin, large hero gaps. |
| `sys.spacing.3xl` | → `ref.spacing.16` | number | 64px. Use for landing page section separation, extra-large whitespace. |
| `sys.spacing.4xl` | → `ref.spacing.24` | number | 96px. Use for hero banner vertical padding, major page-level separation. |

## `sys.typography` — 語意 role · 字級

| Token | Alias / Value | Type | Description |
|-------|--------------|------|-------------|
| `sys.typography.font-family.primary` | → `ref.typography.font-family.primary` | string | PingFang TC. Primary Chinese font for all UI text. |
| `sys.typography.font-family.english` | → `ref.typography.font-family.english` | string | SF Pro. Primary English font. |
| `sys.typography.display.3xl` | → `ref.typography.font-size.display-3xl` | number | 64px. Hero banner headline. Use for homepage major promotions, campaign landing hero. |
| `sys.typography.display.2xl` | → `ref.typography.font-size.display-2xl` | number | 56px. Large display. Use for event pages, sale countdown headers. |
| `sys.typography.display.xl` | → `ref.typography.font-size.display-xl` | number | 48px. Display. Use for section hero titles, large promotional text. |
| `sys.typography.display.lg` | → `ref.typography.font-size.display-lg` | number | 40px. Use for page hero titles, major section headers. |
| `sys.typography.display.md` | → `ref.typography.font-size.display-md` | number | 36px. Use for secondary hero text, large card titles. |
| `sys.typography.display.sm` | → `ref.typography.font-size.display-sm` | number | 32px. Use for prominent section titles, modal headers. |
| `sys.typography.headline.lg` | → `ref.typography.font-size.headline-lg` | number | 28px. Use for page titles, major section headings. |
| `sys.typography.headline.md` | → `ref.typography.font-size.headline-md` | number | 24px. Use for card group titles, sidebar section headers. |
| `sys.typography.headline.sm` | → `ref.typography.font-size.headline-sm` | number | 20px. Use for card titles, list section headers, dialog titles. |
| `sys.typography.title.lg` | → `ref.typography.font-size.title-lg` | number | 18px. Use for product card titles, navigation section labels. |
| `sys.typography.title.md` | → `ref.typography.font-size.title-md` | number | 16px. Use for sub-section titles, form section labels, tab labels. |
| `sys.typography.title.sm` | → `ref.typography.font-size.title-sm` | number | 14px. Use for list item titles, compact card titles, table column headers. |
| `sys.typography.body.lg` | → `ref.typography.font-size.body-lg` | number | 16px. Large body text. Use for product descriptions, article content, important form labels. |
| `sys.typography.body.md` | → `ref.typography.font-size.body-md` | number | 14px. Standard body text. Use for paragraphs, descriptions, form labels, list content. |
| `sys.typography.body.sm` | → `ref.typography.font-size.body-sm` | number | 12px. Small body text. Use for captions, helper text, footnotes, timestamps. |
| `sys.typography.body.md-alt` | → `ref.typography.font-size.body-md-alt` | number | 13px. Legacy body text size. Use for migrating old 13px body text. Prefer body/md (14px) for new designs. |
| `sys.typography.label.lg` | → `ref.typography.font-size.label-lg` | number | 14px. Large label. Use for button text, navigation labels, tab labels. |
| `sys.typography.label.md` | → `ref.typography.font-size.label-md` | number | 12px. Standard label. Use for form labels, tag text, badge text, table cell text. |
| `sys.typography.label.sm` | → `ref.typography.font-size.label-sm` | number | 11px. Small label. Use for secondary badges, compact metadata, footnotes. |
| `sys.typography.label.xs` | → `ref.typography.font-size.label-xs` | number | 10px. Extra small. Use for promo tags (店取/宅配免運), discount badges, compact sale info. |
| `sys.typography.label.2xs` | → `ref.typography.font-size.label-2xs` | number | 8px. Smallest label. Use for extreme compact badges, corner discount tags (7.1折). Min readable size for Chinese. |
| `sys.typography.weight.regular` | → `ref.typography.font-weight.regular` | number | 400. Default body text weight. |
| `sys.typography.weight.medium` | → `ref.typography.font-weight.medium` | number | 500. Emphasized body text, active tab labels, selected navigation. |
| `sys.typography.weight.semibold` | → `ref.typography.font-weight.semibold` | number | 600. Card titles, section headers, product names. |
| `sys.typography.weight.bold` | → `ref.typography.font-weight.bold` | number | 700. Page titles, prices, key CTAs, primary headings. |
| `sys.typography.line-height.tight` | → `ref.typography.line-height.tight` | number | 1.2. Use for display text, large headings, hero titles where compact leading is needed. |
| `sys.typography.line-height.normal` | → `ref.typography.line-height.normal` | number | 1.4. Use for titles, labels, short text blocks. Default for most UI text. |
| `sys.typography.line-height.relaxed` | → `ref.typography.line-height.relaxed` | number | 1.5. Use for body text, paragraphs, product descriptions. Optimal readability. |
| `sys.typography.line-height.loose` | → `ref.typography.line-height.loose` | number | 1.75. Use for long-form reading, help articles, terms & conditions. |
| `sys.typography.letter-spacing.tight` | → `ref.typography.letter-spacing.tight` | number | -0.02em. Use for display/headline text where tighter tracking improves appearance. |
| `sys.typography.letter-spacing.normal` | → `ref.typography.letter-spacing.normal` | number | 0em. Default. Use for body text, standard UI. |
| `sys.typography.letter-spacing.wide` | → `ref.typography.letter-spacing.wide` | number | 0.02em. Use for labels, button text, small caps. |
| `sys.typography.letter-spacing.wider` | → `ref.typography.letter-spacing.wider` | number | 0.04em. Use for all-caps labels, badge text, overline text. |
| `sys.typography.decoration.none` | none | string | No text decoration. Default for most text elements. |
| `sys.typography.decoration.underline` | underline | string | Underline. Use for hyperlinks, text links within content, emphasised inline text. |
| `sys.typography.decoration.line-through` | line-through | string | Strikethrough. Use for original price (原價刪除線), sold-out items, completed todo items, deprecated content. |

## `comp.button` — Button component tokens

| Token | Alias / Value | Type | Description |
|-------|--------------|------|-------------|
| `comp.button.border-radius` | → `sys.radius.md` | number | Button corner radius. 8px for all sizes. |
| `comp.button.font-weight` | → `sys.typography.weight.semibold` | number | Button font weight. 600 for all sizes. |
| `comp.button.sm.padding-h` | → `sys.spacing.xs` | number | Button sm horizontal padding. 8px. Mobile CTA, compact actions. |
| `comp.button.sm.padding-v` | → `sys.spacing.2xs` | number | Button sm vertical padding. 4px. |
| `comp.button.sm.font-size` | → `sys.typography.label.md` | number | Button sm font size. 12px. |
| `comp.button.sm.icon-size` | → `comp.icon.sm.size` | number | Button sm icon size. References comp/icon/sm (16px). |
| `comp.button.sm.gap` | → `sys.spacing.2xs` | number | Button sm gap between icon and text. 4px. |
| `comp.button.sm.min-height` | 32px | number | Button sm minimum height. 32px. Compact touch target. |
| `comp.button.md.padding-h` | → `sys.spacing.md` | number | Button md horizontal padding. 16px. Default size for most contexts. |
| `comp.button.md.padding-v` | → `sys.spacing.xs` | number | Button md vertical padding. 8px. |
| `comp.button.md.font-size` | → `sys.typography.label.lg` | number | Button md font size. 14px. |
| `comp.button.md.icon-size` | → `comp.icon.md.size` | number | Button md icon size. References comp/icon/md (24px). |
| `comp.button.md.gap` | → `sys.spacing.xs` | number | Button md gap between icon and text. 8px. |
| `comp.button.md.min-height` | 40px | number | Button md minimum height. 40px. Standard touch target. |
| `comp.button.lg.padding-h` | → `sys.spacing.lg` | number | Button lg horizontal padding. 24px. Desktop hero CTA, prominent actions. |
| `comp.button.lg.padding-v` | → `sys.spacing.sm` | number | Button lg vertical padding. 12px. |
| `comp.button.lg.font-size` | → `sys.typography.title.sm` | number | Button lg font size. 14px with heavier weight. |
| `comp.button.lg.icon-size` | → `comp.icon.md.size` | number | Button lg icon size. References comp/icon/md (24px). |
| `comp.button.lg.gap` | → `sys.spacing.xs` | number | Button lg gap between icon and text. 8px. |
| `comp.button.lg.min-height` | 48px | number | Button lg minimum height. 48px. Large touch target. |
| `comp.button.xl.padding-h` | → `sys.spacing.xl` | number | Button xl horizontal padding. 32px. Large desktop hero CTA, landing page actions. |
| `comp.button.xl.padding-v` | → `sys.spacing.sm` | number | Button xl vertical padding. 12px. |
| `comp.button.xl.font-size` | → `sys.typography.title.md` | number | Button xl font size. 16px. Larger text for wide screens. |
| `comp.button.xl.icon-size` | → `comp.icon.md.size` | number | Button xl icon size. References comp/icon/md (24px). |
| `comp.button.xl.gap` | → `sys.spacing.xs` | number | Button xl gap. 8px. |
| `comp.button.xl.min-height` | 52px | number | Button xl minimum height. 52px. Prominent touch/click target. |
| `comp.button.primary.hover.opacity` | → `sys.opacity.opaque` | number | Primary button hover opacity. |
| `comp.button.primary.hover.background` | → `sys.color.on-surface` | color | Primary button hover background. Same tone, opacity change handles hover. |
| `comp.button.primary.pressed.opacity` | → `sys.opacity.opaque` | number | Primary button pressed opacity. |
| `comp.button.primary.pressed.background` | → `sys.color.on-surface` | color | Primary button pressed background. |
| `comp.button.primary.disabled.opacity` | → `sys.opacity.disabled` | number | Primary button disabled opacity. 0.38. |
| `comp.button.primary.disabled.background` | → `sys.color.on-surface` | color | Primary button disabled background. |
| `comp.button.primary.disabled.text-color` | → `sys.color.primary` | color | Primary button disabled text color. |
| `comp.button.primary.default.background` | → `sys.color.on-surface` | color | Primary button default background. Dark neutral surface. Highest-priority CTA: submit, confirm, next. One per section max. |
| `comp.button.primary.default.text-color` | → `sys.color.primary` | color | Primary button default text. Brand orange on dark surface. |
| `comp.button.primary.default.border-color` | → `sys.color.on-surface` | color | Primary button default border. Same as background, no visible border. |
| `comp.button.primary.default.icon-color` | → `comp.button.primary.default.text-color` | color | Primary button icon color. Aliases text-color (Ant Design currentColor pattern). Separate token per governance §12.3, same value by default. |
| `comp.button.secondary.default.border-width` | → `sys.border.width.default` | number | Secondary button default border width. 0 — filled style has no visible border. |
| `comp.button.secondary.default.background` | → `sys.color.primary` | color | Secondary button bg. Brand orange #FF963B. |
| `comp.button.secondary.default.text-color` | → `sys.color.on-primary` | color | Secondary button text. White on orange. |
| `comp.button.secondary.default.border-color` | → `sys.color.primary` | color | Secondary button border. Same as bg (no visible border). |
| `comp.button.secondary.default.icon-color` | → `comp.button.secondary.default.text-color` | color | Secondary button icon color. Aliases text-color (Ant Design currentColor pattern). White on brand orange. |
| `comp.button.secondary.disabled.opacity` | → `sys.opacity.disabled` | number | Secondary button disabled opacity. 0.38. |
| `comp.button.secondary.disabled.background` | → `sys.color.surface` | color | Secondary button disabled bg. Same color but with reduced opacity. |
| `comp.button.secondary.disabled.text-color` | → `sys.color.on-surface-variant` | color | Secondary button disabled text. |
| `comp.button.secondary.hover.background` | → `sys.color.surface-brand-dim` | color | Secondary button hover bg. Darker orange. |
| `comp.button.secondary.hover.border-color` | → `sys.color.primary` | color | Secondary button hover border. Matches hover bg (no visible border). |
| `comp.button.secondary.hover.opacity` | → `sys.opacity.opaque` | number | Secondary button hover opacity. Fully opaque. |
| `comp.button.secondary.pressed.background` | → `sys.color.secondary` | color | Secondary button pressed bg. Darker orange. |
| `comp.button.secondary.pressed.opacity` | → `sys.opacity.opaque` | number | Secondary button pressed opacity. |
| `comp.button.ghost.disabled.opacity` | → `sys.opacity.disabled` | number | Ghost button disabled opacity. |
| `comp.button.ghost.default.background` | → `sys.color.surface` | color | Ghost button bg. Transparent. |
| `comp.button.ghost.default.text-color` | → `sys.color.primary` | color | Ghost button text. Brand orange. |
| `comp.button.ghost.default.icon-color` | → `comp.button.ghost.default.text-color` | color | Ghost button icon color. Aliases text-color (Ant Design currentColor pattern). Brand orange. |
| `comp.button.ghost.hover.background` | → `sys.color.surface-brand-dim` | color | Ghost button hover bg. Subtle orange tint. |
| `comp.button.tertiary.disabled.border-width` | → `sys.border.width.hairline` | number | Tertiary button disabled border width. 0.5px hairline. |
| `comp.button.tertiary.disabled.background` | → `sys.color.surface` | color | Tertiary button disabled bg. |
| `comp.button.tertiary.disabled.opacity` | → `sys.opacity.disabled` | number | Tertiary button disabled opacity. 0.38. |
| `comp.button.tertiary.disabled.text-color` | → `sys.color.on-surface-variant` | color | Tertiary button disabled text. Faded. |
| `comp.button.tertiary.default.icon-color` | → `comp.button.tertiary.default.text-color` | color | Tertiary button icon color. Aliases text-color (Ant Design currentColor pattern). Brand orange. |
| `comp.button.tertiary.default.text-color` | → `sys.color.primary` | color | Tertiary button text. Brand orange. |
| `comp.button.tertiary.default.background` | → `sys.color.surface` | color | Tertiary button bg. White/transparent. |
| `comp.button.tertiary.default.border-color` | → `sys.color.primary` | color | Tertiary button border. Brand orange outline. |
| `comp.button.tertiary.default.border-width` | → `sys.border.width.default` | number | Tertiary button border width. 1px. |
| `comp.button.tertiary.hover.background` | → `sys.color.surface-brand-dim` | color | Tertiary button hover bg. Light orange tint. |
| `comp.button.tertiary.hover.border-color` | → `sys.color.primary` | color | Tertiary button hover border. Brand orange. |
