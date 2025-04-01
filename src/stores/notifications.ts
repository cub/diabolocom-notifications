import { ref } from 'vue'
import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'

export enum NotificationNamespace {
  Basic = 'basic',
  Foo = 'foo',
  Bar = 'bar',
}

export enum NotificationType {
  Success = 'success',
  Error = 'error',
  Info = 'info',
}

export enum NotificationState {
  Read = 'read',
  Unread = 'unread',
}

export type Notification = {
  id: string
  namespace: NotificationNamespace
  title: string
  type: NotificationType
  content: string
  state: NotificationState
}

export const useNotificationsStore = defineStore('notifications', () => {
  const notifications = ref([] as Notification[])
  function addNotification(notification: Omit<Notification, 'id' | 'state'>) {
    notifications.value.push({ ...notification, id: uuidv4(), state: NotificationState.Unread })
  }
  function getNotificationsByNamespace(namespace: NotificationNamespace) {
    return notifications.value.filter((n) => {
      return n.namespace === namespace
    })
  }
  return { notifications, addNotification, getNotificationsByNamespace }
})
