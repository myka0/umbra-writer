<template>
  <div class="page-black-bg" >
    <div v-if="gradient" class="background-layer gradient"></div>
    <div v-if="dots" class="background-layer dots"></div>
    <div v-if="lines" class="background-layer lines"></div>
  </div>
</template>

<script setup lng="ts">
const props = defineProps({
  position: {
    type: String,
    default: 'fixed',
  },
  gradient: {
    type: Boolean,
    default: true,
  },
  dots: {
    type: Boolean,
    default: true,
  },
  lines: {
    type: Boolean,
    default: true,
  },
})
</script>

<style scoped>
.background-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.gradient {
  z-index: 1;
  background: radial-gradient(60% 70% at 70% 20%, #00000000 0%, #000000 100%),
    radial-gradient(
      87.4% 84.04% at 6.82% 16.24%,
      #4f46e588 0%,
      #00000000 100%
    ),
    radial-gradient(
      217.89% 126.62% at 48.04% 0%,
      #c026d377 0%,
      #00000000 100%
    );
  mask-image: linear-gradient(
    to bottom left,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 80%
  );
  mask-size: 100% 100%;
  mask-position: top right;
  mask-repeat: no-repeat;
}

.dots {
  z-index: 1;
  background-image: radial-gradient(
    theme('colors.indigo.100') 0.5px,
    #00000000 0.5px
  );
  opacity: 0.3;
  mask-image: linear-gradient(
    to bottom left,
    rgba(0, 0, 0, 1) 40%,
    rgba(0, 0, 0, 0) 90%
  );
  mask-size: 100% 100%;
  mask-position: top right;
  mask-repeat: no-repeat;
  background-size: 16px 16px;
}

.lines {
  z-index: 1;
  background-image: repeating-linear-gradient(
    45deg,
    theme('colors.indigo.100') 0,
    theme('colors.indigo.100') 0.5px,
    #00000000 0.5px,
    #00000000 16px
  );
  mask-image: linear-gradient(
    to bottom left,
    rgba(0, 0, 0, 1) 30%,
    rgba(0, 0, 0, 0) 85%
  );
  mask-size: 100% 100%;
  mask-position: top right;
  mask-repeat: no-repeat;
  opacity: 0.2;
}
</style>
