// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Footer from './components/Footer'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:
	`<div id="app">
		<ul>
			<li><router-link to="/">HelloWorld</router-link></li>
			<li><router-link to="/footer">Footer</router-link></li>
		</ul>
		<router-view></router-view>
	</div>`,
  components: { App }
})
