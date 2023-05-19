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
import { ref } from 'vue'

export default {
  props: ['quantity'],
  data() {
    return {
      // quantity: 0,
      // varbuttontext: 'Button',
      vartitle: 'Title',
    }
  },
  methods: {
    decrement() {
      const prop = ref(this.quantity)
      prop.value -= 1
    },
    increment() {
      const prop = ref(this.quantity)
      prop.value += 1
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
