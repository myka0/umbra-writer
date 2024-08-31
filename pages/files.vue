<script setup lang="ts">
const { status, signOut } = useAuth()

definePageMeta({ 
    middleware: 'auth'
})

const document = {
  content: `
    <span style="font-size:16pt;font-family:'Times New Roman',serif;">
    <p>
      <strong>Hi there,</strong>
    </p>
    <span style="font-size:12pt;font-family:'Times New Roman',serif;">
    <p>
      this is a <em>basic</em> example of <strong>Umbra</strong>. Sure, there are all kind of basic text styles you’d probably expect from a text editor. But wait until you see the lists:
    </p>
    <ul>
      <li>
        That’s a bullet list with one …
      </li>
      <li>
        … or two list items.
      </li>
    </ul>
    <p>
      Isn’t that great? And all of that is editable. But wait, there’s more. Let’s try a code block:
    </p>
    <pre><code class="language-css">body {
  display: none;
}</code></pre>
    <p>
      I know, I know, this is impressive. It’s only the tip of the iceberg though. Give it a try and click a little bit around.
    </p>
    <blockquote>
      People say nothing is impossible, but I do nothing every day.
      <br />
      — A. A. Milne
    </blockquote>
    </span>
  `,
};
</script>

<template>
  <div class="flex justify-center">
    <h1 class="text-2xl">Files</h1>
    <NuxtLink
      to="/"
      @click="() => signOut({ callbackUrl: '/' })"
      class="py-1.5 px-3 ml-2 rounded-md text-neutral-50 bg-neutral-800 border border-neutral-500 hover:bg-neutral-750 transition-colors" 
      >
      Sign out
    </NuxtLink>
  </div>
  <Writer v-model="document.content" />
</template>
