<template>
    <div class="donate-page">
        <!-- Hero Section -->
<!--         <section class="donate-hero">
            <div class="donate-hero-overlay"></div>
            <div class="donate-hero-content" data-aos="fade-up" data-aos-duration="800">
                <span class="donate-hero-label">Sé parte del cambio</span>
                <h1 class="donate-hero-title">Donaciones</h1>
                <p class="donate-hero-subtitle">Tu aporte hace posible un futuro más verde y sostenible</p>
            </div>
        </section> -->
        
        <!-- CTA Section -->
        <section class="donate-cta" data-aos="fade-down" data-aos-duration="700">
            <h2 class="donate-cta-title">¡Súmate al cambio!</h2>
        </section>
        <!-- Intro Section -->
        <section class="donate-intro">
            <div class="donate-intro-content" data-aos="fade-up" data-aos-duration="700">
                <p class="donate-intro-text">
                    Cada donación que recibimos nos ayuda a continuar apoyando a agricultores y comunidades que integran
                    prácticas sostenibles en sus fincas, creando oportunidades reales de conservación y desarrollo.
                </p>
                <p class="donate-intro-text">
                    Al colaborar con nuestra organización, estás invirtiendo en soluciones concretas frente al cambio
                    climático, la degradación del suelo y la pérdida de biodiversidad. Tu donación es una semilla que
                    crecerá en forma de acciones sostenibles y comunidades resilientes.
                </p>
                <p class="donate-intro-highlight" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                    <i class="bi bi-info-circle"></i>
                    Sus donaciones pueden ser deducibles del impuesto sobre la renta.
                </p>
            </div>
        </section>

        <!-- Bank Info & Form Section -->
        <section class="donate-main">
            <div class="donate-grid">
                <!-- Bank Information -->
                <div class="donate-bank" data-aos="fade-right" data-aos-duration="700">
                    <div class="donate-bank-header">
                        <h2 class="donate-bank-title">Información Bancaria</h2>
                        <p class="donate-bank-org">Asociación para el Desarrollo Sostenible de la Región Atlántica</p>
                        <span class="donate-bank-id">Cédula jurídica: 3-002-114418</span>
                    </div>

                    <div class="donate-bank-accounts">
                        <!-- Colones -->
                        <div class="donate-account" data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
                            <div class="donate-account-header">
                                <span class="donate-account-currency">₡</span>
                                <h3 class="donate-account-title">Cuenta en Colones</h3>
                            </div>
                            <div class="donate-account-details">
                                <div class="donate-account-row">
                                    <span class="donate-account-label">Cuenta:</span>
                                    <span class="donate-account-value">100-01-051-003345-4</span>
                                </div>
                                <div class="donate-account-row">
                                    <span class="donate-account-label">CC:</span>
                                    <span class="donate-account-value">15105110010033457</span>
                                </div>
                                <div class="donate-account-row">
                                    <span class="donate-account-label">IBAN:</span>
                                    <span class="donate-account-value">CR85 0151 0511 0010 0334 57</span>
                                </div>
                            </div>
                        </div>

                        <!-- Dólares -->
                        <div class="donate-account" data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
                            <div class="donate-account-header">
                                <span class="donate-account-currency">$</span>
                                <h3 class="donate-account-title">Cuenta en Dólares</h3>
                            </div>
                            <div class="donate-account-details">
                                <div class="donate-account-row">
                                    <span class="donate-account-label">Cuenta:</span>
                                    <span class="donate-account-value">100-02-051-600061-4</span>
                                </div>
                                <div class="donate-account-row">
                                    <span class="donate-account-label">CC:</span>
                                    <span class="donate-account-value">15105110026000611</span>
                                </div>
                                <div class="donate-account-row">
                                    <span class="donate-account-label">IBAN:</span>
                                    <span class="donate-account-value">CR32 0151 0511 0026 0006 11</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="donate-form-wrapper" data-aos="fade-left" data-aos-duration="700">
                    <h2 class="donate-form-title">Contáctanos</h2>
                    <p class="donate-form-subtitle">¿Tienes preguntas sobre cómo donar? Escríbenos.</p>

                    <form class="donate-form">
                        <div class="donate-form-group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                            <label for="name" class="donate-form-label">Nombre completo</label>
                            <input type="text" class="donate-form-input" id="name" placeholder="Tu nombre y apellido"
                                required>
                        </div>
                        <div class="donate-form-group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
                            <label for="phone" class="donate-form-label">Teléfono</label>
                            <input type="tel" class="donate-form-input" id="phone" placeholder="Ej. +506 8888-8888">
                        </div>
                        <div class="donate-form-group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                            <label for="mail" class="donate-form-label">Correo electrónico</label>
                            <input type="email" class="donate-form-input" id="mail" placeholder="nombre@ejemplo.com"
                                required>
                        </div>
                        <div class="donate-form-group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="250">
                            <label for="message" class="donate-form-label">Mensaje</label>
                            <textarea class="donate-form-input donate-form-textarea" id="message" rows="4"
                                placeholder="Escribe tu mensaje aquí..." required></textarea>
                        </div>
                        <button type="submit" class="donate-form-btn" data-aos="fade-up" data-aos-duration="500"
                            data-aos-delay="300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor"
                                viewBox="0 0 24 24">
                                <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
                                <path
                                    d="M20.56 3.17c-.29-.2-.67-.23-.99-.08l-17 8.01a.999.999 0 0 0 .03 1.82L8 15.28V22l5.84-4.17 4.76 2.08c.13.06.26.08.4.08.18 0 .36-.05.52-.15a.99.99 0 0 0 .48-.79l1-15c.02-.35-.14-.69-.43-.89Zm-2.47 14.34-5.21-2.28L16 9l-7.65 4.25-2.93-1.28 13.47-6.34-.79 11.89Z">
                                </path>
                            </svg> Enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
<!--         <section class="donate-cta" data-aos="fade-up" data-aos-duration="700">
            <h2 class="donate-cta-title">¡Súmate al cambio!</h2>
            <p class="donate-cta-text">Juntos podemos construir un futuro más sostenible para Costa Rica.</p>
        </section> -->
    </div>
    <WatsAppBtn></WatsAppBtn>
</template>

<script setup>
import WatsAppBtn from "@/components/WatsAppBtn.vue"
</script>

<style scoped>
/* ══════════════════════════════════════════════
   HERO SECTION
   ══════════════════════════════════════════════ */
.donate-hero {
    position: relative;
    min-height: 45vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark, #1a5a3a) 100%);
    overflow: hidden;
}

.donate-hero-overlay {
    position: absolute;
    inset: 0;
    background: url('/images/donar_inicio.png') center/cover no-repeat;
    opacity: 0.15;
}

.donate-hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    padding: 40px 20px;
}

.donate-hero-label {
    display: inline-block;
    font-size: 0.9rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 3px;
    color: rgba(255, 255, 255, 0.85);
    margin-bottom: 12px;
}

.donate-hero-title {
    font-size: 3.5rem;
    font-weight: 800;
    color: #fff;
    margin: 0 0 16px;
    text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
}

.donate-hero-subtitle {
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 0.9);
    max-width: 500px;
    margin: 0 auto;
    line-height: 1.6;
}

/* ══════════════════════════════════════════════
   INTRO SECTION
   ══════════════════════════════════════════════ */
.donate-intro {
    padding: 70px 5%;
    background-color: #fff;
}

.donate-intro-content {
    max-width: 800px;
    margin: 0 auto;
    text-align: center;
}

.donate-intro-text {
    font-size: 1.1rem;
    line-height: 1.8;
    color: var(--text-body, #555);
    margin-bottom: 20px;
}

.donate-intro-highlight {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, rgba(var(--primary-rgb, 34, 139, 34), 0.1) 0%, rgba(var(--primary-rgb, 34, 139, 34), 0.05) 100%);
    background: #e8f5e9;
    padding: 16px 24px;
    border-radius: 10px;
    font-size: 1rem;
    color: var(--primary);
    font-weight: 500;
    margin-top: 10px;
    border-left: 4px solid var(--primary);
}

.donate-intro-highlight i {
    font-size: 1.2rem;
}

/* ══════════════════════════════════════════════
   MAIN SECTION (Bank & Form)
   ══════════════════════════════════════════════ */
.donate-main {
    padding: 70px 5%;
    background-color: var(--bg-alt, #f8f9fa);
}

.donate-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
}

/* Bank Information */
.donate-bank {
    background: #fff;
    border-radius: 16px;
    padding: 40px;
    border: 1px solid #e0e0e0;
}

.donate-bank-header {
    margin-bottom: 30px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--bg-alt, #f0f0f0);
}

.donate-bank-title {
    font-size: 1.6rem;
    color: var(--primary);
    margin: 0 0 12px;
}

.donate-bank-org {
    font-size: 1rem;
    color: var(--text-body, #555);
    margin: 0 0 8px;
    font-weight: 500;
}

.donate-bank-id {
    font-size: 0.9rem;
    color: #777;
}

.donate-bank-accounts {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.donate-account {
    background: var(--bg-alt, #f8f9fa);
    border-radius: 12px;
    padding: 24px;
    border-left: 4px solid var(--primary);
}

.donate-account-header {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
}

.donate-account-currency {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
}

.donate-account-title {
    font-size: 1.1rem;
    color: var(--primary);
    margin: 0;
}

.donate-account-details {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.donate-account-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 0;
    border-bottom: 1px dashed #ddd;
}

.donate-account-row:last-child {
    border-bottom: none;
}

.donate-account-label {
    font-size: 0.9rem;
    color: #777;
    font-weight: 500;
}

.donate-account-value {
    font-size: 0.95rem;
    color: #333;
    font-family: 'Courier New', monospace;
    font-weight: 600;
}

/* Contact Form */
.donate-form-wrapper {
    background: #fff;
    border-radius: 16px;
    padding: 40px;
    border: 1px solid #e0e0e0;
}

.donate-form-title {
    font-size: 1.6rem;
    color: var(--primary);
    margin: 0 0 8px;
}

.donate-form-subtitle {
    font-size: 1rem;
    color: #777;
    margin: 0 0 30px;
}

.donate-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.donate-form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.donate-form-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #444;
}

.donate-form-input {
    padding: 14px 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.donate-form-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(34, 139, 34, 0.1);
}

.donate-form-input::placeholder {
    color: #aaa;
}

.donate-form-textarea {
    resize: vertical;
    min-height: 120px;
}

.donate-form-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding: 16px 32px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.donate-form-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(34, 139, 34, 0.3);
}

.donate-form-btn i {
    font-size: 1.1rem;
}

/* ══════════════════════════════════════════════
   CTA SECTION
   ══════════════════════════════════════════════ */
.donate-cta {
    padding: 60px 5%;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark, #1a5a3a) 100%);
    text-align: center;
}

.donate-cta-title {
    font-size: 2rem;
    color: #fff;
    margin: 0 0 12px;
}

.donate-cta-text {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
}

/* ══════════════════════════════════════════════
   RESPONSIVE
   ══════════════════════════════════════════════ */
@media (max-width: 992px) {
    .donate-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .donate-hero-title {
        font-size: 2.8rem;
    }
}

@media (max-width: 768px) {
    .donate-hero {
        min-height: 38vh;
    }

    .donate-hero-title {
        font-size: 2.3rem;
    }

    .donate-hero-subtitle {
        font-size: 1rem;
    }

    .donate-intro,
    .donate-main {
        padding: 50px 20px;
    }

    .donate-intro-text {
        font-size: 1rem;
        text-align: justify;
    }

    .donate-bank,
    .donate-form-wrapper {
        padding: 28px 24px;
    }

    .donate-bank-title,
    .donate-form-title {
        font-size: 1.4rem;
    }

    .donate-account-row {
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
    }

    .donate-cta {
        padding: 50px 20px;
    }

    .donate-cta-title {
        font-size: 1.6rem;
    }
}

@media (max-width: 480px) {
    .donate-hero-title {
        font-size: 2rem;
    }

    .donate-intro-highlight {
        flex-direction: column;
        text-align: center;
        padding: 16px;
    }
}
</style>
