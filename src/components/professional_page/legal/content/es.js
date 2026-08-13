import { CONTACT_EMAIL, OWNER_NAME, OWNER_LOCATION, OWNER_TAX_ID, OWNER_ADDRESS } from '../legalInfo.js';

// Contenido legal en español — fuente de verdad de los tres documentos.
//
// Formato de un bloque:
//   { p: [...] }            párrafo (texto enriquecido)
//   { list: [[...], ...] }  lista con viñetas (cada item, texto enriquecido)
//   { kv: [{ k, v }] }      filas etiqueta/valor (identificación, claves de storage)
//
// Texto enriquecido = string suelto, o array mezclando:
//   'texto plano'                     → tal cual
//   { b: 'texto' }                    → negrita
//   { a: 'etiqueta', href: '...' }    → enlace externo / mailto
//   { to: '/privacy', label: '...' }  → enlace interno (react-router)
//
// La numeración (01, 02…) NO se escribe aquí: la calcula LegalPage a partir del
// índice, así que reordenar o insertar una sección nunca deja números repetidos.
const es = {
    ui: {
        eyebrow: 'Legal',
        updatedLabel: 'Última actualización',
        close: 'Cerrar',
        related: 'Ver también',
    },

    docs: {
        // ---------------------------------------------------------------- /legal
        notice: {
            title: ['Aviso', 'legal'],
            docTitle: 'Aviso Legal',
            sections: [
                {
                    title: 'Titular del sitio web',
                    blocks: [
                        {
                            p: [
                                'En cumplimiento del deber de información recogido en la Ley 34/2002, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos:',
                            ],
                        },
                        {
                            kv: [
                                { k: 'Titular', v: OWNER_NAME },
                                { k: 'Ubicación', v: OWNER_LOCATION },
                                { k: 'NIF', v: OWNER_TAX_ID },
                                { k: 'Domicilio', v: OWNER_ADDRESS },
                                { k: 'Email', v: { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` } },
                                { k: 'Actividad', v: 'Portfolio profesional de carácter informativo' },
                            ],
                        },
                    ],
                },
                {
                    title: 'Objeto',
                    blocks: [
                        {
                            p: 'Este sitio web es un portfolio profesional. Su finalidad es exclusivamente informativa: presentar experiencia, proyectos, artículos y vías de contacto profesional.',
                        },
                        {
                            p: 'No se comercializan productos ni servicios a través de este sitio, no existe registro de usuarios y no se realizan transacciones económicas de ningún tipo.',
                        },
                    ],
                },
                {
                    title: 'Condiciones de uso',
                    blocks: [
                        {
                            p: 'El acceso a este sitio es libre y gratuito, y no requiere registro previo. La navegación implica la aceptación de este aviso legal en la versión publicada en el momento del acceso.',
                        },
                        { p: 'La persona usuaria se compromete a:' },
                        {
                            list: [
                                'Hacer un uso adecuado de los contenidos y no emplearlos con fines ilícitos o lesivos para terceros.',
                                'No introducir código malicioso ni realizar acciones que puedan dañar, sobrecargar o inutilizar el sitio.',
                                'No intentar acceder a áreas o sistemas restringidos.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Propiedad intelectual e industrial',
                    blocks: [
                        {
                            p: [
                                'El diseño, los textos, el código fuente, las imágenes y el resto de contenidos originales de este sitio son titularidad de ',
                                { b: OWNER_NAME },
                                ', salvo que se indique otra autoría.',
                            ],
                        },
                        {
                            p: 'Queda prohibida su reproducción, distribución o transformación con fines comerciales sin autorización expresa. Sí está permitido citar o enlazar el contenido indicando la fuente.',
                        },
                        {
                            p: 'Las marcas, logotipos y nombres comerciales de terceros que aparecen en el sitio (tecnologías, empresas donde se ha trabajado, publicaciones) pertenecen a sus respectivos titulares y se muestran únicamente con finalidad descriptiva o informativa.',
                        },
                    ],
                },
                {
                    title: 'Enlaces a terceros',
                    blocks: [
                        {
                            p: 'Este sitio contiene enlaces a páginas externas (GitHub, LinkedIn, Medium, entre otras). No se controlan sus contenidos ni sus políticas de privacidad, por lo que no se asume responsabilidad alguna sobre ellos. Su inclusión no implica relación, recomendación ni supervisión.',
                        },
                    ],
                },
                {
                    title: 'Exclusión de responsabilidad',
                    blocks: [
                        {
                            p: 'El contenido de este sitio se ofrece con la mayor diligencia posible, pero puede contener imprecisiones o quedar desactualizado. No se garantiza la disponibilidad ininterrumpida del servicio ni la ausencia de errores técnicos.',
                        },
                        {
                            p: 'La información publicada tiene carácter divulgativo y no constituye asesoramiento profesional de ningún tipo.',
                        },
                    ],
                },
                {
                    title: 'Protección de datos',
                    blocks: [
                        {
                            p: [
                                'El tratamiento de datos personales derivado del uso de este sitio se describe en la ',
                                { to: '/privacy', label: 'Política de Privacidad' },
                                '. La información sobre cookies y almacenamiento local está en la ',
                                { to: '/cookies', label: 'Política de Cookies' },
                                '.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Legislación aplicable',
                    blocks: [
                        {
                            p: 'Este aviso legal se rige por la legislación española. Para cualquier controversia derivada del uso del sitio serán competentes los juzgados y tribunales que correspondan conforme a la normativa aplicable.',
                        },
                    ],
                },
                {
                    title: 'Contacto',
                    blocks: [
                        {
                            p: [
                                'Para cualquier consulta relacionada con este aviso legal: ',
                                { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                                '.',
                            ],
                        },
                    ],
                },
            ],
        },

        // -------------------------------------------------------------- /privacy
        privacy: {
            title: ['Política de', 'privacidad'],
            docTitle: 'Política de Privacidad',
            sections: [
                {
                    title: 'Responsable del tratamiento',
                    blocks: [
                        {
                            kv: [
                                { k: 'Responsable', v: OWNER_NAME },
                                { k: 'Ubicación', v: OWNER_LOCATION },
                                { k: 'NIF', v: OWNER_TAX_ID },
                                { k: 'Domicilio', v: OWNER_ADDRESS },
                                { k: 'Email', v: { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` } },
                            ],
                        },
                        {
                            p: 'Este sitio no dispone de Delegado de Protección de Datos, al no concurrir ninguno de los supuestos que lo exigen.',
                        },
                    ],
                },
                {
                    title: 'Datos que se recopilan',
                    blocks: [
                        {
                            p: [
                                'Este sitio ',
                                { b: 'no dispone de base de datos de usuarios' },
                                ' ni de sistema de registro. Los únicos datos que pueden llegar a tratarse son:',
                            ],
                        },
                        {
                            list: [
                                [
                                    { b: 'Formulario de contacto.' },
                                    ' Nombre, correo electrónico y el contenido del mensaje. El formulario ',
                                    { b: 'no envía nada a ningún servidor propio' },
                                    ': prepara un correo y lo abre en el programa de correo del dispositivo, de modo que el mensaje solo se envía si la persona usuaria pulsa "enviar" en su propio cliente. Los datos llegan, por tanto, a la bandeja de entrada del responsable.',
                                ],
                                [
                                    { b: 'Asistente conversacional.' },
                                    ' Cuando el asistente de IA está activo, el contenido de los mensajes escritos se envía al servicio que genera la respuesta y se procesa únicamente con esa finalidad. Las conversaciones se guardan además en el propio navegador de la persona usuaria (ver ',
                                    { to: '/cookies', label: 'Política de Cookies' },
                                    ').',
                                ],
                                [
                                    { b: 'Preferencias de navegación.' },
                                    ' Idioma y tema (claro/oscuro), almacenados localmente en el navegador. No identifican a nadie ni salen del dispositivo.',
                                ],
                                [
                                    { b: 'Datos técnicos del alojamiento.' },
                                    ' Como en cualquier sitio web, el proveedor de hosting puede registrar direcciones IP y datos de conexión con fines de seguridad y funcionamiento del servicio.',
                                ],
                            ],
                        },
                        {
                            p: [
                                { b: 'No se utilizan herramientas de analítica, seguimiento, perfilado ni publicidad' },
                                ', y no se toman decisiones automatizadas con efectos jurídicos sobre las personas.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Finalidad del tratamiento',
                    blocks: [
                        {
                            list: [
                                'Responder a las consultas, propuestas u ofertas profesionales recibidas por el formulario de contacto o por correo electrónico.',
                                'Generar las respuestas del asistente conversacional cuando la persona usuaria decide utilizarlo.',
                                'Recordar las preferencias de idioma y tema entre visitas.',
                                'Mantener la seguridad y el correcto funcionamiento del sitio.',
                            ],
                        },
                        {
                            p: 'Los datos no se utilizan para envío de comunicaciones comerciales ni para ninguna finalidad distinta de las anteriores.',
                        },
                    ],
                },
                {
                    title: 'Base legal',
                    blocks: [
                        {
                            list: [
                                [
                                    { b: 'Consentimiento' },
                                    ' (art. 6.1.a RGPD) para el envío del formulario de contacto y para el uso del asistente conversacional. Se presta de forma expresa marcando la casilla del formulario o escribiendo voluntariamente en el chat, y puede retirarse en cualquier momento.',
                                ],
                                [
                                    { b: 'Interés legítimo' },
                                    ' (art. 6.1.f RGPD) para mantener la seguridad del sitio y atender la correspondencia profesional recibida.',
                                ],
                                [
                                    { b: 'Necesidad técnica' },
                                    ' para el almacenamiento local de preferencias, exento de consentimiento por tratarse de almacenamiento estrictamente necesario para el servicio solicitado.',
                                ],
                            ],
                        },
                    ],
                },
                {
                    title: 'Conservación de los datos',
                    blocks: [
                        {
                            list: [
                                [
                                    { b: 'Mensajes de contacto:' },
                                    ' se conservan mientras dure la relación o el interés profesional y, después, el tiempo necesario para atender posibles responsabilidades legales.',
                                ],
                                [
                                    { b: 'Conversaciones del asistente:' },
                                    ' permanecen en el navegador de la persona usuaria hasta que esta las elimine o borre los datos del sitio. No se conservan copias asociadas a una identidad.',
                                ],
                                [
                                    { b: 'Preferencias de idioma y tema:' },
                                    ' hasta que se borren los datos del navegador.',
                                ],
                            ],
                        },
                    ],
                },
                {
                    title: 'Destinatarios',
                    blocks: [
                        {
                            p: [
                                { b: 'No se ceden ni se venden datos a terceros.' },
                                ' Únicamente intervienen los proveedores necesarios para que el sitio funcione, que actúan como encargados del tratamiento o como prestadores de servicio:',
                            ],
                        },
                        {
                            list: [
                                'Proveedor de alojamiento web y de la infraestructura del asistente de IA.',
                                'Proveedor del servicio de correo electrónico a través del cual se reciben los mensajes.',
                                [
                                    'Servicios de distribución de tipografías e iconos (Google Fonts y jsDelivr), que al cargar esos recursos reciben la dirección IP del navegador. Se detalla en la ',
                                    { to: '/cookies', label: 'Política de Cookies' },
                                    '.',
                                ],
                            ],
                        },
                        {
                            p: 'Algunos de estos proveedores pueden realizar transferencias internacionales de datos, amparadas en las garantías previstas en el Capítulo V del RGPD.',
                        },
                    ],
                },
                {
                    title: 'Derechos',
                    blocks: [
                        {
                            p: 'Cualquier persona puede ejercer los siguientes derechos sobre sus datos:',
                        },
                        {
                            list: [
                                [{ b: 'Acceso' }, ' — saber qué datos suyos se tratan.'],
                                [{ b: 'Rectificación' }, ' — corregir datos inexactos.'],
                                [{ b: 'Supresión' }, ' — solicitar su eliminación.'],
                                [{ b: 'Oposición' }, ' — oponerse a un tratamiento concreto.'],
                                [{ b: 'Limitación' }, ' — restringir temporalmente el tratamiento.'],
                                [{ b: 'Portabilidad' }, ' — recibir los datos en formato estructurado.'],
                                [{ b: 'Retirada del consentimiento' }, ' — en cualquier momento, sin efectos retroactivos.'],
                            ],
                        },
                        {
                            p: [
                                'Para ejercerlos basta con escribir a ',
                                { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                                ' indicando el derecho que se desea ejercer. La solicitud se atenderá en el plazo máximo de un mes.',
                            ],
                        },
                        {
                            p: [
                                'Si se considera que el tratamiento no se ajusta a la normativa, existe el derecho a reclamar ante la Agencia Española de Protección de Datos: ',
                                { a: 'www.aepd.es', href: 'https://www.aepd.es' },
                                '.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Seguridad',
                    blocks: [
                        {
                            p: 'Se aplican medidas técnicas y organizativas razonables para proteger la información: comunicación cifrada mediante HTTPS, acceso restringido al correo donde se reciben los mensajes y minimización de los datos tratados, que se limitan a los estrictamente necesarios.',
                        },
                        {
                            p: 'Ningún sistema puede garantizar una seguridad absoluta, pero cualquier incidencia que afectara a datos personales se gestionaría conforme a lo previsto en el RGPD.',
                        },
                    ],
                },
                {
                    title: 'Contacto',
                    blocks: [
                        {
                            p: [
                                'Para cualquier duda sobre esta política o sobre el tratamiento de datos: ',
                                { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                                '.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Cambios en esta política',
                    blocks: [
                        {
                            p: 'Esta política puede actualizarse si cambian las funcionalidades del sitio o la normativa aplicable. La versión vigente es siempre la publicada en esta página, y la fecha de última actualización aparece al inicio del documento.',
                        },
                    ],
                },
            ],
        },

        // -------------------------------------------------------------- /cookies
        cookies: {
            title: ['Política de', 'cookies'],
            docTitle: 'Política de Cookies',
            sections: [
                {
                    title: 'Qué son las cookies',
                    blocks: [
                        {
                            p: 'Una cookie es un pequeño archivo que un sitio web guarda en el navegador para recordar información entre visitas. Junto a las cookies existen otras tecnologías de almacenamiento en el dispositivo, como el almacenamiento local (localStorage), sujetas a las mismas reglas cuando no son estrictamente necesarias.',
                        },
                    ],
                },
                {
                    title: 'Cookies que utiliza este sitio',
                    blocks: [
                        {
                            p: [
                                'Este sitio ',
                                { b: 'no instala cookies propias ni de terceros' },
                                ': no hay cookies de analítica, de publicidad, de seguimiento ni de redes sociales. Por eso no se muestra un banner de consentimiento de cookies.',
                            ],
                        },
                        {
                            p: 'Lo que sí se utiliza es almacenamiento local del navegador, exclusivamente técnico y necesario para el funcionamiento de lo que la persona usuaria solicita. Se detalla en el apartado siguiente.',
                        },
                    ],
                },
                {
                    title: 'Almacenamiento local utilizado',
                    blocks: [
                        {
                            p: 'Estos datos permanecen en el navegador del dispositivo, no viajan a ningún servidor y no permiten identificar a nadie:',
                        },
                        {
                            kv: [
                                { k: 'ht-portfolio-lang', v: 'Idioma elegido (ES / EN / FR), para no volver a preguntarlo en cada visita.' },
                                { k: 'ht-portfolio-theme', v: 'Tema claro u oscuro seleccionado.' },
                                { k: 'ht-chat-conversations', v: 'Historial de conversaciones del asistente, para poder recuperarlas al volver.' },
                            ],
                        },
                        {
                            p: 'No caducan automáticamente: se mantienen hasta que se borren los datos del sitio desde el navegador.',
                        },
                    ],
                },
                {
                    title: 'Servicios de terceros',
                    blocks: [
                        {
                            p: 'El sitio carga tipografías e iconos desde redes de distribución externas. Esos servicios no instalan cookies aquí, pero al solicitar el recurso reciben la dirección IP del navegador y datos técnicos básicos de la petición:',
                        },
                        {
                            list: [
                                [
                                    { b: 'Google Fonts' },
                                    ' — tipografías del sitio. ',
                                    { a: 'Política de privacidad', href: 'https://policies.google.com/privacy' },
                                    '.',
                                ],
                                [
                                    { b: 'jsDelivr' },
                                    ' — iconos de tecnologías. ',
                                    { a: 'Política de privacidad', href: 'https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net' },
                                    '.',
                                ],
                            ],
                        },
                        {
                            p: 'Los enlaces salientes a GitHub, LinkedIn o Medium sí pueden instalar cookies propias, pero solo una vez se ha abandonado este sitio y bajo las políticas de cada plataforma.',
                        },
                    ],
                },
                {
                    title: 'Cómo eliminar estos datos',
                    blocks: [
                        {
                            p: 'El almacenamiento local puede borrarse en cualquier momento desde el navegador, sin que ello impida seguir usando el sitio: solo se perderán las preferencias guardadas y el historial del asistente.',
                        },
                        {
                            list: [
                                [{ b: 'Chrome' }, ' — Configuración → Privacidad y seguridad → Borrar datos de navegación.'],
                                [{ b: 'Firefox' }, ' — Ajustes → Privacidad y seguridad → Cookies y datos del sitio.'],
                                [{ b: 'Safari' }, ' — Preferencias → Privacidad → Gestionar datos de sitios web.'],
                                [{ b: 'Edge' }, ' — Configuración → Cookies y permisos del sitio.'],
                            ],
                        },
                    ],
                },
                {
                    title: 'Cambios en esta política',
                    blocks: [
                        {
                            p: 'Si en el futuro se incorporan cookies o herramientas de medición, esta política se actualizará y, cuando la normativa lo exija, se solicitará el consentimiento previo mediante el aviso correspondiente.',
                        },
                    ],
                },
                {
                    title: 'Contacto',
                    blocks: [
                        {
                            p: [
                                'Para cualquier duda sobre esta política: ',
                                { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                                '.',
                            ],
                        },
                    ],
                },
            ],
        },
    },
};

export default es;
