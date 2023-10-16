<template>
    <LayoutAdmin :titulo="Sistema">
      <h3>Actualizar Emisores</h3>
  
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Formulario</h3>
            </div>
            <form @submit.prevent="actualizarRegistro" class="needs-validation" novalidate>
              <div class="card-body">
                <div class="form-group">
                  <label for="nombre_emisor">Nombre Emisor:</label>
                  <input v-model="nombre_emisor" type="text" id="nombre_emisor" class="form-control" required />
                </div>
  
            
                <div class="form-group">
                  <label for="estado">Estado:</label>
                  <select v-model="estado" class="form-control" id="estado">
                    <option value="1">Activo</option>
                    <option value="0">Inactivo</option>
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
    name: 'EmisoresActualizarAdmin',
    data() {
      return {
        nombre_emisor: '',
      
        estado: 1,
      };
    },
    mounted() {
      this.cargarDatosRegistro();
    },
    methods: {
      async cargarDatosRegistro() {
        const id = this.$route.params.id;
        try {
          const response = await axios.get(`${rutaAPI}/api/emisores/${id}`);
          const registroExistente = response.data;
          this.nombre_emisor = registroExistente.nombre_emisor;
          this.estado = registroExistente.estado;
        } catch (error) {
          console.error('Error al cargar los datos del registro:', error);
        }
      },
      async actualizarRegistro() {
        const id = this.$route.params.id;
        try {
          const response = await axios.put(`${rutaAPI}/api/emisores/${id}`, {
            nombre_emisor: this.nombre_emisor,
            estado: this.estado,
          });
          console.log('Registro actualizado:', response.data);
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Datos actualizados',
          });
          this.$router.push('/admin/emisores/list');
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
  