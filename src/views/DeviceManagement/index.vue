<template>
  <div class="index">
    <!-- Goods tables -->
    <div class="card" style="width: 100%">
      <div class="card-header align-items-center d-flex">
        <h4 class="card-title mb-0 flex-grow-1">Daftar Device</h4>
        <router-link
          class="btn btn-primary justify-content-end"
          to="/device/add"
        >
          <i class="bi bi-plus-lg"></i>
          Tambah Device
        </router-link>
      </div>
      <!-- GoodTable -->
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
                  <router-link :to="`/device/${props.row.deviceID}`">
                    <b-button
                      type="button"
                      class="btn btn-success btn-sm btn-label waves-effect waves-light rounded-pill"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </b-button>
                  </router-link>

                  <b-button
                    type="button"
                    class="btn btn-danger mx-1 btn-sm btn-label waves-effect waves-light rounded-pill"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </b-button>
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
      dummy: {
        rows: [
          {
            deviceID: 1,
            deviceName: 'Project1',
            deviceModelID: 'Desct1',
            lastAccess: 'yyyy/mm/dd',
          },
          {
            deviceID: 2,
            deviceName: 'Project1',
            deviceModelID: 'Desct1',
            lastAccess: 'yyyy/mm/dd',
          },
          {
            deviceID: 3,
            deviceName: 'Project1',
            deviceModelID: 'Desct1',
            lastAccess: 'yyyy/mm/dd',
          },
        ],
      },
      columns: [
        {
          label: 'Device ID',
          field: 'deviceID',
        },
        {
          label: 'Device Name',
          field: 'deviceName',
        },
        {
          label: 'Device Model',
          field: 'deviceModelID',
        },
        {
          label: 'Last Access',
          field: 'lastAccess',
        },
        {
          label: 'Action',
          field: 'action',
        },
      ],
    }
  },
  created() {},
}
</script>

<style></style>
