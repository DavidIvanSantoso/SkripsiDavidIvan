<template>
  <div class="AddProject">
    <div class="row mx-3" style="width: 100%">
      <div class="col md-12">
        <div class="card mb-3">
          <div class="card-header" style="font-size: 20pt">Edit Project</div>
          <div class="card-body">
            <!-- <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> -->
            <form>
              <div class="form-group">
                <label for="exampleFormControlInput1">Project Name</label>
                <input
                  v-model="this.project.projectname"
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
                  v-model="this.project.projectdesc"
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Please enter your project description!"
                />
              </div>
            </form>
            <div class="button mt-4">
              <button
                class="btn btn-success"
                @click="
                  this.updateProjectByID({
                    id: this.newData.idproject,
                    data: this.newData.data,
                  })
                "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['fetchProjectByID', 'updateProjectByID']),
  },
  computed: {
    ...mapState(['project']),
  },
  data() {
    return {
      newData: {
        idproject: null,
        data: [],
      },
    }
  },
  async created() {
    await this.fetchProjectByID(this.$route.params.id)
    this.newData.idproject = this.$route.params.id
    this.newData.data = { ...this.project }
    console.log(this.newData.data)
  },
}
</script>

<style></style>
