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
import { useSystemStore } from 'src/stores/system';
import { useNetworkStore } from 'src/stores/network';
import { useSecurityStore } from 'src/stores/security';

const appStore = useAppStore();
const { getIsRightDrawerOpen } = storeToRefs(appStore);

// Preload stores
useSystemStore();
useNetworkStore();
useSecurityStore();
</script>
