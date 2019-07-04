import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Article from './views/Article.vue'
import Hero from './views/Hero.vue'
import NewsList from './views/NewsList.vue'
import StrategyCenter from './views/StrategyCenter.vue'
import MatchIndex from './views/MatchIndex.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        {path:'/', name:'home', component: Home},
        {path:'/strategycenter', name:'strategycenter', component: StrategyCenter},
        {path:'/matchindex', name:'matchindex', component: MatchIndex},        
        {path:'/articles/:id', name: 'article', component: Article, props: true},
        {path:'/newsList', name: 'newsList', component: NewsList}
      ]
    },
    {path: '/heroes/:id', name: 'hero', component: Hero, props: true}
    
  ]
})
