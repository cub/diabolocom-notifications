<template>
  <div data-name="home">
    <h1 class="text-3xl">Welcome to the Home Page</h1>

    <form
      @submit.prevent="addNotification"
      class="my-8 w-96 rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl"
    >
      <h1 class="mb-4 text-lg">Add a notification</h1>

      <label class="fieldset-label" for="add-notification-title"
        >Title <span class="badge badge-soft badge-neutral badge-xs">required</span></label
      >
      <input
        class="input mb-4 w-full"
        id="add-notification-title"
        type="text"
        maxlength="100"
        v-model.trim="title"
        required
      />

      <label class="fieldset-label" for="add-notification-type"
        >Type <span class="badge badge-soft badge-neutral badge-xs">required</span></label
      >
      <select class="select mb-4 w-full" id="add-notification-type" required v-model="type">
        <option value="info">Info</option>
        <option value="success">Success</option>
        <option value="warning">Warning</option>
        <option value="error">Error</option>
      </select>

      <label class="fieldset-label" for="add-notification-content"
        >Content <span class="badge badge-soft badge-neutral badge-xs">required</span></label
      >
      <textarea
        class="textarea mb-4 w-full"
        id="add-notification-content"
        v-model.trim="content"
        maxlength="1000"
        required
      ></textarea>

      <button class="btn btn-primary w-full" type="submit">Add Notification</button>
    </form>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useNotificationsStore, type Notification } from '@/stores/notifications'
const notificationsStore = useNotificationsStore()

const title = ref('')
const type = ref('info' as Notification['type'])
const content = ref('')

function addNotification() {
  if (title.value && content.value) {
    notificationsStore.addNotification({
      title: title.value,
      type: type.value,
      content: content.value,
      namespace: 'base',
    })
    title.value = ''
    type.value = 'info'
    content.value = ''
  }
}
</script>
