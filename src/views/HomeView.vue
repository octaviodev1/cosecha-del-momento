<template>
<TopNav></TopNav>
  <div>
    <TextSearch @search-text-updated="searching"></TextSearch>
  </div>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import TextSearch from '../components/TextSearch.vue';

export default {
  components: {
    TextSearch,
    TopNav,

  },
  methods: {
    searching(text) {
      console.log(text);
    }
  }
}
</script>