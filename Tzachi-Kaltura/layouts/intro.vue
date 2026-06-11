<script setup lang="ts">
import { computed } from 'vue'
import type { CSSProperties } from 'vue'

const props = defineProps({
  background: { type: String, default: undefined },
})

const style = computed((): CSSProperties => {
  const bg = props.background
  if (!bg) return {}
  const isColor = bg[0] === '#' || bg.startsWith('rgb')
  return isColor
    ? { background: bg }
    : { backgroundImage: `url("${bg}")`, backgroundSize: 'cover', backgroundPosition: 'center', color: 'white' }
})
</script>

<template>
  <div class="slidev-layout intro" :style="style">
    <!-- Faint watermark starburst, left side -->
    <img
      src="/logo-mark.png"
      class="absolute pointer-events-none select-none"
      style="left: -10%; top: 50%; transform: translateY(-50%); width: 50%; opacity: 0.06;"
      aria-hidden="true"
    />

    <!-- Logo top-right (white-compatible: use mark only on dark bg) -->
    <div class="flex-none flex justify-end px-12 pt-10 z-10">
      <img src="/logo-mark.png" style="height: 38px; opacity: 0.8;" alt="Kaltura" />
    </div>

    <!-- Content -->
    <div class="flex-1 flex flex-col justify-center px-16 z-10" style="padding-bottom: 24px;">
      <slot />
    </div>

    <!-- Rainbow bar at bottom -->
    <div class="flex-none k-rainbow" style="height: 10px;" />
  </div>
</template>
