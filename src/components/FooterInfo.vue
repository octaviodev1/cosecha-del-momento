<template>
    <div class="absolute flex bottom-0 justify-between w-full p-5 bg-yellow">

        <div class="flex flex-col justify-center ml-32">
            <p class="mb-5">PLACEHOLDER: REDES DE CONTACTO/APARTADO CONOCENOS</p>
            <div class="flex justify-center items-center gap-5">
                <p>
                    Colaboración con
                    <a class="font-bold no-underline hover:underline"
                        href="https://www.eoi.es/es/programas/mbas-masters?course_modality_tid[]=18024&gclid=Cj0KCQjwmvSoBhDOARIsAK6aV7jluuNESn-65lyliMvEBjWhzNG0ZpIkh5XrOPKWTl3Y59O50J5wI1IaAoa0EALw_wcB"
                        target="_blank">EOI</a>
                </p>
                <div class="w-1/3 h-8">
                    <img src="@/assets/logo-eoi.png" />
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center mr-32">
            <img class="w-28 h-28" src="@/assets/logo_principal.svg" />
            <p>© 2023 Cosecha del momento. Todos los derechos reservados.</p>
        </div>

    </div>
</template>

<script>
export default {
    name: "FooterInfo"
}
</script>