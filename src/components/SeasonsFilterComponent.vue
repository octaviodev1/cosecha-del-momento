<template>
  <h3 class="mb-5 text-lg font-medium text-gray-900 dark:text-white mt-8">
    FILTRA POR ESTACIÓN
  </h3>

  <ul class="grid w-full gap-6 md:grid-cols-2">
    <li>
      <input type="checkbox" id="react-option" value="" class="hidden peer" />
      <label
        for="react-option"
        class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <div class="w-full text-lg font-semibold">PRIMAVERA</div>
          <div class="w-full text-sm">Marzo, abril, mayo y junio.</div>
        </div>
      </label>
    </li>
    <li>
      <input type="checkbox" id="angular-option" value="" class="hidden peer" />
      <label
        for="angular-option"
        class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <div class="w-full text-lg font-semibold">VERANO</div>
          <div class="w-full text-sm">Junio, julio, agosto y septiembre.</div>
        </div>
      </label>
    </li>
  </ul>
  <ul class="grid w-full gap-6 md:grid-cols-2 mt-4">
    <li>
      <input type="checkbox" id="third-option" value="" class="hidden peer" />
      <label
        for="third-option"
        class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <div class="w-full text-lg font-semibold">OTOÑO</div>
          <div class="w-full text-sm">
            Septiembre, octubre, noviembre y diciembre.
          </div>
        </div>
      </label>
    </li>
    <li>
      <input
        type="checkbox"
        id="flowbite-option"
        value=""
        class="hidden peer"
      />
      <label
        for="flowbite-option"
        class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div class="block">
          <div class="w-full text-lg font-semibold">INVIERNO</div>
          <div class="w-full text-sm">Diciembre, enero, febrero y marzo.</div>
        </div>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "SeasonsFilterComponent",
};
</script>
