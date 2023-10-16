<template>
    <LayoutAdmin :titulo="InicioAdmin">
        <h3>Formulario de Documentos</h3>

        <div class="row">
           <div class="col-md-12">
            <!-- general form elements -->
            <div class="card card-primary">
              <div class="card-header">
                <h3 class="card-title">Guardar Documento</h3>
              </div>
              <!-- /.card-header -->
              <!-- form start -->
              <form @submit.prevent="subirArchivo">
                <div class="card-body">
                  
  
       <div class="form-group">
        <div class="col-md-12">
        <label for="descripcion_documento">Nombre del Documento:</label>
        <input
          v-model="descripcion_documento"
          type="text"
          id="descripcion_documento"
          class="form-control"
          required
        />
        </div>  
       </div>           


                  
  
    <div class="form-group">
      <div class="col-md-12">
        <label for="organigrama_id">Departamento :</label>
        <select v-model="organigrama_id" class="form-control" id="ComboOrganigrama" disabled>
          <option value="" disabled>-- Seleccione --</option>
          <option v-for="ComboOrganigrama in ComboOrganigramas"  :key="ComboOrganigrama.id" :value="ComboOrganigrama.id">
            {{ ComboOrganigrama.descripcion }}
          </option>
        </select>
      </div>
     </div>




    <div class="form-group">
      <div class="col-md-12">
        <label for="tipo_documento_id">Tipo de Documentos :</label>
        <select v-model="tipo_documento_id" class="form-control" disabled @change="seleccionarTipoDocumento" id="tipoDocumento">
          <option value="" disabled>-- Seleccione --</option>
          <option v-for="tipoDocumento in tiposDocumentos"  :key="tipoDocumento.id" :value="tipoDocumento.id">
            {{ tipoDocumento.tipo_documento }}
          </option>
        </select>
      </div>
     </div>




     <div class="form-group">
      <div class="col-md-12">
        <label for="estatus_id">Estatus :</label>
        <select v-model="estatus_id" class="form-control" id="ComboEstatu">
          <option value="" disabled>-- Seleccione --</option>
          <option v-for="ComboEstatu in ComboEstatus"  :key="ComboEstatu.id" :value="ComboEstatu.id">
            {{ ComboEstatu.nombre_estatus }}
          </option>
        </select>
      </div>
     </div>







     <div class="form-group">
      <div class="col-md-12">
        <label for="codigo_documento">Código Documento:</label>
        <input disabled
          v-model="codigo_documento"
          type="text"
          id="codigo_documento"
          class="form-control"
          required
        />
       </div>
      </div>

     
      <div class="form-row mt-4">
      <div class="col-md-6">
        <label for="elaborado_por">Elaborado Por:</label>
        <input
          v-model="elaborado_por"
          type="text"
          id="elaborado_por"
          class="form-control"
          required
        />
        </div>
  

        <div class="col-md-6">
        <label for="fecha_elaboracion">Fecha Elaboración:</label>
        <input
          v-model="fecha_elaboracion"
          type="date"
          id="fecha_elaboracion"
          class="form-control"
          required
        />
        </div>
      </div>   

      <div class="form-row mt-4">
      <div class="col-md-6">
        <label for="revisado_por">Revisado Por:</label>
        <input
          v-model="revisado_por"
          type="text"
          id="revisado_por"
          class="form-control"
          required
        />
        </div>
  

        <div class="col-md-6">
          <label for="fecha_revision">Fecha Revisión:</label>
        <input
          v-model="fecha_revision"
          type="date"
          id="fecha_revision"
          class="form-control"
          required
        />
        </div>
      </div>  

      <div class="form-row mt-4">
      <div class="col-md-6">
        <label for="aprobado_por">Aprobado Por:</label>
        <input
          v-model="aprobado_por"
          type="text"
          id="aprobado_por"
          class="form-control"
          required
        />
        </div>
  

        <div class="col-md-6">
          <label for="fecha_aprobacion">Fecha Aprobación:</label>
        <input
          v-model="fecha_aprobacion"
          type="date"
          id="fecha_aprobacion"
          class="form-control"
          required
        />
        </div>
      </div>  

      <div class="form-row mt-4">
      <div class="col-md-6">
        <label for="fecha_vigencia">Fecha Vigencia:</label>
        <input
          v-model="fecha_vigencia"
          type="date"
          id="fecha_vigencia"
          class="form-control"
          required
        />
        </div>
  

        <div class="col-md-6">
          <label for="fecha_proxima_revision">Fecha Proxima Revisión:</label>
        <input
          v-model="fecha_proxima_revision"
          type="date"
          id="fecha_proxima_revision"
          class="form-control"
          required
        />
        </div>
      </div> 







  
    <div class="form-row mt-5">
      <div class="col-md-6">
        <label for="modelo_documento">Visibilidad Documento:</label>
        <select v-model="modelo_documento" class="form-control" id="modelo_documento">
          <option value="publico">Publico</option>
          <option value="confidencial">Confidencial</option>
        </select>
        </div>


        <div class="col-md-6">
        <label for="numero_revision">Revisión:</label>
        <input
          v-model="numero_revision"
          type="text"
          id="numero_revision"
          class="form-control"
          required
        />
       </div>
    </div>  





      <div class="form-group mt-5">
        <label for="archivo">Seleccionar Archivo:</label>
        <input type="file" name="archivo" ref="archivoInput" @change="seleccionarArchivo" />

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
                  <button type="submit" @click="actualizarDocumento" class="btn btn-primary">Actualizar Archivo</button>
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
name: 'DocumentosFormAdmin',
data() {
    return {
      organigrama_id: "",
      tipo_documento_id: "",
      estatus_id: "",
      nombre_documento: "",
      codigo_documento:  "",
      archivoSeleccionado: null,
      cargandoArchivo: false, // Controla la visibilidad de la barra de progreso
      progresoCarga: 0, // Almacena el progreso de la carga
      porcentajeCarga: 0, // Almacena el porcentaje de la carga
      elaborado_por:  "",
      revisado_por:  "",
      aprobado_por:  "",
      fecha_vigencia:  "",
      fecha_elaboracion:  "",
      fecha_revision:  "",
      fecha_aprobacion:  "",
      fecha_proxima_revision:  "",
      modelo_documento:  "",
      numero_revision: "0",
      
      //combo dependientes
      tiposDocumentos: [],  
      ComboEstatus: [], 
      ComboOrganigramas:[],
    };
  },

  mounted() {
    this.cargarDatosRegistro();
    this.cargarTiposDocumentos();
    this.cargarEstatus();
    this.cargarOrganigrama();
  },

 methods: {
    seleccionarArchivo(event) {
   console.log('archivo', event.target.files[0]); // Verifica si el archivo se selecciona correctamente
   this.archivoSeleccionado = event.target.files[0];
},

    async cargarDatosRegistro() {
        const id = this.$route.params.id;

        const fechaISO = new Date("2023-10-16T04:00:00.000Z");
        const formatoDeseado = fechaISO.toISOString().split('T')[0];
        
        
        
        
        try {
          const response = await axios.get(`${rutaAPI}/api/documentos/${id}`);
          const registroExistente = response.data;
          
          const fechaVigencia = new Date(registroExistente.fecha_vigencia);
          const formatoVigencia = fechaVigencia.toISOString().split('T')[0];
          
          const fechaElaboracion = new Date(registroExistente.fecha_elaboracion);
          const formatoElaboracion = fechaElaboracion.toISOString().split('T')[0];   

          const fechaRevision = new Date(registroExistente.fecha_revision);
          const formatoRevision = fechaRevision.toISOString().split('T')[0];   

          const fechaAprobacion= new Date(registroExistente.fecha_aprobacion);
          const formatoAprobacion= fechaAprobacion.toISOString().split('T')[0];   

          const fechaProxima = new Date(registroExistente.fecha_proxima_revision);
          const formatoProxima = fechaProxima.toISOString().split('T')[0];   











          this.organigrama_id = registroExistente.organigrama_id;
          this.tipo_documento_id = registroExistente.tipo_documento_id;
          this.estatus_id = registroExistente.estatus_id;
          this.descripcion_documento = registroExistente.descripcion_documento;
          this.codigo_documento = registroExistente.codigo_documento;
          this.elaborado_por = registroExistente.elaborado_por;
          this.revisado_por = registroExistente.revisado_por;
          this.aprobado_por = registroExistente.aprobado_por;
          this.fecha_vigencia = formatoVigencia;
          this.fecha_elaboracion = formatoElaboracion;
          this.fecha_revision = formatoRevision ;
          this.fecha_aprobacion = formatoAprobacion;
          this.modelo_documento = registroExistente.modelo_documento;
          this.numero_revision = parseInt(registroExistente.numero_revision) + 1;
          this.fecha_proxima_revision =formatoProxima;
      
        } catch (error) {
          console.error('Error al cargar los datos del registro:', error);
        }
      },


  actualizarDocumento() {
    const id = this.$route.params.id;
      const formData = new FormData();
  formData.append('id', id); // Agrega el id al formData
  formData.append('estatus_id', this.estatus_id);
  formData.append('nombre_documento', this.nombre_documento);
  formData.append('descripcion_documento', this.descripcion_documento);
  formData.append('elaborado_por', this.elaborado_por);
  formData.append('revisado_por', this.revisado_por);
  formData.append('aprobado_por', this.aprobado_por);
  formData.append('fecha_vigencia', this.fecha_vigencia);
  formData.append('fecha_elaboracion', this.fecha_elaboracion);
  formData.append('fecha_revision', this.fecha_revision);
  formData.append('fecha_aprobacion', this.fecha_aprobacion);
  formData.append('fecha_proxima_revision', this.fecha_proxima_revision);
  formData.append('modelo_documento', this.modelo_documento);
  formData.append('numero_revision', this.numero_revision);
      //formData.append('archivo', this.archivoSeleccionado);
      // Otras asignaciones para los demás campos

      if (this.archivoSeleccionado) {
        formData.append('archivo', this.archivoSeleccionado);
        //alert("si entra")
      }

   
      axios
        .put(`${rutaAPI}/api/documentos/actualizar-archivo/${id}`, formData)
        .then((response) => {
            const movimientoData = {
            documento_id: id,
            estatu_id: this.estatus_id,
            fecha_registro: new Date(), // Debes ajustar la fecha según tu servidor
           };

        console.log('movimientoData',movimientoData);
        axios.post(`${rutaAPI}/api/movimientos`, movimientoData)
        console.log('Registro actualizado:', response.data);

            //console.log("respuesta",response);
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Documento actualizado correctamente',
          });
          this.$router.push('/admin/documentos/list');
        })
        .catch((error) => {
          console.error('Error al actualizar el documento:', error);
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Error al actualizar el documento',
          });
        });
    },
  


    // ...
  
    

  //Combo dependientes //
  cargarTiposDocumentos() {
      // Llamar a la API para obtener los datos de tipo de documentos
      axios.get(`${rutaAPI}/api/tipodocumentos`)
        .then((response) => {
          this.tiposDocumentos = response.data;
          console.log(this.tiposDocumentos);
        })
        .catch((error) => {
          console.error('Error al cargar los datos:', error);
        });
    },



    cargarEstatus() {
      // Llamar a la API para obtener los datos de tipo de documentos
      axios.get(`${rutaAPI}/api/estatus`)
        .then((response) => {
          this.ComboEstatus = response.data;
        })
        .catch((error) => {
          console.error('Error al cargar los datos:', error);
        });
    },

    cargarOrganigrama() {
      // Llamar a la API para obtener los datos de tipo de documentos
      axios.get(`${rutaAPI}/api/organigrama/organigrama`)
        .then((response) => {
          this.ComboOrganigramas = response.data;
          //console.log('combo', this.ComboOrganigramas );
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


