<template>
  <button class="btn btn-primary mt-3 mx-3" :v-model="varbuttontext">
    {{ varbuttontext }}
  </button>
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
