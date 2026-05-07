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
    setup() {
      return { scale: SCALE }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div v-for="item in scale" :key="item.name" style="display: flex; gap: 1.5rem; align-items: baseline; padding-bottom: 0.5rem; border-bottom: 1px solid #f3f4f6;">
          <code style="font-size: 12px; width: 140px; color: #666; flex-shrink: 0;">{{ item.name }}</code>
          <code style="font-size: 12px; width: 50px; color: #999; flex-shrink: 0;">{{ item.size }}px</code>
          <div :style="{ fontSize: 'var(--sys-typography-' + item.name.replace('.', '-') + ')', lineHeight: 1.4 }">露天設計系統 Ruten DS — Aa Bb 123</div>
        </div>
      </div>
    `,
  }),
}

export const FontWeight = {
  name: 'sys.typography.weight',
  render: () => ({
    setup() {
      return { weights: WEIGHTS }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem;">
        <div v-for="w in weights" :key="w.name" style="display: flex; gap: 1.5rem; align-items: baseline;">
          <code style="font-size: 12px; width: 140px; color: #666; flex-shrink: 0;">weight.{{ w.name }}</code>
          <code style="font-size: 12px; width: 50px; color: #999;">{{ w.value }}</code>
          <div :style="{ fontWeight: 'var(--sys-typography-weight-' + w.name + ')', fontSize: '18px' }">露天設計系統 Ruten DS — Aa Bb 123</div>
        </div>
      </div>
    `,
  }),
}

export const FontFamily = {
  name: 'sys.typography.font-family',
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1.5rem;">
        <div>
          <code style="font-size: 12px; color: #666;">sys.typography.font-family.primary</code>
          <div style="font-family: var(--sys-typography-font-family-primary); font-size: 24px; margin-top: 0.5rem;">
            PingFang TC — 露天市集 一抽入魂 預購
          </div>
        </div>
        <div>
          <code style="font-size: 12px; color: #666;">sys.typography.font-family.english</code>
          <div style="font-family: var(--sys-typography-font-family-english); font-size: 24px; margin-top: 0.5rem;">
            SF Pro — Ruten Design System v2
          </div>
        </div>
      </div>
    `,
  }),
}
