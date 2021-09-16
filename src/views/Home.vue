<template>
  <div>
    <navigation/>

    <div style="border:1px solid gray">
      <h3 class="text-center mt-4">Proyecto Final con Vue</h3>
      <div >
        <img src="https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png" class="imagen">
      </div>
    </div>
    
  </div>
</template>

<script>
  import Navigation from '@/components/layout/Navigation.vue'

  export default {
    name: 'Home',
    components: {
      Navigation
    }
  }
</script>

<style>
 .imagen{
  display:block;
  margin:auto;
 }
</style>