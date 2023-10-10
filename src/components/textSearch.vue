<template>
    <div class="relative m-3" data-te-input-wrapper-init>
        <input type="text" class="peer block min-h-[auto] w-fitcontent rounded border-2
    border-gray bg-green px-3 py-[0.32rem] 
      leading-[1.6] outline-none transition-all duration-200 ease-linear" id="movePlaceholder" />
        <label for="movePlaceholder" class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%]
      origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white
      transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem]
      peer-focus:scale-[0.8] peer-focus:text-primary 
      peer-data-[te-input-state-active]:-translate-y-[0.9rem] 
      peer-data-[te-input-state-active]:scale-[0.8] 
      motion-reduce:transition-none ">
            Busca tu fruta o verdura
        </label>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>