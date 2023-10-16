import { createRouter, createWebHistory } from "vue-router";

import InicioPublic from "../components/admin/pages/InicioPublic.vue";
import DocumentosPublic from "../components/admin/pages/DocumentosPublic.vue";
import LoginAdmin from "../components/admin/pages/LoginAdmin.vue";
import InicioAdmin from "../components/admin/pages/InicioAdmin.vue";
import UsuariosFormAdmin from "../components/admin/pages/usuarios/UsuariosFormAdmin.vue"
import UsuariosListAdmin from "../components/admin/pages/usuarios/UsuariosListAdmin.vue"
import UsuariosActualizarAdmin from "../components/admin/pages/usuarios/UsuariosActualizarAdmin.vue"

import DocumentosFormAdmin from "../components/admin/pages/documentos/DocumentosFormAdmin.vue"
import DocumentosListAdmin from "../components/admin/pages/documentos/DocumentosListAdmin.vue"
import DocumentosActualizarForm from "../components/admin/pages/documentos/DocumentosActualizarForm.vue"
import DocumentosActualizarArchivo from "../components/admin/pages/documentos/DocumentosActualizarArchivo.vue"


import ArchivosPublicosFormAdmin from "../components/admin/pages/archivos_publicos/ArchivosPublicosFormAdmin.vue"
import ArchivosPublicosListAdmin from "../components/admin/pages/archivos_publicos/ArchivosPublicosListAdmin.vue"

import OrganigramaFormAdmin from "../components/admin/pages/organigramas/OrganigramaFormAdmin.vue"
import OrganigramaListAdmin from "../components/admin/pages/organigramas/OrganigramaListAdmin.vue"
import OrganigramaUpdateAdmin from "../components/admin/pages/organigramas/OrganigramaUpdateAdmin.vue"

import TiposDocumentosFormAdmin from "../components/admin/pages/tipos_documentos/TiposDocumentosFormAdmin.vue"
import TiposDocumentosListAdmin from "../components/admin/pages/tipos_documentos/TiposDocumentosListAdmin.vue"
import TiposDocumentosActualizarAdmin from "../components/admin/pages/tipos_documentos/TiposDocumentosActualizarAdmin.vue"

import EstatusFormAdmin from "../components/admin/pages/estatus/EstatusFormAdmin.vue"
import EstatusListAdmin from "../components/admin/pages/estatus/EstatusListAdmin.vue"
import EstatusActualizarAdmin from "../components/admin/pages/estatus/EstatusActualizarAdmin.vue"

import NormasFormAdmin from "../components/admin/pages/normas/NormasFormAdmin.vue"
import NormasListAdmin from "../components/admin/pages/normas/NormasListAdmin.vue"
import NormasActualizarAdmin from "../components/admin/pages/normas/NormasActualizarAdmin.vue"


import HistoricoDocumentosListAdmin from "../components/admin/pages/historicos/HistoricoDocumentosListAdmin.vue"


import EmisoresFormAdmin from "../components/admin/pages/emisores/EmisoresFormAdmin.vue"
import EmisoresListAdmin from "../components/admin/pages/emisores/EmisoresListAdmin.vue"
import EmisoresActualizarAdmin from "../components/admin/pages/emisores/EmisoresActualizarAdmin.vue"



import ListaMaestra from "../components/admin/pages/reportes/ListaMaestra.vue"

const routes = [

  {  path: '/public/inicio', component: InicioPublic},
  {  path: '/public/listado/documentos', component: DocumentosPublic},    
  {  path: '/admin/login', component: LoginAdmin},  
  {  path: '/admin/inicio', component: InicioAdmin},

      //USUARIOS
  {path: '/admin/usuarios/list', component: UsuariosListAdmin},
  {path: '/admin/usuarios/form', component: UsuariosFormAdmin},
  {path: '/admin/usuarios/actualizar/:id', component: UsuariosActualizarAdmin},    


  //DOCUMENTOS
  {path: '/admin/documentos/form', component: DocumentosFormAdmin},
  {path: '/admin/documentos/list', component: DocumentosListAdmin},
  {path: '/admin/documentos/actualizar/:id', component: DocumentosActualizarForm},
  {path: '/admin/documentos/actualizar/archivo/:id', component: DocumentosActualizarArchivo},    


    //DOCUMENTOS Publicos
    {path: '/admin/archivos/publicos/form', component: ArchivosPublicosFormAdmin},
    {path: '/admin/archivos/publicos/list', component: ArchivosPublicosListAdmin},  

  //ORGANIGRAMA
  {path: '/admin/organigrama/form', component: OrganigramaFormAdmin},
  {path: '/admin/organigrama/list', component: OrganigramaListAdmin},
  {path: '/admin/organigrama/actualizar/:id', component: OrganigramaUpdateAdmin},        

//Tipo Archivos
{path: '/admin/tipodocumentos/form', component: TiposDocumentosFormAdmin},
{path: '/admin/tipodocumentos/list', component: TiposDocumentosListAdmin},
{path: '/admin/tipodocumentos/actualizar/:id', component: TiposDocumentosActualizarAdmin},

//Estatus
{path: '/admin/estatus/form', component: EstatusFormAdmin},
{path: '/admin/estatus/list', component: EstatusListAdmin},
{path: '/admin/estatus/actualizar/:id', component: EstatusActualizarAdmin},

//Emisores
{path: '/admin/emisores/form', component: EmisoresFormAdmin},
{path: '/admin/emisores/list', component: EmisoresListAdmin},
{path: '/admin/emisores/actualizar/:id', component: EmisoresActualizarAdmin},

//Normas
{path: '/admin/normas/form', component: NormasFormAdmin},
{path: '/admin/normas/list', component:NormasListAdmin},
{path: '/admin/normas/actualizar/:id', component:NormasActualizarAdmin},

//Historico
{path: '/admin/documentos/historico/:id', component: HistoricoDocumentosListAdmin},

//REPORTES
{path: '/admin/reportes/lista/maestra/:id', component: ListaMaestra}, 



  // Ruta para redirigir a /admin/login en caso de ruta incorrecta
  {
    path: '/:catchAll(.*)',
    redirect: '/public/inicio',
  },

];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;