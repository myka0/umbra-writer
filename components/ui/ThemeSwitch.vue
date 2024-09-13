<script setup lang="ts">
import SunIcon from 'vue-material-design-icons/WeatherSunny.vue'
import MoonIcon from 'vue-material-design-icons/WeatherNight.vue'

type Theme = 'light' | 'dark'

const setColorTheme = (newTheme: Theme) => {
  useColorMode().preference = newTheme
}
</script>

<template>
  <button
    class="py-2 px-3"
    @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')"
  >
    <SunIcon
      v-if="$colorMode.value == 'light'"
      class="transition-colors duration-150 text-neutral-900 hover:text-neutral-600"
    />
    <MoonIcon
      v-else
      class="transition-colors duration-150 text-neutral-50 hover:text-neutral-300"
    />
  </button>
</template>
