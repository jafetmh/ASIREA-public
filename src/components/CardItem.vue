<template>
  <div class="ccard" @mouseover="hover = true" @mouseleave="hover = false">
    <div class="ccardhead">{{ data.title }}</div>
    <div class="ccardbody">
      <img :src="data.img" class="ccardimg" />
      <div class="ccardtext" :class="hover ? 'animationin' : 'animationout'">
        <p>{{ shortText }}</p>
        <button class="btn btn-primary active ccarda" @click="$emit('show-modal', data)">
          Mostrar más
        </button>
      </div>
    </div>
    <div class="ccardfoot">
      <a v-if="isButton"
        class="btn btn-primary active ccarda"
        :href="data.link"
        :target="targetBlank ? '_blank' : '_self'"
      >
        {{ buttonText }}
      </a>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps({
  data: Object,
  isButton: Boolean,
  buttonText: String,
  targetBlank: Boolean
})

const hover = ref(false)
const shortText = computed(() =>
  props.data.text.length > 75 ? props.data.text.slice(0, 75) + '...' : props.data.text
)
</script>
