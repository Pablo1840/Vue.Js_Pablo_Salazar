<template>
  <navigation/>
  <div class="container">
    <div>
      <h1 class="text-center mt-3">Inicio de Sesión </h1>
      <div id='form' class="row" >
        <form action="#" @submit.prevent="login" class="col-6 m-auto">
          <div class='col-12'>
             <div class="alert alert-danger" role="alert" v-if="error">
              {{error}}
            </div>					
            
          <div class="form-group">
            <label for="email" class="cols-sm-2 control-label">Email</label>
            <div class="cols-sm-10">
              <div class="input-group">
                <span class="pt-2 px-3 input-group-addon bg-info"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                <input type="text" class="form-control" placeholder="Correo Electrónico" v-model="email">
              </div>
            </div>
          </div>

          <div class="form-group">
            <label for="password" class="cols-sm-2 control-label">Contraseña</label>
            <div class="cols-sm-10">
              <div class="input-group">
                <span class="pt-2 px-3 input-group-addon bg-info"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                <input type="password" class="form-control" 
                        placeholder="Ingrese la contraseña" v-model="password">
              </div>
            </div>
          </div>

          <div class="form-group row">
            <div class="col-3" ></div>
            <button class="col-6 btn btn-primary btn-lg btn-block" >Iniciar Sesión</button>
            <div class="col-3" ></div>
          </div>

        </div>
        </form>
      </div>
  </div>
  </div>
</template>

<script>
  import '@/firebase/init.js'
  import firebase from 'firebase/compat/app';
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';
  import Navigation from '@/components/layout/Navigation.vue'
  
  export default {
    components:{
      Navigation
    },
    data (){
      return{
        email: '',
        password:'',
        error:''
      }
    },
    name: 'Login',
    methods:{
      login(){
        this.error = ''

        if(this.email && this.password){
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then( user => {
              this.$router.push({name:'dashboard'})
              console.log(user)
            }).catch(err => {
              this.error = err.message
            })
        }else{
          this.error="Todos los campos son requeridos"
        }
      }
    }


  }
</script>