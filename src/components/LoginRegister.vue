<template>
	<q-form @submit.prevent="onSubmit">
      <q-input
			v-if="tab == 'register'"
			v-model="formData.name"
			class="q-mb-md"
			outlined
			label="Name" />
		<q-input
			v-model="formData.email"
			class="q-mb-md"
			outlined
			type="email"
			label="Email" />
		<q-input
			v-model="formData.password"
			class="q-mb-md"
			outlined
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
  import { createUser } from '../boot/firebase'
  import { reactive } from 'vue'

	export default {
		props: ['tab'],
		setup() {
				const formData= reactive({
          uid: Math.floor(Math.random() * 99999) + 10000,
					name:'',
					email: '',
					password: '',
          bDate:'',
          EmployeeNumber:'',
          Gender:'',
          MartialStatus:'',
          Nationality:'',
          Education:'',
          email2:'',
          PhoneNumber1:'',
          PhoneNumber2:'',
          Address1:'',
          Address2:'',
          CivilId:'',
          CivilIdExpiry:'',
          DLExpiry:'',
          Passport:'',
          PassportExpiry:'',
          Employment:'',
          DateOfHire:'',
          BankAccountNumber:'',
          Iban:'',
          BankName:'',
          Salary:''
				})
        const onSubmit = async () => {
          await createUser({ ...formData })
          formData.uid = Math.floor(Math.random() * 99999) + 10000
          formData.name = ''
          formData.email = ''
          formData.password =''
          formData.EmployeeNumber=''
          formData.bDate = ''
          formData.Gender = ''
          formData.MartialStatus = ''
          formData.Nationality=''
          formData.Education= ''
          formData.email2 = ''
          formData.PhoneNumber1=''
          formData.PhoneNumber2=''
          formData.Address1 = ''
          formData.Address2 = ''
          formData.CivilId = ''
          formData.CivilIdExpiry = ''
          formData.DLExpiry = ''
          formData.Passport = ''
          formData.PassportExpiry = ''
          formData.Employment = ''
          formData.DateOfHire =''
          formData.BankAccountNumber = ''
          formData.Iban = ''
          formData.BankName = ''
          formData.Salary = ''
        }
        return { formData, onSubmit }
      },



		methods: {
			...mapActions('store', ['registerUser', 'loginUser']),
			submitForm() {
				if (this.tab == 'login') {
					this.loginUser(this.formData)
				}
				else {
					this.registerUser(this.formData)
				}
			}
		}
	}
</script>
