<template>
    <header class="bg-yellow sticky w-full">
        <nav class="flex items-center justify-between">
            <div class="ml-10">
                <RouterLink to="/"><img src="../assets/logos/header-logo.svg"></RouterLink>
            </div>
            <div class="flex mr-10 space-x-10 font-bold">
                <RouterLink to="/" class="p-3" :class="{ 'active-link': $route.path === '/' }">Inicio</RouterLink>
                <RouterLink to="/catalogue" class="p-3" :class="{ 'active-link': $route.path === '/catalogue' }">Catálogo
                </RouterLink>
                <RouterLink to="/about" class="p-3" :class="{ 'active-link': $route.path === '/about' }">Conócenos
                </RouterLink>
            </div>
        </nav>
    </header>
</template>

<script>
export default {
    name: "TopNav",
}
</script>

<style scoped>
.active-link {
    color: white;
    background-color: #0A996F;
    border-radius: 15px;

}
</style>