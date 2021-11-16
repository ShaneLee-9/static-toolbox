import { Notify } from 'quasar'

export async function copy (str: string): Promise<void> {
  try {
    await navigator.clipboard.writeText(str)
    Notify.create({
      type: 'positive',
      message: '复制成功'
    })
  } catch (e) {
    Notify.create({
      type: 'negative',
      message: e
    })
  }
}
