<template>
   <LayoutAdmin :titulo="InicioAdmin">
    <TreeViewMenu />
  </LayoutAdmin>


</template>



<script>
import LayoutAdmin from '../template/LayoutAdmin.vue';
import TreeViewMenu from '../pages/TreeViewMenu.vue';


LayoutAdmin
export default {
name: 'InicioAdmin',
components: {
  TreeViewMenu,
  LayoutAdmin
}
    
}
</script>


