---
role: taxonomy
version: 1.0
status: active
last_updated: 2026-04-24
extends: ~/.claude/docs/project-file-taxonomy.md
---

# ruten-design-system-v2 文件分類規則

## 繼承全域規則

@~/.claude/docs/project-file-taxonomy.md

> 全域 taxonomy 已涵蓋：4 維度分類 / 檔案對照表 / 版本號 / frontmatter / hooks vs rules / git 備份 / 寫檔宣告協議 / setup-project 觸發。

## 本專案特有 domain

| Domain | 用途 | 路徑 | 範例檔 |
|--------|------|------|--------|
| tokens | DESIGN.md 結構 / token 生成規則 | `specs/tokens/` | `specs/tokens/design-md-structure.md` |
| components | 每個 component 的行為 / 狀態 / a11y 規格 | `specs/components/` | `specs/components/Button.spec.mdx` |
| brand-theming | 三品牌切換機制 | `specs/brand-theming.md` | — |
| cross-platform | Vue / RN 跨平台一致性規範 | `specs/cross-platform-parity.md` | — |
| governance | 工作流程（遷移 / 分發） | `specs/governance/` | `specs/governance/migration-plan.md` |

## 本專案特有檔案

| 檔案 | 位置 | 為什麼特殊 |
|------|------|----------|
| `DESIGN-<brand>.md` | **根目錄** | Token SOT，設計師 + Kay 直接讀改，不放 docs/ / specs/ |
| 設計稿連結清單 | `docs/reference/figma-files.md` | 列出 v2 主檔 + Archive 舊檔 |

## 本專案特有規則

1. **DESIGN.md 只有 3 份**（露天 / 一番賞 / 預購），不額外增加。未來若加第 4 品牌要先討論再建。
2. **Component spec 用 .spec.mdx 副檔名**（不是 .md）— 因為 MDX 支援 live demo import。
3. **跨 repo 分發只 token 發 npm，component 不發**（shadcn-style copy-paste），避免版本地獄。
4. **不雙向同步 Figma / DESIGN.md**（Phase 1 手動單向 export，Phase 2 才用 Tokens Studio）。

## 變更紀錄

| 日期 | 版本 | 變更 |
|------|------|------|
| 2026-04-24 | 1.0 | 初版（繼承全域 v2.1 + 本專案 tokens / components / brand-theming / cross-platform / governance 5 個 domain）|
