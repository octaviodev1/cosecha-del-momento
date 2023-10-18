<template>
    <TopNav></TopNav>

    <div id="carousel" class="relative" data-te-carousel-init data-te-ride="carousel">
        <div class="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators>
            <button type="button" data-te-target="#carousel" data-te-slide-to="0" data-te-carousel-active
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-te-target="#carousel" data-te-slide-to="1"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 2"></button>
            <button type="button" data-te-target="#carousel" data-te-slide-to="2"
                class="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                aria-label="Slide 3"></button>
        </div>
        <div class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
            <div class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-active data-te-carousel-item style="backface-visibility: hidden">
                <img loading="lazy" src="../assets/img/naranjos.jpg" class="block w-full" alt="..." />
                <div class="absolute top-60 left-48 hidden py-5  text-white md:block">
                    <h2 class="mb-5 text-4xl font-bold">!Bienvenido a Cosecha del Momento¡</h2>
                    <p>Descubre la riqueza de la agricultura española a través de nuestra amplia gama de frutas y verduras.
                    </p>
                </div>
            </div>
            <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item style="backface-visibility: hidden">
                <img loading="lazy" src="../assets/img/viñedo.jpg" class="block w-full" alt="..." />
                <div class="absolute top-60 left-48 hidden py-5  text-white md:block">
                    <h2 class="mb-5 text-4xl font-bold">!Bienvenido a Cosecha del Momento¡</h2>
                    <p>Te proporcionamos información detallada sobre cada producto y cuándo es la temporada ideal para
                        disfrutarlos.
                    </p>
                </div>
            </div>
            <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
                data-te-carousel-item style="backface-visibility: hidden">
                <img loading="lazy" src="../assets/img/platanos.jpg" class="block w-full" alt="..." />
                <div class="absolute top-60 left-48 hidden py-5  text-white md:block">
                    <h2 class="mb-5 text-4xl font-bold">!Bienvenido a Cosecha del Momento¡</h2>
                    <p>¡Súmate a la frescura y la diversidad de la producción española de alimentos! ¿En qué te gustaría
                        sumergirte hoy?
                    </p>
                </div>
            </div>
        </div>
        <button
            class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carousel" data-te-slide="prev">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
        </button>
        <button
            class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button" data-te-target="#carousel" data-te-slide="next">
            <span class="inline-block h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
            <span
                class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
        </button>
    </div>

    <div class="flex justify-center align-middle my-10">
        <RouterLink to="/catalogue" class="bg-green rounded-md text-lg text-white p-8 font-bold">Catálogo
        </RouterLink>
    </div>

    <FooterInfo></FooterInfo>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FooterInfo from "../components/FooterInfo.vue";
import {
    Carousel,
    initTE,
} from "tw-elements";
export default {
    name: "HomeView",
    components: {
        TopNav,
        FooterInfo,
    },
    mounted() {
        initTE({ Carousel });
    },
}
</script>

<style scoped></style>