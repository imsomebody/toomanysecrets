import { defineStore } from 'pinia';
import { SystemState } from 'src/types/app';
import { computed, reactive } from 'vue';

type System<T> = {
  id: string;
} & T;
type Systems<T> = {
  [systemId: string]: System<T>;
};

type MandatorySystemProps = { context: { enabled: boolean } };

export const useSystemStore = defineStore('system', () => {
  const state: SystemState = reactive({
    pastBoot: false,
  });

  const systems: Systems<MandatorySystemProps> = reactive({});

  const getSystemById = computed(() => (systemId: string) => {
    return systems[systemId] || null;
  });

  function addSystem<T extends MandatorySystemProps>(system: System<T>) {
    systems[system.id] = system;

    return computed({
      get() {
        return getSystemById.value(system.id);
      },
      set(v) {
        systems[v.id] = v;
      },
    });
  }

  /**
   * Starts the boot.
   */
  function boot() {
    console.warn('We should implement the bood sequence feed.');
    state.pastBoot = true;
  }

  return {
    getSystemById,

    addSystem,
    boot,
  };
});
