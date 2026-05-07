---
role: spec
version: 0.1
status: active
last_updated: 2026-05-07
description: Token Constitution — DESIGN.md 結構規範（v2 新增決策，沿用 v1 governance）
---

# DESIGN.md Structure（Token Constitution v0.1）

> **Reality Compression**：本檔不是發明世界觀，是把 v1 已存在的秩序明文化 + 補上 v2 雙 mode 新決策。
>
> v1 governance 完整保留作為基礎；本檔只規範 v2 真正新增的決策。

---

## §1 沿用 v1 Governance

v1（`~/Desktop/Kay/ruten-design-system/`）已有 779 行成熟治理 + 17 條 Locked Decisions。**v2 全部沿用**：

| 既有規則 | 保留狀態 |
|---------|---------|
| 三層 ref / sys / comp + reference rule（comp → sys → ref，不反向、不跳層）| ✅ 沿用 |
| comp → comp alias 合法（currentColor pattern：`button.icon-color → text-color`）| ✅ 沿用 |
| 17 條 Locked Decisions | ✅ 移至 `specs/governance/locked-decisions.md` |
| 設計 6 層（Foundation → Primitive → Compound → Pattern → Template → Page）| ✅ 沿用 |
| RWD 斷點（sm=375 / md=768 / lg=992 / xl=1200，已鎖定）| ✅ 沿用 |
| `sys/sizing/control-height/*` 統一管理互動控件高度（Ant Design 風）| ✅ 沿用 |
| Compound token 管所有非獨立子元素屬性（MD3 風）| ✅ 沿用 |

**SOT 載體變更**：v1 `design-system-all.json` → v2 `DESIGN.md` 系列（DTCG markdown）。**結構不變，載體換。**

詳細 v1 治理: `@~/Desktop/Kay/ruten-design-system/ref/component-governance.md`

---

## §2 Shared-first Principle

> **同一套骨架，不同情緒模式。**

預設進 `DESIGN-shared.md`，**避免雙 mode 過早分裂**。

### 為什麼

露天目前只有兩個 interaction mode（見 §4），同屬一個交易宇宙。一旦太早分檔，會出現 `ruten-primary` / `hype-primary` 這種 token tree 爆炸 — token 越多越難維持一致性。

### 共用骨架（必進 shared）

- `ref/*` 全部
- `sys/*` 大部分（spacing / typography / sizing / radius / motion / elevation / layout grid）

### Mode Override 層（極薄）

只覆蓋情緒承載的部分：

- 少量 sys semantic（`sys.color.primary` / `sys.effect.emphasis`）
- 極少量 comp semantic（`comp.button.primary` 等）

### 黃金規則 🔒

> **沒有第二個 mode 實際存在 → 沒有 override evidence → 過早分檔 = 過早分裂。**

新增 mode-specific token 必須有實際 product evidence，不可基於假設。

---

## §3 抽象度一致 Guardrail

v1 隱性執行了這條規則，v2 明文化以防漂移。

### 三層各自的「抽象宇宙」

| 層 | 該管 | 不該管 |
|----|------|-------|
| **ref** | 原子值（color hex / number / duration ms）| ❌ 帶語意 ❌ 帶 component ❌ 帶 state |
| **sys** | semantic role（`primary` / `surface` / `error` / `price`）| ❌ 綁 component ❌ hardcode color value ❌ looks-like naming |
| **comp** | component-specific | ❌ 無 component（comp 必含 component 名）|

### 同層內三種命名宇宙禁混

同一層級不可混入：

- **semantic** 命名（`text/primary`、`error`）
- **object-like** 命名（`card-border`、`button-bg`）
- **state-like** 命名（`hover`、`active`、`disabled`）

例：`sys.color.text.primary` ✅ 可以；同層不可同時出現 `sys.color.button-bg`（混 component）或 `sys.color.danger-hover`（混 state）。

### 違反 = lint fail

migration 時 lint script 必須擋下違反項目。

---

## §4 Interaction Modes

露天設計系統有 **2 個 interaction mode**（不是 brand，差異是互動情緒不是識別）：

| Mode | 包含 | 互動情緒 |
|------|------|---------|
| **Core Commerce Mode** | 露天主站 | 理性 / 穩定 / 高資訊密度 / 搜尋導向 / 可信任 |
| **Hype Commerce Mode** | 一抽入魂 + 預購 | 收藏感 / 稀有感 / hype / 開箱情緒 / 娛樂性 |

兩 mode **同骨架，不同情緒層**。可分化的只有 semantic emphasis：CTA 情緒 / rarity / urgency / highlight style / campaign tone。

### Core Commerce Mode 獨有 patterns（v1 已沉澱）

| Pattern | Token 實作 | 來源 |
|---------|----------|------|
| primary ≠ brand background | primary button = 深底（`sys.color.on-surface`）+ 橘字（`sys.color.primary`）| v1 既有 |
| price 用紅不用橘 | `sys/color/price` = `ref/color/red.500` | v1 Locked #3 |
| tertiary border = brand orange | `sys/color/primary` 橘框（非 outline 灰）| v1 Locked #15 |

> ⚠️ 這些是 Core Commerce Mode 獨有，**不可預設套用到 Hype Commerce Mode**。

### Hype Commerce Mode patterns

待 M2 一抽入魂真實上線時長出來，現在不預設。

---

## §5 DESIGN.md 檔規劃（依 mode evidence 漸進）

| 階段 | 檔案 | 觸發條件 |
|------|------|---------|
| **M1**（現在）| `DESIGN-shared.md` 一份 | v1 681 tokens 直接搬入；露天主站直接用 |
| **M2**（一抽入魂真實上線）| 加 `DESIGN-hype.md`（極薄 override）| 出現實際 mode override evidence |
| **M3+** | 再評估是否拆檔（按容量 / 引用 / AI 讀取體驗）| 根據 reality |

**不預先建空檔。每次新增檔案必須有 reality evidence。**

---

## §6 與相關 specs 的邊界

防 spec drift（避免規則散到多檔互相打架）：

| 內容 | 位置 | 階段 |
|------|------|------|
| Token 結構規則（本檔）| `specs/tokens/design-md-structure.md` | M1 ✅ |
| v1 17 條 Locked Decisions | `specs/governance/locked-decisions.md` | M1 P0 待寫 |
| Interaction Mode 切換機制 | `specs/brand-theming.md`（檔名待改）| M2 寫 |
| Vue / RN 跨平台規範 | `specs/cross-platform-parity.md` | Step 3 寫 |
| Component spec 格式 | `specs/components/_format.md` | Step 3 寫 |

---

## 變更紀錄

| 日期 | 版本 | 變更 |
|------|------|------|
| 2026-05-07 | 0.1 | 初版 — Reality Compression：沿用 v1 + 補 Shared-first + 抽象度一致 + Interaction Modes |
