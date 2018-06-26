<template>
    <div class="countdown">
        <p class="clock seconds" v-if="secondsCountdown">{{clock}}</p>
        <p class="clock" v-else>{{clock}}</p>
    </div>
</template>

<script>
    export default {
        name: "countdown",
        props: ['expired', 'secondsCountdown', 'clock']
    }
</script>

<style scoped>
    .countdown {
        position: absolute;
        background: ghostwhite;
        top: 0;
        right: 0;
        z-index: 9999;
    }

    .clock {
        margin: 25px;
        font-size: 1.5em;
        text-align: center;
    }

    .seconds {
        font-size: 3em;
    }
</style>