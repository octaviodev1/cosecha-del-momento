<template>
  <TextSearch />
  <FilterType />
  <SeasonsFilterComponent />
  <div class="my-5">
    <FilterByCommunities />
  </div>
  <button class="p-3 bg-green">Filtrar</button>
</template>

<script>
import TextSearch from "./TextSearch.vue";
import FilterType from "./FilterType.vue";
import SeasonsFilterComponent from "./SeasonsFilterComponent.vue";
import FilterByCommunities from "./FilterByCommunities.vue";

export default {
  name: "FilterComponent",
  components: {
    TextSearch,
    FilterType,
    SeasonsFilterComponent,
    FilterByCommunities,
  },
};
</script>
