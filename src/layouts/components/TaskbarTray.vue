<template>
  <div class="q-pa-sm">
    <div class="row">
      <template v-if="getEligibleSystems.length">
        <span
          v-for="system of getEligibleSystems"
          :key="system.id"
          class="q-gutter-sm"
        >
          <q-btn
            @click.stop="runClick(system)"
            v-if="system.context.icon"
            v-bind="{ icon: system.context.icon.value }"
            class="tray-btn"
            flat
            round
            dense
          />
        </span>
      </template>
      <div v-else>
        <span class="column-label">No background systems.</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { System, useSystemStore } from 'src/stores/system';
import { computed } from 'vue';

const emit = defineEmits<{
  (e: 'update:modelValue', v: (typeof props)['modelValue']): void;
}>();
const props = defineProps<{
  modelValue: boolean;
}>();

const visible = computed({
  get() {
    return props.modelValue;
  },
  set(v) {
    emit('update:modelValue', v);
  },
});

const systemStore = useSystemStore();
const { getTraySystems } = storeToRefs(systemStore);

const getEligibleSystems = computed(() =>
  getTraySystems.value.filter((system) => system.context.enabled)
);

function runClick(system: System<unknown>) {
  visible.value = false;
  system;
}
</script>
