import { Component } from '@angular/core';
import { AlumnoService } from '../../services/alumno.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-alumnos',
  standalone: true,
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class AlumnosComponent {
  nuevoAlumno = {
    nombre: '',
    fecha_nacimiento: '',
    nombre_padre: '',
    nombre_madre: '',
    grado: '',
    seccion: '',
    fecha_ingreso: ''
  };
  
  alumnos: any[] = [];
  gradoConsulta: number = 0;

  constructor(private alumnoService: AlumnoService) {}

  agregarAlumno() {
    this.alumnoService.crearAlumno(this.nuevoAlumno).subscribe(response => {
      alert('Alumno agregado con éxito');
      this.nuevoAlumno = {
        nombre: '', fecha_nacimiento: '', nombre_padre: '',
        nombre_madre: '', grado: '', seccion: '', fecha_ingreso: ''
      };
    }, error => {
      alert('Error al agregar alumno');
    });
  }

  consultarAlumnos() {
    this.alumnoService.consultarAlumnosPorGrado(this.gradoConsulta).subscribe(response => {
      this.alumnos = response;
    }, error => {
      alert('Error al consultar alumnos');
    });
  }
}
