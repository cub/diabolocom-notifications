<template>
  <div data-name="home-view">
    <h1 class="mb-4 text-3xl">Home page</h1>

    <h2 class="mb-2 text-xl">Widget</h2>
    <NotificationsWidgetUnread class="mb-4" />

    <h2 class="mb-2 text-xl">Changelog</h2>
    <ul class="mb-4 flex list-inside list-disc flex-col gap-2 font-mono">
      <li><span class="badge badge-neutral">2025/03/31 13h~14h</span> init project</li>
      <li>
        <span class="badge badge-neutral">2025/03/31 20h~21h</span> daisy ui + store + form
        notification
      </li>
      <li><span class="badge badge-neutral">2025/04/01 13h~14h</span> notifications list</li>
      <li>
        <span class="badge badge-neutral">2025/04/01 20h~23h</span> localStorage sync + WIP
        defineCustomElement
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import NotificationsWidgetUnread from '@/components/notifications-widget-unread.vue'
</script>
