<template>
    <LayoutAdmin :titulo="Sistema">
      <h3>Editar Organigrama</h3>
  
      <div class="row">
        <div class="col-md-12">
          <!-- general form elements -->
          <div class="card card-primary">
            <div class="card-header">
              <h3 class="card-title">Formulario</h3>
            </div>
            <!-- /.card-header -->
            <!-- form start -->
            <form @submit.prevent="actualizarRegistro" class="needs-validation" novalidate>
              <div class="card-body">
                <div class="form-group">
                  <label for="codigo">Código:</label>
                  <input v-model="codigo" type="text" id="codigo" class="form-control" required />
                  <div class="valid-feedback">Campo válido</div>
                  <div class="invalid-feedback">Este campo es requerido</div>
                </div>
  
                <div class="form-group">
                  <label for="descripcion">Nombre Organigrama :</label>
                  <input v-model="descripcion" type="text" id="descripcion" class="form-control" required />
                  <div class="valid-feedback">Campo válido</div>
                  <div class="invalid-feedback">Este campo es requerido</div>
                </div>
  
                <div class="form-group">
                  <label for="padre">Organigrama Padre :</label>
                  <select v-model="padre" class="form-control" id="ComboOrganigrama">
                    <option value="" disabled>-- Seleccione --</option>
                    <option v-for="ComboOrganigrama in ComboOrganigramas" :key="ComboOrganigrama.id" :value="ComboOrganigrama.id">
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
                <button type="submit" class="btn btn-primary">Actualizar</button>
              </div>
            </form>
          </div>
          <!-- /.card -->
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
    name: 'EditarOrganigrama',
    data() {
      return {
        codigo: '',
        descripcion: '',
        padre: '',
        estado: 1,
        ComboOrganigramas: [],
      };
    },
    mounted() {
      this.cargarOrganigrama();
      this.cargarDatosRegistro();
    },
    methods: {
      async cargarDatosRegistro() {
        const id = this.$route.params.id;
        try {
          const response = await axios.get(`${rutaAPI}/api/organigrama/organigrama/${id}`);
          const registroExistente = response.data;
          this.codigo = registroExistente.codigo;
          this.descripcion = registroExistente.descripcion;
          this.padre = registroExistente.padre;
          this.estado = registroExistente.estado;
        } catch (error) {
          console.error('Error al cargar los datos del registro:', error);
        }
      },
      async actualizarRegistro() {
        const id = this.$route.params.id;
        try {
          const response = await axios.put(`${rutaAPI}/api/organigrama/organigrama/${id}`, {
            codigo: this.codigo,
            descripcion: this.descripcion,
            padre: this.padre,
            estado: this.estado,
          });
          console.log('Registro actualizado:', response.data);
          Swal.fire({
            icon: 'success',
            title: 'Éxito',
            text: 'Datos actualizados',
          });
          this.$router.push('/admin/organigrama/list');
        } catch (error) {
          console.error('Error al actualizar el registro:', error);
        }
      },
      cargarOrganigrama() {
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
      LayoutAdmin,
    },
  };
  </script>
  
  <style>
  /* Estilos adicionales si es necesario */
  </style>
  