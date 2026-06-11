<script setup lang="ts">
import { ref, computed } from 'vue'
import { onSlideEnter, onSlideLeave } from '@slidev/client'

const props = defineProps({
  /**
   * Background variant:
   *   white      – logo on white (default, good for opening/closing on light decks)
   *   grey       – logo on grey  (good for dark-themed sections)
   *   grey-square – square crop version
   */
  bg: { type: String, default: 'white' },
})

const videoEl = ref<HTMLVideoElement | null>(null)

// Restart playback every time this slide becomes active
onSlideEnter(() => {
  if (videoEl.value) {
    videoEl.value.currentTime = 0
    videoEl.value.play()
  }
})

onSlideLeave(() => {
  if (videoEl.value) {
    videoEl.value.pause()
  }
})

const mp4Src = computed(() => {
  const map: Record<string, string> = {
    white:        '/videos/logo-white.mp4',
    grey:         '/videos/logo-grey.mp4',
    'grey-square': '/videos/logo-grey-square.mp4',
  }
  return map[props.bg] ?? map.white
})

const bgColor = computed(() =>
  props.bg === 'white' ? '#ffffff' : '#3a3a3a'
)
</script>

<template>
  <div
    class="slidev-layout logo relative h-full flex items-center justify-center overflow-hidden"
    :style="{ background: bgColor }"
  >
    <!-- Logo motion video — autoplays on slide enter, no controls -->
    <video
      ref="videoEl"
      class="max-w-full max-h-full object-contain"
      autoplay
      muted
      playsinline
      :style="{ width: '100%', height: '100%' }"
    >
      <!-- .mov alpha for Safari (transparent overlay support) -->
      <source src="/videos/logo-alpha.mov" type="video/quicktime" />
      <!-- MP4 fallback for all other browsers -->
      <source :src="mp4Src" type="video/mp4" />
    </video>

    <!-- Optional content slot (shown below/over video if needed) -->
    <div
      v-if="$slots.default"
      class="absolute inset-0 z-10"
    >
      <slot />
    </div>
  </div>
</template>
