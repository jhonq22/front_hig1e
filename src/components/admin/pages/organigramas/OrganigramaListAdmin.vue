<script>
import LayoutAdmin from '../../template/LayoutAdmin.vue';
import axios from 'axios';
const rutaAPI = import.meta.env.VITE_APP_RUTA_API;


    export default {
    name: 'OrganigramaListAdmin',
    data() {
    return {
      documentos: [],
      filtro: '',
    };
  },
  computed: {
    DocumentosFiltrados() {
      return this.documentos.filter((documento) => {
        const termino = this.filtro.toLowerCase();
        return (
            documento.descripcion.toLowerCase().includes(termino) 
           // ||  documento.apellidos.toLowerCase().includes(termino)
        );
      });
    },
  },
  async mounted() {
    // Realiza la solicitud GET a la API de usuarios al cargar el componente
    try {
      const response = await axios.get(`${rutaAPI}/api/organigrama/organigrama`);
      this.documentos = response.data;
    } catch (error) {
      console.error('Error al obtener la lista :', error);
    }
  },

  methods: {
    editarOrganigrama(id) {
      // Redirigir al formulario de actualización con el ID del usuario
      this.$router.push(`/admin/organigrama/actualizar/${id}`);
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
              <div class="card-header card-header text-white bg-primary">
                <h3 class="card-title">Listado de Organigrama </h3>

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
                    <th>Código Siglas </th>
                    <th>Nombre Organigrama</th>
                    <th>Menu Padre</th>
                    <th>Estatus</th>
                    <th>Editar</th>
    
                   
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="documento in DocumentosFiltrados" :key="documento.id">
                    <td>{{ documento.codigo }}</td>
                    <td>{{ documento.descripcion }}</td>
                    <td>{{ documento.padre }}</td>
                 
                    <td>
                      <button :class="{'btn-success rounded': documento.estado, 'btn-danger rounded': !documento.estado}">
                                          {{ documento.estado ? 'Activado' : 'Desactivado' }}
                      </button>
                    </td>
                    <td>
                      <img
                        src="/iconos/edit.png"
                        alt="Editar"
                        @click="editarOrganigrama(documento.id)"
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




