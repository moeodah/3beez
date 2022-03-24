<template>
  <q-page class="flex-center">
        <q-card class="q-pa-md">
        <q-tabs
          v-model="tab"
          dense
          class="text-grey"
          active-color="primary"
          indicator-color="primary"
          align="justify"
          narrow-indicator
        >
          <q-tab name="login" label="Login" />
        </q-tabs>

        <q-separator />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <login :tab="tab"/>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
  </q-page>
</template>

<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      tab: ref('login')
    }
  },
  components: {
    'login': require('components/LoginComp.vue').default
  }
}
</script>
