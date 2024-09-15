<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const errorMessage = ref('')
const successMessage = ref('')

const userSignup = async () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (password.value !== confirmPassword.value) {
    errorMessage.value = 'Passwords do not match'
    return
  }

  try {
    const data = await $fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    })

    if (data.success) {
      successMessage.value = 'User created successfully! Redirecting...'

      // Create an example document for new users
      try {
        const payload = {
          userId: data.user.id,
        }
          
        await $fetch('/api/createExampleDoc', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: payload,
        })
         
      } catch (error) {
        console.error('Failed to create example document:', error)
      }

      setTimeout(() => {
        navigateTo('/auth/signin')
      }, 2000)
    } else {
      errorMessage.value = data.message
    }
  } catch (error) {
    errorMessage.value =
      'An error occurred while signing up. Please try again later.'
    console.error('Error signing up:', error)
  }
}
</script>

<template>
  <form
    class="space-y-4 md:space-y-6 w-80"
    action="#"
    @submit.prevent="userSignup"
  >
    <div>
      <label
        for="email"
        class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-50"
        >Email</label
      >
      <input
        v-model="email"
        type="email"
        name="email"
        id="email"
        class="bg-neutral-50 border-2 border-neutral-400 text-neutral-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline focus:outline-2 focus:outline-violet-600 focus:border-0 focus:mt-2.5 focus:mb-[26px] dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="name@company.com"
        required
      />
    </div>

    <div>
      <label
        for="password"
        class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-50"
        >Password</label
      >
      <input
        v-model="password"
        type="password"
        name="password"
        id="password"
        placeholder="••••••••"
        class="bg-neutral-50 border-2 border-neutral-400 text-neutral-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline focus:outline-2 focus:outline-violet-600 focus:border-0 focus:mt-2.5 focus:mb-[26px] dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <div>
      <label
        for="confirm-password"
        class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-50"
        >Confirm Password</label
      >
      <input
        v-model="confirmPassword"
        type="password"
        name="confirmPassword"
        id="confirm-password"
        placeholder="••••••••"
        class="bg-neutral-50 border-2 border-neutral-400 text-neutral-900 sm:text-sm rounded-lg block w-full p-2.5 focus:outline focus:outline-2 focus:outline-violet-600 focus:border-0 focus:mt-2.5 focus:mb-0.5 dark:bg-neutral-800 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-neutral-50 dark:focus:ring-blue-500 dark:focus:border-blue-500"
        required
      />
    </div>

    <p v-if="errorMessage" class="text-sm text-red-500 dark:text-red-400">
      {{ errorMessage }}
    </p>

    <p v-if="successMessage" class="text-sm text-green-500 dark:text-green-400">
      {{ successMessage }}
    </p>

    <button
      type="submit"
      class="w-full transition-colors duration-150 text-neutral-50 bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-primary-800"
    >
      Sign up
    </button>

    <p class="text-sm font-light text-neutral-600 dark:text-neutral-400">
      Already have an account?
      <NuxtLink
        to="/auth/signin"
        class="ml-1 font-medium text-violet-600 hover:underline dark:text-violet-500"
      >
        Sign in
      </NuxtLink>
    </p>
  </form>
</template>
