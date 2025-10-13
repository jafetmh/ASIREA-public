<template>
  <header class="container-fluid">
    <!-- Móvil -->
    <div class="mainHamburger">
      <div class="cnavmovil">
        <a class="ctitle" href="index.html">
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
        <a class="ctitle" href="index.html">
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
            <router-link :to="item.href">
              <i :class="['bi', item.icon, 'cicon']"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script setup>
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
