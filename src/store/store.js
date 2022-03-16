import { firebaseAuth, usersCollection ,createUser} from 'boot/firebase'
import {
  createUserWithEmailAndPassword } from "firebase/auth";
import{ref , onUnMmounted} from 'vue'
const state = {

}
const mutations = {

}

const actions = {

	registerUser({}, payload) {
    console.log("payload",payload)
    createUser(payload)
		firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
				let userId = firebaseAuth.currentUser.uid
        console.log(userId)
				firebaseDb.ref('users/' + userId).set({
					name: payload.name,
					email: payload.email,
					password: payload.password
				})

			})
			.catch(error => {
				console.log("hello",error.message)
			})
	}//,



	// loginUser({}, payload) {
	// 	firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
	// 		.then(response => {
	// 			console.log(response)
	// 		})
	// 		.catch(error => {
	// 			console.log(error.message)
	// 		})
	// }
}
const getters = {

}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters
}
