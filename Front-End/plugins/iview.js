import Vue from 'vue'
import iView from 'iview'
import locale from 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale
import BootstrapVue from "bootstrap-vue";

Vue.use(BootstrapVue)


import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faTrashAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(iView, {
  locale
})
//import { library } from '@fortawesome/fontawesome-svg-core' // déja importé
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'
//import { faTrashAlt } from '@fortawesome/free-solid-svg-icons' // déja importé 
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'  //déja importé 

library.add(faTrashAlt)
library.add(faPencilAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false