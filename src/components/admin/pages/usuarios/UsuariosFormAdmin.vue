<template>
    <LayoutAdmin :titulo="UsuariosForm">
        <h3>Formulario de Usuarios</h3>

        <div class="row">
           <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Formulario</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="registro" class="needs-validation" novalidate>
                <div class="card-body">
           
                  <div class="form-group">
        <label for="cedula">Cédula:</label>
        <input
          v-model="cedula"
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
          v-model="nombres"
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
          v-model="apellidos"
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
          v-model="usuario"
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
          v-model="password"
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
        <select v-model="rol_id" class="form-control" id="rol">
          <option value="1">Admin</option>
          <option value="2">Usuario</option>
        </select>
      </div>
      <div class="form-group">
        <label for="estado">Estado:</label>
        <select v-model="estado" class="form-control" id="estado">
          <option value="true">Activo</option>
          <option value="false">Inactivo</option>
        </select>
      </div>   
                 
              


              
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Registrarse</button>
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
name: 'UsuariosFormAdmin',
data() {
    return {
      cedula: '',
      nombres: '',
      apellidos: '',
      usuario: '',
      password: '',
      rol_id: '1', // Valor predeterminado de rol
      estado: 'true', // Valor predeterminado de estado
    };
  },
  methods: {
    async registro() {
      // Realizar la solicitud POST a la ruta de registro
      try {
        const response = await axios.post(`${rutaAPI}/auth/register`, {
          cedula: this.cedula,
          nombres: this.nombres,
          apellidos: this.apellidos,
          usuario: this.usuario,
          password: this.password,
          rol_id: this.rol_id,
          estado: this.estado === 'true', // Convierte el estado en un booleano
        });

        // Manejar la respuesta del servidor aquí, por ejemplo, redirigir al usuario si es exitoso
        console.log('Respuesta del servidor:', response.data);
        alert('Datos guardados')
        this.$router.push('/admin/usuarios/list');

      } catch (error) {
        // Manejar el error del servidor aquí
        console.error('Error al registrarse:', error);
        alert('Error al registrarse')
      }
    },
  },


components: {
  LayoutAdmin
}
    
}
</script>


