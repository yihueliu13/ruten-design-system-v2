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
        Step 2: Variant × Size × Form variant matrix. Token: 352.
      </p>
    </header>

    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-4">Variant × Size matrix（label only）</h2>
      <div class="space-y-4">
        <div v-for="size in sizes" :key="size" class="flex items-center gap-3">
          <span class="w-12 text-xs opacity-60 uppercase">{{ size }}</span>
          <Button v-for="variant in variants" :key="variant" :variant="variant" :size="size">
            {{ variant }}
          </Button>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-4">Form variant（icon-label / label-icon / icon-only）</h2>
      <div class="space-y-4">
        <div class="flex items-center gap-3">
          <span class="w-24 text-xs opacity-60">icon-label</span>
          <Button v-for="variant in variants" :key="variant" :variant="variant" icon-left="plus">
            Add item
          </Button>
        </div>
        <div class="flex items-center gap-3">
          <span class="w-24 text-xs opacity-60">label-icon</span>
          <Button v-for="variant in variants" :key="variant" :variant="variant" icon-right="arrow-right">
            Next
          </Button>
        </div>
        <div class="flex items-center gap-3">
          <span class="w-24 text-xs opacity-60">icon-only</span>
          <Button v-for="variant in variants" :key="variant" :variant="variant" icon-only="close" />
        </div>
        <div class="flex items-center gap-3">
          <span class="w-24 text-xs opacity-60">heart filled</span>
          <Button v-for="variant in variants" :key="variant" :variant="variant" icon-left="heart">
            Favorite
          </Button>
        </div>
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-4">Icon-only × Size</h2>
      <div class="flex items-center gap-3">
        <Button v-for="size in sizes" :key="size" :size="size" variant="primary" icon-only="search" />
      </div>
    </section>

    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-4">Disabled state</h2>
      <div class="flex items-center gap-3">
        <Button v-for="variant in variants" :key="variant" :variant="variant" disabled icon-left="plus">
          {{ variant }} disabled
        </Button>
      </div>
    </section>
  </main>
</template>
