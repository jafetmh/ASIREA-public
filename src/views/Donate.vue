<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-md-4 offset-md-4">
                <br>
                <h1>Donación</h1>
            </div>
        </section>
        <section class="row">
            <div class="col-md-4 offset-md-4">
                <p class="texto">
                    Cada donación que recibimos nos ayuda a continuar apoyando a agricultores y comunidades que integran
                    prácticas sostenibles en sus fincas, creando oportunidades reales de conservación y desarrollo.
                    <br><br>
                    Al colaborar con nuestra organización, estás invirtiendo en soluciones concretas frente al cambio
                    climático, la degradación del suelo y la pérdida de biodiversidad. Tu donación es una semilla que
                    crecerá en forma de acciones sostenibles y comunidades resilientes. <br><br>
                    Sus donaciones pueden ser deducibles del impuesto sobre la renta. <br><br>
                    <b>¡Súmate al cambio!</b>
                </p>
                <p class="texto">
                    <br>
                    <b>Asociación para el Desarrollo Sostenible de la Región Atlántica</b>
                    <b>Cédula jurídica:</b> 3-002-114418 <br>
                    <br>
                    <b>Cuenta en Colones:</b>
                    100-01-051-003345-4 <br>
                    <b>CC: </b> 15105110010033457 <br>
                    <b>IBAN: </b> CR85 0151 0511 0010 0334 57 <br>
                    <br>
                    <b>Cuenta en Dólares: </b>
                    100-02-051-600061-4 <br>
                    <b>CC:</b> 15105110026000611 <br>
                    <b>IBAN: </b> CR32 0151 0511 0026 0006 11 <br>

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
                <button id="btSendDonate" class="btn btn-primary cboton">Enviar</button>
            </div>

        </section>

    </div>
    <WatsAppBtn></WatsAppBtn>
</template>
<script setup>
import WatsAppBtn from "@/components/WatsAppBtn.vue"
</script>