<script setup>
import { RouterView } from 'vue-router';
import HamburgerMenu from '@/components/templates/HamburgerMenu.vue'
import Header from '@/components/templates/Header.vue'
import Footer from '@/components/templates/Footer.vue'
import { ref } from 'vue';

const isToggled = ref(false)

const toggleMenu = () => {
  isToggled.value = !isToggled.value;
}

</script>

<template>
  <HamburgerMenu :show="isToggled"/>
  <Header @toggleMenu="toggleMenu"></Header>
  <main>
    <RouterView></RouterView>
  </main>
  <Footer></Footer>
</template>
