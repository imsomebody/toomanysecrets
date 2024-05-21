import { defineStore } from 'pinia';
import { useSystemStore } from './system';
import { computed, reactive } from 'vue';
import { useIntervalFn } from '@vueuse/core';

type NetworkContext = {
  upstream: number;
  downstream: number;
};

export const useNetworkStore = defineStore('systems.network', () => {
  const systemStore = useSystemStore();

  const system = systemStore.addSystem<NetworkContext>({
    id: 'network',
    context: {
      enabled: true,
      tray: false,
      icon: null,

      downstream: 100,
      upstream: 50,
    },
  });

  const simulation = reactive({
    interval: 1000,
    threshold: 10,
  });

  const simInterval = computed(() => simulation.interval);

  useIntervalFn(simulationTick, simInterval, {
    immediate: true,
  });

  function simulationTick() {
    console.log('tick');
  }

  return {
    system,
  };
});
