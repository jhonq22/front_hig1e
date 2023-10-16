<template>
    <LayoutAdmin :titulo="Sistema">
      <h3>Actualizar de Información Documentada </h3>
  
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Formulario</h3>
            </div>
            <form @submit.prevent="actualizarRegistro" class="needs-validation" novalidate>
              <div class="card-body">
              
            
                <div class="form-group">
        <label for="estatus_id">Estatus :</label>
        <select v-model="estatus_id" class="form-control" id="ComboEstatu">
          <option value="" disabled>-- Seleccione --</option>
          <option v-for="ComboEstatu in ComboEstatus"  :key="ComboEstatu.id" :value="ComboEstatu.id">
            {{ ComboEstatu.nombre_estatus }}
          </option>
        </select>
     </div>
              </div>
  
              <div class="card-footer">
                <button type="submit" class="btn btn-primary">Actualizar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LayoutAdmin>
  </template>
  
  <script>
  import LayoutAdmin from '../../template/LayoutAdmin.vue';
  import axios from 'axios';
  import Swal from 'sweetalert2';
  const rutaAPI = import.meta.env.VITE_APP_RUTA_API;
  
  export default {
    name: 'DocumentosActualizarAdmin',
    data() {
      return {
        estatus_id: '',
        ComboEstatus: [], 
     
     
      };
    },
    mounted() {
      this.cargarDatosRegistro();
      this.cargarEstatus();
    },
    methods: {
      async cargarDatosRegistro() {
        const id = this.$route.params.id;
        try {
          const response = await axios.get(`${rutaAPI}/api/documentos/${id}`);
          const registroExistente = response.data;
          this.estatus_id = registroExistente.estatus_id;
      
        } catch (error) {
          console.error('Error al cargar los datos del registro:', error);
        }
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

      async actualizarRegistro() {
        const id = this.$route.params.id;
        try {
          const response = await axios.put(`${rutaAPI}/api/documentos/${id}`, {
            estatus_id: this.estatus_id,
           
          });

          const movimientoData = {
            documento_id: id,
            estatu_id: this.estatus_id,
            fecha_registro: new Date(), // Debes ajustar la fecha según tu servidor
           };

        console.log('movimientoData',movimientoData);
    axios.post(`${rutaAPI}/api/movimientos`, movimientoData)
          console.log('Registro actualizado:', response.data);
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Datos actualizados',
          });
          this.$router.push('/admin/documentos/list');
        } catch (error) {
          console.error('Error al actualizar el registro:', error);
        }
      },
    },


    components: {
      LayoutAdmin,
    },
  };
  </script>
  
  <style>
  /* Estilos adicionales si es necesario */
  </style>
  