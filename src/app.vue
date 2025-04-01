<template>
  <MainHeader />
  <main class="container mx-auto">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/components/main-header.vue'
import {
  NotificationNamespace,
  useNotificationsStore,
  type Notification,
} from '@/stores/notifications'
const notificationsStore = useNotificationsStore()

const LOCAL_STORAGE_KEY = 'diabolocom-notifications'

// retrieve possible previous values of notificationsStore inside localStorage
const notificationsLocalStorage = localStorage.getItem(LOCAL_STORAGE_KEY)
if (notificationsLocalStorage) {
  try {
    const n = JSON.parse(notificationsLocalStorage) as Record<string, unknown>
    notificationsStore.namespace =
      (n.namespace as NotificationNamespace | undefined) ?? NotificationNamespace.Basic
    notificationsStore.notifications = (n.notifications as Notification[] | undefined) ?? []
  } catch (error) {
    console.error(error)
  }
}

// watch notificationsStore to save it inside localStorage
notificationsStore.$subscribe(() => {
  localStorage.setItem(
    LOCAL_STORAGE_KEY,
    JSON.stringify({
      namespace: notificationsStore.namespace,
      notifications: notificationsStore.notifications,
    }),
  )
})
</script>
