<template>
  <div class="py-4">
    <label for="default-search" class="mb-2 text-sm font-medium text-gray sr-only">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg class="w-4 h-4 text-green" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="search" id="default-search" v-model="text" @keyup.enter="initSearch"
        class="block w-full p-4 pl-10 text-xl border border-green rounded-lg focus:ring-green" placeholder="Buscador...">
      <button type="button" @click="initSearch"
        class="text-white absolute right-2.5 bottom-[0.8rem] bg-green focus:ring-4 focus:outline-none focus:ring-green-light font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilterByText",
  data() {
    return {
      text: '',
    }
  },
  methods: {
    initSearch() {
      this.$emit("search-text-updated", this.text);
      this.text = '';
    },
  },
  emits: ['search-text-updated']
}
</script>