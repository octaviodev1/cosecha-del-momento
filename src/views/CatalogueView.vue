<template>
  <div class="flex flex-row m-4 h-[88%]">
    <div class="">
      <div
        class="flex flex-col w-[70%] justify-start ml-4 mb-4 rounded-2xl p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
        <FiltersSection />
      </div>
    </div>
    <div class="flex-1 ml-10 overflow-y-scroll">
      <CatalogueContent />
    </div>
  </div>
</template>

<script>
import FiltersSection from "../components/FiltersSection.vue";
import CatalogueContent from "../components/CatalogueContent.vue";

export default {
  components: {
    FiltersSection,
    CatalogueContent
  },
};
</script>

<style scoped></style>
