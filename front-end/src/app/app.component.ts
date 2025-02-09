import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AlumnosComponent } from './components/alumnos/alumnos.component';

@Component({
  selector: 'app-root',
  standalone: true,  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule, 
    AlumnosComponent 
  ]
})
export class AppComponent { }
