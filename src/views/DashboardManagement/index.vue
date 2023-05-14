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
                  <router-link :to="`/dashboard/${props.row.dashboardID}`">
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
                  :options="projectList"
                  :custom-label="nameWithLang"
                  placeholder="Select one"
                  label="projectname"
                  track-by="projectid"
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
  computed: { ...mapActions(['deleteDashboardByID', 'fetchDashboard']) },
  data() {
    return {
      ...mapState(['dashboard']),
      form: { dashboardtitle: '', dashboarddesc: '', projectid: '' },
      title: 'Manage Projects',
      data: true,
      dashboardIDNew: 0,
      projectList: [
        { projectid: '1', projectname: 'Testing' },
        { projectid: '2', projectname: 'h' },
        { projectid: '3', projectname: 'b' },
      ],
      dummy: {
        rows: [
          {
            dashboardID: 1,
            projectID: 'Project1',
            sharedUserID: 10,
          },
          {
            dashboardID: 1,
            projectID: 'Project1',
            sharedUserID: 10,
          },
          {
            dashboardID: 1,
            projectID: 'Project1',
            sharedUserID: 10,
          },
        ],
      },
      columns: [
        {
          label: 'Dashboard ID',
          field: 'dashboardID',
        },
        {
          label: 'Linked Project',
          field: 'projectID',
        },
        {
          label: 'Shared User',
          field: 'sharedUserID',
        },
        {
          label: 'Action',
          field: 'action',
        },
      ],
    }
  },
  methods: {
    nameWithLang({ projectname, projectid }) {
      return `${projectname} — [${projectid}]`
    },
  },
  created() {
    this.dashboardIDNew = this.dummy.rows.length + 1
  },
}
</script>

<style></style>
