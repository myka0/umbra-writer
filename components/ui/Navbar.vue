<script setup lang="ts">
import LogoIcon from 'vue-material-design-icons/MoonWaningCrescent.vue'

const signedIn = computed(() => status.value === 'authenticated')
const { status, signOut } = useAuth()
</script>

<template>
  <div 
    class="container w-[42rem] mx-auto my-5 flex items-center gap-x-2 rounded-2xl p-1
      dark:bg-neutral-200 dark:text-neutral-800"
  >
    <NuxtLink 
      to="/" 
      class="font-bold flex items-center gap-x-1 ml-2"
    >
      <LogoIcon class="h-6 w-6 text-neutral-800 rotate-[-45deg]" />
      Umbra
    </NuxtLink>
    <NuxtLink 
      to="/files" 
      class="py-2 px-3 rounded-xl transition-colors duration-150 hover:bg-neutral-300"
    >
      Files
    </NuxtLink>
    <NuxtLink 
      to="/account" 
      class="py-2 px-3 rounded-xl transition-colors duration-150 hover:bg-neutral-300"
    >
      Account
    </NuxtLink>
    <CreateDocument 
      class="py-1 px-3 rounded-xl transition-colors duration-150 hover:bg-neutral-300"/>
    <div class="flex ml-auto gap-x-2">
      <Button3D 
        v-if="!signedIn"
        to="/auth/signin"
        class="py-1.5 px-3 my-1 bg-neutral-200 border-2 border-neutral-800 
               before:bg-neutral-800 before:border-2 before:border-neutral-800"
      >
        Sign in
      </Button3D>
      <Button3D 
        v-if="!signedIn"
        to="/auth/signup"
        class="py-1.5 px-3 my-1 text-neutral-50 bg-neutral-850 border-2 border-neutral-850 
               before:bg-neutral-700 before:border-2 before:border-neutral-700"
      >
        Sign up
      </Button3D>
      <Button3D 
        v-if="signedIn"
        to="/"
        @click="() => signOut({ callbackUrl: '/' })"
        class="py-1.5 px-3 my-1 text-neutral-50 bg-neutral-850 border-2 border-neutral-850 
               before:bg-neutral-700 before:border-2 before:border-neutral-700"
      >
        Sign out
      </Button3D>
    </div>
  </div>
</template>

