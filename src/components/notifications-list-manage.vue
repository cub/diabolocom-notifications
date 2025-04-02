<template>
  <div
    data-name="notifications-list-manage"
    class="rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl"
  >
    <h2 class="mb-2 flex items-center gap-2 text-lg">
      List of notifications
      <span class="badge">{{
        notificationsStore.getNotificationsByNamespace(props.namespace).length
      }}</span>
    </h2>

    <p v-if="notificationsStore.getNotificationsByNamespace(props.namespace).length === 0">
      Empty 🌵
    </p>
    <ul v-else class="flex flex-col gap-2">
      <li
        v-for="n of notificationsStore.getNotificationsByNamespace(props.namespace)"
        :key="n.id"
        class="flex justify-between gap-4 rounded-xl border border-neutral-200 bg-neutral-50 p-4"
      >
        <div
          class="badge badge-outline w-20 shrink-0 grow-0"
          :class="{
            'badge-info': n.type === NotificationType.Info,
            'badge-error': n.type === NotificationType.Error,
            'badge-success': n.type === NotificationType.Success,
          }"
        >
          {{ n.type }}
        </div>
        <div class="grow">
          <h3 class="font-bold break-all">{{ n.title }}</h3>
          <p class="break-all">{{ n.content }}</p>
        </div>
        <div class="flex shrink-0 grow-0 items-start justify-end gap-4">
          <div class="flex items-center gap-2">
            <span class="badge badge-sm w-14">{{ n.state }}</span>
            <button
              class="btn btn-soft btn-circle"
              type="button"
              :aria-label="
                n.state === NotificationState.Read
                  ? 'Mark this notification as unread'
                  : 'Mark this notification as read'
              "
              @click="notificationToggleState(n)"
            >
              <img src="@/assets/eye.svg" alt="" v-if="n.state === NotificationState.Read" />
              <img src="@/assets/eye-closed.svg" alt="" v-else />
            </button>
          </div>
          <button
            class="btn btn-soft btn-error btn-circle"
            type="button"
            aria-label="Delete this notification"
            @click="notificationDelete(n)"
          >
            <img src="@/assets/trash.svg" alt="" />
          </button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {
  NotificationNamespace,
  NotificationState,
  NotificationType,
  useNotificationsStore,
  type Notification,
} from '@/stores/notifications'
import type { PropType } from 'vue'
const notificationsStore = useNotificationsStore()

const props = defineProps({
  namespace: {
    type: String as PropType<NotificationNamespace>,
    required: true,
  },
})

function notificationToggleState(n: Notification) {
  if (n.state === NotificationState.Read) {
    n.state = NotificationState.Unread
  } else {
    n.state = NotificationState.Read
  }
}

function notificationDelete(n: Notification) {
  notificationsStore.notifications = notificationsStore.notifications.filter((notif) => {
    return notif.id !== n.id
  })
}
</script>
