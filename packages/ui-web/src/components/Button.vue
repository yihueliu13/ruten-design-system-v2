<script setup>
import { computed } from 'vue'

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
})

const sizeStyle = computed(() => ({
  paddingInline: `var(--comp-button-${props.size}-padding-h)`,
  paddingBlock: `var(--comp-button-${props.size}-padding-v)`,
  minHeight: `var(--comp-button-${props.size}-min-height)`,
  gap: `var(--comp-button-${props.size}-gap)`,
  fontSize: `var(--comp-button-${props.size}-font-size)`,
}))

const variantStyle = computed(() => {
  const v = props.variant
  return {
    background: `var(--comp-button-${v}-default-background)`,
    color: `var(--comp-button-${v}-default-text-color)`,
    borderColor: `var(--comp-button-${v}-default-border-color, transparent)`,
    borderWidth: `var(--comp-button-${v}-default-border-width, 0)`,
    borderStyle: 'solid',
  }
})
</script>

<template>
  <button
    class="inline-flex items-center justify-center cursor-pointer transition-opacity disabled:cursor-not-allowed"
    :class="[
      'rounded-[var(--comp-button-border-radius)]',
      'font-[number:var(--comp-button-font-weight)]',
    ]"
    :style="[sizeStyle, variantStyle, { opacity: disabled ? 'var(--sys-opacity-disabled)' : 1 }]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
