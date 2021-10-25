<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

interface Emit {
  (event: 'click'): void
}

const emit = defineEmits<Emit>()
const route = useRoute()

const title = computed(() => route.meta.title)
</script>

<template>
  <q-header elevated>
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        aria-label="Menu"
        icon="menu"
        @click="emit('click')"
      />
      <q-toolbar-title>{{ title }}</q-toolbar-title>
    </q-toolbar>
  </q-header>
</template>
