<template>
    <LayoutAdmin :titulo="InicioAdmin">
     <h3>Registrar Normas Asociadas</h3>

     <div class="row">
        <div class="col-md-12">
         <!-- general form elements -->
         <div class="card card-primary">
           <div class="card-header">
             <h3 class="card-title">Formulario</h3>
           </div>
           <!-- /.card-header -->
           <!-- form start -->
           <form @submit.prevent="registro" class="needs-validation">
             <div class="card-body">
        
    <div class="form-group">
     <label for="nombre_normas">Nombre Normas Asociadas:</label>
     <input
       v-model="nombre_normas"
       type="text"
       id="nombre_normas"
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
name: 'NormasFormAdmin',
data() {
 return {
   nombre_normas: '',
   estado: 1, // Valor predeterminado de estado

 };
},
mounted() {

},

methods: {
 async registro() {
      // Realizar la solicitud POST a la ruta de registro
   try {
     const response = await axios.post(`${rutaAPI}/api/normas`, {
       nombre_normas: this.nombre_normas,
       estado: this.estado  // Convierte el estado en un booleano
     });

     // Manejar la respuesta del servidor aquí, por ejemplo, redirigir al usuario si es exitoso
     console.log('Respuesta del servidor:', response.data);
     Swal.fire({
     icon: 'success',
     title: 'Éxito',
     text: 'Datos Guardados',
   })
     this.$router.push('/admin/normas/list');

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


