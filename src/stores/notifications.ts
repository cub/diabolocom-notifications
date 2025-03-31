import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export type Notification = {
  id: string
  title: string
  type: 'success' | 'error' | 'info'
  content: string
  namespace: string
  state: 'unread' | 'read'
}

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref([] as Notification[])
  function addNotification(notification: Omit<Notification, 'id' | 'state'>) {
    notifications.value.push({ ...notification, id: uuidv4(), state: 'unread' })
  }
  return { notifications, addNotification }
})
