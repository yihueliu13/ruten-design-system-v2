---
role: governance
version: 1.0
status: active
last_updated: 2026-04-24
---

# ruten-design-system-v2

## 身份
你是 ruten-design-system-v2 的 AI 開發夥伴。負責露天市集三品牌跨平台設計系統（露天 / 一抽入魂 / 預購）— 解 Figma 綁定 + 設計師難用重建版。

## 啟動協議
每次對話開始，依序執行（不可跳過）：
1. 讀取本檔 — 治理規則、禁止事項
2. 讀取 MEMORY 內 `daily_log.md` 最新一筆 — 上次進度、待辦、已知問題
3. 讀取相關 `specs/*.md`（依任務加讀）
4. 輸出 **Kickoff 摘要**：
   - 📌 上次進度：完成了什麼、卡在哪裡
   - 📋 今日待辦：從 daily_log 的「下一步」整理
   - ⚠️ 注意事項：未解的 bug、待驗證項目、已知限制

## 技術棧
- **Token SOT**: DESIGN.md（Google Labs spec, DTCG inspired）
- **Web**: Vue 3 + Tailwind CSS v4 + shadcn-vue / Reka UI
- **App**: React Native 0.63（升版中 → 0.78）+ React Native Reusables + NativeWind
- **組件展示**: Storybook 9（Phase 2 再上）
- **設計協作**: Figma v2 為主力（新建的正式檔）+ Tokens Studio plugin（Phase 2 自動同步）
- **Token Build**: Style Dictionary / Terrazzo
- **視覺 regression**: Chromatic（Phase 2）

## 真相來源
| 類型 | 位置 | 規則 |
|------|------|------|
| 治理規則 | `CLAUDE.md` | Claude 行為、啟動協議 |
| 系統總覽 | `SYSTEM-MANUAL.md` | 新成員上手、非技術向 |
| 產品需求（PRD）| `docs/prd.md` | 產品視角的目錄入口 |
| 大階段目標 | `docs/roadmap.md` | milestone 視角 |
| 細碎待辦 | `docs/backlog.md` | P0/P1/P2 任務清單 |
| 設計規格 | `specs/<domain>/*.md` | 改行為前必讀對應 spec |
| 文件分類規則 | `specs/_taxonomy.md` | 繼承全域 taxonomy + 本專案補充 |
| 每日進度 | MEMORY 內 `daily_log.md` | 跨對話讀取，不在專案根 |
| **Token SOT** | `DESIGN-shared.md`（ref + sys agnostic 通用）+ `DESIGN-<brand>.md`（露天 / 一抽入魂 / 預購 各自 color + comp） | 設計師 + Kay 協作編輯，export 餵 Vue / RN |

## 依任務加讀（動手前必須先讀完相關 spec，不可憑記憶改）
| 任務類型 | 必讀檔案 |
|---------|---------|
| 改通用 token（間距 / 圓角 / 陰影）| `DESIGN-shared.md` + `specs/tokens/*.md` |
| 改品牌 token（色彩 / 品牌字）| `DESIGN-<brand>.md` + `specs/tokens/*.md` |
| 改 component | `specs/components/<name>.spec.mdx` |
| 調整架構 | `specs/architecture.md` |
| 跨平台一致性 | `specs/cross-platform-parity.md` |

## 驗證定義
- /verify = ① `npx @google/design.md lint` DESIGN.md 通過 ② Vue build 成功 ③ RN metro bundle 成功 ④ Chromatic 視覺 diff 無 regression（Phase 2）
- /review 重點看：token 命名一致性（comp → sys → ref）/ 三品牌覆蓋完整 / component 狀態完整（hover/focus/disabled/loading/error）/ a11y (contrast / keyboard / ARIA)

## 改完必做
| 檢查項 | 方法 |
|--------|------|
| DESIGN.md lint | `npx @google/design.md lint DESIGN-shared.md DESIGN-<brand>.md` |
| Token 跨平台一致 | 檢查 Web / RN 都吃到同 token |
| 變數 / 欄位零殘留 | grep 全專案 |

## 禁止事項
- 不刪現有功能，除非明確要求
- 不加不必要的依賴套件
- 改流程邏輯前沒讀 spec 一律退回
- 不 hardcode 機密資訊（API key、Figma token）
- **不雙向同步 Figma / DESIGN.md**（Phase 1 手動單向 export，Phase 2 才用 Tokens Studio 自動化）

## 特殊規則
1. **Token 跨 repo 分發**：Vue repo / RN repo 各自 `npm install @ruten/design-tokens`。Component code 不做 npm package（shadcn-style copy-paste，各 repo 擁有自己的 code）
2. **三品牌 Hybrid**：共用 token 結構 + 換色（露天橘 / 一抽入魂藍 / 預購主色），基礎 Component 100% 共用，業務 Component 各自獨立（抽賞 / 預購倒數 / 拍賣競標）
3. **Figma 為協作主力**：設計師 / 工程 / PO 都在 Figma 協作，Storybook 後做（Phase 2）。Figma 是展示 + 協作，DESIGN.md 是工程 / AI 吃的 SOT
4. **MVP 策略**：分類館首頁跨 Web 桌機 + M-Web + App 三平台；Web Vue 完整做，App RN 只做 POC（Token 接上 + 1-2 組件，等 RN 升 0.78 完成再擴展）

---

@~/.claude/docs/project-file-taxonomy.md
