<template>
  <div class="dashboard">
    <!-- Link Variables -->

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

    <!-- grid -->
    <grid-layout v-model:layout="layout" :col-num="12" :row-height="30">
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
          v-for="item in layout"
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
                <div
                  class="card-text flex-grow-1 mx-2"
                  :v-model="item.widgetTitleName"
                >
                  {{ item.widgetTitleName }}
                </div>
                <button
                  class="btn btn-dark d-flex mx-1"
                  @click="removeWidgets(item.i)"
                >
                  <i class="bi bi-trash-fill"></i>
                </button>
                <button
                  class="btn btn-dark d-flex p"
                  data-bs-toggle="modal"
                  :data-bs-target="item.modalTarget"
                >
                  <i class="bi bi-three-dots-vertical"></i>
                </button>
              </div>
              <div class="card-body">
                <section v-if="item.widgettype === 1">
                  <Value></Value>
                </section>
                <section v-else-if="item.widgettype === 2">
                  <Button></Button>
                </section>
                <section v-else-if="item.widgettype === 3">
                  <SwitchVue></SwitchVue>
                </section>
                <section v-else-if="item.widgettype === 4">
                  <LineChart></LineChart>
                </section>
                <section v-else-if="item.widgettype === 5">
                  <PieChart></PieChart>
                </section>
                <section v-else-if="item.widgettype === 6">
                  <VerticalBarChartVue></VerticalBarChartVue>
                </section>
                <section v-else-if="item.widgettype === 7">
                  <LedVue></LedVue>
                </section>
                <section v-else-if="item.widgettype === 8">
                  <StepperVue></StepperVue>
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
                <select class="form-select" aria-label="Default select example">
                  <option
                    v-for="item in varDummy"
                    :key="item.varid"
                    :value="item.varid"
                  >
                    {{ item.varname }}
                  </option>
                </select>
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
                <select class="form-select" aria-label="Default select example">
                  <option
                    v-for="item in varDummy"
                    :key="item.varid"
                    :value="item.varid"
                  >
                    {{ item.varname }}
                  </option>
                </select>
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
                <select class="form-select" aria-label="Default select example">
                  <option
                    v-for="item in varDummy"
                    :key="item.varid"
                    :value="item.varid"
                  >
                    {{ item.varname }}
                  </option>
                </select>
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
                <select class="form-select" aria-label="Default select example">
                  <option
                    v-for="item in varDummy"
                    :key="item.varid"
                    :value="item.varid"
                  >
                    {{ item.varname }}
                  </option>
                </select>
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
                  label="name"
                  track-by="code"
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
                  label="name"
                  track-by="code"
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
                  label="name"
                  track-by="code"
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
                <select class="form-select" aria-label="Default select example">
                  <option
                    v-for="item in varDummy"
                    :key="item.varid"
                    :value="item.varid"
                  >
                    {{ item.varname }}
                  </option>
                </select>
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
import { ColorInputWithoutInstance } from 'tinycolor2'
import { ref } from 'vue'
import VueMultiselect from 'vue-multiselect'

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
  setup() {
    const pureColor = ref < ColorInputWithoutInstance > 'red'
    const gradientColor = ref(
      'linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 100%)',
    )

    return { pureColor, gradientColor }
  },
  data() {
    return {
      //multiselect data
      value: [{ name: 'Javascript', code: 'js' }],
      options: [
        { name: 'Vue.js', code: 'vu' },
        { name: 'Javascript', code: 'js' },
        { name: 'Open Source', code: 'os' },
      ],
      layout: [
        {
          x: 0,
          y: 0,
          w: 3,
          h: 4.5,
          i: '0',
          widgettype: 4,
          widgetTitleName: 'Hoi',
          modalTarget: '#alertModalLineChart',
        },
        // { x: 2, y: 0, w: 2, h: 4.5, i: '1', widgettype: 2 },
        // { x: 4, y: 0, w: 2, h: 4.5, i: '2', widgettype: 3 },
        // { x: 6, y: 0, w: 5.5, h: 11.5, i: '3', widgettype: 4 },
        // { x: 8, y: 0, w: 5.5, h: 11.5, i: '4', widgettype: 5 },
        // { x: 8, y: 2, w: 5, h: 10, i: '5', widgettype: 6 },
        // { x: 0, y: 5, w: 2, h: 4.5, i: '6', widgettype: 7 },
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
          icon: 'bi bi-aspect-ratio-fill',
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
          icon: 'bi bi-bar-chart-line-fill',
        },
        {
          widgetid: 4,
          widgetname: 'Line Chart',
          widgettype: 4,
          icon: 'bi bi-pencil-fill',
        },
        {
          widgetid: 5,
          widgetname: 'Pie Chart',
          widgettype: 5,
          icon: 'bi bi-pencil-fill',
        },
        {
          widgetid: 6,
          widgetname: 'Vertical Bar Chart',
          widgettype: 6,
          icon: 'bi bi-pencil-fill',
        },
        {
          widgetid: 7,
          widgetname: 'LED',
          widgettype: 7,
          icon: 'bi bi-pencil-fill',
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
    }
  },
  methods: {
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    addWidgets(val) {
      let newW = 0
      let newH = 0
      let modalTarget = ''

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
          break
        case 2:
          modalTarget = '#alertModalButton'
          break
        case 3:
          modalTarget = '#alertModalSwitch'
          break
        case 4:
          modalTarget = '#alertModalLineChart'
          break
        case 5:
          modalTarget = '#alertModalPieChart'
          break
        case 6:
          modalTarget = '#alertModalVerticalBarChart'
          break
        case 7:
          modalTarget = '#alertModalLED'
          break
        case 8:
          modalTarget = '#alertModalStepper'
          break
      }

      this.layout.push({
        x: (this.layout.length * 2) % (this.colNum || 12),
        y: this.layout.length + (this.colNum || 12),

        w: newW,
        h: newH,
        i: this.index,
        widgettype: val,
        widgetTitleName: 'Empty Title',
        modalTarget: modalTarget,
      })
      console.log('Test')
      this.index++
    },
    removeWidgets(val) {
      const index = this.layout.map((item) => item.i).indexOf(val)
      this.layout.splice(index, 1)
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
  },
  mounted() {
    this.index = this.layout.length
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
