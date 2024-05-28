<script setup>
import { usePosts } from '../composables/usePosts';
const { posts } = usePosts();
</script>
<template>
    <p>&copy; 2021 - Todos los derechos reservados</p>
    <div class="bg-red-500">
        {{  posts.length }}
    </div>
</template>