<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

const { data } = useAuth()
</script>

<template>
  <Navbar />
  <div>
    <h1 class="text-3xl font-bold">Account.</h1>
    <pre>{{ data }}</pre>
    <h2 v-if="data?.subscribed">Thanks for subscribing!</h2>
  </div>
</template>
