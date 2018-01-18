<template>
	<div id="app">
		<h2>{{message}}</h2>
		<h3>{{user.firstName}}</h3>
		<h4 v-if="showName">{{user.lastName}}</h4>
		<span v-else>Nobody</span>
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>
		<button v-on:click='greeting("Alex")' >button</button>
		<input type="text" v-on:keyup="pressKey" v-on:keyup.enter="enterHit">

		<br>

		<input type="text" v-model='user.firstName'>
		<input type="text" v-model='user.lastName'>
		<h4>{{fullName}}</h4>
		<h2>{{msg}}</h2>
	</div>
</template>

<script>

export default {
	name: 'about',
	props: {
		msg: {
			type: String,
			default: 'Foobar'
		}
	},
	data: function() {
		return {
			message:"YES",
			user: {
				firstName: 'Alex',
				lastName: 'White'
			},
			showName: true,
			items: [
			{title: '1'},
			{title: '2'},
			{title: '3'}
			]
		}
	},
	methods: {
		greeting: (name) => {
			alert(name)
		},
		pressKey: (e) => {
			console.log(e.target.value)
		},
		enterHit: () => {
			console.log('enter')
		}
	},
	computed: {
		fullName: function () {
			return	this.user.firstName + ' ' + this.user.lastName
		}
	}
}
</script>

<style>

</style>