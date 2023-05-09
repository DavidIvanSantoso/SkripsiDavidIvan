import { createStore } from 'vuex'
import axios from 'axios';
 export const baseServiceUrl = "https://64591b604eb3f674df86dafb.mockapi.io/skripsi/"

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    projects:[],
    project:[],
  },
  getters:{
    //PROJECT MANAGEMENT
     projects: state => state.projects,
     project: state => state.project,
  },
  mutations: {
    //PROJECT MANAGEMENT
     SET_PROJECTS(state, value) { state.projects = value },
     SET_PROJECT(state, value) { state.project = value },

    //DEVICE MANAGEMENT


    //VARIABLES MANAGEMENT

    //DASHBOARD MANAGEMENT


    toggleSidebar(state) {
      state.sidebarVisible = !state.sidebarVisible
    },
    toggleUnfoldable(state) {
      state.sidebarUnfoldable = !state.sidebarUnfoldable
    },
    updateSidebarVisible(state, payload) {
      state.sidebarVisible = payload.value
    },
  },
  actions: {
    //PROJECT MANAGEMENT
    async fetchProjects({commit}){
      const res = await axios.get(`${baseServiceUrl}/projects`)
      if(res){
        
        commit("SET_PROJECTS",res.data)
      }
    },
    async fetchProjectByID({commit},params){
      const res = await axios.get(`${baseServiceUrl}/projects/${params}`)
      if(res){
        commit("SET_PROJECT",res.data)
      }
    },
    async addProject(_,params){
       await axios.post(`${baseServiceUrl}/projects`,params).then((res)=>{
        console.log('Response Callback',res)
      })
    },
    async updateProjectByID(_,params){
      await axios.put(`${baseServiceUrl}/projects/${params.id}`,params.data).then((res)=>{
        console.log('Response Callback',res);
      })
    },
    async deleteProjectByID(_,params){
      console.log("ROW COUNT",params);
      await axios.delete(`${baseServiceUrl}/projects/${params}`).then((res)=>{
        console.log("Response Callback",res);
      })
    }


  },
  modules: {},
})



