<script setup>
import Icono from '@/components/Icono.vue'
defineProps({
    task: {
        type: Object,
    },
})
</script>
<template>
    <h1>{{ task?.title }} <Icono v-if="task?.completed" />
<button>Completar</button>
</h1>
</template>  
<style>
svg{
    width: 20px;
    height: 20px;
}
</style>  