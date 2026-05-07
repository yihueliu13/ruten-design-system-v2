import Button from './Button.vue'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Button — 4 variant × 4 size × 4 form variant × 4 state。runtime-verified 對齊 Figma node 144:2895。詳見 specs/components/Button.spec.mdx。',
      },
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
    },
    iconLeft: {
      control: 'select',
      options: [null, 'plus', 'search', 'arrow-right', 'close', 'heart'],
    },
    iconRight: {
      control: 'select',
      options: [null, 'plus', 'search', 'arrow-right', 'close', 'heart'],
    },
    iconOnly: {
      control: 'select',
      options: [null, 'plus', 'search', 'arrow-right', 'close', 'heart'],
    },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    variant: 'primary',
    size: 'md',
    label: 'Button',
    disabled: false,
  },
}

const VARIANTS = ['primary', 'secondary', 'tertiary', 'ghost']
const SIZES = ['sm', 'md', 'lg', 'xl']

export const Playground = {
  render: (args) => ({
    components: { Button },
    setup() { return { args } },
    template: `<Button v-bind="args">{{ args.label }}</Button>`,
  }),
}

export const Variants = {
  name: '4 Variants',
  render: () => ({
    components: { Button },
    setup() { return { variants: VARIANTS } },
    template: `
      <div class="flex gap-4">
        <Button v-for="v in variants" :key="v" :variant="v">{{ v }}</Button>
      </div>
    `,
  }),
}

export const Sizes = {
  name: '4 Sizes',
  render: () => ({
    components: { Button },
    setup() { return { sizes: SIZES } },
    template: `
      <div class="flex gap-4 items-center">
        <Button v-for="s in sizes" :key="s" :size="s">{{ s }}</Button>
      </div>
    `,
  }),
}

export const FullMatrix = {
  name: 'Full matrix (variant × size)',
  render: () => ({
    components: { Button },
    setup() { return { variants: VARIANTS, sizes: SIZES } },
    template: `
      <div class="flex flex-col gap-3">
        <div v-for="v in variants" :key="v" class="flex gap-4 items-center">
          <code class="text-xs w-20 text-gray-500">{{ v }}</code>
          <Button v-for="s in sizes" :key="s" :variant="v" :size="s">Button</Button>
        </div>
      </div>
    `,
  }),
}

export const FormVariants = {
  name: 'Form variants',
  render: () => ({
    components: { Button },
    template: `
      <div class="flex gap-4 items-center">
        <Button>label</Button>
        <Button iconLeft="plus">icon-label</Button>
        <Button iconRight="arrow-right">label-icon</Button>
        <Button iconOnly="close" />
      </div>
    `,
  }),
}

export const Disabled = {
  render: () => ({
    components: { Button },
    setup() { return { variants: VARIANTS } },
    template: `
      <div class="flex gap-4">
        <Button v-for="v in variants" :key="v" :variant="v" disabled iconLeft="plus">{{ v }}</Button>
      </div>
    `,
  }),
}

export const IconCurrentColor = {
  name: 'Icon currentColor pattern',
  parameters: {
    docs: {
      description: {
        story:
          'Icon SVG fill="currentColor"，自動繼承 button text-color。切 variant 時 icon 顏色跟著變，不需要 4 variant × N icon 的 cross-product token。',
      },
    },
  },
  render: () => ({
    components: { Button },
    setup() { return { variants: VARIANTS } },
    template: `
      <div class="flex flex-col gap-4">
        <div class="flex gap-4">
          <Button v-for="v in variants" :key="v" :variant="v" iconLeft="heart">Favorite</Button>
        </div>
        <div class="flex gap-4">
          <Button v-for="v in variants" :key="v" :variant="v" iconOnly="search" />
        </div>
      </div>
    `,
  }),
}
