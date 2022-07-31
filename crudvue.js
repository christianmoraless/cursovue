const app = new Vue({
    el:'#app',
   data:{
    titulo:'GYM con Vue',
    tareas:[],
    nuevaTarea:'',
   },
   methods:{
    agergarTarea(){
        this.tareas.push(
            {
                nombre:this.nuevaTarea,
                estado:false
            }
        );
        this.nuevaTarea='';
        localStorage.setItem('gym', JSON.stringify(this.tareas))
    },
    finalizarTarea(index){
        this.tareas[index].estado = !this.tareas[index].estado
        localStorage.setItem('gym', JSON.stringify(this.tareas))
    },
    eliminarTarea(index){
        this.tareas.splice(index,1);
        localStorage.setItem('gym', JSON.stringify(this.tareas))
    }
    
   },
   computed:{
   },
   created(){
    let datosDB = JSON.parse(localStorage.getItem('gym'));
    if(datosDB===null){
        this.tareas = [];
    } else {
        this.tareas = datosDB;
    }
   }
})