<template>
    <div class="container-fluid">
        <section class="container">
            <div id="caja" class="col-md-12 ctextcenter">
                <br>
                <h1>Colaboración institucional</h1>
                <br>

                <p style="text-align: left;">
                    En ASIREA, creemos en el poder de la participación y la colaboración. Por eso, la articulación con
                    otras
                    instituciones forma parte esencial de nuestra estrategia de acción. <br>
                    A través de convenios, redes de trabajo y espacios de diálogo, generamos sinergias que fortalecen
                    nuestras iniciativas
                    y permiten desarrollar proyectos con mayor alcance, eficiencia e impacto. Cada alianza estratégica
                    suma capacidades,
                    conecta saberes y nos impulsa a lograr transformaciones reales en las comunidades. <br>
                    <b>¡Colaborar no es solo unir esfuerzos: es multiplicar resultados!</b>
                </p>
            </div>
        </section>
        <section class="row">
            <CardList json-url="src/json/colaborations.json" />
        </section>
        <section class="container">
            <div class="row">
                <div class="col-md-12 ccardstitle">
                </div>
            </div>
            <div id="caja" class="col-md-12 ctextcenter">
                <h1>Proyectos</h1>
                <br>

                <p style="text-align: left;">
                    Durante su existencia, ASIREA a tratado de ser un motor de enlace y generación opciones de
                    desarrollo sostenible para la Región Atlántica, apoyando iniciativas de desarrollo amigables
                    con el ambiente que busquen mejorar la calidad de vida de la población local.
                </p>
            </div>
        </section>
        <section class="row">
            <CardList json-url="src/json/projects.json" :show-button="true" button-text="Conocer más"
                :target-blank="true" />
        </section>
        <section class="container">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12 ccardstitle">
                    </div>
                </div>

                <div id="caja" class="col-md-12 ctextcenter">
                    <h1>Documentos técnicos</h1>
                    <br>

                    <p style="text-align: left;">
                        Con el compromiso de promover el acceso al conocimiento y fortalecer las capacidades técnicas
                        del sector,
                        ASIREA pone a disposición del público una serie de documentos técnicos que fortalecen el
                        desarrollo sostenible.
                        Estos materiales están orientados a compartir experiencias, metodologías y aprendizajes que
                        puedan ser de utilidad
                        para otros actores e iniciativas afines.
                    </p>
                    <br>
                    <h2>Fichas técnicas relacionadas con la producción de sistemas agroforestales
                    </h2>
                    <br>

                    <p style="text-align: left;">
                        Serie técnica desarrollada para orientar y bindar alternativas de producción
                        diversificada y sostenible en fincas pequeñas y medianas de la Región
                        Atlántica.
                    </p>
                </div>
            </div>
        </section>
        <section class="row">
            <CardList json-url="src/json/techniques.json" :show-button="true" button-text="Ver documento"
                :target-blank="true" />
        </section>

        <section class="container">
            <div class="row">
                <div class="col-md-12 ccardstitle">
                    <h2>Informes y tesis</h2>
                </div>
            </div>
        </section>
        <section class="row">
            <CardList json-url="src/json/thesis.json" :show-button="true" button-text="Ver documento"
                :target-blank="true" />
        </section>
    </div>
    <WatsAppBtn></WatsAppBtn>

</template>
<script setup>
import CardList from "@/components/CardList.vue"
import WatsAppBtn from "@/components/WatsAppBtn.vue"
</script>