<template>
  <FilterByText />
  <FilterByType />
  <FilterBySeason />
  <div class="my-5">
    <FilterByCommunities />
  </div>
  <button class="p-3 bg-green">Filtrar</button>
</template>

<script>
import FilterByText from "./FilterByText.vue";
import FilterByType from "./FilterByType.vue";
import FilterBySeason from "./FilterBySeason.vue";
import FilterByCommunities from "./FilterByCommunities.vue";

export default {
  name: "FilterComponent",
  components: {
    FilterByText,
    FilterByType,
    FilterBySeason,
    FilterByCommunities,
  },
};
</script>
