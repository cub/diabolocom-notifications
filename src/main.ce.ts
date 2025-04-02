import '@/assets/main.css'

import { defineCustomElement, createApp } from 'vue'
import NotificationsWidgetUnread from '@/components/notifications-widget-unread.vue'
import NotificationsFormAdd from '@/components/notifications-form-add.vue'
import NotificationsListManage from '@/components/notifications-list-manage.vue'
import { createPinia } from 'pinia'

// create dummy App to init Pinia singleton and share it between CustomElement
const app = createApp({})
app.use(createPinia())

// shadowRoot: false needed for global TailwindCSS style
const extraOptions = { shadowRoot: false }
export const NotificationsWidgetUnreadElement = defineCustomElement(
  NotificationsWidgetUnread,
  extraOptions,
)
export const NotificationsFormAddElement = defineCustomElement(NotificationsFormAdd, extraOptions)
export const NotificationsListManageElement = defineCustomElement(
  NotificationsListManage,
  extraOptions,
)

customElements.define('notifications-widget-unread-element', NotificationsWidgetUnreadElement)
customElements.define('notifications-form-add-element', NotificationsFormAddElement)
customElements.define('notifications-list-manage-element', NotificationsListManageElement)

// Add the new element type to Vue's GlobalComponents type.
// https://vuejs.org/guide/extras/web-components#web-components-and-typescript
declare module 'vue' {
  interface GlobalComponents {
    'notifications-widget-unread-element': typeof NotificationsWidgetUnread
    'notifications-form-add-element': typeof NotificationsFormAdd
    'notifications-list-manage-element': typeof NotificationsListManage
  }
}
