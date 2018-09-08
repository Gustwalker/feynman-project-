import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// lazy-loading
const Subject = () => import('@/views/Subject.vue')
const Pset = () => import('@/views/Pset.vue')
const Login = () => import('@/views/Login.vue')
const MySubjects = () => import('@/views/MySubjects.vue')
const Question = () => import('@/views/Question.vue')
const Profile = () => import('@/views/Profile.vue')
const Conversation = () => import('@/views/Conversation.vue')
const Chat = () => import('@/views/Chat.vue')
const AllStudyGroups = () => import('@/views/AllStudyGroups.vue')
const Dashboard = () => import('@/views/Dashboard.vue')
const AllSubjects = () => import('@/views/AllSubjects.vue')

export default new Router({
  mode: 'history', 
  base: process.env.BASE_URL, 
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/dashboard',
      component: Dashboard
    },
    {
      path: '/subjects',
      component: MySubjects
    },
    {
      path: '/add-classes',
      component: AllSubjects
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/chat/:room_id',
      component: Chat
    },
    {
      path: '/study-groups/:subject_id',
      component: AllStudyGroups
    },
    {
      path: '/conversation/:convo_id',
      component: Conversation
    },
    {
      path: '/:subject_id',
      component: Subject
    },
    {
      path: '/:subject_id/:pset_number',
      component: Pset
    },
    {
      path: '/:subject_id/:pset_number/:question_number',
      component: Question
    }
  ]
})
