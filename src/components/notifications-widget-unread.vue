<template>
  <div
    data-name="notifications-widget-unread"
    class="inline-flex items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl"
  >
    Notifications unread
    <span
      class="badge"
      :class="{
        'badge-neutral': notificationsUnread.length === 0,
        'badge-error': notificationsUnread.length,
      }"
      >{{ notificationsUnread.length }}</span
    >
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { NotificationState, useNotificationsStore } from '@/stores/notifications'
const notificationsStore = useNotificationsStore()

const notificationsUnread = computed(() => {
  return notificationsStore.notificationsByNamespace.filter((n) => {
    return n.state === NotificationState.Unread
  })
})
</script>
