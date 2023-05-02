<template>
  <div class="row">
    <!-- card cloud var -->
    <div class="col md-8">
      <div class="card">
        <div class="card-header align-items-center d-flex">
          <h6 class="card-title mb-0 flex-grow-1">Cloud Variables</h6>
          <button class="btn btn-success" style="color: aliceblue">
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
                        :to="`/admin/tipe-anggota/${props.row.id}`"
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
