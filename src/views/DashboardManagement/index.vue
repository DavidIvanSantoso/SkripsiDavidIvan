<template>
  <div class="index">
    <!-- Goods tables -->
    <div class="card" style="width: 100%">
      <div class="card-header align-items-center d-flex">
        <h4 class="card-title mb-0 flex-grow-1">Daftar Dashboard</h4>
        <!-- <router-link

          :to="`/dashboard/${this.dashboardIDNew}`"
        > -->
        <button
          class="btn btn-primary justify-content-end"
          data-bs-toggle="modal"
          data-bs-target="#alertModalAddDashboard"
        >
          <i class="bi bi-plus-lg"></i>
          Tambah Dashboard
        </button>
        <!-- </router-link> -->
      </div>
      <!-- GoodTable -->
      <div class="p-3">
        <template v-if="dashboards">
          <div class="table-responsive table-card">
            <vue-good-table
              :columns="columns"
              :rows="dashboards"
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
                  <router-link :to="`/dashboard/${props.row.dashboardid}`">
                    <b-button
                      :to="`/admin/tipe-anggota/${props.row.id}`"
                      type="button"
                      class="btn btn-success btn-sm btn-label waves-effect waves-light rounded-pill"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </b-button>
                  </router-link>
                  <b-button
                    type="button"
                    class="btn btn-danger btn-sm btn-label waves-effect waves-light rounded-pill mx-1"
                  >
                    <i class="bi bi-trash-fill"></i>
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

  <!-- modal -->
  <div
    id="alertModalAddDashboard"
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
            <h4 class="mb-3 text-success text-center">Add Dashboard</h4>
            <!-- form input -->
            <form>
              <!-- Dashboard ID -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Dashboard ID</label>
                <input
                  v-model="form.dashboardid"
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Dashboard Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Dashboard Title</label>
                <input
                  v-model="form.dashboardtitle"
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Dashboard Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label"
                  >Dashboard Description</label
                >
                <input
                  v-model="form.dashboarddesc"
                  type="text"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <!-- Select Project Title -->
              <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Link To Project</label>
                <vue-multiselect
                  v-model="form.projectid"
                  :options="projectNewDataID"
                  :searchable="false"
                  :close-on-select="true"
                  :show-labels="false"
                  placeholder="Pick a value"
                >
                </vue-multiselect>
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
                @click="this.addDashboard(this.form)"
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
import VueMultiselect from 'vue-multiselect'
import { mapState, mapActions } from 'vuex'
export default {
  components: {
    VueGoodTable,
    VueMultiselect,
  },
  computed: {
    ...mapState(['dashboards', 'projects']),
  },
  data() {
    return {
      form: {
        dashboardid: '',
        dashboardtitle: '',
        dashboarddesc: '',
        projectid: '',
      },
      title: 'Manage Projects',
      data: true,
      dashboardIDNew: 0,

      //GET FROM API
      dashboardNewData: {},
      projectNewData: [],
      projectNewDataID: [],

      // dummy: {
      //   rows: [
      //     {
      //       dashboardID: 1,
      //       projectID: 'Project1',
      //       sharedUserID: 10,
      //     },
      //     {
      //       dashboardID: 1,
      //       projectID: 'Project1',
      //       sharedUserID: 10,
      //     },
      //     {
      //       dashboardID: 1,
      //       projectID: 'Project1',
      //       sharedUserID: 10,
      //     },
      //   ],
      // },
      columns: [
        {
          label: 'Dashboard ID',
          field: 'dashboardid',
        },
        {
          label: 'Linked Project',
          field: 'projectid',
        },
        {
          label: 'Dashboard Title',
          field: 'dashboardtitle',
        },
        {
          label: 'Dashboard Description',
          field: 'dashboarddesc',
        },
        {
          label: 'Action',
          field: 'action',
        },
      ],
    }
  },
  methods: {
    ...mapActions([
      'deleteDashboardByID',
      'fetchDashboards',
      'fetchProjects',
      'addDashboard',
    ]),
    nameWithLang({ projectid, projectname }) {
      return `${projectid} — [${projectname}]`
    },
    getProjectOnlyID() {
      console.log('project lenght', this.projects.length)
      for (let i = 0; i < this.projects.length; i++) {
        // console.log(this.projects[i].projectid)
        this.projectNewDataID.push(this.projects[i].projectid)
      }
    },
  },
  async created() {
    await this.fetchProjects()
    await this.fetchDashboards()
    this.dashboardNewData = { ...this.dashboards }
    this.projectNewData = { ...this.projects }
    await this.getProjectOnlyID()
    console.log('TEST', this.projectNewDataID)
    console.log('GET', this.dashboards)
  },
}
</script>

<style></style>
