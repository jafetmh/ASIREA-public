<template>
    <div class="container-fluid">
        <section class="row">
            <div class="col-md-8"> <br>
                <img src="/images/psa_servicios.png" style="width: 100%; border-radius: 10px;">
            </div>
            <div id="caja" class="col-md-4 ctextcenter cverticalaling">
                <h1>Programa de Pago por Servicios Ambientales</h1>
                <p class="texto">
                    El Pago por Servicios Ambientales (PSA) es un programa del Estado costarricense que a través del
                    FONAFIFO,
                    otorga a los propietarios de bosques, plantaciones forestales y Sistemas agroforestales, una suma
                    económica
                    por los servicios ambientales que éstos proveen, incidiendo directamente en la protección y
                    mejoramiento
                    del
                    medio paisaje rural.
                </p>
                <a id="boton" href="contact.html" class="btn btn-primary btn-lg active" role="button"
                    aria-pressed="true">Contactar</a>

            </div>
        </section>
        <section class="row">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 ccardstitle">
                        <h1>Actividades del programa PSA</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="row">
            <CardList data-url="src/json/activities.json" :signal-events="null"/>
        </section>
        <section class="row">
            <div id="card">
                <div class="row">
                    <div class="col-md-6 text-center cservices cverticalaling">
                        <img class="portada_img" src="/images/vivero_servicios.png" alt="">
                        <h2>
                            Vivero forestal
                        </h2>
                        <p class="texto">
                            Contamos con un vivero forestal donde producimos material de semilla certificada para
                            asegurar tanto la calidad
                            de su plantación como el éxito en el establecimiento y crecimiento de los árboles plantados.
                            Además, se ofrecen
                            servicios en la capacitación en el establecimiento y manejo de viveros forestales.
                        </p>
                        <a id="boton" href="/contact" class="btn btn-primary btn-lg active" role="button"
                            aria-pressed="true">Contactar</a>
                    </div>
                    <div class="col-md-6 text-center cservices cverticalaling">
                        <img class="portada_img" src="/images/aprovechamiento_servicios.png" alt="">
                        <h2>
                            Permisos de aprovechamiento
                        </h2>
                        <p class="texto">
                            Asesoramos y acompañamos en temas de aprovechamientos forestales en terrenos de uso agrícola
                            o pecuarios
                            así como en la emisión de Certificados de Origen para el aprovechamiento de plantaciones
                            forestales, sistemas
                            agroforestales y árboles plantados. <br><br>
                        </p>
                        <a id="boton" href="/contact" class="btn btn-primary btn-lg active" role="button"
                            aria-pressed="true">Contactar</a>
                    </div>
                </div>
            </div>
        </section>
        <section class="row">
            <div class="row">
                <div class="col-md-6 text-center cservices cverticalaling">
                    <img class="portada_img" src="/images/grupos_servicios.png" alt="">
                    <h2>
                        Atención a grupos
                    </h2>
                    <p class="texto">
                        Atendemos e impartimos talleres educativos, realizamos visitas de
                        campo y charlas con el fin de concientizar en la protección y manejo de los recursos
                        naturales.
                        <br><br><br>
                    </p>
                    <a id="boton" href="/contact" class="btn btn-primary btn-lg active" role="button"
                        aria-pressed="true">Contactar</a>
                </div>
                <div class="col-md-6 text-center cservices cverticalaling">
                    <img class="portada_img" src="/images/asesoria_servicios.png" alt="">
                    <h2>
                        Asesoría técnica forestal
                    </h2>
                    <p class="texto">
                        Ofrecemos servicios de asistencia técnica forestal para las siguientes actividades: <br>
                        • Establecimiento y manejo de plantaciones forestales. <br>
                        • Inscripción al régimen forestal del MINAE (requisitos para exoneración de impuestos
                        municipales). <br>
                        • Recolección de muestras de suelo para análisis.

                    </p>
                    <a id="boton" href="/contact" class="btn btn-primary btn-lg active" role="button"
                        aria-pressed="true">Contactar</a>
                </div>
            </div>
        </section>
    </div>
    <WatsAppBtn></WatsAppBtn>
</template>
<script setup>
import CardList from '@/components/CardList.vue'
import WatsAppBtn from '@/components/WatsAppBtn.vue'
</script>