<template>
  <div class="network-view" style="min-width: 230px">
    <span class="tray-header q-pa-sm row gap-1 items-center">
      <q-icon name="account_tree"></q-icon>
      Network
    </span>
    <q-separator dark></q-separator>
    <div class="column q-pa-sm q-gutter-y-sm">
      <div class="row q-gutter-x-sm">
        <div class="col-4 column-label">Upstream</div>
        <div class="grow-1">100kbp/s</div>
      </div>

      <div class="row q-gutter-x-sm">
        <div class="col-4 column-label">Downstream</div>
        <div class="grow-1">100kbp/s</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.network-view {
  .column .column-label {
    font-weight: 600;
    margin-right: 8px;
  }
}
</style>

<script setup lang="tsx"></script>
