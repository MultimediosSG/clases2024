<script setup>
import { useSidebarStore } from '@/store/useSidebarStore';
const store = useSidebarStore();
store.init();
</script>
<template>
    <aside class="absolute w-full h-screen -translate-x-full transition-all ease-linear duration-300" :class="{'translate-x-0': store.show }">
        <nav class="h-full bg-black text-white w-40 relative z-10">
            Posts: {{ store.posts.length }}
            <button class="border p-4" @click="store.addPost">Add Post</button>
            <ul class="flex flex-col h-full py-4  space-y-4  ">
                <li>
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
            </ul>
        </nav>
        <div class="absolute inset-0 w-full h-full " @click="store.toggle"></div>
    </aside>
</template>