<script>
import LayoutAdmin from '../../template/LayoutAdmin.vue';
import axios from 'axios';
const rutaAPI = import.meta.env.VITE_APP_RUTA_API;


    export default {
    name: 'HistoricoDocumentosListAdmin',
    data() {
    return {
      historico: [],
    
    };
  },
  
  async mounted() {
   this.cargarDatosRegistro();
  },
  methods: {
    formatearFecha(fecha) {
    const fechaHora = new Date(fecha);
    const opciones = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return fechaHora.toLocaleDateString('es-ES', opciones);
  }, 
    async cargarDatosRegistro() {
        const id = this.$route.params.id;
        try {
          const response = await axios.get(`${rutaAPI}/api/movimientos/${id}`);
          this.historico = response.data;
 
        } catch (error) {
          console.error('Error al cargar los datos del registro:', error);
        }
      },
  },

    components: {
    LayoutAdmin
    }
    
}
</script>


<template>
      <LayoutAdmin :titulo='InicioAdmin'>
       

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header card-header text-white bg-primary">
                <h3 class="card-title">Listado Movimiento Historico de Documentos </h3>

             
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                      <th>Nombre Usuario</th>
                    <th>Documento</th>
                    <th>Código Documento</th>
                    <th>Estatus</th>
                    <th>Fecha:</th>
                 
    
                   
                  </tr>
                  </thead>
                  <tbody>
                <tr v-for="documentos in historico">
                  <td>Administrador </td>
                <td>{{ documentos.descripcion_documento }}</td>
                <td>{{ documentos.codigo_documento }}</td>
                <td>{{ documentos.nombre_estatus }}</td>
                <td>{{ formatearFecha(documentos.fecha_registro) }}</td>
</tr>
                  
              
                  
                  </tbody>
                </table>
              </div>
              <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        </div>





    </LayoutAdmin>
</template>




