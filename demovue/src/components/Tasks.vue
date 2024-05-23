<script setup>
import Button from '@/components/Button.vue'
import Task from '@/components/Task.vue'
import Icono from '@/components/Icono.vue'
import { ref } from 'vue';

defineProps({
    tasks: {
        type: Array,
        required: true
    }
});

const completeTask = (task) => {
  task.completed = !task.completed;
}
</script>
<template>
    <div class="p-5 border">
        <h1 class="text-2xl mb-4">
            <slot />
        </h1>
        <ul class="space-y-2">
            <Task v-for="task in tasks" :key="task.id" :task="task" @completed="completeTask"></Task>
        </ul>
    </div>


</template>