import '@/assets/main.css'

import { defineCustomElement } from 'vue'
import NotificationsWidgetUnread from '@/components/notifications-widget-unread.vue'

export const NotificationsWidgetUnreadElement = defineCustomElement(NotificationsWidgetUnread)

customElements.define('notifications-widget-unread-element', NotificationsWidgetUnreadElement)

// Add the new element type to Vue's GlobalComponents type.
// https://vuejs.org/guide/extras/web-components#web-components-and-typescript
declare module 'vue' {
  interface GlobalComponents {
    'notifications-widget-unread-element': typeof NotificationsWidgetUnread
  }
}
