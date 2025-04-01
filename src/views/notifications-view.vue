<template>
  <div data-name="notifications-view">
    <h1 class="mb-4 text-3xl">Notifications page</h1>

    <div class="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
      <NotificationsFormAdd class="h-min" />
      <NotificationsListManage class="h-min" />
    </div>
  </div>
</template>

<script setup lang="ts">
import NotificationsFormAdd from '@/components/notifications-form-add.vue'
import NotificationsListManage from '@/components/notifications-list-manage.vue'
</script>
