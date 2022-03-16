<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
            <q-tabs align="left">
        <q-route-tab
        flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"  />
        <q-route-tab to="/" icon="home"  />
        <q-route-tab to="/" icon="notifications"  />
        <q-route-tab to="/login" label="Login/Register" />
      </q-tabs>

      <q-img src="~assets/MainTheme.jpg"
      class="header-image absolute-top"/>
    </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="200"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid rgb(99, 102, 143)">
          <q-list padding>
            <q-item
            clickable
            v-ripple
            to ="/listofusers">
              <q-item-section avatar>
                <q-icon name="face" />
              </q-item-section>

              <q-item-section>
                Employees
              </q-item-section>
            </q-item>


            <q-item
            active
            clickable
            v-ripple
            to="/tasks">
              <q-item-section avatar>
                <q-icon name="task" />
              </q-item-section>

              <q-item-section>
                Tasks
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send Mail
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inventory" />
              </q-item-section>

              <q-item-section>
                Products
              </q-item-section>

            </q-item>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="date_range" />
              </q-item-section>

              <q-item-section>
                Events
              </q-item-section>

            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Yousif Odah</div>
            <div>@YousifOdah</div>
          </div>
        </q-img>
      </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  computed: {
    title () {
      const currentPath = this.$route.fullPath
      if (currentPath === '/') return '3Beez'
      else if (currentPath === '/users') return 'Users'
      else if (currentPath === '/login') return 'Login or Register'
      else return null
    }
  },
  methods: {

  },

  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }

    }
  }
}
)
</script>
<style lang="scss">
.header-image{
  height: 100%;
  z-index:-1;
  opacity: 0.2;
  filter:grayscale(50%)
}

</style>
