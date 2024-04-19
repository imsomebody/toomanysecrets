<template>
  <q-layout view="hHh lpR fFf">
    <q-drawer v-model="getIsRightDrawerOpen" side="right" overlay bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container class="main-background">
      <router-view />
    </q-page-container>

    <SystemTaskbar></SystemTaskbar>
  </q-layout>
</template>

<script setup lang="ts">
import SystemTaskbar from './components/SystemTaskbar.vue';

import { useAppStore } from 'src/stores/app';
import { storeToRefs } from 'pinia';

const appStore = useAppStore();
const { getIsRightDrawerOpen } = storeToRefs(appStore);
</script>
