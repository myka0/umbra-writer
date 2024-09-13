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
  <Navbar />
  <div
    class="flex flex-col items-center justify-center w-80 mx-auto h-screen lg:py-0"
  >
    <h1 class="text-4xl font-semibold text-center mb-8">Welcome Back</h1>
    <SigninButton @click="signIn('google')">
      <GoogleIcon />
      Sign in with Google
    </SigninButton>
    <SigninButton @click="signIn('github')">
      <GithubIcon />
      Sign in with Github
    </SigninButton>
    <div class="flex items-center w-full my-2">
      <div class="bg-neutral-500 h-0.5 w-full"></div>
      <p class="mx-8 text-medium text-neutral-500">or</p>
      <div class="bg-neutral-500 h-0.5 w-full"></div>
    </div>
    <SigninForm />
  </div>
</template>
