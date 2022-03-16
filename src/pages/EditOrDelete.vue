<template class="flex flex-center">

       <div style="width: auto" class="q-pa-sm">

  <div class="flex flex-center">
    <q-markup-table
      class="table m-0 full-width"
      >
      <thead dark class="bg-indigo-8 text-white">
        <tr>
          <th color="primary" class="text-left">Full Name</th>
          <th class="text-left">id</th>
          <th class="text-left">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="{ id, name,
                          } in users" :key="id">
                    <td class="text-left">{{name}}</td>
          <td class="text-left" >{{uid}}</td>
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
</template>

<script>
import { useLoadUsers, deleteUser } from '../boot/firebase'
export default {
  setup() {
    const users = useLoadUsers()
    return { users, deleteUser }
  }
}
</script>
