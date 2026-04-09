<template>
  <div class="ccards" v-if="items.length > 0">
    <CardItem v-for="(item, i) in items" :key="i" :data="item" :is-button="showButton" :button-text="buttonText"
      :target-blank="targetBlank" @show-modal="showModal" />
    <InfoModal v-if="selectedItem" :item="selectedItem" @close="selectedItem = null" />
  </div>
  <div v-else-if="loaded" class="empty-state">
    <p class="empty-text">{{ emptyText }}</p>
    <button title="Recargar" class="refresh-btn" @click="fetchData" :disabled="refreshing">Recargar
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import CardItem from './CardItem.vue'
import InfoModal from './InfoModal.vue'
import { useSignalR } from '../signalR/useSignalR';
import refreshIcon from './icons/refreshIcon.vue';

const baseApiURL = import.meta.env.VITE_API_URL;

const props = defineProps({
  dataUrl: { type: String, required: false },
  showButton: { type: Boolean, default: false },
  buttonText: { type: String, default: '' },
  targetBlank: { type: Boolean, default: false },
  emptyText: { type: String, default: 'No hay publicaciones disponibles por el momento.' },
  emptyIcon: { type: String, default: 'bi-newspaper' },
  categoriaSlug: { type: String, required: true }
})

const items = ref([])
const selectedItem = ref(null)
const loaded = ref(false)
const refreshing = ref(false)

const showModal = (item) => {
  selectedItem.value = item
}

const { on, isConnected } = useSignalR(`${baseApiURL}` + "appHub");

async function fetchData() {
  refreshing.value = true
  try {
    let res = null;
    if (props.dataUrl.startsWith("src")) {
      res = await fetch(props.dataUrl);
      items.value = await res.json()
    } else {
      res = await fetch(`${baseApiURL}/api/publicaciones?categoriaSlug=${props.categoriaSlug}`)
      const response = await res.json()
      items.value = response.data;
    }
  } catch (e) {
    console.error('Error cargando de solicitud:', e)
  } finally {
    loaded.value = true
    refreshing.value = false
  }
}

onMounted(fetchData)

// Suscribe listeners de SignalR cuando la conexión esté lista
watch(isConnected, (connected) => {
  if (connected) {
    on('PublicacionCreada', data => {
      console.log('SignalR evento recibido: PublicacionCreada', data);
      if (data.categoria.slug === props.categoriaSlug) items.value.unshift(data);
    });

    on('PublicacionActualizada', data => {
      console.log('SignalR evento recibido: PublicacionActualizada', data);
      const index = items.value.findIndex(i => i.id === data.id);
      if (index !== -1) items.value[index] = data;
    });

    on('PublicacionEliminada', data => {
      console.log('SignalR evento recibido: PublicacionEliminada', data);
      items.value = items.value.filter(i => i.id !== data.id);
    });
  }
}, { immediate: true })
</script>

<style scoped>
.empty-state {
  background-color: var(--bg-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1rem;
}

.empty-text {
  color: var(--secondary-text-color);
  text-align: center;
  margin: 0;
}

.refresh-btn {
  margin-left: 5px;
  background-color: transparent;
  border: none;
  text-decoration: underline;
}

.empty-text,
.refresh-btn {
  font-style: oblique;
  font-size: 1.2rem;
}
</style>
