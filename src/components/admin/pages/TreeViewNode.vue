<template>
  <div>
    <span @click="toggleNode" class="folder-icon" v-if="node.descripcion"></span>
    <span class="large-description" v-if="node.descripcion">{{ node.descripcion }}</span>
    <!-- Agrega un botón o enlace para cargar los documentos relacionados -->
    <img src="/iconos/abrir_carpeta.png"  alt="Ver Archivos" class="ml-3"  @click="toggleDocumentos"  style="cursor: pointer;"/>
   
    <!-- Utiliza v-if para mostrar/ocultar la lista de documentos -->
    <ul v-if="showDocumentos">
      <!-- Utiliza la clase .file-item para los elementos de documentos -->
      <li v-for="documento in documentos" :key="documento.id" class="file-item">
        <!-- Agrega un enlace para descargar el documento -->
        <a :href="`http://172.16.0.65:4000/api/documentos/archivos/${documento.nombre_documento}`" class="ml-5" target="_blank">
          {{ documento.nombre_documento }}
        </a>
      </li>
    </ul>
    <!-- Mantén el comportamiento original del menú -->
    <ul v-show="node.expanded && node.children.length > 0">
      <li class="ml-5" v-for="child in node.children" :key="child.id">
        <TreeViewNode :node="child" />
      </li>
    </ul>
  </div>
</template>
  
<script>
import axios from 'axios';

export default {
  props: {
    node: Object,
  },
  data() {
    return {
      documentos: [], // Almacena los documentos relacionados al nodo
      showDocumentos: false, // Variable para controlar la visibilidad de la lista de documentos
    };
  },
  methods: {
    toggleNode() {
      this.node.expanded = !this.node.expanded;
    },
    toggleDocumentos() {
      // Cambia el estado de la lista de documentos al hacer clic en el botón
      this.showDocumentos = !this.showDocumentos;

      // Si se muestra la lista de documentos, realiza una solicitud HTTP para obtenerlos
      if (this.showDocumentos) {
        axios.get(`http://172.16.0.65:4000/api/organigrama/obtener-documentos?organigrama_id=${this.node.id}`)
          .then((response) => {
            this.documentos = response.data;
          })
          .catch((error) => {
            console.error('Error al obtener los documentos:', error);
          });
      }
    },
  },
};
</script>
  
<style scoped>
.folder-icon {
  /* Estilos para la imagen de carpeta */
  background: transparent url('/iconos/carpeta.png') no-repeat left center;  
  padding-left: 40px; /* Espacio para la imagen de carpeta */
}

.large-description {
  font-size: 20px; /* Cambia el tamaño de fuente según tus preferencias */
}

/* Estilos para la clase .file-item */
.file-item {
  background: transparent url('/iconos/archivo.png') no-repeat left center;
  margin-right: 50px;
  /* Agrega otros estilos según sea necesario */
}
</style>
