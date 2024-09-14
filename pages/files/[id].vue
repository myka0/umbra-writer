<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useFetch } from '#app'
import { DocumentIcon } from '@/components/icons'

// Fetch the document from the server
const route = useRoute()
const { data, error } = await useFetch(`/api/documents/${route.params.id}`, {
  method: 'GET',
})

const document = ref(data.value.document)
const title = ref(document.value.title)
const content = ref(document.value.content)
let saveTimeout = null

if (error.value) {
  console.error('Failed to fetch document:', error.value)
}

// Function to save document with debounce
const saveDocument = async (update: any) => {
  // Clear the previous timeout to debounce the save operation
  if (saveTimeout) {
    clearTimeout(saveTimeout)
  }

  // Set a new timeout to save the document after inactivity
  saveTimeout = setTimeout(async () => {
    try {
      const response = await fetch(`/api/documents/${route.params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
      })

      if (!response.ok) {
        throw new Error('Failed to save document')
      }

      console.log('Document saved successfully')
    } catch (error) {
      console.error('Error saving document:', error)
    }
  }, 3000) // 3 seconds debounce time
}

// Watch for changes in the document's title and content
watch(
  () => title.value,
  async (newTitle) => {
    saveDocument({
      title: newTitle,
      content: content.value,
    })
  },
  { deep: true }
)

watch(
  () => document.value.content,
  async (newContent) => {
    saveDocument({
      title: title.value,
      content: newContent,
    })
  },
  { deep: true }
)

useHead({
  title: title.value,
})
</script>

<template>
  <div class="container mx-auto w-[1120px]">
    <div class="flex justify-start mt-8">
      <div class="inline-flex items-center">
        <NuxtLink
          to="/files"
          class="text-violet-600 dark:text-violet-500 hover:underline"
        >
          <DocumentIcon :size="48" />
        </NuxtLink>
        <input
          v-model="title"
          class="text-xl font-medium p-2 ml-2 transition-colors duration-100 border border-neutral-300 hover:border-neutral-400 hover:bg-neutral-200 bg-neutral-100 dark:border-neutral-750 dark:bg-neutral-900 hover:dark:border-neutral-500 hover:dark:bg-neutral-800 rounded-md"
        />
      </div>
    </div>

    <Writer v-model="document.content" class="" />
  </div>
</template>
