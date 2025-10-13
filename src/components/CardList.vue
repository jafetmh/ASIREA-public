<template>
  <div class="ccards">
    <CardItem
      v-for="(item, i) in items"
      :key="i"
      :data="item"
      :is-button="showButton"
      :button-text="buttonText"
      :target-blank="targetBlank"
      @show-modal="showModal"
    />
    <InfoModal v-if="selectedItem" :item="selectedItem" @close="selectedItem = null" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import CardItem from './CardItem.vue'
import InfoModal from './InfoModal.vue'

const props = defineProps({
  jsonUrl: { type: String, required: true },
  showButton: { type: Boolean, default: false },
  buttonText: { type: String, default: '' },
  targetBlank: { type: Boolean, default: false }
})

const items = ref([])
const selectedItem = ref(null)

const showModal = (item) => {
  selectedItem.value = item
}

onMounted(async () => {
  try {
    const res = await fetch(props.jsonUrl)
    items.value = await res.json()
  } catch (e) {
    console.error('Error cargando JSON:', e)
  }
})
</script>
