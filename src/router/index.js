import { h, resolveComponent } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import DefaultLayout from '@/layouts/DefaultLayout'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DefaultLayout,
    redirect: '/pages/login',
    children: [
      // {
      //   path: '/dashboard',
      //   name: 'Dashboard',
      //   component: () =>
      //   import('@/views/Dashboard.vue'),
      // },
      //-------------------------------------------PAGES PLATFORM IOT------------------------------------------------
      //Project
      {
        path: '/project/index',
        name: 'Project',
        component: () => import('@/views/ProjectManagement/index.vue'),
        
      },
      {
        path: '/project/add',
        name: 'ProjectAdd',
        component: () => import('@/views/ProjectManagement/add.vue'),
      },
      {
        path: '/project/:id',
        name: 'ProjectEdit',
        component: () => import('@/views/ProjectManagement/edit.vue'),
      },
      //Device
      {
        path: '/device/index',
        name: 'Device',
        component: () => import('@/views/DeviceManagement/index.vue'),
      },
      
      {
        path: '/device/add',
        name: 'DeviceAdd',
        component: () => import('@/views/DeviceManagement/add.vue'),
      },
      {
        path: '/device/:id',
        name: 'DeviceEdit',
        component: () => import('@/views/DeviceManagement/edit.vue'),
      },
      //Dashboard
      {
        path: '/dashboard/index',
        name: 'DashboardIndex',
        component: () => import('@/views/DashboardManagement/index.vue'),
      },
      {
        path: '/dashboard/add',
        name: 'DashboardAdd',
        component: () => import('@/views/DashboardManagement/add.vue'),
      },
      {
        path: '/dashboard/:id',
        name: 'DashboardEdit',
        component: () => import('@/views/DashboardManagement/edit.vue'),
      },
       //WIDGETS SETTINGS
       {
        path: '/widgetsconfig/:widgetid/:widgettypeid',
        name: 'WidgetsEdit',
        component: () => import('@/views/WidgetsComponent/WidgetsSettings/edit.vue'),
      },
      //IoT Variables
      {
        path: '/variables/index',
        name: 'Variables',
        component: () => import('@/views/VariablesManagement/index.vue'),
      },
      {
        path: '/variables/add/:id',
        name: 'VariablesAdd',
        component: () => import('@/views/VariablesManagement/add.vue'),
      },
      {
        path: '/variables/edit/:devid/:id',
        name: 'VariablesEdit',
        component: () => import('@/views/VariablesManagement/edit.vue'),
      },
      // Share User
      {
        path: '/shareuser/shareaccess',
        name: 'UserEdit',
        component: () => import('@/views/ShareUserManagement/edit.vue'),
      },
      {
        path: '/shareuser/add',
        name: 'UserAdd',
        component: () => import('@/views/ShareUserManagement/add.vue'),
      },
      {
        path: '/shareuser/index',
        name: 'UserIndex',
        component: () => import('@/views/ShareUserManagement/index.vue'),
      },
     
      //--------------------------------------------PAGES PLATFORM IOT END HERE-----------------------------------------------
      {
        path: '/theme',
        name: 'Theme',
        redirect: '/theme/typography',
      },
      
      {
        path: '/theme/colors',
        name: 'Colors',
        component: () => import('@/views/theme/Colors.vue'),
      },
      {
        path: '/theme/typography',
        name: 'Typography',
        component: () => import('@/views/theme/Typography.vue'),
      },
      {
        path: '/base',
        name: 'Base',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/base/breadcrumbs',
        children: [
          {
            path: '/base/accordion',
            name: 'Accordion',
            component: () => import('@/views/base/Accordion.vue'),
          },
          {
            path: '/base/breadcrumbs',
            name: 'Breadcrumbs',
            component: () => import('@/views/base/Breadcrumbs.vue'),
          },
          {
            path: '/base/cards',
            name: 'Cards',
            component: () => import('@/views/base/Cards.vue'),
          },
          {
            path: '/base/carousels',
            name: 'Carousels',
            component: () => import('@/views/base/Carousels.vue'),
          },
          {
            path: '/base/collapses',
            name: 'Collapses',
            component: () => import('@/views/base/Collapses.vue'),
          },
          {
            path: '/base/list-groups',
            name: 'List Groups',
            component: () => import('@/views/base/ListGroups.vue'),
          },
          {
            path: '/base/navs',
            name: 'Navs',
            component: () => import('@/views/base/Navs.vue'),
          },
          {
            path: '/base/paginations',
            name: 'Paginations',
            component: () => import('@/views/base/Paginations.vue'),
          },
          {
            path: '/base/placeholders',
            name: 'Placeholders',
            component: () => import('@/views/base/Placeholders.vue'),
          },
          {
            path: '/base/popovers',
            name: 'Popovers',
            component: () => import('@/views/base/Popovers.vue'),
          },
          {
            path: '/base/progress',
            name: 'Progress',
            component: () => import('@/views/base/Progress.vue'),
          },
          {
            path: '/base/spinners',
            name: 'Spinners',
            component: () => import('@/views/base/Spinners.vue'),
          },
          {
            path: '/base/tables',
            name: 'Tables',
            component: () => import('@/views/base/Tables.vue'),
          },
          {
            path: '/base/tooltips',
            name: 'Tooltips',
            component: () => import('@/views/base/Tooltips.vue'),
          },
        ],
      },
      {
        path: '/buttons',
        name: 'Buttons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/buttons/standard-buttons',
        children: [
          {
            path: '/buttons/standard-buttons',
            name: 'Buttons',
            component: () => import('@/views/buttons/Buttons.vue'),
          },
          {
            path: '/buttons/dropdowns',
            name: 'Dropdowns',
            component: () => import('@/views/buttons/Dropdowns.vue'),
          },
          {
            path: '/buttons/button-groups',
            name: 'Button Groups',
            component: () => import('@/views/buttons/ButtonGroups.vue'),
          },
        ],
      },
      {
        path: '/forms',
        name: 'Forms',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/forms/form-control',
        children: [
          {
            path: '/forms/form-control',
            name: 'Form Control',
            component: () => import('@/views/forms/FormControl.vue'),
          },
          {
            path: '/forms/select',
            name: 'Select',
            component: () => import('@/views/forms/Select.vue'),
          },
          {
            path: '/forms/checks-radios',
            name: 'Checks & Radios',
            component: () => import('@/views/forms/ChecksRadios.vue'),
          },
          {
            path: '/forms/range',
            name: 'Range',
            component: () => import('@/views/forms/Range.vue'),
          },
          {
            path: '/forms/input-group',
            name: 'Input Group',
            component: () => import('@/views/forms/InputGroup.vue'),
          },
          {
            path: '/forms/floating-labels',
            name: 'Floating Labels',
            component: () => import('@/views/forms/FloatingLabels.vue'),
          },
          {
            path: '/forms/layout',
            name: 'Layout',
            component: () => import('@/views/forms/Layout.vue'),
          },
          {
            path: '/forms/validation',
            name: 'Validation',
            component: () => import('@/views/forms/Validation.vue'),
          },
        ],
      },
      {
        path: '/charts',
        name: 'Charts',
        component: () => import('@/views/charts/Charts.vue'),
      },
      {
        path: '/icons',
        name: 'Icons',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: '/icons/coreui-icons',
            name: 'CoreUI Icons',
            component: () => import('@/views/icons/CoreUIIcons.vue'),
          },
          {
            path: '/icons/brands',
            name: 'Brands',
            component: () => import('@/views/icons/Brands.vue'),
          },
          {
            path: '/icons/flags',
            name: 'Flags',
            component: () => import('@/views/icons/Flags.vue'),
          },
        ],
      },
      {
        path: '/notifications',
        name: 'Notifications',
        component: {
          render() {
            return h(resolveComponent('router-view'))
          },
        },
        redirect: '/notifications/alerts',
        children: [
          {
            path: '/notifications/alerts',
            name: 'Alerts',
            component: () => import('@/views/notifications/Alerts.vue'),
          },
          {
            path: '/notifications/badges',
            name: 'Badges',
            component: () => import('@/views/notifications/Badges.vue'),
          },
          {
            path: '/notifications/modals',
            name: 'Modals',
            component: () => import('@/views/notifications/Modals.vue'),
          },
        ],
      },
      {
        path: '/widgets',
        name: 'Widgets',
        component: () => import('@/views/widgets/Widgets.vue'),
      },
    ],
  },
  {
    path: '/pages',
    redirect: '/pages/login',
    name: 'Pages',
    component: {
      render() {
        return h(resolveComponent('router-view'))
      },
    },
    children: [
     
      {
        path: 'login',
        name: 'Login',
        component: () => import('@/views/pages/Login'),
      },
      {
        path: 'register',
        name: 'Register',
        component: () => import('@/views/pages/Register'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})
// Navigation guard
router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && !isLoggedIn()) {
    // Redirect to the login page if authentication is required but the user is not logged in
    next('/login');
  } else {
    // Continue with the navigation
    next();
  }
});

function isLoggedIn() {
  // Your login logic here
  // Return true if the user is logged in, false otherwise
}

export default router
