<script setup lang="ts">
withDefaults(defineProps<{
  icon?: string
}>(), {
  icon: 'refresh'
})
</script>

<template>
  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab color="primary" :icon="icon" />
  </q-page-sticky>
</template>
