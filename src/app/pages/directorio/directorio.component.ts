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

interface DepartamentoImg {
  nombre: string;
  img: string;
  depId: string;
  citId?: string;
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

  applyFiltered: boolean = false;

  departamentosImgs: DepartamentoImg[] = [
    { nombre: 'Bolívar', img: 'assets/deps/bolivar.png', depId: '13' },
    { nombre: 'Atlántico', img: 'assets/deps/atlantico.png', depId: '08' },
    { nombre: 'Cundinamarca', img: 'assets/deps/cundinamarca.png', depId: '25' },
    { nombre: 'Santander', img: 'assets/deps/santander.png', depId: '68' },
    { nombre: 'Valle del Cauca', img: 'assets/deps/valle.png', depId: '76' },
    { nombre: 'Nariño', img: 'assets/deps/narino.png', depId: '52' }
  ];

  municipiosImgs = [
    { nombre: 'Bogotá', img: 'assets/deps/bogota.png', depId: '11', citId: '11001' },
    { nombre: 'Medellín', img: 'assets/deps/medellin.png', depId: '05', citId: '05001' }
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
    if (this.selectedDep) {
      return this.departamentos.filter(dep => dep.nombre === this.selectedDep);
    }

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

  get filteredDepartamentosImgs() {
    if (this.selectedDep) {
      return this.departamentosImgs.filter(dep => dep.nombre === this.selectedDep);
    }
    return this.departamentosImgs;
  }

  getDepartamentos(): Departamento[] {
    return this.departamentos;
  }

  get destacadosImgs() {
    if (this.selectedDep) {
      const dep = this.departamentos.find(d => d.nombre === this.selectedDep);
      if (!dep) return [];

      return [
        ...this.departamentosImgs.filter(d => d.nombre === dep.nombre),
        ...this.municipiosImgs.filter(m => m.depId === dep.codigo)
      ];
    }

    return [...this.municipiosImgs, ...this.departamentosImgs];
  }

  onDepartamentoChange(depNombre: string): void {
    const dep = this.departamentos.find(d => d.nombre === depNombre);
    if (dep) {
      this.selectedDep = dep.nombre;
      this.selectedDepId = dep.codigo;
      this.municipiosFiltrados = dep.municipios;

      this.applyFiltered = true;
    } else {
      this.selectedDep = '';
      this.selectedDepId = '';
      this.municipiosFiltrados = [];

      this.applyFiltered = false;
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
