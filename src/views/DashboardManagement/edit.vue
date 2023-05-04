<template>
  <div class="dashboard">
    <div class="row">
      <nav
        class="navbar navbar-expand-lg navbar-dark bg-success rounded-top align-items-center d-flex"
      >
        <div class="row align-items-center d-flex" style="width: 100%">
          <div class="col col-md-3 justify-content-between">
            <div class="dropdown">
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
                  {{ item.widgetname }}
                </button>
              </div>
            </div>
          </div>
          <div class="col col-md-5">
            <div class="form-group">
              <input
                back
                type="text"
                class="form-control foo"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Dashboard Title"
              />
            </div>
          </div>
          <div class="col col-md-2">
            <button type="button " class="btn btn-danger mx-2">
              Dowload Data
            </button>
          </div>
          <div class="col col-md-2">
            <button type="button" class="btn btn-primary mx-2">
              Save Changes
            </button>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      widgetList: [
        { widgetid: 1, widgetname: 'Button', widgettype: 1, icon: 'icon' },
        { widgetid: 2, widgetname: 'Line Graph', widgettype: 2, icon: 'icon' },
        { widgetid: 3, widgetname: 'Chart', widgettype: 3, icon: 'icon' },
        { widgetid: 4, widgetname: 'Value', widgettype: 4, icon: 'icon' },
        { widgetid: 5, widgetname: 'Text', widgettype: 5, icon: 'icon' },
      ],
    }
  },
}
</script>

<style></style>
