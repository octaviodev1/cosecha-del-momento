<template>
    <!--Button trigger vertically centered scrollable modal-->
    <button type="button"
        class="inline-block outline-0 rounded bg-white px-6 pb-2 m-auto pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out ring-green hover:ring-4"
        data-te-toggle="modal" :data-te-target="`#${NAME.replace(/ /g, '')}`" data-te-ripple-init
        data-te-ripple-color="light">
        <img :src="IMG_URL" :alt=NAME>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ NAME }}</div>
        </div>
    </button>

    <!--Verically centered scrollable modal-->
    <div data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        :id="NAME.replace(/ /g, '')" tabindex="-1" :aria-labelledby="`#${NAME.replace(/ /g, '')}Label`" aria-modal="true"
        role="dialog">
        <div data-te-modal-dialog-ref
            class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[776px]">
            <div
                class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-[1px] border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <!--Modal title-->
                    <img class="w-32 h-32 p-1 ring-2 ring-green rounded-full" :src="IMG_URL" />
                    <div class="flex flex-col justify-center">
                        <h5 class="text-3xl font-bold mb-1" :id="`${NAME.replace(/ /g, '')}Label`">
                            {{ NAME }} / {{ SCIENTIFIC_NAME }}
                        </h5>
                        <p class="text-xl text-green font-bold text-center">{{ TYPE }}</p>
                    </div>
                    <!--Close button-->
                    <button type="button"
                        class="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                        data-te-modal-dismiss aria-label="Close">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="h-6 w-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <!--Modal body-->
                <div class="relative p-4">
                    <h2 class="font-bold text-xl p-4">Descripción</h2>
                    <p class="leading-7 pl-4">
                        {{ DESCRIPTION }}
                    </p>

                    <h2 class="font-bold text-xl p-4">Temporada</h2>
                    <div class="p-4 flex flex-wrap">
                        <div v-for="season in SEASON" :key="season" data-te-chip-init data-te-ripple-init
                            class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] border border-green bg-[#eceff1] bg-[transparent] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:border-[#3b71ca] hover:!shadow-none dark:text-neutral-200"
                            data-te-ripple-color="dark">
                            {{ season }}
                        </div>
                    </div>
                    <h2 class="font-bold text-xl p-4">Meses de cosecha</h2>
                    <div class="p-4 flex flex-wrap">
                        <div v-for="month in monthsArray" :key="month" data-te-chip-init data-te-ripple-init
                            class=" my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] border border-green bg-[#eceff1] bg-[transparent] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:border-[#3b71ca] hover:!shadow-none dark:text-neutral-200"
                            data-te-ripple-color="dark">
                            {{ month.trim() }}
                        </div>
                    </div>
                    <h2 class="font-bold text-xl p-4">Las CCAA más productoras</h2>
                    <div class="p-4 flex flex-wrap">
                        <div v-for="ccaa in ORIGIN" :key="ccaa" data-te-chip-init data-te-ripple-init
                            class=" my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] border border-green bg-[#eceff1] bg-[transparent] px-[12px] py-0 text-[13px] font-normal normal-case leading-loose text-[#4f4f4f] shadow-none transition-[opacity] duration-300 ease-linear hover:border-[#3b71ca] hover:!shadow-none dark:text-neutral-200"
                            data-te-ripple-color="dark">
                            {{ ccaa }}
                        </div>
                    </div>
                </div>

                <!--Modal footer-->
                <div
                    class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-[1px] border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button type="button"
                        class="inline-block rounded bg-green px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out focus:outline-none focus:ring-0"
                        data-te-modal-dismiss data-te-ripple-init data-te-ripple-color="light">
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    Modal,
    Chip,
    Ripple,
    initTE,
} from "tw-elements";

export default {
    name: 'CardContent',
    data() {
        return {
            display: false,
            origin: this.ORIGIN.join(", ")
        }
    },
    mounted() {
        initTE({ Modal, Ripple, Chip });
    },
    props: {
        NAME: {
            type: String,
        },
        IMG_URL: {
            type: String,
        },
        DESCRIPTION: {
            type: String,
        },
        MONTHS: {
            type: String,
        },
        ORIGIN: {
            type: Array,
        },
        SCIENTIFIC_NAME: {
            type: String,
        },
        SEASON: {
            type: Array,
        },
        TYPE: {
            type: String,
        }
    },
    computed: {
        monthsArray() {
            return this.MONTHS.split(',')
        }
    }
}
</script>