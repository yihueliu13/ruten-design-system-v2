---
role: roadmap
status: active
last_updated: 2026-04-24
---

# ruten-design-system-v2 Roadmap

> 大階段 milestone（少數，3-10 個）。細碎待辦在 [`backlog.md`](backlog.md)。

## ⚪ M1｜MVP — 分類館首跨三平台 POC

**目標**：驗證「DESIGN.md + Vue + RN + Figma v2」整條架構跑得通

**狀態**：⚪ 未開始（0%）

**預計完成**：2 週（2026-05-08 前）

**依賴**：無

**交付清單**：
- [ ] 新 Figma v2 檔建立 + 從舊 DS 測試檔搬 Variables / Text Styles
- [ ] DESIGN-ruten.md 從現有 686 tokens 搬遷 + lint 通過
- [ ] Token build pipeline（Style Dictionary / Terrazzo）產 tokens.css + tokens.ts + tailwind.theme
- [ ] packages/ui-web/ 用 Vue 3 + Tailwind 做 Button / SectionHeader / ProductCard POC
- [ ] 分類館首頁 Vue 版（桌機 + M-Web RWD）跑通
- [ ] packages/ui-native/ 做 Button / Tag POC 驗證 token 接上
- [ ] CI：DESIGN.md lint + Vue build + RN bundle

---

## ⚪ M2｜三品牌擴展

**目標**：露天以外的 Ichiban / Resell 品牌建立 + 換色機制跑通

**狀態**：⚪ 未開始

**依賴**：M1 完成

**交付清單**：
- [ ] DESIGN-ichiban.md（藍色主題）
- [ ] DESIGN-resell.md（預購主題）
- [ ] data-theme 切換機制（Web）
- [ ] 三品牌在分類館首各自展示

---

## ⚪ M3｜Storybook + 視覺 regression 上線

**目標**：設計師能瀏覽的活文件 + 自動視覺擋回歸

**狀態**：⚪ 未開始

**依賴**：M1 完成

**交付清單**：
- [ ] Storybook 9 上線（apps/storybook/）
- [ ] Chromatic CI 整合
- [ ] Axe a11y 掃描

---

## ⚪ M4｜自動化 Figma ↔ DESIGN.md 同步

**目標**：Phase 2 — Tokens Studio 自動同步

**狀態**：⚪ 未開始

**依賴**：M2 完成

**交付清單**：
- [ ] 裝 Tokens Studio plugin
- [ ] DESIGN.md → Figma 自動同步
- [ ] Figma Code Connect 對應 component

---

## ⚪ M5｜擴展到 19 組件 + App 端完整

**目標**：完整覆蓋分類館首 19 組件 + RN 0.78 升版完成後擴展

**狀態**：⚪ 未開始

**依賴**：RN 0.78 升版完成 + M2 + M3 完成

**交付清單**：
- [ ] 19 組件 Web 完整
- [ ] 19 組件 RN 完整
- [ ] 業務 Component（抽賞 / 預購倒數 / 拍賣競標）

---

## ✅ 已完成 milestone

| Milestone | 完成日 | 摘要 |
|-----------|--------|------|
| (尚無) | — | — |
