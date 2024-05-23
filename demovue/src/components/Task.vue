<script setup>
import Icono from '@/components/Icono.vue'
defineProps({
    task: {
        type: Object,
    },
})
defineEmits(['completed']);

</script>
<template>
    <li class="flex gap-2">
       <span :class="{ 'line-through': task?.completed}">
           {{ task?.title }}
       </span>
        
        <button class="border px-3 py-1 rounded-sm hover:bg-gray-500" @click="$emit('completed', task)">Completar</button>
    </li>
</template>
