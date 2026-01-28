<template>
  <div class="services-page">
    <!-- Hero: PSA -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <img src="/images/psa_servicios.png" alt="Programa PSA" class="hero-bg" />
      <div class="hero-content" data-aos="fade-up" data-aos-duration="800">
        <span class="hero-label">Programa del Estado costarricense</span>
        <h1 class="hero-title">Pago por Servicios Ambientales</h1>
        <p class="hero-text">
          El Pago por Servicios Ambientales (PSA) es un programa que a través del FONAFIFO,
          otorga a los propietarios de bosques, plantaciones forestales y sistemas agroforestales,
          una suma económica por los servicios ambientales que estos proveen, incidiendo directamente
          en la protección y mejoramiento del medio paisaje rural.
        </p>
        <router-link to="/contact" class="hero-btn">
          Contactar <i class="bi bi-arrow-right"></i>
        </router-link>
      </div>
    </section>

    <!-- Actividades PSA -->
    <section class="section-cards">
      <h2 class="section-title" data-aos="fade-down" data-aos-duration="600">
        Actividades del programa PSA
      </h2>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <CardList data-url="src/json/activities.json" :signal-events="null"
          empty-text="No hay actividades disponibles por el momento." empty-icon="bi-calendar-event" />
      </div>
    </section>

    <!-- Vivero forestal -->
    <section class="svc-block">
      <div class="svc-row">
        <div class="svc-img" data-aos="fade-right" data-aos-duration="800">
          <img src="/images/vivero_servicios.png" alt="Vivero forestal" />
        </div>
        <div class="svc-content">
          <span class="svc-label" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Producción forestal</span>
          <h2 class="svc-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Vivero forestal</h2>
          <p class="svc-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
            Contamos con un vivero forestal donde producimos material de semilla certificada para
            asegurar tanto la calidad de su plantación como el éxito en el establecimiento y
            crecimiento de los árboles plantados. Además, se ofrecen servicios en la capacitación
            en el establecimiento y manejo de viveros forestales.
          </p>
          <router-link to="/contact" class="svc-btn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
            Contactar <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Permisos de aprovechamiento -->
    <section class="svc-block svc-block--alt">
      <div class="svc-row svc-row--reverse">
        <div class="svc-img" data-aos="fade-left" data-aos-duration="800">
          <img src="/images/aprovechamiento_servicios.png" alt="Permisos de aprovechamiento" />
        </div>
        <div class="svc-content">
          <span class="svc-label" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Trámites forestales</span>
          <h2 class="svc-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Permisos de aprovechamiento</h2>
          <p class="svc-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
            Asesoramos y acompañamos en temas de aprovechamientos forestales en terrenos de uso agrícola
            o pecuarios, así como en la emisión de Certificados de Origen para el aprovechamiento de
            plantaciones forestales, sistemas agroforestales y árboles plantados.
          </p>
          <router-link to="/contact" class="svc-btn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
            Contactar <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Atención a grupos -->
    <section class="svc-block">
      <div class="svc-row">
        <div class="svc-img" data-aos="fade-right" data-aos-duration="800">
          <img src="/images/grupos_servicios.png" alt="Atención a grupos" />
        </div>
        <div class="svc-content">
          <span class="svc-label" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Educación ambiental</span>
          <h2 class="svc-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Atención a grupos</h2>
          <p class="svc-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
            Atendemos e impartimos talleres educativos, realizamos visitas de campo y charlas con
            el fin de concientizar en la protección y manejo de los recursos naturales.
          </p>
          <router-link to="/contact" class="svc-btn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
            Contactar <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Asesoría técnica forestal -->
    <section class="svc-block svc-block--alt">
      <div class="svc-row svc-row--reverse">
        <div class="svc-img" data-aos="fade-left" data-aos-duration="800">
          <img src="/images/asesoria_servicios.png" alt="Asesoría técnica forestal" />
        </div>
        <div class="svc-content">
          <span class="svc-label" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Asistencia profesional</span>
          <h2 class="svc-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">Asesoría técnica forestal</h2>
          <ul class="svc-list" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
            <li>Establecimiento y manejo de plantaciones forestales.</li>
            <li>Inscripción al régimen forestal del MINAE (requisitos para exoneración de impuestos municipales).</li>
            <li>Recolección de muestras de suelo para análisis.</li>
          </ul>
          <router-link to="/contact" class="svc-btn" data-aos="fade-up" data-aos-duration="600" data-aos-delay="500">
            Contactar <i class="bi bi-arrow-right"></i>
          </router-link>
        </div>
      </div>
    </section>
  </div>
  <WatsAppBtn />
</template>

<script setup>
import CardList from '@/components/CardList.vue'
import WatsAppBtn from '@/components/WatsAppBtn.vue'
</script>

<style scoped>
/* ── Hero ── */
.hero-section {
  position: relative;
  min-height: 480px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(1, 74, 54, 0.85) 0%, rgba(1, 74, 54, 0.6) 100%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 700px;
  text-align: center;
  padding: 60px 30px;
  color: var(--white-color);
}

.hero-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: var(--accent);
  margin-bottom: 12px;
}

.hero-title {
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: var(--white-color);
}

.hero-text {
  font-size: 1.05rem;
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 30px;
}

.hero-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: var(--accent);
  color: var(--primary);
  font-weight: 700;
  font-size: 1rem;
  padding: 12px 28px;
  border-radius: 8px;
  text-decoration: none;
  transition: background-color 0.25s ease, transform 0.25s ease;
}

.hero-btn:hover {
  background-color: var(--accent-hover);
  transform: translateY(-2px);
  color: var(--primary);
}

.hero-btn i {
  transition: transform 0.25s ease;
}

.hero-btn:hover i {
  transform: translateX(4px);
}

/* ── Cards section ── */
.section-cards {
  padding: 50px 0 30px;
}

.section-title {
  text-align: center;
  color: var(--primary);
  font-size: 2rem;
  margin-bottom: 30px;
}

/* ── Service blocks ── */
.svc-block {
  padding: 60px 5%;
}

.svc-block--alt {
  background-color: var(--bg-alt);
}

.svc-row {
  display: flex;
  align-items: center;
  gap: 50px;
  max-width: 1200px;
  margin: 0 auto;
}

.svc-row--reverse {
  flex-direction: row-reverse;
}

.svc-img {
  flex: 0 0 45%;
  overflow: visible;
  border-radius: 16px;
  position: relative;
}

.svc-img::before {
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

.svc-img:hover::before {
  top: -12px;
  left: -12px;
  right: -12px;
  bottom: -12px;
  opacity: 0.15;
}

.svc-img img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
  border-radius: 10px 100px / 120px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.svc-img:hover img {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.svc-content {
  flex: 1;
}

.svc-label {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--primary-light);
  margin-bottom: 8px;
}

.svc-title {
  font-size: 1.8rem;
  color: var(--primary);
  text-align: left;
  margin-top: 0;
  margin-bottom: 16px;
}

.svc-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-body);
  text-align: left;
}

.svc-list {
  font-size: 1.05rem;
  line-height: 1.9;
  color: var(--text-body);
  text-align: left;
  padding-left: 20px;
  list-style: none;
}

.svc-list li {
  position: relative;
  padding-left: 18px;
  margin-bottom: 8px;
}

.svc-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 10px;
  width: 8px;
  height: 8px;
  background-color: var(--accent);
  border-radius: 50%;
}

.svc-btn {
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

.svc-btn:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

.svc-btn i {
  transition: transform 0.25s ease;
}

.svc-btn:hover i {
  transform: translateX(5px);
}

/* ── Responsive ── */
@media screen and (max-width: 775px) {
  .hero-section {
    min-height: 400px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-text {
    font-size: 0.95rem;
  }

  .svc-row,
  .svc-row--reverse {
    flex-direction: column;
    gap: 25px;
  }

  .svc-img {
    flex: none;
    width: 100%;
  }

  .svc-title {
    text-align: center;
  }

  .svc-text,
  .svc-list {
    text-align: justify;
  }

  .svc-block {
    padding: 40px 20px;
  }
}
</style>
