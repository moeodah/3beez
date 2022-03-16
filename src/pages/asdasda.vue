<template class="flex flex-center">
<div
  style="padding: 25px 25px 25px 25px"
>
<div class="q-gutter-sm">
    <q-btn @click="data.a = !data.a" color="secondary" label="Email" />
    <q-btn @click="b= !b" color="secondary" label="Email 2" />
    <q-btn @click="c= !c" color="secondary" label="Phone Number" />
    <q-btn @click="d= !d" color="secondary" label="Phone Number 2" />
    <q-btn @click="e = !e" color="secondary" label="Civil Id" />
    <q-btn @click="f =!f" color="secondary" label="Civil Id Expiry" />
    <q-btn @click="data.g = !data.g" color="secondary" label="Nationality" />
    <q-btn @click="h=!h" color="secondary" label="Passport" />
    <q-btn @click="i=!i" color="secondary" label="Passport Expiry" />
    <q-btn @click="j=!j" color="secondary" label="Employment" />
    <q-btn @click="k=!k" color="secondary" label="Date Of Hire" />
    <q-btn @click="l=!l" color="secondary" label="Bank Account Number" />
    <q-btn @click="m=!m" color="secondary" label="Iban" />
    <q-btn @click="n=!n" color="secondary" label="Bank Name" />
    <q-btn @click="o=!o" color="secondary" label="Salary" />
    <q-btn @click="p=!p" color="secondary" label="Education" />
    <q-btn @click="q=!q" color="secondary" label="Martial Status" />
    <q-btn @click="r=!r" color="secondary" label="Driver License Expiry" />
    <q-btn @click="s=!s" color="secondary" label="Address 1" />
    <q-btn @click="t=!t" color="secondary" label="Address 2" />
    <q-btn @click="u=!u" color="secondary" label="Gender" />
    <q-btn @click="v=!v" color="secondary" label="DOB" />

    </div>
</div>

 <q-scroll-area style="height: 1000px; max-width: full-width;">
       <div style="width: auto" class="q-pa-sm">

  <div class="flex flex-center">
    <q-markup-table
      class="table m-0 full-width"
      >
      <thead dark class="bg-indigo-8 text-white">
        <tr>
          <th color="primary" class="text-left">Full Name</th>
          <th class="text-left" v-show="data.a">Email</th>
          <th class="text-left" v-show="data.b" >Email 2</th>
          <th class="text-left" v-show="data.c">Phone Number</th>
          <th class="text-left" v-show="data.d">Phone Number 2</th>
          <th class="text-left" v-show="data.e">Civil Id</th>
          <th class="text-left" v-show="data.f">Civil Id Expiry</th>
          <th class="text-left" v-show="data.g">Nationality</th>
          <th class="text-left" v-show="data.h">Passport</th>
          <th class="text-left" v-show="data.i">Passport Expiry</th>
          <th class="text-left" v-show="data.j">Employment</th>
          <th class="text-left" v-show="data.k">Date Of Hire</th>
          <th class="text-left" v-show="data.l">Bank Account Number</th>
          <th class="text-left" v-show="data.m">IBAN</th>
          <th class="text-left" v-show="data.n">Bank Name</th>
          <th class="text-left" v-show="data.o">Salary</th>
          <th class="text-left" v-show="data.p">Martial Status</th>
          <th class="text-left" v-show="data.q">Education</th>
          <th class="text-left" v-show="data.r">Driver License Expiry</th>
          <th class="text-left" v-show="data.s">Address 1</th>
          <th class="text-left" v-show="data.t">Address 2</th>
          <th class="text-left" v-show="data.u">Gender</th>
          <th class="text-left" v-show="data.v">DOB</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name,
                         email,
                         Gender,
                        bDate,
                        MartialStatus,
                        Nationality,
                        Education,
                        email2,
                        PhoneNumber1,
                        PhoneNumber2,
                        Address1,
                        Address2,
                        CivilId,
                        CivilIdExpiry,
                        DLExpiry,
                        Passport,
                        PassportExpiry,
                        Employment,
                        DateOfHire,
                        BankAccountNumber,
                        Iban,
                        bankName,
                        Salary
                          } in users" :key="id">
                    <td class="text-left">{{name}}</td>
          <td class="text-left" v-show="data.a">{{email}}</td>
          <td class="text-left" v-show="data.b">{{email2}}</td>
          <td class="text-left" v-show="data.c">{{PhoneNumber1}}</td>
          <td class="text-left" v-show="data.d">{{PhoneNumber2}}</td>
          <td class="text-left" v-show="data.e">{{CivilId}}</td>
          <td class="text-left" v-show="data.f">{{CivilIdExpiry}}</td>
          <td class="text-left" v-show="data.g">{{Nationality}}</td>
          <td class="text-left" v-show="data.h">{{Passport}}</td>
          <td class="text-left" v-show="data.i">{{PassportExpiry}}</td>
          <td class="text-left" v-show="data.j">{{Employment}}</td>
          <td class="text-left" v-show="data.k">{{DateOfHire}}</td>
          <td class="text-left" v-show="data.l">{{BankAccountNumber}}</td>
          <td class="text-left" v-show="data.m">{{Iban}}</td>
          <td class="text-left" v-show="data.n">{{bankName}}</td>
          <td class="text-left" v-show="data.o">{{Salary}}</td>
          <td class="text-left" v-show="data.p">{{Education}}</td>
          <td class="text-left" v-show="data.q">{{MartialStatus}}</td>
          <td class="text-left" v-show="data.r">{{DLExpiry}}</td>
          <td class="text-left" v-show="data.s">{{Address1}}</td>
          <td class="text-left" v-show="data.t">{{Address2}}</td>
          <td class="text-left" v-show="data.u">{{Gender}}</td>
          <td class="text-left" v-show="data.v">{{bDate}}</td>

          <td>
            <router-link :to="`/edit/${id}`">
              <q-btn round color="primary" icon="edit" />

            </router-link>
            <q-btn round color="red" icon="delete" @click="deleteUser(id)"/>

          </td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
      </div>

  </q-scroll-area>
</template>

<script>
import Vue from 'vue'
import { useLoadUsers, deleteUser } from '../boot/firebase'
export default {
  setup() {
    const users = useLoadUsers()
    console.log(this.users)
    return { users, deleteUser,

    data: {
		a: true,
    b: true,
    c: false,
    d: true,
    e: false,
    f: true,
    g: false,
    h: false,
    i: false,
    j: false,
    k: false,
    l: false,
    m: false,
    n: false,
    o: false,
    p: false,
    q: false,
    r: false,
    s: true,
    t: false,
    u: false,
    v: false,
  }}
  }
}
</script>
