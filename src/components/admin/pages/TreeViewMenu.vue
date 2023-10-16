<template>
    <div class="treeview">
      <ul>
        <li v-for="node in treeData" :key="node.id" class="folder-item">
          <TreeViewNode :node="node" />
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import TreeViewNode from './TreeViewNode.vue'; // Importa el componente TreeViewNode
  import axios from 'axios'; // Importa Axios
  const rutaAPI = import.meta.env.VITE_APP_RUTA_API;

console.log(`La ruta de la API es: ${rutaAPI}`);
  export default {
    data() {
        return {
      treeData: [], // Inicialmente, los datos estarán vacíos
    };
  },
  created() {
    // Hacer una solicitud GET a la API
    axios.get(`${rutaAPI}/api/organigrama/organigrama`)
      .then((response) => {
        this.treeData = this.convertDataToTreeFormat(response.data);
        console.log( this.treeData);
      })
      .catch((error) => {
        console.error('Error al cargar datos desde la API:', error);
      });
  },
  methods: {
    convertDataToTreeFormat(data) {
      // Implementa la lógica para convertir los datos de la API en una estructura de árbol.
      // Debes adaptar esto según la respuesta de la API.
      // Aquí tienes un ejemplo basado en la estructura de datos que proporcionaste anteriormente:
      const tree = [];

      // Crea un objeto de mapeo para acceder fácilmente a los nodos por su ID
      const nodeMap = new Map();

      // Primero, crea una estructura de mapa para facilitar el acceso a los nodos por su ID
      data.forEach((item) => {
        nodeMap.set(item.id, {
          id: item.id,
          descripcion: item.descripcion,
          expanded: false,
          children: [],
        });
      });

      // Luego, recorre los datos para construir el árbol
      data.forEach((item) => {
        if (item.padre === 0) {
          // Este es un nodo raíz
          tree.push(nodeMap.get(item.id));
        } else {
          // Este es un nodo hijo, agrégalo al nodo padre correspondiente
          const parentNode = nodeMap.get(item.padre);
          if (parentNode) {
            parentNode.children.push(nodeMap.get(item.id));
          }
        }
      });

      return tree;
    },
  },
    components: {
      TreeViewNode, // Registra el componente TreeViewNode
    },
  };
  </script>
