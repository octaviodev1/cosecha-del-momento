<template>
    <div v-if="products" class="grid grid-cols-4 gap-4">
        <CardContent v-for="product in products" :key="product.ID" :NAME=product.NAME :IMG_URL=product.IMG_URL
            :DESCRIPTION=product.DESCRIPTION :MONTHS=product.MONTHS :ORIGIN=product.ORIGIN :SEASON=product.SEASON
            :SCIENTIFIC_NAME=product.SCIENTIFIC_NAME>
        </CardContent>
    </div>
</template>

<script>
import CardContent from './CardContent.vue';
export default {
    props: {
        products: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    components: {
        CardContent,
    },
}
</script>

<style scoped></style>