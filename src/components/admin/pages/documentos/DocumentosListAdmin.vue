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
      rutaAPI
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
      const response = await axios.get(`${rutaAPI}/api/documentos/listado`);
      this.documentos = response.data;
    } catch (error) {
      console.error('Error al obtener la lista de documentos:', error);
    }
  },

  methods: {
    editar(id) {
      // Redirigir al formulario de actualización con el ID del usuario
      //this.$router.push(`/admin/reportes/lista/maestra/${id}`);
      return `/admin/reportes/lista/maestra/${id}`
    },

    historico(id) {
      // Redirigir al formulario de actualización con el ID del usuario
      this.$router.push(`/admin/documentos/historico/${id}`);
    },

    actualizarArchivo(id) {
      // Redirigir al formulario de actualización con el ID del usuario
      this.$router.push(`/admin/documentos/actualizar/archivo/${id}`);
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
                <h3 class="card-title">Listado de Documentos </h3>

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
                    <th>Departamento</th>
                    <th>Tipo Documento</th>
                    <th>Estatus</th>
                    <th>Nombre Documento</th>
                    <th>Codigo Documento</th>
                    <th>Revisión</th>
                    <th>Fecha Registro</th>
                    <th>Descargar</th>
                    <th>Lista Maestra</th>
                    <th>Historico</th>
                    <th>Correciones</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="documento in DocumentosFiltrados" :key="documento.id">
                    <td>{{ documento.descripcion }}</td>
                    <td>{{ documento.tipo_documento }}</td>
                    <td>{{ documento.nombre_estatus }}</td>
                    <td>{{ documento.descripcion_documento }}</td>
                    <td>{{ documento.codigo_documento }}</td>
                    <td>{{ documento.numero_revision }}</td>
                    <td>{{ documento.fecha_registro  }}</td>
                 
                    
                   

                    <td class="align-items-center">
                        <a :href="`${rutaAPI}/api/documentos/archivos/${documento.nombre_documento}`" target="_blank ">
                          <img src="/iconos/abrir_carpeta.png" alt="Editar" style="cursor: pointer;"/>
                        </a>
                    </td>
                   
                    <td>
                      <a :href="editar(documento.id)" target="_blank">
                      <img
                        src="/iconos/archivo.png"
                        alt="Editar"
                        @click="editar(documento.id)"
                        style="cursor: pointer;"/>
                      </a>
                    </td>

                    <td>
                      <img
                        src="/iconos/historico.png"
                        alt="historico"
                        @click="historico(documento.id)"
                        style="cursor: pointer;"/>
                    </td>

                    <td>
                      <img
                        src="/iconos/edit.png"
                        alt="actualizarArchivo"
                        @click="actualizarArchivo(documento.id)"
                        style="cursor: pointer;"/>
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




