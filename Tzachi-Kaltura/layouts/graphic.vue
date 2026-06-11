<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  color: { type: String, default: 'red' }, // red | blue | pink | yellow | green
})

const circleStyle = computed(() => {
  const map: Record<string, string> = {
    red:    'var(--k-red)',
    blue:   'var(--k-blue)',
    pink:   'var(--k-pink)',
    yellow: 'var(--k-yellow)',
    green:  'var(--k-green)',
  }
  return { background: map[props.color] ?? map.red }
})
</script>

<template>
  <div class="slidev-layout graphic">
    <!-- The circle — the hero of this layout -->
    <div class="k-graphic-circle" :style="circleStyle" />

    <!-- Logo mark top-right -->
    <img
      src="/logo-mark.png"
      class="absolute z-10 pointer-events-none"
      style="top: 24px; right: 28px; height: 38px; opacity: 0.6;"
      alt="Kaltura"
    />

    <!-- Optional text content (white, centered below circle) -->
    <div v-if="$slots.default" class="k-graphic-content z-10">
      <slot />
    </div>

    <!-- Rainbow bar -->
    <div class="flex-none k-rainbow" style="height: 6px;" />
  </div>
</template>
