# Docs

人類文件目錄。**給非技術人員和新成員看**。

## 結構

| 檔案 / 資料夾 | 用途 |
|--------------|------|
| `prd.md` | 主 PRD：產品需求 + 子 spec 目錄入口 |
| `roadmap.md` | 大階段 milestone 規劃 |
| `backlog.md` | 細碎待辦清單（P0/P1/P2） |
| `changelog/` | 版本歷史（一個檔一個事件，命名 `YYYY-MM-DD-<事件>.md`） |
| `reference/` | 視覺卡、手冊、教學文件 |

## 適合放什麼

- ✅ Setup guide / 上手教學 → `reference/`
- ✅ 架構圖 HTML / 圖片 → `reference/`
- ✅ QA 報告、使用手冊 → `reference/`
- ✅ 對外文件（使用者手冊、FAQ）→ `reference/`
- ✅ 部署紀錄、版本變更 → `changelog/YYYY-MM-DD-<事件>.md`

## 不適合放什麼

- ❌ 設計決策 → 放 `specs/`
- ❌ 程式碼註解 → 寫在程式碼裡
- ❌ Claude 的行為規則 → 放 `CLAUDE.md`
- ❌ 每日進度 → 放 MEMORY 的 `daily_log.md`

## PRD vs spec vs design 差別

| 類型 | 回答什麼 | 受眾 |
|------|---------|------|
| **PRD** (`docs/prd.md`) | 這是什麼產品？解決什麼問題？| 產品 / 你 |
| **Spec** (`specs/<domain>/*`) | 具體怎麼運作？邊界是什麼？| 工程 / Claude |
| **Reference** (`docs/reference/*`) | 怎麼用？視覺長怎樣？| 設計 / 使用者 |

詳細規則見 `~/.claude/docs/project-file-taxonomy.md`。
