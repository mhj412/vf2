import Vue from 'vue'
import * as firebase from 'firebase/app'
import 'firebase/firebase-auth'
import 'firebase/firebase-database'
import firebaseConfig from '../../firebaseConfig'

firebase.initializeApp(firebaseConfig)

Vue.prototype.$firebase = firebase
