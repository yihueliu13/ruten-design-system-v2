import { ref, onMounted } from 'vue'

export default {
  title: 'Foundations/Spacing',
  parameters: {
    docs: {
      description: {
        component: 'sys.spacing 是 semantic scale，alias 到 ref.spacing 原子數值。',
      },
    },
  },
}

const SYS_SPACING = [
  { name: 'none', value: 0 },
  { name: '2xs', value: 4 },
  { name: 'xs', value: 8 },
  { name: 'sm', value: 12 },
  { name: 'md', value: 16 },
  { name: 'lg', value: 24 },
  { name: 'xl', value: 32 },
  { name: '2xl', value: 48 },
  { name: '3xl', value: 64 },
  { name: '4xl', value: 96 },
]

const SYS_RADIUS = [
  { name: 'none', value: 0 },
  { name: 'sm', value: 4 },
  { name: 'md', value: 8 },
  { name: 'lg', value: 12 },
  { name: 'xl', value: 16 },
  { name: 'full', value: 9999 },
]

export const SysSpacing = {
  name: 'sys.spacing',
  render: () => ({
    setup() { return { items: SYS_SPACING } },
    template: `
      <div class="flex flex-col gap-3">
        <div v-for="item in items" :key="item.name" class="flex gap-6 items-center">
          <code class="text-xs w-36 text-gray-500 shrink-0">sys.spacing.{{ item.name }}</code>
          <code class="text-xs w-12 text-gray-400">{{ item.value }}px</code>
          <div
            class="h-5 rounded-sm bg-primary"
            :style="{ width: 'var(--sys-spacing-' + item.name + ')' }"
          ></div>
        </div>
      </div>
    `,
  }),
}

export const SysRadius = {
  name: 'sys.radius',
  render: () => ({
    setup() { return { items: SYS_RADIUS } },
    template: `
      <div class="flex gap-6 flex-wrap">
        <div v-for="item in items" :key="item.name" class="flex flex-col gap-2 items-center">
          <div
            class="w-20 h-20 bg-primary"
            :style="{ borderRadius: 'var(--sys-radius-' + item.name + ')' }"
          ></div>
          <code class="text-xs text-gray-600">radius.{{ item.name }}</code>
          <code class="text-[11px] text-gray-400">
            {{ item.value === 9999 ? 'full' : item.value + 'px' }}
          </code>
        </div>
      </div>
    `,
  }),
}

const SPACING_TOKENS = [
  ...SYS_SPACING.map(s => `--sys-spacing-${s.name}`),
  ...SYS_RADIUS.map(r => `--sys-radius-${r.name}`),
]

export const RuntimeNote = {
  name: 'Runtime Note',
  parameters: {
    docs: {
      description: {
        story:
          'Foundation Runtime Surface — Spacing / Radius token chain runtime status + how Button consumes it.',
      },
    },
  },
  render: () => ({
    setup() {
      const stats = ref({
        spacing: SYS_SPACING.length,
        radius: SYS_RADIUS.length,
        total: SPACING_TOKENS.length,
        unresolved: [],
      })
      onMounted(() => {
        const cs = getComputedStyle(document.documentElement)
        const unresolved = SPACING_TOKENS.filter(t => !cs.getPropertyValue(t).trim())
        stats.value = {
          spacing: SYS_SPACING.length,
          radius: SYS_RADIUS.length,
          total: SPACING_TOKENS.length,
          unresolved,
        }
      })
      return { stats }
    },
    template: `
      <pre class="text-[11px] text-gray-500 leading-relaxed p-3 bg-gray-50 rounded font-mono whitespace-pre-wrap">Token chain:
  sys.spacing.{none,2xs,xs,sm,md,lg,xl,2xl,3xl,4xl} → ref.spacing.* → px
  sys.radius.{none,sm,md,lg,xl,full} → ref.radius.* → px

Build pipeline:
  v1 design-system-all.tokens.json
  → tools/build-tokens.py
  → tokens.css CSS variables (含 unitless 處理避免 spacing 變 0px)

Runtime status:
  sys.spacing tokens: {{ stats.spacing }}
  sys.radius tokens: {{ stats.radius }}
  total: {{ stats.total }}
  {{ stats.unresolved.length > 0 ? '❌ unresolved: ' + stats.unresolved.join(', ') : '✅ all resolved' }}

Used by Button (via comp.button.{size}.* arbitrary value):
  Padding (alias chain comp.button.{size} → sys.spacing.{xs/md/lg/xl}):
    sm:  px-[var(--comp-button-sm-padding-h)]  → sys.spacing.xs (8px)
         py-[var(--comp-button-sm-padding-v)]  → sys.spacing.2xs (4px)
    md:  px → sys.spacing.md (16px)  py → sys.spacing.xs (8px)
    lg:  px → sys.spacing.lg (24px)  py → sys.spacing.sm (12px)
    xl:  px → sys.spacing.xl (32px)  py → sys.spacing.sm (12px)

  Gap (alias chain comp.button.{size}.gap):
    sm: gap-[var(--comp-button-sm-gap)] → sys.spacing.2xs (4px)
    md/lg/xl: gap → sys.spacing.xs (8px)

  Border-radius (single token, 全 16 buttons 共用):
    rounded-[var(--comp-button-border-radius)] → sys.radius.md (8px)</pre>
    `,
  }),
}
