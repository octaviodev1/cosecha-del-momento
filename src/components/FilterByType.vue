<template>
    <h3 class="mb-5 text-lg font-medium">FILTRA TIPO</h3>
    <ul class="grid w-full gap-6 md:grid-cols-2">
        <li>
            <input type="radio" id="fruits" name="filter" value="fruits" class="hidden peer" required />
            <label for="fruits"
                class="inline-flex items-center justify-center w-full p-5 bg-white border rounded-lg cursor-pointer peer-checked:border-green peer-checked:text-white peer-checked:bg-green hover:text-green">
                <div class="w-full text-3xl font-bold text-center">FRUTAS</div>
            </label>
        </li>
        <li>
            <input type="radio" id="vegetables" name="filter" value="vegetables" class="hidden peer" />
            <label for="vegetables"
                class="inline-flex items-center justify-center w-full p-5 bg-white border rounded-lg cursor-pointer peer-checked:border-green peer-checked:text-white peer-checked:bg-green hover:text-green">
                <div class="w-full text-3xl font-bold text-center">VERDURAS</div>
            </label>
        </li>
    </ul>
</template>

<script>
export default {
    name: "FilterByType",


}
</script>

<style lang="scss" scoped></style>