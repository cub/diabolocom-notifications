<template>
  <form
    data-name="notifications-form-add"
    @submit.prevent="addNotification"
    class="rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl"
  >
    <h2 class="mb-4 text-lg">Add a notification</h2>

    <label class="label" for="add-notification-type">Namespace <BadgeRequired /></label>
    <select class="select mb-4 w-full" id="add-notification-type" required v-model="namespace">
      <option :key="n" v-for="n of namespaces" :value="n">{{ n }}</option>
    </select>

    <label class="label" for="add-notification-title">Title <BadgeRequired /></label>
    <input
      class="input mb-4 w-full"
      id="add-notification-title"
      type="text"
      maxlength="100"
      v-model.trim="title"
      required
    />

    <label class="label" for="add-notification-type">Type <BadgeRequired /></label>
    <select class="select mb-4 w-full" id="add-notification-type" required v-model="type">
      <option :key="t" v-for="t of types" :value="t">{{ t }}</option>
    </select>

    <label class="label" for="add-notification-content">Content <BadgeRequired /></label>
    <textarea
      class="textarea mb-4 w-full"
      id="add-notification-content"
      v-model.trim="content"
      maxlength="1000"
      required
    ></textarea>

    <button class="btn btn-primary w-full" type="submit">Add Notification</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  NotificationNamespace,
  NotificationType,
  useNotificationsStore,
} from '@/stores/notifications'
const notificationsStore = useNotificationsStore()

import BadgeRequired from '@/components/badge-required.vue'

const namespaces = ref(Object.values(NotificationNamespace))
const namespace = ref(NotificationNamespace.Basic)
const title = ref('')
const types = ref(Object.values(NotificationType))
const type = ref(NotificationType.Info)
const content = ref('')

function addNotification() {
  if (title.value && content.value) {
    notificationsStore.addNotification({
      title: title.value,
      type: type.value,
      content: content.value,
      namespace: namespace.value,
    })
    namespace.value = NotificationNamespace.Basic
    title.value = ''
    type.value = NotificationType.Info
    content.value = ''
  }
}
</script>
