<template>
  <div class="index">
    <!-- Goods tables -->
    <div class="card" style="width: 100%">
      <div class="card-header align-items-center d-flex">
        <h4 class="card-title mb-0 flex-grow-1">Daftar Shared User Access</h4>
        <router-link
          class="btn btn-primary justify-content-end"
          to="/shareuser/add"
        >
          <i class="ri-add-fill label-icon align-middle fs-16 me-2"></i>
          Add Share User Access
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
                  <router-link :to="`/project/${props.row.projectId}`">
                    <b-button
                      type="button"
                      class="btn btn-primary btn-sm btn-label waves-effect waves-light rounded-pill"
                    >
                      <i
                        class="ri-arrow-right-circle-fill label-icon align-middle rounded-pill fs-16 me-2"
                      ></i>
                      Detail
                    </b-button>
                  </router-link>
                  <!-- <router-link class="btn btn-sm btn-success"
                                        :to="`/admin/tipe-anggota/${props.row.id}`">
                                        Detail
                                    </router-link> -->
                </span>
                <!-- <span v-if="props.column.field === 'cactive'">
                  <button
                    v-if="props.formattedRow[props.column.field] === 'y'"
                    class="btn-icon btn-sm btn btn-success waves-effect waves-light rounded-pill"
                  >
                    <i
                      class="ri-checkbox-circle-fill label-icon align-middle rounded-pill fs-16"
                    ></i>
                  </button>
                  <button
                    v-else
                    class="btn-icon btn-sm btn btn-danger waves-effect waves-light rounded-pill"
                  >
                    <i
                      class="ri-close-circle-fill label-icon align-middle rounded-pill fs-16"
                    ></i>
                  </button>
                
                </span> -->
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
            dashboardid: 1,
            dashboardtitle: 'Project1',
            sharedaccountcnt: 'Desct1',
            lastAccess: 'yyyy/mm/dd',
          },
          {
            dashboardid: 2,
            dashboardtitle: 'Project1',
            sharedaccountcnt: 'Desct1',
            lastAccess: 'yyyy/mm/dd',
          },
          {
            dashboardid: 3,
            dashboardtitle: 'Project1',
            sharedaccountcnt: 'Desct1',
            lastAccess: 'yyyy/mm/dd',
          },
        ],
      },
      columns: [
        {
          label: 'Dashboard ID',
          field: 'dashboardid',
        },
        {
          label: 'Dashboard Title',
          field: 'dashboardtitle',
        },
        {
          label: 'Shared Account Count',
          field: 'sharedaccountcnt',
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
