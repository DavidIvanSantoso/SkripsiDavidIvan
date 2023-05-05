<template>
  <div class="card mt-3 mx-3">
    <div class="card-header align-items-center d-flex">
      <div class="card-text flex-grow-1 mx-2" :v-model="vartitle">
        {{ vartitle }}
      </div>
      <button class="btn btn-dark d-flex mx-1">
        <i class="bi bi-trash-fill"></i>
      </button>
      <button class="btn btn-dark d-flex p">
        <i class="bi bi-three-dots-vertical"></i>
      </button>
    </div>
    <div class="card-body align-items-center">
      <div class="form-check form-switch mt-3">
        <input
          class="form-check-input"
          type="checkbox"
          role="switch"
          id="flexSwitchCheckDefault"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      varbuttontext: 'Button',
      vartitle: 'Title',
    }
  },
}
</script>

<style>
.form-check-input {
  width: 4rem !important;
  height: 2rem !important;
}
</style>
