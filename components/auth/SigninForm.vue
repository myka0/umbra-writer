<script setup lang="ts">
const { signIn } = useAuth()

const email = ref('')
const password = ref('')
</script>

<template>
  <form
    class="space-y-4 md:space-y-6 w-80"
    @submit.prevent="
      signIn('credentials', { email: email, password: password })
    "
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

    <div class="flex items-center justify-between">
      <div class="flex items-start">
        <div class="flex items-center h-5">
          <input
            id="remember"
            aria-describedby="remember"
            type="checkbox"
            class="w-4 h-4 border border-pink-400 rounded bg-pink-50 focus:ring-3 focus:ring-pink-300 dark:bg-pink-700 dark:border-pink-600 dark:focus:ring-pink-600 dark:ring-offset-pink-800"
          />
        </div>
        <div class="ml-3 text-sm">
          <label for="remember" class="text-neutral-600 dark:text-neutral-300"
            >Remember me</label
          >
        </div>
      </div>
      <a
        href="#"
        class="text-sm font-medium text-violet-600 hover:underline dark:text-violet-500"
        >Forgot password?
      </a>
    </div>

    <button
      type="submit"
      class="w-full transition-colors duration-150 text-neutral-50 bg-violet-600 hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-violet-600 dark:hover:bg-violet-700 dark:focus:ring-primary-800"
    >
      Sign in
    </button>

    <p class="text-sm font-light text-neutral-600 dark:text-neutral-400">
      Don’t have an account yet?
      <NuxtLink
        to="/auth/signup"
        class="ml-1 font-medium text-violet-600 hover:underline dark:text-violet-500"
      >
        Sign up
      </NuxtLink>
    </p>
  </form>
</template>
