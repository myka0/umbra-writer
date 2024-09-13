<template>
  <div class="dropdown">
    <slot />
    <div
      class="dropdown-content z-10 bg-neutral-200 dark:bg-neutral-800 border border-neutral-400 dark:border-neutral-500"
    >
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content {
  position: absolute;
  display: none;
}

.dropdown-content button {
  display: block;
}

.dropdown-content div {
  padding: 8px;
  cursor: pointer;
}
</style>
