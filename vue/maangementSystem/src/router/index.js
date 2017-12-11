import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import UserCenter from '@/components/UserCenter'
import TopicInfo from '@/components/TopicInfo'
import TopicList from '@/components/TopicList'
import UserInfo from '@/components/UserInfo'
import UnreadMessages from '@/components/UnreadMessages'
import NewUser from '@/components/NewUser'
import TopicCreate from '@/components/TopicCreate'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'UserCenter',
        component: UserCenter,
        children: [{
          path: '',
          name: 'TopicList',
          component: TopicList,
        },{
          path: '/unreadMessages',
          name: 'UnreadMessages',
          component: UnreadMessages,
        },
        {
          path: '/topic/:id',
          component: TopicInfo,
        },{
            path: '/new-user',
            component: NewUser,

        },{
            path: '/topic-reate',
            component: TopicCreate
          }]
    }, {
      path: '/login',
      name: 'Login',
      component: Login,
    }, {
        path: '/user/:userId',
        component: UserInfo
    }]
})
