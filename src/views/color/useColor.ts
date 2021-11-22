import randomColor from 'randomcolor'
import { Ref, ref } from 'vue'

type UseColor = [Ref<string>, () => void]
type Options = {
  luminosity: Ref<string>
  hue: Ref<{ val: string, label: string }>
}

export default function ({ luminosity, hue }: Options): UseColor {
  const color = ref<string>('')
  const setColor = (): void => {
    color.value = randomColor({
      luminosity: luminosity.value as 'light' | 'dark',
      hue: hue.value.val === 'all' ? '' : hue.value.val
    })
  }

  return [
    color,
    setColor
  ]
}
