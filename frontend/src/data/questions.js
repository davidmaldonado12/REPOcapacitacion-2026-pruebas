export const questions = [
  {
    id: 1,
    slug: 'documento-compartido',
    title: 'Empecemos con este correo electrónico que incluye un documento de Google.',
    summary:
      'Revisa el remitente, el enlace y el contexto antes de decidir si se trata de una invitación real o de una trampa.',
    hint: 'Pista: mira con atención el dominio que aparece al inspeccionar el botón para abrir el documento.',
    type: 'email',
    preview: '/mockups/pregunta_1_documento_compartido.png',
    correctAnswer: 'phishing',
    explanation: {
      correct:
        'Es phishing. El correo imita a Google Docs, pero el dominio del enlace no corresponde a Google Drive.',
      incorrect:
        'No es legítimo. El diseño parece convincente, pero la URL intenta engañar usando un dominio falso.',
      clues: [
        'La dirección del documento no pertenece a google.com.',
        'Los atacantes confían en que el usuario haga clic sin inspeccionar el enlace.',
        'La urgencia aparente no viene acompañada de un contexto verificable.',
      ],
    },
  },
  {
    id: 2,
    slug: 'promocion-coca-cola',
    title: 'Es hora de mezclar conceptos.',
    summary:
      'Recibes un correo promocional de Coca-Cola que promete una licuadora gratis por completar una encuesta rápida.',
    hint: 'Pista: una marca grande suele usar su propio dominio oficial, no variaciones promocionales extrañas.',
    type: 'email',
    preview: '/mockups/pregunta_2_promoci_n_coca_cola.png',
    correctAnswer: 'phishing',
    explanation: {
      correct:
        'Es phishing. El premio exagerado y el remitente con dominio alterado son señales claras de engaño.',
      incorrect:
        'No parece una promoción real. El incentivo es demasiado atractivo y el dominio del remitente no es oficial.',
      clues: [
        'El remitente no usa un dominio corporativo confiable.',
        'Los premios gratis son una técnica común para captar clics.',
        'El mensaje busca una reacción impulsiva más que una interacción informada.',
      ],
    },
  },
  {
    id: 3,
    slug: 'factura-paypal',
    title: 'Ay, ¿cómo han conseguido tus datos de inicio de sesión de PayPal?',
    summary:
      'Una factura inesperada intenta asustarte con un cargo elevado y te empuja a actuar de inmediato.',
    hint: 'Pista: revisa el remitente y pregunta si realmente hace falta entrar desde ese botón para resolverlo.',
    type: 'email',
    preview: '/mockups/pregunta_3_factura_de_paypal.png',
    correctAnswer: 'phishing',
    explanation: {
      correct:
        'Es phishing. El correo usa miedo y urgencia para llevarte a un botón que podría robar tus credenciales.',
      incorrect:
        'No es una factura confiable. Aunque parece formal, el remitente y la llamada urgente a actuar son sospechosos.',
      clues: [
        'El remitente no corresponde al dominio habitual de PayPal.',
        'Los atacantes usan cargos altos para provocar pánico.',
        'La recomendación segura es abrir PayPal desde su sitio oficial, no desde el correo.',
      ],
    },
  },
  {
    id: 4,
    slug: 'almacenamiento-dropbox',
    title: 'Vaya, parece que te has quedado sin almacenamiento.',
    summary:
      'El mensaje dice que tu espacio en Dropbox está lleno y que tus archivos dejarán de sincronizarse.',
    hint: 'Pista: no todo mensaje alarmante es phishing; revisa si el remitente y el contexto encajan con el servicio.',
    type: 'email',
    preview: '/mockups/pregunta_4_almacenamiento_dropbox.png',
    correctAnswer: 'legit',
    explanation: {
      correct:
        'Es legítimo. El dominio del remitente y el formato del aviso encajan con una notificación real del servicio.',
      incorrect:
        'En este caso el mensaje sí es legítimo. No basta con que exista presión; hay que validar el remitente y el contexto.',
      clues: [
        'El remitente usa un dominio coherente con correos transaccionales de Dropbox.',
        'La acción propuesta coincide con un problema normal del producto.',
        'No hay señales claras de suplantación en la URL o la identidad visual.',
      ],
    },
  },
  {
    id: 5,
    slug: 'codigos-verificacion',
    title: 'Ah, los códigos.',
    summary:
      'Recibes códigos y alertas de acceso que no recuerdas haber solicitado. La duda es si el mensaje es falso o si alguien intenta entrar.',
    hint: 'Pista: un código no solicitado puede significar actividad real en tu cuenta; lo importante es no compartirlo.',
    type: 'sms',
    preview: '/mockups/pregunta_5_c_digos_de_verificaci_n.png',
    correctAnswer: 'legit',
    explanation: {
      correct:
        'Es legítimo. El mensaje en sí puede ser real y advertir un intento de acceso; el riesgo está en compartir el código.',
      incorrect:
        'Aquí el aviso parece genuino. Un SMS de verificación inesperado suele indicar que alguien está intentando autenticarse.',
      clues: [
        'Los servicios reales envían códigos aunque tú no hayas iniciado la acción.',
        'La protección correcta es no compartir el código y revisar tu cuenta desde el canal oficial.',
        'La presencia de advertencias de seguridad coherentes favorece la legitimidad del mensaje.',
      ],
    },
  },
  {
    id: 6,
    slug: 'alerta-acceso',
    title: 'Alguien ha intentado acceder a tu cuenta.',
    summary:
      'El correo dice venir de Google y te pide cambiar la contraseña por un intento bloqueado de inicio de sesión.',
    hint: 'Pista: el lenguaje puede parecer correcto y aun así el dominio del remitente delatar la suplantación.',
    type: 'email',
    preview: '/mockups/pregunta_6_alerta_de_acceso.png',
    correctAnswer: 'phishing',
    explanation: {
      correct:
        'Es phishing. El mensaje copia una alerta de Google, pero el remitente usa un dominio falso que busca parecer soporte oficial.',
      incorrect:
        'No es un correo legítimo. Aunque imita una alerta real, el dominio del remitente no pertenece a Google.',
      clues: [
        'El remitente usa google.support, no un dominio oficial de Google.',
        'Los atacantes suelen replicar alertas de seguridad para forzar clics.',
        'La mejor práctica es abrir la cuenta manualmente y revisar actividad reciente allí.',
      ],
    },
  },
  {
    id: 7,
    slug: 'ataque-gubernamental',
    title: 'Parece que están atacando tu cuenta de nuevo.',
    summary:
      'Google advierte sobre atacantes respaldados por gobiernos y recomienda cambiar la contraseña o activar protección avanzada.',
    hint: 'Pista: algunos correos reales de alta gravedad se ven extraños por su tono; valida el dominio antes de descartarlos.',
    type: 'email',
    preview: '/mockups/pregunta_7_ataque_gubernamental.png',
    correctAnswer: 'legit',
    explanation: {
      correct:
        'Es legítimo. Google sí envía este tipo de alertas a usuarios en riesgo y el remitente coincide con su dominio oficial.',
      incorrect:
        'En este caso el mensaje es real. No siempre un tono alarmista implica phishing; aquí el dominio y el contexto cuadran.',
      clues: [
        'El remitente corresponde a una cuenta legítima de Google.',
        'La alerta describe un programa real de protección avanzada.',
        'Los consejos propuestos son consistentes con una notificación de seguridad auténtica.',
      ],
    },
  },
  {
    id: 8,
    slug: 'sms-netflix',
    title: 'No es Netflix.',
    summary:
      'Un SMS intenta llevarte a resolver un problema de facturación o acceso con un enlace rápido.',
    hint: 'Pista: en mensajes de texto, el dominio del enlace es la señal más útil para separar lo real de lo falso.',
    type: 'sms',
    preview: '/mockups/pregunta_8_sms_de_netflix.png',
    correctAnswer: 'phishing',
    explanation: {
      correct:
        'Es phishing. El enlace no corresponde al dominio oficial de Netflix y busca capturar datos de acceso o pago.',
      incorrect:
        'No es un SMS legítimo. Las marcas conocidas no resuelven cobros críticos mediante enlaces sospechosos en mensajes.',
      clues: [
        'El dominio no coincide con netflix.com.',
        'Los atacantes usan SMS para aprovechar la revisión rápida en el móvil.',
        'Nunca conviene iniciar sesión desde un enlace dudoso recibido por texto.',
      ],
    },
  },
  {
    id: 9,
    slug: 'calendario-spam',
    title: '¿Un teléfono gratis?',
    summary:
      'Una invitación de calendario o alerta promocional promete un premio gratuito y busca que pulses un enlace de inmediato.',
    hint: 'Pista: las invitaciones no solicitadas y los premios imposibles suelen ser vectores de spam y phishing.',
    type: 'calendar',
    preview: '/mockups/pregunta_9_calendario_spam.png',
    correctAnswer: 'phishing',
    explanation: {
      correct:
        'Es phishing. La promesa de un premio gratuito y el contexto no solicitado son señales típicas de spam malicioso.',
      incorrect:
        'No es una comunicación confiable. Los regalos inesperados con enlaces rápidos suelen buscar clics o robo de datos.',
      clues: [
        'No existe una relación previa que justifique la invitación.',
        'El premio gratuito es el gancho para bajar la guardia.',
        'Las apps de calendario también se usan para distribuir enlaces maliciosos.',
      ],
    },
  },
  {
    id: 10,
    slug: 'seguimiento-ups',
    title: 'Espera, no estoy en casa.',
    summary:
      'Un SMS de UPS indica que no pudieron entregar un paquete y te ofrece cambiar la dirección desde un enlace.',
    hint: 'Pista: revisa el dominio de seguimiento. Los atacantes suelen usar palabras de marca combinadas con dominios genéricos.',
    type: 'sms',
    preview: '/mockups/pregunta_10_seguimiento_ups.png',
    correctAnswer: 'phishing',
    explanation: {
      correct:
        'Es phishing. El dominio del enlace no es oficial de UPS y busca explotar la ansiedad por una entrega pendiente.',
      incorrect:
        'No parece un aviso real de UPS. El dominio usa la marca, pero no pertenece al servicio oficial.',
      clues: [
        'El enlace usa un dominio genérico que suplanta a UPS.',
        'Los paquetes son un tema perfecto para generar clics impulsivos.',
        'Lo seguro es verificar el envío desde la web o app oficial del transportista.',
      ],
    },
  },
]
