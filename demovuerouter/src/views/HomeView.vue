<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import axios from 'axios';
import Footer from '../components/Footer.vue';
import { usePosts } from '../composables/usePosts';

const { getData, posts, postsFormateado, count } = usePosts();


</script>

<template>
  <main class="p-12">
    {{ count }}
    <button @click="count++" class="border p-2">click</button>
    <ul class="space-y-4">
      <li v-for="post in postsFormateado" :key="post.id">
        <RouterLink :to="'/posts/'+ post.id"> {{post.id }} - {{ post.title }} - {{ post.created_at }}</RouterLink>
      </li>
    </ul>
  </main>
  <Footer></Footer>
</template>
