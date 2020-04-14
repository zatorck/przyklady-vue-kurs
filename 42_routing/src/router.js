import VueRouter from "vue-router";

const Home = {template: '<div>Strona główna</div>'}
const About = {template: '<div>O nas</div>'}
const Contact = {template: '<div>Kontakt</div>'}
const User = {template: '<div>Id użytkownika: {{$route.params.userId}}</div>'}
const UserWithProps = {template: '<div>Id użytkownika: {{userId}}</div>', props: ['userId']}


//zagniezdzanie sciezek
const UserGeneral = {template: '<div>Ifno o użytkowniku <router-view></router-view></div>'}


//404
const Page404 = {template: '<div>Nie znaleziono strony</div>'}

const router = new VueRouter({
  mode: 'history', // usuwa # z pierwszego człona url
  routes: [
    {
      path: '/', component: Home, meta: {
        wymagajLogowania: true,
        title: 'Strona główna'
      },
      // beforeEnter(to, from,next) - dziala identycnie jak beforeEach
      // afterEnter(to) - dziala identycnie jak afterEach
      // afterLeave(to)
    },
    {path: '/onas', component: About, name:'onas'},
    {path: '/kontakt', alias: '/k', component: Contact},
    {path: '/uzytkownik/:userId', component: User},
    {
      path: '/uzytkownicy', component: UserGeneral, children: [
        {
          path: 'profil/:userId',
          component: User
        }
      ]
    },
    // zagnieedznie sciezek
    {path: '/uzytkownik-z-props/:userId', component: UserWithProps, props: true},

    // redirect przeierkowyuje aliast nie przekierowywyuje
    {path: 'contact', redirect: '/kontakt'},

    // 404 page
    {path:'*', component: Page404}
  ]
})

//funcka beforeEach
router.beforeEach((to, from, next) => {
  if (to.path.startsWith('/costam')) {
    console.log('idziesz do costam')
  }

  if (to.meta.wymagajLogowania) {

    console.log('wymaga logowania')
    // next('/logowanie')
  }
  next();
})

router.afterEach((to) => {
  document.title = to.meta.title
})

export default router;
