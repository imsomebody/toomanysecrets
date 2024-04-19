import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

type AppState = {
  title: string | null;
  rightDrawerOpen: boolean;
};

export const useAppStore = defineStore('app', () => {
  const state: AppState = reactive({
    title: null,
    rightDrawerOpen: false,
  });

  function toggleLeftDrawer() {
    state.rightDrawerOpen = !state.rightDrawerOpen;
  }

  const getIsRightDrawerOpen = computed(() => state.rightDrawerOpen);
  const getTitle = computed(() => state.title);

  function setTitle(v: AppState['title']) {
    state.title = v;
  }

  return {
    $reset() {
      setTitle(null);
    },

    getIsRightDrawerOpen,
    getTitle,

    setTitle,
    toggleLeftDrawer,
  };
});
