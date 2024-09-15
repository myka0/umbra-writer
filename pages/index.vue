<script setup lang="ts">
import LogoIcon from 'vue-material-design-icons/MoonWaningCrescent.vue'

definePageMeta({
  auth: false,
  colorMode: 'dark',
})
</script>

<template>
  <div class="page-black-bg" >
  <GradientBG :lines="false" :dots="true" :gradient="true" />
  <div class="z-10 relative">
  <Navbar />
  <div class="flex items-center justify-center mb-20">
    <div class="flex items-center space-x-6">
      <LogoIcon :size="224" class="h-16 w-16 -ml-20 mr-16 text-neutral-50 rotate-[-45deg]" />
      <div class="content">
        <h1>
          The tidy <br />
          <strong>rich text editor</strong>
        </h1>
        <p>
          Umbra Writer is designed to enhance your creative process, allowing
          you to focus on what matters most – your content.
        </p>
        <div class="flex space-x-3">
          <Button3D
            to="/files"
            class="px-6 py-3 text-xl text-neutral-900 bg-neutral-100 border-2 border-neutral-100 before:bg-neutral-400 before:border-2 before:border-neutral-400"
          >
            Get Started
          </Button3D>
          <Button3D
            to="https://github.com/myka0/umbra-writer"
            class="px-6 py-3 text-xl text-neutral-100 bg-neutral-900 border-2 border-neutral-100 before:bg-neutral-100 before:border-2 before:border-neutral-100"
          >
            Github
          </Button3D>
        </div>
      </div>
    </div>
  </div>
  <div class="flex items-center justify-center">
    <div class="text-center w-[50rem]">
      <h1>
        Transform<br /><strong>your writing<br />experience</strong>
      </h1>
      <p>
        Whether you're a professional writer, blogger, student, or just someone
        who loves to jot down ideas, Umbra Writer provides the tools you need to
        create polished, professional documents with ease.
      </p>
    </div>
  </div>
  </div>
  </div>
</template>

<style scoped>
.content {
  margin-top: 6rem;
  max-width: 35rem;
  z-index: 10;
  position: relative;
  left: 30%;
}

h1 {
  font-size: 5rem;
  font-weight: 600;
  line-height: 5rem;
  margin-bottom: 2rem;
}

h1 strong {
  @apply font-serif ml-2 font-normal;
}

p {
  font-size: 1.5rem;
  margin-bottom: 3rem;
}
</style>
