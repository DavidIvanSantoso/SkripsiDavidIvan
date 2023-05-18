import { createStore } from 'vuex'
import axios from 'axios';
import { notify } from '@kyvg/vue3-notification';

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
    widget:[],
    widgetarr:[],
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

      //DASHBOARD MANAGEMENT
     widget: state => state.widget,
     widgetarr: state => state.widgetarr,
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

     //WIDGETS MANAGEMENT
    SET_WIDGET(state, value) { state.widget = value },
    SET_WIDGETARR(state, value) { state.widgetarr = value },

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
        
        commit("SET_USERAUTH",res.data)
        notify({ type: "success", title: "Login Success 🎉" })
      }
      },
    
    //CREATE USER
    async createUser(_,params){
       await axios.post(`${baseServiceUrl}/user`,params).then(()=>{
        notify({ type: "success", title: "Create Data Success 🎉" })
      
      })
    },
    
    //PROJECT MANAGEMENT
    async fetchProjects({commit}){
      const res = await axios.get(`${baseServiceUrl}/project`)
      if(res){
        
        commit("SET_PROJECTS",res.data)
         notify({ type: "success", title: "Get Data Success 🎉" })
      }
    },
    async fetchProjectByID({commit},params){
      const res = await axios.get(`${baseServiceUrl}/project/${params}`)
      if(res){
        commit("SET_PROJECT",res.data)
        notify({ type: "success", title: "Get Data Success 🎉" })
      }
    },
    async addProject(_,params){
       await axios.post(`${baseServiceUrl}/project`,params).then((res)=>{
        console.log('Response Callback',res)
        notify({ type: "success", title: "Add Data Success 🎉" })
      })
    },
    async updateProjectByID(_,params){
      await axios.put(`${baseServiceUrl}/project`,params).then((res)=>{
       
        console.log('Response Callback',res);
        notify({ type: "success", title: "Edit Data Success 🎉" })
      })
    },
    async deleteProjectByID(_,params){
      console.log("PRAMS",params)
      await axios.delete(`${baseServiceUrl}/project`,params).then((res)=>{
        console.log("Response Callback",res);
        notify({ type: "warning", title: "Delete Data Success 🎉" })
      })
    },

    //DEVICE MANAGEMENT
    async fetchDevices({commit}){
      const res = await axios.get(`${baseServiceUrl}/device`)
      if(res){
        
        commit("SET_DEVICES",res.data)
        notify({ type: "success", title: "Get Data Success 🎉" })
      }
    },
    async fetchDeviceByID({commit},params){
      const res = await axios.get(`${baseServiceUrl}/device/${params}`)
      if(res){
        commit("SET_DEVICE",res.data)
        notify({ type: "success", title: "Get Data Success 🎉" })
      }
    },
    async addDevice(_,params){
      console.log("DATA",params)
       await axios.post(`${baseServiceUrl}/device`,params).then((res)=>{
        notify({ type: "success", title: "Add Data Success 🎉" })
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
        notify({ type: "success", title: "Get Data Success 🎉" })
      }
    },
    async fetchCloudVarByIDDev({commit},params){
      console.log(params.devid)
      const res = await axios.get(`${baseServiceUrl}/devicevar/${params}`)
      if(res){
        console.log('RES DATA',res.data)
        commit("SET_CLOUDVARARR",res.data)
         notify({ type: "success", title: "Get Data Success 🎉" })
      }
    },
    async fetchCloudVarByID({commit},params){
      const res = await axios.get(`${baseServiceUrl}/devicevar/${params.devid}/${params.varid}`,params)
      if(res){
        console.log('CLOUD DATA',res.data)
        commit("SET_CLOUDVAR",res.data)
         notify({ type: "success", title: "Get Data Success 🎉" })
      }
    },
    async addCloudVar(_,params){
       await axios.post(`${baseServiceUrl}/devicevar`,params).then((res)=>{
        console.log('Response Callback',res)
         notify({ type: "success", title: "Add Data Success 🎉" })
      })
    },
    async updateCloudVarByID(_,params){
      await axios.put(`${baseServiceUrl}/devicevar`,params).then((res)=>{
        console.log('Response Callback',res);
         notify({ type: "success", title: "Edit Data Success 🎉" })
      })
    },
    async deleteCloudVarByID(_,params){
      console.log("ROW COUNT",params);
      await axios.delete(`${baseServiceUrl}/devicevar/${params}`).then((res)=>{
        console.log("Response Callback",res);
         notify({ type: "warning", title: "Delete Data Success 🎉" })
      })
    },

    //DASHBOARD MANAGEMENT
    async fetchDashboards({commit}){
      const res = await axios.get(`${baseServiceUrl}/dashboard`)
      if(res){
        
        commit("SET_DASHBOARDS",res.data)
         notify({ type: "success", title: "Get Data Success 🎉" })
      }
    },
    async fetchDashboardByID({commit},params){
      const res = await axios.get(`${baseServiceUrl}/dashboard/${params}`)
      if(res){
        commit("SET_DASHBOARD",res.data)
         notify({ type: "warning", title: "Get Data Success 🎉" })
      }
    },
    async addDashboard(_,params){
      console.log("PARAMS",this.params)
       await axios.post(`${baseServiceUrl}/dashboard`,params).then((res)=>{
        console.log('Response Callback',res)
         notify({ type: "success", title: "Add Data Success 🎉" })
      })
    },
    async updateDashboardByID(_,params){
      await axios.put(`${baseServiceUrl}/dashboard/${params.id}`,params.data).then((res)=>{
        console.log('Response Callback',res);
         notify({ type: "success", title: "Edit Data Success 🎉" })
      })
    },
    async deleteDashboardByID(_,params){
      console.log("ROW COUNT",params);
      await axios.delete(`${baseServiceUrl}/dashboard/${params}`).then((res)=>{
        console.log("Response Callback",res);
      })
    },

    //WIDGETS DASHBOARD
    async fetchWidgetsByIDDashboard({commit},params){
      const res = await axios.get(`${baseServiceUrl}/dashwidget/${params.dashboardid}`,params)
      if(res){
        
        commit("SET_WIDGETARR",res.data)
        notify({ type: "success", title: "Get Data Success 🎉",text:'Berhasil Memuat data.' })
      }
    },
     async createDashWidget(_,params){
      const res = await axios.post(`${baseServiceUrl}/dashwidget`,params)
      if(res){
        notify({ type: "success", title: "Add Data Success 🎉" })
      }
    },
     async deleteDashWidgetByID(_,params){
      await axios.delete(`${baseServiceUrl}/dashwidget`,params).then((res)=>{
        console.log("Response Callback",res);
        notify({ type: "warning", title: "Delete Data Success 🎉" })
      })
    },
  },
  modules: {},

})



