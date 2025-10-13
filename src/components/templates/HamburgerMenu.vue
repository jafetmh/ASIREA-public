<template>
  <div id="hamburgerMenu" class="chamburgermenu" :active="props.show?true:null">
    <ul class="cmenumovil">
      <li v-for="(item, i) in menu" :key="i">
        <a :href="item.href" class="nav-link">
          <i :class="`bi ${item.icon} cicon`"></i>{{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({ show: Boolean });

const menu = [
  { text: "Inicio", icon: "bi-house", href: "/" },
  { text: "Servicios", icon: "bi-card-list", href: "/services" },
  { text: "Trayectoria", icon: "bi-file-earmark", href: "/trajectory" },
  { text: "¿Quienes somos?", icon: "bi-people", href: "/who_are_we" },
  { text: "Donar", icon: "bi-coin", href: "/donate" },
  { text: "Contacto", icon: "bi-telephone", href: "/contact" }
];
</script>
