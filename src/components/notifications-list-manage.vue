<template>
  <div data-name="notifications-list-manage" class="flex flex-col gap-8">
    <div class="rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl">
      <label class="label" for="notifications-list-namespace"
        >Global config current namespace</label
      >
      <select
        class="select mb-2 w-full"
        id="notifications-list-namespace"
        required
        v-model="notificationsStore.namespace"
      >
        <option :key="n" v-for="n of namespaces" :value="n">{{ n }}</option>
      </select>
    </div>
    <div class="rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl">
      <h2 class="mb-2 flex items-center gap-2 text-lg">
        List of notifications
        <span class="badge">{{ notificationsStore.notificationsByNamespace.length }}</span>
      </h2>

      <p v-if="notificationsStore.notificationsByNamespace.length === 0">Empty 🌵</p>
      <ul v-else class="flex flex-col gap-2">
        <li
          v-for="n of notificationsStore.notificationsByNamespace"
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
                <svg
                  v-if="n.state === NotificationState.Read"
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-neutral-900"
                >
                  <path
                    d="M3 13C6.6 5 17.4 5 21 13"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14C15 15.6569 13.6569 17 12 17Z"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
                <svg
                  width="24px"
                  v-if="n.state === NotificationState.Unread"
                  height="24px"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="stroke-neutral-900"
                >
                  <path
                    d="M19.5 16L17.0248 12.6038"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M12 17.5V14"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M4.5 16L6.96895 12.6124"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M3 8C6.6 16 17.4 16 21 8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>
            <button
              class="btn btn-soft btn-error btn-circle"
              type="button"
              aria-label="Delete this notification"
              @click="notificationDelete(n)"
            >
              <svg
                width="24px"
                height="24px"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-neutral-900"
              >
                <path
                  d="M20 9L18.005 20.3463C17.8369 21.3026 17.0062 22 16.0353 22H7.96474C6.99379 22 6.1631 21.3026 5.99496 20.3463L4 9"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M21 6L15.375 6M3 6L8.625 6M8.625 6V4C8.625 2.89543 9.52043 2 10.625 2H13.375C14.4796 2 15.375 2.89543 15.375 4V6M8.625 6L15.375 6"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  NotificationNamespace,
  NotificationState,
  NotificationType,
  useNotificationsStore,
  type Notification,
} from '@/stores/notifications'
const notificationsStore = useNotificationsStore()

const namespaces = ref(Object.values(NotificationNamespace))

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
