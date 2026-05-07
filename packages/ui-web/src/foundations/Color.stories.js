export default {
  title: 'Foundations/Color',
  parameters: {
    docs: {
      description: {
        component: 'sys.color 是 semantic role layer，全部 alias 到 ref.color 原子色階。',
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

export const SysColor = {
  name: 'sys.color (semantic)',
  render: () => ({
    setup() {
      return { colors: SYS_COLORS }
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem;">
        <div v-for="name in colors" :key="name" style="display: flex; flex-direction: column; gap: 0.5rem;">
          <div :style="{
            background: 'var(--sys-color-' + name + ')',
            height: '72px',
            borderRadius: '8px',
            border: '1px solid #e5e7eb',
          }"></div>
          <code style="font-size: 12px; color: #444;">sys.color.{{ name }}</code>
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
