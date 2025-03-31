import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref([])
  return { notifications }
})
