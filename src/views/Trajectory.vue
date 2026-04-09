<template>
  <div class="trajectory-page">
    <!-- Hero: Colaboración institucional -->
    <section class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content" data-aos="fade-up" data-aos-duration="800">
        <span class="hero-label">Trabajo en equipo</span>
        <h1 class="hero-title">Colaboración institucional</h1>
        <p class="hero-text">
          En ASIREA, creemos en el poder de la participación y la colaboración. Por eso, la articulación con
          otras instituciones forma parte esencial de nuestra estrategia de acción.
          A través de convenios, redes de trabajo y espacios de diálogo, generamos sinergias que fortalecen
          nuestras iniciativas y permiten desarrollar proyectos con mayor alcance, eficiencia e impacto.
        </p>
        <span class="hero-quote" data-aos="fade-up" data-aos-delay="300">
          "Colaborar no es solo unir esfuerzos: es multiplicar resultados"
        </span>
      </div>
      <WaveSvg class="hero-wave" color="#ffffff" />
    </section>

    <!-- Colaboraciones cards -->
    <section class="traj-cards-section">
      <div data-aos="fade-up" data-aos-duration="800">
        <CardList data-url="/json/colaborations.json" :signal-events="null"
          empty-text="No hay colaboraciones disponibles por el momento." empty-icon="bi-people" categoria-slug="colaboradores"/>
      </div>
    </section>

    <!-- Proyectos -->
    <section class="traj-block traj-block--alt">
      <div class="traj-header" data-aos="fade-up" data-aos-duration="600">
        <span class="traj-label">Impacto regional</span>
        <h2 class="traj-title">Proyectos</h2>
        <p class="traj-desc">
          Durante su existencia, ASIREA ha tratado de ser un motor de enlace y generación de opciones de
          desarrollo sostenible para la Región Atlántica, apoyando iniciativas de desarrollo amigables
          con el ambiente que busquen mejorar la calidad de vida de la población local.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <CardList data-url="proyecto" :signal-events="proyectosSignalEvents" :show-button="true"
          button-text="Conocer más" :target-blank="true"
          empty-text="No hay proyectos para mostrar por el momento." empty-icon="bi-folder" categoria-slug="proyectos"/>
      </div>
    </section>

    <!-- Documentos técnicos -->
    <section class="traj-block">
      <div class="traj-header" data-aos="fade-up" data-aos-duration="600">
        <span class="traj-label">Conocimiento compartido</span>
        <h2 class="traj-title">Documentos técnicos</h2>
        <p class="traj-desc">
          Con el compromiso de promover el acceso al conocimiento y fortalecer las capacidades técnicas
          del sector, ASIREA pone a disposición del público una serie de documentos técnicos que fortalecen el
          desarrollo sostenible. Estos materiales están orientados a compartir experiencias, metodologías y
          aprendizajes que puedan ser de utilidad para otros actores e iniciativas afines.
        </p>
      </div>

      <!-- Fichas técnicas -->
      <div class="traj-subsection" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
        <h3 class="traj-subtitle">
          Fichas técnicas de producción agroforestal
        </h3>
        <p class="traj-subdesc">
          Serie técnica desarrollada para orientar y brindar alternativas de producción
          diversificada y sostenible en fincas pequeñas y medianas de la Región Atlántica.
        </p>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <CardList data-url="fichaTecnica" :signal-events="fichasSignalEvents" :show-button="true"
          button-text="Ver documento" :target-blank="true"
          empty-text="No hay fichas técnicas disponibles por el momento." empty-icon="bi-file-earmark-text" />
      </div>

      <!-- Informes y tesis -->
      <div class="traj-subsection" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
        <h3 class="traj-subtitle">
          Informes y tesis
        </h3>
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
        <CardList data-url="src/json/thesis.json" :signal-events="null" :show-button="true"
          button-text="Ver documento" :target-blank="true"
          empty-text="No hay informes o tesis disponibles por el momento." empty-icon="bi-journal-text" />
      </div>
    </section>
  </div>
  <WatsAppBtn />
</template>

<script setup>
import CardList from "@/components/CardList.vue"
import WatsAppBtn from "@/components/WatsAppBtn.vue"
import WaveSvg from "@/assets/wave.vue"

const proyectosSignalEvents = {
  createdEventName: "ProyectoCreado",
  updatatedEventName: "ProyectoActualizado",
  deletedEventName: "ProyectoEliminado"
}
const fichasSignalEvents = {
  createdEventName: "FichaCreada",
  updatatedEventName: "FichaActualizada",
  deletedEventName: "FichaEliminada"
}
</script>

<style scoped>
/* ── Hero ── */
.hero-section {
  position: relative;
  min-height: 420px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: linear-gradient(135deg, var(--primary) 0%, #026b4e 50%, var(--primary-light) 100%);

}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(59, 230, 193, 0.1) 0%, transparent 60%);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 750px;
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
  margin-bottom: 24px;
}

.hero-quote {
  display: inline-block;
  font-size: 1.1rem;
  font-style: italic;
  font-weight: 600;
  color: var(--accent);
  border-left: 3px solid var(--accent);
  padding-left: 16px;
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 80px;
  z-index: 3;
  display: block;
  line-height: 0;
}

/* ── Cards section (colaboraciones) ── */
.traj-cards-section {
  padding: 40px 0 20px;
}

/* ── Content blocks ── */
.traj-block {
  padding: 50px 0;
}

.traj-block--alt {
  background-color: var(--bg-alt);
}

.traj-header {
  max-width: 900px;
  margin: 0 auto 30px;
  text-align: center;
}

.traj-label {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: var(--primary-light);
  margin-bottom: 8px;
}

.traj-title {
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 16px;
}

.traj-desc {
  font-size: 1.05rem;
  line-height: 1.7;
  color: var(--text-body);
  max-width: 800px;
  margin: 0 auto;
}

/* ── Subsecciones ── */
.traj-subsection {
  max-width: 900px;
  margin: 40px auto 20px;
  padding-left: 5%;
}

.traj-subtitle {
  font-size: 1.4rem;
  color: var(--primary);
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

.traj-subdesc {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--text-body);
  max-width: 900px;
}

/* ── Responsive ── */
@media screen and (max-width: 775px) {
  .hero-section {
    min-height: 360px;
  }

  .hero-title {
    font-size: 1.8rem;
  }

  .hero-text {
    font-size: 0.95rem;
  }

  .hero-quote {
    font-size: 0.95rem;
  }

  .traj-block {
    padding: 40px 20px;
  }

  .traj-subsection {
    padding-left: 20px;
  }

  .traj-subtitle {
    font-size: 1.2rem;
  }
}
</style>
