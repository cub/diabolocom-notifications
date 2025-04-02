# diabolocom-notifications

## Environments
Depending on whether you want to develop in Vue or build the web components, there are two different environments:
- **[Vue Development]**: `main.spa.ts` and `index.spa.html`
- **[Web Component]**: `main.ce.ts` and `index.ce.html`

To easily switch between these two environments, use the following commands:

```sh
npm run setup:ce  # Switch to Web Component environment
npm run setup:spa # Switch to Vue Development environment
```

### Running Vue Development Mode
```sh
npm run setup:spa
npm run dev
```

### Building Web Components
```sh
npm run setup:ce
npm run build
```

Once built, the `dist` directory contains an `index.html` page demonstrating how to include and use the generated JS and CSS files.

All three components share a common Pinia store instance.

TailwindCSS is not scoped to individual components (no Shadow DOM) to maintain the utility of atomic classes. However, if your project already uses/includes TailwindCSS v4, you may not need to include the built CSS to avoid redundancy and conflicts. **That said, this is not entirely true due to the current dependency on DaisyUI, which remains necessary for proper styling.**

## Exported Web Components

### `<notifications-form-add-element>`
The form for adding new notification.

### `<notifications-widget-unread-element>`
A small widget displaying the number of unread notifications.
The `namespace` prop are required.

### `<notifications-list-manage-element>`
A notification list and manager component. Allows marking notifications as read or unread and deleting them.
The `namespace` prop are required.

