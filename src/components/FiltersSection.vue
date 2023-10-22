<template>
  <div>
    <FilterByText />
    <FilterByType @type-selection="registerType" />
    <FilterBySeason @season-filter="registerSeason" />
    <div class="my-5">
      <FilterByCommunities />
    </div>
    <button @click="$emit('filter', filter)" class="p-3 bg-green w-full">Filtrar</button>
  </div>
</template>

<script>
import FilterByText from "./FilterByText.vue";
import FilterByType from "./FilterByType.vue";
import FilterBySeason from "./FilterBySeason.vue";
import FilterByCommunities from "./FilterByCommunities.vue";

export default {
  name: "FiltersSection",
  data() {
    return {
      filter: {
        type: String,
        season: String
      }
    }
  },
  components: {
    FilterByText,
    FilterByType,
    FilterBySeason,
    FilterByCommunities,
  },
  methods: {
    registerType(type) {
      this.filter.type = type
    },
    registerSeason(season) {
      this.filter.season = season
    }
  },
  emits: ['filter']
};
</script>
