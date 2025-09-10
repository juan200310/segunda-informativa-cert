import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {
  departamentoId: string | null = null;
  municipioId: string | null = null;
  departamentoSeleccionado: Departamento | null = null;
  searchMunicipio: string = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.departamentoId = params.get('depId');
      this.municipioId = params.get('citId');

      if (this.departamentoId) {
        this.http.get<{ departamentos: Departamento[] }>('assets/json/departments.json')
          .subscribe({
            next: (data) => {
              const departamentos = data.departamentos;
              this.departamentoSeleccionado =
                departamentos.find(d => d.codigo === this.departamentoId) || null;

              if (this.departamentoSeleccionado && this.municipioId) {
                const municipioSeleccionado = this.departamentoSeleccionado.municipios.find(
                  m => m.codigo === this.municipioId
                );
                if (municipioSeleccionado) {
                  this.searchMunicipio = municipioSeleccionado.nombre;
                }
              }
            },
            error: (err) => {
              console.error('Error cargando JSON:', err);
            }
          });
      }
    });
  }

  get filteredMunicipios(): Municipio[] {
    if (!this.departamentoSeleccionado) return [];
    return this.departamentoSeleccionado.municipios.filter(mun =>
      mun.nombre.toLowerCase().startsWith(this.searchMunicipio.toLowerCase())
    );
  }
}
