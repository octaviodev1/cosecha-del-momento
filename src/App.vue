<script setup>
import { RouterView } from 'vue-router'
import TopNav from './components/TopNav.vue';
import FooterInfo from './components/FooterInfo.vue';
</script>

<template>
  <div id="app" class="flex flex-col h-screen">
    <TopNav />
    <div class="grow">
      <RouterView />
    </div>
    <FooterInfo />
  </div>
</template>