<template>
  <TopNav></TopNav>
  <FilterComponent />
  <div class="flex justify-end m-5">
    <TextSearch @search-text-updated="searching"></TextSearch>
  </div>
  <FooterInfo></FooterInfo>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FilterComponent from "../components/FilterComponent.vue";
import TextSearch from "../components/TextSearch.vue";
import FooterInfo from "../components/FooterInfo.vue";

export default {
  components: {
    TextSearch,
    TopNav,
    FilterComponent,
    FooterInfo,
  },
  methods: {
    searching(text) {
      console.log(text);
    },
  },
};
</script>

<style scoped></style>
