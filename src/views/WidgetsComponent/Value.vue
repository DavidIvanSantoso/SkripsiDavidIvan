<template>
  <div class="card mt-3">
    <div class="card-header align-items-center d-flex">
      <div class="card-text flex-grow-1">Title</div>
      <button class="btn btn-dark d-flex mx-1">
        <i class="bi bi-trash-fill"></i>
      </button>
      <button class="btn btn-dark d-flex p">
        <i class="bi bi-three-dots-vertical"></i>
      </button>
    </div>
    <div class="card-body">
      <h1 class="card-text">1000</h1>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
}
</script>

<style>
.card {
  width: 16rem;
  height: 10rem;
}
</style>
