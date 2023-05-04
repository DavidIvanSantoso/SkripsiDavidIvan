<template>
  <div class="dashboard">
    <div class="row">
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-success rounded-top align-items-center"
      >
        <div class="align-items-center d-flex" style="width: 100%">
          <div class="dropdown mx-3">
            <button
              class="btn btn-success dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Widget List
            </button>
            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <button
                class="dropdown-item"
                v-for="item in widgetList"
                :key="item.widgetid"
              >
                <i :class="item.icon"></i>
                {{ item.widgetname }}
              </button>
            </div>
          </div>

          <div class="flex-grow-1 bd-highlight">
            <div class="form-group">
              <input
                backround="transparant"
                type="text"
                class="form-control"
                id="inputTransparant"
                aria-describedby="emailHelp"
                placeholder="Dashboard Title"
              />
            </div>
          </div>
          <div class="p-2 bd-highlight">
            <button type="button " class="btn btn-danger mx-2">
              Dowload Data
            </button>
          </div>
          <div class="cp-2 bd-highlight">
            <button type="button" class="btn btn-primary mx-2">
              Save Changes
            </button>
          </div>
        </div>
      </nav>
    </div>
    <div class="row">
      <Value></Value>
    </div>
  </div>
</template>

<script>
import Value from '../WidgetsComponent/Value.vue'
export default {
  components: { Value },
  data() {
    return {
      widgetList: [
        {
          widgetid: 1,
          widgetname: 'Button',
          widgettype: 1,
          icon: 'bi bi-aspect-ratio-fill',
        },
        {
          widgetid: 2,
          widgetname: 'Line Graph',
          widgettype: 2,
          icon: 'bi bi-bar-chart-steps',
        },
        {
          widgetid: 3,
          widgetname: 'Chart',
          widgettype: 3,
          icon: 'bi bi-bar-chart-line-fill',
        },
        { widgetid: 4, widgetname: 'Value', widgettype: 4, icon: 'bi bi-123' },
        {
          widgetid: 5,
          widgetname: 'Text',
          widgettype: 5,
          icon: 'bi bi-pencil-fill',
        },
      ],
    }
  },
}
</script>

<style>
.input.inputTransparant {
  background-color: transparent !important;
  border: none !important;
}
</style>
