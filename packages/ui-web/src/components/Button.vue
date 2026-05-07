<script setup>
import { computed } from 'vue'
import Icon from './Icon.vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: v => ['primary', 'secondary', 'tertiary', 'ghost'].includes(v),
  },
  size: {
    type: String,
    default: 'md',
    validator: s => ['sm', 'md', 'lg', 'xl'].includes(s),
  },
  disabled: { type: Boolean, default: false },
  iconLeft: { type: String, default: null },
  iconRight: { type: String, default: null },
  iconOnly: { type: String, default: null },
})

// Variant → Tailwind utility（吃 @theme 接進來的 sys.color）
// 露天 brand pattern: primary 是「深底（on-surface）+ 橘字（primary）」, 不是「橘底白字」
// v1 token 對 primary / ghost 沒設 border-width（無 border），對 secondary / tertiary 設 1px
const VARIANT_CLASS = {
  primary: 'bg-on-surface text-primary border-0',
  secondary: 'bg-primary text-on-primary border border-primary',
  tertiary: 'bg-surface text-primary border border-primary',
  ghost: 'bg-surface text-primary border-0',
}

// Size → Tailwind arbitrary value，保留 comp.button.{size}.* 完整 token chain
// 全部 class string 寫死讓 Tailwind JIT 掃得到
const SIZE_CLASS = {
  sm: 'min-h-[var(--comp-button-sm-min-height)] py-[var(--comp-button-sm-padding-v)] gap-[var(--comp-button-sm-gap)] text-[length:var(--comp-button-sm-font-size)]',
  md: 'min-h-[var(--comp-button-md-min-height)] py-[var(--comp-button-md-padding-v)] gap-[var(--comp-button-md-gap)] text-[length:var(--comp-button-md-font-size)]',
  lg: 'min-h-[var(--comp-button-lg-min-height)] py-[var(--comp-button-lg-padding-v)] gap-[var(--comp-button-lg-gap)] text-[length:var(--comp-button-lg-font-size)]',
  xl: 'min-h-[var(--comp-button-xl-min-height)] py-[var(--comp-button-xl-padding-v)] gap-[var(--comp-button-xl-gap)] text-[length:var(--comp-button-xl-font-size)]',
}

// padding-h: label form 用 padding-h；iconOnly 改用 padding-v 做對稱
const PADDING_H_LABEL = {
  sm: 'px-[var(--comp-button-sm-padding-h)]',
  md: 'px-[var(--comp-button-md-padding-h)]',
  lg: 'px-[var(--comp-button-lg-padding-h)]',
  xl: 'px-[var(--comp-button-xl-padding-h)]',
}

const PADDING_H_ICONONLY = {
  sm: 'px-[var(--comp-button-sm-padding-v)]',
  md: 'px-[var(--comp-button-md-padding-v)]',
  lg: 'px-[var(--comp-button-lg-padding-v)]',
  xl: 'px-[var(--comp-button-xl-padding-v)]',
}

const buttonClass = computed(() => [
  // 共用 base layout
  'inline-flex items-center justify-center cursor-pointer transition-opacity',
  // 共用 token-driven props (radius / weight / disabled state)
  'rounded-[var(--comp-button-border-radius)]',
  'font-[number:var(--comp-button-font-weight)]',
  'disabled:cursor-not-allowed disabled:opacity-[var(--sys-opacity-disabled)]',
  // variant color
  VARIANT_CLASS[props.variant],
  // size (min-h / py / gap / font-size)
  SIZE_CLASS[props.size],
  // padding-h（label vs iconOnly）
  props.iconOnly ? PADDING_H_ICONONLY[props.size] : PADDING_H_LABEL[props.size],
  // iconOnly aspect-square
  props.iconOnly && 'aspect-square',
])

const iconSizeVar = computed(
  () => `var(--comp-button-${props.size}-icon-size)`,
)
</script>

<template>
  <button
    :class="buttonClass"
    :disabled="disabled"
    :aria-label="iconOnly || undefined"
  >
    <Icon v-if="iconOnly" :name="iconOnly" :size="iconSizeVar" />
    <template v-else>
      <Icon v-if="iconLeft" :name="iconLeft" :size="iconSizeVar" />
      <slot />
      <Icon v-if="iconRight" :name="iconRight" :size="iconSizeVar" />
    </template>
  </button>
</template>
