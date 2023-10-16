<template>
    <div class="custom-dropdown">
        <button @click="toggleDropdown" data-te-ripple-init data-te-ripple-color="dark"
            class="text-lg font-medium mt-8">FILTRAR POR COMUNIDAD/ES
            <span class="text-green">&#9660;</span> </button>
        <div :class="{ 'dropdown-content': true, 'show': isOpen }">
            <label v-for="option in options" :key="option.value">
                <input type="checkbox" v-model="selectedOptions" :value="option.value">
                {{ option.label }}
            </label>
        </div>
    </div>
</template>

<script>
import {
    Ripple,
    initTE,
} from "tw-elements";
export default {
    name: "FilterByCommunities",
    data() {
        return {
            isOpen: false,
            selectedOptions: [],
            options: [
                { label: 'Andalucía', value: 'Andalucia' },
                { label: 'Aragón', value: 'Aragon' },
                { label: 'Asturias', value: 'Asturias' },
                { label: 'Baleares', value: 'Baleares' },
                { label: 'Canarias', value: 'Canarias' },
                { label: 'Cantabria', value: 'Cantabria' },
                { label: 'Castilla-La Mancha', value: 'Mancha' },
                { label: 'Castilla y León', value: 'Leon' },
                { label: 'Cataluña', value: 'Cataluña' },
                { label: 'Extremadura', value: 'Extremadura' },
                { label: 'Galicia', value: 'Galicia' },
                { label: 'Madrid', value: 'Madrid' },
                { label: 'Murcia', value: 'Murcia' },
                { label: 'Navarra', value: 'Navarra' },
                { label: 'País Vasco', value: 'Pais Vasco' },
                { label: 'La Rioja', value: 'La Rioja' },
                { label: 'Valencia', value: 'Valencia' },
            ],
        }
    },
    mounted() {
        initTE({ Ripple });
    },
    methods: {
        toggleDropdown() {
            this.isOpen = !this.isOpen;
            const arrow = this.$refs.arrow;
            arrow.style.transform = this.isOpen ? 'rotate(90deg)' : 'rotate(0deg)';
        },
    },

}
</script>

<style scoped>
.custom-dropdown {
    display: inline-block;
    margin: 10px;

}

button {
    cursor: pointer;
}

.dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 200px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 16px;
    z-index: 1;
    overflow-y: auto;
    max-height: 200px;
}

label {
    display: block;
    margin-bottom: 8px;
}

label input[type="checkbox"] {
    margin-right: 8px;
}

.dropdown-content.show {
    display: block;
}
</style>