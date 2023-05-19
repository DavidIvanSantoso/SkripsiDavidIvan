<template>
  <div class="dashboard">
    <!-- Link Variables -->

    <div class="row-12">
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
                @click="addWidgets(item.widgettype)"
              >
                <i :class="item.icon"></i>
                {{ item.widgetname }}
              </button>
            </div>
          </div>

          <div class="flex-grow-1 bd-highlight">
            <div class="form-group">
              <input
                v-model="this.getNewDashboardData.dashboardtitle"
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
            <button
              type="button "
              class="btn btn-danger mx-2"
              data-bs-toggle="modal"
              data-bs-target="#alertModalDownload"
            >
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

    <!-- grid -->
    <grid-layout
      v-model:layout="layout"
      :col-num="12"
      :row-height="30"
      style="width: 100% !important"
      responsive="true"
    >
      <template #default="{ gridItemProps }">
        <!-- | gridItemProps props from GridLayout | -->
        <!--breakpointCols: props.cols-->
        <!--colNum: props.colNum-->
        <!--containerWidth: width.value-->
        <!--isDraggable: props.isDraggable-->
        <!--isResizable: props.isResizable-->
        <!--lastBreakpoint: lastBreakpoint.value-->
        <!--margin: props.margin-->
        <!--maxRows: props.maxRows-->
        <!--responsive: props.responsive-->
        <!--rowHeight: props.rowHeight-->
        <!--useCssTransforms: props.useCssTransforms-->
        <!--width: width.value-->
        <grid-item
          v-for="item in this.layout"
          :key="item.i"
          v-bind="gridItemProps"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          @resize="resize"
          @move="move"
          @moved="moved"
        >
          <!-- //1. value
      //2. Button
      //3. Switch
      //4. Line Chart
      //5. Pie Chart
      //6. Vertical Bar Chart
      //7. LED 
       8.Stepper -->
          <!-- ----------------------------------------------------------------- -->
          <div class="row px-3">
            <div class="card mt-3" style="width: 100% !important">
              <div class="card-header align-items-center d-flex">
                <div class="card-text flex-grow-1 mx-2" :v-model="item.title">
                  {{ item.title }}
                </div>
                <button
                  class="btn btn-dark d-flex mx-1"
                  @click="removeWidgets(item.i, item.widgetid)"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
                <button
                  class="btn btn-dark d-flex p"
                  data-bs-toggle="modal"
                  :data-bs-target="item.modaltarget"
                >
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
              </div>
              <div class="card-body">
                <section v-if="item.widgettypeid === 'Value'">
                  <Value :varid="item.varid" :vardata="0"></Value>
                </section>
                <section v-else-if="item.widgettypeid === 'Button'">
                  <Button :varid="item.varid"></Button>
                </section>
                <section v-else-if="item.widgettypeid === 'Switch'">
                  <SwitchVue :varid="item.varid"></SwitchVue>
                </section>
                <section v-else-if="item.widgettypeid === 'LineChart'">
                  <LineChart :varid="item.varid"></LineChart>
                </section>
                <section v-else-if="item.widgettypeid === 'PieChart'">
                  <PieChart :varid="item.varid"></PieChart>
                </section>
                <section v-else-if="item.widgettypeid === 'BarChart'">
                  <VerticalBarChartVue
                    :varid="item.varid"
                  ></VerticalBarChartVue>
                </section>
                <section v-else-if="item.widgettypeid === 'LED'">
                  <LedVue :varid="item.varid"></LedVue>
                </section>
                <section v-else-if="item.widgettypeid === 'Stepper'">
                  <StepperVue :varid="item.varid"></StepperVue>
                </section>
              </div>
            </div>
          </div>
          <!-- ----------------------------------------------------------------- -->
        </grid-item>
      </template>
    </grid-layout>
  </div>

  <!-- modal value -->
  <div
    id="alertModalButton"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="alertModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="mt-4">
            <h4 class="mb-3 text-success text-center">Button Configuration</h4>
            <!-- form input -->
            <form>
              <!-- Widget Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Widget Title</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Link Variables -->
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label"
                  >Link to Variables</label
                >
                <VueMultiselect
                  v-model="value"
                  :options="options"
                  label="varname"
                  track-by="varid"
                  :searchable="false"
                  :close-on-select="true"
                  placeholder="Pick a value"
                >
                </VueMultiselect>
              </div>
              <!-- Button Text -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Button Text</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                  v-model="varDummy[0].btntext"
                />
              </div>
            </form>
            <div class="hstack gap-2 justify-content-center mt-2">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <!-- noted: cara nutup modalnya -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal button -->
  <div
    id="alertModalValue"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="alertModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="mt-4">
            <h4 class="mb-3 text-success text-center">Value Configuration</h4>
            <!-- form input -->
            <form>
              <!-- Widget Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Widget Title</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Link Variables -->
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label"
                  >Link to Variables</label
                >
                <VueMultiselect
                  v-model="value"
                  :options="options"
                  label="varname"
                  track-by="varid"
                  :searchable="false"
                  :close-on-select="true"
                  placeholder="Pick a value"
                >
                </VueMultiselect>
              </div>
            </form>
            <div class="hstack gap-2 justify-content-center mt-2">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <!-- noted: cara nutup modalnya -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal switch -->
  <div
    id="alertModalSwitch"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="alertModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="mt-4">
            <h4 class="mb-3 text-success text-center">Switch Configuration</h4>
            <!-- form input -->
            <form>
              <!-- Widget Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Widget Title</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Link Variables -->
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label"
                  >Link to Variables</label
                >
                <VueMultiselect
                  v-model="value"
                  :options="options"
                  label="varname"
                  track-by="varid"
                  :searchable="false"
                  :close-on-select="true"
                  placeholder="Pick a value"
                >
                </VueMultiselect>
              </div>
            </form>
            <div class="hstack gap-2 justify-content-center mt-2">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <!-- noted: cara nutup modalnya -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal LED -->
  <div
    id="alertModalLED"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="alertModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="mt-4">
            <h4 class="mb-3 text-success text-center">LED Configuration</h4>
            <!-- form input -->
            <form>
              <!-- Widget Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Widget Title</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Link Variables -->
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label"
                  >Link to Variables</label
                >
                <VueMultiselect
                  v-model="value"
                  :options="options"
                  label="varname"
                  track-by="varid"
                  :searchable="false"
                  :close-on-select="true"
                  placeholder="Pick a value"
                >
                </VueMultiselect>
              </div>
              <!-- color picker -->
              <div class="mb-2 mx-2">
                <div class="row">
                  <label for="varName" class="form-label"
                    >Choose LED Color</label
                  >
                  <div class="row">
                    <color-picker
                      v-model:pureColor="pureColor"
                      v-model:gradientColor="gradientColor"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div class="hstack gap-2 justify-content-center mt-2">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <!-- noted: cara nutup modalnya -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- modal Line Chart -->
  <div
    id="alertModalLineChart"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="alertModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="mt-4">
            <h4 class="mb-3 text-success text-center">
              Line Chart Configuration
            </h4>
            <!-- form input -->
            <form>
              <!-- Widget Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Widget Title</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Link Variables -->
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label"
                  >Link to Variables</label
                >
                <VueMultiselect
                  v-model="value"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="varname"
                  track-by="varid"
                  :options="options"
                  :multiple="true"
                  :taggable="true"
                  @tag="addTag"
                ></VueMultiselect>

                <!-- <Multiselect></Multiselect> -->
              </div>
              <!-- color picker -->
              <!-- <div class="mb-2 mx-2">
                <div class="row">
                  <label for="varName" class="form-label"
                    >Choose LED Color</label
                  >
                  <div class="row">
                    <color-picker
                      v-model:pureColor="pureColor"
                      v-model:gradientColor="gradientColor"
                    />
                  </div>
                </div>
              </div> -->

              <!-- Axis Settings -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Axis Settings</label>
                <div class="row">
                  <div class="col">
                    <label for="varID" class="form-label">X Axis</label>
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="col">
                    <label for="varID" class="form-label">Y Axis</label>
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div class="hstack gap-2 justify-content-center mt-2">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <!-- noted: cara nutup modalnya -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal Pie Chart -->
  <div
    id="alertModalPieChart"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="alertModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="mt-4">
            <h4 class="mb-3 text-success text-center">
              Pie Chart Configuration
            </h4>
            <!-- form input -->
            <form>
              <!-- Widget Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Widget Title</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Link Variables -->
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label"
                  >Link to Variables</label
                >
                <VueMultiselect
                  v-model="value"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="varname"
                  track-by="varid"
                  :options="options"
                  :multiple="true"
                  :taggable="true"
                  @tag="addTag"
                ></VueMultiselect>

                <!-- <Multiselect></Multiselect> -->
              </div>
              <!-- color picker -->
              <!-- <div class="mb-2 mx-2">
                <div class="row">
                  <label for="varName" class="form-label"
                    >Choose LED Color</label
                  >
                  <div class="row">
                    <color-picker
                      v-model:pureColor="pureColor"
                      v-model:gradientColor="gradientColor"
                    />
                  </div>
                </div>
              </div> -->
            </form>
            <div class="hstack gap-2 justify-content-center mt-2">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <!-- noted: cara nutup modalnya -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal Vertical Bar Chart -->
  <div
    id="alertModalVerticalBarChart"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="alertModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="mt-4">
            <h4 class="mb-3 text-success text-center">
              Vertical Bar Chart Configuration
            </h4>
            <!-- form input -->
            <form>
              <!-- Widget Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Widget Title</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Link Variables -->
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label"
                  >Link to Variables</label
                >
                <VueMultiselect
                  v-model="value"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="varname"
                  track-by="varid"
                  :options="options"
                  :multiple="true"
                  :taggable="true"
                  @tag="addTag"
                ></VueMultiselect>

                <!-- <Multiselect></Multiselect> -->
              </div>
              <!-- color picker -->
              <!-- <div class="mb-2 mx-2">
                <div class="row">
                  <label for="varName" class="form-label"
                    >Choose LED Color</label
                  >
                  <div class="row">
                    <color-picker
                      v-model:pureColor="pureColor"
                      v-model:gradientColor="gradientColor"
                    />
                  </div>
                </div>
              </div> -->

              <!-- Axis Settings -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Axis Settings</label>
                <div class="row">
                  <div class="col">
                    <label for="varID" class="form-label">X Axis</label>
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div class="col">
                    <label for="varID" class="form-label">Y Axis</label>
                    <input
                      type="text"
                      class="form-control"
                      aria-describedby="emailHelp"
                    />
                  </div>
                </div>
              </div>
            </form>
            <div class="hstack gap-2 justify-content-center mt-2">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <!-- noted: cara nutup modalnya -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal Stepper -->
  <div
    id="alertModalStepper"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="alertModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="mt-4">
            <h4 class="mb-3 text-success text-center">Stepper Configuration</h4>
            <!-- form input -->
            <form>
              <!-- Widget Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Widget Title</label>
                <input
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Link Variables -->
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label"
                  >Link to Variables</label
                >
                <VueMultiselect
                  v-model="value"
                  :options="options"
                  label="varname"
                  track-by="varid"
                  :searchable="false"
                  :close-on-select="true"
                  placeholder="Pick a value"
                >
                </VueMultiselect>
              </div>
            </form>
            <div class="hstack gap-2 justify-content-center mt-2">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <!-- noted: cara nutup modalnya -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- modal Download -->
  <div
    id="alertModalDownload"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="alertModalTitle"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-body">
          <div class="mt-4">
            <h4 class="mb-3 text-success text-center">Download Data</h4>
            <!-- form input -->
            <form>
              <!-- Widget Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label"
                  >Select Cloud Variables To Store in CSV</label
                >
                <VueMultiselect
                  v-model="value"
                  tag-placeholder="Add this as new tag"
                  placeholder="Search or add a tag"
                  label="varname"
                  track-by="varid"
                  :options="options"
                  :multiple="true"
                  :taggable="true"
                  @tag="addTag"
                ></VueMultiselect>
              </div>
            </form>
            <div class="hstack gap-2 justify-content-center mt-2">
              <button
                type="button"
                class="btn btn-light"
                data-bs-dismiss="modal"
              >
                Close
              </button>

              <!-- noted: cara nutup modalnya -->
              <button
                type="button"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Value from '../WidgetsComponent/Value.vue'
import Button from '../WidgetsComponent/Button.vue'
import LineChart from '../WidgetsComponent/LineChart.vue'
import SwitchVue from '../WidgetsComponent/Switch.vue'
import PieChart from '../WidgetsComponent/PieChart.vue'
import VerticalBarChartVue from '../WidgetsComponent/VeritcalBarChart.vue'
import LedVue from '../WidgetsComponent/Led.vue'
import StepperVue from '../WidgetsComponent/Stepper.vue'

import VueMultiselect from 'vue-multiselect'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Value,
    Button,
    SwitchVue,
    LineChart,
    PieChart,
    VerticalBarChartVue,
    LedVue,
    StepperVue,
    VueMultiselect,
  },
  setup() {},
  computed: {
    ...mapState(['widget', 'widgetarr', 'dashboard', 'cloudvararr']),
  },
  data() {
    return {
      //multiselect data
      value: [],
      options: [
        // { name: 'Vue.js', code: 'vu' },
        // { name: 'Javascript', code: 'js' },
        // { name: 'Open Source', code: 'os' },
      ],
      layout: [
        //note size Widgets
        //value,led,button, switch (h:4.5 , w:2)
        //all chart (h:5.5, h:11,5)
      ],
      widgetList: [
        //1. value
        //2. Button
        //3. Switch
        //4. Line Chart
        //5. Pie Chart
        //6. Vertical Bar Chart
        //7. LED
        {
          widgetid: 1,
          widgetname: 'Value',
          widgettype: 1,
          icon: 'bi bi-123',
          modalTarget: '#alertModalValue',
        },
        {
          widgetid: 2,
          widgetname: 'Button',
          widgettype: 2,
          icon: 'bi bi-bar-chart-steps',
        },
        {
          widgetid: 3,
          widgetname: 'Switch',
          widgettype: 3,
          icon: 'bi bi-toggles',
        },
        {
          widgetid: 4,
          widgetname: 'Line Chart',
          widgettype: 4,
          icon: 'bi bi-graph-up',
        },
        {
          widgetid: 5,
          widgetname: 'Pie Chart',
          widgettype: 5,
          icon: 'bi bi-pie-chart',
        },
        {
          widgetid: 6,
          widgetname: 'Vertical Bar Chart',
          widgettype: 6,
          icon: 'bi bi-bar-chart',
        },
        {
          widgetid: 7,
          widgetname: 'LED',
          widgettype: 7,
          icon: 'bi bi-lightbulb',
        },
        {
          widgetid: 8,
          widgetname: 'Stepper',
          widgettype: 8,
          icon: 'bi bi-pencil-fill',
        },
      ],
      varDummy: [
        { varid: 1, varname: 'Test1', btntext: 'AAAA' },
        { varid: 2, varname: 'Test2', btntext: 'ButtonTest1' },
        { varid: 3, varname: 'Test3', btntext: 'ButtonTest1' },
        { varid: 4, varname: 'Test4', btntext: 'ButtonTest1' },
      ],
      getNewDashboardData: {},

      //LINK VARIABLES SETUP
      getNewAllVariables: {},
    }
  },
  methods: {
    ...mapActions([
      'createDashWidget',
      'fetchCloudVarArr',
      'fetchWidgetsByIDDashboard',
      'deleteDashWidgetByID',
      'fetchDashboardByID',
    ]),

    addTag(newTag) {
      const tag = {
        varname: newTag.varname,
        varid: newTag.varid,
      }
      this.options.push(tag)
      this.value.push(tag)
    },

    //WIDGETS CONFIG FUNCTION
    addWidgets(val) {
      let newWidget = {}
      let newW = 0
      let newH = 0
      let modalTarget = ''
      let widgettypeid = ''

      //note size Widgets
      //value,led,button, switch (h:4.5 , w:2)
      //all chart (h:5.5, h:11,5)

      //1. value
      //2. Button
      //3. Switch
      //4. Line Chart
      //5. Pie Chart
      //6. Vertical Bar Chart
      //7. LED

      //size widgets
      if (val === 1 || val === 2 || val === 3 || val === 7 || val === 8) {
        newW = 2.5
        newH = 4.5
      } else if (val === 4 || val === 5 || val === 6) {
        newW = 5.5
        newH = 11.5
      }

      //modalTarget
      switch (val) {
        case 1:
          modalTarget = '#alertModalValue'
          widgettypeid = 'Value'
          break
        case 2:
          modalTarget = '#alertModalButton'
          widgettypeid = 'Button'
          break
        case 3:
          modalTarget = '#alertModalSwitch'
          widgettypeid = 'Switch'
          break
        case 4:
          modalTarget = '#alertModalLineChart'
          widgettypeid = 'LineChart'
          break
        case 5:
          modalTarget = '#alertModalPieChart'
          widgettypeid = 'PieChart'
          break
        case 6:
          modalTarget = '#alertModalVerticalBarChart'
          widgettypeid = 'BarChart'
          break
        case 7:
          modalTarget = '#alertModalLED'
          widgettypeid = 'LED'
          break
        case 8:
          modalTarget = '#alertModalStepper'
          widgettypeid = 'Stepper'
          break
      }
      //setupobject
      ;(newWidget.x = (this.widgetarr.length * 2) % (this.colNum || 12)),
        (newWidget.y = this.widgetarr.length + (this.colNum || 12)),
        (newWidget.w = newW),
        (newWidget.h = newH),
        (newWidget.i = this.index),
        (newWidget.widgettypeid = widgettypeid),
        (newWidget.widgettype = val),
        (newWidget.title = 'Empty Title'),
        (newWidget.modaltarget = modalTarget),
        (newWidget.varid = ''),
        (newWidget.dashboardid = this.$route.params.id)
      this.layout.push(newWidget)

      console.log('Test')
      this.index++
      this.createDashWidget(newWidget)
    },
    removeWidgets(val, valwidgetid) {
      const index = this.layout.map((item) => item.i).indexOf(val)
      this.layout.splice(index, 1)

      this.deleteDashWidgetByID({
        dashboardid: this.$route.params.id,
        widgetid: valwidgetid,
      })
    },
    checkTypeModal(val) {
      switch (val) {
        case 1:
          this.modalTarget = '#alertModalValue'
          break
        case 2:
          this.modalTarget = '#alertModalButton'
          break
        case 3:
          this.modalTarget = '#alertModalSwitch'
          break
        case 4:
          this.modalTarget = '#alertModalLineChart'
          break
        case 5:
          this.modalTarget = '#alertModalPieChart'
          break
        case 6:
          this.modalTarget = '#alertModalVerticalBarChart'
          break
        case 7:
          this.modalTarget = '#alertModalLED'
          break
        case 8:
          this.modalTarget = '#alertModalStepper'
          break
      }
      this.modalTarget = ''
      console.log('TESTING MODAL ID', this.modalTarget)
    },
    pushDataGrid() {
      console.log('WIDGET ARR', this.widgetarr)
      for (let i = 0; i < this.widgetarr.length; i++) {
        this.layout.push(this.widgetarr[i])
      }
    },

    //MULTISELECT OPTIONS
    pushSelectOptions() {
      for (let i = 0; i < this.cloudvararr.length; i++) {
        this.options.push({
          varname: this.cloudvararr[i].varname,
          varid: this.cloudvararr[i].varid,
        })
      }
      console.log(this.options)
    },
  },
  mounted() {},
  async created() {
    await this.fetchWidgetsByIDDashboard({ dashboardid: this.$route.params.id })
    await this.fetchDashboardByID(this.$route.params.id)
    this.getNewDashboardData = { ...this.dashboard[0] }

    await this.fetchCloudVarArr()
    this.getNewAllVariables = { ...this.cloudvararr }
    this.pushSelectOptions()

    await this.pushDataGrid()
    this.index = this.widgetarr.length
    console.log('GRID', this.layout)
    console.log('DATA', this.widgetarr)
    console.log('DASHBOARD DATA', this.dashboard)
    console.log('CLOUD VAR ARR', this.cloudvararr)
  },
}
</script>

<style>
.layoutJSON {
  background: #ddd;
  border: 1px solid black;
  margin-top: 10px;
  padding: 10px;
}
.columns {
  -moz-columns: 120px;
  -webkit-columns: 120px;
  columns: 120px;
}
.vue-grid-layout {
  background: #eee;
}
.vue-grid-item:not(.vue-grid-placeholder) {
  background: #eee;
  border: 1px solid black;
}
.vue-grid-item .resizing {
  opacity: 0.9;
}
.vue-grid-item .static {
  background: #cce;
}
.vue-grid-item .text {
  font-size: 24px;
  text-align: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  height: 100%;
  width: 100%;
}
.vue-grid-item .no-drag {
  height: 100%;
  width: 100%;
}
.vue-grid-item .minMax {
  font-size: 12px;
}
.vue-grid-item .add {
  cursor: pointer;
}
.vue-draggable-handle {
  position: absolute;
  width: 20px;
  height: 20px;
  top: 0;
  left: 0;
  background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='10'><circle cx='5' cy='5' r='5' fill='#999999'/></svg>")
    no-repeat;
  background-position: bottom right;
  padding: 0 8px 8px 0;
  background-repeat: no-repeat;
  background-origin: content-box;
  box-sizing: border-box;
  cursor: pointer;
}
.grid::before {
  content: '';
  background-size: calc(calc(100% - 5px) / 12) 40px;
  background-image: linear-gradient(to right, lightgrey 1px, transparent 1px),
    linear-gradient(to bottom, lightgrey 1px, transparent 1px);
  height: calc(100% - 5px);
  width: calc(100% - 5px);
  position: absolute;
  background-repeat: repeat;
  margin: 5px;
}
</style>
