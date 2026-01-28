<template>
  <header class="container-fluid" :class="{ 'header-transparent': isScrolled }">
    <!-- Móvil -->
    <div class="mainHamburger">
      <div class="cnavmovil">
        <a class="ctitle" href="/">
          <img src="/images/logo.png" alt="logo" />
          <span class="chidemovil">ASIREA</span>
        </a>
        <a id="hamburgerMenuButton" class="ctitle" @click="$emit('toggleMenu')">
          <i class="bi bi-list clist"></i>
        </a>
      </div>
    </div>

    <!-- Escritorio -->
    <div class="row chead mainMenu">
      <div class="col-md-2 cmidle">
        <a class="ctitle" href="/">
          <img src="/images/logo.png" />
          <span class="cmidle">ASIREA</span>
        </a>
      </div>

      <div class="col-md-10">
        <ul class="cnav">
          <li
            v-for="item in menu"
            :key="item.href"
            :active="$route.path === item.href ? '' : null"
          >
            <router-link
              :to="item.href"
              data-bs-toggle="tooltip"
              data-bs-placement="bottom"
              :title="item.text"
            >
              <i :class="['bi', item.icon, 'cicon']"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { Tooltip } from 'bootstrap';

const isScrolled = ref(false);
let tooltipInstances = [];

function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  const tooltipEls = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  tooltipInstances = [...tooltipEls].map(el => new Tooltip(el));
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  tooltipInstances.forEach(t => t.dispose());
});

const menu = [
  { text: "Inicio", icon: "bi-house", href: "/" },
  { text: "Servicios", icon: "bi-card-list", href: "/services" },
  { text: "Trayectoria", icon: "bi-file-earmark", href: "/trajectory" },
  { text: "¿Quienes somos?", icon: "bi-people", href: "/who_are_we" },
  { text: "Donar", icon: "bi-coin", href: "/donate" },
  { text: "Contacto", icon: "bi-telephone", href: "/contact" }
];
</script>

<style scoped>
.header-transparent {
  background-color: rgba(90, 98, 93, 0.737) !important;
  backdrop-filter: blur(8px);
  transition: background-color 0.3s ease;
}

header.container-fluid {
  max-width: 100vw;
  transition: background-color 0.3s ease;
}

.cnav a {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
}

.cnav a:hover {
  color: #fff;
}

.cnav a:active,
.cnav a:visited {
  color: #fff;
}
</style>
