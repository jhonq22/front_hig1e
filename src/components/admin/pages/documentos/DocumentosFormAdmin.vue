<template>
    <LayoutAdmin :titulo="InicioAdmin">
        <h3>Registro de Información Documentada </h3>

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
        <select v-model="organigrama_id" class="form-control" id="ComboOrganigrama">
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
        <select v-model="tipo_documento_id" class="form-control" @change="seleccionarTipoDocumento" id="tipoDocumento">
          <option value="" disabled>-- Seleccione --</option>
          <option v-for="tipoDocumento in tiposDocumentos"  :key="tipoDocumento.id" :value="tipoDocumento.id">
            {{ tipoDocumento.tipo_documento }}
          </option>
        </select>
      </div>
     </div>

     <div class="form-group">
      <div class="col-md-12">
        <label for="norma_id">Normas Asociadas :</label>
        <select v-model="norma_id" class="form-control" id="ComboOrnorma">
          <option value="" disabled>-- Seleccione --</option>
          <option v-for="ComboOrnorma in ComboOrnormas"  :key="ComboOrnorma.id" :value="ComboOrnorma.id">
            {{ ComboOrnorma.nombre_normas }}
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
        <input
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
import axios from 'axios';
import Swal from 'sweetalert2'
const rutaAPI = import.meta.env.VITE_APP_RUTA_API;



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
      norma_id : "",
      
      //combo dependientes
      tiposDocumentos: [],  
      ComboEstatus: [], 
      ComboOrganigramas:[],
      ComboOrnormas :[],
    };
  },

  mounted() {
    this.cargarTiposDocumentos();
    this.cargarEstatus();
    this.cargarOrganigrama();
    this.cargarNormas();
  },

 methods: {
   seleccionarArchivo(event) {
      this.archivoSeleccionado = event.target.files[0];
    },

    seleccionarTipoDocumento() {
    // Buscar el objeto seleccionado en tiposDocumentos
    const tipoDocumentoSeleccionado = this.tiposDocumentos.find(
      tipoDocumento => tipoDocumento.id === this.tipo_documento_id
    );

    const tipoDepartamentoSeleccionado = this.ComboOrganigramas.find(
      ComboOrganigramas => ComboOrganigramas.id === this.organigrama_id
      );

      const tipoDepartamentoSeleccionadoPadre = this.ComboOrganigramas.find(
      ComboOrganigramas => ComboOrganigramas.id === tipoDepartamentoSeleccionado.padre
      );

      const valorPorDefecto = tipoDepartamentoSeleccionadoPadre ? tipoDepartamentoSeleccionadoPadre.codigo : tipoDepartamentoSeleccionado.codigo;

   
    // Asignar el valor de tipo_documento al código_documento
    if (tipoDocumentoSeleccionado) {
      this.codigo_documento = tipoDocumentoSeleccionado.siglas_codigo + '-' +  valorPorDefecto   + tipoDepartamentoSeleccionado.codigo + '-' +"001";
      //console.log('padre22', tipoDepartamentoSeleccionadoPadre.codigo);
      //console.log("departamento", tipoDepartamentoSeleccionado)
    } else {
      // Manejar el caso en el que no se encuentra el tipo de documento seleccionado
      this.codigo_documento = ''; // Otra acción a realizar
    }
  },

  iniciarCargaArchivo() {
  if (!this.archivoSeleccionado) {
    alert('Por favor, seleccione un archivo antes de subirlo.');
    return;
  }

  // Mostrar la barra de progreso y ocultar el botón de carga
  this.cargandoArchivo = true;

  const formData = new FormData();
  formData.append('organigrama_id', this.organigrama_id);
  formData.append('tipo_documento_id', this.tipo_documento_id);
  formData.append('estatus_id', this.estatus_id);
  formData.append('nombre_documento', this.nombre_documento);
  formData.append('descripcion_documento', this.descripcion_documento);
  formData.append('codigo_documento', this.codigo_documento);
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
  formData.append('norma_id', this.norma_id);
  formData.append('archivo', this.archivoSeleccionado);

  
  // Primera llamada POST para guardar el archivo
  axios.post(`${rutaAPI}/api/documentos/subir-archivo`, formData, {
    onUploadProgress: (progressEvent) => {
      // Calcula el progreso y actualiza las variables
      this.progresoCarga = Math.round((progressEvent.loaded / progressEvent.total) * 100);
      this.porcentajeCarga = this.progresoCarga;
    },
  })
  .then(response => {
    // Obtener el ID generado al guardar el archivo
    console.log('Respuesta de la primera llamada POST:', response);
    const documentoId = response.data.documento.id;

    // Segunda llamada POST para guardar en api/movimientos
    const movimientoData = {
      documento_id: documentoId,
      estatu_id: this.estatus_id,
      fecha_registro: new Date(), // Debes ajustar la fecha según tu servidor
    };

    console.log('movimientoData',movimientoData);
    axios.post(`${rutaAPI}/api/movimientos`, movimientoData)
    .then(movimientoResponse => {
      // Manejar la respuesta del servidor para api/movimientos
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Datos Guardados',
      });
      this.$router.push('/admin/documentos/list');
      this.cargandoArchivo = false; // Ocultar la barra de progreso cuando se complete la carga
    })
    .catch(movimientoError => {
      alert('Error al guardar el movimiento');
      console.error('Error al guardar el movimiento:', movimientoError);
      this.cargandoArchivo = false; // Ocultar la barra de progreso en caso de error
    });
  })
  .catch(error => {
    alert('Error al subir el archivo');
    console.error('Error al subir el archivo:', error);
    this.cargandoArchivo = false; // Ocultar la barra de progreso en caso de error
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

    cargarNormas() {
      // Llamar a la API para obtener los datos de tipo de documentos
      axios.get(`${rutaAPI}/api/normas`)
        .then((response) => {
          this.ComboOrnormas = response.data;
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


