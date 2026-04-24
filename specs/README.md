# Specs

設計決策與技術規格。**給工程師和 Claude 看**，改程式碼前的唯一真相來源。

## 結構

```
specs/
├─ _taxonomy.md              # 文件分類規則（繼承全域 + 本專案補充）
├─ tokens/                   # DESIGN.md 結構 / token 生成規則
├─ components/               # 每個 component 的 spec.mdx
├─ brand-theming.md          # 三品牌切換機制
├─ cross-platform-parity.md  # Vue / RN 一致性規範
└─ governance/               # 工作流程（遷移 / 分發）
```

## `_taxonomy.md` 是什麼

文件分類規則，繼承全域 `~/.claude/docs/project-file-taxonomy.md`，並補充本專案特有 domain 定義。

每次新增檔案前，AI 會查 `_taxonomy.md` 判斷該放哪。**不要繞過**。

## 適合放什麼

- ✅ DESIGN.md 結構規範 → `tokens/`
- ✅ Component 行為 / 狀態 / a11y → `components/<Name>.spec.mdx`
- ✅ 三品牌切換機制 → `brand-theming.md`
- ✅ 跨平台一致性 → `cross-platform-parity.md`
- ✅ 遷移計畫（舊 ruten-design-system → v2）→ `governance/migration-plan.md`
- ✅ 跨 repo 分發規範 → `governance/cross-repo-distribution.md`

## 不適合放什麼

- ❌ 使用者教學 → 放 `docs/reference/`
- ❌ 變更紀錄 → 放 `docs/changelog/`
- ❌ Design token 的**實際值** → 放根目錄的 `DESIGN-shared.md`（通用）或 `DESIGN-<brand>.md`（品牌）
- ❌ 產品目標 / 需求 → 放 `docs/prd.md`

## 規則

- 改行為前先改 spec，再改程式碼
- spec 是單一真相來源，不要在 MEMORY 或別處重複寫設計細節
- 檔名用 kebab-case（例 `design-md-structure.md`），**component spec 例外**用 PascalCase + .spec.mdx（例 `Button.spec.mdx`）
- 每個 spec 檔案開頭加 frontmatter（role / version / status / last_updated）

詳細規則見 `~/.claude/docs/project-file-taxonomy.md`。
