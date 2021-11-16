<script lang="ts" setup>
import { navRoutes } from '@/router'

defineProps<{
  modelValue: boolean
}>()

interface Emits {
  (event: 'update:modelValue', value: boolean): void
}
const emits = defineEmits<Emits>()
</script>

<template>
  <q-drawer
    :model-value="modelValue"
    show-if-above
    bordered
    class="bg-grey-2"
    @update:model-value="val => emits('update:modelValue', val)"
  >
    <q-list>
      <!--<q-item-label header>Essential Links</q-item-label>-->
      <q-item
        v-for="item of navRoutes"
        :key="item.path"
        :to="item.path"
        class="text-grey"
        clickable
      >
        <q-item-section avatar>
          <q-icon :name="item.meta?.icon" />
        </q-item-section>
        <q-item-section>
          <q-item-label>{{ item.meta?.title }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-drawer>
</template>

<style scoped>
.q-item.q-router-link--active {
  color: var(--q-primary) !important;
}
</style>
