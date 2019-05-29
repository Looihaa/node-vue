import Vue from 'vue'
import Router from 'vue-router'
import main from './views/main.vue'
import CategoryEdit from './views/CategoryEdit.vue'
import CategoryList from './views/CategoryList.vue'
import ItemEdit from './views/ItemEdit.vue'
import ItemList from './views/ItemList.vue'
import HeroEdit from './views/HeroEdit.vue'
import HeroList from './views/HeroList.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children: [
        {
          path: '/categories/create',
          component: CategoryEdit
        },
        {
          path: '/categories/list',
          component: CategoryList
        },
        {
          path: '/categories/edit/:id',
          component: CategoryEdit,
          props: true
        },
        {
          path: '/items/create',
          component: ItemEdit
        },
        {
          path: '/items/list',
          component: ItemList
        },
        {
          path: '/items/edit/:id',
          component: ItemEdit,
          props: true
        },
        {
          path: '/heroes/create',
          component: HeroEdit
        },
        {
          path: '/heroes/list',
          component: HeroList
        },
        {
          path: '/heroes/edit/:id',
          component: HeroEdit,
          props: true
        }
      ]
    },

  ]
})
