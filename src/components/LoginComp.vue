<template>
	<q-form @submit.prevent="submitForm()" >
		<q-input
			v-model="formData.email"
			class="q-mb-md"
			outlined
      required
			type="email"
			label="Email" />
		<q-input
			v-model="formData.password"
			class="q-mb-md"
			outlined
      required
			type="password"
			label="Password" />
		<div class="row">
			<q-space />
			<q-btn
				color="primary"
				type="submit"
				:label="tab" />
		</div>
	</q-form>
</template>

<script>
	import { mapActions } from 'vuex'
  import { reactive } from 'vue'

	export default {
		props: ['tab'],
		setup() {
      const formData= reactive({
					email: '',
					password: '',})

        return{formData}}
      ,



		methods: {
			...mapActions('store', ['loginUser']),
			submitForm() {
					this.loginUser(this.formData)
			}
		}
	}
</script>
