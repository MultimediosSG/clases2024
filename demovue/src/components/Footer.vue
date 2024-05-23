<script setup>
import FooterLinks from './FooterLinks.vue';
import { useTasks } from '../composables/useTasks';
import { useCounter } from '../composables/useCounter';
const { tasks } = useTasks();
const { globalCount, localCount } = useCounter();
</script>
<template>
    <footer class="bg-gray-800 text-white text-center p-4">
        <p>© 2021 Todos los derechos reservados</p>
        <FooterLinks></FooterLinks>
        {{  tasks }}

        <button @click="globalCount++">aumentar</button>
        <button @click="localCount--">disminuir</button>
        <p>
            global: {{ globalCount }}
            local: {{ localCount }}
        </p>
    </footer>
</template>