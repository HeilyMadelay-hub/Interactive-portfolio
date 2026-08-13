// Datos identificativos que aparecen en las tres páginas legales.
// Viven aquí y no dentro de cada traducción porque son los mismos en ES/EN/FR:
// si cambia el correo o el dominio, se toca un único sitio y las nueve versiones
// (3 documentos × 3 idiomas) quedan alineadas.
export { CONTACT_EMAIL } from '../sections/Contact/contactInfo.js';

export const OWNER_NAME = 'Heily Madelay Tandazo';

// Ubicación a efectos informativos. NO es un domicilio fiscal.
export const OWNER_LOCATION = 'Madrid, España';

// 👇 RELLENAR SI SE REQUIERE.
// La LSSI-CE (art. 10) solo exige NIF y domicilio a quien realiza actividad
// económica a través del sitio (venta, publicidad, contratación online). Este
// portfolio es informativo, así que van vacíos y las filas correspondientes
// simplemente no se pintan. Si algún día se factura desde aquí, se rellenan
// y aparecen solas en el Aviso Legal.
export const OWNER_TAX_ID = '';
export const OWNER_ADDRESS = '';

// Fecha de última revisión de los tres documentos. Se muestra bajo el título.
// Si se edita el contenido legal, hay que subirla: es lo que permite al
// visitante saber qué versión está leyendo.
export const LAST_UPDATED = {
    ES: 'Agosto 2026',
    EN: 'August 2026',
    FR: 'Août 2026',
};
