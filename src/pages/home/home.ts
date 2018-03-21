import { Component } from '@angular/core';
import { ContactoPage } from '../contacto/contacto';

//import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //paginas a las que se quiere navegar
  contactoPage=ContactoPage;

  // constructor(public navCtrl: NavController, public navParams: NavParams) {
  // }

  //Objeto de contactos
  contactos=[
    {
      nombre:'Andres Alvarez',
      telefono:'04148305033',
      correo:'gregoriomiqui@gmail.com',
      imagen:'avatar-andres.png'
    },
    {
      nombre:'Ana Prado',
      telefono:'04148575339',
      correo:'anaprado@gmail.com',
      imagen:'avatar-ana.png'
    },
    {
      nombre:'Carlos Ruiz',
      telefono:'04145033456',
      correo:'cruiz@gmail.com',
      imagen:'avatar-carlos.png'
    },
    { 
      nombre:'Lucia Fermin',
      telefono:'04165891471',
      correo:'luciafermin@gmail.com',
      imagen:'avatar-lucia.png'
    },
    { 
      nombre:'Miguel Salazar',
      telefono:'04147856123',
      correo:'msalazar@gmail.com',
      imagen:'avatar-miguel.png'
    }
  ]



}
