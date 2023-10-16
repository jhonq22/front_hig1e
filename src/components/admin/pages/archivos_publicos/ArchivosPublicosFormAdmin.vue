<template>
    <LayoutAdmin :titulo="InicioAdmin">
        <h3>Registro de Documentos Externos </h3>

        <div class="row">
           <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Agregar de Documentos Externos</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="subirArchivo">
                <div class="card-body">
                 






      <div class="form-group">
        <label for="descripcion_documento">Título:</label>
        <input
          v-model="descripcion_documento"
          type="text"
          id="descripcion_documento"
          class="form-control"
          required
        />
     
      </div>   


      <div class="form-group">
        <label for="codigo_documento">Código:</label>
        <input
          v-model="codigo_documento"
          type="text"
          id="codigo_documento"
          class="form-control"
          required
        />
     
      </div>

      <div class="form-group">
      <div class="col-md-12">
        <label for="emisor_id">Emisor :</label>
        <select v-model="emisor_id" class="form-control" id="emisor">
          <option value="" disabled>-- Seleccione --</option>
          <option v-for="emisor in ComboEmisores"  :key="emisor.id" :value="emisor.id">
            {{ emisor.nombre_emisor }}
          </option>
        </select>
      </div>
     </div>

     <div class="form-group">
        <label for="clave_accesso">Clave Acceso:</label>
        <input
          v-model="clave_accesso"
          type="text"
          id="clave_accesso"
          class="form-control"
          
        />
     
      </div>

      <div class="form-group">
        <label for="clave_accesso">Observación:</label>
        <textarea
      id="observacion"
      class="form-control"
      v-model="observacion"
      rows="4"
      placeholder="Escribe tu observación aquí..."
    ></textarea>
     
      </div>


      <div class="form-group mt-5">
        <label for="archivo">Seleccionar Archivo:</label>
        <input type="file" ref="archivoInput" @change.once="seleccionarArchivo" />
      </div>



    <!-- Agrega la barra de progreso (inicialmente oculta) -->
    <div class="form-group" v-show="cargandoArchivo">
      <label>Progreso de Carga:</label>
      <progress class="form-control" :value="progresoCarga" max="100"></progress>
      <p>{{ porcentajeCarga }}%</p> <!-- Muestra el porcentaje dinámico -->
    </div>




                
                 
                 
                </div>
                <!-- /.card-body -->

                <div class="card-footer">
                  <button type="submit" @click="iniciarCargaArchivo" class="btn btn-primary">Guardar Archivo</button>
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
import axios from 'axios'
import Swal from 'sweetalert2'
const rutaAPI = import.meta.env.VITE_APP_RUTA_API;


export default {
name: 'ArchivosPublicosFormAdmin',
data() {
    return {

      estatus_id: 1,
         nombre_documento: "",
      codigo_documento:  "EXT-00001",
      emisor_id: 0,
      clave_accesso: '',
      observacion: '',
      archivoSeleccionado: null,
      cargandoArchivo: false, // Controla la visibilidad de la barra de progreso
      progresoCarga: 0, // Almacena el progreso de la carga
      porcentajeCarga: 0, // Almacena el porcentaje de la carga
      
      //combo dependientes
   
      ComboEmisores:[],
    };
  },

  mounted() {
  
    this.cargarEmisores()
  },

 methods: {
   seleccionarArchivo(event) {
      this.archivoSeleccionado = event.target.files[0];
    },

    iniciarCargaArchivo() {
      if (!this.archivoSeleccionado) {
        alert('Por favor, seleccione un archivo antes de subirlo.');
        return;
      }
      
      // Mostrar la barra de progreso y ocultar el botón de carga
      this.cargandoArchivo = true;

      const formData = new FormData();
 
      formData.append('estatus_id', this.estatus_id);
      formData.append('nombre_documento', this.nombre_documento);
      formData.append('descripcion_documento', this.descripcion_documento);
      formData.append('codigo_documento', this.codigo_documento);
      formData.append('emisor_id', this.emisor_id);
      formData.append('clave_accesso', this.clave_accesso);
      formData.append('observacion', this.observacion);
      formData.append('archivo', this.archivoSeleccionado);



      console.log('formData', formData);
      // Configura la solicitud para realizar un seguimiento del progreso
      axios.post(`${rutaAPI}/api/documentos/publicos/subir-archivo`, formData, {
        onUploadProgress: (progressEvent) => {
          // Calcula el progreso y actualiza las variables
          this.progresoCarga = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          this.porcentajeCarga = this.progresoCarga;
        },
      })
      .then(response => {
        // Manejar la respuesta del servidor
        Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Datos Guardados',
      });
     
        this.cargandoArchivo = false; // Ocultar la barra de progreso cuando se complete la carga
        this.$router.push('/admin/archivos/publicos/list');
      })
      .catch(error => {
        console.error('Error al subir el archivo:', error);
        this.cargandoArchivo = false; // Ocultar la barra de progreso en caso de error
      });
    },
   // ...


   cargarEmisores() {
      // Llamar a la API para obtener los datos de tipo de documentos
      axios.get(`${rutaAPI}/api/emisores`)
        .then((response) => {
          this.ComboEmisores = response.data;
     
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


