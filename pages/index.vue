<script setup lang="ts">
definePageMeta({
    auth: false
})
</script>

<template>
  <h1 class="text-2xl">Landing Page</h1>
  <NuxtLink
    to="/auth/signin"
    class="py-1.5 px-3 rounded-md text-neutral-50 bg-neutral-800 border border-neutral-500 hover:bg-neutral-750 transition-colors" 
    >
      Sign in
  </NuxtLink>
</template>
