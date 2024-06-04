<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
</script>

<template>
  <Sidebar />
  <Header></Header>

  <RouterView />
</template>

