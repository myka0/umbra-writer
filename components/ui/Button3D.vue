<script lang="ts">
export default {
  name: 'Button3D',
  props: {
    to: {
      type: String,
      required: true,
    },
  },
}
</script>

<template>
  <NuxtLink
    :to="to"
    class="btn-3d inline-block relative rounded-2xl before:absolute before:block"
  >
    <slot />
  </NuxtLink>
</template>

<style scoped>
.btn-3d {
  transition: transform 0.2s ease-in-out;
  transform-style: preserve-3d;
}

.btn-3d:before {
  top: -2px;
  left: -2px;
  right: 0;
  bottom: 0;
  z-index: -1;
  transition: transform 0.15s ease-in-out;
  border-radius: 16px;
  transform: translate3d(0, 0, -1px);
}

.btn-3d:hover {
  transform: translate(-0.25em, -0.25em);
}

.btn-3d:hover:before {
  transform: translate3d(0.25em, 0.25em, -1px);
}
</style>
