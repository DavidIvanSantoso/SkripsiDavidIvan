<template>
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
