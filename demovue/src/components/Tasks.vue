<script setup>
import Button from '@/components/Button.vue'
import Task from '@/components/Task.vue'
import Icono from '@/components/Icono.vue'

const tasks = [{
    id: 1,
    title: 'Task One',
    completed: false
}, {
    id: 2,
    title: 'Task Two',
    completed: true
}, {
    id: 3,
    title: 'Task Three',
    completed: true
}];

</script>
<template>
    <h1><slot /> <Icono /></h1>
    <ul>
        <Task v-for="task in tasks" :key="task.id" :task="task"></Task>
    </ul>
    
    
</template>