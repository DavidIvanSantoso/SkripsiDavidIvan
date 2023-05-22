<template>
  <div class="AddProject">
    <div class="row" style="width: 100% !important">
      <div class="col md-12">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h6 class="card-title mb-0 flex-grow-1">Select Device</h6>
            <button
              class="btn btn-primary"
              style="color: aliceblue"
              @click="addProjectRoute()"
            >
              Confirm
            </button>
          </div>
          <div class="card-body">
            <!-- <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> -->
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Project ID</label>
                <input
                  v-model="newData.projectid"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Please enter your project name!"
                />
              </div>
              <div class="form-group mt-3">
                <label for="exampleFormControlInput1">Project Name</label>
                <input
                  v-model="newData.projectname"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Please enter your project name!"
                />
              </div>
              <div class="form-group mt-3">
                <label for="exampleFormControlSelect1"
                  >Project Description</label
                >
                <input
                  v-model="newData.projectdesc"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Please enter your project description!"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  components: {},
  computed: {
    ...mapState(['project']),
  },
  methods: {
    ...mapActions(['addProject']),
    addProjectRoute() {
      this.addProject(this.newData)
      this.$router.go(-1)
    },
  },
  data() {
    return {
      newData: {
        userid: JSON.parse(localStorage.getItem('userCreds')).userid,
        projectname: '',
        projectdesc: '',
        projectid: '',
      },
    }
  },
  async created() {},
}
</script>

<style></style>
