<template>
  <div class="row" style="width: 100%">
    <!-- multiple tab -->
    <!-- Tabs navs -->
    <div class="card">
      <div class="card-header">
        <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
          <li class="nav-item" role="presentation">
            <a
              class="nav-link active"
              id="ex1-tab-1"
              data-bs-toggle="tab"
              href="#cloudVar"
              role="tab"
              aria-controls="ex1-tabs-1"
              aria-selected="true"
              >Cloud Variables And Device Settings</a
            >
          </li>
          <li class="nav-item" role="presentation">
            <a
              class="nav-link"
              id="ex1-tab-2"
              data-bs-toggle="tab"
              href="#templateCode"
              role="tab"
              aria-controls="ex1-tabs-2"
              aria-selected="false"
              >Template Code</a
            >
          </li>
        </ul>
      </div>
      <div class="card-body">
        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="cloudVar"
            role="tabpanel"
            aria-labelledby="ex1-tab-1"
          >
            <div class="row">
              <!-- card cloud var -->
              <div class="col-8 md-8">
                <div class="card">
                  <div class="card-header align-items-center d-flex">
                    <h6 class="card-title mb-0 flex-grow-1">Cloud Variables</h6>
                    <button
                      class="btn btn-success"
                      style="color: aliceblue"
                      data-bs-toggle="modal"
                      data-bs-target="#alertModal"
                    >
                      <i class="bi bi-plus-lg"></i>
                      Add Cloud Variables
                    </button>
                  </div>
                  <div class="card-body h-100">
                    <div class="p-3">
                      <template v-if="cloudvararr">
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
                              infoFn: (params) =>
                                `Halaman ${params.firstRecordOnPage}`,
                            }"
                          >
                            <template v-slot:table-row="props">
                              <span v-if="props.column.field === 'action'">
                                <b-button
                                @click="this.getDetailCloudVar(props.row.varid)"
                                  data-bs-toggle="modal"
                                  data-bs-target="#alertModalEdit"
                                  type="button"
                                  class="btn btn-primary btn-sm btn-label waves-effect waves-light rounded-pill"
                                >
                                  <i
                                    class="bi bi-pencil-fill"
                                  ></i>
                                  
                                </b-button>
                                <b-button
                                 
                                  type="button"
                                  class="btn btn-danger mx-1 btn-sm btn-label waves-effect waves-light rounded-pill"
                                >
                                  <i
                                    class="bi bi-trash-fill"
                                  ></i>
                                  
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
                    <h6 class="card-title mb-0 flex-grow-1">
                      Device Information
                    </h6>
                    
                  </div>
                  <div class="card-body">
          <form>
            <div class="mb-3">
              <label for="disabledSelect" class="form-label"
                >Choose Your Device</label
              >
              
              <select
                id="disabledSelect"
                class="form-select"
                v-model="form.devid"
              >
                <option
                  v-for="item in newDevicesData"
                  :key="item.devid"
                  :value="item.devid"
                  disabled
                >
                  {{ item.devname }}
                </option>
              </select>
            </div>
            <div class="mb-3">
              <label for="disabledTextInput" class="form-label"
                >Device ID</label
              >
              <input
                disabled
                v-model="form.devid"
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
          </div>
          <div
            class="tab-pane fade"
            id="templateCode"
            role="tabpanel"
            aria-labelledby="ex1-tab-2"
          >
            <div class="row">
              <div class="row">
                <h3>How To Use Our Template Code!</h3>
                <hr class="hr" />
              </div>
              <div class="row">
                <h5>
                  Download
                  <a href="https://www.arduino.cc/en/software">Arduino IDE</a>
                </h5>
              </div>
            </div>
            <div class="row">
              <div class="isiTemplate">
                <div class="card">
                  <div class="card-body">
                    <pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
                  </div>
                </div>
              </div>
            </div>
            Template Code MAZEH
          </div>
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
              <!-- <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Var ID</label>
                <input v-model="form.varid"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div> -->
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label">Variable Name</label>
                <input v-model="this.form.varname"
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
                  v-model="this.form.vartype"
                >
                  <option v-for="item in datatypeOption" :key="item.optionKey" :value="item.optionKey">
                    {{ item.name }}
                  </option>
                  
                </select>
              </div>
              

              <!-- formula input -->
              <div class="mb-2 mx-2" v-if="this.form.vartype === 'f'">
                <label for="varFormula" class="form-label">Enter Formula</label>
                <input type="text" class="form-control" v-model="form.varformula">
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
                <div class="form-check form-check-inline" v-for="items in roleAccess" :key="items">
                  <input
                  v-model="form.varaccess"
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    :value="items.type"
                  />
                  <label class="form-check-label mx-2" for="inlineRadio1"
                    >{{ items.name }}</label
                  >
                </div>
              </div>

              <!-- var timestamp -->
              <div class="mb-2 mx-2 mt-3">
                <div class="row">
                  <label for="varTimeStamp" class="form-label"
                    >Variable Time Update</label
                  >
                </div>
                <div class="form-check form-check-inline" v-for="items in PeriodTime" :key="items.optionKey">
                  <input
                    :value="items.optionKey"
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions2"
                    id="inlineRadio3"
                    v-model="form.schedid"
                    
                  />
                <label class="form-check-label mx-2" for="inlineRadio3"
                  >{{items.name}}</label
                >
              </div>
                {{ form.schedid }}
                <!-- period time ms -->
                <!-- <div class="mt-2">
                  <label for="varID" class="form-label">Time Update (ms)</label>
                  <input 
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div> -->
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
                @click="addCloudVar(this.form)"
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
              Add Cloud Variables Information
            </h4>
            <!-- form input -->
            <form>
              <!-- <div class="mt-2 mx-2">
                <label for="varID" class="form-label">Var ID</label>
                <input v-model="form.varid"
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div> -->
              <div class="mb-2 mx-2">
                <label for="varName" class="form-label">Variable Name</label>
                <input v-model="this.formEdit.varname"
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
                  v-model="this.formEdit.vartype"
                >
                  <option v-for="item in datatypeOption" :key="item.optionKey" :value="item.optionKey">
                    {{ item.name }}
                  </option>
                  
                </select>
              </div>
              

              <!-- formula input -->
              <div class="mb-2 mx-2" v-if="this.formEdit.vartype === 'f'">
                <label for="varFormula" class="form-label">Enter Formula</label>
                <input type="text" class="form-control" v-model="formEdit.varformula">
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
                <div class="form-check form-check-inline" v-for="items in roleAccess" :key="items">
                  <input
                  v-model="formEdit.varaccess"
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    :value="items.type"
                  />
                  <label class="form-check-label mx-2" for="inlineRadio1"
                    >{{ items.name }}</label
                  >
                </div>
              </div>

              <!-- var timestamp -->
              <div class="mb-2 mx-2 mt-3">
                <div class="row">
                  <label for="varTimeStamp" class="form-label"
                    >Variable Time Update</label
                  >
                </div>
                <div class="form-check form-check-inline" v-for="items in PeriodTime" :key="items.optionKey">
                  <input
                    :value="items.optionKey"
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions2"
                    id="inlineRadio3"
                    v-model="formEdit.schedid"
                    
                  />
                <label class="form-check-label mx-2" for="inlineRadio3"
                  >{{items.name}}</label
                >
              </div>
                
                <!-- period time ms -->
                <!-- <div class="mt-2">
                  <label for="varID" class="form-label">Time Update (ms)</label>
                  <input 
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div> -->
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
                @click="this.updateCloudVarByID(this.formEdit)"
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
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    VueGoodTable,
  },
  methods:{
    ...mapActions(['fetchCloudVarArr','fetchDevices','addCloudVar','fetchCloudVarByIDDev','fetchCloudVarByID','updateCloudVarByID']),
   async getDetailCloudVar(params){
     this.formEdit.varid=params
      var newParams={
        'varid':params,
        'devid':this.$route.params.id
      };
      console.log("PARAMS",newParams)
     await this.fetchCloudVarByID(newParams)
      console.log(this.cloudvar)
      this.formEdit={...this.cloudvar[0]}
      console.log("FROM FILL",this.formEdit)
    }
  },
  computed:{
    ...mapState(['cloudvararr','devices','cloudvar'])
  },
  data() {
    return {
      title: 'Manage Projects',
      data: true,
      choosenDevice:"",
      datatypeOption:[{
        name:"Integer",
        optionKey:"i"
      },
    {
      name:"String",
      optionKey:'s',
    },
  {
    name:"Float/Double",
    optionKey:'d'
  },
{
  name:"Formula",
  optionKey:'f',
      }],
      PeriodTime:[{
        name:"Periodically",
        optionKey:"p"
      }
    ,{
      name:"On Change",
      optionKey:"o"
    }],

      newDevicesData:{},
      /////kirm data
      form:{
        varaccess:null,
        devid:this.$route.params.id,
        varformula:null,
        varname:null,
        schedid:null,
        vartype:null,
      },
      formEdit:{
        varid:'',
        varaccess:null,
        varformula:null,
        varname:null,
        schedid:null,
        vartype:null,
      },
      getRouteParams:{
        devid:this.$route.params.id
      },
      roleAccess:[{
        name:"Read Only",
        type:"r"
      },
    {
      name:"Write & Read",
      type:"a"
    }],
      deviceoption: [
        { devicetype: 'ESP8266', devicename: 'device1', id: '1' },
        { devicetype: 'ESP32', devicename: 'device2', id: '2' },
      ],
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
   async created(){
    await this.fetchCloudVarByIDDev(this.form.devid);
    await this.fetchDevices();
    this.newDevicesData={...this.devices}
    this.newCloudArr={...this.cloudvararr}
    console.log("New Cloud ARR", this.newCloudArr)
    console.log("DEVICES",this.newDevicesData)

  }
}
</script>

<style></style>
