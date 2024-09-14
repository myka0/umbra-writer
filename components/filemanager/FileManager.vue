<script lang="ts">
import {
  DocumentIcon,
  DotsVertical,
  RenameIcon,
  RemoveIcon,
  OpenInNewTabIcon,
} from '@/components/icons'
export default {
  data() {
    return {
      documents: [],
      openDropdownId: null,
    }
  },
  async mounted() {
    await this.fetchDocuments()
  },
  components: {
    DocumentIcon,
    DotsVertical,
    RenameIcon,
    RemoveIcon,
    OpenInNewTabIcon,
  },
  methods: {
    async fetchDocuments() {
      try {
        const data = await $fetch('/api/documents', {
          method: 'GET',
        })
        this.documents = data.documents
      } catch (error: any) {
        if (error.response?.status === 404) {
          console.error('404, Document not found')
        } else if (error.response?.status === 500) {
          console.error('500, Internal server error')
        } else {
          console.error('Fetch error: ', error)
        }
      }
    },

    formatDate(dateStr: string) {
      const date = new Date(dateStr)
      const now = new Date()

      if (date.toDateString() === now.toDateString()) {
        // If the date is today show time only
        return date.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        })
      } else {
        // Else, show the full date
        return date.toLocaleDateString()
      }
    },

    toggleDropdown(id: any) {
      this.openDropdownId = this.openDropdownId === id ? null : id
    },

    isDropdownOpen(id: any) {
      return this.openDropdownId === id
    },

    async renameDocument(doc: any) {
      const newTitle = prompt('Enter the new name:', doc.title)
      if (newTitle && newTitle !== doc.title) {
        try {
          await $fetch(`/api/documents/${doc.id}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: { title: newTitle },
          })

          doc.title = newTitle
          this.toggleDropdown(null)
        } catch (error) {
          console.error('Error renaming document:', error)
        }
      }
    },

    async removeDocument(id: any) {
      try {
        await $fetch(`/api/documents/${id}`, {
          method: 'DELETE',
        })

        this.documents = this.documents.filter((doc) => doc.id !== id)
      } catch (error) {
        console.error('Error deleting document:', error)
      }
    },

    openInNewTab(id: any) {
      window.open(`/files/${id}`, '_blank')
    },
  },
}
</script>

<template>
  <div class="flex justify-center h-screen">
    <div class="w-full max-w-3xl p-4">
      <div class="flex justify-between items-center my-4">
        <h2 class="text-2xl mx-4 font-semibold">Start a new document</h2>
        <CreateDocument
          class="py-2 px-4 rounded-xl cursor-pointer transition-colors duration-150 font-medium text-lg bg-neutral-900 text-neutral-100 hover:bg-neutral-750 dark:bg-neutral-50 dark:text-neutral-900 hover:dark:bg-neutral-300"
        />
      </div>
      <div class="grid place-items-center">
        <div
          class="bg-neutral-600 dark:bg-neutral-500 my-4 h-[1px] w-10/12"
        ></div>
      </div>
      <ul v-for="doc in documents" class="p-1 relative">
        <NuxtLink
          :to="`/files/${doc.id}`"
          class="flex text-md w-full font-medium p-1 rounded-full transition-colors duration-100 hover:bg-neutral-200 hover:dark:bg-neutral-750 text-neutral-900 dark:text-neutral-50 items-center justify-between"
        >
          <span class="w-96 flex items-center">
            <DocumentIcon
              :size="32"
              class="text-violet-600 dark:text-violet-500 ml-2 mr-4"
            />
            {{ doc.title }}
          </span>

          <span class="text-sm text-neutral-700 dark:text-neutral-400">
            {{ formatDate(doc.updatedAt) }}
          </span>

          <button
            @click.stop.prevent="toggleDropdown(doc.id)"
            class="p-2 w-10 text-neutral-900 dark:text-neutral-50 rounded-full hover:bg-neutral-300 hover:dark:bg-neutral-600"
            :aria-expanded="isDropdownOpen(doc.id).toString()"
          >
            <DotsVertical />
          </button>

          <div
            v-if="isDropdownOpen(doc.id)"
            class="absolute right-0 mt-40 bg-neutral-200 text-neutral-900 border-neutral-400 dark:bg-neutral-800 dark:text-neutral-50 border dark:border-neutral-500 rounded-md w-52 z-10"
          >
            <button
              @click.prevent="renameDocument(doc)"
              class="flex w-full px-4 py-2 text-left hover:bg-neutral-600"
            >
              <RenameIcon class="mr-4" />
              Rename
            </button>
            <button
              @click.prevent="removeDocument(doc.id)"
              class="flex w-full px-4 py-2 text-left hover:bg-neutral-600"
            >
              <RemoveIcon class="mr-4" />
              Remove
            </button>
            <button
              @click.stop.prevent="openInNewTab(doc.id)"
              class="flex w-full px-4 py-2 text-left hover:bg-neutral-600"
            >
              <OpenInNewTabIcon class="mr-4" />
              Open in new tab
            </button>
          </div>
        </NuxtLink>
      </ul>
    </div>
  </div>
</template>
