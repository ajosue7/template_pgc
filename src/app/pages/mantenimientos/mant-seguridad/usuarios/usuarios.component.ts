/**
 * @author David Pavon
 * @returns mantenimientos de usuario
 * @name UsuariosComponent
 * @alias _usuariosComponent
 * @version 1.0.0
 */
import { Component, OnInit } from '@angular/core';

// Varieble Jquey
declare var jquery: any;
declare var $: any;

@Component({
  selector: 'ngx-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}