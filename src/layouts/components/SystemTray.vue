<template>
  <div class="q-gutter-sm row flex-center">
    <q-btn
      class="tray-btn"
      dense
      round
      flat
      icon="arrow_drop_up"
      v-bind="{ size }"
      id="btn_tray_general"
    >
      <q-menu
        fit
        dark
        class="no-shadow tray-menu"
        anchor="top right"
        self="bottom right"
        v-bind="{ offset: menuOffset }"
        v-model="menuStates.tray"
      >
        <TaskbarTray v-model="menuStates.tray"></TaskbarTray>
      </q-menu>
    </q-btn>

    <q-btn
      class="tray-btn"
      dense
      round
      flat
      icon="wifi"
      v-bind="{ size }"
      id="btn_tray_network"
    >
      <q-menu
        fit
        dark
        class="no-shadow tray-menu"
        anchor="top right"
        self="bottom right"
        v-bind="{ offset: menuOffset }"
        v-model="menuStates.network"
      >
        <TaskbarNetwork></TaskbarNetwork>
      </q-menu>
    </q-btn>

    <time class="column flex-center">
      {{ currentTime }}
      <small>{{ currentDate }}</small>
    </time>
  </div>
</template>

<script setup lang="ts">
import { useNow } from '@vueuse/core';
import { computed, reactive } from 'vue';

import TaskbarNetwork from './TaskbarNetwork.vue';
import TaskbarTray from './TaskbarTray.vue';

const size = 'sm';

const now = useNow();

const currentTime = computed(() => now.value.toLocaleTimeString());
const currentDate = computed(() => now.value.toLocaleDateString());

const menuOffset = [-15, 10];
const menuStates = reactive({
  network: false,
  tray: false,
});
</script>
