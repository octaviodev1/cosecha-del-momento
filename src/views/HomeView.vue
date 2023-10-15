<template>
  <TopNav></TopNav>
  <FilterComponent />
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FilterComponent from "../components/FilterComponent.vue";

export default {
  components: {
    TopNav,
    FilterComponent,
  },
};
</script>

<style scoped></style>
