<template>
  <div data-name="home-view">
    <h1 class="mb-4 text-3xl">Home page</h1>

    <h2 class="mb-2 text-xl">Widget</h2>
    <NotificationsWidgetUnread :namespace="notificationsStore.namespace" class="mb-4" />

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
      <li>
        <span class="badge badge-neutral">2025/04/02 13h~14h</span> defineCustomElement export +
        build config
      </li>
      <li>
        <span class="badge badge-neutral">2025/04/02 18h~19h</span> e2e test + documentation
        README.md
      </li>
      <li><span class="badge badge-neutral">2025/04/02 20h~21h</span> Github yml CI/CD</li>
    </ul>

    <h2 class="mb-2 text-xl">TODOs / Improvements</h2>
    <ul class="flex list-inside list-disc flex-col gap-2">
      <li>Remove DaisyUI to lighten the package output</li>
      <li>Do e2e on CustomElement</li>
      <li>Set some `defineEmits(...)` on creation and delete</li>
      <li>Fix a11y issues (colors contrast, ...)</li>
      <li>Fix responsive design</li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import NotificationsWidgetUnread from '@/components/notifications-widget-unread.vue'
import { useNotificationsStore } from '@/stores/notifications'
const notificationsStore = useNotificationsStore()
</script>
