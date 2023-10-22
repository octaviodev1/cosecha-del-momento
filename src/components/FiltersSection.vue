<template>
  <div>
    <FilterByText @search-text-updated="registerText" />
    <FilterByType @type-selection="registerType" />
    <FilterBySeason @season-filter="registerSeason" />
    <FilterByCommunities @region="registerRegion" />
    <button @click="$emit('filter', filter)" class="p-3 bg-green text-white w-full">Filtrar</button>
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
        season: Array,
        region: Array
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
    registerText(text) {
      this.$emit('search', text)
    },
    registerType(type) {
      this.filter.type = type
    },
    registerSeason(season) {
      this.filter.season = season
    },
    registerRegion(region) {
      this.filter.region = region
    }
  },
  emits: ['filter', 'search']
};
</script>
