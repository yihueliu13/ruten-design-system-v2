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

const sizeStyle = computed(() => ({
  paddingInline: props.iconOnly
    ? `var(--comp-button-${props.size}-padding-v)`
    : `var(--comp-button-${props.size}-padding-h)`,
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

const iconSizeVar = computed(
  () => `var(--comp-button-${props.size}-icon-size)`,
)
</script>

<template>
  <button
    class="inline-flex items-center justify-center cursor-pointer transition-opacity disabled:cursor-not-allowed"
    :class="[
      'rounded-[var(--comp-button-border-radius)]',
      'font-[number:var(--comp-button-font-weight)]',
      iconOnly && 'aspect-square',
    ]"
    :style="[
      sizeStyle,
      variantStyle,
      { opacity: disabled ? 'var(--sys-opacity-disabled)' : 1 },
    ]"
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
