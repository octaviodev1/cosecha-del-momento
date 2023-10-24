<template>
    <!--Button trigger vertically centered scrollable modal-->
    <button type="button"
        class="inline-block outline-0 rounded bg-white px-6 pb-2 m-auto pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out ring-green hover:ring-4"
        data-te-toggle="modal" :data-te-target="`#${NAME.trim()}`" data-te-ripple-init data-te-ripple-color="light">
        <img :src="IMG_URL" :alt=NAME>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ NAME }}</div>
        </div>
    </button>

    <!--Verically centered scrollable modal-->
    <div data-te-modal-init
        class="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
        :id="NAME.trim()" tabindex="-1" :aria-labelledby="`#${NAME.trim()}Label`" aria-modal="true" role="dialog">
        <div data-te-modal-dialog-ref
            class="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
            <div
                class="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
                <div
                    class="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <!--Modal title-->
                    <h5 class="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                        :id="`${NAME.trim()}Label`">
                        {{ NAME }}
                    </h5>
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
                    <p>
                        {{ DESCRIPTION }}
                    </p>
                </div>

                <!--Modal footer-->
                <div
                    class="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                    <button type="button"
                        class="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
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
    Ripple,
    initTE,
} from "tw-elements";

initTE({ Modal, Ripple });
export default {
    name: 'CardContent',
    data() {
        return {
            display: false,
            origin: this.ORIGIN.join(", ")
        }
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
}
</script>