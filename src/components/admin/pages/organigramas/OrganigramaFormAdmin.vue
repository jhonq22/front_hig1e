<template>
    <LayoutAdmin :titulo="Sistema">
        <h3>Crear Organigrama</h3>

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
        <label for="codigo">Código:</label>
        <input
          v-model="codigo"
          type="text"
          id="codigo"
          class="form-control"
          required
        />
        <div class="valid-feedback">Campo válido</div>
        <div class="invalid-feedback">Este campo es requerido</div>
      </div>

      <div class="form-group">
        <label for="descripcion">Nombre Organigrama :</label>
        <input
          v-model="descripcion"
          type="text"
          id="descripcion"
          class="form-control"
          required
        />
        <div class="valid-feedback">Campo válido</div>
        <div class="invalid-feedback">Este campo es requerido</div>
      </div>

      <div class="form-group">
        <label for="padre">Organigrama Padre :</label>
        <select v-model="padre" class="form-control" id="ComboOrganigrama">
          <option value="" disabled>-- Seleccione --</option>
          <option v-for="ComboOrganigrama in ComboOrganigramas"  :key="ComboOrganigrama.id" :value="ComboOrganigrama.id">
            {{ ComboOrganigrama.descripcion }}
          </option>
        </select>
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
      codigo: '',
      descripcion: '',
      padre: '',
      estado: 1, // Valor predeterminado de estado
      ComboOrganigramas:[],
    };
  },
  mounted() {
     this.cargarOrganigrama();
  },

  methods: {
    async registro() {
      // Realizar la solicitud POST a la ruta de registro
      try {
        const response = await axios.post(`${rutaAPI}/api/organigrama`, {
          codigo: this.codigo,
          descripcion: this.descripcion,
          padre: this.padre,
          estado: this.estado // Convierte el estado en un booleano
        });

        // Manejar la respuesta del servidor aquí, por ejemplo, redirigir al usuario si es exitoso
        console.log('Respuesta del servidor:', response.data);
        Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Datos Guardados',
      })
        this.$router.push('/admin/organigrama/list');

      } catch (error) {
        alert('Error en el Formulario')
        console.error('Error al registrarse:', error);
        
      }
    },


    cargarOrganigrama() {
      // Llamar a la API para obtener los datos de tipo de documentos
      axios.get(`${rutaAPI}/api/organigrama/organigrama`)
        .then((response) => {
          this.ComboOrganigramas = response.data;
        })
        .catch((error) => {
          console.error('Error al cargar los datos:', error);
        });
    },
  },




components: {
  LayoutAdmin
}
    
}
</script>


