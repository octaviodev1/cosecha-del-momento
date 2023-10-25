<template>
  <div>
    <FilterByText @search-text-updated="registerText" />
    
    <FilterByType :resetType="resetForTypeIsClicked" @resetTypeToFalse="resetTypeToFalse"
      @type-selection="registerType" />

    <FilterBySeason :resetSeason="resetForSeasonIsClicked" @resetSeasonToFalse="resetSeasonToFalse"
      @season-filter="registerSeason" />

    <FilterByCommunities :resetCommunities="resetForCommunitiesIsClicked"
      @resetCommunitiesToFalse="resetCommunitiesToFalse" @region="registerRegion" />

    <div class="flex justify-center items-center">
      <button id="btn-filter" data-te-ripple-init @click="$emit('filter', filter)"
        class="p-4 mr-3 bg-green text-white rounded-xl grow  font-bold">Filtrar</button>
      <button data-te-ripple-init
        class="flex items-center justify-center:center; rounded-xl p-4 bg-red text-white grow-0 font-bold"
        @click="resetFilters">
        <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="24" height="24" fill="white">
          <path
            d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
          <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
          <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
        </svg>

      </button>
    </div>
  </div>
</template>

<script>
import {
  Ripple,
  initTE,
} from "tw-elements";

import FilterByText from "./FilterByText.vue";
import FilterByType from "./FilterByType.vue";
import FilterBySeason from "./FilterBySeason.vue";
import FilterByCommunities from "./FilterByCommunities.vue";

export default {
  name: "FiltersSection",
  data() {
    return {
      filter: {
        type: "",
        season: [],
        region: [],
      },
      resetForTypeIsClicked: false,
      resetForSeasonIsClicked: false,
      resetForCommunitiesIsClicked: false,
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
      this.filter.type = type;
    },
    registerSeason(season) {
      this.filter.season = season
    },
    registerRegion(region) {
      this.filter.region = region
    },
    resetFilters() {
      this.filter = {
        type: "",
        season: [],
        region: [],
      }
      this.resetForTypeIsClicked = true;
      this.resetForSeasonIsClicked = true;
      this.resetForCommunitiesIsClicked = true;
      document.getElementById('btn-filter').click();
    },
    resetTypeToFalse() {
      this.resetForTypeIsClicked = false;
    },
    resetSeasonToFalse() {
      this.resetForSeasonIsClicked = false;
    },
    resetCommunitiesToFalse() {
      this.resetForCommunitiesIsClicked = false;
    },
  },
  emits: ['filter', 'search'],
  mounted() {
    initTE({ Ripple });
  },
};
</script>
