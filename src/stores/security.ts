import { defineStore } from 'pinia';
import { useSystemStore } from './system';

type SecurityContext = object;

export const useSecurityStore = defineStore('systems.security', () => {
  const systemStore = useSystemStore();

  const system = systemStore.addSystem<SecurityContext>({
    id: 'security',
    context: {
      enabled: true,
      tray: true,
      icon: {
        type: 'md',
        value: 'security',
      },
    },
  });

  return {
    system,
  };
});
