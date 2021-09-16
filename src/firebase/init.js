
import firebase from 'firebase/compat/app';
import 'firebase/app';
import "firebase/auth";
import 'firebase/compat/firestore';

//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA7mLYuJ9tUx2Sv9l8uvhZ3VB6-xwSqS-E",
  authDomain: "proyectofinalvuenextu.firebaseapp.com",
  projectId: "proyectofinalvuenextu",
  storageBucket: "proyectofinalvuenextu.appspot.com",
  databaseURL: "https://proyectofinalvuenextu.firebaseio.com",
  messagingSenderId: "536515845905",
  appId: "1:536515845905:web:f6ca5e5ebeb9c84118b6b0",
  measurementId: "G-4820BB5ZGH",
  merge: true
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({timestampsInSnapshots:true});
//firebase.initializeApp(firebaseConfig);
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
//console.log(analytics)
const db = firebase.firestore();
const gastosCollection = db.collection('gastos')
export default firebaseApp.firestore();
export {db}


export const createGasto = gasto =>{
  return gastosCollection.add(gasto)
}

export const getGasto = async id =>{
  const gasto = await gastosCollection.doc(id).get()
  return gasto.exists ?  gasto.data():null
}


export const updateGasto = (id,gasto)=>{
  return gastosCollection.doc(id).update(gasto)
}

export const deleteGasto = id =>{
  return gastosCollection.doc(id).delete()
}
/*
export const useLoadGastos = () => {
  const gastos = ref([])
  const close = gastosCollection.onSnapshot(snapshot => {
    gastos.value = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  })
  onUnmounted(close);
  return gastos

}
*/

