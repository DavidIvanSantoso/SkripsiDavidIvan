import { createStore } from 'vuex'
import axios from 'axios';
 export const baseServiceUrl = "http://localhost:3500"

export default createStore({
  state: {
    sidebarVisible: '',
    sidebarUnfoldable: false,
    projects:[],
    project:[],
    device:[],
    devices:[],
    cloudvar:[],
    cloudvararr:[],
    dashboards:[],
    dashboard:[],
    widgets:[],
    userAuth:[],
  },
  getters:{
    //LOGIN REGISTER
    user:state=>state.userAuth,
    //PROJECT MANAGEMENT
     projects: state => state.projects,
     project: state => state.project,

     //DEVICE MANAGEMENT
     devices: state => state.devices,
     device: state => state.device,

      //CLOUD VAR MANAGEMENT
     cloudvararr: state => state.cloudvararr,
     cloudvar: state => state.cloudvar,

       //DASHBOARD MANAGEMENT
     dashboards: state => state.dashboards,
     dashboard: state => state.dashboard,
  },
  mutations: {
    //set USERAUTH
    SET_USERAUTH(state,value){state.userAuth=value},
    //PROJECT MANAGEMENT
    SET_PROJECTS(state, value) { state.projects = value },
    SET_PROJECT(state, value) { state.project = value },

    //DEVICE MANAGEMENT
    SET_DEVICE(state, value) { state.device = value },
    SET_DEVICES(state, value) { state.devices = value },

    //VARIABLES MANAGEMENT
    SET_CLOUDVAR(state, value) { state.cloudvar = value },
    SET_CLOUDVARARR(state, value) { state.cloudvararr = value },

    //DASHBOARD MANAGEMENT
    SET_DASHBOARD(state, value) { state.dashboard = value },
    SET_DASHBOARDS(state, value) { state.dashboards = value },

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

    //USER AUTH
     async userLogin({commit},params){
      const res = await axios.post(`${baseServiceUrl}/userauth`,params)
      if(res){
        console.log('RES STATS',res.status)
        console.log('Response Callback',res)
        commit("SET_USERAUTH",res.data)
      }
    },
    //CREATE USER
    async createUser(_,params){
       await axios.post(`${baseServiceUrl}/user`,params).then((res)=>{
        console.log("RES STATS",res.status)
        console.log('Response Callback',res)
      })
    },
    
    //PROJECT MANAGEMENT
    async fetchProjects({commit}){
      const res = await axios.get(`${baseServiceUrl}/project`)
      if(res){
        
        commit("SET_PROJECTS",res.data)
      }
    },
    async fetchProjectByID({commit},params){
      const res = await axios.get(`${baseServiceUrl}/project/${params}`)
      if(res){
        commit("SET_PROJECT",res.data)
      }
    },
    async addProject(_,params){
       await axios.post(`${baseServiceUrl}/project`,params).then((res)=>{
        console.log('Response Callback',res)
      })
    },
    async updateProjectByID(_,params){
      await axios.put(`${baseServiceUrl}/project`,params).then((res)=>{
       
        console.log('Response Callback',res);
      })
    },
    async deleteProjectByID(_,params){
      console.log("PRAMS",params)
      await axios.delete(`${baseServiceUrl}/project`,params).then((res)=>{
        console.log("Response Callback",res);
      })
    },

    //DEVICE MANAGEMENT
    async fetchDevices({commit}){
      const res = await axios.get(`${baseServiceUrl}/device`)
      if(res){
        
        commit("SET_DEVICES",res.data)
      }
    },
    async fetchDeviceByID({commit},params){
      const res = await axios.get(`${baseServiceUrl}/device/${params}`)
      if(res){
        commit("SET_DEVICE",res.data)
      }
    },
    async addDevice(_,params){
      console.log("DATA",params)
       await axios.post(`${baseServiceUrl}/device`,params).then((res)=>{
        console.log('Response Callback',res)
      })
    },
    async updateDeviceByID(_,params){
      await axios.put(`${baseServiceUrl}/device`,params).then((res)=>{
        console.log('Response Callback',res);
      })
    },
    async deleteDeviceByID(_,params){
      console.log("ROW COUNT",params);
      await axios.delete(`${baseServiceUrl}/device/${params}`).then((res)=>{
        console.log("Response Callback",res);
      })
    },

    //CLOUD VAR MANAGEMENT
    async fetchCloudVarArr({commit}){
      const res = await axios.get(`${baseServiceUrl}/devicevar`)
      if(res){
        commit("SET_CLOUDVARARR",res.data)
      }
    },
    async fetchCloudVarByID({commit},params){
      const res = await axios.get(`${baseServiceUrl}/variables/${params}`)
      if(res){
        commit("SET_CLOUDVAR",res.data)
      }
    },
    async addCloudVar(_,params){
       await axios.post(`${baseServiceUrl}/variables`,params).then((res)=>{
        console.log('Response Callback',res)
      })
    },
    async updateCloudVarByID(_,params){
      await axios.put(`${baseServiceUrl}/variables/${params.id}`,params.data).then((res)=>{
        console.log('Response Callback',res);
      })
    },
    async deleteCloudVarByID(_,params){
      console.log("ROW COUNT",params);
      await axios.delete(`${baseServiceUrl}/variables/${params}`).then((res)=>{
        console.log("Response Callback",res);
      })
    },

    //DASHBOARD MANAGEMENT
    async fetchDashboards({commit}){
      const res = await axios.get(`${baseServiceUrl}/dashboard`)
      if(res){
        
        commit("SET_DASHBOARDS",res.data)
      }
    },
    async fetchDashboardByID({commit},params){
      const res = await axios.get(`${baseServiceUrl}/dashboard/${params}`)
      if(res){
        commit("SET_DASHBOARD",res.data)
      }
    },
    async addDashboard(_,params){
       await axios.post(`${baseServiceUrl}/dashboard`,params).then((res)=>{
        console.log('Response Callback',res)
      })
    },
    async updateDashboardByID(_,params){
      await axios.put(`${baseServiceUrl}/dashboard/${params.id}`,params.data).then((res)=>{
        console.log('Response Callback',res);
      })
    },
    async deleteDashboardByID(_,params){
      console.log("ROW COUNT",params);
      await axios.delete(`${baseServiceUrl}/dashboard/${params}`).then((res)=>{
        console.log("Response Callback",res);
      })
    },

  },
  modules: {},
})



