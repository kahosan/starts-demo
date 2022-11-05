<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(0);
</script>

<template>
  <div class="max-w-600px mx-auto">
    <div class="flex items-center flex-col mt-40">
      <h1 text-4xl>Hello, World!</h1>
      <h2 mb-5>This is a simple demo labs</h2>
      <div flex>
        <p text-xl mr-2>Count: {{ count }}</p>
        <button w-auto px-2 py-1 border-none rounded-5 @click="() => count += 1">Click</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>