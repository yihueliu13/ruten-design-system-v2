---
role: governance
type: constitution
version: 0.1
status: active
last_updated: 2026-05-08
description: Minimal naming guardrail for cross-platform semantic consistency
---

# Naming Constitution

---

## Purpose

定義 component / token / variant naming 的最小語意守則。

這是 **semantic layer**，不是 runtime layer。設計師在 Figma 選對、工程師在 code 寫對、AI 在 generation 解析對 — 三方共享同一 naming universe。

本文件只決定「東西該怎麼命名」，不決定 component design、token value、品牌策略。

---

## Core Naming Principles

### 1. Object First

**定義**：以「使用者真正看到、互動的 UI object」為命名核心，不以 business context 為核心。

**為什麼重要**：business context（搜尋頁 / 競標 / KPOP）會無限長出，若每個 context 都生新 component，universe 爆炸。

**正確**：✅ `ProductCard.Search` / `ProductCard.Bid`
**錯誤**：❌ `SearchCard` / `BidCard` / `KPOPCard`

**影響**：Figma 同 object 聚合、runtime 共用 base、AI 把不同 context 視為同一 object 的衍生。

---

### 2. Business ≠ Component

**定義**：business mode（Bid / Preorder / Ranking / Recommendation / KPOP / ACG）預設不是獨立 component，是 metadata / context / rendering mode。

**為什麼重要**：商業模式變動快，component universe 不該被商業模式污染。

**正確**：✅ `ProductCard.Bid` / `ProductCard.Preorder`
**錯誤**：❌ `BidCard` / `PreorderCard`

**影響**：Figma 不長出商業 component 樹、runtime 用 prop 切換、AI 用同一 base 推理 variant。

---

### 3. Context Is Suffix

**定義**：context 放 object 之後當 suffix，不放 prefix。

**為什麼重要**：object 是穩定核心，context 是可變條件；suffix 結構讓 hierarchy 從根聚合。

**正確**：✅ `ProductCard.Search` / `SellerCard.Store`
**錯誤**：❌ `SearchProductCard` / `StoreSellerCard`

**影響**：Figma / Storybook / Runtime / AI 都能以同一 object 聚合所有 context 變體。

---

### 4. Variant Describes Rendering Only

**定義**：variant 只描述 rendering（layout / density / visual structure），不描述 business meaning。

**為什麼重要**：variant 一旦混入商業狀態，rendering layer 與 business layer 耦合，後續無法解耦。

**正確**：✅ `Compact` / `Horizontal` / `Rich` / `Dense`
**錯誤**：❌ `HotSale` / `VIP` / `爆款`

**影響**：Figma variant 只決定外觀、runtime variant prop 純視覺、AI 不會把商業狀態誤判為 layout。

---

### 5. No Synonym

**定義**：同一 object 不可同時用多組同義詞（Card / Tile / Block / Panel 不混用）。

**為什麼重要**：同義詞混用直接破壞 Figma 搜尋、Storybook 結構、runtime 一致性、AI semantic parsing。

**正確**：✅ 全系統統一 `Card`
**錯誤**：❌ `ProductCard` 與 `ProductTile` 並存

**例外**：rendering 真正不同且已形成獨立 object，才考慮新名稱。

**影響**：synonym 不是 code style 問題，是 **semantic retrieval** 問題 — 直接降低 Figma 搜尋一致性、Storybook discoverability、AI semantic stability。

---

### 6. Shared First

**定義**：預設建立 shared object，不過早品牌分裂。品牌 / channel 差異透過 token / metadata / context 處理。

**為什麼重要**：過早品牌分裂 = 三品牌三套 component = semantic fragmentation = 維護地獄。

**正確**：✅ `ProductCard` / `CampaignBanner`
**錯誤**：❌ `RutenProductCard` / `KPOPProductCard`

**升級條件**：runtime reality 已形成真正不同 object，才獨立 component。

**影響**：Figma 共用 master、runtime 共用 base、AI 用品牌 token 區分而非 component 區分。

---

### 7. Cross-Platform Semantic Consistency

**定義**：naming 必須讓三方對齊同一 semantic universe：

- 設計師能在 Figma 正確選擇
- 工程師能在 runtime 正確實作
- AI 能穩定解析既有 semantic universe

AI 是 semantic **consumer + operator**，不是 owner — naming universe 由設計師 + 工程師定義，AI 服從。

**為什麼重要**：三方對齊同一 universe 是 AI-native DS 的根，任一方斷鏈整個 traceability 崩。

**正確**：✅ `ProductCard.Search.Default` / `sys.color.price` / `comp.product-card.price.text-color`
**錯誤**：❌ `orange-final` / `card-special-red` / `final-button-v2`

**影響**：Figma → Token → Runtime → Storybook → Spec → AI 維持同一 semantic universe。

---

## Component Naming Grammar

統一語法：`Object.Context.Variant`

| 位 | 角色 | 規則 | 範例 |
|---|------|------|------|
| Object | UI 單位 | 必填、單數、PascalCase | `ProductCard` |
| Context | 使用情境 | 選填、suffix、business mode 放這 | `Search` / `Bid` |
| Variant | rendering 型態 | 選填、suffix、僅描述視覺 | `Compact` / `Horizontal` |

完整範例：`ProductCard.Search.Compact` / `SellerCard.Store.Default` / `CampaignBanner.KPOP.Rich`

**Grammar 是 semantic guidance，不是 rigid naming template。** 不是所有 component 都必須完整三段：`Button` / `SearchBar` / `Dialog` 等 atomic / utility component 可以單段命名，不需硬湊 `Button.Default.Primary`。

---

## ProductCard Guardrail

ProductCard 是 commerce DS 最容易爆炸的 object，特設守則（**本節僅為命名守則，不啟動 ProductCard component design**）：

- 所有衍生（搜尋 / 競標 / 預購 / 推薦 / KPOP / ACG）一律 `ProductCard.<Context>`
- 不新增 `BidCard` / `KPOPCard` / `PreorderCard` 等 sibling
- 商業狀態（HotSale / 爆款 / VIP）放 metadata / prop，不進 variant 名
- 多品牌差異走 token / theme，不分裂出 `RutenProductCard`

**核心守則**：shared object 優先透過 **context / metadata / rendering variation / token** 解決差異，不開新 sibling component。這是避免未來 component explosion 的核心。

---

## Token Naming Alignment

token 三層命名對齊 `DESIGN-shared.md` 結構：

| 層 | 用途 | 範例 |
|---|------|------|
| `ref.*` | 原始值 | `ref.color.orange.500` |
| `sys.*` | 語意層 | `sys.color.price` |
| `comp.*` | component 局部 | `comp.product-card.price.text-color` |

規則：
- `comp.*` 用 component object 名（kebab-case），不可用 business mode
- `sys.*` 須語意（`price` / `success`），不可顏色詞（`orange-final` 違憲）

---

## Storybook Naming Alignment

| 層 | 規則 | 範例 |
|---|------|------|
| Folder | object 為節 | `Components/ProductCard/` |
| Story | context + variant | `Search.Compact` |
| args | 對齊 runtime prop | `context: 'search'` |

不允許：用 business mode 開新 folder（`Components/Bid/` 違憲）。

---

## Figma Naming Alignment

| 層 | 規則 | 範例 |
|---|------|------|
| Component | Object | `ProductCard` |
| Variant property | Context / Variant | `context=Search`, `variant=Compact` |
| Variable | 對齊 token 三層 | `sys/color/price` |

不允許：在 Figma 開 `BidCard` / `KPOPCard` 等獨立 component（必須走 ProductCard 的 variant property）。

---

## What This Document Does Not Decide

- 不決定 component 內部設計（layout / interaction）
- 不決定 token 具體 value
- 不決定品牌策略 / 商業優先級
- 不替代 Figma / Storybook / runtime spec
- 不規範 file path / repo 結構（見 `specs/_taxonomy.md`）

---

## Update Rule

- 新增 / 修改原則 → version bump（`0.1` → `0.2`）+ 更新 `last_updated`
- 違反守則的 PR 一律退回
- 例外（如真正獨立 object）需在本文件留下決議紀錄
- 本文件為 semantic layer SSOT；其他 spec 引用本檔，不重複定義 naming 規則

**修憲門檻**：高層 naming rule 只能由**重複出現的 runtime reality** 推動修改。單一特殊 case 不能修憲。
