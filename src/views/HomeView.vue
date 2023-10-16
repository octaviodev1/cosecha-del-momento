<template>
  <TopNav></TopNav>
  <div>
    <div class="flex flex-col w-[28rem] justify-start ml-4 mb-4">
      <FilterComponent />
    </div>
  </div>
  <FooterInfo></FooterInfo>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FilterComponent from "../components/FilterComponent.vue";
import FooterInfo from "../components/FooterInfo.vue";

export default {
  components: {
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
