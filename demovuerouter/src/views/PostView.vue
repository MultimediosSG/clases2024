<script setup>
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import axios from 'axios';
import Loading from '../components/Loading.vue';
import { usePosts } from '../composables/usePosts';
const { getPost, post, loading } = usePosts();
const route = useRoute();
const { id } = route.params;


const tituloEnMayuscula = computed(() =>{
  return post.value?.title.toUpperCase();
});

const fechaTica = computed(() => {
  return new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString();
});


getPost(id);

</script>
<template>
  <div class="post">
    
    <Loading v-if="loading"></Loading>
    <div v-else>
      <h1 class="text-4xl font-bold mb-4">{{ tituloEnMayuscula }}</h1>
      <p>{{ post.body }}</p>
      <p>{{ fechaTica }}</p>
    </div>
  </div>
</template>
