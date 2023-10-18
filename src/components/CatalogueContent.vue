<template>
    <div>
        <li v-for="product in products" :key="product.id">{{ product.NAME }}</li>
        <!-- {{ querySnapshotData[0].NAME }} -->
    </div>
</template>

<script>
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
}
</script>

<style scoped></style>