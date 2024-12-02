import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PostFormComponent } from '../../components/post-form/post-form.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  posts: any[] = [];
  modalRef?: BsModalRef;
  user: string | null = localStorage.getItem("currentUID")
  searchQuery: string = '';
  constructor(private firebase: FirebaseService, private modalService: BsModalService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {
    this.firebase.getposts().subscribe((res) => {
      console.log(res)
      res.sort((a, b) => {
        if (a.fecha.seconds === b.fecha.seconds) {
          return b.fecha.nanoseconds - a.fecha.nanoseconds;
        }
        return b.fecha.seconds - a.fecha.seconds;
      });
      let remainingData = [...res];
      this.patchArray(this.cards1first, remainingData);
      this.patchArray(this.cards2last, remainingData);
      this.patchArray(this.cards1, remainingData);
      this.patchArray(this.cards2, remainingData);
      
      const publicacionesOrdenadas = res.sort((a, b) => (b.views || 0) - (a.views || 0));
      this.patchArray(this.mostRead,publicacionesOrdenadas)
      this.results=JSON.parse(JSON.stringify(this.mostRead))
    });
  }
  results:any[]=[]
  formatFirebaseDate (fecha: { seconds: number; nanoseconds: number }): string {
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
  patchArray (targetArray: any[], sourceArray: any[]) {
    for (let i = 0; i < targetArray.length && sourceArray.length > 0; i++) {
      const source = sourceArray.shift();
      targetArray[i] = {
        ...targetArray[i],
        title: source.title,
        description: source.introduction || '',
        date: this.formatFirebaseDate(source.fecha),
        image: source.image,
        url:source.urlTitle,
        category:source.category
      };
    }
  };

  buscar(): void {
   
    const query = this.searchQuery.toLowerCase();
    console.log(query)
    if(query!==""){
      console.log("enter")
      this.results = this.mostRead.filter((pub) =>
        pub.category.toLowerCase().includes(query)
      );
    }else{
      this.results=JSON.parse(JSON.stringify(this.mostRead))
    }
   
   
  }
  cards2 = [

    {
      title: '¿Qué es una hipoteca? ¿Cómo puedo pagarla?',
      description: '',
      date: 'Enero 23 / 24',
      image: '../../../assets/business-woman-holding-seal-documents.jpg',
      width: "250px",
      height: "400px",
      size: "col-md-2",
      url:'',
      category:'initial'
    },
    {
      title: 'MEDELLÍN',
      description: '¿Cuál es el valor del metro cuadrado?',
      date: 'Enero 23 / 24',
      image: '../../../assets/business-woman-holding-seal-documents.jpg',
      width: "250px",
      height: "400px",
      size: "col-md-2",
      url:'',
      category:'initial'
    },]
  cards2last = [
    {
      title: 'Cómo funciona el proceso de compra venta en Colombia',
      description: '',
      date: 'Enero 23 / 24',
      image: '../../../assets/business-woman-holding-seal-documents.jpg',
      width: "500px",
      height: "250px",
      size: "col-md-6",
      url:'',
      category:'initial'

    },
  ]
  cards1first = [
    {
      title: 'CERTIFICADO DE TRADICIÓN Y LIBERTAD',
      description: '¿Qué es el certificado y para qué sirve este documento en Colombia?',
      date: 'Enero 23 / 24',
      image: '../../../assets/business-woman-holding-seal-documents.jpg',
      width: "500px",
      height: "250px",
      size: "col-md-6",
      url:'',
      category:'initial'
    },
  ]
  cards1 = [

    {
      title: '¿Qué es una hipoteca? ¿Cómo puedo pagarla?',
      description: '',
      date: 'Enero 23 / 24',
      image: '../../../assets/business-woman-holding-seal-documents.jpg',
      width: "250px",
      height: "400px",
      size: "col-md-2",
      url:'',
      category:'initial'
    },
    {
      title: 'MEDELLÍN',
      description: '¿Cuál es el valor del metro cuadrado?',
      date: 'Enero 23 / 24',
      image: '../../../assets/business-woman-holding-seal-documents.jpg',
      width: "250px",
      height: "400px",
      size: "col-md-2",
      url:'',
      category:'initial'
    },

  ];


  mostRead = [
    {
      "title": "¿Qué es el Certificado y para qué sirve este documento en Colombia?",
      "description": "Te explicamos información relevante sobre el certificado y su uso en Colombia.",
      "date": "3/Enero/2024",
      "image": "../../../assets/handshake-close-up-executives.jpg",
      "url":"none",
      "views":0,
      "category":"initial"
    },
    {
      "title": "Certificado de Tradición y Libertad en Bogotá ¿Cómo lo obtengo?",
      "description": "Te explicamos como puedes obtener el certificado de tradición de predios inscritos en Bogotá.",
      "date": "3/Enero/2024",
      "image": "../../../assets/handshake-close-up-executives.jpg",
      "url":"none",
      "views":0,
      "category":"initial"
    },
    {
      "title": "Como funciona el proceso de compra venta en Colombia",
      "description": "Te explicamos información relevante sobre el certificado y su uso en Colombia.",
      "date": "3/Enero/2024",
      "image": "../../../assets/handshake-close-up-executives.jpg",
      "url":"none",
      "views":0,
      "category":"initial"
    },
    {
      "title": "¿Qué es una hipoteca?¿Como puedo pagarla?",
      "description": "Te explicamos que es una hipoteca y como puedes pagarla.",
      "date": "3/Enero/2024",
      "image": "../../../assets/handshake-close-up-executives.jpg",
      "url":"none",
      "views":0,
      "category":"initial"
    },
    {
      "title": "Guía paso a paso para obtener el Certificado de Tradición y Libertad",
      "description": "Te explicamos como puedes obtener y descargar este documento en línea.",
      "date": "3/Enero/2024",
      "image": "../../../assets/handshake-close-up-executives.jpg",
      "url":"none",
      "views":0,
      "category":"initial"
    },
    {
      "title": "¿Cual es el valor del metro cuadrado?",
      "description": "Te contamos sobre el valor del metro cuadrado en Medellín.",
      "date": "3/Enero/2024",
      "image": "../../../assets/handshake-close-up-executives.jpg",
      "url":"none",
      "views":0,
      "category":"initial"
    }
  ]


  deletePost(post: any) {
    this.firebase.deletePost(post.id)
  }
  addPost(template: TemplateRef<void>) {
    this.editingPost = null
    this.openModal(template)
  }
  openModal(template: TemplateRef<void>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  }
  editingPost: any
  editPost(template: TemplateRef<void>, post: any) {
    this.editingPost = post
    this.openModal(template)
  }

}
