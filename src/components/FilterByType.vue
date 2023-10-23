<template>
    <h3 class="mb-5 text-lg font-medium font-new-font">FILTRA TIPO</h3>
    <ul class="grid w-full gap-6 md:grid-cols-2 font-new-font">
        <li>
            <input @change="$emit('typeSelection', choice)" v-model="choice" type="radio" id="fruits" value="Fruta"
                class="hidden peer" required />
            <label for="fruits"
                class="select-none inline-flex items-center justify-center w-full p-5 bg-white border rounded-lg cursor-pointer peer-checked:border-green peer-checked:text-white peer-checked:bg-green hover:text-green">
                <div class="w-full text-3xl font-bold text-center">FRUTAS</div>
            </label>
        </li>
        <li>
            <input @change="$emit('typeSelection', choice)" v-model="choice" type="radio" id="vegetables" value="Verdura"
                class="hidden peer" />
            <label for="vegetables"
                class="select-none inline-flex items-center justify-center w-full p-5 bg-white border rounded-lg cursor-pointer peer-checked:border-green peer-checked:text-white peer-checked:bg-green hover:text-green">
                <div class="w-full text-3xl font-bold text-center">VERDURAS</div>
            </label>
        </li>
    </ul>
</template>

<script>
export default {
    name: "FilterByType",
    data() {
        return {
            choice: ''
        }
    },
    emits: ['typeSelection']
}
</script>

<style lang="scss" scoped></style>