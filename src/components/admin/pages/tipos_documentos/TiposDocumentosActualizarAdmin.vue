<template>
    <LayoutAdmin :titulo="Sistema">
      <h3>Actualizar Tipo Documento</h3>
  
      <div class="row">
        <div class="col-md-12">
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Formulario</h3>
            </div>
            <form @submit.prevent="actualizarRegistro" class="needs-validation" novalidate>
              <div class="card-body">
                <div class="form-group">
                  <label for="tipo_documento">Tipo Documento:</label>
                  <input v-model="tipo_documento" type="text" id="tipo_documento" class="form-control" required />
                </div>
  
                <div class="form-group">
                  <label for="siglas_codigo">Código Sigla:</label>
                  <input v-model="siglas_codigo" type="text" id="siglas_codigo" class="form-control" required />
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
    name: 'TipoDocumentoActualizar',
    data() {
      return {
        tipo_documento: '',
        siglas_codigo: '',
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
          const response = await axios.get(`${rutaAPI}/api/tipodocumentos/${id}`);
          const registroExistente = response.data;
          this.tipo_documento = registroExistente.tipo_documento;
          this.siglas_codigo = registroExistente.siglas_codigo;
          this.estado = registroExistente.estado;
        } catch (error) {
          console.error('Error al cargar los datos del registro:', error);
        }
      },
      async actualizarRegistro() {
        const id = this.$route.params.id;
        try {
          const response = await axios.put(`${rutaAPI}/api/tipodocumentos/${id}`, {
            tipo_documento: this.tipo_documento,
            siglas_codigo: this.siglas_codigo,
            estado: this.estado,
          });
          console.log('Registro actualizado:', response.data);
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Datos actualizados',
          });
          this.$router.push('/admin/tipodocumentos/list');
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
  