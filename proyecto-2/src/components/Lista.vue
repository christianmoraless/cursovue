<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center"
             v-for="(item,index) of ordenarFrutas" :key="item.id" @click="aumentar(index)">
                {{item.nombre}}
                <span class="badge bg-primary rounded-pill">{{item.cantidad}}</span>
            </li>
        </ul>
        <div class="d-grid gap-2 mt-3">
            <button class="btn btn-danger text-center" @click="reiniciar">Reiniciar</button>
        </div>
    </div>    
</template>

<script>
    import {mapState,mapMutations} from 'vuex';
    export default {
        name:'Lista',
        computed:{
            ...mapState(['frutas']),
            ordenarFrutas(){
                return this.frutas.sort( (a,b) => b.cantidad - a.cantidad)
            }
        },
        methods:{
            ...mapMutations(['aumentar','reiniciar'])
        }
    }
</script>
