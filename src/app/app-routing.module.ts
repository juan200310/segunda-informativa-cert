import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './pages/blog/blog.component';
import { PostComponent } from './pages/post/post.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [

  {
    path:'blog',
    component:BlogComponent
  },
  {
    path:'publicacion/:id',
    component:PostComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'certificado-tradicion-libertad',
  },
  {
    path: '**',
    redirectTo: 'certificado-tradicion-libertad',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
