Vue.component('padre',{
    template:
    `
        <div class="p-5 text-white bg-dark">
            <h2>Componente Padre {{numeroPadre}}</h2>
            <button class="btn btn-danger" @click="numeroPadre++">+</button>
            {{nombrePadre}}
            <hijo :numero="numeroPadre" @nombreHijo="nombrePadre=$event"></hijo>
        </div>
    `,
    data(){
        return{
            numeroPadre:0,
            nombrePadre:''
        }
    }
})