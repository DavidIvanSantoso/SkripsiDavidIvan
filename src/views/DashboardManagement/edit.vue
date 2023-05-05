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
  data() {
    return {
      layout: [
        // { x: 0, y: 0, w: 2, h: 4.5, i: '0', widgettype: 1 },
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
    }
  },
  methods: {
    addWidgets(val) {
      let newW = 0
      let newH = 0
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
      if (val === 1 || val === 2 || val === 3 || val === 7 || val === 8) {
        newW = 2.5
        newH = 4.5
      } else if (val === 4 || val === 5 || val === 6) {
        newW = 5.5
        newH = 11.5
      }

      this.layout.push({
        x: (this.layout.length * 2) % (this.colNum || 12),
        y: this.layout.length + (this.colNum || 12),

        w: newW,
        h: newH,
        i: this.index,
        widgettype: val,
      })
      this.index++
    },
    removeWidgets(val) {
      const index = this.layout.map((item) => item.i).indexOf(val)
      this.layout.splice(index, 1)
    },
  },
  mounted() {
    this.index = this.layout.length
  },
}
</script>

<style>
/* .layoutJSON {
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
} */
</style>
