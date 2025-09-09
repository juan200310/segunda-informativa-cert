import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { DirectorioComponent } from './pages/directorio/directorio.component';
import { PreguntasFrecuentesComponent } from './pages/preguntas-frecuentes/preguntas-frecuentes.component';

const routes: Routes = [

  {
    path:'inicio',
    component:InicioComponent
  },
   {
     path:'blog',
     component:BlogComponent
   },
  {
    path:'blog/publicacion/:id',
    component:PostComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'preguntas-frecuentes',
    component:PreguntasFrecuentesComponent
  },
  {
    path:'directorio',
    component:DirectorioComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio',
  },
  {
    path: '**',
    redirectTo: 'inicio',
  },
];
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',  // Mantiene la posición al navegar
  anchorScrolling: 'enabled',            // Habilita el scroll hacia fragmentos
  scrollOffset: [0, 64]                  // Opcional: ajusta el desplazamiento (ej. por una barra fija)
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
