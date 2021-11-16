<script setup lang="ts">
import { ref } from 'vue'
import { Filter, Luminosity } from './typing'
import { copy } from '@/utils/helper'
import BaseFab from '@/components/BaseFab.vue'
import useColor from '@/views/color/useColor'

const luminosity = ref(Luminosity.LIGHT)
const filterList = ref<Filter[]>([
  { val: Luminosity.LIGHT, label: '亮色' },
  { val: Luminosity.DARK, label: '暗色' }
])
const [colorResult, setColor] = useColor(luminosity)
setColor()
</script>

<template>
  <div class="q-pl-lg q-pr-lg">
    <div class="q-gutter-sm">
      <q-radio
        v-for="item of filterList"
        :key="item.val"
        v-model="luminosity"
        :val="item.val"
        :label="item.label"
        @update:model-value="setColor"
      />
    </div>

    <div class="row q-mt-md">
      <div class="col-lg-2 col-md-3 col-sm-4 col-xs-6">
        <q-card>
          <q-card-section>
            <q-responsive :ratio="1">
              <div class="q-btn--round" :style="{ background: colorResult }" />
            </q-responsive>
          </q-card-section>
          <q-card-section class="text-center">
            <q-btn push @click="copy(colorResult)">复制颜色</q-btn>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>

  <base-fab @click="setColor" />
</template>
