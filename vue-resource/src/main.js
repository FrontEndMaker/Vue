// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import About from './components/About'
import User from './components/User'


Vue.use(VueResource)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter ({
	mode: 'history',
	routes: [
	{path: '/', component: About},
	{path: '/users', component: User}
	]
})

/* eslint-disable no-new */
new Vue({
	//el: '#app',
	router,
	template:
	`<div id="app">
		<ul>
			<li><router-link to="/">About</router-link></li>
			<li><router-link to="/users">Users</router-link></li>
		</ul>
		<router-view></router-view>
	</div>`
	
	//components: { App }
}).$mount('#app')
