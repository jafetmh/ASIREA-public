<template>
    <div class="who-are-we">
        <!-- Hero Section -->
        <section class="hero-section">
            <div class="hero-overlay"></div>
            <div class="hero-content" data-aos="fade-up" data-aos-duration="800">
                <span class="hero-label">Conócenos</span>
                <h1 class="hero-title">ASIREA</h1>
                <p class="hero-subtitle">Asociación para el Desarrollo Sostenible de la Región Atlántica</p>
            </div>
        </section>

        <!-- ¿Qué es ASIREA? -->
        <section class="info-block">
            <div class="info-pattern">
                <FigureSvg />
            </div>
            <div class="info-row">
                <div class="info-img" data-aos="fade-right" data-aos-duration="800">
                    <img src="/images/Portada_quines_somos.png" alt="¿Qué es ASIREA?" />
                </div>
                <div class="info-content">
                    <span class="info-label" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Nuestra
                        esencia</span>
                    <h2 class="info-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">¿Qué es
                        ASIREA?</h2>
                    <p class="info-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
                        ASIREA nace en el año 1987 bajo el nombre de Asociación de Industriales y Reforestadores del
                        Atlántico (ASIREA), con el objetivo de promover la unión de los industriales forestales de la
                        Zona
                        Atlántica para lograr el mejoramiento económico social y cultural de los afiliados, promover el
                        mejoramiento de la industria para un mejor aprovechamiento de la materia prima, crear fuentes de
                        materia prima permanente e impulsar programas de reforestación.
                        <a href="#" class="read-more" @click.prevent="showMoreInfo = !showMoreInfo">
                            {{ showMoreInfo ? 'Leer menos' : 'Seguir leyendo...' }}
                        </a>
                    </p>
                    <p v-show="showMoreInfo" class="info-text" data-aos="fade-up" data-aos-duration="700"
                        data-aos-delay="500">
                        En 1996, con la publicación de la Ley Forestal 7575, continúa apoyando al industrial forestal,
                        pero
                        también a las personas dedicadas a la protección y manejo de recursos naturales. Ese mismo año
                        es declarada de <strong>Utilidad Pública</strong> mediante decreto ejecutivo número 25117-J.
                    </p>
                </div>
            </div>
        </section>

        <!-- Misión -->
        <section class="mv-block">
            <div class="mv-row">
                <div class="mv-img" data-aos="fade-right" data-aos-duration="800">
                    <img src="/images/quienes_somos1.png" alt="Misión ASIREA" />
                </div>
                <div class="mv-content">
                    <span class="mv-label" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Nuestro
                        propósito</span>
                    <h2 class="mv-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                            <path
                                d="M19.93 11A8 8 0 0 0 13 4.07V2h-2v2.07A8 8 0 0 0 4.07 11H2v2h2.07A8 8 0 0 0 11 19.93V22h2v-2.07A8 8 0 0 0 19.93 13H22v-2zM12 15c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3">
                            </path>
                        </svg>
                        Misión
                    </h2>
                    <p class="mv-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
                        ASIREA es una organización que gestiona y desarrolla proyectos verdes sostenibles mediante el
                        intercambio de productos, servicios, e incidencia política-social para lograr el bien común de
                        la
                        sociedad y del medio ambiente de Costa Rica.
                    </p>
                </div>
            </div>
        </section>

        <!-- Visión -->
        <section class="mv-block mv-block--alt">
            <div class="mv-row mv-row--reverse">
                <div class="mv-img" data-aos="fade-left" data-aos-duration="800">
                    <img src="/images/quienes_somos2.png" alt="Visión ASIREA" />
                </div>
                <div class="mv-content">
                    <span class="mv-label" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">Hacia el
                        futuro</span>
                    <h2 class="mv-title" data-aos="fade-up" data-aos-duration="600" data-aos-delay="300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                            viewBox="0 0 24 24">
                            <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                            <path
                                d="M12 19c7.63 0 9.93-6.62 9.95-6.68.07-.21.07-.43 0-.63-.02-.07-2.32-6.68-9.95-6.68s-9.93 6.61-9.95 6.67c-.07.21-.07.43 0 .63.02.07 2.32 6.68 9.95 6.68Zm0-10c1.64 0 3 1.36 3 3s-1.36 3-3 3-3-1.36-3-3 1.36-3 3-3">
                            </path>
                        </svg> Visión
                    </h2>
                    <p class="mv-text" data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
                        ASIREA será reconocida como una organización evolutiva, solidaria y gestora del desarrollo
                        integral
                        para mejorar las condiciones de vida de las comunidades y del medio ambiente.
                    </p>
                </div>
            </div>
        </section>

        <!-- Junta Directiva -->
        <section class="team-section">
            <div class="team-header" data-aos="fade-up" data-aos-duration="600">
                <span class="team-label">Nuestro equipo</span>
                <h2 class="team-title">Junta Directiva</h2>
                <div class="team-divider"></div>
            </div>

            <div class="team-grid">
                <template v-for="(miembro, index) in miembrosJunta" :key="miembro.id || index">
                    <div class="team-card" data-aos="fade-up" data-aos-duration="600" :data-aos-delay="index * 100">
                        <div class="team-card-avatar">
                            <img v-if="miembro.foto" :src="miembro.foto" :alt="miembro.nombre" />
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                                <path
                                    d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5">
                                </path>
                            </svg>
                        </div>
                        <div class="team-card-info">
                            <h4 class="team-card-name">{{ miembro.nombre }}</h4>
                            <span class="team-card-position">{{ miembro.puesto }}</span>
                            <p class="team-card-occupation">{{ miembro.ocupacion }}</p>
                        </div>
                    </div>
                </template>
            </div>
        </section>

        <!-- Personal Técnico y Administrativo -->
        <section class="staff-section">
            <div class="team-header" data-aos="fade-up" data-aos-duration="600">
                <h2 class="team-title">Personal Técnico y Administrativo</h2>
                <div class="team-divider"></div>
            </div>

            <div class="staff-grid">
                <template v-for="(persona, index) in administrativos" :key="persona.id || index">
                    <div class="staff-card" data-aos="fade-up" data-aos-duration="600" :data-aos-delay="index * 100">
                        <div class="staff-card-img">
                            <img v-if="persona.foto" :src="persona.foto" :alt="persona.nombre" />
                            <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                                <path
                                    d="M12 12c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5m0-8c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3M4 22h16c.55 0 1-.45 1-1v-1c0-3.86-3.14-7-7-7h-4c-3.86 0-7 3.14-7 7v1c0 .55.45 1 1 1m6-7h4c2.76 0 5 2.24 5 5H5c0-2.76 2.24-5 5-5">
                                </path>
                            </svg>
                        </div>
                        <div class="staff-card-content">
                            <h4 class="staff-card-name">{{ persona.nombre }}</h4>
                            <span v-if="persona.puesto" class="staff-card-role">{{ persona.puesto }}</span>
                            <p v-if="persona.ocupacion" class="staff-card-degree">{{ persona.ocupacion }}</p>
                        </div>
                    </div>
                </template>
            </div>
        </section>
    </div>
    <WatsAppBtn></WatsAppBtn>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import WatsAppBtn from '../components/WatsAppBtn.vue';
import { getMiembrosDeJunta } from '../services/miembroJuntaService';
import { getAdministrativos } from '../services/administrativoService';
import user from '../components/icons/user.vue';
import FigureSvg from '../assets/figure.vue';

const miembrosJunta = ref([]);
const administrativos = ref([]);
const showMoreInfo = ref(false);

onMounted(async () => {
    try {
        const [miembros, admin] = await Promise.all([
            getMiembrosDeJunta(),
            getAdministrativos()
        ]);
        miembrosJunta.value = miembros;
        administrativos.value = admin;
    } catch (e) {
        console.error('Error cargando datos:', e);
    }
});
</script>

<style scoped>
/* ══════════════════════════════════════════════
   HERO SECTION
   ══════════════════════════════════════════════ */
.hero-section {
    position: relative;
    min-height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark, #1a5a3a) 100%);
    overflow: hidden;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: url('/images/Portada_quines_somos.png') center/cover no-repeat;
    opacity: 0.15;
}

.hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 40px 20px;
}

.hero-label {
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 12px;
}

.hero-title {
    font-size: 4rem;
    font-weight: 800;
    color: #fff;
    margin: 0 0 16px;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.hero-subtitle {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

/* ══════════════════════════════════════════════
   INFO BLOCK (¿Qué es ASIREA?)
   ══════════════════════════════════════════════ */
.info-block {
    padding-top: 35px;
    padding: 80px 5%;
    background-color: #fff;
    position: relative;
    overflow: hidden;
}

.info-pattern {
    position: absolute;
    inset: 0;
    opacity: .5;
    pointer-events: none;
    transform: rotate(180deg);
}

.info-pattern :deep(svg) {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.info-pattern :deep(rect) {
    fill: transparent;
}

.info-pattern :deep(path) {
    fill: var(--primary);
}

.info-row {
    display: flex;
    align-items: center;
    gap: 60px;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
}

.info-img {
    flex: 0 0 45%;
    position: relative;
}

.info-img::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    border-radius: 20px;
    z-index: -1;
    opacity: 0.1;
    transition: all 0.4s ease;
}

.info-img:hover::before {
    opacity: 0.18;
    top: -14px;
    left: -14px;
}

.info-img img {
    width: 100%;
    height: 380px;
    object-fit: cover;
    border-radius: 12px 60px / 80px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.info-img:hover img {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
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
    margin-bottom: 10px;
}

.info-title {
    font-size: 2.2rem;
    color: var(--primary);
    margin: 0 0 20px;
}

.info-text {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text-body, #555);
    margin-bottom: 16px;
}

.info-text strong {
    color: var(--primary);
}

.read-more {
    color: var(--primary);
    font-weight: 300;
    margin-left: 4px;
    text-decoration: underline;
    transition: color 0.2s ease;
}

.read-more:hover {
    color: var(--primary-light);
}

/* ══════════════════════════════════════════════
   MISIÓN & VISIÓN BLOCKS
   ══════════════════════════════════════════════ */
.mv-block {
    padding: 70px 5%;
    background-color: #fff;
}

.mv-block--alt {
    background-color: var(--bg-alt, #f8f9fa);
}

.mv-row {
    display: flex;
    align-items: center;
    gap: 60px;
    max-width: 1100px;
    margin: 0 auto;
}

.mv-row--reverse {
    flex-direction: row-reverse;
}

.mv-img {
    flex: 0 0 42%;
    position: relative;
    overflow: visible;
}

.mv-img::before {
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

.mv-img:hover::before {
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    opacity: 0.15;
}

.mv-img img {
    width: 100%;
    height: 320px;
    object-fit: cover;
    display: block;
    border-radius: 10px 5px 2em / 20px 25px 30%;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.mv-img:hover img {
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.2);
}

.mv-content {
    flex: 1;
}

.mv-label {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--primary-light);
    margin-bottom: 10px;
}

.mv-title {
    font-size: 2rem;
    color: var(--primary);
    margin: 0 0 18px;
    display: flex;
    align-items: center;
    gap: 12px;
}

.mv-title i {
    font-size: 1.6rem;
    color: var(--primary-light);
}

.mv-text {
    font-size: 1.05rem;
    line-height: 1.8;
    color: var(--text-body, #555);
    margin: 0;
}

/* ══════════════════════════════════════════════
   TEAM SECTION (Junta Directiva)
   ══════════════════════════════════════════════ */
.team-section {
    padding: 80px 5%;
    background: #fff;
}

.team-header {
    text-align: center;
    margin-bottom: 50px;
}

.team-label {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    color: var(--primary-light);
    margin-bottom: 10px;
}

.team-title {
    font-size: 2.2rem;
    color: var(--primary);
    margin: 0 0 16px;
}

.team-divider {
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, var(--primary) 0%, var(--primary-light) 100%);
    margin: 0 auto;
    border-radius: 2px;
}

.team-grid {
    display: flex;
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
    overflow-x: auto;
    padding-bottom: 16px;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
}

.team-grid::-webkit-scrollbar {
    height: 6px;
}

.team-grid::-webkit-scrollbar-track {
    background: #e9ecef;
    border-radius: 3px;
}

.team-grid::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 3px;
}

.team-card {
    flex: 0 0 260px;
    background: #c0c5c0;
    border-radius: 5px;
    padding: 28px 24px;
    text-align: center;
    border: 2px solid #b3b3b3;
    transition: border-color 0.3s ease;
    scroll-snap-align: start;
}

.team-card:hover {
    border-color: var(--primary);
}

.team-card-avatar {
    width: 90px;
    height: 90px;
    margin: 0 auto 18px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--primary);
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e8ebe8;
}

.team-card-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.team-card-avatar svg {
    width: 50%;
    height: 50%;
    color: #6b7c6b;
}

.team-card-icon {
    color: #6c757d;
}

.team-card-name {
    font-size: 1.1rem;
    color: var(--primary);
    margin: 0 0 8px;
}

.team-card-position {
    display: inline-block;
    font-size: 0.85rem;
    font-weight: 600;
    color: #fff;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    padding: 4px 14px;
    border-radius: 20px;
    margin-bottom: 10px;
}

.team-card-occupation {
    font-size: 0.9rem;
    color: var(--text-body, #666);
    margin: 0;
}

/* ══════════════════════════════════════════════
   STAFF SECTION (Personal Técnico)
   ══════════════════════════════════════════════ */
.staff-section {
    padding: 80px 5%;
    background: linear-gradient(180deg, var(--bg-alt, #f8f9fa) 0%, #fff 100%);
}

.staff-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    max-width: 1000px;
    margin: 0 auto;
}

.staff-card {
    display: flex;
    align-items: center;
    gap: 20px;
    background: #fff;
    border-radius: 5px;
    border-bottom: 1px solid #bbbcbe;
    padding: 24px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-left: 4px solid var(--primary);
}

.staff-card:hover {
    transform: translateX(8px);
}

.staff-card-img {
    flex-shrink: 0;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e8ebe8;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.staff-card-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.staff-card-img svg {
    width: 50%;
    height: 50%;
    color: #6b7c6b;
}

.staff-card-content {
    flex: 1;
}

.staff-card-name {
    font-size: 1.05rem;
    color: var(--primary);
    margin: 0 0 6px;
}

.staff-card-role {
    display: block;
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--primary-light);
    margin-bottom: 4px;
}

.staff-card-degree {
    font-size: 0.85rem;
    color: var(--text-body, #666);
    margin: 0;
}

/* ══════════════════════════════════════════════
   RESPONSIVE
   ══════════════════════════════════════════════ */
@media (max-width: 992px) {
    .hero-title {
        font-size: 3rem;
    }

    .mv-row,
    .mv-row--reverse {
        flex-direction: column;
        gap: 35px;
    }

    .mv-img {
        flex: none;
        width: 100%;
        max-width: 400px;
        margin: 0 auto;
    }

    .staff-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .hero-section {
        min-height: 40vh;
    }

    .hero-title {
        font-size: 2.5rem;
    }

    .hero-subtitle {
        font-size: 1rem;
    }

    .info-block {
        padding: 50px 20px;
    }

    .info-row {
        flex-direction: column;
        gap: 30px;
    }

    .info-img {
        width: 100%;
    }

    .info-img img {
        height: 280px;
        border-radius: 12px;
    }

    .info-title {
        text-align: center;
    }

    .info-text {
        text-align: justify;
    }

    .mv-block,
    .team-section,
    .staff-section {
        padding: 50px 20px;
    }

    .mv-img {
        max-width: 320px;
    }

    .mv-img img {
        height: 260px;
    }

    .mv-title {
        font-size: 1.7rem;
        justify-content: center;
    }

    .mv-label {
        display: block;
        text-align: center;
    }

    .mv-text {
        text-align: justify;
    }

    .team-grid {
        gap: 16px;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: -20px;
        margin-right: -20px;
    }

    .team-card {
        flex: 0 0 240px;
        padding: 24px 20px;
    }

    .staff-card {
        flex-direction: column;
        text-align: center;
        padding: 24px 20px;
        border-left: none;
        border-top: 4px solid var(--primary);
    }

    .staff-card:hover {
        transform: translateY(-5px);
    }
}

@media (max-width: 480px) {
    .hero-title {
        font-size: 2rem;
    }

    .info-title,
    .team-title {
        font-size: 1.8rem;
    }

    .mv-title {
        font-size: 1.4rem;
    }
}
</style>
