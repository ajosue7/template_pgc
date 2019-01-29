import { Injectable } from '@angular/core';

// Clase de Propieades Globales de la PGC
@Injectable()
export class ListEndPointsService {

  constructor() { }

  // Listado de los End Point que seran usados en la API ********************************
  // Json de los End Points de la API disponibles
  getEndPoint = {
    endPointEstados: {
      listAllEstados: {
        id: 1,
        nameEndpoint: 'ListAllEstados',
        urlEndPoint: '/estados',
        groupEndPoint: 'estadosGroup',
        descEndPoint: 'Busca todos los Estados de la API',
      },
      listAllEstadosActividades: {
        id: 2,
        nameEndpoint: 'ListAllEstadosActividades',
        urlEndPoint: '/estados/findByIdGrupo/',
        groupEndPoint: 'estadosGroup',
        descEndPoint: 'Busca todos los Estados de la API, que sean de Actividades',
      },
    },
    endPointUsers: {
      findByMail: {
        id: 1,
        nameEndpoint: 'findByMail',
        urlEndPoint: '/usuarios/findByMail/',
        groupEndPoint: 'userGroup',
        descEndPoint: 'Busca el Usuario con el Email, de parametro',
      },
      getSecuencia: {
        id: 2,
        nameEndpoint: 'Get Secuencia',
        urlEndPoint: '/secuencias/findByIdSecuencia/',
        groupEndPoint: 'userGroup',
        descEndPoint: 'Busca la Secuencia con el ID Enviado',
      },
      getSecuenciabyCod: { // NAM | 2019-01-21 | Secuencias de Actividad
        id: 3,
        nameEndpoint: 'Get Secuencia by Cod',
        urlEndPoint: '/secuencias/findByCodSecuencia/',
        groupEndPoint: 'userGroup',
        descEndPoint: 'Busca la Secuencia con el Codigo Enviado',
      },
      updateSecuence: {
        id: 4,
        nameEndpoint: 'Actualizacion de la Secuencia',
        urlEndPoint: '/secuencias/update/',
        groupEndPoint: 'userGroup',
        descEndPoint: 'Actualiza la Secuencia de la Actividad',
      },
    },
    endPointMantActividades: {
      listAllSectorEjecutor: {
        id: 1,
        nameEndpoint: 'ListAllSectoresEjecutores',
        urlEndPoint: '/mant-actividades/sector-ejecutor',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el listado de los Sectores Ejecutores de la Actividad',
      },
      getSectorEjecutor: {
        id: 2,
        nameEndpoint: 'getSectorEjecutor',
        urlEndPoint: '/mant-actividades/sector-ejecutor/findById/',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el Sectores Ejecutor de la Actividad',
      },
      listAllEstrategia: {
        id: 3,
        nameEndpoint: 'ListAllSEstrategia',
        urlEndPoint: '/mant-actividades/estrategia',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el listado de los Sectores Ejecutores de la Actividad',
      },
      getEstrategia: {
        id: 4,
        nameEndpoint: 'getEstrategia',
        urlEndPoint: '/mant-actividades/estrategia/findById/',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el Sectores Ejecutor de la Actividad',
      },
      listAllPresupuesto: {
        id: 5,
        nameEndpoint: 'listAllPresupuesto',
        urlEndPoint: '/mant-actividades/presupuesto',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el listado de los Presupuesto de la Actividad',
      },
      getPresupuesto: {
        id: 6,
        nameEndpoint: 'getPresupuesto',
        urlEndPoint: '/mant-actividades/presupuesto/findById/',
        groupEndPoint: 'matActGroup',
        descEndPoint: 'Busca el Presupuesto de la Actividad',
      },
    },
    endPointEspaciosTrabajo: {
      listAllEspaciosTrabajo: {
        id: 1,
        nameEndpoint: 'ListAllEspaciosTrabajo',
        urlEndPoint: '/espacios-trabajo',
        groupEndPoint: 'espacioTrabajoGroup',
        descEndPoint: 'Busca todos los Espacios de Trabajo de la API',
      },
      findByIdEspacioTrabajo: {
        id: 2,
        nameEndpoint: 'findByIdEspacio',
        urlEndPoint: '/espacios-trabajo/findByIdEspacio/',
        groupEndPoint: 'espacioTrabajoGroup',
        descEndPoint: 'Busca los espacios de trabajo con el IdEspacioTrabajo, de parametro',
      },
      newEspacioTrabajo: {
        id: 3,
        nameEndpoint: 'newEspacioTrabajo',
        urlEndPoint: '/espacios-trabajo/new',
        groupEndPoint: 'espacioTrabajoGroup',
        descEndPoint: 'Ingresa un nuevo Espacio de Trabajo en la BD',
      },
    },
    endPointEspaciosTrabajoUsuarios: {
      listAllEspaciosTrabajoUsuarios: {
        id: 1,
        nameEndpoint: 'ListAllEspaciosTrabajoUsuarios',
        urlEndPoint: '/espacios-trabajo-usuario',
        groupEndPoint: 'espacioTrabajoUsuarioGroup',
        descEndPoint: 'Busca todos los Espacios de Trabajo de la API que han sido asignados a los Usuarios',
      },
      findByIdEspacioTrabajoUsuarios: {
        id: 2,
        nameEndpoint: 'FindByIdEspacioTrabajoUsuarios',
        urlEndPoint: '/espacios-trabajo-usuario/findByIdUsuario/',
        groupEndPoint: 'espacioTrabajoUsuarioGroup',
        descEndPoint: 'Busca los espacios de trabajo asignados al Usuario con el IdUsuario, de parametro',
      },
      newEspacioTrabajoUsuarios: {
        id: 3,
        nameEndpoint: 'NewEspacioTrabajoUsuarios',
        urlEndPoint: '/espacios-trabajo-usuario/new',
        groupEndPoint: 'espacioTrabajoUsuarioGroup',
        descEndPoint: 'Ingresa un nuevo Espacio de Trabajo en la BD asignandolo a un Usuario',
      },
    }, // Modulo de Organizaciones
    endPointOrganizaciones: { // DRP NUEVO TIPO DE ORGANIZACION
      listAllTipoOrganizaciones: {
        id: 1,
        nameEndpoint: 'ListAllTipoOrganizaciones',
        urlEndPoint: '/tipos-organizaciones',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca todos los Tipos de Organizaciones de la API',
      },
      findByIdTipoOrganizacion: {
        id: 2,
        nameEndpoint: 'FindByIdTipoOrganizacion',
        urlEndPoint: '/tipos-organizaciones/findByIdTipoOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca el Tipo de Organizacion con el IdTipoOrganizacion, de parametro',
      },
      newTipoOrganizacion: {
        id: 3,
        nameEndpoint: 'NewTipoOrganizacion',
        urlEndPoint: '/tipos-organizaciones/new',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Ingresa un nuevo Espacio de Trabajo en la BD asignandolo a un Usuario',
      },
      listAllOrganizaciones: {
        id: 4,
        nameEndpoint: 'ListAllOrganizaciones',
        urlEndPoint: '/organizaciones',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca todos las Organizaciones de la API',
      },
      findByIdOrganizacion: {
        id: 5,
        nameEndpoint: 'FindByIdOrganizacion',
        urlEndPoint: '/organizaciones/findByIdOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca el Tipo de Organizacion con el IdTipoOrganizacion, de parametro',
      },
      findByIdTipoOrganizacionT: {
        id: 6,
        nameEndpoint: 'FindByIdOrganizacion',
        urlEndPoint: '/organizaciones/findByIdTipoOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca el Tipo de Organizacion con el IdTipoOrganizacion, de parametro',
      },
      findByIdTipoPaisOrganizacion: {
        id: 7,
        nameEndpoint: 'FindByIdOrganizacion',
        urlEndPoint: '/organizaciones/findByIdTipoPaisOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca la Organizacion con el IdTipoOrganizacion, de parametro',
      },
      newOrganizacion: {
        id: 8,
        nameEndpoint: 'NewOrganizacion',
        urlEndPoint: '/organizaciones/new',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Ingresa un nueva Organizacion en la BD asignandolo',
      }, // 2018-10-20 | NAM
      findByIdPaisOrganizacion: {
        id: 9,
        nameEndpoint: 'findByIdPaisOrganizacion',
        urlEndPoint: '/organizaciones/findByIdPaisOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca la Organizacion con el IdPaisOrganizacion, de parametro',
      }, // NAM | 2019-01-09 | Creacion del EndPoint de Buscar Org. por Codido
      findByCodOrganizacion: {
        id: 10,
        nameEndpoint: 'Find By CodOrganizacion',
        urlEndPoint: '/organizaciones/findByCodOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca la Organizacion con el CodOrganizacion, de parametro',
      },
      countByCodOrganizacion: {
        id: 11,
        nameEndpoint: 'Find By CodOrganizacion Count',
        urlEndPoint: '/organizaciones/countByCodOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Busca la Organizacion con el CodOrganizacion, de parametro',
      },
      updateTipoOrganizacion: {
        id: 12,
        nameEndpoint: 'updateTipoOrganizacion',
        urlEndPoint: '/tipos-organizaciones/update/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Actualizar eñ tipo de organizaciones ',
      },
      deleteTipoOrganizacion: {
        id: 13,
        nameEndpoint: 'deleteTipoOrganizacion',
        urlEndPoint: '/tipos-organizaciones/delete/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'inhabilitar el tipo de organizaciones ',
      },
      listAllCategoriaOrganizaciones: {
        id: 14,
        nameEndpoint: 'listAllCategoriaOrganizaciones',
        urlEndPoint: '/categorias-organizaciones',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Listar todas las Categorias de Organizacion',
      },
      findByIdCatOrganizacion: {
        id: 15,
        nameEndpoint: 'findByIdCatOrganizacion',
        urlEndPoint: '/categorias-organizaciones/findByIdCatOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Buscar Categoria de Organzicion con el Id como Parametro',
      },
      findByIdTipoOrganizacionCat: {
        id: 16,
        nameEndpoint: 'findByIdTipoOrganizacionCat',
        urlEndPoint: '/categorias-organizaciones/findByIdTipoOrganizacion/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Buscar todas las Categorias de Organizacion, con el Tipo como parametro',
      },
      newCatOrganizacionCat: {
        id: 17,
        nameEndpoint: 'newCatOrganizacionCat',
        urlEndPoint: '/categorias-organizaciones/new',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'Ingresar la Categoria de Organizacion',
      },
      updateCatOrganizacionCat: {
        id: 18,
        nameEndpoint: 'updateCatOrganizacionCat',
        urlEndPoint: '/categorias-organizaciones/update/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'actualizar las categorias',
      },
      deleteCatOrganizacionCat: {
        id: 19,
        nameEndpoint: 'updateCatOrganizacionCat',
        urlEndPoint: '/categorias-organizaciones/delete/',
        groupEndPoint: 'organizacionesGroup',
        descEndPoint: 'inhabilitar las categorias',
      },
    }, // Modulo de Mantenimientos Genericos
    endPointMantGenericos: {
      listAllPaises: {
        id: 1,
        nameEndpoint: 'ListAllPaises',
        urlEndPoint: '/ubicacion-geografica/pais',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'Busca todos los Paises de la API',
      },
      findByIdTipoOrganizacion: {
        id: 2,
        nameEndpoint: 'FindByIdTipoOrganizacion',
        urlEndPoint: '/ubicacion-geografica/pais/',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'Busca el Pais con el IdPais, de parametro',
      },
      newTipoOrganizacion: {
        id: 3,
        nameEndpoint: 'NewTipoOrganizacion',
        urlEndPoint: '/espacios-trabajo-usuario/new',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'Ingresa un nuevo Espacio de Trabajo en la BD asignandolo a un Usuario',
      },
      listAllPerfiles: {
        id: 4,
        nameEndpoint: 'List All Perfiles',
        urlEndPoint: '/profiles',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'Listar todos los Perfiles',
      },
      newPerfil: {
        id: 5,
        nameEndpoint: 'nuevo perfil',
        urlEndPoint: '/profiles/new',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'crear nuevo Perfiles',
      },
      getAllTipoPerfil: {
        id: 6,
        nameEndpoint: 'listar tipo perfil',
        urlEndPoint: '/profiles/kind',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'listar los tipo de perfiles',
      },
      perfilUpdate: {
        id: 7,
        nameEndpoint: 'Actualizar los perfiles',
        urlEndPoint: '/profiles/edit/',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'Actualizar los perfiles',
      },
      deletePerfil: {
        id: 8,
        nameEndpoint: 'inhabilitar los perfiles',
        urlEndPoint: '/profiles/delete/',
        groupEndPoint: 'mantGenericosGroup',
        descEndPoint: 'inhabilita los perfiles',
      },
    }, // Modulo de Mantenimientos Genericos
    endPointIdInternasActividades: {
      listAllidInternas: {
        id: 1,
        nameEndpoint: 'List All Id Internas',
        urlEndPoint: '/mant-actividades/id-interna',
        groupEndPoint: 'idInternaGroup',
        descEndPoint: 'Busca todos los Paises de la API',
      },
      findByCodInterna: {
        id: 2,
        nameEndpoint: 'Find By CodInterna',
        urlEndPoint: '/mant-actividades/id-interna/findByCodInterna/',
        groupEndPoint: 'idInternaGroup',
        descEndPoint: 'Busca la Id Interna con el Codigo enviado',
      },
      countByCodInterna: {
        id: 3,
        nameEndpoint: 'Count By CodInterna',
        urlEndPoint: '/mant-actividades/id-interna/countByCodInterna/',
        groupEndPoint: 'idInternaGroup',
        descEndPoint: 'Busca la Cantidad de Id Internas con el Codigo enviado',
      },
    },
    // Modulo de CRUD Activiades | Datos Generales
    endPointCRUDActividades: {
      newActivityDatosGenerales: {
        id: 1,
        nameEndpoint: 'Nueva Actividad',
        urlEndPoint: '/activities/new-activity',
        params: 'jsonActivity',
        groupEndPoint: 'actividadesCRUDGroup',
        descEndPoint: 'Ingresa a la API una nueva Actividad con sus Datos Generales',
      },
      editActivityDatosGenerales: {
        id: 2,
        nameEndpoint: 'Editar Actividad',
        urlEndPoint: '/activities/edit-activity/',
        params: '{idActivity}',
        groupEndPoint: 'actividadesCRUDGroup',
        descEndPoint: 'Edita en la API, una Actividad con sus Datos Generales',
      },
      deleteActivityDatosGenerales: {
        id: 3,
        nameEndpoint: 'Eliminar Actividad',
        urlEndPoint: '/activities/delete-activity/',
        params: '{idActivity}',
        groupEndPoint: 'actividadesCRUDGroup',
        descEndPoint: 'Inhabilita en la API, una Actividad con sus Datos Generales',
      },
    }, // modulo de mantenimientos generico de usuarios
    endPointMantGenericosUsuario: {
      listAllUsuarios: {
        id: 1,
        nameEndpoint: 'List All Usuarios',
        urlEndPoint: '/usuarios',
        groupEndPoint: 'mantGenericosUsuarioGroup',
        descEndPoint: 'Listar todos los Usuarios',
      },
      newUsuario: {
        id: 2,
        nameEndpoint: 'nuevo usuario',
        urlEndPoint: '/usuarios/new',
        groupEndPoint: 'mantGenericosUsuarioGroup',
        descEndPoint: 'crear nuevo Usuarios',
      },
      getAllTipoUsuario: {
        id: 3,
        nameEndpoint: 'listar tipo usuario',
        urlEndPoint: '/tipos/findByIdGrupo/',
        groupEndPoint: 'mantGenericosUsuarioGroup',
        descEndPoint: 'listar los tipo de usuarios',
      },
    },
  }
} // FIN de Clase
