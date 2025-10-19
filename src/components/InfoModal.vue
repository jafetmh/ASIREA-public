<template>
  <div class="modal fade show d-block" tabindex="-1">
    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header ccardModalHead">
          <h4 class="modal-title">{{ item.titulo }}</h4>
        </div>
        <div class="modal-body ccardModalBody">
          <img :src="item.imagenUrl" class="ccardimg mb-3" />
          <p v-html="item.descripcion"></p>
        </div>
        <div class="modal-footer ccardModalFoot">
          <button class="btn btn-primary active ccarda" @click="$emit('close')">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object
})
</script>

<style scoped>
.modal {
  background-color: rgba(0, 0, 0, 0.6);
}
</style>
