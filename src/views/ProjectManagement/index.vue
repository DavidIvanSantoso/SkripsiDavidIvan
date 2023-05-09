<template>
  <div class="index">
    <!-- Goods tables -->
    <div class="card" style="width: 100%">
      <div class="card-header align-items-center d-flex">
        <h4 class="card-title mb-0 flex-grow-1">Daftar Project</h4>
        <router-link
          class="btn btn-primary justify-content-end"
          to="/project/add"
        >
          <i class="bi bi-plus-lg"></i>
          Tambah Project
        </router-link>
      </div>
      <!-- GoodTable -->
      <div class="p-3">
        <template v-if="projects">
          <div class="table-responsive table-card">
            <vue-good-table
              :columns="columns"
              :rows="projects"
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
                  <router-link :to="`/project/${props.row.projectid}`">
                    <b-button
                      type="button"
                      class="btn btn-success btn-sm btn-label waves-effect waves-light rounded-pill"
                    >
                      <i class="bi bi-pencil-fill"></i>
                    </b-button>
                  </router-link>
                  <b-button
                    type="button"
                    @click="this.deleteProjectByID(props.row.projectid)"
                    class="btn btn-danger btn-sm btn-label waves-effect waves-light rounded-pill mx-1"
                  >
                    <i class="bi bi-trash-fill"></i>
                  </b-button>
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
  <div v-for="items in mockAPI.data" :key="items">{{ items.userid }}</div>
</template>

<script>
import { VueGoodTable } from 'vue-good-table-next'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    VueGoodTable,
  },
  computed: {
    ...mapState(['projects']),
  },
  mounted() {},
  methods: {
    ...mapActions(['fetchProjects', 'deleteProjectByID']),
  },

  data() {
    return {
      posts: [],
      mockAPI: {
        children: [
          // {
          //   projectid: 'Name',
          //   projectname: 'Name',
          //   projectdesc: 'name',
          // },
        ],
      },
      title: 'Manage Projects',
      data: true,
      dummy: {
        rows: [
          {
            projectId: 1,
            projectName: 'Project1',
            projectDesc: 'Desct1',
            lastAccess: 'yyyy/mm/dd',
          },
          {
            projectId: 2,
            projectName: 'Project1',
            projectDesc: 'Desct1',
            lastAccess: 'yyyy/mm/dd',
          },
          {
            projectId: 3,
            projectName: 'Project1',
            projectDesc: 'Desct1',
            lastAccess: 'yyyy/mm/dd',
          },
        ],
      },
      columns: [
        {
          label: 'Project ID',
          field: 'projectid',
        },
        {
          label: 'Project Name',
          field: 'projectname',
        },
        {
          label: 'Description',
          field: 'projectdesc',
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
  async created() {
    // await this.getAllProjects()
    await this.fetchProjects()
    console.log(this.projects)
    this.mockAPI.children = this.projects
    console.log('FINAL', this.mockAPI.children)
  },
}
</script>

<style></style>
