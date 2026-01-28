<template>
    <footer class="footer">
        <!-- Mobile Footer -->
        <div class="footer-mobile">
            <router-link to="/home" class="footer-mobile-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.71 2.29a1 1 0 0 0-1.42 0l-9 9a1 1 0 0 0 0 1.42A1 1 0 0 0 3 13h1v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h1a1 1 0 0 0 .71-.29 1 1 0 0 0 0-1.42zM6 20v-9.59l6-6 6 6V20z"/>
                </svg>
            </router-link>
            <a href="tel:+50627107416" class="footer-mobile-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.55 7.55 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6a2 2 0 0 0-.59 1.43c0 4.1 2.1 8.4 5.25 11.55S13.9 22 18 22z"/>
                </svg>
            </a>
            <a href="https://www.facebook.com/ASIREA/" target="_blank" class="footer-mobile-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.4 22V12.9h3l.5-3.6h-3.5v-2c0-1.1.3-1.7 1.8-1.7h2V2.1c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.6H6.6v3.6h3.1V22z"/>
                </svg>
            </a>
            <a href="https://wa.me/50683428764" target="_blank" class="footer-mobile-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"/>
                </svg>
            </a>
        </div>

        <!-- Desktop Footer -->
        <div class="footer-desktop">
            <div class="footer-content">
                <!-- Logo Column -->
                <div class="footer-col footer-col--logo">
                    <router-link to="/home" class="footer-logo">
                        <img src="/images/Logo BN-01.png" alt="ASIREA Logo" />
                    </router-link>
                    <p class="footer-tagline">
                        Asociación para el Desarrollo Sostenible de la Región Atlántica
                    </p>
                </div>

                <!-- Contact Column -->
                <div class="footer-col">
                    <h3 class="footer-col-title">Contáctenos</h3>
                    <ul class="footer-contact-list">
                        <li>
                            <a href="tel:+50627107416" class="footer-contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.55 7.55 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6a2 2 0 0 0-.59 1.43c0 4.1 2.1 8.4 5.25 11.55S13.9 22 18 22z"/>
                                </svg>
                                <span>(+506) 2710-7416</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://wa.me/50683428764" target="_blank" class="footer-contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"/>
                                </svg>
                                <span>(+506) 8342-8764</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:asirea@asirea.org" class="footer-contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m0 4.7-8 5.33L4 8.7V6.3l8 5.33 8-5.33z"/>
                                </svg>
                                <span>asirea@asirea.org</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/ASIREA/" target="_blank" class="footer-contact-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.4 22V12.9h3l.5-3.6h-3.5v-2c0-1.1.3-1.7 1.8-1.7h2V2.1c-.3 0-1.5-.1-2.8-.1-2.8 0-4.7 1.7-4.7 4.8v2.6H6.6v3.6h3.1V22z"/>
                                </svg>
                                <span>Facebook</span>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- Location Column -->
                <div class="footer-col footer-col--map">
                    <h3 class="footer-col-title">Ubicación</h3>
                    <div class="footer-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4831.5684999162795!2d-83.77627962416561!3d10.212449869341368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0b8101ad5f637%3A0x2ea7ba245230e7bf!2sASIREA!5e1!3m2!1ses!2scr!4v1750606473497!5m2!1ses!2scr"
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                    <p class="footer-address">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7m0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5"/>
                        </svg>
                        2 Km al este de la Iglesia Católica de Pococí (Guápiles), carretera al Molino en calle Uno de Jiménez, dentro de la Estación Experimental Los Diamantes
                    </p>
                </div>
            </div>

            <!-- Footer Bottom -->
            <div class="footer-bottom">
                <p class="footer-copyright">&copy; 2025 ASIREA. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
/* ******************
   FOOTER BASE
   ****************** */
.footer {
    background: linear-gradient(180deg, #1a3d1a 0%, #0d1f0d 100%);
    color: #fff;
}

/* ********************
   MOBILE FOOTER
   ******************** */
.footer-mobile {
    display: none;
    justify-content: space-around;
    align-items: center;
    padding: 16px 20px;
    background: #1a3d1a;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-mobile-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    color: rgba(255, 255, 255, 0.8);
    border-radius: 50%;
    transition: all 0.3s ease;
}

.footer-mobile-link:hover {
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
}

.footer-mobile-link svg {
    width: 24px;
    height: 24px;
}


/*******  DESKTOP FOOTER ***********/

.footer-desktop {
    padding: 60px 5% 0;
}

.footer-content {
    display: grid;
    grid-template-columns: 1.2fr 1fr 1.5fr;
    gap: 50px;
    max-width: 1200px;
    margin: 0 auto;
    padding-bottom: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

/* Logo Column */
.footer-col--logo {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.footer-logo img {
    max-width: 180px;
    height: auto;
    filter: brightness(0) invert(1);
    opacity: 0.9;
    transition: opacity 0.3s ease;
}

.footer-logo:hover img {
    opacity: 1;
}

.footer-tagline {
    font-size: 0.95rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
}

/* Column Titles */
.footer-col-title {
    font-size: 1.15rem;
    font-weight: 600;
    color: #fff;
    margin: 0 0 20px;
    padding-bottom: 12px;
    border-bottom: 2px solid var(--primary-light, #4caf50);
    display: inline-block;
}

/* Contact List */
.footer-contact-list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.footer-contact-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}

.footer-contact-link:hover {
    color: #fff;
    transform: translateX(4px);
}

.footer-contact-link svg {
    flex-shrink: 0;
    opacity: 0.7;
}

.footer-contact-link:hover svg {
    opacity: 1;
}

/* Map Column */
.footer-col--map {
    display: flex;
    flex-direction: column;
}

.footer-map {
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 16px;
    border: 2px solid rgba(255, 255, 255, 0.1);
}

.footer-map iframe {
    width: 100%;
    height: 200px;
    border: none;
    display: block;
}

.footer-address {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    font-size: 0.85rem;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.6;
    margin: 0;
}

.footer-address svg {
    flex-shrink: 0;
    margin-top: 3px;
    opacity: 0.7;
}

/* Footer Bottom */
.footer-bottom {
    padding: 24px 0;
    text-align: center;
}

.footer-copyright {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
}

/* ══════════════════════════════════════════════
   RESPONSIVE
   ══════════════════════════════════════════════ */
@media (max-width: 992px) {
    .footer-content {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }

    .footer-col--map {
        grid-column: span 2;
    }
}

@media (max-width: 768px) {
    .footer-mobile {
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1000;
    }

    .footer-desktop {
        padding: 50px 20px 80px;
    }

    .footer-content {
        grid-template-columns: 1fr;
        gap: 35px;
        text-align: center;
    }

    .footer-col--logo {
        align-items: center;
    }

    .footer-col--map {
        grid-column: span 1;
    }

    .footer-col-title {
        display: block;
        text-align: center;
    }

    .footer-contact-list {
        align-items: center;
    }

    .footer-contact-link:hover {
        transform: none;
    }

    .footer-address {
        justify-content: center;
        text-align: center;
    }

    .footer-map iframe {
        height: 180px;
    }
}

@media (max-width: 480px) {
    .footer-mobile-link {
        width: 44px;
        height: 44px;
    }

    .footer-mobile-link svg {
        width: 22px;
        height: 22px;
    }

    .footer-logo img {
        max-width: 150px;
    }
}
</style>
