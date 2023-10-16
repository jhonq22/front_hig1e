<script>
import LayoutAdmin from '../../template/LayoutAdmin.vue';
import axios from 'axios';
const rutaAPI = import.meta.env.VITE_APP_RUTA_API;


    export default {
    name: 'OrganigramaListAdmin',
    data() {
    return {
        tipodocumentos: [],
      filtro: '',
    };
  },
  computed: {
    DocumentosFiltrados() {
      return this.tipodocumentos.filter((tipodocumento) => {
        const termino = this.filtro.toLowerCase();
        return (
            tipodocumento.tipo_documento.toLowerCase().includes(termino) 
           // ||  documento.apellidos.toLowerCase().includes(termino)
        );
      });
    },
  },
  async mounted() {
    // Realiza la solicitud GET a la API de usuarios al cargar el componente
    try {
      const response = await axios.get(`${rutaAPI}/api/tipodocumentos`);
      this.tipodocumentos = response.data;
    } catch (error) {
      console.error('Error al obtener la lista :', error);
    }
  },

  methods: {
    editar(id) {
      // Redirigir al formulario de actualización con el ID del usuario
      this.$router.push(`/admin/tipodocumentos/actualizar/${id}`);
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
                <h3 class="card-title">Listado de Tipo de Documentos </h3>

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
                    <th>Tipo Documento</th>
                    <th>Estatus</th>
                    <th>Editar</th>
    
                   
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="tipodocumento in DocumentosFiltrados" :key="tipodocumento.id">
                    <td>{{ tipodocumento.siglas_codigo }}</td>
                    <td>{{ tipodocumento.tipo_documento }}</td>
                
                 
                    <td>
                      <button :class="{'btn-success rounded': tipodocumento.estado, 'btn-danger rounded': !tipodocumento.estado}">
                                          {{ tipodocumento.estado ? 'Activado' : 'Desactivado' }}
                      </button>
                    </td>
                    <td>
                      <img
                        src="/iconos/edit.png"
                        alt="Editar"
                        @click="editar(tipodocumento.id)"
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




