<script setup>
import { computed } from 'vue';

const props = defineProps({
    tipo: {
        type: String,
        default: 'primary',
    
    },
})

const classes = computed(() => {
    return props.tipo === 'danger' ? 'danger' : 'primary';
});

</script>
<template>
    <button :class="classes"><slot /></button>
</template>
<style scoped>
.danger{
    background-color: red;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
.primary{
    background-color: #000000;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
}
</style>