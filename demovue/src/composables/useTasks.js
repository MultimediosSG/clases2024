import { ref, computed } from 'vue';
export function useTasks(){

    const tasks = ref([{
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
    }]);
    
    const completedTasks = computed(() => tasks.value.filter(task => task.completed));
    const pendingTasks = computed(() => tasks.value.filter(task => !task.completed));


    return{
        tasks,
        completedTasks,
        pendingTasks
    }
}