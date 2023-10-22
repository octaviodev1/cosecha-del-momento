<template>
    <div class="w-3/5 mx-auto my-10 p-20 shadow-2xl bg-[url('@/assets/paper.webp')] bg-cover">
        <h1 class="text-4xl text-center mb-10">Términos de Servicio</h1>
        <h2 class="text-xl ml-5 mb-5">Última actualización: 22 de Octubre de 2023</h2>
        <p class="mb-5">Bienvenido a Cosecha del Momento.</p>
        <p class="mb-5"> Te invitamos a utilizar nuestra plataforma en línea para explorar
            y aprender
            sobre frutas y verduras de España. Antes de utilizar nuestros servicios, te pedimos que leas y comprendas estos
            Términos de Servicio que rigen tu acceso y uso de nuestro sitio web y servicios relacionados.</p>
        <h2 class="text-xl ml-5 mb-5">1. Aceptación de los Términos</h2>
        <p class="mb-5">Al acceder y utilizar nuestro sitio web, aceptas estar legalmente obligado por estos Términos. Si no
            estás de
            acuerdo con estos Términos, por favor, no utilices nuestro sitio web.</p>
        <h2 class="text-xl ml-5 mb-5">2. Uso de Contenido</h2>
        <h3 class="text-xl ml-10 mb-5">2.1. Contenido de la Página</h3>
        <p class="mb-5">El contenido de nuestro sitio web, incluyendo la información sobre frutas y verduras de España, como
            nombres
            científicos, temporadas, descripciones de origen y comunidades de producción, es proporcionado con fines
            informativos. Este contenido se basa en datos obtenidos del Ministerio de Agricultura, Pesca y Alimentación y se
            presenta de buena fe. No garantizamos la exactitud, integridad o actualidad de esta información.</p>
        <h3 class="text-xl ml-10 mb-5">2.2. Uso Responsable</h3>
        <p class="mb-5">Los usuarios son responsables de utilizar el contenido de manera responsable y ética. No está
            permitido el uso de
            este sitio web para fines ilegales, difamatorios, obscenos, o cualquier otro propósito que infrinja los derechos
            de terceros.</p>
        <h2 class="text-xl ml-5 mb-5">3. Privacidad</h2>
        <p class="mb-5">Nuestra política de privacidad describe cómo recopilamos, usamos y protegemos tus datos personales.
            Te recomendamos que leas nuestra
            <RouterLink to="/policy" class="text-green font-semibold hover:underline">
                Política de Privacidad
            </RouterLink>
            para comprender cómo manejamos la información de los usuarios.
        </p>
        <h2 class="text-xl ml-5 mb-5">4. Propiedad Intelectual</h2>
        <p class="mb-5">Nuestro sitio web y su contenido, incluyendo textos, imágenes, logotipos y marcas registradas, están
            protegidos
            por leyes de propiedad intelectual. No se permite la reproducción, distribución o modificación del contenido sin
            permiso escrito.</p>
        <h2 class="text-xl ml-5 mb-5">5. Enlaces a Terceros</h2>
        <p class="mb-5">Nuestro sitio web puede contener enlaces a sitios web de terceros. No tenemos control sobre el
            contenido o las
            políticas de privacidad de estos sitios. No somos responsables de ningún daño o pérdida que puedas sufrir al
            acceder a estos sitios.</p>
        <h2 class="text-xl ml-5 mb-5">6. Cambios a los Términos</h2>
        <p class="mb-5">Nos reservamos el derecho de modificar estos Términos en cualquier momento. Las actualizaciones se
            harán
            efectivas una vez que se publiquen en nuestro sitio web. Te recomendamos revisar estos Términos periódicamente
            para mantenerte informado.</p>
        <h2 class="text-xl ml-5 mb-5">7. Contacto</h2>
        <p class="mb-5">Si tienes alguna pregunta o comentario sobre estos Términos, por favor, contáctanos a través de
            nuestra sección de
            <RouterLink to="/contact" class="text-green font-semibold hover:underline">
                Contacto.
            </RouterLink>
        </p>
        <p>Gracias por utilizar Cosecha del Momento. Esperamos que disfrutes de nuestro contenido y servicios.</p>
    </div>
</template>

<script>
import {
    Ripple,
    Input,
    initTE,
} from "tw-elements";
export default {
    methods: {
        redireccionarInicio() {
            this.$router.push('/');
        }
    },
    mounted() {
        initTE({ Ripple, Input });
    },
}
</script>