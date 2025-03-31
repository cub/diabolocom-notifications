<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainHeader from '@/components/main-header.vue'
</script>

<template>
  <MainHeader />
  <main class="container mx-auto">
    <RouterView />
  </main>
</template>
