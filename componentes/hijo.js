Vue.component('hijo',{
    template:
    `
        <div class="py-5 text-white bg-success">
            <h4>Componente Hijo {{numero}}</h4>
            <p>Nombre: {{nombre}}</p>
        </div>
    `,
    props:['numero'],
    data(){
        return{
            nombre:'Christian'
        }
    },
    mounted(){
        this.$emit('nombreHijo',this.nombre);
    }
})