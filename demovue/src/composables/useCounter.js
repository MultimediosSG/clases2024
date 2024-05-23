import { ref } from 'vue'

// global state, created in module scope
const globalCount = ref(1)

export function useCounter() {
  // local state, created per-component
  const localCount = ref(1)

  return {
    globalCount,
    localCount
  }
}