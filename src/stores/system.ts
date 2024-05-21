import { defineStore } from 'pinia';
import { SystemState } from 'src/types/app';
import { computed, reactive } from 'vue';

export type SystemIcon = {
  type: 'md';
  value: string;
};
export type SystemDefaults = {
  enabled: boolean;
  tray: boolean;
  icon: SystemIcon | null;
};

export type System<TExtras> = {
  id: string;
  context: TExtras & SystemDefaults;
};
export type Systems<T> = {
  [systemId: string]: System<T>;
};

export const useSystemStore = defineStore('system', () => {
  const state: SystemState = reactive({
    pastBoot: false,
  });

  const systems: Systems<unknown> = reactive({});

  const getSystems = computed(() => Object.values(systems));

  const getSystemById = computed(() => (systemId: string) => {
    return systems[systemId] || null;
  });
  const getTraySystems = computed(() =>
    getSystems.value.filter((system) => system.context.tray)
  );

  function addSystem<T>(system: System<T>) {
    systems[system.id] = system;

    return computed<System<T>>({
      get() {
        return getSystemById.value(system.id) as System<T>;
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
    if (state.pastBoot) {
      throw new ReferenceError('The system has already booted.');
    }

    console.warn('We should implement the bood sequence feed.');
    state.pastBoot = true;
  }

  boot();

  return {
    getSystemById,
    getSystems,
    getTraySystems,

    addSystem,
    boot,
  };
});
