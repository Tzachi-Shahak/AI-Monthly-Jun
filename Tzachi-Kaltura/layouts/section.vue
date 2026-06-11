<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  color: { type: String, default: 'red' }, // red | blue | pink | yellow | green
})

const circleColor = computed(() => {
  const map: Record<string, string> = {
    red:    'var(--k-red)',
    blue:   'var(--k-blue)',
    pink:   'var(--k-pink)',
    yellow: 'var(--k-yellow)',
    green:  'var(--k-green)',
  }
  return map[props.color] ?? map.red
})
</script>

<template>
  <div class="slidev-layout section">
    <!-- Large decorative circle — bleeds off the right edge -->
    <div
      class="absolute rounded-full pointer-events-none"
      :style="{
        background: circleColor,
        opacity: '0.12',
        width:  'clamp(320px, 60vh, 640px)',
        height: 'clamp(320px, 60vh, 640px)',
        right:  'calc(clamp(320px, 60vh, 640px) * -0.4)',
        top:    '50%',
        transform: 'translateY(-50%)',
      }"
    />

    <!-- Rainbow accent: left vertical bar -->
    <div
      class="absolute top-0 left-0 bottom-0 k-rainbow"
      style="width: 6px;"
    />

    <!-- Logo mark, top-right -->
    <img
      src="/logo-mark.png"
      class="absolute z-10 pointer-events-none select-none"
      style="top: 24px; right: 28px; height: 40px; opacity: 0.7;"
      alt="Kaltura"
    />

    <!-- Section content -->
    <div class="flex-1 flex flex-col justify-center pl-16 pr-24 z-10">
      <slot />
    </div>

    <!-- Rainbow bar at bottom -->
    <div class="flex-none k-rainbow" style="height: 6px;" />
  </div>
</template>
