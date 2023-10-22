<template>
    <div class="grid grid-cols-4 gap-4">
        <CardContent v-for="product in products" :key="product.ID" :NAME=product.NAME :IMG_URL=product.IMG_URL
            :DESCRIPTION=product.DESCRIPTION :MONTHS=product.MONTHS :ORIGIN=product.ORIGIN :SEASON=product.SEASON
            :SCIENTIFIC_NAME=product.SCIENTIFIC_NAME>
        </CardContent>
    </div>
</template>

<script>
import CardContent from './cardcontent.vue';
export default {
    data() {
        return {
            products: ''
        }
    },
    mounted() {
        fetch('/.netlify/functions/getProducts')
            .then(response => response.json())
            .then(data => {
                this.products = data;
            })
            .catch(error => {
                console.error("Error al recuperar los datos: ", error)
            })
    },
    components: {
        CardContent,
    },
}
</script>

<style scoped></style>