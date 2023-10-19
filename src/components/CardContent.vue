<template>
    <div @click="click">
        <img :src="IMG_URL" :alt=NAME>
        <h1>{{ NAME }}</h1>
    </div>
    <div v-show="display">
        <h1>{{ DESCRIPTION }}</h1>
        <h1>Meses de temporada: {{ MONTHS }}</h1>
        <h1>Regiones de origen: {{ origin }}</h1>
        <h1>Nombre cientifico: {{ SCIENTIFIC_NAME }}</h1>
    </div>
</template>

<script>
export default {
    data() {
        return {
            display: false,
            origin: this.ORIGIN.join(", ")
        }
    },
    props: {
        NAME: {
            type: String,
        },
        IMG_URL: {
            type: String,
        },
        DESCRIPTION: {
            type: String,
        },
        MONTHS: {
            type: String,
        },
        ORIGIN: {
            type: Array,
        },
        SCIENTIFIC_NAME: {
            type: String,
        },
        SEASON: {
            type: Array,
        },
        TYPE: {
            type: String,
        }

    },
    methods: {
        click() {
            this.display = !this.display
        }
    },
}
</script>