<template class="flex flex-center">
<div class="q-pa-md">
    <q-table
      title="Users"
      :rows="users"
      :columns="columns"
      row-key="id"
      :visible-columns="visibleColumns"

    >

      <template v-slot:top="props">
        <div class="col-2 q-table__title">Users</div>

        <q-space />

       <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />


        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
          class="q-ml-md"
        />

      </template>

    </q-table>
        <q-space/>
        <q-btn
        style="margin: 25px 25px 25px 25px"
        to="/editOrDelete"
        outline
        rounded
        color="primary"
        label="Edit or Delete Employees" />

  </div>
</template>

<script>
//onst axios = require('axios');
import axios, * as others from 'axios';
import { useLoadUsers, deleteUser ,usersCollection} from '../boot/firebase'
import { ref } from 'vue'
export default {

  data() {
    const usersOther = useLoadUsers()
    const users=[
        {
        }
      ]
  const columns = [
    {
      name: 'uid',
      required: true,
      label: 'Id',
      align: 'left',
      field: users => users.uid,
      format: val => `${val}`,
      sortable: true
    },
    { name: 'name', label: 'Name', field: 'name' },
    { name: 'email', align: 'center', label: 'Email', field: 'email', sortable: true },
    { name: 'email2', align: 'center', label: 'Email 2', field: 'email2', sortable: true },
    { name: 'PhoneNumber1', align: 'center', label: 'Phone Number', field: 'PhoneNumber1', sortable: true },
    { name: 'PhoneNumber2', align: 'center', label: 'Phone Number 2', field: 'PhoneNumber2', sortable: true },
    { name: 'DLExpiry', align: 'center', label: 'Driver License Expiry', field: 'DLExpiry', sortable: true },
    { name: 'CivilID', align: 'center', label: 'Civil Id', field: 'CivilID', sortable: true },
    { name: 'CivilIdExpiry', align: 'center', label: 'Civil Id Expiry', field: 'CivilIdExpiry', sortable: true },
    { name: 'Employment', align: 'center', label: 'Employment', field: 'Employment', sortable: true },
    { name: 'DateOfHire', align: 'center', label: 'Date Of Hire', field: 'DateOfHire', sortable: true },
    { name: 'MartialStatus', align: 'center', label: 'Martial Status', field: 'MartialStatus', sortable: true },
    { name: 'bDate', align: 'center', label: 'Date Of Birth', field: 'bDate', sortable: true },
    { name: 'Nationality', align: 'center', label: 'Nationality', field: 'Nationality', sortable: true },
    { name: 'Gender', label: 'Gender', field: 'Gender', sortable: true },
    { name: 'Address1', label: 'Address 1', field: 'Address1', sortable: true },
    { name: 'Address2', label: 'Address 2', field: 'Address2', sortable: true },
    { name: 'BankName', label: 'Bank Name', field: 'BankName', sortable: true },
    { name: 'Salary', label: 'Salary', field: 'Salary', sortable: true },
    { name: 'Iban', label: 'IBAN', field: 'Iban', sortable: true },
    { name: 'BankAccountNumber', label: 'BankAccountNumber', field: 'BankAccountNumber', sortable: true },
    { name: 'Passport', label: 'Passport Number', field: 'Passport', sortable: true },
    { name: 'PassportExpiry', label: 'Passpor tExpiry', field: 'PassportExpiry', sortable: true },
  ]
    return {deleteUser,
      visibleColumns: ref([ 'name', 'PhoneNumber1','email','Nationality','bDate',

                      'CivilIdExpiry','DLExpiry','passport expiry']),
      users,
      columns
    }
  },
  methods:{
    getUsers(){

      axios.get('https://the3beez.herokuapp.com/users')
      .then((response) => {
              //response.set('Access-Control-Allow-Origin','*')

        //console.log(response.data)
        this.users = response.data
        console.log(response.data)

      })
      .catch(() => {
        console.log("not Loaded")
      })
      //console.log(this.users)

      },

  },
  filters:{

  },
  created(){
    this.getUsers()

  }
}
</script>
