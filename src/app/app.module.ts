import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './components/head/head.component';
//material
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlipCardComponent } from './components/shared/flip-card/flip-card.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { CardInfoSituacionesComponent } from './components/shared/card-info-situaciones/card-info-situaciones.component';
import { GridInfoSituacionesComponent } from './components/grid-info-situaciones/grid-info-situaciones.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CarouselTramitesComponent } from './components/carousel-tramites/carousel-tramites.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { PostFormComponent } from './components/post-form/post-form.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { EditorModule } from 'primeng/editor';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PostComponent } from './pages/post/post.component';
import { ButtonModule } from 'primeng/button';
import { HttpClientModule} from '@angular/common/http';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatSelectModule } from '@angular/material/select';
import { LoginComponent } from './pages/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import { CarouselModule as PrimeCarouselModule } from 'primeng/carousel';
import { ButtonModule as primengbutton } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@NgModule({
  declarations: [
    
    AppComponent,
    HeadComponent,
    FlipCardComponent,
    CardInfoSituacionesComponent,
    GridInfoSituacionesComponent,
    BlogComponent,
    CarouselTramitesComponent,
    PostFormComponent,
    PostComponent,
    LoginComponent,
    FooterComponent,
    InicioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    EditorModule,
    AngularEditorModule,
    MatIconModule,
    ButtonModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatSelectModule,
    PrimeCarouselModule,
    primengbutton, 
    TagModule,
    CarouselModule.forRoot(),
    ModalModule.forRoot(),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    provideFirebaseApp(() => initializeApp({"projectId":"pagina-informativa-mega","appId":"1:873904710076:web:1a6fe796c614536b430bb9","storageBucket":"pagina-informativa-mega.appspot.com","apiKey":"AIzaSyD33IsxRGSvXU5ROoTj_hiBRcxWVnJikwU","authDomain":"pagina-informativa-mega.firebaseapp.com","messagingSenderId":"873904710076","measurementId":"G-T4QZ4X2RTD"}))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
