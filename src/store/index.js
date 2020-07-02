import Vue from 'vue'
import Vuex from 'vuex'
import firebase from '@/config/firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    config: {
      generalConfig: {
        socialLinks:{}
      },
      keysandsecurity: {},
      footerConfig: {},
    },
    items: [{
        text: 'Home',
        to: '/',
        icon: 'mdi-home',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Mi Calendario',
        to: '/events',
        icon: 'mdi-assistant',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Mi Equipo',
        to: '/team',
        icon: 'mdi-account-settings',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Exámenes Medicos',
        to: '/speakers',
        icon: 'mdi-assistant',
        meta: {
          showToolbar: true,
          showBottomNav: false
        },
      },
    
      {
        text: 'Mi obstreticia',
        to: '/contact',
        icon: 'mdi-contacts',
        meta: {
          showToolbar: true,
          showBottomNav: true
        },
      },
      {
        text: 'Partners',
        to: '/partners',
        icon: 'mdi-currency-usd',
        meta: {
          showToolbar: false,
          showBottomNav: false
        },
      },
      {
        text: 'Galeria',
        to: '/blogs',
        icon: 'mdi-blogger',
        meta: {
          showToolbar: false,
          showBottomNav: false
        },
      }
    ]
  },
  getters: {
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer),
    setGeneralConfig: (state, payload) => (state.config.generalConfig = payload),
    setKeysAndSecutityConfig: (state, payload) => (state.config.keysandsecurity = payload),
    setFooterConfig: (state, payload) => (state.config.footerConfig = payload),
  },
  modules: {},
  actions: {}

})