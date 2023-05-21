<template>
  <div class="row-12" style="width: 100% !important">
    <div class="card mb-3">
      <div class="card-header align-items-center d-flex">
        <h6 class="card-title mb-0 flex-grow-1">
          Share Access To Projects & Dashboards
        </h6>
        <button class="btn btn-primary" style="color: aliceblue">
          Confirm
        </button>
      </div>
      <div class="card-body">
        <form>
          <div class="row mb-3">
            <div class="form-group">
              <label for="exampleInputEmail1">User ID</label>
              <input
                v-model="form.userid"
                type="text"
                class="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter User ID"
              />
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Select Projects to Share</label>
                <VueMultiselect
                  v-model="form.projectid"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="projectname"
                  track-by="code"
                  :options="projects"
                  :multiple="true"
                  :taggable="true"
                ></VueMultiselect>
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1"
                  >Select Dashboard To Share</label
                >
                <VueMultiselect
                  v-model="form.dashboardid"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="dashboardtitle"
                  track-by="code"
                  :options="dashboards"
                  :multiple="true"
                  :taggable="true"
                ></VueMultiselect>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import VueMultiselect from 'vue-multiselect'
export default {
  components: {
    VueMultiselect,
  },
  computed: {
    ...mapState(['dashboards', 'projects']),
  },
  data() {
    return {
      //multiselectoption
      value: [],
      options: [],
      form: {
        userid: '',
        projectid: [],
        dashboardid: [],
      },
      typeRole: [
        { typeName: 'Read Only', typeVal: 'r' },
        { typeName: 'Read & Write', typeVal: 'w' },
      ],
      shareProjectOption: [
        { projectid: 1, projecttitle: 'Project Title' },
        { projectid: 1, projecttitle: 'Project Title' },
      ],
    }
  },
  methods: {
    ...mapActions(['fetchProjects', 'fetchDashboards']),
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.options.push(tag)
      this.value.push(tag)
    },
  },
  async created() {
    await this.fetchDashboards()
    await this.fetchProjects()
  },
}
</script>

<style></style>
