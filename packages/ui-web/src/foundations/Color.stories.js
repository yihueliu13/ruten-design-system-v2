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
  'primary', 'on-primary', 'secondary', 'surface', 'on-surface', 'on-surface-variant',
  'surface-brand', 'surface-brand-dim', 'price', 'on-price',
  'error', 'on-error', 'success', 'warning', 'info',
]

const REF_RAMPS = [
  { hue: 'orange', steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'] },
  { hue: 'neutral', steps: ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'] },
  { hue: 'red', steps: ['50', '100', '300', '500', '700'] },
]

function cssVarLabel(cssVar) {
  const m = cssVar.match(/^--(ref|sys|comp)-([a-z]+)-(.+)$/)
  return m ? `${m[1]}.${m[2]}.${m[3]}` : cssVar
}

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
    } catch (e) {}
  }
  return map
}

export const SysColor = {
  name: 'sys.color (token chain)',
  render: () => ({
    setup() {
      const aliasMap = ref({})
      onMounted(() => { aliasMap.value = readAliasMap() })

      const getAliasTarget = (sysName) => {
        const source = aliasMap.value[`--sys-color-${sysName}`]
        if (!source) return null
        const m = source.match(/^var\((--[\w-]+)\)/)
        if (m) return { type: 'alias', label: cssVarLabel(m[1]) }
        return { type: 'hardcoded', label: source }
      }

      const getResolved = (sysName) => {
        if (typeof window === 'undefined') return ''
        return getComputedStyle(document.documentElement)
          .getPropertyValue(`--sys-color-${sysName}`).trim()
      }

      return { colors: SYS_COLORS, getAliasTarget, getResolved }
    },
    template: `
      <div class="space-y-4">
        <p class="text-xs text-gray-500 leading-relaxed">
          每個 sys color 顯示三層 traceability：<br />
          <strong class="text-gray-700">sys path</strong> → <strong class="text-gray-700">ref alias target</strong> → <strong class="text-gray-700">runtime resolved value</strong>。<br />
          資料源：browser CSSOM（<code class="text-gray-700">document.styleSheets</code> + <code class="text-gray-700">getComputedStyle</code>）。
        </p>
        <div class="grid grid-cols-[repeat(auto-fill,minmax(360px,1fr))] gap-4">
          <div
            v-for="name in colors"
            :key="name"
            class="grid grid-cols-[80px_1fr] gap-4 items-center p-3 border border-gray-200 rounded-lg"
          >
            <div
              class="h-16 rounded-md border border-gray-200"
              :style="{ background: 'var(--sys-color-' + name + ')' }"
            ></div>
            <div class="flex flex-col gap-1 text-[11px] leading-normal min-w-0">
              <code class="text-gray-800 font-semibold">sys.color.{{ name }}</code>
              <code v-if="getAliasTarget(name)?.type === 'alias'" class="text-gray-500">
                → {{ getAliasTarget(name).label }}
              </code>
              <code v-else-if="getAliasTarget(name)?.type === 'hardcoded'" class="text-amber-600">
                ⚠️ hardcoded: {{ getAliasTarget(name).label }}
              </code>
              <code v-else class="text-red-600">❌ unresolved alias source</code>
              <code v-if="getResolved(name)" class="text-gray-400">= {{ getResolved(name) }}</code>
              <code v-else class="text-red-600">❌ no resolved value</code>
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
      <div class="flex flex-col gap-6">
        <div v-for="ramp in ramps" :key="ramp.hue">
          <h3 class="text-sm font-semibold mb-2">{{ ramp.hue }}</h3>
          <div class="flex gap-2">
            <div v-for="step in ramp.steps" :key="step" class="flex-1">
              <div
                class="h-14 rounded border border-gray-200"
                :style="{ background: 'var(--ref-color-' + ramp.hue + '-' + step + ')' }"
              ></div>
              <code class="text-[11px] text-gray-500">{{ step }}</code>
            </div>
          </div>
        </div>
      </div>
    `,
  }),
}

export const RuntimeNote = {
  name: 'Runtime Note',
  parameters: {
    docs: {
      description: {
        story:
          'Foundation Runtime Surface — Color token chain runtime status + how Button consumes it.',
      },
    },
  },
  render: () => ({
    setup() {
      const stats = ref({ total: SYS_COLORS.length, resolved: 0, unresolved: [], hardcoded: [] })
      onMounted(() => {
        const map = readAliasMap()
        const unresolved = []
        const hardcoded = []
        SYS_COLORS.forEach(name => {
          const source = map[`--sys-color-${name}`]
          if (!source) {
            unresolved.push(name)
          } else if (!source.match(/^var\(/)) {
            hardcoded.push(name)
          }
        })
        stats.value = {
          total: SYS_COLORS.length,
          resolved: SYS_COLORS.length - unresolved.length - hardcoded.length,
          unresolved,
          hardcoded,
        }
      })
      return { stats }
    },
    template: `
      <pre class="text-[11px] text-gray-500 leading-relaxed p-3 bg-gray-50 rounded font-mono whitespace-pre-wrap">Token chain:
  sys.color.* (15 semantic) → ref.color.* (atomic ramp) → hex

Build pipeline:
  v1 design-system-all.tokens.json
  → tools/build-tokens.py
  → packages/ui-web/src/styles/tokens.css (CSS variables)
  → @theme bridge in style.css (sys.color → Tailwind theme)
  → Tailwind utility: bg-primary / text-on-surface / border-primary 等

Runtime status (browser CSSOM check):
  sys.color total: {{ stats.total }}
  ✅ alias resolved: {{ stats.resolved }} / {{ stats.total }}
  {{ stats.hardcoded.length > 0 ? '⚠️ hardcoded: ' + stats.hardcoded.join(', ') : '✅ no hardcoded' }}
  {{ stats.unresolved.length > 0 ? '❌ unresolved: ' + stats.unresolved.join(', ') : '✅ no unresolved' }}

Used by Button (Tailwind utility via @theme bridge):
  - primary variant:    bg-on-surface  text-primary
  - secondary variant:  bg-primary     text-on-primary       border-primary
  - tertiary variant:   bg-surface     text-primary          border-primary
  - ghost variant:      bg-surface     text-primary

Used by Button (state via arbitrary value):
  - disabled state: disabled:opacity-[var(--sys-opacity-disabled)] (= 0.38)</pre>
    `,
  }),
}
