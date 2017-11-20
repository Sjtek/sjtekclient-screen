<template>
    <div id="app" class="container">
        <video-player></video-player>
        <countdown></countdown>
    </div>
</template>

<script>
    import VideoPlayer from "./components/VideoPlayer.vue";
    import Countdown from "./components/Countdown.vue";

    export default {
        name: "app",
        components: {
            Countdown,
            VideoPlayer
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