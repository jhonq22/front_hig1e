<template>
    <section class="mt-5">
          <button class="btn btn-danger float-right mr-5" @click="generatePDF">Generar PDF</button>
    <div id="report-content">

      <div class="container">
        <div class="row">
            <div class="col-md-4"> 
                <img  src="/iconos/logo.jpeg" style="width: 70px; height: 70px;" alt="Imagen" class="float-left">
            </div>

            <div class="col-md-5"> 
                <h2 class="text-center">Instituto Nacional de Higiene "Rafael Rangel"</h2>
            </div>
        </div>    
   
    <p class="text-justify font-weight-bold ">Código: {{ codigo_documento }} </p>
    <h4 class="text-justify text-center font-weight-bold">Lista Maestra de Documentos Controlados por Unidad </h4>
    <div class="row">
        <div class="col-md-3"> <!-- "Fecha de Vigencia" -->
           <p class="font-weight-bold">  Asociada: {{ codigo_documento }} </p>
      </div>

        <div class="col-md-6  text-right"> <!-- "Fecha de Vigencia" -->
        <p class="font-weight-bold">Fecha de Vigencia:  {{ fecha_vigencia }}</p>
      </div>

   
    </div>

    <div class="row">
        <div class="col-md-3"> <!-- "Fecha de Vigencia" -->
            <p class="font-weight-bold">Revisión: {{ numero_revision }} </p>
      </div>

        <div class="col-md-6  text-right"> <!-- "Fecha de Vigencia" -->
           <p class="font-weight-bold"> Próxima Revisión: {{ fecha_proxima_revision }}</p>
      </div>

   
    </div>
  
  


    <table class="table table-bordered">
   
      <thead>
        <tr>
          <th colspan="7" class="text-center">LISTA MAESTRA DE DOCUMENTOS</th>
        </tr>
        <tr>
          <th colspan="7" class="text-center">{{ descripcion }}</th>
        </tr>
        <tr>
          <th colspan="7" class="text-justify">Instrucción de Trabajo</th>
        </tr>       
        <tr>
          <th>Item</th>
          <th>Código</th>
          <th>Título</th>
          <th>Revisión</th>
          <th>Fecha</th>
          <th>Norma Asociada</th>
          <th>Ubicación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{{ codigo_documento }}</td>
          <td>{{ descripcion_documento }}</td>
          <td>{{ numero_revision }}</td>
          <td>{{ fecha_registro }}</td>
          <td>{{ nombre_normas }}</td>
          <td>{{ codigo }}</td>
        </tr>
      </tbody>
    </table>
  </div>
    </div>
</section>
  </template>
  

  <script>
  import html2pdf from 'html2pdf.js';
  import axios from 'axios';
  import Swal from 'sweetalert2'
  const rutaAPI = import.meta.env.VITE_APP_RUTA_API;
  
  export default {
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
      fecha_registro: "",
      descripcion: "",
      codigo:"",
      nombre_normas: "",

      
      //combo dependientes
      tiposDocumentos: [],  
      ComboEstatus: [], 
      ComboOrganigramas:[],
    };
  },

    
  mounted() {
    this.cargarDatosRegistro();
 
  },
    methods: {

        async cargarDatosRegistro() {
        const id = this.$route.params.id;
        try {
          const response = await axios.get(`${rutaAPI}/api/documentos/reporte/${id}`);
          const registroExistente = response.data;
          console.log('registroExistente', registroExistente);
          this.organigrama_id = registroExistente.organigrama_id;
          this.tipo_documento_id = registroExistente.tipo_documento_id;
          this.estatus_id = registroExistente.estatus_id;
          this.descripcion_documento = registroExistente.descripcion_documento;
          this.codigo_documento = registroExistente.codigo_documento;
          this.elaborado_por = registroExistente.elaborado_por;
          this.revisado_por = registroExistente.revisado_por;
          this.aprobado_por = registroExistente.aprobado_por;
          this.fecha_vigencia = new Date(registroExistente.fecha_vigencia).toISOString().split('T')[0]
          this.fecha_elaboracion = new Date(registroExistente.fecha_elaboracion).toISOString().split('T')[0]
          this.fecha_revision = new Date(registroExistente.fecha_revision).toISOString().split('T')[0]
          this.fecha_aprobacion =  new Date(registroExistente.fecha_aprobacion).toISOString().split('T')[0]
          this.modelo_documento = registroExistente.modelo_documento;
          this.numero_revision = parseInt(registroExistente.numero_revision) ;
          this.fecha_proxima_revision =new Date(registroExistente.fecha_proxima_revision).toISOString().split('T')[0]
          this.fecha_registro =new Date(registroExistente.fecha_registro).toISOString().split('T')[0]
          this.descripcion = registroExistente.descripcion;
          this.nombre_normas = registroExistente.nombre_normas;
          this.codigo = registroExistente.codigo;
      
        } catch (error) {
          console.error('Error al cargar los datos del registro:', error);
        }
      },


      generatePDF() {
        const content = document.getElementById('report-content'); // El elemento que deseas exportar a PDF
        console.log("Elemento de contenido:", content);

  
        const pdfOptions = {
            margin: 10,
            filename: 'report.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'mm', format: 'a2', orientation: 'portrait' },
            };

  
            html2pdf(content, pdfOptions).outputPdf(pdf => {
                const blob = new Blob([pdf], { type: 'application/pdf' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'report.pdf';
                a.click();
            });
                },
                },
            };
  </script>
  