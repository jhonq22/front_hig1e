<template>
    <LayoutAdmin :titulo="Sistema">
        <h3>Crear Tipo Documentos</h3>

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
        <label for="tipo_documento">Tipo Documento:</label>
        <input
          v-model="tipo_documento"
          type="text"
          id="tipo_documento"
          class="form-control"
          required
        />
        </div>

        <div class="form-group">
        <label for="siglas_codigo">Código Sigla:</label>
        <input
          v-model="siglas_codigo"
          type="text"
          id="siglas_codigo"
          class="form-control"
          required
        />

        </div>
        

           
      <div class="form-group">
        <label for="estado">Estado:</label>
        <select v-model="estado" class="form-control" id="estado">
          <option value="1">Activo</option>
          <option value="0">Inactivo</option>
        </select>
      </div>   
  
      </div>

   
       
     
    
                 
              


              
         
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" class="btn btn-primary">Agregar</button>
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
import Swal from 'sweetalert2'
const rutaAPI = import.meta.env.VITE_APP_RUTA_API;



LayoutAdmin
export default {
name: 'OrganigramaFormAdmin',
data() {
    return {
      tipo_documento: '',
      siglas_codigo: '',
      estado: 1, // Valor predeterminado de estado
  
    };
  },
  mounted() {

  },

  methods: {
    async registro() {
      // Realizar la solicitud POST a la ruta de registro
      try {
        const response = await axios.post(`${rutaAPI}/api/tipodocumentos`, {
          tipo_documento: this.tipo_documento,
          siglas_codigo: this.siglas_codigo,
          estado: this.estado  // Convierte el estado en un booleano
        });

        // Manejar la respuesta del servidor aquí, por ejemplo, redirigir al usuario si es exitoso
        console.log('Respuesta del servidor:', response.data);
        Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Datos Guardados',
      })
        this.$router.push('/admin/tipodocumentos/list');

      } catch (error) {
        
        console.error('Error al registrarse:', error);
        
      }
    },
  },




components: {
  LayoutAdmin
}
    
}
</script>


