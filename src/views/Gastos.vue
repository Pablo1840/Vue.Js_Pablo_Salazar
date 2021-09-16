<template>
    <div class="container" style="border:1px solid gray">
        <form class="m-4 text-center" @submit.prevent="onSubmit">
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

   // import db from '@/firebase/init.js'
    import 'firebase/compat/firestore';
    import { reactive } from '@vue/reactivity';
    import createGasto from '@/firebase/init.js'

    export default {
        setup(){
            const gasto = reactive({nombre:'',monto:'',tipo:''})

            const onSubmit = async () => {
                await createGasto({ ...gasto})
                gasto.nombre = ''
                gasto.monto = ''
                gasto.tipo = ''
            }

            return {gasto,onSubmit}
        }
    }

</script>