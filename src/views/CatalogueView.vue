<template>
  <div class="flex flex-row m-4 h-[88%]">
    <div class="">
      <div
        class="flex flex-col w-[70%] justify-start ml-4 mb-4 rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <FiltersSection @filter="filterProducts" />
      </div>
    </div>
    <div v-if="products.length" class="flex-1 ml-5 overflow-y-scroll">
      <CatalogueContent :products="filteredProducts" />
    </div>
  </div>
</template>

<script>
import FiltersSection from "../components/FiltersSection.vue";
import CatalogueContent from "../components/CatalogueContent.vue";

export default {
  data() {
    return {
      products: Array,
      filteredProducts: Array
    }
  },
  mounted() {
    fetch('/.netlify/functions/getProducts')
      .then(response => response.json())
      .then(data => {
        this.products = data;
        this.filteredProducts = this.products
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
      console.log(typeof filter.type);
      this.filteredProducts = this.products
      if (filter && typeof filter.type === 'string')
        this.filterByType(filter.type, this.filteredProducts)
      if (filter && typeof filter.season === 'object')
        this.filterBySeason(filter.season, this.filteredProducts)
    },
    filterByType(type, arr) {
      this.filteredProducts = arr.filter(product => product.TYPE === type)
    },
    filterBySeason(season, arr) {
      this.filteredProducts = arr.filter(product => season.some(s => product.SEASON.includes(s)))
    }
  }
};
</script>

<style scoped></style>
