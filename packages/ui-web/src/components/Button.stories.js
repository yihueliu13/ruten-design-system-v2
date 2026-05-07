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

export const RuntimeMatrix = {
  name: 'Runtime Matrix',
  parameters: {
    docs: {
      description: {
        story:
          'Runtime verification surface — 把組合狀態攤開檢查。每個 matrix 下方附 runtime source + verified 條列，對齊 token chain。',
      },
    },
  },
  render: () => ({
    components: { Button },
    setup() { return { variants: VARIANTS, sizes: SIZES } },
    template: `
      <div class="flex flex-col gap-10">

        <section class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-800">1. Variant × Size</h3>
          <div class="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg">
            <div v-for="v in variants" :key="v" class="flex gap-4 items-center">
              <code class="text-xs w-20 text-gray-500">{{ v }}</code>
              <Button v-for="s in sizes" :key="s" :variant="v" :size="s">Button</Button>
            </div>
          </div>
          <pre class="text-[11px] text-gray-500 leading-relaxed p-3 bg-gray-50 rounded font-mono whitespace-pre-wrap">Runtime source:
  Button.vue
  → Tailwind utility (@theme bridge)
  → tokens.css
  → DESIGN-shared.md

Verified:
  - 4 variant × 4 size = 16 buttons
  - bg / text / border-color / border-width 對齊 v1 token chain
  - min-height / padding-h / padding-v / gap / font-size 對齊 comp.button.{size}.*
  - border-radius = sys.radius.md (8px) 全 16 buttons 一致
  - primary / ghost border-width = 0（v1 無 border-width token，Tailwind border-0 對齊）</pre>
        </section>

        <section class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-800">2. Form Variant</h3>
          <div class="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg">
            <div class="flex gap-4 items-center">
              <code class="text-xs w-20 text-gray-500">label</code>
              <Button v-for="v in variants" :key="v" :variant="v">Button</Button>
            </div>
            <div class="flex gap-4 items-center">
              <code class="text-xs w-20 text-gray-500">icon-label</code>
              <Button v-for="v in variants" :key="v" :variant="v" iconLeft="plus">Button</Button>
            </div>
            <div class="flex gap-4 items-center">
              <code class="text-xs w-20 text-gray-500">label-icon</code>
              <Button v-for="v in variants" :key="v" :variant="v" iconRight="arrow-right">Button</Button>
            </div>
            <div class="flex gap-4 items-center">
              <code class="text-xs w-20 text-gray-500">icon-only</code>
              <Button v-for="v in variants" :key="v" :variant="v" iconOnly="close" />
            </div>
          </div>
          <pre class="text-[11px] text-gray-500 leading-relaxed p-3 bg-gray-50 rounded font-mono whitespace-pre-wrap">Runtime source:
  Button.vue ← Icon.vue
  Icon SVG paths from Figma file JntRm8aTeyw1HPdowgSBk4

Verified:
  - 4 form × 4 variant = 16 buttons
  - icon currentColor pattern: SVG fill="currentColor" 自動繼承 button text-color
  - icon-size: 16px (sm) / 24px (md/lg/xl) via comp.button.{size}.icon-size
  - SVG viewBox 統一 24×24 + Figma inset translate（path 不拉滿 frame）
  - iconOnly mode: aspect-square + padding-h 改用 padding-v 對稱
  - SVG width/height 必須用 :style 不能用 attribute（var() 不解析）</pre>
        </section>

        <section class="flex flex-col gap-3">
          <h3 class="text-sm font-semibold text-gray-800">3. Disabled</h3>
          <div class="flex flex-col gap-3 p-4 border border-gray-200 rounded-lg">
            <div class="flex gap-4 items-center">
              <code class="text-xs w-20 text-gray-500">enabled</code>
              <Button v-for="v in variants" :key="v" :variant="v" iconLeft="plus">Button</Button>
            </div>
            <div class="flex gap-4 items-center">
              <code class="text-xs w-20 text-gray-500">disabled</code>
              <Button v-for="v in variants" :key="v" :variant="v" disabled iconLeft="plus">Button</Button>
            </div>
          </div>
          <pre class="text-[11px] text-gray-500 leading-relaxed p-3 bg-gray-50 rounded font-mono whitespace-pre-wrap">Runtime source:
  Tailwind state utility: disabled:opacity-[var(--sys-opacity-disabled)]
                          disabled:cursor-not-allowed

Verified:
  - 4 variant × 2 state = 8 buttons
  - opacity = 0.38 (sys.opacity.disabled → ref.opacity.disabled)
  - cursor-not-allowed via Tailwind disabled: modifier
  - icon + text 同時受 parent opacity 影響（currentColor + opacity 繼承）
  - sizing / padding / radius 不變（disabled 只改 opacity 不改 layout）</pre>
        </section>

      </div>
    `,
  }),
}
