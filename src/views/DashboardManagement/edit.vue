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
      :useCssTransforms="true"
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
          :useCssTransforms="true"
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
                <router-link
                  :to="`/widgetsconfig/${item.widgetid}/${item.widgettypeid}`"
                >
                  <button class="btn btn-dark d-flex p">
                    <i class="bi bi-three-dots-vertical"></i>
                  </button>
                </router-link>
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
      this.createDashWidget(newWidget)
      this.layout.push(newWidget)

      console.log('Test')
      this.index++
      this.$router.go(0)
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
  },
}
</script>

<style scoped></style>
