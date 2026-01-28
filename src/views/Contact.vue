<template>
    <div class="contact-page">
        <!-- Header Section -->
        <section class="contact-header" data-aos="fade-down" data-aos-duration="700">
            <h1 class="contact-header-title">Contacto</h1>
<!--             <p class="contact-header-subtitle">Estamos aquí para atenderte</p>
 -->        </section>

        <!-- Main Content -->
        <section class="contact-main">
            <div class="contact-grid">
                <!-- Contact Info -->
                <div class="contact-info" data-aos="fade-right" data-aos-duration="700">
                    <h2 class="contact-info-title">Información de contacto</h2>
                    <p class="contact-info-text">
                        Contáctenos mediante las siguientes opciones y te brindaremos atención personalizada.
                    </p>

                    <div class="contact-cards">
                        <!-- Phone -->
                        <a href="tel:+50627107416" class="contact-card" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                            <div class="contact-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.55 7.55 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6a2 2 0 0 0-.59 1.43c0 4.1 2.1 8.4 5.25 11.55S13.9 22 18 22z"/>
                                </svg>
                            </div>
                            <div class="contact-card-content">
                                <span class="contact-card-label">Teléfono</span>
                                <span class="contact-card-value">(+506) 2710-7416</span>
                            </div>
                        </a>

                        <!-- Email -->
                        <a href="mailto:asirea@asirea.org" class="contact-card" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                            <div class="contact-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4.7-8 5.33L4 8.7V6.3l8 5.33 8-5.33z"/>
                                </svg>
                            </div>
                            <div class="contact-card-content">
                                <span class="contact-card-label">Correo electrónico</span>
                                <span class="contact-card-value">asirea@asirea.org</span>
                            </div>
                        </a>

                        <!-- Schedule -->
                        <div class="contact-card" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                            <div class="contact-card-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10 10-4.49 10-10S17.51 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
                                </svg>
                            </div>
                            <div class="contact-card-content">
                                <span class="contact-card-label">Horario de atención</span>
                                <span class="contact-card-value">Lunes a Viernes, 8am - 4pm</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="contact-form-wrapper" data-aos="fade-left" data-aos-duration="700">
                    <h2 class="contact-form-title">Envíanos un mensaje</h2>
                    <p class="contact-form-subtitle">
                        Llena el formulario y estaremos atendiendo tu solicitud con la mayor brevedad.
                    </p>

                    <form class="contact-form">
                        <div class="contact-form-group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100">
                            <label for="name" class="contact-form-label">Nombre completo</label>
                            <input type="text" class="contact-form-input" id="name" placeholder="Tu nombre y apellido" required>
                        </div>
                        <div class="contact-form-group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="150">
                            <label for="phone" class="contact-form-label">Teléfono</label>
                            <input type="tel" class="contact-form-input" id="phone" placeholder="Ej. +506 8888-8888">
                        </div>
                        <div class="contact-form-group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="200">
                            <label for="mail" class="contact-form-label">Correo electrónico</label>
                            <input type="email" class="contact-form-input" id="mail" placeholder="nombre@ejemplo.com" required>
                        </div>
                        <div class="contact-form-group" data-aos="fade-up" data-aos-duration="500" data-aos-delay="250">
                            <label for="message" class="contact-form-label">Mensaje</label>
                            <textarea class="contact-form-input contact-form-textarea" id="message" rows="4"
                                placeholder="Escribe tu mensaje aquí..." required></textarea>
                        </div>
                        <button type="submit" class="contact-form-btn" data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.56 3.17c-.29-.2-.67-.23-.99-.08l-17 8.01a.999.999 0 0 0 .03 1.82L8 15.28V22l5.84-4.17 4.76 2.08c.13.06.26.08.4.08.18 0 .36-.05.52-.15a.99.99 0 0 0 .48-.79l1-15c.02-.35-.14-.69-.43-.89Zm-2.47 14.34-5.21-2.28L16 9l-7.65 4.25-2.93-1.28 13.47-6.34-.79 11.89Z"/>
                            </svg>
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </div>
    <WatsAppBtn></WatsAppBtn>
</template>

<script setup>
import WatsAppBtn from '../components/WatsAppBtn.vue';
</script>

<style scoped>
/* ══════════════════════════════════════════════
   HEADER SECTION
   ══════════════════════════════════════════════ */
.contact-header {
    padding: 60px 5% 50px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-dark, #1a5a3a) 100%);
    text-align: center;
}

.contact-header-title {
    font-size: 2.8rem;
    font-weight: 800;
    color: #fff;
    margin: 0 0 10px;
    text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.contact-header-subtitle {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
}

/* ══════════════════════════════════════════════
   MAIN SECTION
   ══════════════════════════════════════════════ */
.contact-main {
    padding: 70px 5%;
    background-color: var(--bg-alt, #f8f9fa);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
}

/* ══════════════════════════════════════════════
   CONTACT INFO
   ══════════════════════════════════════════════ */
.contact-info {
    padding-right: 20px;
}

.contact-info-title {
    font-size: 1.6rem;
    color: var(--primary);
    margin: 0 0 12px;
}

.contact-info-text {
    font-size: 1rem;
    color: var(--text-body, #555);
    line-height: 1.7;
    margin: 0 0 30px;
}

.contact-cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.contact-card {
    display: flex;
    align-items: center;
    gap: 16px;
    background: #fff;
    padding: 20px;
    border-radius: 12px;
    border: 1px solid #e0e0e0;
    text-decoration: none;
    transition: border-color 0.3s ease, transform 0.3s ease;
}

a.contact-card:hover {
    border-color: var(--primary);
    transform: translateX(6px);
}

.contact-card-icon {
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.contact-card-icon svg {
    width: 24px;
    height: 24px;
    color: #fff;
}

.contact-card-content {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.contact-card-label {
    font-size: 0.85rem;
    color: #777;
    font-weight: 500;
}

.contact-card-value {
    font-size: 1.05rem;
    color: #333;
    font-weight: 600;
}

/* ══════════════════════════════════════════════
   CONTACT FORM
   ══════════════════════════════════════════════ */
.contact-form-wrapper {
    background: #fff;
    border-radius: 16px;
    padding: 40px;
    border: 1px solid #e0e0e0;
}

.contact-form-title {
    font-size: 1.6rem;
    color: var(--primary);
    margin: 0 0 8px;
}

.contact-form-subtitle {
    font-size: 1rem;
    color: #777;
    margin: 0 0 30px;
    line-height: 1.6;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.contact-form-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.contact-form-label {
    font-size: 0.95rem;
    font-weight: 600;
    color: #444;
}

.contact-form-input {
    padding: 14px 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

.contact-form-input:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(34, 139, 34, 0.1);
}

.contact-form-input::placeholder {
    color: #aaa;
}

.contact-form-textarea {
    resize: vertical;
    min-height: 120px;
}

.contact-form-btn {
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

.contact-form-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(34, 139, 34, 0.3);
}

.contact-form-btn svg {
    width: 20px;
    height: 20px;
}

/* ══════════════════════════════════════════════
   RESPONSIVE
   ══════════════════════════════════════════════ */
@media (max-width: 992px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .contact-info {
        padding-right: 0;
    }

    .contact-header-title {
        font-size: 2.4rem;
    }
}

@media (max-width: 768px) {
    .contact-header {
        padding: 50px 20px 40px;
    }

    .contact-header-title {
        font-size: 2rem;
    }

    .contact-main {
        padding: 50px 20px;
    }

    .contact-form-wrapper {
        padding: 28px 24px;
    }

    .contact-info-title,
    .contact-form-title {
        font-size: 1.4rem;
    }

    .contact-card {
        padding: 16px;
    }

    .contact-card-icon {
        width: 45px;
        height: 45px;
    }
}

@media (max-width: 480px) {
    .contact-header-title {
        font-size: 1.8rem;
    }

    .contact-card {
        flex-direction: column;
        text-align: center;
    }

    .contact-card-content {
        align-items: center;
    }
}
</style>
