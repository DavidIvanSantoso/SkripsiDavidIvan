import axios from 'axios';
import { createStore } from 'vuex'

 export const baseServiceUrl = "https://64591b604eb3f674df86dafb.mockapi.io/skripsi/"

 export const state={
  projects:[],
 }

 export const getters = {
    projects: state => state.projects,
    
};
export const mutations = {
    SET_PROJECTS(state, value) { state.projects = value },
    
};

export const actions={
  async fetchProjects({commit}){
    const res = await axios.get(`${baseServiceUrl}/projects`)
    if(res){
      commit("SET_PROJECTS",res.data)
    }
     
  }
}
const store = createStore({
  // state () {
  //   return {
  //     baseServiceUrl,
  //     projects,
  //   }
  // },
 
  state,
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
 
})

export default store

