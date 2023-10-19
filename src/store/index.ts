import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => {
    return { count: 0 ,name:'小米'}
  },
  // 也可以定义为
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    change() {
      this.name = '华为'
    },
  },
})