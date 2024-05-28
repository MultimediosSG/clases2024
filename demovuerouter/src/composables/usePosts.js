import axios from 'axios';
import { ref, computed, onMounted, onUnmounted } from 'vue';


const count = ref(0);

export function usePosts(){
     const posts = ref([]);
     const loading = ref(false);
     const post = ref(null);
     

     async function getData(){
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        posts.value = data;
       
      }

      async function getPost(id) {
        loading.value = true;
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      
        post.value = data;
        loading.value = false;
      
      
      }

      const postsFormateado = computed(()=>{
        return posts.value.map((post) => ({
          ...post,
          created_at: new Date().toLocaleDateString()
        }))
      });

      onMounted(async() => {
        console.log('composable usePosts mounted')
        getData();
      
      })
      onUnmounted(() => {
        console.log('composable usePosts unmounted')
      })

    return {
        getData,
        posts,
        postsFormateado,
        getPost,
        post,
        loading,
        count
    }
}