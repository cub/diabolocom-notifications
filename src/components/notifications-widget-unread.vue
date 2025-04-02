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
import { computed, type PropType } from 'vue'
import {
  NotificationNamespace,
  NotificationState,
  useNotificationsStore,
} from '@/stores/notifications'
const notificationsStore = useNotificationsStore()

const props = defineProps({
  namespace: {
    type: String as PropType<NotificationNamespace>,
    required: true,
  },
})

const notificationsUnread = computed(() => {
  return notificationsStore.getNotificationsByNamespace(props.namespace).filter((n) => {
    return n.state === NotificationState.Unread
  })
})
</script>
