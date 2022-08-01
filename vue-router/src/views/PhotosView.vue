<template>
  <div class="services">
    <h1>This is an Services created for christian page</h1>

    <router-link :to="{name:'photos', params:{id:item}}" v-for="(item,index) of fotosArreglo" :key="index">
        <button type="">foto {{item}}</button>
    </router-link>
    <Photo/>

    <button  @click="home">Home</button>
    <button  @click="anterior">Anterior</button>
    <button  @click="siguiente">Siguiente</button>
  </div>
</template>
 
 <script>
import Photo from '@/components/Photo.vue'

export default {
  name: 'photos',
  components: {
    Photo
  },
  data(){
    return{
        fotosArreglo:[1,2,3,4]
    }
  },
  methods:{
    home(){
        this.$router.push('/')
    },
    anterior(){
        this.$router.go(-1)
    },
    siguiente(){
        this.$router.go(1)
    }
  }
}
 </script>