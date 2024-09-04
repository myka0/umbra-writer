<script lang="ts">
import { PlusIcon } from '@/components/icons'

export default {
  components: {
    PlusIcon,
  },
  methods: {
    async createDocument() {
      try {
        const payload = {
          title: 'New Document',
          content: '',
          directoryId: null,
        }

        const newDocument = await $fetch('/api/documents', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: payload,
        })

        // Navigate to the new document's page
        await navigateTo(`/files/${newDocument.document.id}`)

      } catch (error) {
        console.error('Failed to create document:', error)
      }
    },
  },
}
</script>

<template>
  <div class="flex flex-col items-start">
    <a 
      @click="createDocument"         
      class="flex items-center py-2 px-4 rounded-xl cursor-pointer transition-colors duration-150 font-medium text-lg bg-neutral-50 text-neutral-900 hover:bg-neutral-300"
    >
      Create
      <PlusIcon :size="36" class="inline-block ml-1" />
    </a>
  </div>
</template>
