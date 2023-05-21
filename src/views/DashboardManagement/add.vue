<template>
  <div class="row" style="height: 100% !important">
    <div class="card">
      <div class="card-header align-items-center d-flex">
        <h6 class="card-title mb-0 flex-grow-1">Add Dashboard Information</h6>
        <button
          class="btn btn-primary"
          style="color: aliceblue"
          @click="addDashboard(this.form)"
        >
          Confirm
        </button>
      </div>
      <div class="card-body">
        <!-- form input -->
        <form>
          <!-- Dashboard ID -->
          <div class="mt-2 mx-2">
            <label for="varID" class="form-label">Dashboard ID</label>
            <input
              v-model="form.dashboardid"
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <!-- Dashboard Title -->
          <div class="mt-2 mx-2">
            <label for="varID" class="form-label">Dashboard Title</label>
            <input
              v-model="form.dashboardtitle"
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <!-- Dashboard Title -->
          <div class="mt-2 mx-2">
            <label for="varID" class="form-label">Dashboard Description</label>
            <input
              v-model="form.dashboarddesc"
              type="text"
              class="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <!-- Select Project Title -->
          <div class="mt-2 mx-2">
            <label for="varID" class="form-label">Link To Project</label>
            <vue-multiselect
              v-model="form.projectid"
              :options="projectNewDataID"
              :searchable="false"
              :close-on-select="true"
              :show-labels="false"
              placeholder="Pick a value"
            >
            </vue-multiselect>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VueMultiselect from 'vue-multiselect'
export default {
  components: {
    VueMultiselect,
  },
  data() {
    return {
      form: {
        dashboardid: '',
        dashboarddesc: '',
        dashboardtitle: '',
      },
      projectNewDataID: [],
    }
  },
  computed: {
    ...mapState(['dashboards', 'projects']),
  },
  methods: {
    ...mapActions(['fetchProjects', 'addDashboard']),
    nameWithLang({ projectid, projectname }) {
      return `${projectid} — [${projectname}]`
    },
    getProjectOnlyID() {
      console.log('project lenght', this.projects.length)
      for (let i = 0; i < this.projects.length; i++) {
        // console.log(this.projects[i].projectid)
        this.projectNewDataID.push(this.projects[i].projectid)
      }
    },
  },
  async created() {
    await this.fetchProjects()
    this.getProjectOnlyID()
    console.log(this.projects)
  },
}
</script>

<style>
.card {
  width: 100%;
}
</style>
