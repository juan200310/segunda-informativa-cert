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
      content: `A través de la página web <a href="https://www.certificadostradicionylibertad.com" target="_blank">www.certificadostradicionylibertad.com</a> podrá encontrar el proceso fácil y seguro para la emisión de los Certificados de Tradición y Libertad de un inmueble en Colombia. Todo el proceso se realiza totalmente en línea.`,
      open: false
    },
    {
      title: "¿Qué es el Certificado de tradición y Libertad?",
      content: `El Certificado de tradición y libertad es un documento público que expide la Oficina de Registro de Instrumentos Públicos en Colombia de un inmueble. Su función principal es dar una representación clara y detallada de la historia jurídica de un inmueble, incluyendo información sobre su titularidad actual y anteriores y cualquier gravamen o carga judicial que afecte el predio. <br><br>
      Para realizar la solicitud del documento ingresa a <a href="https://www.certificadostradicionylibertad.com" target="_blank">www.certificadostradicionylibertad.com</a>.`,
      open: false
    },
    {
      title: "¿Qué es la Oficina de Registro de Instrumentos Públicos?",
      content: `La Oficina de Registro de Instrumentos Públicos en Colombia es una entidad encargada de llevar a cabo el registro de actos y documentos que afectan la propiedad y otros derechos sobre bienes inmuebles. Con dichos actos registrados en las oficinas es que se actualiza la información del Certificado de Tradición y Libertad.`,
      open: false
    },
    {
      title: "¿Cuáles son los datos más relevantes que se encuentran en el Certificado?",
      content: `<ul>
        <li>Información que identifica el inmueble como ubicación, matrícula inmobiliaria…</li>
        <li>Datos de cada uno de los propietarios que ha tenido el predio de forma cronológica.</li>
        <li>Detalle de Cargas y Gravámenes.</li>
      </ul>`,
      open: false
    },
    {
      title: "¿En qué trámites se usa el Certificado de Tradición y Libertad?",
      content: `<ul>
        <li><b>Compra y venta de inmuebles:</b> Es esencial para verificar la situación jurídica del inmueble y asegurar que el vendedor sea el legítimo propietario.</li>
        <li><b>Créditos hipotecarios:</b> Las entidades financieras requieren este certificado para asegurarse de que el inmueble pueda ser usado como garantía.</li>
        <li><b>Sucesiones:</b> En procesos de herencia, este documento es fundamental para determinar qué bienes forman parte del patrimonio del fallecido y quiénes son los herederos.</li>
        <li><b>Litigios y procesos judiciales:</b> En disputas legales sobre la propiedad, este certificado sirve como evidencia de la situación jurídica del inmueble.</li>
        <li><b>Consultas previas:</b> Antes de realizar cualquier trámite, es común que se consulte el certificado para asegurarse de que no hay irregularidades.</li>
      </ul>`,
      open: false
    },
    {
      title: "¿Paso a paso para la emisión del Certificado de Tradición y Libertad?",
      content: `<ol>
        <li>Selecciona la oficina e indica el número de matrícula requerido (puedes agregar hasta 10 certificados en la misma compra).</li>
        <li>Selecciona el medio de pago e indica los datos solicitados. Es importante verificar que el correo electrónico esté correcto, ya que a este llegará el documento solicitado.</li>
        <li>Finaliza el proceso de compra, una vez aprobado el pago, el certificado será enviado al correo en máximo 30 minutos.</li>
      </ol>`,
      open: false
    },
    {
      title: "¿La compra del Certificado de Tradición y Libertad es un proceso en línea?",
      content: `La solicitud del Certificado de Tradición y Libertad puede realizarse de dos maneras:<br><br>
      <ul>
        <li><b>En línea:</b> A través de la página web, donde se realiza el pago de forma digital y el documento llega en los próximos minutos. Recomendamos este proceso ya que es más rápido y no requiere desplazarse.</li>
        <li><b>En puntos físicos aliados:</b> Realizando la compra en efectivo de un código redimible y posteriormente ingresando a la página web a redimir dicho código.</li>
      </ul>`,
      open: false
    }
  ];

  faqs2 = [
    {
      title: "¿Dónde puedo obtener el número de matrícula de un predio?",
      content: `El número de matrícula se obtiene de la escritura pública del inmueble o de un certificado tramitado con anterioridad. Se ve de la siguiente manera: <b>000-000000</b> donde los 3 primeros dígitos indican la oficina donde está inscrito el predio.`,
      open: false
    },
    {
      title: "¿Cuánto tarda el certificado en emitirse y dónde llega?",
      content: `Después de recibir la notificación de que la compra ha sido <b>APROBADA</b>, la respuesta a su solicitud puede tardar hasta 30 minutos.`,
      open: false
    },
    {
      title: "¿Son la única página ofreciendo el servicio de emisión del Certificado de Tradición y Libertad?",
      content: `Existen en el mercado varias páginas ofreciendo la emisión de Certificados de Tradición y Libertad.`,
      open: false
    },
    {
      title: "¿Puedo realizar el pago del Certificado de Tradición en efectivo?",
      content: `Sí, a través de los puntos aliados puede realizar la compra del código redimible en efectivo para posterior uso en nuestra página web.`,
      open: false
    },
    {
      title: "¿Cuentan con pagos digitales para la adquisición del certificado?",
      content: `La compra se realiza a través de <b>PSE</b> o <b>tarjeta de crédito</b> gracias a la conexión realizada con una pasarela de pagos que garantiza la seguridad de los datos.`,
      open: false
    },
    {
      title: "¿Cuántos certificados puedo solicitar por compra y por día?",
      content: `Por compra pueden adquirirse hasta <b>10 certificados</b>. Con respecto a la cantidad diaria no hay límite establecido.`,
      open: false
    }
  ];

  faqs3 = [
    {
      title: "¿Cuál es el valor del certificado de tradición y libertad?",
      content: `El valor está compuesto de dos partes: <br>
      <ul>
        <li>El costo en la entidad gubernamental.</li>
        <li>El valor por servicio prestado por nuestra página web.</li>
      </ul>`,
      open: false
    },
    {
      title: "¿Cuáles son los motivos por los que no recibo el Certificado en el correo electrónico indicado?",
      content: `<ul>
        <li>Ha digitado la matrícula inmobiliaria de forma incorrecta.</li>
        <li>Por motivos técnicos de la plataforma que afectan la disponibilidad del servicio.</li>
        <li>El inmueble tiene un trámite pendiente en la Oficina de Registro de Instrumentos Públicos.</li>
      </ul>`,
      open: false
    },
    {
      title: "¿Qué debo hacer en cuando no llegó el Certificado de Tradición y Libertad?",
      content: `Verifique primero su bandeja de entrada y la carpeta de <b>spam</b> o <b>no deseados</b>. <br><br>
      Si recibió un código redimible, significa que no se pudo emitir el documento por alguno de los motivos anteriores. Puede volver a usar el código sin costo adicional.`,
      open: false
    },
    {
      title: "¿Qué es el código redimible y cómo usarlo?",
      content: `El código redimible se entrega cuando el documento solicitado no pudo ser emitido. Este código se usa para solicitar nuevamente el Certificado de Tradición y Libertad sin costo adicional.`,
      open: false
    },
    {
      title: "¿Cuánto tiempo tengo para redimir el código? ¿Debo usarlo para solicitar el mismo número de matrícula?",
      content: `El código tiene una vigencia de <b>12 meses</b> y puede usarse para solicitar <b>cualquier número de matrícula</b>, no necesariamente el mismo.`,
      open: false
    },
    {
      title: "¿Cuáles son los medios de contacto con la empresa?",
      content: `Puede contactarse a través de:<br>
      <ul>
        <li>Email: <a href="mailto:megapagosco@gmail.com">megapagosco@gmail.com</a></li>
        <li>WhatsApp: <a href="https://wa.me/573146681005" target="_blank">3146681005</a></li>
      </ul>`,
      open: false
    }
  ];

  toggleFaq(faq: any) {
    faq.open = !faq.open;
  }
}
