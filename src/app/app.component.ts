import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kevin Santiago Castañeda Trujillo';

  SistemaSolar:any =[
    {activo:true,Nom_planeta:'Mercurio',Distanciasol:1000,Cantlunas:0,Masa:1.54},
    {activo:true,Nom_planeta:'Venus',Distanciasol:2000,Cantlunas:0,Masa:2.45},
    {activo:true,Nom_planeta:'Tierra',Distanciasol:3000,Cantlunas:1,Masa:3.18},
    {activo:true,Nom_planeta:'Marte',Distanciasol:4000,Cantlunas:2,Masa:4.45},
    {activo:true,Nom_planeta:'Jupiter',Distanciasol:5000,Cantlunas:8,Masa:6.48},
    {activo:true,Nom_planeta:'Saturno',Distanciasol:6000,Cantlunas:16,Masa:25.4},
    {activo:true,Nom_planeta:'Urano',Distanciasol:7000,Cantlunas:9,Masa:3.45},
    {activo:true,Nom_planeta:'Neptuno',Distanciasol:8000,Cantlunas:4,Masa:1.00},
    {activo:true,Nom_planeta:'Pluton',Distanciasol:9000,Cantlunas:1,Masa:2.15},
  ]
}
