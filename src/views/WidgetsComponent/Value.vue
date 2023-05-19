<template>
  <div class="card-text mt-2" id="varData">
    {{ vardata }}
  </div>
</template>

<script>
export default {
  props: ['vardata'],
  components: {},
  data() {
    return {
      // vardata: 0,
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
</style>
