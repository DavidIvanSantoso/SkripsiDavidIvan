import { createStore, createLogger } from 'vuex'

import modules from './modules'

const debug = process.env.NODE_ENV !== 'production'

//export const baseServiceUrl = 'https://app-service-loyalty.onrender.com'
// export const baseServiceUrl = process.env.VUE_APP_API_RENDER
// export const baseServiceUrl = process.env.VUE_APP_API_AWS
 export const baseServiceUrl = "https://64591b604eb3f674df86dafb.mockapi.io/skripsi/"

const store = createStore({
  state () {
    return {
      baseServiceUrl
    }
  },

  modules,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})

export default store

