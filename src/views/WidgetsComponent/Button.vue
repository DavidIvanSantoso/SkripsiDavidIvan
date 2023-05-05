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
      <button class="btn btn-primary mt-3" :v-model="varbuttontext">
        {{ varbuttontext }}
      </button>
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
.card {
  width: max-content;
  height: max-content;
}
</style>
