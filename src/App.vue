<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
  </header>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
  <RouterView />
</template>

<style scoped></style>
