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
  <div class="slidev-layout cover" :style="style">
    <!-- Full-slide background watermark starburst (right side, large, very faint) -->
    <img
      src="/logo-mark.png"
      class="absolute pointer-events-none select-none"
      style="right: -8%; top: 50%; transform: translateY(-50%); width: 52%; opacity: 0.055;"
      aria-hidden="true"
    />

    <!-- Logo top-left -->
    <div class="flex-none px-12 pt-10 z-10">
      <img src="/logo-full.png" style="height: 38px;" alt="Kaltura" />
    </div>

    <!-- Main content -->
    <div class="flex-1 flex flex-col justify-center px-16 z-10" style="padding-bottom: 32px;">
      <slot />
    </div>

    <!-- 8-color spectrum bar at bottom -->
    <div class="flex-none k-rainbow" style="height: 10px;" />
  </div>
</template>
