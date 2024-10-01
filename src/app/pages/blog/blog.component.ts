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
  constructor(private modalService: BsModalService, private breakpointObserver: BreakpointObserver) { }

  ngOnInit() {

  }
  cards2 = [

    {
      title: '¿Qué es una hipoteca? ¿Cómo puedo pagarla?',
      description: '',
      date: 'Enero 23 / 24',
      image: 'business-woman-holding-seal-documents.jpg',
      width: "250px",
      height: "400px",
      size: "col-md-2"
    },
    {
      title: 'MEDELLÍN',
      description: '¿Cuál es el valor del metro cuadrado?',
      date: 'Enero 23 / 24',
      image: 'business-woman-holding-seal-documents.jpg',
      width: "250px",
      height: "400px",
      size: "col-md-2"
    },]
  cards2last = [
    {
      title: 'Cómo funciona el proceso de compra venta en Colombia',
      description: '',
      date: 'Enero 23 / 24',
      image: 'business-woman-holding-seal-documents.jpg',
      width: "500px",
      height: "250px",
      size: "col-md-6"

    },
  ]
  cards1first = [
    {
      title: 'CERTIFICADO DE TRADICIÓN Y LIBERTAD',
      description: '¿Qué es el certificado y para qué sirve este documento en Colombia?',
      date: 'Enero 23 / 24',
      image: 'business-woman-holding-seal-documents.jpg',
      width: "500px",
      height: "250px",
      size: "col-md-6"
    },
  ]
  cards1 = [

    {
      title: '¿Qué es una hipoteca? ¿Cómo puedo pagarla?',
      description: '',
      date: 'Enero 23 / 24',
      image: 'business-woman-holding-seal-documents.jpg',
      width: "250px",
      height: "400px",
      size: "col-md-2"
    },
    {
      title: 'MEDELLÍN',
      description: '¿Cuál es el valor del metro cuadrado?',
      date: 'Enero 23 / 24',
      image: 'business-woman-holding-seal-documents.jpg',
      width: "250px",
      height: "400px",
      size: "col-md-2"
    },

  ];


mostRead=[
  {
    "title": "¿Qué es el Certificado y para qué sirve este documento en Colombia?",
    "description": "Te explicamos información relevante sobre el certificado y su uso en Colombia.",
    "published_date": "3/Enero/2024",
    "image": "handshake-close-up-executives.jpg"
  },
  {
    "title": "Certificado de Tradición y Libertad en Bogotá ¿Cómo lo obtengo?",
    "description": "Te explicamos como puedes obtener el certificado de tradición de predios inscritos en Bogotá.",
    "published_date": "3/Enero/2024",
    "image": "handshake-close-up-executives.jpg"
  },
  {
    "title": "Como funciona el proceso de compra venta en Colombia",
    "description": "Te explicamos información relevante sobre el certificado y su uso en Colombia.",
    "published_date": "3/Enero/2024",
    "image": "handshake-close-up-executives.jpg"
  },
  {
    "title": "¿Qué es una hipoteca?¿Como puedo pagarla?",
    "description": "Te explicamos que es una hipoteca y como puedes pagarla.",
    "published_date": "3/Enero/2024",
    "image": "handshake-close-up-executives.jpg"
  },
  {
    "title": "Guía paso a paso para obtener el Certificado de Tradición y Libertad",
    "description": "Te explicamos como puedes obtener y descargar este documento en línea.",
    "published_date": "3/Enero/2024",
    "image": "handshake-close-up-executives.jpg"
  },
  {
    "title": "¿Cual es el valor del metro cuadrado?",
    "description": "Te contamos sobre el valor del metro cuadrado en Medellín.",
    "published_date": "3/Enero/2024",
    "image": "handshake-close-up-executives.jpg"
  }
]


  //   deletePost(post: any) {
  //    this.firebase.deletePost(post.id)
  //   }
  //   addPost(template: TemplateRef<void>){
  //     this.editingPost=null
  // this.openModal(template)
  //   }
  //   openModal(template: TemplateRef<void>) {
  //     this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
  //   }
  //   editingPost:any
  //   editPost(template:TemplateRef<void>, post:any){
  //     this.editingPost=post
  //     this.openModal(template)
  //   }
  //   getCols() {
  //     if (this.breakpointObserver.isMatched(Breakpoints.Handset)) {
  //       return 1;
  //     }
  //     if (this.breakpointObserver.isMatched(Breakpoints.Tablet)) {
  //       return 2;
  //     }
  //     return 3;
  //   }
}
