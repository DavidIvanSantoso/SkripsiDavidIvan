<template>
  <div class="row">
    <!-- card cloud var -->
    <div class="col md-8">
      <div class="card">
        <div class="card-header align-items-center d-flex">
          <h6 class="card-title mb-0 flex-grow-1">Cloud Variables</h6>
          <button
            class="btn btn-success"
            style="color: aliceblue"
            data-bs-toggle="modal"
            data-bs-target="#alertModal"
          >
            Add Cloud Variables
          </button>
        </div>
        <div class="card-body h-100">
          <div class="p-3">
            <template v-if="dummy?.rows">
              <div class="table-responsive table-card">
                <vue-good-table
                  :columns="columns"
                  :rows="dummy.rows"
                  :search-options="{
                    enabled: true,
                    trigger: 'enter',
                    skipDiacritics: true,
                    placeholder: 'Cari berdasarkan nama..',
                  }"
                  :pagination-options="{
                    enabled: true,
                    perPage: 10,
                    position: 'bottom',
                    perPageDropdown: [10, 20, 100],
                    dropdownAllowAll: false,
                    setCurrentPage: 1,
                    jumpFirstOrLast: true,
                    nextLabel: 'next',
                    prevLabel: 'prev',
                    rowsPerPageLabel: 'Data tampil',
                    ofLabel: 'of',
                    pageLabel: 'page',
                    allLabel: 'All',
                    infoFn: (params) => `Halaman ${params.firstRecordOnPage}`,
                  }"
                >
                  <template v-slot:table-row="props">
                    <span v-if="props.column.field === 'action'">
                      <b-button
                        data-bs-toggle="modal"
                        data-bs-target="#alertModalEdit"
                        type="button"
                        class="btn btn-primary btn-sm btn-label waves-effect waves-light rounded-pill"
                      >
                        <i
                          class="ri-arrow-right-circle-fill label-icon align-middle rounded-pill fs-16 me-2"
                        ></i>
                        Detail
                      </b-button>
                      <!-- <router-link class="btn btn-sm btn-success"
                                        :to="`/admin/tipe-anggota/${props.row.id}`">
                                        Detail
                                    </router-link> -->
                    </span>

                    <span v-else>
                      {{ props.formattedRow[props.column.field] }}
                    </span>
                  </template>
                </vue-good-table>
              </div>
            </template>
            <template v-else>
              <div class="h-50 d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="col md-4">
      <div class="card">
        <div class="card-header align-items-center d-flex">
          <h6 class="card-title mb-0 flex-grow-1">Device Information</h6>
          <button class="btn btn-success" style="color: aliceblue">
            Confirm Device Information
          </button>
        </div>
        <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="disabledSelect" class="form-label"
                >Choose Your Device</label
              >
              <select id="disabledSelect" class="form-select">
                <option
                  v-for="item in deviceoption"
                  :key="item.id"
                  :value="item.devicename"
                >
                  {{ item.devicename }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label"
                >Device Type</label
              >
              <input
                disabled
                v-model="deviceoption[0].devicetype"
                type="text"
                id="disabledTextInput"
                class="form-control"
                placeholder="Disabled input"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- Add new Variables Modal -->
  <div
    id="alertModal"
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
              Add Cloud Variables Information
            </h4>
            <!-- form input -->
            <form>
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Var ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label">Variable Name</label>
                <input
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
                  v-model="formula"
                >
                  <option v-for="item in datatypeOption" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>

              <!-- formula input -->
              <div class="mb-2 mx-2" v-if="this.formula === 'formula'">
                <label for="varFormula" class="form-label">Enter Formula</label>
                <input type="text" class="form-control" />
                <div id="passwordHelpBlock" class="form-text text-success">
                  *Basic formula can provide calculation from platform with
                  basic math operation such as +,-,/,x.*
                </div>
              </div>

              <!-- var role -->
              <div class="varRole mb-2 mx-2">
                <div class="row">
                  <label for="varRole" class="form-label"
                    >Variable Role Access</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="w"
                  />
                  <label class="form-check-label mx-2" for="inlineRadio1"
                    >Write</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="r"
                  />
                  <label class="form-check-label mx-2" for="inlineRadio2"
                    >Read</label
                  >
                </div>
              </div>

              <!-- var timestamp -->
              <div class="mb-2 mx-2">
                <div class="row">
                  <label for="varTimeStamp" class="form-label"
                    >Variable Time Update</label
                  >
                </div>

                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio3"
                  value="r"
                />
                <label class="form-check-label mx-2" for="inlineRadio3"
                  >Periodically</label
                >
                <input
                  class="form-check-input mx-2"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio3"
                  value="r"
                />
                <label class="form-check-label" for="inlineRadio3"
                  >On Update</label
                >
                <div class="mt-2">
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

  <!-- Edit Variables modal -->
  <div
    id="alertModalEdit"
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
              Edit Cloud Variables Information
            </h4>
            <!-- form input -->
            <form>
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Var ID</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label">Variable Name</label>
                <input
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
                  v-model="formula"
                >
                  <option v-for="item in datatypeOption" :key="item">
                    {{ item }}
                  </option>
                </select>
              </div>

              <!-- formula input -->
              <div class="mb-2 mx-2" v-if="this.formula === 'formula'">
                <label for="varFormula" class="form-label">Enter Formula</label>
                <input type="text" class="form-control" />
                <div id="passwordHelpBlock" class="form-text text-success">
                  *Basic formula can provide calculation from platform with
                  basic math operation such as +,-,/,x.*
                </div>
              </div>

              <!-- var role -->
              <div class="varRole mb-2 mx-2">
                <div class="row">
                  <label for="varRole" class="form-label"
                    >Variable Role Access</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="w"
                  />
                  <label class="form-check-label mx-2" for="inlineRadio1"
                    >Write</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="r"
                  />
                  <label class="form-check-label mx-2" for="inlineRadio2"
                    >Read</label
                  >
                </div>
              </div>

              <!-- var timestamp -->
              <div class="mb-2 mx-2">
                <div class="row">
                  <label for="varTimeStamp" class="form-label"
                    >Variable Time Update</label
                  >
                </div>

                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio3"
                  value="r"
                />
                <label class="form-check-label mx-2" for="inlineRadio3"
                  >Periodically</label
                >
                <input
                  class="form-check-input mx-2"
                  type="radio"
                  name="inlineRadioOptions2"
                  id="inlineRadio3"
                  value="r"
                />
                <label class="form-check-label" for="inlineRadio3"
                  >On Update</label
                >
                <div class="mt-2">
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
import { VueGoodTable } from 'vue-good-table-next'
export default {
  components: {
    VueGoodTable,
  },
  data() {
    return {
      title: 'Manage Projects',
      data: true,
      deviceoption: [
        { devicetype: 'ESP8266', devicename: 'device1', id: '1' },
        { devicetype: 'ESP32', devicename: 'device2', id: '2' },
      ],
      dummy: {
        rows: [
          {
            varid: 1,
            varname: 'Device 1',

            lastaccess: 'yyyy/mm/dd',
          },
          {
            varid: 2,
            varname: 'Project1',

            lastaccess: 'yyyy/mm/dd',
          },
          {
            varid: 3,
            varname: 'Project1',

            lastaccess: 'yyyy/mm/dd',
          },
          {
            varid: 3,
            varname: 'Project1',

            lastaccess: 'yyyy/mm/dd',
          },
          {
            varid: 3,
            varname: 'Project1',

            lastaccess: 'yyyy/mm/dd',
          },
          {
            varid: 3,
            varname: 'Project1',

            lastaccess: 'yyyy/mm/dd',
          },
          {
            varid: 3,
            varname: 'Project1',

            lastaccess: 'yyyy/mm/dd',
          },
        ],
      },
      columns: [
        {
          label: 'Variables ID',
          field: 'varid',
        },
        {
          label: 'Variable Name',
          field: 'varname',
        },
        {
          label: 'Last Access',
          field: 'lastaccess',
        },

        {
          label: 'Action',
          field: 'action',
        },
      ],
    }
  },
}
</script>

<style></style>
