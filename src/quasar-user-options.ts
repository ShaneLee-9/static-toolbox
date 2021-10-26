import { setCssVar, Notify } from 'quasar'
import './styles/quasar.scss'
import lang from 'quasar/lang/zh-CN.js'
import '@quasar/extras/material-icons/material-icons.css'

setCssVar('primary', '#30384f')

// To be used on app.use(Quasar, { ... })
export default {
  config: {
    notify: {
      timeout: 1000
    }
  },
  plugins: {
    Notify
  },
  lang: lang
}
