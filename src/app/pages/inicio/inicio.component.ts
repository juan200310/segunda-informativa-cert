import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit{
  email: string = '';
  document: string = '';
  responsiveOptions: any[] | undefined;
  products: any[]=[
    
  ];
  blogPosts:any[] = [
    {
      title: 'Recomendaciones a la hora de comprar vivienda en Colombia',
      date: '6/04/2023',
      imageUrl: '../../../assets/business-woman-holding-seal-documents.jpg',
      url:'none'
    },
    {
      title: 'Certificado de Tradición y Libertad: Para qué sirve',
      date: '9/12/2023',
      imageUrl: '../../../assets/business-woman-holding-seal-documents.jpg',
      url:'none'
    },
    {
      title: 'Cómo comprender la información del Certificado Tradición y Libertad',
      date: '28/12/2023',
      imageUrl: '../../../assets/business-woman-holding-seal-documents.jpg',
      url:'none'
    },
    {
      title: 'Recomendaciones a la hora de comprar vivienda en Colombia',
      date: '6/04/2023',
      imageUrl: '../../../assets/business-woman-holding-seal-documents.jpg',
      url:'none'
    },
    {
      title: 'Certificado de Tradición y Libertad: Para qué sirve',
      date: '9/12/2023',
      imageUrl: '../../../assets/business-woman-holding-seal-documents.jpg',
      url:'none'
    },
    {
      title: 'Cómo comprender la información del Certificado Tradición y Libertad',
      date: '28/12/2023',
      imageUrl: '../../../assets/business-woman-holding-seal-documents.jpg',
      url:'none'
    }
  ];
  comprarCertificado() {
    // Handle the purchase logic here
    console.log(`Email: ${this.email}, Document: ${this.document}`);
    
  }
  constructor(private router: Router, private firebase:FirebaseService){
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
  blogPostsb:any[]=[]
  ngOnInit(): void {
    

    this.firebase.getposts().subscribe((res) => {
      
     

      res.sort((a, b) => {
        if (a.fecha.seconds === b.fecha.seconds) {
          return b.fecha.nanoseconds - a.fecha.nanoseconds;
        }
        return b.fecha.seconds - a.fecha.seconds;
      });
      let remainingData = [...res];


      this.patchArray(this.blogPosts, remainingData);

    });
  }
  patchArray(targetArray: any[], sourceArray: any[]) {
    for (let i = 0; i < targetArray.length && sourceArray.length > 0; i++) {
      const source = sourceArray.shift();
      targetArray[i] = {
        ...targetArray[i],
        id: source.id,
        title: source.title,
        description: source.introduction || '',
        date: this.formatFirebaseDate(source.fecha),
        imageUrl: source.image,
        url: source.urlTitle,
        category: source.category
      };
    }
  };
  formatFirebaseDate(fecha: { seconds: number; nanoseconds: number }): string {
    const date = new Date(fecha.seconds * 1000);
    const monthNames = [
      'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
      'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear().toString().slice(-2);
    return `${month} ${day} / ${year}`;
  };
  navigateToFragment(fragment: string): void {
    this.router.navigate(['inicio'], { fragment });
  }

}
