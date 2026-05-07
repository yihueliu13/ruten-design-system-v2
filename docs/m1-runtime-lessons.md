---
role: retrospective
status: active
last_updated: 2026-05-08
description: M1 Button runtime 壓縮成 AI-native DS knowledge — 不寫 governance、不寫 universal rules、不寫 roadmap
---

# M1 Runtime Lessons

> Step 0–4 完成後的 reality 壓縮。**這份是 retrospective，不是 governance**。
>
> 目的：把 Button runtime 走完整條 truth chain 後得到的真實 evidence，留給未來 component（ProductCard / SectionHeader / etc.）+ AI agent 直接 reuse。

---

## 1. Runtime Truth Chain

整條 pipeline（從 Figma 到 browser reality）：

```
Figma source (file: JntRm8aTeyw1HPdowgSBk4)
  ↓ Tokens Studio export（手動）
v1 design-system-all.tokens.json (681 tokens, DTCG)
  ↓ tools/build-tokens.py
  │   ├── alias resolve (var(--ref-...))
  │   └── unitless handling (opacity / weight / line-height)
  ├─────────────────────────────────────────
  ↓                            ↓
DESIGN-shared.md           tokens.css
(人讀 SOT, 352 tokens)     (CSS variables)
                             ↓ @theme bridge in style.css
                           Tailwind theme tokens
                             ↓ utility class
                           bg-primary / text-on-surface 等
                             ↓
                           Vue runtime (Button.vue + Icon.vue)
                             ↓
                           browser computed style
                             ↓
                           Storybook runtime verification surface
```

**單一 SOT**：v1 JSON（暫時，Phase 2 換成 DESIGN.md 反向 build）
**Transport layer**：Tailwind utility（吃 `@theme` bridge）
**Reality verifier**：browser computed style（不是 source code）

---

## 2. Lessons #1–#6

每個 lesson 對應一個被 reality 教的時刻 — 不是預先想到的規則。

### Lesson #1 — ref 必須跟 sys 對齊搬齊

| 問題 | sys.* 全部 alias 到 ref.*，少搬一層導致 cascade 失敗（CSS variable undefined fallback）|
| 修法 | SCOPE 裡 ref 跟 sys 同步擴大；少搬一層就 chain 斷 |
| 觸發 | commit `d4ded37`（補搬 ref.{border, opacity, radius, spacing, typography}）|

### Lesson #2 — unitless number 不加 px

| 問題 | build script 一律對 number type 加 `px`，但 opacity / weight / line-height 是 unitless（`0.38px` 完全不對）|
| 修法 | `UNITLESS_HINTS = ["opacity", "weight", "line-height", "z-index"]` path filter |
| 觸發 | commit `d4ded37`（同次補搬時發現）|

### Lesson #3 — comp.button 依賴 comp.icon（comp → comp alias 也是合法 chain）

| 問題 | `comp.button.{size}.icon-size` 不是 alias 到 sys.sizing，是 alias 到 `comp.icon.{size}.size` — 跨 component alias |
| 修法 | SCOPE 加 `comp.icon` + `sys.sizing` + `ref.sizing`，token chain 才完整 |
| 觸發 | commit `6baee8c`（form variant + Icon 上線時暴露）|

### Lesson #4 — SVG width/height attribute 不接受 CSS variables

| 問題 | `<svg :width="size">` 接 `var(--comp-button-md-icon-size)` 字串，**SVG presentation attribute 不解析 CSS variable**，靜默 fallback 到瀏覽器 default |
| 修法 | 改用 `:style="{ width, height }"`（CSS property 才能 resolve var）|
| 觸發 | commit `16091af`（Kay 看截圖發現 icon 比例失衡）|

### Lesson #5 — Figma 24×24 frame ≠ path bbox

| 問題 | 把 Figma export 的 path bbox（如 plus 16×16）當 viewBox，等於把 path 拉滿 svg 容器，**Figma 24×24 frame 的留白被吃掉** |
| 修法 | viewBox 統一 `0 0 24 24`（match Figma frame），path 用 `<g transform="translate">` 放在 Figma 設計的 inset 位置 |
| 觸發 | commit `bab89c2`（Kay 給 Figma node 484:17290 對比後）|

### Lesson #6 — Framework defaults inject hidden semantics

| 問題 | Tailwind `border` utility = 1px，但 v1 對 primary / ghost 沒設 border-width token（無 border 真值）。「全 Tailwind 化」會偷偷信任 framework 世界觀 |
| 修法 | primary / ghost 用 `border-0` 強制 0 對齊 v1 reality；secondary / tertiary 才用 `border` |
| 核心原則 | **Tailwind 是 transport，不是 truth** |
| 觸發 | commit `e3c0415`（Kay 拍板「要用 Tailwind」後）|

---

## 3. 已驗證成功的 Runtime Patterns

整條 chain 跑通後，這些 pattern 是已被 reality 驗證可行的：

### 3.1 Token alias chain
```
ref (atomic) ← sys (semantic) ← comp.{component} (component-specific)
```
4 層深度可工作，跨 component alias 也合法（comp.button → comp.icon）。

### 3.2 currentColor pattern
```svg
<svg fill="currentColor">  <!-- 不獨立定義 icon color -->
```
搭配 `comp.button.{variant}.default.icon-color → comp.button.{variant}.default.text-color`（comp → comp alias），icon 顏色自動繼承 button text-color，不需要 `4 variant × N icon × M state` cross-product token。

### 3.3 @theme bridge（Tailwind v4）
```css
@theme {
  --color-primary: var(--sys-color-primary);
  ...
}
```
Tailwind utility（`bg-primary` / `text-on-surface`）自動吃 v1 token chain，traceability 不打斷。

### 3.4 Tailwind arbitrary value 接深層 token
```html
<div class="rounded-[var(--comp-button-border-radius)]">
<div class="text-[length:var(--comp-button-md-font-size)]">
<div class="disabled:opacity-[var(--sys-opacity-disabled)]">
```
保留 `comp.button.*` 4 層 token chain（`@theme` 不夠用時的 fallback）。

### 3.5 Lookup map for dynamic class（Tailwind JIT 限制 workaround）
```js
const SIZE_CLASS = {
  sm: 'min-h-[var(--comp-button-sm-min-height)] ...',
  md: 'min-h-[var(--comp-button-md-min-height)] ...',
  ...
}
```
Tailwind JIT 只掃靜態 class string，動態 `${size}` 拼接會失敗 — 顯式列出所有可能 class。

### 3.6 Vue ref + onMounted + CSSOM read
```js
onMounted(() => {
  for (const sheet of document.styleSheets) {
    for (const rule of sheet.cssRules) {
      if (rule.selectorText === ':root') {
        // 拿到 alias source（var(...)）+ resolved value
      }
    }
  }
})
```
Browser reality 檢查的標準做法 — Storybook RuntimeNote / Color traceability 都用這個。

### 3.7 Inline `:style` for dynamic CSS variable name
```vue
<div :style="{ background: 'var(--sys-color-' + name + ')' }"></div>
```
Tailwind JIT 看不到動態 class name，**dynamic var() name 必須 inline**。這不是 inline style anti-pattern，是 JIT workaround。

### 3.8 Storybook RuntimeNote pattern
每個 foundation / component story 末尾加：
- token chain 來源
- runtime status（動態 stats）
- Used by [Component] 對照

讓 Storybook 從「展示」變「runtime verification surface」。

---

## 4. Known Debts

按優先級（不寫 roadmap，只列現狀）：

### 4.1 v1 既有 debt（沿用，不在 v2 修）
| Debt | 來源 | 處理 |
|------|------|------|
| `comp.button.{size}.min-height` hardcoded number | v1 Locked Decision #7 規範應 alias 到 `sys.sizing.control-height.*` 但 v1 沒執行 | 沿用 v1 reality，未來修需動 v1 |
| arrow-right 用 down arrow + rotate -90 實現 | Figma 設計實踐（4 方向 icon 用 rotate）| 不修 — 跟 Figma source 對齊 |

### 4.2 v2 過渡期 debt
| Debt | 狀態 |
|------|------|
| v1 JSON 仍是 build source，DESIGN.md 是 derived 人讀版 | Phase 1 過渡。Phase 2 才反向（DESIGN.md → JSON build chain）|
| 5 個 icon 是 minimal viable（plus / search / close / heart / arrow-right）| 未來 component 出現需求才補 |
| Foundations stories 用 Tailwind 預設 gray scale 做 chrome | stories 是工具不是 truth，可接受 |
| Tailwind JIT 動態 var name 必須 inline `:style` | 框架限制，不可避免的 fallback |

### 4.3 Reality 邊界 debt
| Debt | 狀態 |
|------|------|
| font-weight Figma layer name (`PingFang_TC:Bold`) vs token reality (semibold/600) | 已選 600 = SOT。Figma 端 layer 命名 mismatch 是設計師端問題 |
| 沒有自動化 visual regression / Playwright snapshot CI | M1 範圍外，未來看 reality 教 |
| 沒有完整 a11y test suite（只 aria-label）| 同上 |
| RN 跨平台 spec 還沒寫 | 等 RN 0.78 升版完成 |

---

## 變更紀錄

| 日期 | 版本 | 變更 |
|------|------|------|
| 2026-05-08 | 0.1 | 初版 — M1 Step 0-4 完成後的 reality compression。涵蓋 truth chain / 6 lessons / 8 patterns / 3 類 debt |
