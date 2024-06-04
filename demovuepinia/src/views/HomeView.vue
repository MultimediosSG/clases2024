<script setup>
 import { useCounterStore } from '@/store/useCounterStore';

 const store = useCounterStore();

</script>

<template>
  
  <main>
    Home {{  store.count }}
  </main>
</template>
