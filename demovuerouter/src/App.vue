<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>

      <nav class="flex gap-4">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
    
      </nav>
      

  <RouterView />
</template>


