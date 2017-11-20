<template>
    <div class="countdown">
        <p class="clock seconds" v-if="secondsCountdown">{{seconds}}</p>
        <p class="clock" v-else>{{ hours}} : {{minutes}} : {{seconds}}</p>
    </div>
</template>

<script>
    import * as time from '../timeutils.js';

    const _second = 1000;
    const _minute = _second * 60;
    const _hour = _minute * 60;
    const _day = _hour * 24;

    export default {
        name: "countdown",
        data() {
            return {
                expired: false,
                secondsCountdown: false,
                hours: "0",
                minutes: "0",
                seconds: "0"
            }
        },
        mounted() {
            setInterval(this.updateDateTime, 1000)
        },
        methods: {
            updateDateTime: function () {
                let distance = time.getDistance();

                if (time.isExpired()) {
                    this.expired = true;
                    return
                }

                let days = Math.floor(distance / _day);
                let hours = Math.floor((distance % _day) / _hour);
                let minutes = Math.floor((distance % _hour) / _minute);
                let seconds = Math.floor((distance % _minute) / _second);

                let secondsCountdown = (days === 0 && hours === 0 && minutes === 0);

                if (seconds < 10) seconds = "0" + seconds;
                if (hours < 10) hours = "0" + hours;
                if (minutes < 10) minutes = "0" + minutes;

                this.secondsCountdown = secondsCountdown;
                this.hours = hours;
                this.minutes = minutes;
                this.seconds = seconds;
            }
        }
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