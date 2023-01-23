<template>
  <component :is="resolveLayout">
    <router-view></router-view>
  </component>
</template>

<script setup lang="ts">
import router from "@/router";

import { layouts, LayoutName } from "@/layouts";
import { computed, ref } from "vue";

const currentRoute = computed(() => router.currentRoute);
/**
 * Returns the active layout.
 * Can be set by the route's metadata or overrided by the theme.
 */
const resolveLayout = computed(() =>
  currentRoute.value.meta?.layout
    ? layouts[currentRoute.value.meta?.layout as LayoutName]
    : layouts.main
);
</script>
