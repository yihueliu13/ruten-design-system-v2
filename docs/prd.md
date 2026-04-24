---
role: prd
version: 0.1
status: draft
last_updated: 2026-04-24
---

# ruten-design-system-v2 PRD

> 主 PRD：產品需求 + 子 spec 目錄入口
>
> 詳細子 spec 用 `@path` 引用，AI 讀本檔會自動拉進相關內容。

## 1. 目標

露天市集三品牌跨平台設計系統（露天 / 一番賞 / 預購）— 解 Figma 綁定 + 設計師難用重建版。

**為誰做？**
- 4 個設計師（主要使用者）
- 工程團隊（Vue Web / React Native App）
- PO（需要在 Figma 看 + 決策）
- Kay（設計系統負責人）

**解決什麼問題？**
兩個月前 Figma-first 設計系統建置失敗的核心痛點：
1. **Figma 綁定易壞**：token 綁 Variables，重建 Variable Collection 就全斷，手動綁也容易漏
2. **設計師難使用**：4 個設計師「想用但進不來」，連 Kay 自己都覺得難
3. **命名看不懂、guideline 沒人讀**：token 命名邏輯不直觀，文件散落
4. **三平台各自為政**：Web / M-Web / App 設計不一致

**成功指標**
- ✅ 4 個設計師能獨立改 DESIGN.md 並 push PR
- ✅ 改一個 token 2 步內完成（改 DESIGN.md + commit），不需手動綁 Figma
- ✅ MVP 分類館首頁跨 Web + M-Web + App 三平台跑通
- ✅ 三品牌切換只改 DESIGN-<brand>.md 一份檔
- ✅ CI 自動擋 token 錯誤（對比度不足 / 命名斷鏈）

## 2. 範圍

**MVP 包含**：
- Token 層：3 份 DESIGN.md（露天主做，一番賞 / 預購建骨架）
- 基礎 Component POC：Button / SectionHeader / ProductCard
- 首個頁面驗證：**分類館首**跨 Web 桌機 + M-Web + App
- Web Vue 端完整實作
- App RN 端只做 POC（Token 接上 + 1-2 組件），等 RN 升 0.78 完成再擴
- Figma v2 檔（新建，協作主力）

**MVP 不包含**（Phase 2 之後）：
- Storybook 上線
- Chromatic 視覺 regression
- Tokens Studio 自動同步 Figma ↔ DESIGN.md
- 業務 Component（抽賞 / 預購倒數 / 拍賣競標）
- 完整 19 組件覆蓋
- Figma Code Connect
- npm package 公開發布

**刻意排除**：
- 不用 Claude Design（Research Preview，MVP 不賭）
- 不做 Vue / RN 共用 Component（Tamagui / RN Web 都不走）
- 不動舊 ruten-design-system repo（留 archive）

## 3. 子 spec 目錄

待補（Phase 1 會建）：
```
- §1 DESIGN.md 結構        → @specs/tokens/design-md-structure.md
- §2 Component spec 格式   → @specs/components/_format.md
- §3 三品牌切換機制        → @specs/brand-theming.md
- §4 跨 repo 分發          → @specs/cross-repo-distribution.md
- §5 跨平台一致性          → @specs/cross-platform-parity.md
- §6 遷移計畫（舊 → 新）   → @specs/governance/migration-plan.md
```

## 4. Roadmap

詳見 [`roadmap.md`](roadmap.md)。

## 5. 待辦

詳見 [`backlog.md`](backlog.md)。

## 6. 變更紀錄

| 日期 | 版本 | 變更 |
|------|------|------|
| 2026-04-24 | 0.1 | 初版骨架（brainstorming 結論整理）|
