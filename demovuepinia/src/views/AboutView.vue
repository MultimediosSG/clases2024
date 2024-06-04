<script setup>
import { useCounterStore } from '@/store/useCounterStore';

const store = useCounterStore();
</script>
<template>
  <div class="about">
    <h1>This is an about page {{ store.count }}</h1>
  </div>
</template>
