<script>
import LayoutAdmin from '../../template/LayoutAdmin.vue';
import axios from 'axios';
const rutaAPI = import.meta.env.VITE_APP_RUTA_API;


    export default {
    name: 'UsuariosListAdmin',
    data() {
    return {
      usuarios: [],
      filtro: '',
    };
  },
  computed: {
    usuariosFiltrados() {
      return this.usuarios.filter((usuario) => {
        const termino = this.filtro.toLowerCase();
        return (
          usuario.nombres.toLowerCase().includes(termino) ||
          usuario.apellidos.toLowerCase().includes(termino)
        );
      });
    },
  },
  async mounted() {
    // Realiza la solicitud GET a la API de usuarios al cargar el componente
    try {
      const response = await axios.get(`${rutaAPI}/auth/usuarios`);
      this.usuarios = response.data;
    } catch (error) {
      console.error('Error al obtener la lista de usuarios:', error);
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
            <div class="card ">
              <div class="card-header text-white bg-primary">
                <h3 class="card-title">Listado de Usuarios </h3>

                <div class="card-tools">

                  
                  <div class="input-group input-group-sm" style="width: 150px;">
                    
                    <input type="text"  v-model="filtro"   name="table_search" class="form-control float-right"  placeholder="Filtrar por nombre o apellido">

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
                    <th>Cédula</th>
                    <th>Nombres</th>
                    <th>Apellidos</th>
                    <th>Usuario</th>
                    <th>Roles</th>
                    <th>Estado</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr v-for="usuario in usuariosFiltrados" :key="usuario.cedula">
                    <td>{{ usuario.cedula }}</td>
                    <td>{{ usuario.nombres }}</td>
                    <td>{{ usuario.apellidos }}</td>
                    <td>{{ usuario.usuario }}</td>
                    <td>{{ usuario.roles }}</td>
                    <td>{{ usuario.estado ? 'Activo' : 'Inactivo' }}</td>
                    <td>
                      <button @click="editarUsuario(usuario.id)" class="btn btn-primary">Editar</button>
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




