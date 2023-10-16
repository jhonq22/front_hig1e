<template >
    
   <!-- Main Sidebar Container -->
<aside class="main-sidebar sidebar-dark-primary elevation-4">
  <!-- Brand Logo -->
  <a href="#" class="brand-link">
    <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">
    <span class="brand-text font-weight-light">Menu</span>
  </a>

  <!-- Sidebar -->
  <div class="sidebar">
    <!-- Sidebar user panel (optional) -->
    <div class="user-panel mt-3 pb-3 mb-3 d-flex">
      <div class="image">
        <img src="/dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
      </div>
      <div class="info">
        <a href="#" class="d-block">Administrador</a>
      </div>
    </div>

    <!-- SidebarSearch Form -->
  

    <!-- Sidebar Menu -->
    <nav class="mt-2">
      <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

    
    
    
     

        <li class="nav-header">Aplicación</li>
      
            
        <li class="nav-item">
            <router-link to="/admin/inicio"  class="nav-link">
                <i class="fas fa-circle nav-icon"></i>
                <p>Inicio</p>
               </router-link>
          </li>
          <li class="nav-divider"></li>
          
          
          
          
          <li
        class="nav-item"
        :class="{ 'nav-item menu-is-opening menu-open': SubMenuOpenEstatus }"
        @click="toggleEstatus"
      >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Estatus 
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <router-link to="/admin/estatus/list"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listado Estatus</p>
              </router-link>
              </li>
              <li class="nav-item">
               <router-link to="/admin/estatus/form"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Agregar Estatus</p>
               </router-link>
              </li>
             
            
            </ul>
          </li>
          <li class="nav-divider"></li>
          <li
        class="nav-item"
        :class="{ 'nav-item menu-is-opening menu-open': SubMenuOpenNormas}"
        @click="toggleNormas"
      >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Normas Asociadas 
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <router-link to="/admin/normas/list"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listado</p>
              </router-link>
              </li>
              <li class="nav-item">
               <router-link to="/admin/normas/form"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Agregar</p>
               </router-link>
              </li>
             
            
            </ul>
          </li>
        
      


          <li class="nav-divider"></li>
        <li
        class="nav-item"
        :class="{ 'nav-item menu-is-opening menu-open': SubMenuOpenTipoDocumentos }"
        @click="toggleTipoDocumentos"
      >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Tipo Documentos 
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <router-link to="/admin/tipodocumentos/list"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listado Tipo Documentos</p>
              </router-link>
              </li>
              <li class="nav-item">
               <router-link to="/admin/tipodocumentos/form"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Agregar Tipo Documentos</p>
               </router-link>
              </li>
             
            
            </ul>
          </li>
          <li class="nav-divider"></li>
          <!-- Organigrama -->
          <li
        class="nav-item"
        :class="{ 'nav-item menu-is-opening menu-open': SubMenuOpenOrganigramas }"
        @click="toggleSubMenuOrganigramas"
      >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Organigrama 
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <router-link to="/admin/organigrama/list"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listado Organigrama</p>
              </router-link>
              </li>
              <li class="nav-item">
               <router-link to="/admin/organigrama/form"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Agregar Organigrama</p>
               </router-link>
              </li>
             
            
            </ul>
          </li>
          <li class="nav-divider"></li>

      



          <li
        class="nav-item"
        :class="{ 'nav-item menu-is-opening menu-open': SubMenuOpenDocumentos }"
        @click="toggleSubMenuDocumentos"
      >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Documentos
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">

              




              <li class="nav-item">
              <router-link to="/admin/documentos/list"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listado Documentos</p>
              </router-link>
              </li>
              <li class="nav-item">
               <router-link to="/admin/documentos/form"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Agregar Documentos</p>
               </router-link>
              </li>
             
            
            </ul>
          </li>
          <li class="nav-divider"></li>
          <li
        class="nav-item"
        :class="{ 'nav-item menu-is-opening menu-open': SubMenuOpenArchivosPublicos }"
        @click="toggleSubMenuArchivosPublicos"
      >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-copy"></i>
              <p>
                Documentos Externos
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <router-link to="/admin/archivos/publicos/list"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listado Documentos Externos</p>
              </router-link>
              </li>
              <li class="nav-item">
               <router-link to="/admin/archivos/publicos/form"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Agregar Documentos Externos</p>
               </router-link>
              </li>
             
            
            </ul>
          </li>
          <li class="nav-divider"></li>


          <li
        class="nav-item"
        :class="{ 'nav-item menu-is-opening menu-open': SubMenuOpenEmisores }"
        @click="toggleEmisores"
      >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-table"></i>
              <p>
                Emisores 
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <router-link to="/admin/emisores/list"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listado Emisores</p>
              </router-link>
              </li>
              <li class="nav-item">
               <router-link to="/admin/emisores/form"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Agregar Emisores</p>
               </router-link>
              </li>
             
            
            </ul>
          </li>
          <li class="nav-divider"></li>

          <li class="nav-header">Seguridad</li>
     

          <li
        class="nav-item"
        :class="{ 'nav-item menu-is-opening menu-open': SubMenuOpenUsuarios  }"
        @click="toggleSubMenuUsuarios"
      >
            <a href="#" class="nav-link">
              <i class="nav-icon fas fas fa-th"></i>
              <p>
                Usuarios
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
              <router-link to="/admin/usuarios/list"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Listado Usuarios</p>
              </router-link>
              </li>
              <li class="nav-item">
               <router-link to="/admin/usuarios/form"  class="nav-link">
                <i class="far fa-circle nav-icon"></i>
                <p>Agregar Usuarios</p>
               </router-link>
              </li>
             
            
            </ul>
          </li>
        
          <li class="nav-divider"></li>
          <li class="nav-item">
            <router-link to="/admin/login"  class="nav-link">
                <i class="fas fa-circle nav-icon"></i>
                <p>Cerrar Sesión</p>
               </router-link>
          </li>
    
      
      
       
   
   
      
      </ul>
    </nav>
    <!-- /.sidebar-menu -->
  </div>
  <!-- /.sidebar -->
</aside>



</template>
<script>
export default {
  name: 'MenuAdmin',
  data() {
    return {
      SubMenuOpenUsuarios: false,
      SubMenuOpenDocumentos: false,
      SubMenuOpenOrganigramas: false,
      SubMenuOpenArchivosPublicos: false,
      SubMenuOpenTipoDocumentos: false,
      SubMenuOpenEstatus: false,
      SubMenuOpenEmisores: false,
      SubMenuOpenNormas: false, 
    };
  },
  methods: {
    toggleSubMenuUsuarios() {this.SubMenuOpenUsuarios = !this.SubMenuOpenUsuarios},
    toggleSubMenuDocumentos() {this.SubMenuOpenDocumentos = !this.SubMenuOpenDocumentos},
    toggleSubMenuOrganigramas() {this.SubMenuOpenOrganigramas = !this.SubMenuOpenOrganigramas},
    toggleSubMenuArchivosPublicos() {this.SubMenuOpenArchivosPublicos = !this.SubMenuOpenArchivosPublicos},
    toggleTipoDocumentos() {this.SubMenuOpenTipoDocumentos = !this.SubMenuOpenTipoDocumentos},
    toggleEstatus() {this.SubMenuOpenEstatus = !this.SubMenuOpenEstatus},
    toggleEmisores() {this.SubMenuOpenEmisores = !this.SubMenuOpenEmisores},
    toggleNormas() {this.SubMenuOpenNormas = !this.SubMenuOpenNormas},
  }
    
}
</script>


<style scoped>
/* CSS personalizado para la línea divisoria */
.nav-divider {
  border-top: 1px solid #ccc; /* Puedes ajustar el color y el estilo de la línea según tus preferencias */
  margin: 10px 0; /* Ajusta el espaciado vertical según tus preferencias */
}

</style>