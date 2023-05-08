import http from "@/state/http";

export const state = {
    project: [],
    projects: [],
};

export const getters = {
    project: state => state.project,
    projects: state => state.projects,
};

export const mutations = {
    SET_PROJECT(state, value) { state.project = value },
    SET_PROJECTS(state, value) { state.projects = value },
};

export const actions = {
    async fetchProject({ commit }) {
        const res = await http.get(`/projects`)
        
        if (res) {
            commit("SET_PROJECT", res.data);
        }
    },
    async fetchProjectsAll({ commit }, params) {
        const res = await http.get(`/member-company/get-member/?id_MtCompany=${params}`)
        if (res) {
            commit("SET_PROJECTS", res.data);
        }
    },

};