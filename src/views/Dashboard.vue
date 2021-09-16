<template>
    <div>
        <h3 class="text-center mt-2">Lista de Tareas</h3>
        <gastos/>
        
        <!--div>Usuario: {{userData.usuario}} </div>
        <div>Tipo de gasto: {{userData.gastos.tipo}} </div>
        <div>Monto del Gasto: {{userData.gastos.monto}} </div>
        <div>Nombre: {{userData.gastos.nombre}} </div>
        <div>Tipo: {{userData.gastos.tipoGasto}} </div-->

    

        <div class="container">
            <table class="table mt-3">
               
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">Nombre del Gasto</th>
                    <th scope="col">Monto del Gasto</th>
                    <th scope="col">Tipo de Gasto</th>
                    <th scope="col">Accion</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="{ id, nombre, monto, tipo} in gastos" :key="id">
                        <th>{{nombre}}</th>
                        <td>{{monto}}</td>
                        <td>{{tipo}}</td>
                        <td>
                            <router-link :to="`/edit/${id}`">
                                <button class="btn btn-primary">Editar</button>
                            </router-link>
                            <button class="btn btn-danger ml-1" @click="deleteGasto()">Eliminar</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
       
    </div>
    <div>
       
    </div>
    
</template>

<script>

    import db from '@/firebase/init.js'
    import 'firebase/compat/firestore';
    import Gastos from '../views/Gastos.vue';

    export default {
        components:{
            Gastos
        },
        data: function (){
            return {
                coleccionRaiz:'usuarios',
                idUsuario:'estudiante@nextu.com',
                coleccionGastos:'gastos',
                userData:{}
            }
        },
        beforeMount: function () {
            const settings = {timestampsInSnapshots: true};
            db.settings(settings);
            const doc = db.collection(this.coleccionRaiz).doc(this.idUsuario);
            this.userData={usuario:doc.id,gastos:{}}
            const gastos = doc.collection(this.coleccionGastos)
            
            const alquilerCasa = gastos.doc('alquiler_casa')
            this.userData.gastos={tipo:alquilerCasa.id,monto:0}
            alquilerCasa.get().then((doc)=>{
                this.userData.gastos.monto=doc.data().monto
                this.userData.gastos.nombre = doc.data().nombre
                this.userData.gastos.tipoGasto = doc.data().tipo
            })        
        }
    }
    
</script>