<template>
    <div class="flex flex-col justify-center items-center font-new-font">
        <img class="w-96 h-96" :src="selectedImg" alt="error404">
        <div class="w-1/2">
            <p class="leading-8">
                Tuvimos un problema encontrando la página que estás buscando. Parece que la ruta que ingresaste no existe en
                nuestro sitio. Puede que la página haya sido eliminada, movida o que haya ocurrido un error tipográfico en
                la
                dirección. <br> <br>

                Por favor, verifica la URL o utiliza nuestro menú de navegación para encontrar lo que estás buscando. Si
                sigues
                teniendo problemas, no dudes en contactarnos para que podamos ayudarte a encontrar la información que
                necesitas.
                <br><br>
            </p>
        </div>
        <RouterLink to="/"
            class="inline-flex bg-green rounded-3xl text-lg text-white my-10 py-10 px-14 font-bold transition duration-300 ease-in-out hover:scale-110 hover:bg-success-700">
            Volver a Inicio</RouterLink>
    </div>
</template>

<script>
export default {
    name: "NotFoundView",
    data() {
        return {
            selectedImg: '',
            urlImgs: [
                "https://iili.io/JKznGmQ.webp",
                "https://iili.io/JKznVIV.webp",
                "https://iili.io/JKznEkx.webp",
                "https://iili.io/JKzn17j.webp",
            ]
        }
    },
    created() {
        this.selectRandomUrlImg();
    },
    methods: {
        selectRandomUrlImg() {
            const randomNumber = Math.floor(Math.random() * this.urlImgs.length);
            this.selectedImg = this.urlImgs[randomNumber]
        }
    }
}
</script>