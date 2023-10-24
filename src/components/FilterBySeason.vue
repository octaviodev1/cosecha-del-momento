<template>
  <h3 class="mb-5 text-lg font-medium mt-8">
    FILTRA POR ESTACIÓN
  </h3>

  <ul class="grid w-full gap-6 md:grid-cols-2">
    <li>
      <input @change="$emit('seasonFilter', checkedSeasons)" v-model="checkedSeasons" :checked="resetSeason"
        type="checkbox" id="spring-option" value="Primavera" class="hidden peer" />
      <label for="spring-option"
        class="select-none inline-flex items-center justify-between w-full p-5 bg-white border-2 rounded-lg cursor-pointer peer-checked:border-green hover:text-green peer-checked:text-white peer-checked:bg-green">
        <div class="block">
          <div class="w-full text-lg font-semibold">PRIMAVERA</div>
          <div class="w-full text-sm">Marzo, abril, mayo y junio.</div>
          <br />
        </div>
      </label>
    </li>
    <li>
      <input @change="$emit('seasonFilter', checkedSeasons)" v-model="checkedSeasons" :checked="resetSeason"
        type="checkbox" id="summer-option" value="Verano" class="hidden peer" />
      <label for="summer-option"
        class="select-none inline-flex items-center justify-between w-full p-5 bg-white border-2 rounded-lg cursor-pointer peer-checked:border-green hover:text-green peer-checked:text-white peer-checked:bg-green">
        <div class="block">
          <div class="w-full text-lg font-semibold">VERANO</div>
          <div class="w-full text-sm">Junio, julio, agosto y septiembre.</div>
        </div>
      </label>
    </li>
  </ul>
  <ul class="grid w-full gap-6 md:grid-cols-2 mt-4">
    <li>
      <input @change="$emit('seasonFilter', checkedSeasons)" v-model="checkedSeasons" :checked="resetSeason"
        type="checkbox" id="fall-option" value="Otoño" class="hidden peer" />
      <label for="fall-option"
        class="select-none inline-flex items-center justify-between w-full p-5 bg-white border-2 rounded-lg cursor-pointer peer-checked:border-green hover:text-green peer-checked:text-white peer-checked:bg-green">
        <div class="block">
          <div class="w-full text-lg font-semibold">OTOÑO</div>
          <div class="w-full text-sm">
            Septiembre, octubre, noviembre y diciembre.
          </div>
        </div>
      </label>
    </li>
    <li>
      <input @change="$emit('seasonFilter', checkedSeasons)" v-model="checkedSeasons" :checked="resetSeason"
        type="checkbox" id="winter-option" value="Invierno" class="hidden peer" />
      <label for="winter-option"
        class="select-none inline-flex items-center justify-between w-full p-5 bg-white border-2 rounded-lg cursor-pointer peer-checked:border-green hover:text-green peer-checked:text-white peer-checked:bg-green">
        <div class="block">
          <div class="w-full text-lg font-semibold">INVIERNO</div>
          <div class="w-full text-sm">Diciembre, enero, febrero y marzo.</div>
        </div>
      </label>
    </li>
  </ul>
</template>

<script>
export default {
  name: "FilterBySeason",
  data() {
    return {
      checkedSeasons: []
    }
  },
  props: {
    resetSeason: {
      type: Boolean,
    },
  },
  emits: ['seasonFilter', 'resetSeasonToFalse'],
  methods: {
    executeOnPropResetChange() {
      if (this.resetSeason) {
        const springOption = document.getElementById("spring-option");
        const summerOption = document.getElementById("summer-option");
        const fallOption = document.getElementById("fall-option");
        const winterOption = document.getElementById("winter-option");

        summerOption.checked = false;
        springOption.checked = false;
        fallOption.checked = false;
        winterOption.checked = false;

        this.checkedSeasons = [],
        this.$emit('resetSeasonToFalse', false);
      }
    }
  },
  watch: {
    resetSeason: 'executeOnPropResetChange'
  },
};
</script>
