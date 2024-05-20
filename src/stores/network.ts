import { defineStore } from 'pinia';
import { useSystemStore } from './system';

export const useNetworkStore = defineStore('systems.network', () => {
  const systemStore = useSystemStore();
  const system = systemStore.addSystem({
    id: 'network',
    context: {
      enabled: true,
    },
  });

  return {
    system,
  };
});
