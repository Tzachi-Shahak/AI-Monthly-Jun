<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  /** Icon name: always-on | ancor | bolt | boost | bow | employer-branding | eye |
   *  flawless | globe | lamp | learning-systems | loyalty | monetize-icon |
   *  participation | roi | roi-1 | talent | up-to-date | upskill | values */
  name: { type: String, required: true },
  /** Brand color: red | blue | pink | yellow | green | black | white */
  color: { type: String, default: 'red' },
  /** CSS height (width auto-scales) */
  size: { type: String, default: '48px' },
})

const src = computed(() => `/icons/${props.color}/${props.name}.png`)
</script>

<template>
  <img
    :src="src"
    :alt="name"
    :style="{ height: size, width: 'auto', display: 'inline-block', verticalAlign: 'middle' }"
    draggable="false"
  />
</template>
