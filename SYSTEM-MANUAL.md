---
role: system-manual
status: active
last_updated: 2026-04-24
---

# ruten-design-system-v2 · 系統總覽

> 給新成員 / 非技術人員快速理解這個專案在做什麼、怎麼運作、文件放哪。

## 一句話
露天市集三品牌跨平台設計系統（露天 / 一番賞 / 預購）— 解 Figma 綁定 + 設計師難用重建版。

## 產出是什麼
- **3 份 DESIGN.md**（露天 / 一番賞 / 預購）：設計師能讀能改的 markdown token 檔
- **1 份 Figma v2 檔**：協作主力（設計師 / 工程 / PO 都在這裡看 + 改）
- **2 套 Component code**：Vue 3（Web 桌機 + M-Web）/ React Native（App），跨 repo 分發
- **1 個 Storybook**（Phase 2）：設計師能瀏覽的活文件

## 技術棧
- **Token SOT**: DESIGN.md（Google Labs spec, DTCG inspired）
- **Web**: Vue 3 + Tailwind CSS v4 + shadcn-vue / Reka UI
- **App**: React Native 0.63（升版中 → 0.78）+ React Native Reusables + NativeWind
- **組件展示**: Storybook 9（Phase 2）
- **設計協作**: Figma v2 為主力 + Tokens Studio plugin（Phase 2）
- **Token Build**: Style Dictionary / Terrazzo
- **視覺 regression**: Chromatic（Phase 2）

## 檔案結構

```
ruten-design-system-v2/
├─ CLAUDE.md               # Claude 治理規則（AI 入口）
├─ SYSTEM-MANUAL.md        # 本檔：系統總覽（人類入口）
├─ README.md               # GitHub 門面
├─ .env.example            # 環境變數範例
├─ .gitignore              # git 必備
│
├─ .claude/                # Claude Code 工具設定
│  ├─ settings.json
│  └─ skills/              # 專案專屬 skill
│  # hooks/ rules/ 用到再建
│
├─ docs/                   # 人類文件
│  ├─ prd.md               # 主 PRD（產品需求 + 目錄）
│  ├─ roadmap.md           # 大階段目標 (milestone)
│  ├─ backlog.md           # 細碎待辦 P0/P1/P2
│  ├─ changelog/           # 版本歷史
│  └─ reference/           # 視覺卡 / 手冊
│
├─ specs/                  # 工程規格（AI / 工程看）
│  ├─ _taxonomy.md         # 文件分類規則（繼承全域）
│  └─ governance/          # 工作流程
│
└─ packages/               # 實作程式碼（之後建 monorepo）
   ├─ tokens/              # DESIGN.md → 各格式輸出
   ├─ ui-web/              # Vue 3 component（Phase 1 做 POC）
   └─ ui-native/           # RN component（Phase 2 擴展）
```

> daily_log 不在專案內，統一在 MEMORY（跨專案管理）。

## 真相來源（哪裡改什麼）

| 要改什麼 | 改哪 | 為什麼 |
|---------|------|-------|
| 顏色 / 字型 / 間距 token | `DESIGN-<brand>.md` | 設計師能直接改 |
| 設計決策、技術規格 | `specs/<domain>/*.md` | 改行為前先改 spec |
| 產品目標、需求 | `docs/prd.md` | 產品視角單一入口 |
| 大階段目標 | `docs/roadmap.md` | milestone 規劃 |
| 細碎待辦 | `docs/backlog.md` | 日常任務追蹤 |
| Claude Code 行為 | `CLAUDE.md` | 治理規則、啟動協議 |
| 文件分類規則 | `specs/_taxonomy.md` | 繼承全域 + 本專案補充 |
| 使用者教學 | `docs/reference/` | 非技術向 |

## 怎麼跑起來

```bash
# Phase 1 MVP（待建）
npm install
npx @google/design.md lint DESIGN-ruten.md
npm run build:tokens    # 產 tokens.css / tokens.ts / tailwind.theme
npm run storybook       # Phase 2 再上
```

## 設計決策摘要

1. **為什麼走 code-first**：兩個月前 Figma-first 失敗 — 綁定易壞 + 設計師難用
2. **為什麼用 DESIGN.md**：設計師能直接讀改的純文字格式，降低門檻
3. **為什麼 Figma 還是主力**：設計師 / 工程 / PO 現有協作流程在 Figma，強推離開會斷協作
4. **為什麼分兩套 Component code**：Vue 硬約束 + RN 不同 runtime，無法共用一套
5. **為什麼 MVP 只做露天**：先驗證架構，Ichiban / Resell 後續擴展
6. **為什麼 App 只做 POC**：RN 0.78 升版中，兩個大工程疊一起風險高

## 相關文件
- [`CLAUDE.md`](CLAUDE.md) — Claude 治理
- [`docs/prd.md`](docs/prd.md) — PRD 入口
- [`docs/roadmap.md`](docs/roadmap.md) — Roadmap
- [`specs/`](specs/) — 工程規格
