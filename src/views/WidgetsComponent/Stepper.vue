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
      <div class="row">
        <div class="col">
          <button class="btn btn-danger" @click="decrement">-</button>
        </div>
        <div class="col">
          <p>{{ quantity }}</p>
        </div>
        <div class="col">
          <button class="btn btn-success" @click="increment">+</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quantity: 0,
      varbuttontext: 'Button',
      vartitle: 'Title',
    }
  },
  methods: {
    decrement() {
      this.quantity -= 1
    },
    increment() {
      this.quantity += 1
    },
  },
}
</script>

<style>
.card {
  width: max-content;
  height: max-content;
}
</style>
