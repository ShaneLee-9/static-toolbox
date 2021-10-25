<template>
  <q-layout view="lHh Lpr lFf">
    <TheHeader @click="leftDrawerOpen = !leftDrawerOpen" />
    <TheNav v-model="leftDrawerOpen" />

    <q-page-container>
      <router-view class="g-page" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import TheNav from '@/components/TheNav.vue'
import TheHeader from '@/components/TheHeader.vue'

const leftDrawerOpen = ref(false)
</script>
