<template>
    <div>
        <h3 class="text-center">Editar Gasto</h3>
        <form class="m-4 text-center" @submit.prevent="update">
            <div class="form-group row">
                <label  class="col-sm-3 col-form-label">Nombre del Gasto</label>
                <div class="col-sm-8">
                    <input v-model="gasto.nombre" type="text" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Monto del Gasto</label>
                <div class="col-sm-8">
                <input v-model="gasto.monto" type="text" class="form-control">
                </div>
            </div>
            <div class="form-group row">
                <label class="col-sm-3 col-form-label">Tipo del Gasto</label>
                <div class="col-sm-8">
                <input v-model="gasto.tipo" type="text" class="form-control">
                </div>
            </div>
            <button class="btn btn-primary mb-3" id="agregar" type="submit" >Agregar</button>
        </form>
    </div>
</template>


<script>
    import { computed, reactive } from '@vue/reactivity'
    import { useRoute, useRouter } from 'vue-router'
    import {updateGasto, getGasto} from '@/firebase/init.js'
import { onMounted } from '@vue/runtime-core'

    export default {
        setup(){
            const router = useRouter()
            const route = useRoute()
            const gastoId = computed(()=> route.params.id)
            const form = reactive({nombre:'', monto:'', tipo:''})

            onMounted(async () =>{
                const gasto = await getGasto(gastoId.value)
                form.nombre = gasto.nombre
                form.monto = gasto.monto
                form.tipo = gasto.tipo
            })

            const update = async()=>{
                await updateGasto(gastoId.value, { ...form})
                router.push('/')
                form.nombre=''
                form.monto=''
                form.tipo=''
            }

            return {form,update}
        }

       
    }
</script>