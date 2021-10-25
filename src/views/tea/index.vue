<script lang="ts" setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'
import useRenderList, { RenderListItem } from '@/views/tea/useRenderList'
import BaseFab from '@/components/BaseFab.vue'

const $q = useQuasar()

const list = ref<RenderListItem[]>([])
const getData = (): void => {
  const { renderList } = useRenderList()
  list.value = renderList
}
getData()

const copyName = async (item: RenderListItem): Promise<void> => {
  try {
    await navigator.clipboard.writeText(item.name)
    $q.notify({
      color: 'positive',
      message: '复制成功'
    })
  } catch (e) {
    $q.notify({
      color: 'negative',
      message: '复制失败'
    })
  }
}
</script>

<template>
  <div>
    <base-fab @click="getData" />
    <p class="c-secondary text-grey-5 text-center">点击列表项自动复制</p>
    <q-card>
      <q-item
        v-for="item of list"
        :key="item.label"
        v-ripple
        clickable
        @click="copyName(item)"
      >
        <q-item-section avatar>
          <span class="c-secondary">{{ item.label }}</span>
        </q-item-section>
        <q-item-section>{{ item.name }}</q-item-section>
      </q-item>
    </q-card>
  </div>
</template>
