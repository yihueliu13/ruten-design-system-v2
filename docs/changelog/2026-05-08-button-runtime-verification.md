# 2026-05-08 Button Runtime Verification

> Step 2 Button runtime 經過 5 輪 reality lessons + 完整 computed style audit。
> 本紀錄是 runtime-verified evidence，非 spec 推論。

---

## 1. Computed Style Verification（80 buttons × 多屬性）

Audit 方法：Playwright DOM evaluate（`getComputedStyle` + `getBoundingClientRect`）。

### 1.1 svg width/height = token icon-size（icon-only primary row）

| Size | svg computed | token resolved | viewBox |
|------|-------------|---------------|---------|
| sm | 16px | 16px | `0 0 24 24` |
| md | 24px | 24px | `0 0 24 24` |
| lg | 24px | 24px | `0 0 24 24` |
| xl | 24px | 24px | `0 0 24 24` |

✅ 全部 svg width/height 跟 `--comp-button-{size}-icon-size` 1:1 對齊。

### 1.2 glyph 不拉滿 frame（Figma 24×24 留白）

| Form | glyph / svg ratio | 留白 |
|------|------------------|------|
| icon-only (close) | 13.3 / 24 = **55%** | 22.5% × 2 |
| icon-label (heart) | 20.0 / 24 = **83%** | 8.5% × 2 |

✅ 對齊 Figma node 484:17290（24×24 close icon）視覺。

### 1.3 icon / font 視覺比例

| Size | icon | font | ratio |
|------|------|------|-------|
| sm | 16 | 12 | 1.33× |
| md | 24 | 14 | 1.71× |
| lg | 24 | 14 | 1.71× |
| xl | 24 | 16 | 1.50× |

✅ 中文 UI icon 通常 1.3–1.7× font size，符合 v1 token chain 設計。

### 1.4 Button matrix（label only / icon-label）primary row 13 屬性對齊

| Property | sm | md | lg | xl | Token chain |
|----------|----|----|----|----|----|
| min-height | 32 | 40 | 48 | 52 | hardcoded（v1 既有 debt）|
| font-family | PingFang TC | (同) | (同) | (同) | sys.typography.font-family.primary |
| font-size | 12 | 14 | 14 | 16 | comp.button.{size}.font-size |
| line-height | 18 | 21 | 21 | 24 | normal（browser）|
| font-weight | 600 | 600 | 600 | 600 | sys.typography.weight.semibold |
| padding-h | 8 | 16 | 24 | 32 | sys.spacing.{xs/md/lg/xl} |
| padding-v | 4 | 8 | 12 | 12 | sys.spacing.{2xs/xs/sm/sm} |
| gap | 4 | 8 | 8 | 8 | sys.spacing.{2xs/xs/xs/xs} |
| border-radius | 8 | 8 | 8 | 8 | comp.button.border-radius (single) |
| background (primary) | `#33343B` | (同) | (同) | (同) | ref.color.neutral.800 |
| color (primary) | `#FF963B` | (同) | (同) | (同) | ref.color.orange.500 |
| svg-width (icon-label) | 16 | 24 | 24 | 24 | comp.button.{size}.icon-size |

✅ 13 / 13 屬性對齊 Figma node 144:2895 spec。

---

## 2. Border-radius 全 80 buttons audit

| 測量 | 值 |
|------|---|
| 總 button 數 | 80（5 section × 4 variant × 4 size）|
| 4 角 = 8px 數 | **80 / 80** |
| 不一致數 | 0 |

Token chain:

```
comp.button.border-radius → sys.radius.md → ref.radius.md = 8px
```

✅ 不分 size / variant / form / state，**所有 button radius = 8px**。

---

## 3. Reality Lessons（5 課）

| # | Lesson | 觸發場景 | 修正 commit |
|---|--------|---------|-----------|
| 1 | **ref 必須跟 sys 對齊搬齊**：sys 全部 alias 到 ref，少搬一層 cascade 失敗 → CSS variable undefined | sys.radius / sys.spacing 等只搬 sys 沒搬 ref，button 變直角 | `d4ded37` |
| 2 | **unitless number 不可加 px**：opacity / weight / line-height 是 unitless，build script 一律加 px 會破壞值（`0.5px` 不是 opacity）| opacity = `0.38px` 渲染失敗 | `d4ded37` |
| 3 | **comp.button 依賴 comp.icon**：comp → comp alias 也是合法 chain，不只 sys | button.{size}.icon-size 沒 resolve | `6baee8c` |
| 4 | **SVG width/height attribute 不接受 CSS variables**：`<svg :width="var(...)" >` 靜默 fallback，必須用 `:style` | icon size 不變動，永遠瀏覽器 default | `16091af` |
| 5 | **Figma 24×24 frame ≠ path bbox**：path 緊邊 ≠ 設計 frame，frame 含留白。viewBox 用 path bbox 等於拉滿 frame | icon 視覺比 Figma 大 50%+ | `bab89c2` |

---

## 4. Audit Blind Spot（未來避免）

之前 token chain audit 全綠也不代表 runtime 對齊。下次 audit 必看：

1. **CSS variable 是否真有產出**（`:root` computed style）
2. **是否被引用到正確 CSS property**（不是 SVG attribute）
3. **是否被 class / style merge 蓋掉**
4. **font-family 是否被 body global 蓋掉**
5. **glyph bbox vs container size 比例**（不只看 width/height token）

> 「token chain 對 ≠ runtime 對」— browser computed style 才是 reality。

---

## 5. 涵蓋範圍

| 項目 | 結果 |
|------|------|
| Token 數 | 352（v1 681 中的第一條完整 truth chain）|
| Button matrix | 4 variant × 4 size × 5 form = 80 buttons |
| Icon | 5 個（plus / search / close / heart / arrow-right）— 全 Figma source |
| Truth chain | Figma → JSON → DESIGN-shared.md → tokens.css → Vue → computed style 全程 traceable |
