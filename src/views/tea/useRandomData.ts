import data, { DataItem } from '@/views/tea/data'

interface UseRandomDataReturn {
  arr: string[]
}

export default function useRandomData (): UseRandomDataReturn {
  const arr: string[] = []

  const recursionData = (list: DataItem[]): void => {
    const randomIndex: number = Math.floor(Math.random() * list.length)
    const randomItem: DataItem = list[randomIndex]
    arr.push(randomItem.name)
    randomItem.children && recursionData(randomItem.children)
  }

  recursionData(data)

  return {
    arr
  }
}
