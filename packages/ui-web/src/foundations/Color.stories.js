import { ref, onMounted } from 'vue'

export default {
  title: 'Foundations/Color',
  parameters: {
    docs: {
      description: {
        component:
          'Runtime Truth Inspector — sys.color 顯示三層 alias chain：sys path → ref alias target → runtime resolved value。資料來自 browser CSSOM（不是手寫）。',
      },
    },
  },
}

const SYS_COLORS = [
  'primary',
  'on-primary',
  'secondary',
  'surface',
  'on-surface',
  'on-surface-variant',
  'surface-brand',
  'surface-brand-dim',
  'price',
  'on-price',
  'error',
  'on-error',
  'success',
  'warning',
  'info',
]

const REF_RAMPS = [
  { hue: 'orange', steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
  { hue: 'neutral', steps: ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'] },
  { hue: 'red', steps: ['50', '100', '300', '500', '700'] },
]

// CSS var name → token-like path（friendly display）
function cssVarLabel(cssVar) {
  const m = cssVar.match(/^--(ref|sys|comp)-([a-z]+)-(.+)$/)
  return m ? `${m[1]}.${m[2]}.${m[3]}` : cssVar
}

// 從 :root CSSStyleRule 讀 alias source（CSS variables 的原始字串，含 var(...) 形式）
function readAliasMap() {
  const map = {}
  for (const sheet of document.styleSheets) {
    try {
      const rules = sheet.cssRules
      if (!rules) continue
      for (const rule of rules) {
        if (rule.selectorText === ':root') {
          for (let i = 0; i < rule.style.length; i++) {
            const prop = rule.style[i]
            if (prop.startsWith('--')) {
              map[prop] = rule.style.getPropertyValue(prop).trim()
            }
          }
        }
      }
    } catch (e) {
      // CORS or other access error — skip
    }
  }
  return map
}

export const SysColor = {
  name: 'sys.color (token chain)',
  render: () => ({
    setup() {
      const aliasMap = ref({})

      onMounted(() => {
        aliasMap.value = readAliasMap()
      })

      const getAliasTarget = (sysName) => {
        const cssVar = `--sys-color-${sysName}`
        const source = aliasMap.value[cssVar]
        if (!source) return null
        const m = source.match(/^var\((--[\w-]+)\)/)
        if (m) return { type: 'alias', label: cssVarLabel(m[1]) }
        return { type: 'hardcoded', label: source }
      }

      const getResolved = (sysName) => {
        if (typeof window === 'undefined') return ''
        return getComputedStyle(document.documentElement)
          .getPropertyValue(`--sys-color-${sysName}`)
          .trim()
      }

      return { colors: SYS_COLORS, getAliasTarget, getResolved }
    },
    template: `
      <div>
        <p style="font-size: 12px; color: #6b7280; margin-bottom: 1rem; line-height: 1.6;">
          每個 sys color 顯示三層 traceability：<br />
          <strong>sys path</strong> → <strong>ref alias target</strong> → <strong>runtime resolved value</strong>。<br />
          資料源：browser CSSOM（<code>document.styleSheets</code> + <code>getComputedStyle</code>）。
        </p>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(360px, 1fr)); gap: 1rem;">
          <div
            v-for="name in colors"
            :key="name"
            style="display: grid; grid-template-columns: 80px 1fr; gap: 1rem; align-items: center; padding: 0.75rem; border: 1px solid #e5e7eb; border-radius: 8px;"
          >
            <div
              :style="{
                background: 'var(--sys-color-' + name + ')',
                height: '64px',
                borderRadius: '6px',
                border: '1px solid #e5e7eb',
              }"
            ></div>
            <div style="display: flex; flex-direction: column; gap: 4px; font-size: 11px; line-height: 1.5; min-width: 0;">
              <code style="color: #1f2937; font-weight: 600;">sys.color.{{ name }}</code>
              <code v-if="getAliasTarget(name)?.type === 'alias'" style="color: #6b7280;">
                → {{ getAliasTarget(name).label }}
              </code>
              <code v-else-if="getAliasTarget(name)?.type === 'hardcoded'" style="color: #d97706;">
                ⚠️ hardcoded: {{ getAliasTarget(name).label }}
              </code>
              <code v-else style="color: #dc2626;">
                ❌ unresolved alias source
              </code>
              <code v-if="getResolved(name)" style="color: #9ca3af;">
                = {{ getResolved(name) }}
              </code>
              <code v-else style="color: #dc2626;">
                ❌ no resolved value
              </code>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const RefColor = {
  name: 'ref.color (atomic ramp)',
  render: () => ({
    setup() {
      return { ramps: REF_RAMPS }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div v-for="ramp in ramps" :key="ramp.hue">
          <h3 style="font-size: 14px; font-weight: 600; margin-bottom: 0.5rem;">{{ ramp.hue }}</h3>
          <div style="display: flex; gap: 0.5rem;">
            <div v-for="step in ramp.steps" :key="step" style="flex: 1;">
              <div :style="{
                background: 'var(--ref-color-' + ramp.hue + '-' + step + ')',
                height: '56px',
                borderRadius: '4px',
                border: '1px solid #e5e7eb',
              }"></div>
              <code style="font-size: 11px; color: #666;">{{ step }}</code>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}
