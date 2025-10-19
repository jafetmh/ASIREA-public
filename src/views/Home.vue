<template>
  <div class="container-fluid">
    <Carousel />
    <section class="row cupdate">
      <a href="./services.html" class="cbotoncar" style="width: 300px; text-align: center;">
        Más información
      </a>
    </section>
    <section class="row">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12 ccardstitle">
            <h1>Noticias</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="row">
      <CardList data-url="noticia" :signal-events="signalEvents"/>
    </section>
    <section class="row">
      <div class="col-md-4 text-center cservices">
        <img class="portada_img" src="/images/servicios_inicio.png" alt="">
        <h2>Servicios ofrecidos</h2>
        <p class="texto">
          Contamos con un vivero forestal con producción de árboles de calidad de semilla certificada. <br>
          Brindamos servicio de regencia forestal para trámites de aprovechamiento forestal en suelos de uso
          agrícola y pecuario. <br>
          Facilitamos el proceso para la participación en el programa nacional de pago por servicios ambientales.
          <br>
          Ofrecemos asesoría técnica para el manejo de su proyecto forestal con fines comerciales ó ecológicos.
        </p>
        <a id="boton" href="#" class="btn btn-primary btn-lg active cboton" role="button"
          aria-pressed="true">Contactar</a>
      </div>
      <div class="col-md-4 text-center cservices">
        <img class="portada_img" src="/images/trayectoria_inicio.png" alt="">
        <h2>Trayectoria de la organización</h2>
        <p class="texto">
          Con casi 40 años de existencia, ASIREA ha trabajado para el beneficio de los productores y el ambiente.
          Hemos participado
          en proyectos de conservación, restauración y educación ambiental, realizamos acciones de capacitación
          para productores forestales
          y emprendimientos agro-ambientales, trabajamos en el mejoramiento de los mercados en busca de mejorar
          los ingresos para el productor. <br>
          Además, colaboramos con otras organizaciones y participamos de forma activa con iniciativas y
          comités que trabajan en pro del ambiente y la mejora en la calidad de vida de sus habitantes.
        </p>
        <a id="boton" href="#" class="btn btn-primary btn-lg active cboton" role="button"
          aria-pressed="true">Contactar</a>
      </div>
      <div class="col-md-4 text-center cservices">
        <img class="portada_img" src="/images/donar_inicio.png" alt="">
        <h2>Donaciones</h2>
        <p class="texto">
          Con tu apoyo, aportamos herramientas a comunidades rurales tendientes a promover una producción
          sostenible con rostro humano. Cada aporte financia
          acciones concretas como la promoción y divulgación de proyectos de desarrollo y mejora en fincas, el
          desarrollo de viveros, la educación ambiental,
          el acompañamiento técnico a productores y el acceso a incentivos de conservación. <br>
          ¡Súmate hoy y sé parte del cambio!.
        </p>
        <a id="boton" href="#" class="btn btn-primary btn-lg active cboton" role="button"
          aria-pressed="true">Contactar</a>
      </div>
    </section>
  </div>
  <WatsAppBtn></WatsAppBtn>
</template>

<script setup>
import WatsAppBtn from "../components/WatsAppBtn.vue";
import Carousel from "@/components/Carousel.vue";
import CardList from '@/components/CardList.vue'

const signalEvents = {
  createdEventName: "NoticiaCreada",
  updatatedEventName: "NoticiaActualizada",
  deletedEventName: "NoticiaEliminada"
}
</script>
