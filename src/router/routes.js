
import Edit from '../pages/Edit.vue'

const routes = [
  {
    path: '/',
      component: () => import('layouts/MainLayout.vue'),
    children: [

      { path: '', component: () => import('pages/Index.vue') },
      { path: '/users', component: () => import('pages/Users.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/loginonly', component: () => import('pages/LoginOnly.vue') },
      { path: '/listofUsers', component: () => import('pages/ListOfUsers.vue') },
      { path: '/editordelete', component: () => import('pages/EditOrDelete.vue') },
      {
        path: '/edit/:id',
        name: 'Edit',
        component: Edit
      },
      { path: '/userinformation', component: () => import('pages/UserInformation.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
