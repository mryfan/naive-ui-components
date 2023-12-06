import NaiveUiEditor from './src/NaiveUiEditor.vue'

import type { App } from 'vue'
import type { Props, RequestFun } from './src/types/index'

export type { Props, RequestFun }
export { NaiveUiEditor }

export default {
  install(app: App, option?: Props) {
    app.component('NaiveUiEditor', NaiveUiEditor)
    if (option?.requestFunc) {
      app.provide('requestFunc', option.requestFunc)
    }
  }
}