import Vue from 'vue'
import Router from 'vue-router'
import Collect from '@/views/index/Collect.vue'
import Detail from '@/views/detail/Detail.vue'
import Light from '@/views/detail/Light.vue'
import Steal from '@/views/detail/Steal.vue'
import Gather from '@/views/Home/Gather.vue'
import Video from '@/views/video-clip/Video.vue'
import Content from '@/views/books/Content.vue'
import Collects from '@/views/music/Collects.vue'

Vue.use(Router)

var router = new Router({
  routes: [{
      name:'gather',
      path:'/',
      component:Gather,
      meta:{
        title:"首页"
      }
  },{
    name: 'collect',
    path: '/collect',
    //不加s
    component: Collect,
    meta: {
      title: '快看'
    }
  },{
    name:'detail',
    path:'/detail',
    component:Detail,
    }, {
      name: 'light',
      path: '/Light',
    component: Light,
    }, {
      name: 'steal',
      path: '/Steal',
      component: Steal,
    },{
      name: 'video',
      path: '/Video',
      component: Video,
    meta: {
      title: '动漫'
    }
    }, {
      name: 'content',
      path: '/Content',
      component: Content,
      meta: {
        title: '阅读'
      }
    }, {
      name: 'collects',
      path: '/Collects',
      component: Collects,
      meta: {
        title: '音乐'
      }
    },
],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 }
    }
  }
})
export default router
router.beforeEach((to, from, next) => {
  /* 路由发生变化时修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})