<template>
  <div data-name="notifications-view">
    <h1 class="mb-4 text-3xl">Notifications page</h1>

    <div class="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <NotificationsFormAdd class="h-min" />
      <div class="flex h-min flex-col gap-8">
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

        <NotificationsListManage :namespace="notificationsStore.namespace" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import NotificationsFormAdd from '@/components/notifications-form-add.vue'
import NotificationsListManage from '@/components/notifications-list-manage.vue'
import { NotificationNamespace, useNotificationsStore } from '@/stores/notifications'
const notificationsStore = useNotificationsStore()
import { ref } from 'vue'

const namespaces = ref(Object.values(NotificationNamespace))
</script>
