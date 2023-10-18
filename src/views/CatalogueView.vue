<template>
  <TopNav></TopNav>
  <div class="flex flex-row">
    <div class="flex flex-col w-[28rem] justify-start ml-4 mb-4">
      <FiltersSection />
    </div>
    <div>
      <CatalogueContent />
    </div>
  </div>
  <FooterInfo></FooterInfo>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FiltersSection from "../components/FiltersSection.vue";
import FooterInfo from "../components/FooterInfo.vue";
import CatalogueContent from "../components/CatalogueContent.vue";

export default {
  components: {
    TopNav,
    FiltersSection,
    FooterInfo,
    CatalogueContent
  },
  methods: {
    searching(text) {
      console.log(text);
    },
  },
};
</script>

<style scoped></style>
