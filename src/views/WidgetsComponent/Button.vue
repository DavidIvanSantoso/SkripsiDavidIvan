<template>
  <button class="btn btn-primary mt-3 mx-3">
    {{ varbuttontext }}
  </button>
</template>

<script>
export default {
  // props: ['varbuttontext', 'varid'],
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
