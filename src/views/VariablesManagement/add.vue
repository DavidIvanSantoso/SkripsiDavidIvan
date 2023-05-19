<template>
  <div class="row" style="width: 100% !important">
    <div class="card">
      <div class="card-header align-items-center d-flex">
        <h4 class="card-title mb-0 flex-grow-1">Enter Variables Data</h4>
        <button class="btn btn-primary" @click="addCloudVar(this.form)">
          <i class="bi bi-plus-lg"></i>
          Confirm
        </button>
      </div>
      <div class="mt-4">
        <!-- form input -->
        <form>
          <div class="mb-2 mx-2">
            <label for="varName" class="form-label">Variable Name</label>
            <input
              v-model="this.form.varname"
              type="text"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <!-- vartype -->
          <div class="mb-2 mx-2">
            <label for="varType" class="form-label">Variable Type</label>
            <select
              id="disabledSelect"
              class="form-select"
              v-model="this.form.vartype"
            >
              <option
                v-for="item in datatypeOption"
                :key="item.optionKey"
                :value="item.optionKey"
              >
                {{ item.name }}
              </option>
            </select>
          </div>

          <!-- formula input -->
          <div class="mb-2 mx-2" v-if="this.form.vartype === 'f'">
            <label for="varFormula" class="form-label">Enter Formula</label>
            <input type="text" class="form-control" v-model="form.varformula" />
            <div id="passwordHelpBlock" class="form-text text-success">
              *Basic formula can provide calculation from platform with basic
              math operation such as +,-,/,x.*
            </div>
          </div>

          <!-- var role -->
          <div class="varRole mb-2 mx-2">
            <div class="row">
              <label for="varRole" class="form-label"
                >Variable Role Access</label
              >
            </div>
            <div
              class="form-check form-check-inline"
              v-for="items in roleAccess"
              :key="items"
            >
              <input
                v-model="form.varaccess"
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio1"
                :value="items.type"
                style="width: 1rem !important; height: 1rem !important"
              />
              <label class="form-check-label mx-2" for="inlineRadio1">{{
                items.name
              }}</label>
            </div>
          </div>

          <!-- var timestamp -->
          <div class="mb-2 mx-2 mt-3">
            <div class="row">
              <label for="varTimeStamp" class="form-label"
                >Variable Time Update</label
              >
            </div>
            <div
              class="form-check form-check-inline"
              v-for="items in PeriodTime"
              :key="items.optionKey"
            >
              <input
                :value="items.optionKey"
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions2"
                id="inlineRadio3"
                v-model="form.schedid"
                style="width: 1rem !important; height: 1rem !important"
              />
              <label class="form-check-label mx-2" for="inlineRadio3">{{
                items.name
              }}</label>
            </div>

            <!-- period time ms -->
            <div class="mt-2" v-if="form.schedid == 'p'">
              <label for="varID" class="form-label">Time Update (ms)</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  components: {},
  computed: { ...mapState(['devices', 'cloudvararr']) },
  methods: {
    ...mapActions(['fetchDevices', 'fetchCloudVarArr', 'addCloudVar']),
  },
  data() {
    return {
      title: 'Manage Projects',
      data: true,
      formula: '',
      choosenDevice: '',
      dataTimeUpdateOption: [
        { value: 'o', label: 'On Change' },
        { value: 'p', label: 'Periodically' },
      ],

      deviceoption: [
        { devicetype: 'ESP8266', devicename: 'device1', id: '1' },
        { devicetype: 'ESP32', devicename: 'device2', id: '2' },
      ],
      newCloudVarTable: [],
      form: {
        varname: '',
        devid: this.$route.params.id,
        vartype: '',
        varaccess: '',
        schedid: '',
        varformula: '',
      },
      //setup radio
      roleAccess: [
        {
          name: 'Read Only',
          type: 'r',
        },
        {
          name: 'Write & Read',
          type: 'a',
        },
      ],
      PeriodTime: [
        {
          name: 'Periodically',
          optionKey: 'p',
        },
        {
          name: 'On Change',
          optionKey: 'o',
        },
      ],
      datatypeOption: [
        {
          name: 'Integer',
          optionKey: 'i',
        },
        {
          name: 'String',
          optionKey: 's',
        },
        {
          name: 'Float/Double',
          optionKey: 'd',
        },
        {
          name: 'Formula',
          optionKey: 'f',
        },
      ],
      // //GET DATA API
      // newDataDevice: [],
      // newCloudVar: [],
    }
  },
  async created() {
    // await this.fetchDevices()
    // await this.fetchCloudVarArr()
    // this.newDataDevice = { ...this.devices }
    // this.newCloudVar = { ...this.cloudvararr }
    // console.log('DEVICE OIPTION', this.newDataDevice)
    // console.log('CLOUD VAR', this.newCloudVar)
  },
}
</script>

<style>
.card {
  width: 100%;
}
</style>
