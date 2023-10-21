<template>
    <TopNav></TopNav>
    <div>
        <img class="w-full" src="https://iili.io/JF6o9Pn.jpg" alt="Sobre Nosotros">
        <div class="flex flex-col justify-center items-center">
            <h1 class="flex justify-center font-bold text-7xl bg-yellow p-9 w-full">SOBRE NOSOTROS</h1>
            <div class="w-2/3 flex flex-col">
                <div>
                    <div class="flex flex-row items-center my-16">
                        <div>
                            <img src="https://iili.io/JF6d5B4.jpg"
                                class="h-auto max-w-sm rounded-full shadow-lg dark:shadow-black/30" alt="martaTelmaDog">
                        </div>
                        <div class="flex flex-wrap mx-16">
                            <p><span class="font-bold text-3xl">Marta</span><br>
                                "Se podría decir que soy un "culo inquieto"... llámalo curiosidad, anhelo de
                                aprendizaje
                                continuo. En lo laboral me considero competente y resolutiva. Llegué al turismo porque me
                                encantan las distintas culturas, el conocimiento de idiomas y hacer de guía de alguien. Y
                                aunque
                                en esa aventura aprendí muchísimo, me sentí valorada y conseguí la ansiada estabilidad,
                                busco un
                                proyecto profesional que me haga feliz y que me suponga un reto constante. De ahí mis
                                primeros
                                pasos formándome en programación, y es precisamente en esa recompensa visual que te regala
                                el
                                Front, en el diseño, dónde me gustaría desarrollarme profesionalmente."
                            </p>
                            <a class="m-5" href="https://github.com/MartaLax"><img
                                    src="@/assets/social_media/github-blue.svg" alt="github"></a>
                            <a class="m-5" href="https://www.linkedin.com/in/marta-ermerinda-lax-casta%C3%B1o/"><img
                                    src="@/assets/social_media/linkedin-blue.svg" alt="linkedin"></a>
                        </div>
                    </div>

                    <hr
                        class="my-12 h-1 border-t-0 bg-yellow bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                    <div class="flex flex-row-reverse items-center my-16">
                        <div>
                            <img src="https://iili.io/JF6d7El.jpg"
                                class="h-auto max-w-sm rounded-full shadow-lg dark:shadow-black/30" alt="braisLuffyCat">
                        </div>
                        <div class="flex flex-wrap mx-16">
                            <p><span class="font-bold text-3xl">Brais</span><br>"Afición por las series,
                                videojuegos, y dar paseos con mi gato Luffy. Estudié Ingeniería
                                Industrial donde me interesé por la programación. Esta fue mi prioridad por la empleabilidad
                                y
                                retos que me podía ofrecer. Soy un desarrollador web en constante aprendizaje con gran
                                capacidad
                                de adaptabilidad. A corto/medio plazo me gustaría dedicarme a esto, especialmente en el
                                front,
                                poder seguir formándome para llegar a tener un perfil Full-Stack, dar respuesta a un
                                exigente
                                sector tecnológico, y con el tiempo, crecer y gestionar equipos de trabajo."</p>
                            <a class="m-5" href="https://github.com/braisvial"><img
                                    src="@/assets/social_media/github-green.svg" alt="github"></a>
                            <a class="m-5" href="https://www.linkedin.com/in/braisvila/"><img
                                    src="@/assets/social_media/linkedin-green.svg" alt="linkedin"></a>
                        </div>
                    </div>

                    <hr
                        class="my-12 h-1 border-t-0 bg-yellow bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />

                    <div class="flex flex-row items-center my-16">
                        <div>
                            <img src="https://iili.io/JF6dY42.jpg"
                                class="h-auto max-w-sm rounded-full shadow-lg dark:shadow-black/30" alt="octavioSexyCat">
                        </div>
                        <div class="flex flex-wrap mx-16">
                            <p>
                                <span class="font-bold text-3xl">Octavio</span><br>
                                "Siempre me ha gustado la tecnología, la informática... y aunque mi base formativa me llevó
                                a
                                los
                                sistemas, pronto descubrí que lo que me motivaba realmente era el desarrollo web, y dentro
                                de
                                él, el Front. ¿Qué decir? Cuando estoy programando se me pasa el tiempo volando. En mi
                                tiempo
                                libre, soy de estar con mi gente, compartir con amigos... Me gusta el anime, los videojuegos
                                y
                                los animales."
                            </p>
                            <a class="m-5" href="https://github.com/octaviodev1"><img
                                    src="@/assets/social_media/github-black.svg" alt="github"></a>
                            <a class="m-5" href="https://www.linkedin.com/in/octavian-mihail-badea"><img
                                    src="@/assets/social_media/linkedin-black.svg" alt="linkedin"></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterInfo></FooterInfo>
</template>

<script>
import TopNav from '../components/TopNav.vue';
import FooterInfo from '../components/FooterInfo.vue';
export default {
    name: "AboutView",
    components: {
        TopNav,
        FooterInfo,
    },
}
</script>

<style></style>