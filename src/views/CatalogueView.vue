<template>
  <div class="flex flex-row m-4">
    <div
      class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">

      <div class="flex flex-col w-[28rem] justify-start ml-4 mb-4">
        <FiltersSection />
      </div>
    </div>
    <div class="flex-1">
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
