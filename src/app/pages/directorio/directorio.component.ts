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

  selectedDep: string = '';
  selectedDepId: string = '';
  municipiosFiltrados: Municipio[] = [];

  departamentosImgs = [
    { nombre: 'Bogotá', img: 'assets/deps/bogota.png', depId: '11'},
    { nombre: 'Medellín', img: 'assets/deps/medellin.png', depId: '05', citId: '05001' },
    { nombre: 'Bolívar', img: 'assets/deps/bolivar.png', depId: '13'},
    { nombre: 'Atlántico', img: 'assets/deps/atlantico.png', depId: '08'},
    { nombre: 'Cundinamarca', img: 'assets/deps/cundinamarca.png', depId: '25' },
    { nombre: 'Santander', img: 'assets/deps/santander.png', depId: '68'},
    { nombre: 'Valle del Cauca', img: 'assets/deps/valle.png', depId: '76'},
    { nombre: 'Nariño', img: 'assets/deps/narino.png', depId: '52'}
  ];
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

  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }

  onDepartamentoChange(depNombre: string): void {
    const dep = this.departamentos.find(d => d.nombre === depNombre);
    if (dep) {
      this.selectedDepId = dep.codigo;
      this.municipiosFiltrados = dep.municipios;
    } else {
      this.selectedDepId = '';
      this.municipiosFiltrados = [];
    }
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

  trackByDep(index: number, item: Departamento) {
    return item.codigo;
  }

  trackByMun(index: number, item: Municipio) {
    return item.codigo;
  }
}
