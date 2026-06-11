<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps({
  /** Shape name: play | pause | stop | rec | fastforward | play-in-circle |
   *  chat | long-chat | screen | eye | star | path | logo-shape-large */
  name: { type: String, required: true },
  /** Brand color: red | blue | pink | yellow | green | black | white */
  color: { type: String, default: 'red' },
  /** CSS width  (height scales proportionally via object-fit) */
  width: { type: String, default: undefined },
  /** CSS height */
  height: { type: String, default: '80px' },
})

// "pause" is a friendly alias — the original file is named "paude"
const fileName = computed(() =>
  props.name === 'pause' ? 'paude' : props.name
)

const src = computed(() =>
  `/shapes/${props.color}/${fileName.value}.svg`
)

const imgStyle = computed(() => ({
  width:  props.width  ?? 'auto',
  height: props.height,
  display: 'inline-block',
  verticalAlign: 'middle',
}))
</script>

<template>
  <img :src="src" :style="imgStyle" :alt="name" draggable="false" />
</template>
