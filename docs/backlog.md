---
role: backlog
status: active
last_updated: 2026-04-24
---

# ruten-design-system-v2 Backlog

> 單一真相來源。新項目從這裡加、改、歸檔。
> 用 `/backlog` 快速檢視。

## 🔴 P0（本週必做）

| 狀態 | 項目 | 建立 | 備註 |
|------|------|------|------|
| ✅ | 寫 brainstorming 紀錄 `docs/changelog/2026-04-24-brainstorming.md` | 2026-04-24 | 已完成，見歸檔 |
| ⬜ | 新建 Figma v2 檔「Ruten Design System v2」 | 2026-04-24 | 舊 DS 測試檔改名 `[ARCHIVE]` |
| ⬜ | 現有 686 tokens 匯出成 DESIGN-ruten.md | 2026-04-24 | 寫 migration script |
| ✅ | 確認 `packages/` monorepo 工具（pnpm / turbo？） | 2026-04-24 | **結論：Phase 1 不用 monorepo，單 package + pnpm（純安裝器）。Storybook / docs / CLI 全延後 Phase 2** |

## 🟡 P1（次週 / 穩定後做）

| 狀態 | 項目 | 建立 | 備註 |
|------|------|------|------|
| ⬜ | DESIGN-ichiban.md（藍色主題）基本骨架 | 2026-04-24 | 三品牌 token 先建起來 |
| ⬜ | DESIGN-resell.md（預購主題）基本骨架 | 2026-04-24 | 主色待定 |
| ⬜ | 寫 `specs/tokens/design-md-structure.md` | 2026-04-24 | 露天版 DESIGN.md 結構規範 |
| ⬜ | 寫 `specs/components/_format.md` | 2026-04-24 | component spec 格式定義 |
| ⬜ | 寫 `specs/brand-theming.md` | 2026-04-24 | 三品牌切換機制規範 |
| ⬜ | 寫 `specs/cross-repo-distribution.md` | 2026-04-24 | Vue / RN repo 分發規範 |

## 🟢 P2（背景 / 評估）

| 狀態 | 項目 | 建立 | 備註 |
|------|------|------|------|
| ⬜ | 評估 Storybook 9 vs Ladle（Phase 2 組件展示） | 2026-04-24 | 效能 / 配置 / 生態 |
| ⬜ | 評估 Style Dictionary vs Terrazzo（Token build） | 2026-04-24 | Terrazzo 較新、DTCG 原生 |
| ⬜ | 評估 Tokens Studio 預算 / 團隊版 | 2026-04-24 | Phase 2 自動同步需要 |
| ⬜ | Chromatic 免費額度評估 | 2026-04-24 | Phase 2 視覺 regression |
| ⬜ | 追蹤 RN 0.78 升版進度（每 2 週 sync）| 2026-04-24 | 影響 App 端何時擴展 |
| ⬜ | 評估 **Claude Design** 當 docs site 載體（Phase 2）| 2026-04-24 | Anthropic Labs Research Preview；可匯出架 Vercel；候選：Notion / Storybook+MDX / Claude Design / Figma 規範頁 |

## ⚪ 舊待辦（低優先 / 延後）

| 狀態 | 項目 | 建立 | 備註 |
|------|------|------|------|
| ⬜ | — | — | — |

## 🔁 持續規則（永久循環，不會完成）

- 改 token 前 `npx @google/design.md lint` 通過才 commit
- 改 component 前要有對應 `specs/components/*.spec.mdx`
- 加新項目優先查既有 backlog，不重複

---

## ✅ 已完成歸檔

| 項目 | 完成 | Commit | 備註 |
|------|------|--------|------|
| 重啟 brainstorming + 治理結構建立 | 2026-04-24 | (setup-project v1.1) | 新 repo 骨架 + CLAUDE.md / specs/ / docs/ |
| 寫 2026-04-24 brainstorming 紀錄 | 2026-04-24 | (本次 commit) | 7 大章 + 延後 + 不做，架構 B 方案落地 |
| 確認 monorepo 工具 | 2026-04-24 | (本次 commit) | 不用 monorepo，單 package + pnpm（純安裝器）|
