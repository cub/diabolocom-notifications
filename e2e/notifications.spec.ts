import { test, expect } from '@playwright/test'

test('View and manage notifications', async ({ page }) => {
  await page.goto('/')
  // check widget unread
  await expect(page.getByRole('main')).toContainText('Notifications unread 0')
  // check notifications page
  await page.getByRole('link', { name: 'Notifications' }).click()
  await expect(page.getByLabel('Global config current')).toHaveValue('basic')
  await expect(page.getByRole('main')).toContainText('List of notifications 0')
  // add a new notification
  await page.getByRole('textbox', { name: 'Title required' }).click()
  await page.getByRole('textbox', { name: 'Title required' }).fill('test title')
  await page.getByRole('textbox', { name: 'Content required' }).click()
  await page.getByRole('textbox', { name: 'Content required' }).fill('test content')
  await page.getByRole('button', { name: 'Add Notification' }).click()
  await expect(page.getByRole('main')).toContainText('List of notifications 1')
  // reload page, persist notification
  await page.reload()
  await expect(page.getByRole('main')).toContainText('List of notifications 1')
  // check unread / read
  await expect(page.getByRole('main')).toContainText('infotest titletest contentunread')
  await page.getByRole('button', { name: 'Mark this notification as read' }).click()
  await expect(page.getByRole('main')).toContainText('infotest titletest contentread')
  await page.getByRole('link', { name: 'Home' }).click()
  await expect(page.getByRole('main')).toContainText('Notifications unread 0')
  await page.getByRole('link', { name: 'Notifications' }).click()
  await page.getByRole('button', { name: 'Mark this notification as unread' }).click()
  await expect(page.getByRole('main')).toContainText('infotest titletest contentunread')
  await page.getByRole('link', { name: 'Home' }).click()
  await expect(page.getByRole('main')).toContainText('Notifications unread 1')
  // changing namespace
  await page.getByRole('link', { name: 'Notifications' }).click()
  await page.getByLabel('Global config current').selectOption('foo')
  await expect(page.getByRole('main')).toContainText('List of notifications 0')
  await page.getByRole('link', { name: 'Home' }).click()
  await expect(page.getByRole('main')).toContainText('Notifications unread 0')
  await page.getByRole('link', { name: 'Notifications' }).click()
  await page.getByLabel('Global config current').selectOption('basic')
  await expect(page.getByRole('main')).toContainText('List of notifications 1')
  await page.getByRole('link', { name: 'Home' }).click()
  await expect(page.getByRole('main')).toContainText('Notifications unread 1')
  // delete notification
  await page.getByRole('link', { name: 'Notifications' }).click()
  await page.getByRole('button', { name: 'Delete this notification' }).click()
  await expect(page.getByRole('main')).toContainText('List of notifications 0')
  await page.getByRole('link', { name: 'Home' }).click()
  await expect(page.getByRole('main')).toContainText('Notifications unread 0')
})
