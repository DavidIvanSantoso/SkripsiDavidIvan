<template>
  <div class="addDevice">
    <!-- Form Input Data -->
    <section>
      <div class="row" style="width: 100% !important">
        <div class="col">
          <div class="card">
            <div class="card-header align-items-center d-flex">
              <h6 class="card-title mb-0 flex-grow-1">
                Complete Device Information
              </h6>
              <button
                class="btn btn-primary"
                style="color: aliceblue"
                @click="updateDeviceByID(this.newData)"
              >
                Confirm
              </button>
            </div>
            <div class="card-body">
              <form>
                <div class="row mt-1">
                  <div class="col md-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">Device Name</label>
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
                        >Device Password</label
                      >
                      <input
                        v-model="newData.secretkey"
                        disabled
                        type="text"
                        class="form-control"
                        id="exampleFormControlInput1"
                        placeholder="xxxxxxxxx"
                      />
                    </div>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col md-6">
                    <div class="form-group">
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
                          style="
                            width: 1rem !important;
                            height: 1rem !important;
                          "
                        />
                        <label class="form-check-label" for="flexRadioDefault1">
                          {{ items }}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col md-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1"
                        >Device Model Name</label
                      >

                      <VueMultiselect
                        class="mt-2"
                        v-model="newData.devmodel"
                        :options="
                          newData.devtype === 'ESP32' ? esp32type : esp8266type
                        "
                        label="name"
                        track-by="name"
                        :searchable="false"
                        :close-on-select="true"
                        placeholder="Pick a value"
                      >
                      </VueMultiselect>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-3" style="width: 100% !important">
        <div class="col">
          <div class="card">
            <div class="card-header align-items-center d-flex">
              <h6 class="card-title mb-0 flex-grow-1">
                Internet Configuration
              </h6>
            </div>
            <div class="card-body">
              <form>
                <div class="row my-1">
                  <div class="col md-6">
                    <div class="form-group">
                      <label for="exampleFormControlInput1">WiFi SSID</label>
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
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import VueMultiselect from 'vue-multiselect'
export default {
  components: { VueMultiselect },
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
