// Logos de las experiencias.
//
// Coloca los archivos en:
//   src/assets/profesional_view/images/experience/
// con estos nombres exactos:
//   logo_netcheck.jpg
//   logo_freelance.png
//   logo_atisa.jpg
//
// Se cargan solos y se asocian al `id` de cada experiencia (i18n).
// Si un archivo no está, esa tarjeta muestra el placeholder [Logo] sin romper nada.

const modules = import.meta.glob(
    '../../../../../assets/profesional_view/images/experience/*.{png,jpg,jpeg,webp,svg}',
    { eager: true, import: 'default' }
);

// Mapa: nombre de archivo (sin extensión) -> url
const byName = {};
for (const path in modules) {
    const file = path.split('/').pop().replace(/\.[^.]+$/, '');
    byName[file] = modules[path];
}

// id de experiencia (i18n) -> logo
export const experienceLogos = {
    netcheck:  byName['logo_netcheck']  ?? null,
    freelance: byName['logo_freelance'] ?? null,
    atisa:     byName['logo_atisa']     ?? null,
};
