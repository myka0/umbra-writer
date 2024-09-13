<template>
  <button
    class="nav-bar-button p-1 rounded transition-colors duration-150 disabled:opacity-60 hover:bg-neutral-300 hover:dark:bg-neutral-700"
  >
    <slot />
  </button>
</template>

<style scoped>
.nav-bar-button.is-active {
  @apply bg-neutral-300 dark:bg-neutral-700;
}
</style>
