<template>
  <div class="index">
    <div class="row-12" style="width: 100% !important">
      <div class="col">
        <div class="card">
          <div class="card-header align-items-center d-flex">
            <h6 class="card-title mb-0 flex-grow-1">Select Device</h6>
            <button
              class="btn btn-primary"
              style="color: aliceblue"
              @click="searchCloudVar(formAdd.devid)"
            >
              <i class="bi bi-search"></i>
              Search Cloud Variables
            </button>
          </div>
          <div class="card-body">
            <form>
              <div class="row">
                <div class="col md-6">
                  <div class="form-group">
                    <label for="exampleFormControlInput1">Device Name</label>
                    <select
                      class="form-select"
                      aria-label="Disabled select example"
                      v-model="formAdd.devid"
                    >
                      <option
                        v-for="items in this.devices"
                        :key="items.devid"
                        :value="items.devid"
                      >
                        {{ items.devname }}
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!-- Goods tables -->
    <div class="row-12 mt-3" v-if="formAdd.devid != ''">
      <div class="card" style="width: 100%">
        <div class="card-header align-items-center d-flex">
          <h4 class="card-title mb-0 flex-grow-1">Daftar Cloud Variables</h4>
          <router-link
            class="btn btn-primary justify-content-end"
            :to="`/variables/add/${formAdd.devid}`"
          >
            <i class="bi bi-plus-lg"></i>
            Tambah Cloud Variables
          </router-link>
        </div>
        <!-- GoodTable -->
        <div class="p-3">
          <template v-if="cloudvararr != ''">
            <div class="table-responsive table-card">
              <vue-good-table
                :columns="columns"
                :rows="cloudvararr"
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
                    <router-link
                      :to="`/variables/edit/${formAdd.devid}/${props.row.varid}`"
                    >
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
                      @click="deleteCloudVarByID({ varid: props.row.varid })"
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
  </div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table-next'
import { mapActions, mapState } from 'vuex'
// import VueMultiselect from 'vue-multiselect'
export default {
  components: {
    VueGoodTable,
    // VueMultiselect,
  },
  data() {
    return {
      title: 'Manage Projects',
      data: true,
      newDeviceData: {},
      formAdd: {
        devid: '',
      },

      columns: [
        {
          label: 'Var ID',
          field: 'varid',
        },
        {
          label: 'Var Name',
          field: 'varname',
        },
        {
          label: 'Var Type',
          field: 'vartype',
        },

        {
          label: 'Action',
          field: 'action',
        },
      ],

      //setup data
      newArrCloudVar: {},
      optionsVarDevices: [],
    }
  },
  methods: {
    ...mapActions([
      'fetchDevices',
      'fetchCloudVarArr',
      'fetchCloudVarByIDDev',
      'deleteCloudVarByID',
    ]),
    searchCloudVar(params) {
      console.log(this.params)
      this.fetchCloudVarByIDDev(params)
      this.newArrCloudVar = { ...this.cloudvararr }

      console.log('NEW VAR ARR', this.newArrCloudVar)
    },
    // pushToOptionsArr() {
    //   for (let i = 0; i < this.devices.length; i++) {
    //     this.optionsVarDevices.push({
    //       devid: this.devices[i].devid,
    //       devname: this.devices[i].devname,
    //     })
    //   }
    //   console.log('HOI', this.optionsVarDevices)
    // },
  },
  computed: {
    ...mapState(['devices', 'cloudvararr']),
  },
  async created() {
    await this.fetchDevices()

    this.newDeviceData = { ...this.devices }
    console.log('DEVICE DATA', this.newDeviceData)
  },
}
</script>

<style>
.card {
  width: 100%;
}
</style>
