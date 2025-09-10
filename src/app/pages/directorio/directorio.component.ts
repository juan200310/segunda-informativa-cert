import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Oficina {
  nombre_oficina: string;
  correo: string;
  telefono: string;
  direccion: string;
}

interface Municipio {
  codigo: string;
  nombre: string;
  informacion: Oficina[];
}

interface Departamento {
  codigo: string;
  nombre: string;
  municipios: Municipio[];
}

@Component({
  selector: 'app-directorio',
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.scss']
})
export class DirectorioComponent implements OnInit {
  departamentos: Departamento[] = [];
  searchDepartamento: string = '';
  searchMunicipio: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<{ departamentos: Departamento[] }>('assets/json/departments.json')
      .subscribe(data => {
        this.departamentos = data.departamentos;
        console.log('Carga directorio', this.departamentos);
      });
  }

  get filteredDepartamentos(): Departamento[] {
    return this.departamentos
      .filter(dep =>
        dep.nombre.toLowerCase().includes(this.searchDepartamento.toLowerCase())
      )
      .map(dep => ({
        ...dep,
        municipios: dep.municipios.filter(mun =>
          mun.nombre.toLowerCase().includes(this.searchMunicipio.toLowerCase())
        )
      }))
      .filter(dep => dep.municipios.length > 0);
  }

  onMunicipioSeleccionado(event: Event, depId: string): void {
    const selectElement = event.target as HTMLSelectElement;
    const citId = selectElement.value;

    if (citId) {
      this.router.navigate(['/departamento'], {
        queryParams: { depId, citId }
      });
    }
  }
}
