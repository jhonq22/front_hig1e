<template>
    <LayoutAdmin :titulo="InicioAdmin">
        <h3>Formulario de Usuarios</h3>

        <div class="row">
           <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Actualizar</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="actualizarUsuario" class="needs-validation" novalidate>
                <div class="card-body">
           
                  <div class="form-group">
        <label for="cedula">Cédula:</label>
        <input
          v-model="usuario.cedula"
          type="text"
          id="cedula"
          class="form-control"
          required
        />
        <div class="valid-feedback">Campo válido</div>
        <div class="invalid-feedback">Este campo es requerido</div>
      </div>
      <div class="form-group">
        <label for="nombres">Nombres:</label>
        <input
          v-model="usuario.nombres"
          type="text"
          id="nombres"
          class="form-control"
          required
        />
        <div class="valid-feedback">Campo válido</div>
        <div class="invalid-feedback">Este campo es requerido</div>
      </div>
      <div class="form-group">
        <label for="apellidos">Apellidos:</label>
        <input
          v-model="usuario.apellidos"
          type="text"
          id="apellidos"
          class="form-control"
          required
        />
        <div class="valid-feedback">Campo válido</div>
        <div class="invalid-feedback">Este campo es requerido</div>
      </div>
      <div class="form-group">
        <label for="usuario">Usuario:</label>
        <input
          v-model="usuario.usuario"
          type="text"
          id="usuario"
          class="form-control"
          required
        />
        <div class="valid-feedback">Campo válido</div>
        <div class="invalid-feedback">Este campo es requerido</div>
      </div>
      <div class="form-group">
        <label for="password">Contraseña:</label>
        <input
          v-model="usuario.password"
          type="password"
          id="password"
          class="form-control"
          required
        />
        <div class="valid-feedback">Campo válido</div>
        <div class="invalid-feedback">Este campo es requerido</div>
      </div>
      <div class="form-group">
        <label for="rol">Rol:</label>
        <select v-model="usuario.rol_id" class="form-control" id="rol">
          <option value="1">Admin</option>
          <option value="2">Usuario</option>
        </select>
      </div>
      <div class="form-group">
        <label for="estado">Estado:</label>
        <select v-model="usuario.estado" class="form-control" id="estado">
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
      </div>   
                 
              


              
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Actualizar</button>
                </div>
              </form>
            </div>
            <!-- /.card -->

      

         
     

          </div>
        </div>

    </LayoutAdmin>

</template>


<script>
import LayoutAdmin from '../../template/LayoutAdmin.vue'
import axios from 'axios';
const rutaAPI = import.meta.env.VITE_APP_RUTA_API;


LayoutAdmin
export default {
name: 'UsuariosActualizarAdmin',
data() {
    return {
      cedula: '',
      nombres: '',
      apellidos: '',
      usuario: '',
      password: '',
      rol_id: '', // Valor predeterminado de rol
      estado: '', // Valor predeterminado de estado
    };
  },
  async mounted() {
    // Obtener el ID del usuario de los parámetros de la URL
    const usuarioId = this.$route.params.id;

    // Realizar una solicitud GET para obtener los datos del usuario por su ID
    try {
      const response = await axios.get(`${rutaAPI}/auth/usuarios/${usuarioId}`);
      this.usuario = response.data;
    } catch (error) {
      console.error('Error al obtener los datos del usuario:', error);
    }
  },

  methods: {
    async actualizarUsuario() {
      // Realizar una solicitud PUT para actualizar los datos del usuario
      try {
        await axios.put(`${rutaAPI}/auth/usuarios/${this.usuario.id}`, this.usuario);
        // Manejar la respuesta del servidor, por ejemplo, redirigir a la lista de usuarios
        this.$router.push('/admin/usuarios/list');
      } catch (error) {
        console.error('Error al actualizar el usuario:', error);
      }
    },
  },


components: {
  LayoutAdmin
}
    
}
</script>


