import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {
  email: string = '';
  document: string = '';
  responsiveOptions: any[] | undefined;
  products: any[]=[
    
  ];
  blogPosts:any[] = [
    {
      title: 'Recomendaciones a la hora de comprar vivienda en Colombia',
      date: '6/04/2023',
      imageUrl: 'business-woman-holding-seal-documents.jpg'
    },
    {
      title: 'Certificado de Tradición y Libertad: Para qué sirve',
      date: '9/12/2023',
      imageUrl: 'business-woman-holding-seal-documents.jpg'
    },
    {
      title: 'Cómo comprender la información del Certificado Tradición y Libertad',
      date: '28/12/2023',
      imageUrl: 'business-woman-holding-seal-documents.jpg'
    },
    {
      title: 'Recomendaciones a la hora de comprar vivienda en Colombia',
      date: '6/04/2023',
      imageUrl: 'business-woman-holding-seal-documents.jpg'
    },
    {
      title: 'Certificado de Tradición y Libertad: Para qué sirve',
      date: '9/12/2023',
      imageUrl: 'business-woman-holding-seal-documents.jpg'
    },
    {
      title: 'Cómo comprender la información del Certificado Tradición y Libertad',
      date: '28/12/2023',
      imageUrl: 'business-woman-holding-seal-documents.jpg'
    }
  ];
  comprarCertificado() {
    // Handle the purchase logic here
    console.log(`Email: ${this.email}, Document: ${this.document}`);
    
  }
  constructor(private router: Router){
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
  ];
  }
  navigateToFragment(fragment: string): void {
    this.router.navigate(['inicio'], { fragment });
  }

}
