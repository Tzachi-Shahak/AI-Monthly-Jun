<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  /** Emoji name: wow | heart | thinking | lol | star | thumbs-up | clap | fire */
  name: { type: String, required: true },
  /** CSS height (width auto-scales) */
  size: { type: String, default: '64px' },
})

const src = computed(() => `/emojis/${props.name}.png`)
</script>

<template>
  <img
    :src="src"
    :alt="name"
    :style="{ height: size, width: 'auto', display: 'inline-block', verticalAlign: 'middle' }"
    draggable="false"
  />
</template>
