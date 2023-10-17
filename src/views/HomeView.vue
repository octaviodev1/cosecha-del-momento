<template>
    <TopNav></TopNav>
    <FooterInfo></FooterInfo>
</template>

<script>
import TopNav from "@/components/TopNav.vue";
import FooterInfo from "../components/FooterInfo.vue";
export default {
    name: "HomeView",
    components: {
        TopNav,
        FooterInfo,
    },
}
</script>

<style scoped></style>