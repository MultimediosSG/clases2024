<script setup>
import { useSidebarStore } from '@/store/useSidebarStore';
const store = useSidebarStore();

</script>
<template>
    <header class="flex justify-end">
        <button class="border p-4 " @click="store.toggle">Menu</button>
    </header>
</template>