<template>
  <q-footer class="taskbar text-white">
    <q-toolbar>
      <q-btn flat round dense icon="keyboard_command_key" class="q-mr-sm" />

      <q-space />

      <SystemTray />
    </q-toolbar>
  </q-footer>
</template>

<script setup lang="ts">
import SystemTray from './SystemTray.vue';
</script>
