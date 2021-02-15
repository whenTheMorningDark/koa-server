// import { login, logout, getInfo } from '@/api/user'
import { getToken, setToken } from '@/utils/auth'
// import router, { resetRouter } from '@/router'

const state = {
  token: getToken() || ''
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
    setToken(token)
  }
}

const actions = {

}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
