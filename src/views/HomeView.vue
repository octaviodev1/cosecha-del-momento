<template>
  <TopNav></TopNav>
  <div class="flex justify-end m-5">
    <TextSearch @search-text-updated="searching"></TextSearch>
  </div>
  <FooterInfo></FooterInfo>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import TextSearch from '../components/TextSearch.vue';
import FooterInfo from "../components/FooterInfo.vue";

export default {
  components: {
    TextSearch,
    TopNav,
    FooterInfo
  },
  methods: {
    searching(text) {
      console.log(text);
    }
  }
}
</script>