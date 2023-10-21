<template>
    <TopNav />
    <div>Términos de Servicio

        Última actualización: [Fecha de la última actualización]

        Bienvenido a [Nombre de tu sitio web] ("Nosotros" o "Nuestro"). Te invitamos a utilizar nuestra plataforma en línea
        para explorar y aprender sobre frutas y verduras de España. Antes de utilizar nuestros servicios, te pedimos que
        leas y comprendas estos Términos de Servicio ("Términos") que rigen tu acceso y uso de nuestro sitio web y servicios
        relacionados.

        1. Aceptación de los Términos

        Al acceder y utilizar nuestro sitio web, aceptas estar legalmente obligado por estos Términos. Si no estás de
        acuerdo con estos Términos, por favor, no utilices nuestro sitio web.

        2. Uso de Contenido

        2.1. Contenido de la Página

        El contenido de nuestro sitio web, incluyendo la información sobre frutas y verduras de España, como nombres
        científicos, temporadas, descripciones de origen y comunidades de producción, es proporcionado con fines
        informativos. Este contenido se basa en datos obtenidos del Ministerio de Agricultura, Pesca y Alimentación y se
        presenta de buena fe. No garantizamos la exactitud, integridad o actualidad de esta información.

        2.2. Uso Responsable

        Los usuarios son responsables de utilizar el contenido de manera responsable y ética. No está permitido el uso de
        este sitio web para fines ilegales, difamatorios, obscenos, o cualquier otro propósito que infrinja los derechos de
        terceros.

        3. Privacidad

        Nuestra política de privacidad describe cómo recopilamos, usamos y protegemos tus datos personales. Te recomendamos
        que leas nuestra política de privacidad [Enlace a la política de privacidad] para comprender cómo manejamos la
        información de los usuarios.

        4. Propiedad Intelectual

        Nuestro sitio web y su contenido, incluyendo textos, imágenes, logotipos y marcas registradas, están protegidos por
        leyes de propiedad intelectual. No se permite la reproducción, distribución o modificación del contenido sin permiso
        escrito.

        5. Enlaces a Terceros

        Nuestro sitio web puede contener enlaces a sitios web de terceros. No tenemos control sobre el contenido o las
        políticas de privacidad de estos sitios. No somos responsables de ningún daño o pérdida que puedas sufrir al acceder
        a estos sitios.

        6. Cambios a los Términos

        Nos reservamos el derecho de modificar estos Términos en cualquier momento. Las actualizaciones se harán efectivas
        una vez que se publiquen en nuestro sitio web. Te recomendamos revisar estos Términos periódicamente para mantenerte
        informado.

        7. Contacto

        Si tienes alguna pregunta o comentario sobre estos Términos, por favor, contáctanos a través de [tu dirección de
        correo electrónico de contacto].

        Gracias por utilizar [Nombre de tu sitio web]. Esperamos que disfrutes de nuestro contenido y servicios.</div>
    <FooterInfo />
</template>

<script>
import {
    Ripple,
    Input,
    initTE,
} from "tw-elements";
import TopNav from '../components/TopNav.vue';
import FooterInfo from '../components/FooterInfo.vue';
export default {
    components: {
        TopNav,
        FooterInfo,
    },
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