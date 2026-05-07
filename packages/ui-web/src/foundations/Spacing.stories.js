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
    setup() {
      return { items: SYS_SPACING }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 0.75rem;">
        <div v-for="item in items" :key="item.name" style="display: flex; gap: 1.5rem; align-items: center;">
          <code style="font-size: 12px; width: 140px; color: #666; flex-shrink: 0;">sys.spacing.{{ item.name }}</code>
          <code style="font-size: 12px; width: 50px; color: #999;">{{ item.value }}px</code>
          <div :style="{ width: 'var(--sys-spacing-' + item.name + ')', height: '20px', background: 'var(--ref-color-orange-500)', borderRadius: '2px' }"></div>
        </div>
      </div>
    `,
  }),
}

export const SysRadius = {
  name: 'sys.radius',
  render: () => ({
    setup() {
      return { items: SYS_RADIUS }
    },
    template: `
      <div style="display: flex; gap: 1.5rem; flex-wrap: wrap;">
        <div v-for="item in items" :key="item.name" style="display: flex; flex-direction: column; gap: 0.5rem; align-items: center;">
          <div :style="{
            width: '80px',
            height: '80px',
            background: 'var(--ref-color-orange-500)',
            borderRadius: 'var(--sys-radius-' + item.name + ')',
          }"></div>
          <code style="font-size: 12px; color: #666;">radius.{{ item.name }}</code>
          <code style="font-size: 11px; color: #999;">{{ item.value === 9999 ? 'full' : item.value + 'px' }}</code>
        </div>
      </div>
    `,
  }),
}
