<template lang="">

<body :class="sidebarOpen ? 'hold-transition sidebar-mini sidebar-open layout-fixed' 
: 'hold-transition sidebar-mini sidebar-closed sidebar-collapse layout-fixed'">

    <div class="wrapper">


            <nav class="main-header navbar navbar-expand navbar-white navbar-light">
          <!-- Left navbar links -->
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" data-widget="pushmenu" @click="toggleSidebar" role="button"><i class="fas fa-bars"></i></a>
            </li>
        </ul>
      </nav>

<MenuAdmin/>

<!-- Content Wrapper. Contains page content -->
<div class="content-wrapper">
  <!-- Content Header (Page header) -->
  <div class="content-header">
    <div class="container-fluid">
      <div class="row mb-2">
        <div class="col-sm-6">
          <h1 class="m-0">{{ titulo }}</h1>
        </div><!-- /.col -->

      </div><!-- /.row -->
    </div><!-- /.container-fluid -->
  </div>
  <!-- /.content-header -->

  <!-- Main content -->
  <section class="content">
    <div class="container-fluid">
      <!-- Bloque Contenido Hijo de componentes -->

      <slot></slot> 

    </div>
  </section>
 </div>

<!-- /.content-wrapper -->



<footer class="main-footer">
  <strong>Copyright &copy; 2023</strong>

  <div class="float-right d-none d-sm-inline-block">

  </div>
</footer>

<!-- Control Sidebar -->
<aside class="control-sidebar control-sidebar-dark">
  <!-- Control sidebar content goes here -->
</aside>
<!-- /.control-sidebar -->
</div>


</body>






</template>


<script>
import NavbarAdmin from "./NavbarAdmin.vue";
import MenuAdmin from "./MenuAdmin.vue";


export default {
  data() {
    return {
      sidebarOpen: false,
    };
  }, methods: {
    toggleSidebar() {
      // Cambiar el valor de la variable sidebarOpen
      this.sidebarOpen = !this.sidebarOpen;
    },
  },
  name: 'LayoutAdmin',
  components: {
    NavbarAdmin,
    MenuAdmin
  },
  props: {
    titulo: {
      type: String,
      required: true
    }
  }  
}
</script>
