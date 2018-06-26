<template>
    <div id="app" class="container">
        <video-player></video-player>
        <countdown :expired="" :secondsCountdown="" :clock=""></countdown>
    </div>
</template>

<script>
    import VideoPlayer from "./components/VideoPlayer.vue";
    import Countdown from "./components/Countdown.vue";
    import * as time from './time';

    export default {
        name: "app",
        components: {
            Countdown,
            VideoPlayer
        },
        data() {
            return {
                expired: false,
                secondsCountdown: false,
                clock: time.getText()
            }
        },
        mounted() {
            setInterval(this.updateVars, 1000);
        },
        methods: {
            updateVars: function () {
                this.expired = time.isExpired();
                this.secondsCountdown = time.isSecondsCountdown();
                this.clock = time.getText();
            }
        }
    }
</script>

<style scoped>
    .container {
        background: #ff0000;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>