import { firebaseAuth, usersCollection ,createUser,database} from 'boot/firebase'
import {
  createUserWithEmailAndPassword } from "firebase/auth"
  import { getDatabase, ref, onValue } from "firebase/database";


import{ onUnMmounted} from 'vue'


const state = {
  userDetails:{}
}
const mutations = {
  setUserState(state,payload){
    state.userDetails=payload
  }
}

const actions = {

	registerUser({}, payload) {
    //createUser(payload)
    console.log("payload",payload)

		firebaseAuth.createUserWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
				function writeUserData(payload) {
          const db = getDatabase();
          set(ref(db, 'users/' + userId), {
            name: payload.name,
            email: payload.email,
            password : payload.password
          });


        }
			})
			.catch(error => {
				console.log("hello",error.message)
			})
	},



	loginUser({}, payload) {
		firebaseAuth.signInWithEmailAndPassword(payload.email, payload.password)
			.then(response => {
        //console.log(payload.id)
				//alert(response.data)
			})
			.catch(error => {
				alert("Wrong Login information")
			})
	},
  logoutUser(){

    firebaseAuth.signOut()
  },
  handleAuthStateChange({ commit }){
    firebaseAuth.onAuthStateChanged(user => {
      if(user){
        let userId = firebaseAuth.currentUser.uid
        commit('setUserState',{
          name: firebaseAuth.currentUser.name,
          email: firebaseAuth.currentUser.email,
          userId:userId
        })
      return onValue(ref(database, '/users/'+userId), (snapshot) => {
        const username = snapshot.val()
        console.log(username)
        console.log("yo")
        commit('setUserState',{
          name: username.name,
          email: username.email,
          userId:userId
        })
        // ...
      }, {
        onlyOnce: true
      });
    }else{
      commit('setUserState',{})
    }

  })
  }
}

const getters = {

}

export default {
	namespaced: true,
	state,
	mutations,
	actions,
	getters,

}
