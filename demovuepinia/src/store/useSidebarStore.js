import { defineStore } from "pinia"
import { ref } from "vue"

export const useSidebarStore = defineStore('sidebar', () => {
    const show = ref(false);
    const posts = ref([]);

    function toggle(){
        show.value = !show.value;
    }
    async function init() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await resp.json();
        posts.value = data;
    }

    function addPost(){
        posts.value.push({
            userId: 1,
            id: posts.value.length + 1,
            title: 'New Post',
            body: 'This is a new post'
        });
    }
    return { 
       show: computed(() => show.vulue),
       toggle,
       init,
       posts,
       addPost
     }
  })