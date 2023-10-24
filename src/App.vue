<script setup>
import { RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue';
import FooterInfo from './components/FooterInfo.vue';
</script>

<template>
  <div id="app">
    <TopNav />
    <RouterView />
    <FooterInfo />
  </div>
</template>