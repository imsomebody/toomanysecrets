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
    />

    <q-btn
      class="tray-btn"
      dense
      round
      flat
      icon="wifi"
      v-bind="{ size }"
      id="btn_tray_network"
    >
      <q-menu fit dark class="no-shadow" anchor="top right" self="bottom right">
        <TaskbarNetwork></TaskbarNetwork>
      </q-menu>
    </q-btn>

    <time class="column flex-center">
      {{ currentTime }}
      <small>{{ currentDate }}</small>
    </time>
  </div>
</template>

<style lang="scss">
.tray-btn {
  width: 29px;
  height: 29px;
}
</style>

<script setup lang="ts">
import { useNow } from '@vueuse/core';
import { computed } from 'vue';

import TaskbarNetwork from './TaskbarNetwork.vue';

const size = 'sm';

const now = useNow();

const currentTime = computed(() => now.value.toLocaleTimeString());
const currentDate = computed(() => now.value.toLocaleDateString());
</script>
