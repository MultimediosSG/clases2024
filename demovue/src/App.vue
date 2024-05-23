<script setup>
import Tasks from '@/components/Tasks.vue'
import Footer from '@/components/Footer.vue'
import { provide } from 'vue';
import { useTasks } from './composables/useTasks';
import { useCounter } from './composables/useCounter';

const { completedTasks, pendingTasks } = useTasks();
const { localCount, globalCount } = useCounter();

provide('completed', completedTasks.value.length);

</script>

<template>
  <div class="grid items-center place-content-center h-screen">
    <Tasks :tasks="completedTasks">
     Lista de tareas Completadas ({{ completedTasks.length }})
    </Tasks>

    <Tasks :tasks="pendingTasks">
     Lista de tareas incompletas ({{ pendingTasks.length }})
    </Tasks>
    
    local: {{ localCount }}
    global: {{ globalCount }}
    <Footer></Footer>
  </div>
</template>


