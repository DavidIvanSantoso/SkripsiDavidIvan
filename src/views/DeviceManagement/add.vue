<template>
  <div class="addDevice">
    <!-- Form Input Data -->
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h4 class="card-title mb-0 flex-grow-1">Add Device Data</h4>
            <button class="btn btn-success" style="color: aliceblue">
              Confirm
            </button>
          </div>
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col md-6">
                  <div class="form-group">
                    <label for="exampleFormControlInput1">WiFi SSID</label>
                    <input
                      type="text"
                      class="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Please enter your WiFi SSID"
                    />
                  </div>
                </div>
                <div class="col md-6">
                  <div class="form-group">
                    <label for="exampleFormControlInput1">WiFi Password</label>
                    <input
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
                    <label for="exampleFormControlInput1">Device Name</label>
                    <input
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
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- Choose Device Type -->
    <div class="row my-4">
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
              class="form-select my-3"
              aria-label="Default select example"
            >
              <option v-for="item in esp32type" :key="item.id" :value="item.id">
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
</template>

<script>
export default {
  data() {
    return {
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

<style></style>
