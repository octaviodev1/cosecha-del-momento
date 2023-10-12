<template>
    <header class="bg-yellow sticky w-screen">
        <nav class="flex items-center justify-between">
            <div class="ml-10">
                <RouterLink to="/"><img src="../assets/logo_header.svg"></RouterLink>
            </div>
            <div class="flex mr-10 space-x-10 font-bold">
                <RouterLink to="/" class="p-3" :class="{ 'active-link': $route.path === '/' }">Catálogo</RouterLink>
                <RouterLink to="/test" class="p-3" :class="{ 'active-link': $route.path === '/test' }">Calendario
                </RouterLink>
                <RouterLink to="/" class="p-3">Comunidades Autónomas</RouterLink>
                <RouterLink to="/" class="p-3">Conócenos</RouterLink>
                <RouterLink to="/" class="p-3">Dona / Aporta</RouterLink>
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