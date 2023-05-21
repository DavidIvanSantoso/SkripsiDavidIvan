<template>
  <div class="row-12">
    <div class="col-12" style="width: 100% !important">
      <section class="Value">
        <section v-if="this.$route.params.widgettypeid == 'Value'">
          <div class="row-12" style="width: 100% !important">
            <div class="col-12">
              <div class="card" style="width: 100% !important">
                <div class="card-header align-items-center d-flex">
                  <h6 class="card-title mb-0 flex-grow-1">
                    Widgets Value Settings
                  </h6>
                  <button class="btn btn-primary" style="color: aliceblue">
                    Confirm
                  </button>
                </div>
                <div class="card-body">
                  <div class="row" style="width: 100% !important">
                    <!-- example widget -->
                    <div
                      class="col-3 align-self-center"
                      style="height: 100% !important"
                    >
                      <h1>0</h1>
                    </div>
                    <div class="col-1">
                      <div class="vr vr-blurry" style="height: 100%"></div>
                    </div>
                    <!-- form widget -->
                    <div class="col-8">
                      <form class="align-items-center">
                        <div class="form-group mt-3">
                          <label for="exampleInputEmail1">Widget Title</label>
                          <input
                            v-model="value.widgetid"
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Title"
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="exampleInputPassword1"
                            >Link To Variables</label
                          >
                          <multiselect
                            v-model="value.varid"
                            :options="this.cloudvararr"
                            :custom-label="nameWithLang"
                            placeholder="Select one"
                            label="varname"
                            track-by="varname"
                          ></multiselect>
                        </div>
                      </form>
                      {{ value.varid }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="Button">
        <section v-if="this.$route.params.widgettypeid == 'Button'">
          <div class="row-12">
            <div class="col md-12">
              <div class="card">
                <div class="card-header align-items-center d-flex">
                  <h6 class="card-title mb-0 flex-grow-1">
                    Widgets Button Settings
                  </h6>
                  <button class="btn btn-primary" style="color: aliceblue">
                    Confirm
                  </button>
                </div>
                <div class="card-body">
                  <div class="row">
                    <!-- example widget -->
                    <div
                      class="col-5 align-self-center"
                      style="height: 100% !important"
                    >
                      <button class="btn btn-success btn-lg" style="width: 50%">
                        {{ button.textbutton }}
                      </button>
                    </div>
                    <div class="col-1">
                      <div class="vr vr-blurry" style="height: 250px"></div>
                    </div>
                    <!-- form widget -->
                    <div class="col-6">
                      <form class="align-items-center">
                        <div class="form-group mt-3">
                          <label for="exampleInputEmail1">Widget Title</label>
                          <input
                            v-model="button.widgettitle"
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Title"
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="exampleInputEmail1"> Button Text</label>
                          <input
                            v-model="button.textbutton"
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Button Text"
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="exampleInputPassword1"
                            >Link To Variables</label
                          >
                          <multiselect
                            v-model="button.varid"
                            :options="this.cloudvararr"
                            :custom-label="nameWithLang"
                            placeholder="Select one"
                            label="varname"
                            track-by="varname"
                          ></multiselect>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="Switch">
        <section v-if="this.$route.params.widgettypeid == 'Switch'">
          <div class="row-12">
            <div class="col">
              <div class="card">
                <div class="card-header align-items-center d-flex">
                  <h6 class="card-title mb-0 flex-grow-1">
                    Widgets Switch Settings
                  </h6>
                  <button class="btn btn-primary" style="color: aliceblue">
                    Confirm
                  </button>
                </div>
                <div class="card-body">
                  <div class="row">
                    <!-- example widget -->
                    <div
                      class="col-5 align-self-center"
                      style="height: 100% !important; align-content: center"
                    >
                      <div class="form-check form-switch">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          role="switch"
                          id="flexSwitchCheckChecked"
                          checked
                          style="
                            height: 2rem !important;
                            width: 4rem !important;
                          "
                        />
                      </div>
                    </div>
                    <div class="col-1">
                      <div class="vr vr-blurry" style="height: 250px"></div>
                    </div>
                    <!-- form widget -->
                    <div class="col-6">
                      <form class="align-items-center">
                        <div class="form-group mt-3">
                          <label for="exampleInputEmail1">Widget Title</label>
                          <input
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Tenter Title"
                          />
                        </div>

                        <div class="form-group mt-3">
                          <label for="exampleInputPassword1"
                            >Link To Variables</label
                          >
                          <multiselect
                            v-model="this.switch.varid"
                            :options="this.cloudvararr"
                            :custom-label="nameWithLang"
                            placeholder="Select one"
                            label="varname"
                            track-by="varname"
                          ></multiselect>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="LineChart">
        <section v-if="this.$route.params.widgettypeid == 'LineChart'">
          <div class="row-12">
            <div class="col">
              <div class="card">
                <div class="card-header align-items-center d-flex">
                  <h6 class="card-title mb-0 flex-grow-1">
                    Widgets Line Chart Settings
                  </h6>
                  <button class="btn btn-primary" style="color: aliceblue">
                    Confirm
                  </button>
                </div>
                <div class="card-body">
                  <div class="row">
                    <!-- example widget -->
                    <div
                      class="col-5 align-self-center"
                      style="height: 100% !important; align-content: center"
                    >
                      <apexchart
                        width="100%"
                        type="line"
                        :options="linechart.options"
                        :series="linechart.series"
                      ></apexchart>
                    </div>
                    <div class="col-1">
                      <div class="vr vr-blurry" style="height: 250px"></div>
                    </div>
                    <!-- form widget -->
                    <div class="col-6">
                      <form class="align-items-center">
                        <div class="form-group mt-3">
                          <label for="exampleInputEmail1">Widget Title</label>
                          <input
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Title"
                          />
                        </div>

                        <div class="form-group mt-3">
                          <label for="exampleInputPassword1"
                            >Link To Variables</label
                          >
                          <multiselect
                            v-model="linechart.varid"
                            placeholder="Search or add a tag"
                            label="varname"
                            track-by="varid"
                            :options="this.cloudvararr"
                            :multiple="true"
                            :taggable="true"
                          ></multiselect>
                        </div>

                        <div class="form-group mt-3">
                          <label for="exampleInputPassword1"
                            >X Axis Count</label
                          >
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="BarChart">
        <section v-if="this.$route.params.widgettypeid == 'BarChart'">
          <div class="row-12">
            <div class="col">
              <div class="card" style="width: 100% !important">
                <div class="card-header align-items-center d-flex">
                  <h6 class="card-title mb-0 flex-grow-1">
                    Widgets Vertical Bar Chart Settings
                  </h6>
                  <button class="btn btn-primary" style="color: aliceblue">
                    Confirm
                  </button>
                </div>
                <div class="card-body">
                  <div class="row">
                    <!-- example widget -->
                    <div
                      class="col-5 align-self-center"
                      style="height: 100% !important; align-content: center"
                    >
                      <apexchart
                        width="100%"
                        type="bar"
                        :options="barchart.options"
                        :series="barchart.series"
                      ></apexchart>
                    </div>
                    <div class="col-1">
                      <div class="vr vr-blurry" style="height: 250px"></div>
                    </div>
                    <!-- form widget -->
                    <div class="col-6">
                      <form class="align-items-center">
                        <div class="form-group mt-3">
                          <label for="exampleInputEmail1">Widget Title</label>
                          <input
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Title"
                          />
                        </div>

                        <div class="form-group mt-3">
                          <label for="exampleInputPassword1"
                            >Link To Variables</label
                          >
                          <multiselect
                            v-model="barchart.varid"
                            placeholder="Search or add a tag"
                            label="varname"
                            track-by="varid"
                            :options="this.cloudvararr"
                            :multiple="true"
                            :taggable="true"
                          ></multiselect>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="PieChart">
        <section v-if="this.$route.params.widgettypeid == 'PieChart'">
          <div class="row-12">
            <div class="col">
              <div class="card">
                <div class="card-header align-items-center d-flex">
                  <h6 class="card-title mb-0 flex-grow-1">
                    Widgets Pie Chart Settings
                  </h6>
                  <button class="btn btn-primary" style="color: aliceblue">
                    Confirm
                  </button>
                </div>
                <div class="card-body">
                  <div class="row">
                    <!-- example widget -->
                    <div
                      class="col-5 align-self-center"
                      style="height: 100% !important; align-content: center"
                    >
                      <apexchart
                        width="100%"
                        type="donut"
                        :options="piechart.options"
                        :series="piechart.series"
                      ></apexchart>
                    </div>
                    <div class="col-1">
                      <div class="vr vr-blurry" style="height: 250px"></div>
                    </div>
                    <!-- form widget -->
                    <div class="col-6">
                      <form class="align-items-center">
                        <div class="form-group mt-3">
                          <label for="exampleInputEmail1">Widget Title</label>
                          <input
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Title"
                          />
                        </div>

                        <div class="form-group mt-3">
                          <label for="exampleInputPassword1"
                            >Link To Variables</label
                          >
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="LED">
        <section v-if="this.$route.params.widgettypeid == 'LED'">
          <div class="row-12" style="width: 100% !important">
            <div class="col-12">
              <div class="card">
                <div class="card-header align-items-center d-flex">
                  <h6 class="card-title mb-0 flex-grow-1">
                    Widgets LED Settings
                  </h6>
                  <button class="btn btn-primary" style="color: aliceblue">
                    Confirm
                  </button>
                </div>
                <div class="card-body">
                  <div class="row" style="width: 100% !important">
                    <!-- example widget -->
                    <div
                      class="col-3 align-self-center"
                      style="height: 100% !important"
                    >
                      <button
                        class="buttonCircle"
                        :style="{ 'background-color': led.color }"
                        style="border-radius: 50%"
                      ></button>
                    </div>
                    <div class="col-1">
                      <div class="vr vr-blurry" style="height: 100%"></div>
                    </div>
                    <!-- form widget -->
                    <div class="col-8">
                      <form class="align-items-center">
                        <div class="form-group mt-3">
                          <label for="exampleInputEmail1">Widget Title</label>
                          <input
                            v-model="led.widgettitle"
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Title"
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="exampleInputEmail1">LED Color</label>
                          <input
                            v-model="led.color"
                            type="color"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder=""
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="exampleInputPassword1"
                            >Link To Variables</label
                          >
                          <multiselect
                            v-model="value.varid"
                            :options="this.cloudvararr"
                            :custom-label="nameWithLang"
                            placeholder="Select one"
                            label="varname"
                            track-by="varname"
                          ></multiselect>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      <section class="Stepper">
        <section v-if="this.$route.params.widgettypeid == 'Stepper'">
          <div class="row-12" style="width: 100% !important">
            <div class="col-12">
              <div class="card">
                <div class="card-header align-items-center d-flex">
                  <h6 class="card-title mb-0 flex-grow-1">
                    Widgets Stepper Settings
                  </h6>
                  <button class="btn btn-primary" style="color: aliceblue">
                    Confirm
                  </button>
                </div>
                <div class="card-body">
                  <div class="row" style="width: 100% !important">
                    <!-- example widget -->
                    <div
                      class="col-3 align-self-center"
                      style="height: 100% !important"
                    >
                      <div class="row">
                        <div class="col">
                          <button class="btn btn-danger" @click="decrement">
                            -
                          </button>
                        </div>
                        <div class="col">
                          <p>Value</p>
                        </div>
                        <div class="col">
                          <button class="btn btn-success" @click="increment">
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col-1">
                      <div class="vr vr-blurry" style="height: 100%"></div>
                    </div>
                    <!-- form widget -->
                    <div class="col-8">
                      <form class="align-items-center">
                        <div class="form-group mt-3">
                          <label for="exampleInputEmail1">Widget Title</label>
                          <input
                            v-model="stepper.widgettitle"
                            type="email"
                            class="form-control"
                            aria-describedby="emailHelp"
                            placeholder="Enter Title"
                          />
                        </div>
                        <div class="form-group mt-3">
                          <label for="exampleInputPassword1"
                            >Link To Variables</label
                          >
                          <multiselect
                            v-model="value.varid"
                            :options="this.cloudvararr"
                            :custom-label="nameWithLang"
                            placeholder="Select one"
                            label="varname"
                            track-by="varname"
                          ></multiselect>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    Multiselect,
  },
  computed: { ...mapState(['cloudvararr']) },
  methods: {
    ...mapActions(['fetchCloudVarArr']),
    nameWithLang({ varname, varid }) {
      return `${varname} — [${varid}]`
    },
    addTag(newTag) {
      const tag = {
        name: newTag,
        code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
      }
      this.options.push(tag)
      this.value.push(tag)
    },
    pushOptions() {
      for (let i = 0; i < this.cloudvararr.length; i++) {
        this.optionsVarid.push(this.cloudvararr[i].varid)
        this.optionsVarname.push(this.cloudvararr[i].varname)
      }
    },
  },
  data() {
    return {
      value: {
        widgettitle: '',
        varid: '',
      },
      button: {
        widgettitle: '',
        varid: '',
        textbutton: 'TEST',
      },
      switch: {
        widgettitle: '',
        varid: '',
      },
      linechart: {
        varid: [],

        options: {
          stroke: {
            curve: 'straight',
          },
          markers: {
            size: 1,
          },

          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [
          {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
      },
      barchart: {
        options: {
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          },
        },
        series: [
          {
            name: 'series-1',
            data: [30, 40, 45, 50, 49, 60, 70, 91],
          },
        ],
      },
      piechart: {
        options: {},
        series: [44, 55, 41, 17, 15],
      },
      led: {
        widgettitle: '',
        color: '',
      },
      stepper: {
        varid: '',
        widgettitle: '',
      },

      optionsVarid: {},
      optionsVarname: [],
    }
  },
  mounted() {},
  async created() {
    await this.fetchCloudVarArr()
    console.log(this.cloudvararr)
    this.optionsVarid = { ...this.cloudvararr }
    //this.pushOptions()
  },
}
</script>

<style scoped>
.card {
  width: 100% !important;
}
.buttonCircle {
  background-color: black;
  border: none;
  color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
}
template {
  width: 100% !important;
}
</style>
