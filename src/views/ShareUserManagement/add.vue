<template>
  <div class="row-12" style="width: 100% !important">
    <div class="card mb-3">
      <div class="card-header align-items-center d-flex">
        <h6 class="card-title mb-0 flex-grow-1">Create User Account</h6>
        <button class="btn btn-primary" style="color: aliceblue">
          Confirm
        </button>
      </div>
      <div class="card-body">
        <form>
          <div class="row mb-3">
            <div class="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1">User ID</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter User ID"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Username</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter User ID"
                />
              </div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter User ID"
                />
              </div>
            </div>
            <div class="col-6">
              <div class="form-group">
                <label for="exampleInputEmail1">Confirm Password</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter User ID"
                />
              </div>
            </div>
          </div>
          <div class="row mb-3">
            <div class="col-12">
              <div class="form-group">
                <label for="exampleInputEmail1">Email</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter User ID"
                />
              </div>
            </div>
            <div class="row mt-3">
              <fieldset class="form-group">
                <div class="row">
                  <legend class="col-form-label col-sm-2 pt-0">Radios</legend>
                  <div class="col-sm-10">
                    <div
                      class="form-check"
                      v-for="items in typeRole"
                      :key="items.name"
                    >
                      <input
                        class="form-check-input"
                        type="radio"
                        name="gridRadios"
                        id="gridRadios1"
                        :value="items.type"
                        style="width: 1rem !important; height: 1rem !important"
                      />
                      <label class="form-check-label" for="gridRadios1">
                        {{ items.name }}
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      //multiselectoption
      value: [],
      options: [],

      typeRole: [
        { name: 'Read Only', type: 'r' },
        { name: 'Read & Write', type: 'a' },
      ],
      shareProjectOption: [
        { projectid: 1, projecttitle: 'Project Title' },
        { projectid: 1, projecttitle: 'Project Title' },
      ],
    }
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.options.push(tag)
      this.value.push(tag)
    },
  },
}
</script>

<style></style>
