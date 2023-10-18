<template>
  <TopNav></TopNav>
  <div>
    <div class="flex flex-col w-[28rem] justify-start ml-4 mb-4">
      <FiltersSection />
    </div>
  </div>
  <FooterInfo></FooterInfo>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FiltersSection from "../components/FiltersSection.vue";
import FooterInfo from "../components/FooterInfo.vue";

export default {
  components: {
    TopNav,
    FiltersSection,
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
