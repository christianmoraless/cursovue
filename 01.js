Vue.component('saludo',{
    template:`
        <div>
            <h1>{{saludo}}</h1>
            <h3>{{saludo2}}</h3>
        </div>
    `,
    data(){
        return{
            saludo:'Pueblaaaa',
            saludo2:'Hola mi gente'
        }
    }
})

const app = new Vue({
     el:'#app',











    
    // data:{
    //     titulo:'Hollaaa'
    // },
    // beforeCreate(){
    //   console.log('Genteee')  
    // },
    // create(){
    //     console.log('create')  
    // },
    // beforeMount(){
    //     console.log('beforeMount')  
    // },
    // mounted(){
    //     console.log('mounted') 
    // },
    // updated(){
    //     console.log('updated') 
    // },
    // beforeDestroy(){
    //     console.log('updated') 
    // },
    // destroyed(){
    //     console.log('destroyed')
    // }













    
    //  data:{
    //     variable:'hola',
    //     contador:null
    // },
    // methods:{

    // },
    // computed:{
    //     invertido(){
    //          return this.variable.split('').reverse().join();
    //     },
    //     color(){
    //         return{
    //             'bg-success' : this.contador <= 10,
    //             'bg-warning' : this.contador > 10 && this.contador <=30,
    //             'bg-dark' : this.contador > 30 && this.contador <=90,
    //         }
    //     }
    // }

     








    //  data:{
    //     titulo:'Christian Morralesss',
    //     frutas:[
    //         {nombre:'Pera',cantidad:10},
    //         {nombre:'Manzana',cantidad:99},
    //         {nombre:'PItaya',cantidad:0},
            
    //     ],
    //     nuevaFruta:'',
    //     nuevaCantidad:0,
    //     total:0
    //  },
    //  methods:{
    //     agregarFruta(){
    //         this.frutas.push({
    //             nombre:this.nuevaFruta,cantidad:this.nuevaCantidad
    //         })
    //         this.nuevaFruta = ''
    //         this.nuevaCantidad = ''
    //     },
    //  },
    //  computed:{
    //     sumarFrutas(){
    //         this.total=0;
    //         for(fruta of this.frutas){
    //             this.total = this.total + fruta.cantidad;
    //         }
    //         return this.total;
    //     }
    //  }
});