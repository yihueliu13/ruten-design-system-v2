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
