import home from './page/home.vue'
import login from './page/login.vue'

let routes = [
	{
		path:'/login',
		component:login,
		name:'登录'
	},
	{
		path:'/',
		component:home,
		name:'',
		redirect:'/first',
		children:[
			{
				path:'/first',
				component: resolve => require(['./components/first.vue'],resolve),
				name:''
			},
		]
	},



]

export default routes;