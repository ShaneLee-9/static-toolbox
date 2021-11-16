import randomColor from 'randomcolor'
import { Ref, ref } from 'vue'

type UseColor = [Ref<string>, () => void]

export default function (luminosity: Ref<string>): UseColor {
  const color = ref<string>('')
  const setColor = (): void => {
    color.value = randomColor({
      luminosity: luminosity.value as 'light' | 'dark'
    })
  }

  return [
    color,
    setColor
  ]
}
