<script setup>
import Button from './components/Button.vue'

const variants = ['primary', 'secondary', 'tertiary', 'ghost']
const sizes = ['sm', 'md', 'lg', 'xl']
</script>

<template>
  <main class="p-8 max-w-6xl mx-auto">
    <header class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Ruten DS v2 — Button</h1>
      <p class="text-sm opacity-60">
        Figma matrix mirror（用 "Button" label 對齊 node 144:2895，便於視覺對比）
      </p>
    </header>

    <section class="mb-12">
      <h2 class="text-lg font-semibold mb-4">Figma matrix mirror — label only（4 variant × 4 size）</h2>
      <div class="space-y-3 bg-gray-50 p-6 rounded">
        <div v-for="variant in variants" :key="variant" class="flex items-center gap-4">
          <span class="w-20 text-xs opacity-60">{{ variant }}</span>
          <Button v-for="size in sizes" :key="size" :variant="variant" :size="size">
            Button
          </Button>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-lg font-semibold mb-4">Figma matrix mirror — icon-label（4 variant × 4 size）</h2>
      <div class="space-y-3 bg-gray-50 p-6 rounded">
        <div v-for="variant in variants" :key="variant" class="flex items-center gap-4">
          <span class="w-20 text-xs opacity-60">{{ variant }}</span>
          <Button v-for="size in sizes" :key="size" :variant="variant" :size="size" icon-left="heart">
            Button
          </Button>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-lg font-semibold mb-4">Figma matrix mirror — label-icon（4 variant × 4 size）</h2>
      <div class="space-y-3 bg-gray-50 p-6 rounded">
        <div v-for="variant in variants" :key="variant" class="flex items-center gap-4">
          <span class="w-20 text-xs opacity-60">{{ variant }}</span>
          <Button v-for="size in sizes" :key="size" :variant="variant" :size="size" icon-right="heart">
            Button
          </Button>
        </div>
      </div>
    </section>

    <section class="mb-12">
      <h2 class="text-lg font-semibold mb-4">Form variant + Disabled</h2>
      <div class="space-y-3">
        <div class="flex items-center gap-3">
          <span class="w-24 text-xs opacity-60">icon-only</span>
          <Button v-for="variant in variants" :key="variant" :variant="variant" icon-only="close" />
        </div>
        <div class="flex items-center gap-3">
          <span class="w-24 text-xs opacity-60">disabled</span>
          <Button v-for="variant in variants" :key="variant" :variant="variant" disabled icon-left="plus">
            Button
          </Button>
        </div>
      </div>
    </section>
  </main>
</template>
