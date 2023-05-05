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
    <div class="card-body">
      <div class="row">
        <div class="col"><div class="buttonCircle"></div></div>
        <div class="col mt-3"><h5>On</h5></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      vardata: 0,
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
#varData {
  font-size: 2rem;
}
.buttonCircle {
  background-color: black;
  border: none;
  color: gray;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  border-radius: 50%;
}
</style>
