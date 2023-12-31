<template>
  <div class="flex flex-row m-4 h-[88%] gap-16">

    <div
      class="flex flex-col w-[28%] h-[80vh] justify-start ml-4 mb-14 rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <FiltersSection @filter="filterProducts" @search="searchByText" />
    </div>

    <div v-if="filteredProducts.length"
      class="flex-1 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] rounded-2xl ml-5 p-4 h-[80vh] mb-14 overflow-y-scroll">
      <CatalogueContent :products="filteredProducts" />
    </div>
    <div v-else class="flex items-center m-auto">
      <div v-if="isloading"
        class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] font-new-font">
        <h5 class="mb-2 text-2xl font-medium leading-tight text-center">
          Cargando...
        </h5>
        <p class="mb-4 text-base text-center">
          Espera un momento mientras cargan las frutas y verduras
        </p>
        <img src="@/assets/logos/loading_banana.webp" class="m-auto">
      </div>

      <div v-else
        class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] font-new-font">
        <h5 class="mb-2 text-2xl font-medium leading-tight text-center">
          No hay resultados
        </h5>
        <p class="mb-4 text-base text-center">
          No hay ningún resultado con los parámetros seleccionados
        </p>
        <img src="@/assets/logos/searching.webp" class="m-auto">
      </div>

    </div>
  </div>
</template>

<script>
import FiltersSection from "../components/FiltersSection.vue";
import CatalogueContent from "../components/CatalogueContent.vue";

export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      isloading: true
    }
  },
  mounted() {
    fetch('/.netlify/functions/getProducts')
      .then(response => response.json())
      .then(data => {
        this.products = data;
        this.filteredProducts = this.products;
        this.isloading = false
      })
      .catch(error => {
        console.error("Error al recuperar los datos: ", error)
      })
  },
  components: {
    FiltersSection,
    CatalogueContent
  },
  methods: {
    filterProducts(filter) {
      this.filteredProducts = this.products
      if (filter && typeof filter.type === 'string' && filter.type !== '')
        this.filterByType(filter.type, this.filteredProducts)
      if (filter && Array.isArray(filter.season) && filter.season.length)
        this.filterBySeason(filter.season, this.filteredProducts)
      if (filter && Array.isArray(filter.region) && filter.region.length)
        this.filterByRegion(filter.region, this.filteredProducts)
    },
    filterByType(type, arr) {
      this.filteredProducts = arr.filter(product => product.TYPE === type)
    },
    filterBySeason(season, arr) {
      this.filteredProducts = arr.filter(product => season.some(s => product.SEASON.includes(s)))
    },
    filterByRegion(region, arr) {
      this.filteredProducts = arr.filter(product => region.some(r => product.ORIGIN.includes(r)))
    },
    searchByText(text) {
      this.filteredProducts = this.products
      if (text === '') return
      this.filteredProducts = this.filteredProducts.filter(product => product.NAME.toLowerCase().includes(text.toLowerCase()))
    }
  }
};
</script>