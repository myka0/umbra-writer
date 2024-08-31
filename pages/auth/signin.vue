<script setup lang="ts">
const { signIn } = useAuth()

definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/files',
  },
})
</script>

<template>
  <h1 class="text-2xl">Sign in</h1>
  <a
    class="py-1.5 px-3 rounded-md text-neutral-50 bg-neutral-800 border border-neutral-500 hover:bg-neutral-750 transition-colors" 
    @click="signIn('github')">
    Sign in with Github
  </a>
</template>
