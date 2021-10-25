import useRandomData from '@/views/tea/useRandomData'

export interface RenderListItem {
  label: string
  name: string
}

interface UseRenderListReturn {
  renderList: RenderListItem[]
}

export default function useRenderList (): UseRenderListReturn {
  const LABEL_MAP: string[] = ['茶类', '种类', '品牌']
  const { arr } = useRandomData()
  const renderList = arr.map((item, index): RenderListItem => ({
    label: LABEL_MAP[index],
    name: item
  }))

  return {
    renderList
  }
}
