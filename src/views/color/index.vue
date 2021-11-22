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
const hueList = [
  { val: 'all', label: '不限' },
  { val: 'red', label: '红色' },
  { val: 'orange', label: '橙色' },
  { val: 'yellow', label: '黄色' },
  { val: 'green', label: '绿色' },
  { val: 'blue', label: '蓝色' },
  { val: 'purple', label: '紫色' },
  { val: 'pink', label: '粉色' },
  { val: 'monochrome', label: '黑白灰' }
]
const hueValue = ref(hueList[0])
const [colorResult, setColor] = useColor({ luminosity, hue: hueValue })
setColor()
</script>

<template>
  <div class="q-pl-lg q-pr-lg">
    <div class="filter-item">
      <span class="filter-item__label">亮度</span>
      <div class="filter-item__content q-gutter-sm">
        <q-radio
          v-for="item of filterList"
          :key="item.val"
          v-model="luminosity"
          :val="item.val"
          :label="item.label"
          @update:model-value="setColor"
        />
      </div>
    </div>
    <div class="filter-item">
      <span class="filter-item__label">色相</span>
      <div class="filter-item__content q-gutter-sm">
        <q-select
          v-model="hueValue"
          :options="hueList"
          dense
          borderless
          @update:model-value="setColor"
        />
      </div>
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

<style scoped lang="sass">
.filter-item
  display: flex
  align-items: center

  &__label
    flex-shrink: 0
    width: 3em
</style>
