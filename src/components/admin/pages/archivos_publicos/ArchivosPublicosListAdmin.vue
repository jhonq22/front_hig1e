<script>
import LayoutAdmin from '../../template/LayoutAdmin.vue';
import axios from 'axios';
const rutaAPI = import.meta.env.VITE_APP_RUTA_API;


    export default {
    name: 'DocumentosListAdmin',
    data() {
    return {
      documentos: [],
      filtro: '',
      rutaAPI: import.meta.env.VITE_APP_RUTA_API,
    };
  },
  computed: {
    DocumentosFiltrados() {
      return this.documentos.filter((documento) => {
        const termino = this.filtro.toLowerCase();
        return (
          documento &&
          documento.descripcion_documento &&
          documento.descripcion_documento.toLowerCase().includes(termino)
        );
      });
    },
  },
  async mounted() {
    // Realiza la solicitud GET a la API de usuarios al cargar el componente
    try {
      const response = await axios.get(`${rutaAPI}/api/documentos/publicos/listado`);
      this.documentos = response.data;
    } catch (error) {
      console.error('Error al obtener la lista de documentos:', error);
    }
  },

  methods: {
    editarUsuario(id) {
      // Redirigir al formulario de actualización con el ID del usuario
      this.$router.push(`/admin/usuarios/actualizar/${id}`);
    },
  },

    components: {
    LayoutAdmin
    }
    
}
</script>


<template>
    <LayoutAdmin :titulo="InicioAdmin">
       

        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header text-white bg-primary">
                <h3 class="card-title">Listado de Documentos Externos </h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text"  v-model="filtro"   name="table_search" class="form-control float-right"  placeholder="Filtrar por nombre Documento">

                    <div class="input-group-append">
                      <button type="submit" class="btn btn-default">
                        <i class="fas fa-search"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body table-responsive p-0">
                <table class="table table-hover text-nowrap">
                  <thead>
                    <tr>
                
                
                    <th>Titulo</th>
                    <th>Código</th>
                    <th>Emisor</th>
                    <th>Clave</th>
                    <th>Observación</th>
                    <th>Fecha Registro</th>
                    <th>Descargar</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="documento in DocumentosFiltrados" :key="documento.id">
                          
                 
                    <td>{{ documento.descripcion_documento }}</td>
                    <td>{{ documento.codigo_documento }}</td>
                    <td>{{ documento.nombre_emisor }}</td>
                    <td>{{ documento.clave_accesso }}</td>
                    <td>{{ documento.observacion }}</td>
                    <td>{{ documento.fecha_registro }}</td>
                   

                    <td>
                        <a :href="`${rutaAPI}/api/documentos/publicos/archivos/${documento.nombre_documento}`" target="_blank ">

                 
                        <button class="btn btn-primary" >Descargar</button>
                    </a>
                    </td>
                   
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




