<template>
    <div class="test-clock-container">
        <flip-clock />
    </div>
</template>
<script>
import FlipClock from "kuan-vue-flip-clock";
export default {
    components: {
        FlipClock,
    },
};
</script>
<style>
.test-clock-container {
    text-align: center;
    background: radial-gradient(ellipse at center, #969696 0%, #595959 100%);
    min-height: 100%;
    min-width: 100%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font: normal 14px "Helvetica Neue", Helvetica, sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>