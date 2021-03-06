/**
* @author Nahum Martinez
* @returns Servicio de Financiamiento Det
* @name FinanciamientoDetService
* @alias _financiamientoDetService
* @version 1.0.0
* @fecha 21-05-2019
*/

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SystemEndPointsService } from '../../../../shared/system-end-points.service';
import { SystemPropertiesService } from '../../../../shared/system-properties.service';
import 'rxjs/add/observable/forkJoin';

@Injectable({
  providedIn: 'root',
})
export class FinanciamientoDetService {
  // Variables de la Ruta de la API
  public _url: string;
  public _urlResourses: string;

  // Variables para el localStorage
  public _identity;
  public _token;

  public tokenHeader = this._systemPropertiesService.getIdentity().token;
  public usernameHeader = this._systemPropertiesService.getIdentity().userName;

  // Variable de cabezeras http
  public headers = new HttpHeaders();

  /****************************************************************************
  * Funcion: FND-00001
  * Fecha: 01-09-2019
  * Descripcion: Metodo para obtener los Datos de la
  * variable identity del localStorage
  * Objetivo: Seteo de las variables en json
  ****************************************************************************/
  constructor(private _http: HttpClient,
    // Instanciamos la Url de la API
    private _systemEndPointsService: SystemEndPointsService,
    private _systemPropertiesService: SystemPropertiesService) {

    // Seteo de los Headers
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.tokenHeader, 'Access-Control-Allow-Origin': '*',
    });
  } // FIN | Constructor


  /****************************************************************************
  * Funcion: FND-00002
  * Fecha: 29-05-2019
  * Descripcion: Metodo para obtener los Tipos de financiamiento
  * Objetivo: Tipos de financiamiento
  * Params: { }
  ****************************************************************************/
  getAllTiposFinanciamiento(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('mantActGroup', 10), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00002

  /****************************************************************************
  * Funcion: FND-00003
  * Fecha: 29-05-2019
  * Descripcion: Metodo para obtener las Modalidades de Ayuda
  * Objetivo: Modalidades de Ayuda
  * Params: { }
  ****************************************************************************/
  getAllModalidadAyuda(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('mantActGroup', 12), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00003


  /****************************************************************************
    * Funcion: FND-00004
    * Fecha: 29-05-2019
    * Descripcion: Metodo para ingresar datos de Financiamiento Detalle
    * Objetivo: Ingresar Financiamiento Detalle al Proyecto
    * Params: { jsonSendActividadFinanciamientoDet }
    ****************************************************************************/
  newActividadFinanciamientoDet(jsonSendActividadFinanciamientoDet: any): Observable<any> {
    const paramsSend: any = jsonSendActividadFinanciamientoDet;

    // Retorno de la Funcion
    return this._http.post(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 69), paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00004


  /****************************************************************************
    * Funcion: FND-00005
    * Fecha: 29-05-2019
    * Descripcion: Metodo para eliminar datos de Financiamiento Detalle
    * Objetivo: Eliminar Financiamiento Detalle al Proyecto
    * Params: { codigoFinancDet }
    ****************************************************************************/
  deleteActividadFinanciamientoDet(codigoFinancDet: string): Observable<any> {
    const paramsSend: string = codigoFinancDet;

    // Retorno de la Funcion
    return this._http.delete(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00005


  /****************************************************************************
  * Funcion: FND-00006
  * Fecha: 03-06-2019
  * Descripcion: Metodo para obtener los Socios al Desarrollo del Proyecto
  * Objetivo: Socios al Desarrollo del Proyecto
  * Params: { idActividad }
  ****************************************************************************/
  getAllSociosDesarrolloByIdActividad(idActividad: number): Observable<any> {
    const paramsSend: number = idActividad;
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 63) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00006


  /****************************************************************************
  * Funcion: FND-00007
  * Fecha: 06-06-2019
  * Descripcion: Metodo para obtener los Tipos de Transacción
  * Objetivo: Tipos de Transacción
  * Params: { }
  ****************************************************************************/
  getAllTipoTransaccion(): Observable<any> {
    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('mantActGroup', 14), {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00007


  /****************************************************************************
  * Funcion: FND-00008
  * Fecha: 09-06-2019
  * Descripcion: Metodo para obtener el Detalle de Financimiento
  * Objetivo: Detalle de Financiamiento
  * Params: { idActividadFinancEnc }
  ****************************************************************************/
  getFindByIdActividadDetalle(idActividadFinancEnc: number): Observable<any> {
    const paramsSend: number = idActividadFinancEnc;

    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.100) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00008


  /****************************************************************************
  * Funcion: FND-00009
  * Fecha: 09-06-2019
  * Descripcion: Metodo para obtener el Detalle de Financimiento
  * Objetivo: Detalle de Financiamiento
  * Params: { codigoFinancDet }
  ****************************************************************************/
  getFindByCodigoFinancDet(codigoFinancDet: string): Observable<any> {
    const paramsSend: string = codigoFinancDet;

    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.101) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00009


  /****************************************************************************
  * Funcion: FND-00010
  * Fecha: 29-05-2019
  * Descripcion: Metodo para ingresar datos de Financiamiento Detalle
  * Objetivo: Ingresar Financiamiento Detalle al Proyecto
  * Params: { idActividadFinancDet, jsonSendActividadFinanciamientoDet }
  ****************************************************************************/
  editActividadFinanciamientoDet(idActividadFinancDet: number, jsonSendActividadFinanciamientoDet: any): Observable<any> {
    const paramsSend1: number = idActividadFinancDet;
    const paramsSend2: any = jsonSendActividadFinanciamientoDet;

    // Retorno de la Funcion
    return this._http.put(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.102) + paramsSend1, paramsSend2, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00010


  /****************************************************************************
  * Funcion: FND-00011
  * Fecha: 16-06-2019
  * Descripcion: Metodo para obtener el Detalle de Financimiento
  * Objetivo: Detalle de Financiamiento, con Socio al Desarrollo
  * Params: { idActividadFinancEnc, idSocioDesarrollo }
  ****************************************************************************/
  getFindByIdActividadEncAndSocioDesarrollo(idActividadFinancEnc: number, idSocioDesarrollo: number): Observable<any> {
    const paramsSend1: number = idActividadFinancEnc;
    const paramsSend2: number = idSocioDesarrollo;

    const concatUri: any = paramsSend1 + '/idSocioDesarrollo/' + paramsSend2;

    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.103) + concatUri, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00011


  /**
   * Seccion de Compromisos ***************************************************
   */
  /****************************************************************************
  * Funcion: FND-00008
  * Fecha: 06-06-2019
  * Descripcion: Metodo para Ingresar Compromisos de Socio al Desarrollo
  * Objetivo: Ingresar Compromisos de Socio al Desarrollo
  * Params: { jsonSendActividadFinanciamientoDetCompromiso }
  ****************************************************************************/
  newActividadFinanciamientoDetCompromiso(jsonSendActividadFinanciamientoDetCompromiso: any): Observable<any> {
    const paramsSend: any = jsonSendActividadFinanciamientoDetCompromiso;

    // Retorno de la Funcion
    return this._http.post(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.200), paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00008


  /****************************************************************************
    * Funcion: FND-00009
    * Fecha: 06-06-2019
    * Descripcion: Metodo para eliminar datos de Financiamiento Detalle
    * Objetivo: Eliminar Financiamiento Detalle al Proyecto
    * Params: { codigoFinancCompromiso }
    ****************************************************************************/
  deleteActividadFinanciamientoDetCompromiso(codigoFinancCompromiso: string): Observable<any> {
    const paramsSend: string = codigoFinancCompromiso;

    // Retorno de la Funcion
    return this._http.delete(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.201) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00009


  /****************************************************************************
  * Funcion: FND-00010
  * Fecha: 08-06-2019
  * Descripcion: Metodo para obtener los todos los Compromisos
  * Objetivo: Listar todos los Compromisos
  * Params: { idActividadFinancEnc }
  ****************************************************************************/
  getAllActividadFinanciamientoDetCompromiso(idActividadFinancEnc: number): Observable<any> {
    const paramsSend: number = idActividadFinancEnc;

    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.202) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00010


  /****************************************************************************
    * Funcion: FND-00011
    * Fecha: 21-01-2019
    * Descripcion: Metodo para Actualizar el Valor de la Secuencia
    * Objetivo: Actualizar el valor de la Secuencia
    * Params: { jsonSecuencia, idSecuencia }
    ****************************************************************************/
  updateSecuence(jsonSecuencia, idSecuencia: number): Observable<any> {
    // Valores Constantes
    const idSecuenciaSend: number = idSecuencia;
    // Retorno de la Funcion
    return this._http.put(this._systemEndPointsService.getEndPointService('userGroup', 4) + idSecuenciaSend, jsonSecuencia, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00011


  /****************************************************************************
  * Funcion: FND-00012
  * Fecha: 13-06-2019
  * Descripcion: Metodo para Actualizar Compromisos de Socio al Desarrollo
  * Objetivo: Actualizar Compromisos de Socio al Desarrollo
  * Params: { idActividadFinancDetCompromiso, jsonSendActividadFinanciamientoDetCompromiso }
  ****************************************************************************/
  editActividadFinanciamientoDetCompromiso(idActividadFinancDetCompromiso: number, jsonSendActividadFinanciamientoDetCompromiso: any): Observable<any> {
    const paramsSend1: number = idActividadFinancDetCompromiso;
    const paramsSend2: any = jsonSendActividadFinanciamientoDetCompromiso;

    // Retorno de la Funcion
    return this._http.put(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.203) + paramsSend1, paramsSend2, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00012


  /**
   * Seccion de Desembolsos ******************************************************
   */
  /****************************************************************************
  * Funcion: FND-00013
  * Fecha: 06-06-2019
  * Descripcion: Metodo para Ingresar Desembolsos de Socio al Desarrollo
  * Objetivo: Ingresar Desembolsos de Socio al Desarrollo
  * Params: { jsonSendActividadFinanciamientoDetDesembolso }
  ****************************************************************************/
  newActividadFinanciamientoDetDesembolso(jsonSendActividadFinanciamientoDetDesembolso: any): Observable<any> {
    const paramsSend: any = jsonSendActividadFinanciamientoDetDesembolso;

    // Retorno de la Funcion
    return this._http.post(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.204), paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00013


  /****************************************************************************
    * Funcion: FND-00014
    * Fecha: 06-06-2019
    * Descripcion: Metodo para eliminar datos de Financiamiento Detalle
    * Objetivo: Eliminar Financiamiento Detalle al Proyecto
    * Params: { codigoFinancDesembolso }
    ****************************************************************************/
  deleteActividadFinanciamientoDetDesembolso(codigoFinancDesembolso: string): Observable<any> {
    const paramsSend: string = codigoFinancDesembolso;

    // Retorno de la Funcion
    return this._http.delete(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.205) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00014


  /****************************************************************************
  * Funcion: FND-00015
  * Fecha: 08-06-2019
  * Descripcion: Metodo para obtener los todos los Desembolsos
  * Objetivo: Listar todos los Desembolsos
  * Params: { idActividadFinancEnc }
  ****************************************************************************/
  getAllActividadFinanciamientoDetDesembolso(idActividadFinancEnc: number): Observable<any> {
    const paramsSend: number = idActividadFinancEnc;

    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.206) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00015


  /****************************************************************************
  * Funcion: FND-00016
  * Fecha: 13-06-2019
  * Descripcion: Metodo para Actualizar Desembolsos de Socio al Desarrollo
  * Objetivo: Actualizar Desembolsos de Socio al Desarrollo
  * Params: { idActividadFinancDetDesembolso, jsonSendActividadFinanciamientoDetDesembolso }
  ****************************************************************************/
  editActividadFinanciamientoDetDesembolso(idActividadFinancDetDesembolso: number, jsonSendActividadFinanciamientoDetDesembolso: any): Observable<any> {
    const paramsSend1: number = idActividadFinancDetDesembolso;
    const paramsSend2: any = jsonSendActividadFinanciamientoDetDesembolso;

    // Retorno de la Funcion
    return this._http.put(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.207) + paramsSend1, paramsSend2, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00016


  /**
   * Seccion de Gastos **********************************************************
   */
  /****************************************************************************
  * Funcion: FND-00017
  * Fecha: 06-06-2019
  * Descripcion: Metodo para Ingresar Gastos de Socio al Desarrollo
  * Objetivo: Ingresar Gastos de Socio al Desarrollo
  * Params: { jsonSendActividadFinanciamientoDetGastos }
  ****************************************************************************/
  newActividadFinanciamientoDetGasto(jsonSendActividadFinanciamientoDetGasto: any): Observable<any> {
    const paramsSend: any = jsonSendActividadFinanciamientoDetGasto;

    // Retorno de la Funcion
    return this._http.post(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.208), paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00017


  /****************************************************************************
    * Funcion: FND-00018
    * Fecha: 06-06-2019
    * Descripcion: Metodo para eliminar datos de Financiamiento Detalle
    * Objetivo: Eliminar Financiamiento Detalle al Proyecto
    * Params: { codigoFinancGasto }
    ****************************************************************************/
  deleteActividadFinanciamientoDetGasto(codigoFinancGasto: string): Observable<any> {
    const paramsSend: string = codigoFinancGasto;

    // Retorno de la Funcion
    return this._http.delete(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.209) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00018


  /****************************************************************************
  * Funcion: FND-00019
  * Fecha: 08-06-2019
  * Descripcion: Metodo para obtener los todos los Gastos
  * Objetivo: Listar todos los Gastos
  * Params: { idActividadFinancEnc }
  ****************************************************************************/
  getAllActividadFinanciamientoDetGasto(idActividadFinancEnc: number): Observable<any> {
    const paramsSend: number = idActividadFinancEnc;

    // Retorno de la Funcion
    return this._http.get(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.210) + paramsSend, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00019


  /****************************************************************************
  * Funcion: FND-00020
  * Fecha: 13-06-2019
  * Descripcion: Metodo para Actualizar Gastos de Socio al Desarrollo
  * Objetivo: Actualizar Gastos de Socio al Desarrollo
  * Params: { idActividadFinancDetGasto, jsonSendActividadFinanciamientoDetGasto }
  ****************************************************************************/
  editActividadFinanciamientoDetGasto(idActividadFinancDetGasto: number, jsonSendActividadFinanciamientoDetGasto: any): Observable<any> {
    const paramsSend1: number = idActividadFinancDetGasto;
    const paramsSend2: any = jsonSendActividadFinanciamientoDetGasto;

    // Retorno de la Funcion
    return this._http.put(this._systemEndPointsService.getEndPointService('actividadesCRUDGroup', 70.211) + paramsSend1, paramsSend2, {
      headers: this.headers,
      params: { 'tokenApi': this.tokenHeader },
    });
  } // FIN | FND-00020
}
