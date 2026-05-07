import { ref, onMounted } from 'vue'

export default {
  title: 'Foundations/Typography',
  parameters: {
    docs: {
      description: {
        component:
          'sys.typography 是 semantic scale，alias 到 ref.typography.font-size 原子值。Font-family: PingFang TC（中文）+ SF Pro（英文）。',
      },
    },
  },
}

const SCALE = [
  { name: 'display.3xl', size: 64 },
  { name: 'display.2xl', size: 56 },
  { name: 'display.xl', size: 48 },
  { name: 'display.lg', size: 40 },
  { name: 'display.md', size: 36 },
  { name: 'display.sm', size: 32 },
  { name: 'headline.lg', size: 28 },
  { name: 'headline.md', size: 24 },
  { name: 'headline.sm', size: 20 },
  { name: 'title.lg', size: 18 },
  { name: 'title.md', size: 16 },
  { name: 'title.sm', size: 14 },
  { name: 'body.lg', size: 16 },
  { name: 'body.md', size: 14 },
  { name: 'body.sm', size: 12 },
  { name: 'label.lg', size: 14 },
  { name: 'label.md', size: 12 },
  { name: 'label.sm', size: 11 },
  { name: 'label.xs', size: 10 },
  { name: 'label.2xs', size: 8 },
]

const WEIGHTS = [
  { name: 'regular', value: 400 },
  { name: 'medium', value: 500 },
  { name: 'semibold', value: 600 },
  { name: 'bold', value: 700 },
]

export const FontScale = {
  name: 'sys.typography (scale)',
  render: () => ({
    setup() { return { scale: SCALE } },
    template: `
      <div class="flex flex-col gap-4">
        <div
          v-for="item in scale"
          :key="item.name"
          class="flex gap-6 items-baseline pb-2 border-b border-gray-100"
        >
          <code class="text-xs w-36 text-gray-500 shrink-0">{{ item.name }}</code>
          <code class="text-xs w-12 text-gray-400 shrink-0">{{ item.size }}px</code>
          <div
            class="leading-snug"
            :style="{ fontSize: 'var(--sys-typography-' + item.name.replace('.', '-') + ')' }"
          >
            露天設計系統 Ruten DS — Aa Bb 123
          </div>
        </div>
      </div>
    `,
  }),
}

export const FontWeight = {
  name: 'sys.typography.weight',
  render: () => ({
    setup() { return { weights: WEIGHTS } },
    template: `
      <div class="flex flex-col gap-4">
        <div v-for="w in weights" :key="w.name" class="flex gap-6 items-baseline">
          <code class="text-xs w-36 text-gray-500 shrink-0">weight.{{ w.name }}</code>
          <code class="text-xs w-12 text-gray-400">{{ w.value }}</code>
          <div
            class="text-lg"
            :style="{ fontWeight: 'var(--sys-typography-weight-' + w.name + ')' }"
          >
            露天設計系統 Ruten DS — Aa Bb 123
          </div>
        </div>
      </div>
    `,
  }),
}

export const FontFamily = {
  name: 'sys.typography.font-family',
  render: () => ({
    template: `
      <div class="flex flex-col gap-6">
        <div>
          <code class="text-xs text-gray-500">sys.typography.font-family.primary</code>
          <div class="text-2xl mt-2" style="font-family: var(--sys-typography-font-family-primary);">
            PingFang TC — 露天市集 一抽入魂 預購
          </div>
        </div>
        <div>
          <code class="text-xs text-gray-500">sys.typography.font-family.english</code>
          <div class="text-2xl mt-2" style="font-family: var(--sys-typography-font-family-english);">
            SF Pro — Ruten Design System v2
          </div>
        </div>
      </div>
    `,
  }),
}

const TYPOGRAPHY_TOKENS = [
  ...SCALE.map(s => `--sys-typography-${s.name.replace('.', '-')}`),
  ...WEIGHTS.map(w => `--sys-typography-weight-${w.name}`),
  '--sys-typography-font-family-primary',
  '--sys-typography-font-family-english',
]

export const RuntimeNote = {
  name: 'Runtime Note',
  parameters: {
    docs: {
      description: {
        story:
          'Foundation Runtime Surface — Typography token chain runtime status + how Button consumes it.',
      },
    },
  },
  render: () => ({
    setup() {
      const stats = ref({
        scale: SCALE.length,
        weight: WEIGHTS.length,
        family: 2,
        unresolved: [],
      })
      onMounted(() => {
        const cs = getComputedStyle(document.documentElement)
        const unresolved = TYPOGRAPHY_TOKENS.filter(t => !cs.getPropertyValue(t).trim())
        stats.value = {
          scale: SCALE.length,
          weight: WEIGHTS.length,
          family: 2,
          total: TYPOGRAPHY_TOKENS.length,
          unresolved,
        }
      })
      return { stats }
    },
    template: `
      <pre class="text-[11px] text-gray-500 leading-relaxed p-3 bg-gray-50 rounded font-mono whitespace-pre-wrap">Token chain:
  sys.typography.{display,headline,title,body,label}.* → ref.typography.font-size.* → px
  sys.typography.weight.{regular,medium,semibold,bold} → ref.typography.font-weight.* → 400/500/600/700
  sys.typography.font-family.{primary,english} → ref.typography.font-family.* → "PingFang TC" / "SF Pro"

Build pipeline:
  v1 design-system-all.tokens.json
  → tools/build-tokens.py (unitless 處理 weight)
  → tokens.css CSS variables
  → body { font-family: var(--sys-typography-font-family-primary), ... }

Runtime status:
  font-size scale tokens: {{ stats.scale }}
  font-weight tokens: {{ stats.weight }}
  font-family tokens: {{ stats.family }}
  total: {{ stats.total }}
  {{ stats.unresolved.length > 0 ? '❌ unresolved: ' + stats.unresolved.join(', ') : '✅ all resolved' }}

Used by Button (arbitrary value via comp.button.{size}.font-size chain):
  - sm: comp.button.sm.font-size → sys.typography.label.md → 12px
  - md: comp.button.md.font-size → sys.typography.label.lg → 14px
  - lg: comp.button.lg.font-size → sys.typography.title.sm → 14px
  - xl: comp.button.xl.font-size → sys.typography.title.md → 16px
  - font-weight: comp.button.font-weight → sys.typography.weight.semibold → 600
  - font-family: page-level body inherit (PingFang TC + SF Pro)</pre>
    `,
  }),
}
