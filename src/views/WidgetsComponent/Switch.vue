<template>
  <div class="form-check form-switch mt-3">
    <input
      class="form-check-input"
      type="checkbox"
      role="switch"
      id="flexSwitchCheckDefault"
    />
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
