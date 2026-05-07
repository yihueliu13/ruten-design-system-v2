<script setup>
import Button from './components/Button.vue'

const variants = ['primary', 'secondary', 'tertiary', 'ghost']
const sizes = ['sm', 'md', 'lg', 'xl']
</script>

<template>
  <main class="p-8 max-w-5xl mx-auto">
    <header class="mb-8">
      <h1 class="text-3xl font-bold mb-2">Ruten DS v2 — Button</h1>
      <p class="text-sm opacity-60">
        First runtime — Step 2. Token: 229. Component: Button × 4 variants × 4 sizes.
      </p>
    </header>

    <section class="mb-10">
      <h2 class="text-lg font-semibold mb-4">Variant × Size matrix</h2>
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
      <h2 class="text-lg font-semibold mb-4">Disabled state</h2>
      <div class="flex items-center gap-3">
        <Button v-for="variant in variants" :key="variant" :variant="variant" disabled>
          {{ variant }} disabled
        </Button>
      </div>
    </section>
  </main>
</template>
