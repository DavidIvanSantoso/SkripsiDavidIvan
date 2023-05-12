<template>
  <div class="addDevice">
    <div class="card">
      <div class="card-header">Add New Device</div>
      <div class="card-body">
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
                    @click="testConfirm(this.dataBaru)"
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
                            v-model="dataBaru.ssid"
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
                            v-model="dataBaru.wifipass"
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
                            v-model="dataBaru.devname"
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
                            v-model="dataBaru.secretkey"
                            disabled
                            type="text"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="xxxxxxxxx"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Choose Device Type -->
        <div class="card my-3">
          <div class="card-header align-items-center d-flex">
            <h6 class="card-title mb-0 flex-grow-1">
              Choose Your Microcontroller Type
            </h6>
            <!-- <button
              class="btn btn-success"
              style="color: aliceblue"
              @click="changeTypeConfirm"
            >
              Confirm
            </button> -->
          </div>
          <div class="card-body">
            <div class="card-group">
              <div class="card align-items-center">
                <img
                  src="@/assets/images/microcontroller/ESP32.png"
                  class="card-img-top"
                  style="width: 26rem"
                />
                <div class="card-body">
                  <h5 class="card-title">Choose Your Device ESP32 Type!</h5>
                  <select
                    v-model="type32"
                    class="form-select my-3"
                    aria-label="Default select example"
                  >
                    <option
                      v-for="item in esp32type"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
              <div class="card align-items-center">
                <img
                  src="@/assets/images/microcontroller/ESP8266.png"
                  class="card-img-top"
                  style="width: 26rem"
                />
                <div class="card-body">
                  <h5 class="card-title">Choose Your Device ESP8266 Type!</h5>
                  <select
                    v-model="type"
                    class="form-select my-3"
                    aria-label="Default select example"
                  >
                    <option
                      v-for="item in esp8266type"
                      :key="item.id"
                      :value="item.id"
                    >
                      {{ item.name }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions(['fetchDeviceByID', 'addDevice']),
    testConfirm(params) {
      console.log('DATA SEND', params)
    },
    changeTypeConfirm() {
      this.devicetype.typeconfirm = true
    },
  },
  computed: {
    ...mapState(['device']),
  },
  data() {
    return {
      dataBaru: {
        ssid: '',
        wifipass: '',
        devname: '',
        secretkey: '',
        devtype: '',
        devmodel: '',
      },

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
}
</script>

<style>
.card {
  width: 100%;
}
</style>
