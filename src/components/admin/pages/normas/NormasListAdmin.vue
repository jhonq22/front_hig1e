<script>
import LayoutAdmin from '../../template/LayoutAdmin.vue';
import axios from 'axios';
const rutaAPI = import.meta.env.VITE_APP_RUTA_API;


    export default {
    name: 'NormasListAdmin',
    data() {
    return {
      normas: [],
      filtro: '',
    };
  },
  computed: {
    NormasFiltrados() {
      return this.normas.filter((estatu) => {
        const termino = this.filtro.toLowerCase();
        return (
            estatu.nombre_normas.toLowerCase().includes(termino) 
           // ||  documento.apellidos.toLowerCase().includes(termino)
        );
      });
    },
  },
  async mounted() {
    // Realiza la solicitud GET a la API de usuarios al cargar el componente
    try {
      const response = await axios.get(`${rutaAPI}/api/normas`);
      this.normas = response.data;
    } catch (error) {
      console.error('Error al obtener la lista :', error);
    }
  },

  methods: {
    editar(id) {
      // Redirigir al formulario de actualización con el ID del usuario
      this.$router.push(`/admin/normas/actualizar/${id}`);
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
                <h3 class="card-title">Listado de Normas Registrados </h3>

                <div class="card-tools">
                  <div class="input-group input-group-sm" style="width: 150px;">
                    <input type="text"  v-model="filtro"   name="table_search" class="form-control float-right"  placeholder="Filtrar por Nombre Normas">

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
                    <th>Nombre Normas</th>
                    <th>Estado:</th>
                    <th>Editar</th>
    
                   
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="norma in NormasFiltrados" :key="norma.id">
                   
                    <td>{{ norma.nombre_normas }}</td>
                
                 
                    <td>
                      <button :class="{'btn-success rounded': norma.estado, 'btn-danger rounded': !norma.estado}">
                                          {{ norma.estado ? 'Activado' : 'Desactivado' }}
                      </button>
                    </td>
                    <td>
                      <img
                        src="/iconos/edit.png"
                        alt="Editar"
                        @click="editar(norma.id)"
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




