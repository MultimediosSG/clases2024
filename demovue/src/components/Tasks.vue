<script setup>
import Button from '@/components/Button.vue'

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
    completed: false
}];

</script>
<template>
    <h1><slot /></h1>
    <ul>
        <li v-for="task in tasks" :key="task.id">
            {{ task.title }}
        </li>
    </ul>
    
</template>