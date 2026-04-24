# 2026-04-24 Brainstorming — Ruten DS v2 Kickoff

> 重啟露天設計系統，從舊版 v1 的痛點重建。本檔為 Day 1 brainstorming 結論彙整。

---

## 背景

### 舊版 v1 狀態（`ruten-design-system/`）

- **已穩資產**：686 tokens + 130 Text Styles
- **架構**：3 tier token（ref/sys/comp）+ 6 層 hierarchy（Foundation → Primitive → Compound → Pattern → Template → Page）
- **元件清單**：已做 Button / Tab / Tag / Badge / Icon / Avatar / Thumbnail / Divider / ProductCard / SectionModule / Banner / NavigationBar / BottomNav / SectionHeader / SearchBar

### 為什麼要重建

| 痛點 | v1 狀況 | v2 目標 |
|------|---------|---------|
| Figma 綁定 | 多次斷連、import 後崩掉 | 新建 v2 檔，規則收嚴 |
| 設計師難用 | 切換繁瑣、層級混亂 | 重整 Figma 結構 |
| SOT 單一大 JSON | 686 tokens 擠一檔 | 拆成 `DESIGN-shared.md`（通用）+ 3 份 `DESIGN-<brand>.md`（品牌層）|
| 協作 | Cowork 操作 | Kay + 設計師共編 Figma + DESIGN.md |

---

## 本次決議

### 1. 範圍與 Phase

| Phase | 內容 |
|-------|------|
| **Phase 1**（當前）| Web Vue 完整做 + RN POC（等 0.78）+ 三品牌 tokens 骨架 + **MVP = 分類館首頁跨 Web 桌機/M-Web/App** |
| **Phase 2**（後）| Storybook 上線 / Tokens Studio 自動同步 / Chromatic / 擴展組件 |

### 2. 技術棧

| 層 | 工具 |
|----|------|
| Web | Vue 3 + Tailwind CSS v4 + shadcn-vue / Reka UI |
| App | React Native 0.63（升版中 → 0.78）+ React Native Reusables + NativeWind |
| Token build | Style Dictionary / Terrazzo（P2 再選） |
| Package manager | **pnpm**（純安裝器，不用 monorepo） |
| 組件展示 | Storybook 9（Phase 2 再上） |
| 視覺 regression | Chromatic（Phase 2） |
| 設計協作 | Figma v2（新建）+ Tokens Studio（Phase 2） |

### 3. 架構（承繼 v1）

- **Token 3 tier**：`ref → sys → comp`，alias 單向，不跳層（comp → sys → ref）
- **6 層 hierarchy**：Foundation → Primitive → Compound → Pattern → Template → Page
- **組件功能分類**：Action / Display / Navigation / Feedback / Layout / Media
- **RWD 策略**：
  - Primitive / Compound → size variant（sm=375 / md=768 / lg=992 / xl=1200）
  - Pattern → CSS layout（grid/flex）
  - Page → breakpoint frame

### 4. SOT 格式遷移

| v1 | v2 |
|----|-----|
| `design-system-all.json`（單檔 686 tokens）| 1 份 `DESIGN-shared.md` + 3 份 `DESIGN-<brand>.md`（DTCG inspired，分層策略 B）|

- `DESIGN-shared.md`：通用 token（ref 160 + sys agnostic ~120，跨品牌共用）
- `DESIGN-ruten.md`：露天品牌層（color + comp，Phase 1 Z1 優先完整做）
- `DESIGN-ichiban.md`：一抽入魂（Phase 1 Z1 先空，Phase 2 建骨架）
- `DESIGN-resell.md`：預購（Phase 1 Z1 先空，Phase 2 建骨架）

工具鏈：`npx @google/design.md lint` 驗證 → Style Dictionary / Terrazzo build → 輸出 Vue / RN 各自吃的格式。

### 5. 三品牌

| 品牌 | 英文 | 主色 | 角色 |
|------|------|------|------|
| 露天 | Ruten | `#FF963B` 橘 | 主站 |
| 一抽入魂 | Ichiban | `#3B82F6` 藍 | 抽賞 |
| 預購 | Resell | `#3B82F6` 藍（跟一抽入魂共用） | 預購市集 |

**Hybrid 策略**：共用 token 結構 + 換色。基礎 component 100% 共用，業務 component 各自獨立（抽賞 / 預購倒數 / 拍賣競標）。

### 6. Component 分發策略

- **Tokens** → 發 npm package `@ruten/design-tokens`，Vue repo / RN repo 各自 `npm install`
- **Component code** → ❌ 不做 npm package，採 **shadcn-style copy-paste**（各 repo 擁有自己的 code，可改）

### 7. 今日 P0 決策

| # | 項目 | 狀態 |
|---|------|------|
| 1 | **Monorepo 工具決策** | ✅ 不用 monorepo，單 package + pnpm（純） |
| 2 | 寫 brainstorming changelog | ✅（本檔）|
| 3 | 新建 Figma v2 檔 | ⬜ Kay 手動建 |
| 4 | 686 tokens 遷移到 `DESIGN-ruten.md` | ⬜ 下一個任務 |

---

## 延後決策（P2 backlog）

| 項目 | 備註 |
|------|------|
| Storybook 9 vs Ladle | Phase 2 評估 |
| Style Dictionary vs Terrazzo | Terrazzo 較新、DTCG 原生 |
| Tokens Studio 團隊版預算 | Phase 2 自動同步需要 |
| Chromatic 免費額度 | Phase 2 視覺 regression |
| **Claude Design 當 docs site 載體** | Anthropic Labs Research Preview，可匯出架 Vercel |
| RN 0.78 升版進度（每 2 週 sync）| 影響 App 端擴展時程 |

---

## 不做的事（Scope Boundary）

- ❌ 不用 Turborepo / Nx（Phase 1 規模不值得，升級便宜）
- ❌ 不改 v1 已 locked 的設計決策：
  - `label-2xs = 8px`（不是 9px）
  - Price color = `sys/color/price` RED（不是橘）
  - `icon-color` 和 `text-color` 是獨立 token
  - Tertiary button border = `sys/color/primary` 橘（不是 outline 灰）
  - Mono 字型已從 SOT 移除
- ❌ Phase 1 不雙向同步 Figma ↔ DESIGN.md（手動單向 export，Phase 2 才用 Tokens Studio 自動化）
- ❌ Phase 1 不做 Storybook / docs site / CLI（內容優先，載體等 Phase 2 選）

---

## 相關檔案

- **本專案 CLAUDE.md**：`CLAUDE.md`
- **Backlog**：`docs/backlog.md`
- **舊版 v1 參考**：`~/Desktop/Kay/ruten-design-system/`（viewer/ 有 hierarchy 視覺化）
- **任務管理**：Claude Code tasks（#1 monorepo ✅ / #2 changelog ✅ / #3 tokens 遷移 / #4 Figma v2）
