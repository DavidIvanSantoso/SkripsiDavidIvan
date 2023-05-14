<template>
  <div class="addDevice">
    <div class="card" style="width: 100%">
      <div class="card-header" style="width: 100%">Edit Device Information</div>
      <div class="card-body" style="width: 100%">
        <!-- Form Input Data -->
        <section>
          <div class="row">
            <div class="col">
              <div class="card">
                <div class="card-header align-items-center d-flex">
                  <h6 class="card-title mb-0 flex-grow-1">
                    Complete Device Information
                  </h6>
                  <button
                    class="btn btn-success"
                    style="color: aliceblue"
                    @click="this.updateDeviceByID(this.newData)"
                  >
                    Confirm
                  </button>
                </div>
                <div class="card-body">
                  <form>
                    <div class="row">
                      <div class="col md-6">
                        <div class="form-group">
                          <label for="exampleFormControlInput1"
                            >WiFi SSID</label
                          >
                          <input
                            v-model="newData.ssid"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Please enter your WiFi SSID"
                          />
                        </div>
                      </div>
                      <div class="col md-6">
                        <div class="form-group">
                          <label for="exampleFormControlInput1"
                            >WiFi Password</label
                          >
                          <input
                            v-model="newData.wifipass"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Please enter your Wifi Password!"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row mt-3">
                      <div class="col md-6">
                        <div class="form-group">
                          <label for="exampleFormControlInput1"
                            >Device Name</label
                          >
                          <input
                            v-model="newData.devname"
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Please enter your Device Name"
                          />
                        </div>
                      </div>
                      <div class="col md-6">
                        <div class="form-group">
                          <label for="exampleFormControlInput1"
                            >Generated Secret Key</label
                          >
                          <input
                            disabled
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="xxxxxxxxx"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="form-group mt-3">
                      <label for="exampleFormControlInput1">Device Type</label>
                      <div
                        class="form-check mt-3"
                        v-for="items in devtype"
                        :key="items"
                      >
                        <input
                          v-model="newData.devtype"
                          class="form-check-input"
                          type="radio"
                          name="flexRadioDefault"
                          :id="items"
                          :value="items"
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          {{ items }}
                        </label>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Choose Device Type -->
        <section v-if="newData.devtype !== null">
          <div class="card my-3">
            <div class="card-header align-items-center d-flex">
              <h6 class="card-title mb-0 flex-grow-1">
                Choose Your Microcontroller Type
              </h6>
            </div>
            <div class="card-body">
              <div class="card-group">
                <!-- ESP32 -->
                <section v-if="newData.devtype === 'ESP32'">
                  <div class="card align-items-center" style="width: 100%">
                    <img
                      src="@/assets/images/microcontroller/ESP32.png"
                      class="card-img-top"
                      style="width: 26rem"
                    />
                    <div class="card-body">
                      <h5 class="card-title">Choose Your Device ESP32 Type!</h5>
                      <select
                        v-model="newData.devmodel"
                        class="form-select my-3"
                        aria-label="Default select example"
                      >
                        <option
                          v-for="item in esp32type"
                          :key="item.id"
                          :value="item.name"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </section>
                <!-- ESP8266 -->
                <section v-else-if="newData.devtype === 'ESP8266'">
                  <div class="card align-items-center">
                    <img
                      src="@/assets/images/microcontroller/ESP8266.png"
                      class="card-img-top"
                      style="width: 26rem"
                    />
                    <div class="card-body">
                      <h5 class="card-title">
                        Choose Your Device ESP8266 Type!
                      </h5>
                      <select
                        v-model="newData.devmodel"
                        class="form-select my-3"
                        aria-label="Default select example"
                      >
                        <option
                          v-for="item in esp8266type"
                          :key="item.id"
                          :value="item.name"
                        >
                          {{ item.name }}
                        </option>
                      </select>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['updateDeviceByID', 'fetchDeviceByID']),
    changeTypeConfirm() {
      this.devicetype.typeconfirm = true
    },
  },
  computed: {
    ...mapState(['device']),
  },
  data() {
    return {
      newData: {
        devid: null,
        ssid: '',
        wifipass: '',
        devname: '',
        password: 'EMPTY',
        devtype: null,
        devmodel: null,
      },
      devtype: ['ESP32', 'ESP8266'],
      devicetype: {
        type32: '',
        type8266: '',
        typeconfirm: false,
      },
      esp32type: [
        { name: 'Seed Wio Link', id: 1 },
        { name: 'WifInfo', id: 2 },
        { name: 'WiFiduino', id: 3 },
        { name: 'Amperka WiFi Slot', id: 4 },
        { name: 'SparkFun ESP8266 Thing Dev', id: 5 },
        { name: 'SparkFun ESP8266 Thing', id: 6 },
        { name: 'Phoenix 2.0', id: 7 },
        { name: 'Phoenix 1.0', id: 8 },
        { name: 'NodeMCU 1.0 (ESP-12 E Module)', id: 9 },
        { name: 'NodeMCU 0.9 (ESP-12 Module)', id: 10 },
      ],
      esp8266type: [
        { name: 'Seed Wio Link', id: 1 },
        { name: 'WifInfo', id: 2 },
        { name: 'WiFiduino', id: 3 },
        { name: 'Amperka WiFi Slot', id: 4 },
        { name: 'SparkFun ESP8266 Thing Dev', id: 5 },
        { name: 'SparkFun ESP8266 Thing', id: 6 },
        { name: 'Phoenix 2.0', id: 7 },
        { name: 'Phoenix 1.0', id: 8 },
        { name: 'NodeMCU 1.0 (ESP-12 E Module)', id: 9 },
        { name: 'NodeMCU 0.9 (ESP-12 Module)', id: 10 },
      ],
    }
  },
  async created() {
    await this.fetchDeviceByID(this.$route.params.id)
    this.newData = { ...this.device[0] }
    this.newData.devid = this.$route.params.id
    console.log(this.newData)
  },
}
</script>

<style>
.card {
  width: 100% !important;
}
</style>
