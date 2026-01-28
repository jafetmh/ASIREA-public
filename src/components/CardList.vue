<template>
  <div class="ccards" v-if="items.length > 0">
    <CardItem v-for="(item, i) in items" :key="i" :data="item" :is-button="showButton" :button-text="buttonText"
      :target-blank="targetBlank" @show-modal="showModal" />
    <InfoModal v-if="selectedItem" :item="selectedItem" @close="selectedItem = null" />
  </div>
  <div v-else-if="loaded" class="cempty-state">
    <div class="cempty-container">
      <i :class="['bi', emptyIcon, 'cempty-icon']"></i>
      <p class="cempty-text">{{ emptyText }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import CardItem from './CardItem.vue'
import InfoModal from './InfoModal.vue'
import { useSignalR } from '../signalR/useSignalR';

const baseApiURL = import.meta.env.VITE_API_URL;

const props = defineProps({
  dataUrl: { type: String, required: true },
  signalEvents: { type: Object, required: true },
  showButton: { type: Boolean, default: false },
  buttonText: { type: String, default: '' },
  targetBlank: { type: Boolean, default: false },
  emptyText: { type: String, default: 'No hay publicaciones disponibles por el momento.' },
  emptyIcon: { type: String, default: 'bi-newspaper' }
})

const items = ref([])
const selectedItem = ref(null)
const loaded = ref(false)

const showModal = (item) => {
  selectedItem.value = item
}

const { on, isConnected } = useSignalR(`${baseApiURL}` + "appHub");

onMounted(async () => {
  try {
    let res = null;
    if (props.dataUrl.startsWith("src")) { //json local
      res = await fetch(props.dataUrl);
      items.value = await res.json()
    } else {
      res = await fetch(`${baseApiURL}api/${props.dataUrl}`)
      const response = await res.json()
      items.value = response.data;
    }

  } catch (e) {
    console.error('Error cargando de solicitud:', e)
  } finally {
    loaded.value = true
  }
})

// Suscribe listeners de SignalR cuando la conexión esté lista
watch(isConnected, (connected) => {
  if (connected && props.signalEvents) {
    const { createdEventName, updatatedEventName, deletedEventName } = props.signalEvents;

    on(createdEventName, data => {
      console.log('SignalR evento recibido:', createdEventName, data);
      items.value.unshift(data);
    });

    on(updatatedEventName, data => {
      console.log('SignalR evento recibido:', updatatedEventName, data);
      const index = items.value.findIndex(i => i.id === data.id);
      if (index !== -1) items.value[index] = data;
    });

    on(deletedEventName, data => {
      console.log('SignalR evento recibido:', deletedEventName, data);
      items.value = items.value.filter(i => i.id !== data.id);
    });
  }
}, { immediate: true })
</script>
