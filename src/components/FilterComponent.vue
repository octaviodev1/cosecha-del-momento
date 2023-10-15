<template>
  <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white">
    FILTRA TIPO
  </h3>
  <ul class="grid w-full gap-6 md:grid-cols-2">
    <li>
      <input
        type="radio"
        id="hosting-small"
        name="hosting"
        value="hosting-small"
        class="hidden peer"
        required
      />
      <label
        for="hosting-small"
        class="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="w-full text-3xl font-bold text-center">FRUTAS</div>
      </label>
    </li>
    <li>
      <input
        type="radio"
        id="hosting-big"
        name="hosting"
        value="hosting-big"
        class="hidden peer"
      />
      <label
        for="hosting-big"
        class="inline-flex items-center justify-center w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="w-full text-3xl font-bold text-center">VERDURAS</div>
      </label>
    </li>
  </ul>

  <SeasonsFilterComponent />
</template>
<script>
import SeasonsFilterComponent from "./SeasonsFilterComponent.vue";
export default {
  components: {
    SeasonsFilterComponent,
  },
};
</script>
