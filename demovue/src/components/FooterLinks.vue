<script setup>
import { inject } from 'vue';
 const completed = inject('completed');
</script>
<template>
    <h1>Footer links {{  completed }}</h1>
</template>