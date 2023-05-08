<template>
  <div class="row">
    <div class="card mb-3" style="width: 100%">
      <div class="card-header" style="font-size: 20pt">Add User Access</div>
      <div class="card-body">
        <!-- <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p> -->
        <form>
          <div class="form-group">
            <label for="exampleFormControlInput1"
              >Select Project To Share</label
            >
            <select class="form-select" aria-label="Default select example">
              <option
                v-for="items in shareProjectOption"
                :key="items.id"
                :value="items.id"
              >
                {{ items.projecttitle }}
              </option>
            </select>
          </div>
          <!-- multiselect user email -->
          <div class="form-group mt-3">
            <label for="exampleFormControlSelect1">Add User (By Email)</label>
            <VueMultiselect
              v-model="value"
              tag-placeholder="Add this as new tag"
              placeholder="Search or add a tag"
              label="name"
              track-by="code"
              :options="options"
              :multiple="true"
              :taggable="true"
              @tag="addTag"
            ></VueMultiselect>
          </div>

          <!-- role access -->
          <div class="radio mt-3">
            <label for="exampleFormControlInput1 mb-3"
              >Select Role For User</label
            >
            <div
              class="form-check mt-3"
              v-for="items in typeRole"
              :key="items.typeVal"
            >
              <input
                class="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                :value="items.typeVal"
              />
              <label class="form-check-label" for="flexRadioDefault1">
                {{ items.typeName }}
              </label>
            </div>
          </div>
        </form>
        <div class="button mt-4">
          <button class="btn btn-success">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueMultiselect from 'vue-multiselect'
export default {
  components: {
    VueMultiselect,
  },
  data() {
    return {
      //multiselectoption
      value: [],
      options: [],

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
