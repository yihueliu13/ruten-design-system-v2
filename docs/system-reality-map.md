---
role: architecture
version: 0.1
status: active
last_updated: 2026-05-07
description: Runtime-adjacent Architecture Document — 描述本 repo 真正怎麼運作，給 Claude Code / reviewer / onboarding 讀
---

# AI-native Design System System Reality Map

> 這份文件不是 README、不是 CLAUDE.md、不是 brainstorming、不是 governance。
>
> 它回答一個問題：**這個 repo 真正怎麼運作？**

---

## 🪧 最高原則

```text
先有真值，再談治理
```

Token Truth Layer 還沒誕生之前，governance / Storybook / 大量 component 都是空轉。

---

## 0. Two Views — 這份文件有兩種讀法

這個系統不能用單一視角理解。**任何想用一張線性圖描述完整系統的嘗試都會失敗** — 因為它有兩個正交（橫縱）的世界。

### 🅰️ View A｜Artifact Pipeline（縱向）

**描述**：設計產物如何變成最終可運行系統。

```text
Figma → Token Truth → Component Spec → Runtime → Storybook
```

| 性質 | 內容 |
|------|------|
| 流向 | 縱向（上游 → 下游）|
| 元素 | build chain / source flow / dependency flow |
| 類比 | Kubernetes **data plane**（真正運行 + 流動的東西） |
| 對應層 | L1 / L2 / L3 / L4 / L5 |

### 🅱️ View B｜Operational Overlay（橫向）

**描述**：誰在治理與操作整條鏈。

```text
Governance · AI Operating Brain · Claude Code · Skills · Memory
```

| 性質 | 內容 |
|------|------|
| 流向 | 橫向（橫切 L1-L5，不在資料流上）|
| 元素 | policy layer / operational layer / AI execution layer |
| 類比 | Kubernetes **control plane**（規範 + 操作 data plane） |
| 對應層 | L6 / L7 |

### 🔑 Claude Code 在哪？

這是這份文件最容易誤解的點，明確錨點：

| 問題 | 答案 |
|------|------|
| Claude Code 是 View A 的節點嗎？ | ❌ **不是** |
| Claude Code 是 View B 的什麼？ | ✅ **AI execution layer**（L7 的執行面）|
| Claude Code 能讀什麼？ | ✅ **讀 View A 全部 + View B 規則** |
| Claude Code 能改什麼？ | ✅ **改 View A**（依 View B Governance 的規則）|
| Claude Code 是真值嗎？ | 🚫 **不是真值**。真值永遠在 L2 token / L3 spec / L6 governance（規則本身）|

**比喻**：PM 不會出現在 CI/CD pipeline 圖裡，但 PM 影響整條鏈。Claude Code 也是這種角色。

### 為什麼必須拆雙視角

| 不拆的後果 | 拆後 |
|----------|------|
| AI 誤以為自己是 pipeline 節點 → 開始覆寫 truth | AI 知道自己是橫向操作層，不擁有真值 |
| Governance 被誤當 build artifact | Governance 是 control plane，不在 artifact flow 上 |
| Memory / Skills 偷偷形成 hidden policy | Memory / Skills 屬 View B，受 Governance 約束 |
| 整個系統「看起來能跑，但概念已經爛掉」 | 真值權責清楚，AI 操作但不擁有 |

### 真值權責表（最重要的單張表）

| 誰 | View | 擁有真值嗎 | 能改真值嗎 |
|----|------|----------|----------|
| L2 Token Truth（DESIGN.md）| 🅰️ A | ✅ 是 | — |
| L3 Component Spec | 🅰️ A | ✅ 是（行為真值）| — |
| L4 Runtime | 🅰️ A | ❌ 衍生物 | ❌ 不可改上層 |
| L6 Governance | 🅱️ B | ✅ 是（規則真值）| — |
| L7 AI Brain（含 Claude Code）| 🅱️ B | 🚫 **不是** | ✅ **可改**（依 L6 規則）|

> **核心原則**：AI 是 **operator**，不是 **owner**。

---

## 1. Core Philosophy

`ruten-design-system-v2` 不是單純的 UI Kit。

它是一條 **AI-native Design System** 流水線（View A · Artifact Pipeline）：

```text
Figma
  ↓
Token Truth（DESIGN.md）
  ↓
Component Spec（行為契約）
  ↓
Vue / React Native Runtime
  ↓
Storybook Documentation Portal
```

> **Claude Code 不在這條 pipeline 上** — 它屬 View B（橫切操作層），讀整條 View A、依 L6 規則改 View A，但**不是節點、不擁有真值**。詳見 §0。

差別在哪：

| 傳統 UI Kit | 本系統 |
|------------|-------|
| Figma 是真值 | Figma 是**協作展示**，DESIGN.md 才是真值 |
| Component code 各 repo 自己寫 | Component code 由 spec + AI 協作產出 |
| Storybook = 文件 | Storybook = 文件 + runtime preview + usage code |
| 治理規則寫死 | 治理規則跟 AI 一起 evolve（但仍**不可凌駕真值**） |

---

## 2. System Layers

七層真實角色定義。每層附「用途 / 真值角色 / 是否 runtime / 是否 spec / AI 是否該讀 / 不應該做什麼」六欄。

### L1｜Figma Layer 🅰️ View A · 起點

| 欄位 | 內容 |
|------|------|
| 用途 | 設計師、PO、工程的視覺協作介面 |
| 真值角色 | ❌ **不是真值**（是 display / preview） |
| 是否 runtime | ❌ |
| 是否 spec | ❌（是視覺溝通，不是規格契約） |
| AI 是否該讀 | 🟡 可讀畫面截圖、視覺 reference，**不可從 Figma 推 token 值** |
| 不應該做什麼 | ❌ 直接綁 Variables 當真值 ❌ Figma 改完工程跟著改 ❌ 雙向同步 |

---

### L2｜Token Truth Layer 🅰️ View A · 真值（token）

| 欄位 | 內容 |
|------|------|
| 用途 | 設計系統所有 token 的單一真相來源（SOT） |
| 真值角色 | 🔒 **唯一真值** |
| 是否 runtime | ❌（runtime 是衍生物） |
| 是否 spec | ✅（用 DTCG-inspired markdown 表達 token 結構） |
| AI 是否該讀 | ✅ **必讀**（改任何 token 都要從這 4 份檔起手） |
| 不應該做什麼 | ❌ 把運算邏輯寫進來 ❌ 為了 build 方便改格式 ❌ 在別處複寫一份 |

實體檔（規劃，目前**全未建**）：

| 檔名 | 角色 | 內容 |
|------|------|------|
| `DESIGN-shared.md` | 通用 | ref 160 + sys agnostic ~120（跨品牌共用） |
| `DESIGN-ruten.md` | 露天 | brand color + comp（Phase 1 完整做） |
| `DESIGN-ichiban.md` | 一抽入魂 | brand color + comp（Phase 1 骨架） |
| `DESIGN-resell.md` | 預購 | brand color + comp（Phase 1 骨架） |

---

### L3｜Component Spec Layer 🅰️ View A · 真值（行為）

| 欄位 | 內容 |
|------|------|
| 用途 | 每個 component 的行為契約（props / states / a11y / responsive） |
| 真值角色 | ✅ **行為真值**（不是 token 真值，是「這個 component 該怎麼運作」的真值） |
| 是否 runtime | ❌ |
| 是否 spec | ✅ |
| AI 是否該讀 | ✅ **必讀**（改 component code 前先讀對應 spec） |
| 不應該做什麼 | ❌ 寫死 token 值（要 reference L2）❌ 寫死 Vue 或 RN 細節（要 platform-agnostic）|

實體檔位置：`specs/components/<Name>.spec.mdx`（PascalCase + `.spec.mdx`）

---

### L4｜Runtime Implementation Layer 🅰️ View A · 衍生

| 欄位 | 內容 |
|------|------|
| 用途 | 真正在 Web / App 跑的 component code |
| 真值角色 | ❌ **衍生物**（吃 L2 token + L3 spec 產出） |
| 是否 runtime | ✅ |
| 是否 spec | ❌ |
| AI 是否該讀 | 🟡 可讀（理解現況）、可改（依 L3 spec），**不可當真值反推上層** |
| 不應該做什麼 | ❌ 在 code 裡寫死 token 值 ❌ 改 component 行為不同步 spec ❌ Vue / RN 兩端各自改不對齊 |

實體位置（規劃，目前**全未建**）：

| 路徑 | 平台 | 範圍 |
|------|------|------|
| `packages/ui-web/` | Vue 3 + Tailwind v4 | 完整實作 |
| `packages/ui-native/` | RN + NativeWind | POC（等 RN 0.78） |
| `packages/tokens/` | build pipeline | 從 L2 build 出 `tokens.css` / `tokens.ts` / `tailwind.theme` |

---

### L5｜Storybook Documentation Portal 🅰️ View A · 終點

| 欄位 | 內容 |
|------|------|
| 用途 | 設計師 / 工程 / PO 共用的活文件 + runtime preview |
| 真值角色 | ❌ **不是真值**（是 documentation portal） |
| 是否 runtime | ✅（preview 本身是 runtime，但展示而非真實 app）|
| 是否 spec | ❌ |
| AI 是否該讀 | 🟡 可讀（理解 component 視覺與用法），**不可改** |
| 不應該做什麼 | ❌ 當 Token Truth ❌ 當 Governance Portal ❌ 當 AI Lesson Storage |

詳細定義見 §3。

---

### L6｜Governance Layer 🅱️ View B · 規則層（control plane）

| 欄位 | 內容 |
|------|------|
| 用途 | 規範「真值該放哪 / 怎麼改 / 寫檔流程 / 命名」 |
| 真值角色 | 🔒 **規則真值**（規則本身的 SOT） |
| 是否 runtime | ❌ |
| 是否 spec | ✅（meta-spec：spec 的 spec） |
| AI 是否該讀 | ✅ **必讀**（每次操作前對齊規則） |
| 不應該做什麼 | ❌ 凌駕真值（規則永遠服務真值，不是反過來）❌ 規則複雜到沒人讀 |

實體檔：

| 檔 | 範圍 |
|---|------|
| `CLAUDE.md` | Claude 啟動協議 + 治理規則 |
| `specs/_taxonomy.md` | 文件分類規則（繼承全域 + 本專案補充） |
| `specs/governance/` | 工作流程（migration / cross-repo distribution） |
| `~/.claude/docs/project-file-taxonomy.md` | 全域 taxonomy（透過 `@` 引用） |

---

### L7｜AI Operating Brain 🅱️ View B · 執行層（AI operator）

| 欄位 | 內容 |
|------|------|
| 用途 | Claude Code 的記憶 + skill + hook + 跨對話 context |
| 真值角色 | ❌ **operational state**（操作記憶，不是規則也不是真值） |
| 是否 runtime | ✅（AI 對話時跑） |
| 是否 spec | ❌ |
| AI 是否該讀 | ✅ 自己會讀（startup hook + memory）|
| 不應該做什麼 | ❌ 當設計決策真值 ❌ 把 spec 內容複製進 memory ❌ 把治理規則複製進 skill |

實體位置：

| 路徑 | 內容 |
|------|------|
| `.claude/skills/` | 專案專屬 skill（`/token-migrate` 等） |
| `.claude/settings.json` | Claude Code 設定 |
| `~/.claude/projects/<user>/memory/` | 跨對話記憶 |

---

## 3. Storybook Definition

### Storybook 是

```text
Documentation + Runtime Preview + Usage Code
```

三件事疊在一起：

| 角色 | 內容 |
|------|------|
| **Documentation** | Foundations / Components / Patterns / Guidelines |
| **Runtime Preview** | 真的跑得起來的 Vue component（看互動、看 responsive） |
| **Usage Code** | 複製貼上就能用的 import / props 範例 |

### Storybook 不是

| ❌ 不是 | 為什麼 |
|--------|-------|
| Token Truth | DESIGN.md 才是 |
| Governance Portal | CLAUDE.md / taxonomy 才是 |
| AI Lesson Storage | memory / skill 才是 |
| 設計決策來源 | brainstorming changelog / spec 才是 |

### Storybook 應展示

**結構性內容**

| 類別 | 內容 |
|------|------|
| Foundations | color / typography / spacing / radius / shadow（從 L2 build 來） |
| Components | Button / Tag / Tab / ProductCard / SectionHeader 等（從 L4 import） |
| Patterns | 分類館首區塊、商品卡網格、頁面 layout（compose components） |
| Guidelines | 三品牌切換、a11y、responsive 用法 |

**每個 component 必含**

| 項目 | 內容 |
|------|------|
| Vue usage examples | `<Button variant="primary" />` 等可貼用片段 |
| Token mapping | 這個 component 用了哪些 sys / comp token |
| Accessibility | keyboard / ARIA / contrast 測過的結果 |
| Responsive behavior | sm=375 / md=768 / lg=992 / xl=1200 各斷點長相 |

---

## 4. Layer Relationship

完整資料流：

```text
┌───────────────────────────────────────────────────────┐
│ Figma                                                 │  L1（協作展示）
│ ↓ 設計師 + Kay 視覺溝通                               │
└───────────────────────────────────────────────────────┘
            ↓ Phase 1 手動單向 export
            ↓ Phase 2 Tokens Studio 自動同步（單向）
┌───────────────────────────────────────────────────────┐
│ DESIGN-shared.md + DESIGN-<brand>.md（4 份）          │  L2（Token 真值 🔒）
│ ↓ DTCG-inspired，純文字，AI / 設計師共讀共改          │
└───────────────────────────────────────────────────────┘
            ↓ npx @google/design.md lint 驗證
            ↓ Style Dictionary / Terrazzo build
┌───────────────────────────────────────────────────────┐
│ Component Spec（specs/components/<Name>.spec.mdx）    │  L3（行為真值 🔒）
│ ↓ 描述 props / states / a11y / responsive             │
└───────────────────────────────────────────────────────┘
            ↓ AI + 工程依 spec 實作
┌───────────────────────────────────────────────────────┐
│ Vue Runtime              │  React Native Runtime      │  L4（衍生 runtime）
│ packages/ui-web/         │  packages/ui-native/       │
└───────────────────────────────────────────────────────┘
            ↓ import 各 component story
┌───────────────────────────────────────────────────────┐
│ Storybook Portal                                      │  L5（活文件 + preview）
│ Foundations / Components / Patterns / Guidelines      │
└───────────────────────────────────────────────────────┘
            ↓ git push
┌───────────────────────────────────────────────────────┐
│ GitHub Actions                                        │  CI/CD
│ - DESIGN.md lint                                      │
│ - Vue build / RN bundle                               │
│ - Storybook build                                     │
│ - Chromatic visual regression（Phase 2）              │
└───────────────────────────────────────────────────────┘
            ↓ deploy
┌───────────────────────────────────────────────────────┐
│ Zeabur / Vercel（Storybook 公開頁）                   │  Public
└───────────────────────────────────────────────────────┘
```

### 🅱️ View B｜Operational Overlay（橫切 L1 ~ L5）

```text
═══════════════════════════════════════════════════════════
  View B 不在資料流上 — 它橫切整條 View A
═══════════════════════════════════════════════════════════

  ┌─────────────────────────────────────────────────────┐
  │ L6 Governance（規則真值 · control plane）           │
  │ ─ CLAUDE.md（Claude 啟動協議 + 治理）               │
  │ ─ specs/_taxonomy.md（文件分類規則）                │
  │ ─ specs/governance/（migration / cross-repo）       │
  │ ─ @~/.claude/docs/project-file-taxonomy.md（全域）  │
  │ → 規範 L1-L5 真值放哪 / 誰能改 / 怎麼改             │
  └─────────────────────────────────────────────────────┘
                          ↕
  ┌─────────────────────────────────────────────────────┐
  │ L7 AI Operating Brain（AI operator · execution）    │
  │ ─ Claude Code（execution，不擁有真值）              │
  │ ─ .claude/skills/（專案 skill）                     │
  │ ─ .claude/settings.json                             │
  │ ─ ~/.claude/projects/<user>/memory/（跨對話 ctx）   │
  │ → 讀整條 View A、依 L6 規則操作 View A              │
  └─────────────────────────────────────────────────────┘

═══════════════════════════════════════════════════════════
        ↕ 橫向影響 L1 ~ L5（不是節點，是 overlay）
═══════════════════════════════════════════════════════════
```

### 兩個原則（兩個視角各自的規則）

**🅰️ View A 單向原則**：箭頭一律由上往下流。任何反向（runtime 推 spec、Storybook 推 token、Figma 反推 DESIGN.md）都是 IA 違反。

**🅱️ View B 約束原則**：L6/L7 可讀 / 可操作 L1-L5，但 **AI 不擁有真值**。

| 動作 | 誰可以做 | 誰不行 |
|------|---------|-------|
| 讀 L1-L5 | L6 + L7 ✅ | — |
| 改 L1-L5 內容（依 L6 規則）| L7 (AI operator) ✅ | — |
| 定義「真值在哪」 | L6 (Governance) ✅ | L7 ❌ |
| 自行決定改規則 | — | L7 ❌（要人類改 L6）|
| 把 memory 內容當真值 | — | L7 ❌（memory 是 ops 狀態）|
| 把 skill 當 hidden policy | — | L7 ❌（policy 必須在 L6）|

> **核心規則**：AI 是 **operator**，不是 **owner**。Operator 可操作但不擁有；Owner 才能定義真值。

---

## 5. Current Priority

### 現況

| 層 | 狀態 |
|----|------|
| L1 Figma | 🔴 v2 主檔未建（只有 v1 archive） |
| **L2 Token Truth** | 🔴 **4 份 DESIGN.md 全未建** |
| L3 Component Spec | 🔴 0 份 spec |
| L4 Runtime | 🔴 `packages/` 不存在 |
| L5 Storybook | ⚪ Phase 2 才上 |
| L6 Governance | 🟡 規則完整、`specs/governance/` 內容空 |
| L7 AI Brain | 🟡 settings.json `{}`、skill 0 個 |

### 最高優先

```text
DESIGN-shared.md v0.1
```

**Why**：Token Truth Layer 還沒誕生。沒有真值，整條鏈下游全部是空談。

### 不要把 focus 放在

| ❌ 不該先做 | 為什麼 |
|-----------|-------|
| Governance（再加規則） | 現有規則已完整（CLAUDE / taxonomy / SYSTEM-MANUAL 三檔對齊），加規則只會稀釋 |
| Storybook | 沒 component 可展示 |
| 大量 component | 沒 token 可吃，做了也是 hardcode |
| Onboarding 文件 | 沒東西可 onboard |
| Component spec | 沒 token reference 對象 |

### 該做的順序

| # | 動作 | 為什麼 |
|---|------|------|
| 1 | `DESIGN-shared.md` v0.1（ref 160 + sys agnostic ~120）| L2 真值起手，跨品牌共用優先 |
| 2 | `DESIGN-ruten.md` v0.1（露天 color + comp）| 主品牌真值 |
| 3 | 第一份 component spec（驗證 cross-platform 寫法） | 驗 R3 風險 |
| 4 | 第一個 component runtime（吃前 3 步）| 驗整條鏈 |
| 5 | 之後才談 Storybook / 三品牌擴展 / CI |

---

## 變更紀錄

| 日期 | 版本 | 變更 |
|------|------|------|
| 2026-05-07 | 0.1 | 初版 — 建立七層 reality map + Storybook 定義 + 資料流 + 當前優先 |
