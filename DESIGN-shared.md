---
role: token-sot
version: 0.1
status: active
last_updated: 2026-05-07
description: 露天設計系統共用 token SOT — Phase 1 第一批 migration
source: v1 design-system-all.tokens.json (681 tokens 全集，本檔為 157 個第一批)
---

# DESIGN-shared.md

> 露天設計系統 Token Source of Truth — **Phase 1 第一批 migration**。
>
> 範圍：`ref.color` (45) + `sys.color` (46) + `comp.button` (66) = **157 tokens**（v1 全 681 tokens 中的第一條完整 truth chain）。
>
> 結構規範詳見 [`specs/tokens/design-md-structure.md`](specs/tokens/design-md-structure.md)。
>
> 三層原則（沿用 v1）：
> - **`ref`** — 原子值，不准帶語意（每個 ref token description 已標註 ⚠️ Do not use directly）
> - **`sys`** — semantic role，全部 alias 到 ref
> - **`comp`** — component-specific，alias 到 sys（少數合理 hardcode：number type 物理尺寸）

---

## `ref.color` — 原子色階

| Token | Hex | Description |
|-------|-----|-------------|
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

## `sys.color` — 語意 role

| Token | Alias / Value | Description |
|-------|--------------|-------------|
| `sys.color.primary` | → `ref.color.orange.500` | Primary brand color. Use for primary buttons, active nav, key CTAs, selected states. Do NOT use for error states, body text. Pair with on-primary. |
| `sys.color.on-primary` | → `ref.color.neutral.0` | Foreground on primary. Use for text/icons on primary backgrounds. Pair with primary. |
| `sys.color.primary-container` | → `ref.color.orange.100` | Soft primary bg. Use for chips, badges, selected list items. Pair with on-primary-container. |
| `sys.color.on-primary-container` | → `ref.color.orange.800` | Foreground on primary-container. Text/icons on soft primary bg. |
| `sys.color.secondary` | → `ref.color.orange.600` | Secondary brand accent. Use for secondary buttons, filter chips, progress bars. Pair with on-secondary. |
| `sys.color.on-secondary` | → `ref.color.neutral.0` | Foreground on secondary. Text/icons on secondary backgrounds. |
| `sys.color.secondary-container` | → `ref.color.orange.50` | Soft secondary bg. Use for toggles, secondary highlights. Pair with on-secondary-container. |
| `sys.color.on-secondary-container` | → `ref.color.orange.700` | Foreground on secondary-container. Text/icons on soft secondary bg. |
| `sys.color.surface` | → `ref.color.neutral.0` | Default page background. Base layer of all UI — pages, modals, cards, sheets. |
| `sys.color.on-surface` | → `ref.color.neutral.800` | Primary text/icons on surface. Headings, body text, primary icons. |
| `sys.color.on-surface-variant` | → `ref.color.neutral.600` | Secondary text. Captions, placeholders, helper text, metadata. Do NOT use for primary content. |
| `sys.color.surface-dim` | → `ref.color.neutral.50` | Dimmed surface. Page bg behind cards, list area grey bg, secondary panels, sidebar. |
| `sys.color.surface-container` | → `ref.color.neutral.0` | Standard container bg. Card backgrounds, input fields, dropdown menus. |
| `sys.color.surface-container-high` | → `ref.color.neutral.100` | Elevated container. Search bar, sticky header, floating card, nav bar. |
| `sys.color.inverse-surface` | → `ref.color.neutral.800` | Inverted surface for snackbars, tooltips. Pair with inverse-on-surface. |
| `sys.color.inverse-on-surface` | → `ref.color.neutral.50` | Text on inverse-surface. Snackbar text, tooltip labels. |
| `sys.color.surface-brand` | → `ref.color.orange.500` | Brand color full surface. Top nav bar, promo hero sections, brand-colored headers. Pair with on-surface-brand. |
| `sys.color.surface-brand-dim` | → `ref.color.orange.50` | Brand color light surface. Subtle brand bg, promo banner light bg, badge bg, campaign section. |
| `sys.color.on-surface-brand` | → `ref.color.neutral.0` | Foreground on brand surfaces. White text/icons for readability on brand color bg. |
| `sys.color.outline` | → `ref.color.neutral.400` | Default border. Input borders (default state), card outlines, dividers with clear visibility. |
| `sys.color.outline-variant` | → `ref.color.neutral.200` | Subtle border. Decorative dividers, secondary card borders, table separators. |
| `sys.color.error` | → `ref.color.red.500` | Error/destructive states. Form validation errors, destructive buttons, alert banners. NEVER use ref/color/red directly. Pair with on-error. |
| `sys.color.on-error` | → `ref.color.neutral.0` | Foreground on error. Text/icons on error backgrounds. |
| `sys.color.error-container` | → `ref.color.red.50` | Soft error bg. Inline error banners, form field error highlights. Pair with on-error-container. |
| `sys.color.on-error-container` | → `ref.color.red.700` | Foreground on error-container. Error message text, error icons on light red bg. |
| `sys.color.warning` | → `ref.color.yellow.500` | Warning states. Warning alerts, limit indicators, non-blocking issues. Pair with on-warning. |
| `sys.color.on-warning` | → `ref.color.neutral.900` | Foreground on warning. Dark text for readability on yellow. Do NOT use white on yellow. |
| `sys.color.warning-container` | → `ref.color.yellow.50` | Soft warning bg. Warning banners, notice blocks. Pair with on-warning-container. |
| `sys.color.on-warning-container` | → `ref.color.yellow.700` | Foreground on warning-container. Warning text on light yellow bg. |
| `sys.color.success` | → `ref.color.teal.500` | Success confirmation. Success alerts, verified badges, completed steps, payment confirmed. Pair with on-success. |
| `sys.color.on-success` | → `ref.color.neutral.0` | Foreground on success. Text/icons on success backgrounds. |
| `sys.color.success-container` | → `ref.color.teal.50` | Soft success bg. Success banners, order confirmation blocks. Pair with on-success-container. |
| `sys.color.on-success-container` | → `ref.color.teal.700` | Foreground on success-container. Success text on light green bg. |
| `sys.color.info` | → `ref.color.blue.500` | Informational states. Info alerts, help tooltips, status indicators. Pair with on-info. |
| `sys.color.on-info` | → `ref.color.neutral.0` | Foreground on info. Text/icons on info backgrounds. |
| `sys.color.info-container` | → `ref.color.blue.50` | Soft info bg. Info banners, help blocks, feature announcements. Pair with on-info-container. |
| `sys.color.on-info-container` | → `ref.color.blue.700` | Foreground on info-container. Info text on light blue bg. |
| `sys.color.scrim` | → `ref.color.black.60a` | Modal backdrop (60% black). Behind modal dialogs, bottom sheets, full-screen overlays. |
| `sys.color.scrim-medium` | → `ref.color.black.40a` | Medium overlay (40% black). Semi-transparent backdrops, image overlays. |
| `sys.color.scrim-light` | → `ref.color.black.15a` | Light overlay (15% black). Hover overlays, pressed states on thumbnails. |
| `sys.color.price` | → `ref.color.red.500` | Price highlight color. Red for promotional price emphasis. Use for current price display. NOT for error states — use sys/color/error for errors. |
| `sys.color.on-price` | → `ref.color.neutral.0` | Foreground on price backgrounds. White text on red price badges. |
| `sys.color.primary-container-dim` | → `ref.color.orange.50` | Light orange tinted background. Use for subtle primary-brand surface tints (e.g. tag filter active background). |
| `sys.color.surface-container-low` | → `ref.color.neutral.50` | Light neutral background surface. Use for inactive filter containers, secondary card backgrounds. |
| `sys.color.primary-variant` | → `ref.color.orange.400` | Lighter primary brand variant. Use for active/hover states where full primary (#FF963B) is too strong. |
| `sys.color.on-surface-medium` | → `ref.color.neutral.700` | Medium emphasis foreground. Neutral/700 (#47484D). Between on-surface (#33343B) and on-surface-variant (#73747B). Use for secondary tab inactive text, or any context needing medium-emphasis text on both white and brand surfaces. |

## `comp.button` — Button component tokens

| Token | Value | Type | Description |
|-------|-------|------|-------------|
| `comp.button.border-radius` | → `sys.radius.md` | number | Button corner radius. 8px for all sizes. |
| `comp.button.font-weight` | → `sys.typography.weight.semibold` | number | Button font weight. 600 for all sizes. |
| `comp.button.sm.padding-h` | → `sys.spacing.xs` | number | Button sm horizontal padding. 8px. Mobile CTA, compact actions. |
| `comp.button.sm.padding-v` | → `sys.spacing.2xs` | number | Button sm vertical padding. 4px. |
| `comp.button.sm.font-size` | → `sys.typography.label.md` | number | Button sm font size. 12px. |
| `comp.button.sm.icon-size` | → `comp.icon.sm.size` | number | Button sm icon size. References comp/icon/sm (16px). |
| `comp.button.sm.gap` | → `sys.spacing.2xs` | number | Button sm gap between icon and text. 4px. |
| `comp.button.sm.min-height` | 32 | number | Button sm minimum height. 32px. Compact touch target. |
| `comp.button.md.padding-h` | → `sys.spacing.md` | number | Button md horizontal padding. 16px. Default size for most contexts. |
| `comp.button.md.padding-v` | → `sys.spacing.xs` | number | Button md vertical padding. 8px. |
| `comp.button.md.font-size` | → `sys.typography.label.lg` | number | Button md font size. 14px. |
| `comp.button.md.icon-size` | → `comp.icon.md.size` | number | Button md icon size. References comp/icon/md (24px). |
| `comp.button.md.gap` | → `sys.spacing.xs` | number | Button md gap between icon and text. 8px. |
| `comp.button.md.min-height` | 40 | number | Button md minimum height. 40px. Standard touch target. |
| `comp.button.lg.padding-h` | → `sys.spacing.lg` | number | Button lg horizontal padding. 24px. Desktop hero CTA, prominent actions. |
| `comp.button.lg.padding-v` | → `sys.spacing.sm` | number | Button lg vertical padding. 12px. |
| `comp.button.lg.font-size` | → `sys.typography.title.sm` | number | Button lg font size. 14px with heavier weight. |
| `comp.button.lg.icon-size` | → `comp.icon.md.size` | number | Button lg icon size. References comp/icon/md (24px). |
| `comp.button.lg.gap` | → `sys.spacing.xs` | number | Button lg gap between icon and text. 8px. |
| `comp.button.lg.min-height` | 48 | number | Button lg minimum height. 48px. Large touch target. |
| `comp.button.xl.padding-h` | → `sys.spacing.xl` | number | Button xl horizontal padding. 32px. Large desktop hero CTA, landing page actions. |
| `comp.button.xl.padding-v` | → `sys.spacing.sm` | number | Button xl vertical padding. 12px. |
| `comp.button.xl.font-size` | → `sys.typography.title.md` | number | Button xl font size. 16px. Larger text for wide screens. |
| `comp.button.xl.icon-size` | → `comp.icon.md.size` | number | Button xl icon size. References comp/icon/md (24px). |
| `comp.button.xl.gap` | → `sys.spacing.xs` | number | Button xl gap. 8px. |
| `comp.button.xl.min-height` | 52 | number | Button xl minimum height. 52px. Prominent touch/click target. |
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
