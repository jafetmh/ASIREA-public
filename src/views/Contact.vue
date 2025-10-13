<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-md-4 offset-md-4">
                <br>
                <h1>Contacto</h1>
            </div>
        </section>
        <section class="row">
            <div class="col-md-4 offset-md-4">
                <p class="texto">
                    Contáctenos mediante las siguientes opciones y te brindaremos atención personalizada.
                </p>
                <div>
                    <p class="texto">
                        <b>Teléfono</b> <br>
                        <a href="tel:+50627107416" target="_blank" style="color: #000;"><i
                                class="bi bi-telephone cicon"></i>(+506)
                            2710-7416</a> <br><br>
                        <b>Horario de atención</b><br>
                        Lunes a Viernes de 8 am a 4 pm <br><br>
                        <b>Correo electrónico</b><br>
                        <a href="mailto:asirea@asirea.org" target="_blank" style="color: #000;"><i
                                class="bi bi-envelope cicon"></i>asirea@asirea.org</a><br><br>

                    </p>
                </div>

                <p class="texto">
                    También puede dejar un mensaje llenado el siguiente formulario y estaremos atendiendo su solicitud
                    con la mayor brevedad.
                </p>
                <form class="texto">
                    <div class="mb-3">
                        <label for="name" class="form-label"><b>Nombre completo</b></label>
                        <input type="text" class="form-control" id="name" placeholder="Tu nombre y apellido" required>
                    </div>
                    <div class="mb-3">
                        <label for="phone" class="form-label"><b>Teléfono</b></label>
                        <input type="tel" class="form-control" id="phone" placeholder="Ej. +506 8888-8888">
                    </div>
                    <div class="mb-3">
                        <label for="mail" class="form-label"><b>Correo electrónico</b></label>
                        <input type="email" class="form-control" id="mail" placeholder="nombre@ejemplo.com" required>
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label"><b>Mensaje</b></label>
                        <textarea class="form-control" id="message" rows="5" placeholder="Escribe tu mensaje aquí..."
                            required></textarea>
                    </div>
                </form>
                <button id="btSendContact" class="btn btn-primary cboton">Enviar</button>
            </div>
        </section>
    </div>
    <WatsAppBtn></WatsAppBtn>
</template>
<script setup>
import WatsAppBtn from '../components/WatsAppBtn.vue';
</script>