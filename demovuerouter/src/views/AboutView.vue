<script setup>
import { usePosts } from '../composables/usePosts';
const { posts, count } = usePosts();
</script>
<template>
  <div class="about">
    {{ count }}  <button @click="count++" class="border p-2">click</button>
    <h1>This is an about page</h1>
    <pre>{{ posts }}</pre>
  </div>
</template>


