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
          <div class="col-md-12 ccardstitle" data-aos="fade-down" data-aos-duration="600">
            <h1>Noticias</h1>
          </div>
        </div>
      </div>
    </section>
    <section class="row" data-aos="fade-up" data-aos-duration="800">
      <CardList data-url="noticia" :signal-events="signalEvents"
        empty-text="No hay noticias disponibles por el momento." empty-icon="bi-newspaper" />
    </section>
    <!-- Servicios -->
    <section class="info-block">
      <div class="info-row">
        <div class="info-img" data-aos="fade-right" data-aos-duration="800">
          <img src="/images/servicios_inicio.png" alt="Servicios ofrecidos" />
        </div>
        <div class="info-content">
          <span class="info-label" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Lo que hacemos</span>
          <h2 class="info-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Servicios ofrecidos</h2>
          <p class="info-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
            Contamos con un vivero forestal con producción de árboles de calidad de semilla certificada.
            Brindamos servicio de regencia forestal para trámites de aprovechamiento forestal en suelos de uso
            agrícola y pecuario.
            Facilitamos el proceso para la participación en el programa nacional de pago por servicios ambientales.
            Ofrecemos asesoría técnica para el manejo de su proyecto forestal con fines comerciales o ecológicos.
          </p>
          <router-link to="/services" class="ver-mas" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
            Conocer más <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Trayectoria -->
    <section class="info-block info-block--alt">
      <div class="info-row info-row--reverse">
        <div class="info-img" data-aos="fade-left" data-aos-duration="800">
          <img src="/images/trayectoria_inicio.png" alt="Trayectoria" />
        </div>
        <div class="info-content">
          <span class="info-label" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Nuestra historia</span>
          <h2 class="info-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Trayectoria</h2>
          <p class="info-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
            Con casi 40 años de existencia, ASIREA ha trabajado para el beneficio de los productores y el ambiente.
            Hemos participado en proyectos de conservación, restauración y educación ambiental, realizamos acciones
            de capacitación para productores forestales y emprendimientos agro-ambientales, trabajamos en el
            mejoramiento de los mercados en busca de mejorar los ingresos para el productor.
          </p>
          <router-link to="/trajectory" class="ver-mas" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
            Conocer más <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Donaciones -->
    <section class="info-block">
      <div class="info-row">
        <div class="info-img" data-aos="fade-right" data-aos-duration="800">
          <img src="/images/donar_inicio.png" alt="Donaciones" />
        </div>
        <div class="info-content">
          <span class="info-label" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Sé parte del cambio</span>
          <h2 class="info-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Donaciones</h2>
          <p class="info-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
            Con tu apoyo, aportamos herramientas a comunidades rurales tendientes a promover una producción
            sostenible con rostro humano. Cada aporte financia acciones concretas como la promoción y divulgación
            de proyectos de desarrollo y mejora en fincas, el desarrollo de viveros, la educación ambiental,
            el acompañamiento técnico a productores y el acceso a incentivos de conservación.
          </p>
          <router-link to="/donate" class="ver-mas" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
            Conocer más <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
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

<style scoped>
.info-block {
  padding: 60px 5%;
}

.info-block--alt {
  background-color: var(--bg-alt);
}

.info-row {
  display: flex;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.info-row--reverse {
  flex-direction: row-reverse;
}

.info-img {
  flex: 0 0 45%;
  overflow: visible;
  border-radius: 16px;
  position: relative;
}

.info-img::before {
  content: '';
  position: absolute;
  top: -8px;
  left: -8px;
  right: -8px;
  bottom: -8px;
  background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
  border-radius: 18px;
  z-index: -1;
  opacity: 0.1;
  transition: all 0.4s ease;
}

.info-img:hover::before {
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
  opacity: 0.15;
}

.info-img img {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  border-radius: 10px 100px / 120px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.info-img:hover img {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.info-content {
  flex: 1;
}

.info-label {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--primary-light);
  margin-bottom: 8px;
}

.info-title {
  font-size: 1.8rem;
  color: var(--primary);
  text-align: left;
  margin-top: 0;
  margin-bottom: 16px;
}

.info-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-body);
  text-align: left;
}

.ver-mas {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--primary);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  margin-top: 20px;
  padding-bottom: 2px;
  border-bottom: 2px solid transparent;
  transition: border-color 0.25s ease;
}

.ver-mas:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.ver-mas i {
  transition: transform 0.25s ease;
}

.ver-mas:hover i {
  transform: translateX(5px);
}

@media screen and (max-width: 775px) {

  .info-row,
  .info-row--reverse {
    flex-direction: column;
    gap: 25px;
  }

  .info-img {
    flex: none;
    width: 100%;
  }

  .info-title {
    text-align: center;
  }

  .info-text {
    text-align: justify;
  }

  .info-block {
    padding: 40px 20px;
  }
}
</style>
