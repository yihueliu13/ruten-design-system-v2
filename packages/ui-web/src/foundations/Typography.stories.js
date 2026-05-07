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
