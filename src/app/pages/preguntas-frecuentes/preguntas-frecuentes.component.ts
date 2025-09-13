import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.component.html',
  styleUrls: ['./preguntas-frecuentes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PreguntasFrecuentesComponent implements OnInit {
  ngOnInit(): void {
    console.log('Carga faq')
  }

  faqs = [
    {
      title: "¿Qué servicio ofrece la página web?",
      content: "Aquí iría la respuesta a esta pregunta...",
      open: false
    },
    {
      title: "¿Qué es el Certificado de tradición y Libertad?",
      content: "Aquí iría la respuesta a esta pregunta...",
      open: false
    },
    {
      title: "¿Qué es la Oficina de Registro de Instrumentos Públicos?",
      content: "Aquí iría la respuesta...",
      open: false
    },
    {
      title: "¿Cuáles son los datos mas relevantes que se encuentran en el Certificado?",
      content: "Aquí iría la respuesta...",
      open: false
    },
    {
      title: "¿En qué trámites se usa el Certificado de Tradición y Libertad?",
      content: "Aquí iría la respuesta...",
      open: false
    },
    {
      title: "¿Paso a paso para la emisión del Certificado de Tradición y Libertad?",
      content: "Aquí iría la respuesta...",
      open: false
    },
    {
      title: "¿La compra del Certificado de Tradición y Libertad es un proceso en línea?",
      content: "Aquí iría la respuesta...",
      open: false
    }
  ];

  faqs2 = [
    {
      title: "¿Dónde puedo obtener el número de matrícula de un predio?",
      content: "Respuesta aquí...",
      open: false
    },
    {
      title: "¿Cuánto tarda el certificado en emitirse y dónde llega?",
      content: "Respuesta aquí...",
      open: false
    },
    {
      title: "¿Son la única página ofreciendo el servicio de emisión del Certificado de Tradición y Libertad?",
      content: "Respuesta aquí...",
      open: false
    },
    {
      title: "¿Puedo realizar el pago del Certificado de Tradición en efectivo?",
      content: "Respuesta aquí...",
      open: false
    },
    {
      title: "¿Cuentan con pagos digitales para la adquisición del certificado?",
      content: "Respuesta aquí...",
      open: false
    },
    {
      title: "¿Cuántos certificados puedo solicitar por compra y por día?",
      content: "Respuesta aquí...",
      open: false
    }
  ];

  faqs3 = [
    {
      title: "¿Cuál es el valor del certificado de tradición y libertad?",
      content: "Respuesta aquí...",
      open: false
    },
    {
      title: "¿Cuáles son los motivos por los que no recibo el Certificado en el correo electrónico indicado?",
      content: "Respuesta aquí...",
      open: false
    },
    {
      title: "¿Qué debo hacer en cuando no llegó el Certificado de Tradición y Libertad?",
      content: "Respuesta aquí...",
      open: false
    },
    {
      title: "¿Qué es el código redimible y cómo usarlo?",
      content: "Respuesta aquí...",
      open: false
    },
    {
      title: "¿Cuánto tiempo tengo para redimir el código? ¿Debo usarlo para solicitar el mismo número de matrícula?",
      content: "Respuesta aquí...",
      open: false
    },
    {
      title: "¿Cuáles son los medios de contacto con la empresa?",
      content: "Respuesta aquí...",
      open: false
    }
  ];

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }
}
