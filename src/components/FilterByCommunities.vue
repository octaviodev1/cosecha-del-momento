<template>
    <h3 class="mb-5 text-lg font-medium mt-8 font-new-font">FILTRA POR COMUNIDAD AUTÓNOMA</h3>
    <div class="mb-8 font-new-font text-sm">
        <select ref="selectByCommunities" v-model="selectedOptions" @change="$emit('region', selectedOptions)"
            data-te-select-init multiple data-te-select-all-label="Seleccionar todo"
            data-te-select-options-selected-label="Opciones seleccionadas" data-te-select-filter="true"
            data-te-select-no-result-text="No hay resultados">
            <option v-for="option in options" :key="option.value" :value="option.value">{{
                option.label }}</option>
        </select>
        <label data-te-select-label-ref>Selecciona tu Comunidad</label>
    </div>
</template>

<script>
import {
    Ripple,
    initTE,
    Select
} from "tw-elements";
export default {
    name: "FilterByCommunities",
    data() {
        return {
            isOpen: false,
            selectedOptions: [],
            options: [
                { label: 'Andalucía', value: 'Andalucía' },
                { label: 'Aragón', value: 'Aragón' },
                { label: 'Asturias', value: 'Asturias' },
                { label: 'Islas Baleares', value: 'Islas Baleares' },
                { label: 'Islas Canarias', value: 'Islas Canarias' },
                { label: 'Cantabria', value: 'Cantabria' },
                { label: 'Castilla La Mancha', value: 'Castilla La Mancha' },
                { label: 'Castilla y León', value: 'Castilla y León' },
                { label: 'Cataluña', value: 'Cataluña' },
                { label: 'Extremadura', value: 'Extremadura' },
                { label: 'Galicia', value: 'Galicia' },
                { label: 'Madrid', value: 'Madrid' },
                { label: 'Murcia', value: 'Murcia' },
                { label: 'Navarra', value: 'Navarra' },
                { label: 'País Vasco', value: 'País Vasco' },
                { label: 'La Rioja', value: 'La Rioja' },
                { label: 'Comunidad Valenciana', value: 'Comunidad Valenciana' },
            ],
        }
    },
    mounted() {
        initTE({ Ripple, Select });
    },
    methods: {
        executeOnPropResetChange() {
            if (this.resetCommunities) {
                this.selectedOptions = [];
                const selectCommunitiesEl = this.$refs.selectByCommunities;
                const selectCommunities = Select.getInstance(selectCommunitiesEl)
                selectCommunities.setValue()
                this.$emit('resetCommunitiesToFalse', false);
            }
        }
    },
    props: {
        resetCommunities: {
            type: Boolean,
        },
    },
    emits: ['region', 'resetCommunitiesToFalse'],
    watch: {
        resetCommunities: 'executeOnPropResetChange'
    },
}
</script>

<style scoped>
.custom-dropdown {
    display: inline-block;
    margin: 10px;
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

label input[type="checkbox"] {
    margin-right: 8px;
}

.dropdown-content.show {
    display: block;
}
</style>