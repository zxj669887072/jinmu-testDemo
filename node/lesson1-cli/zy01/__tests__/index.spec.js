test('自动配置路由',() => {
  const {getRouter} = require('../index');
  const ret = getRouter(__dirname+'/data');
  console.log('result',ret);
  expect(getRouter(__dirname+'/data')).toBe(
`
export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
{
  path: '/about',
  name: 'about',
  component: () => import('./views/about.vue')
},
{
  path: '/app',
  name: 'app',
  component: () => import('./views/app.vue')
},
]
})`);
})

