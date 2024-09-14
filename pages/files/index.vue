<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})

useHead({
  title: 'Files',
})
</script>

<template>
  <Navbar />
  <FileManager />
</template>
