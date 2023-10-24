<template>
    <!-- <div @click="click" class="w-1/3 max-w-sm rounded overflow-hidden shadow-lg p-4" data-te-collapse-init
        data-te-ripple-init data-te-ripple-color="light" :data-te-target="`#${NAME}`">
        <img class="w-full" :src="IMG_URL" :alt=NAME>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ NAME }}</div>
        </div>
    </div>
    <div class="!visible hidden" :id="NAME" data-te-collapse-item>
        <div
            class="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
            Some placeholder content for the collapse component. This panel is
            hidden by default but revealed when the user activates the relevant
            trigger.
        </div>
    </div> -->
    <button
        class="inline-block rounded shadow-sm bg-green px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal transition duration-150 ease-in-out"
        data-te-toggle="popover" title="Dismissible popover" data-te-trigger="focus" :data-te-content="fullData"
        data-te-placement="bottom" data-te-ripple-init data-te-ripple-color="light">
        <img class="w-full" :src="IMG_URL" :alt=NAME>
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ NAME }}</div>
        </div>
    </button>
</template>

<script>
import {
    Popover,
    Ripple,
    initTE,
} from "tw-elements";

initTE({ Popover, Ripple });
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
    computed: {
        fullData() {
            const data = {
                name: this.NAME,
                description: this.DESCRIPTION,
                scientific_name: this.SCIENTIFIC_NAME
            }
            return JSON.stringify(data)
        }
    },
    methods: {
        click() {
            this.display = !this.display
        }
    },
}
</script>