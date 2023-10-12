<template>
  <div>
    <TextSearch @search-text-updated="searching"></TextSearch>
  </div>
</template>

<script>
import TextSearch from '../components/TextSearch.vue';

export default {
  components: {
    TextSearch,

  },
  methods: {
    searching(text) {
      console.log(text);
    }
  }
}
</script>

<style lang="scss" scoped></style>