# 2026-05-08 Tailwind Token Bridge

> Button.vue 從 inline `:style` 重構成 Tailwind utility。但這次踩到比 syntax 更深的問題 — **framework default vs token truth**。
>
> 主 commit: `e3c0415`

---

## Lesson #6 — Framework utilities may inject hidden semantics

> **Tailwind 是 transport，不是 truth。**
>
> Framework defaults（border width / radius scale / typography scale / shadow scale）must not override token truth. Tailwind should act as **runtime transport layer**, not design truth source.

### 觸發場景

`<button>` 加 Tailwind `border` utility 時，**強制變 1px**。但 v1 token 對 `comp.button.primary` 沒設 `border-width` token（無 border 真值）。

如果不細查，會把 Tailwind 預設 1px 當「實際真值」commit 進 runtime — token chain audit 會通過（因為 token 真值也沒被改），但 visual reality 已偷偷漂移。

### 問題本質

Tailwind 不是 neutral utility — 它本身就是一套設計系統，預設帶 semantic：

| Utility | Tailwind 預設 semantic |
|---------|----------------------|
| `border` | 1px solid |
| `rounded` | 固定 radius scale（如 `rounded-md` = 6px）|
| `text-sm` | 14px |
| `leading-normal` | 1.5 |
| `shadow-md` | 固定 elevation |

**任何時候用「無 token 引用」的 Tailwind utility，等於信任 framework 的世界觀**。

### 正確做法

Tailwind utility **必須被 token 約束**：

```vue
<!-- ✅ Token-driven (transport layer) -->
<div class="bg-primary"></div>
<div class="rounded-[var(--comp-button-border-radius)]"></div>
<div class="text-[length:var(--comp-button-md-font-size)]"></div>

<!-- ⚠️ Framework default (hidden semantics) -->
<div class="border"></div>          <!-- 1px 來自 Tailwind 不是 token -->
<div class="rounded-md"></div>      <!-- radius scale 來自 Tailwind -->
<div class="text-sm"></div>         <!-- 14px 來自 Tailwind -->
```

---

## 本次 commit 的決策

### style.css `@theme` bridge

把 sys.color 接進 Tailwind theme tokens — utility class 自動吃 v1 token chain：

```css
@theme {
  --color-primary: var(--sys-color-primary);
  --color-on-primary: var(--sys-color-on-primary);
  ...
}
```

`bg-primary` / `text-on-surface` 等 utility resolve 到 `var(--sys-color-*)`，token traceability 不打斷。

### Button.vue 雙層架構

| 層 | 用法 | 範例 |
|----|------|------|
| **共用 base**（無 token 依賴）| Tailwind utility | `inline-flex items-center cursor-pointer transition-opacity` |
| **Variant color**（吃 sys.color）| Tailwind utility（透過 `@theme`）| `bg-on-surface text-primary` |
| **Size & comp-specific**（吃 comp.button.*）| Tailwind arbitrary value `var(...)` | `min-h-[var(--comp-button-md-min-height)]` |
| **State opacity** | Tailwind state utility + arbitrary value | `disabled:opacity-[var(--sys-opacity-disabled)]` |

### Border-width reality match

| Variant | 我的修法 | 對應 v1 token |
|---------|---------|--------------|
| primary | `border-0` | 無 `border-width` token |
| secondary | `border` (Tailwind 1px) | `sys.border.width.default` = 1px ✅ |
| tertiary | `border` | `sys.border.width.default` = 1px ✅ |
| ghost | `border-0` | 無 `border-width` token |

**關鍵原則**：v1 token 沒設 = 視覺無 border = `border-0` 強制 0（不信任 browser default 也不信任 Tailwind default）。

---

## 守邊界（不做）

| ❌ 不做 | 為什麼 |
|--------|------|
| Tailwind plugin system | 還在驗證 Tailwind 能否承載 token truth |
| Tailwind preset package | 同上 |
| design token compiler | 過度合理化 |
| utility generation framework | 同上 |
| token registry | reality 還沒到 |
| Stories 統一改 Tailwind | 等下次 reality 教（守單次修正邊界）|

---

## 整體架構名稱

這個方向不是「全面 Tailwind 化」也不是「全 inline style」，是：

```
Token-driven Tailwind Runtime
```

- Truth: Figma → JSON → DESIGN-shared.md → tokens.css
- Transport: Tailwind utility（吃 `@theme` 接的 token）
- Verification: Storybook + Playwright DOM evaluate

---

## Reality Lessons 累積（更新到 #6）

| # | Lesson | 觸發 commit |
|---|--------|-----------|
| 1 | ref 必須跟 sys 對齊搬齊 | `d4ded37` |
| 2 | unitless number 不加 px | `d4ded37` |
| 3 | comp.button 依賴 comp.icon | `6baee8c` |
| 4 | SVG width/height attr 不接受 CSS var | `16091af` |
| 5 | Figma 24×24 frame ≠ path bbox | `bab89c2` |
| **6** | **Framework defaults inject hidden semantics**（Tailwind border = 1px 偷偷蓋過 v1「無 border-width token」reality）| `e3c0415` |
