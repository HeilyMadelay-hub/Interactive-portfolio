import { CONTACT_EMAIL, OWNER_NAME, OWNER_LOCATION, OWNER_TAX_ID, OWNER_ADDRESS } from '../legalInfo.js';

// Traduction française des documents légaux. Même structure que content/es.js —
// voir ce fichier pour le format des blocs et du texte enrichi. L'espagnol fait
// foi : toute modification du texte juridique part de là et se répercute ici.
const fr = {
    ui: {
        eyebrow: 'Légal',
        updatedLabel: 'Dernière mise à jour',
        back: 'Retour au portfolio',
    },

    docs: {
        // ---------------------------------------------------------------- /legal
        notice: {
            title: ['Mentions', 'légales'],
            docTitle: 'Mentions légales',
            sections: [
                {
                    title: 'Titulaire du site',
                    blocks: [
                        {
                            p: "Conformément au devoir d'information prévu par la loi espagnole 34/2002 relative aux services de la société de l'information et au commerce électronique (LSSI-CE), les informations suivantes sont communiquées :",
                        },
                        {
                            kv: [
                                { k: 'Titulaire', v: OWNER_NAME },
                                { k: 'Localisation', v: OWNER_LOCATION },
                                { k: 'NIF', v: OWNER_TAX_ID },
                                { k: 'Adresse', v: OWNER_ADDRESS },
                                { k: 'E-mail', v: { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` } },
                                { k: 'Activité', v: 'Portfolio professionnel à caractère informatif' },
                            ],
                        },
                    ],
                },
                {
                    title: 'Objet',
                    blocks: [
                        {
                            p: "Ce site est un portfolio professionnel. Sa finalité est purement informative : présenter une expérience, des projets, des articles et des moyens de contact professionnel.",
                        },
                        {
                            p: "Aucun produit ni service n'est commercialisé via ce site, il n'existe aucun enregistrement d'utilisateurs et aucune transaction financière n'y est réalisée.",
                        },
                    ],
                },
                {
                    title: "Conditions d'utilisation",
                    blocks: [
                        {
                            p: "L'accès à ce site est libre et gratuit et ne nécessite aucune inscription préalable. La navigation implique l'acceptation des présentes mentions légales dans leur version publiée au moment de l'accès.",
                        },
                        { p: "La personne utilisatrice s'engage à :" },
                        {
                            list: [
                                "Faire un usage approprié des contenus et ne pas les utiliser à des fins illicites ou préjudiciables à des tiers.",
                                "Ne pas introduire de code malveillant ni effectuer d'actions susceptibles d'endommager, de surcharger ou de rendre le site inutilisable.",
                                "Ne pas tenter d'accéder à des zones ou systèmes restreints.",
                            ],
                        },
                    ],
                },
                {
                    title: 'Propriété intellectuelle',
                    blocks: [
                        {
                            p: [
                                "Le design, les textes, le code source, les images et les autres contenus originaux de ce site appartiennent à ",
                                { b: OWNER_NAME },
                                ", sauf mention d'un autre auteur.",
                            ],
                        },
                        {
                            p: "Leur reproduction, distribution ou transformation à des fins commerciales sans autorisation expresse est interdite. Citer le contenu ou y renvoyer par un lien est autorisé, à condition d'en indiquer la source.",
                        },
                        {
                            p: "Les marques, logos et noms commerciaux de tiers présents sur le site (technologies, entreprises, publications) appartiennent à leurs titulaires respectifs et ne sont affichés qu'à des fins descriptives ou informatives.",
                        },
                    ],
                },
                {
                    title: 'Liens vers des tiers',
                    blocks: [
                        {
                            p: "Ce site contient des liens vers des pages externes (GitHub, LinkedIn, Medium, entre autres). Leur contenu et leurs politiques de confidentialité échappent à notre contrôle et aucune responsabilité n'est assumée à leur égard. Leur présence n'implique ni relation, ni recommandation, ni supervision.",
                        },
                    ],
                },
                {
                    title: 'Exclusion de responsabilité',
                    blocks: [
                        {
                            p: "Le contenu de ce site est proposé avec le plus grand soin, mais il peut comporter des imprécisions ou devenir obsolète. La disponibilité ininterrompue du service et l'absence d'erreurs techniques ne sont pas garanties.",
                        },
                        {
                            p: "Les informations publiées ont une valeur informative et ne constituent pas un conseil professionnel de quelque nature que ce soit.",
                        },
                    ],
                },
                {
                    title: 'Protection des données',
                    blocks: [
                        {
                            p: [
                                "Le traitement des données personnelles découlant de l'utilisation de ce site est décrit dans la ",
                                { to: '/privacy', label: 'Politique de Confidentialité' },
                                ". Les informations relatives aux cookies et au stockage local figurent dans la ",
                                { to: '/cookies', label: 'Politique de Cookies' },
                                '.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Droit applicable',
                    blocks: [
                        {
                            p: "Les présentes mentions légales sont régies par le droit espagnol. Tout litige lié à l'utilisation du site relèvera des juridictions compétentes conformément à la réglementation applicable.",
                        },
                    ],
                },
                {
                    title: 'Contact',
                    blocks: [
                        {
                            p: [
                                'Pour toute question relative à ces mentions légales : ',
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
            title: ['Politique de', 'confidentialité'],
            docTitle: 'Politique de Confidentialité',
            sections: [
                {
                    title: 'Responsable du traitement',
                    blocks: [
                        {
                            kv: [
                                { k: 'Responsable', v: OWNER_NAME },
                                { k: 'Localisation', v: OWNER_LOCATION },
                                { k: 'NIF', v: OWNER_TAX_ID },
                                { k: 'Adresse', v: OWNER_ADDRESS },
                                { k: 'E-mail', v: { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` } },
                            ],
                        },
                        {
                            p: "Ce site ne dispose pas de délégué à la protection des données, aucun des cas l'exigeant ne s'appliquant ici.",
                        },
                    ],
                },
                {
                    title: 'Données collectées',
                    blocks: [
                        {
                            p: [
                                'Ce site ne possède ',
                                { b: "aucune base de données d'utilisateurs" },
                                " ni système d'inscription. Les seules données susceptibles d'être traitées sont :",
                            ],
                        },
                        {
                            list: [
                                [
                                    { b: 'Formulaire de contact.' },
                                    " Nom, adresse e-mail et contenu du message. Le formulaire ",
                                    { b: "n'envoie rien à un serveur qui nous appartient" },
                                    " : il prépare un e-mail et l'ouvre dans le logiciel de messagerie de l'appareil, de sorte que le message n'est envoyé que si vous cliquez sur « envoyer » dans votre propre client. Les données arrivent donc directement dans la boîte de réception du responsable.",
                                ],
                                [
                                    { b: 'Assistant conversationnel.' },
                                    " Lorsque l'assistant IA est actif, le contenu des messages écrits est transmis au service qui génère la réponse et n'est traité qu'à cette fin. Les conversations sont également conservées dans votre propre navigateur (voir la ",
                                    { to: '/cookies', label: 'Politique de Cookies' },
                                    ').',
                                ],
                                [
                                    { b: 'Préférences de navigation.' },
                                    " Langue et thème (clair/sombre), stockés localement dans le navigateur. Ils n'identifient personne et ne quittent jamais l'appareil.",
                                ],
                                [
                                    { b: "Données techniques d'hébergement." },
                                    " Comme sur tout site web, l'hébergeur peut enregistrer des adresses IP et des données de connexion à des fins de sécurité et de fonctionnement du service.",
                                ],
                            ],
                        },
                        {
                            p: [
                                { b: "Aucun outil d'analyse, de suivi, de profilage ou de publicité n'est utilisé" },
                                ", et aucune décision automatisée produisant des effets juridiques n'est prise.",
                            ],
                        },
                    ],
                },
                {
                    title: 'Finalité du traitement',
                    blocks: [
                        {
                            list: [
                                "Répondre aux demandes, propositions ou offres professionnelles reçues via le formulaire de contact ou par e-mail.",
                                "Générer les réponses de l'assistant conversationnel lorsque vous choisissez de l'utiliser.",
                                "Mémoriser vos préférences de langue et de thème d'une visite à l'autre.",
                                "Assurer la sécurité et le bon fonctionnement du site.",
                            ],
                        },
                        {
                            p: "Les données ne sont jamais utilisées pour l'envoi de communications commerciales ni à d'autres fins que celles indiquées ci-dessus.",
                        },
                    ],
                },
                {
                    title: 'Base légale',
                    blocks: [
                        {
                            list: [
                                [
                                    { b: 'Consentement' },
                                    " (art. 6.1.a RGPD) pour l'envoi du formulaire de contact et l'utilisation de l'assistant conversationnel. Il est donné expressément en cochant la case du formulaire ou en écrivant volontairement dans le chat, et peut être retiré à tout moment.",
                                ],
                                [
                                    { b: 'Intérêt légitime' },
                                    " (art. 6.1.f RGPD) pour maintenir la sécurité du site et traiter la correspondance professionnelle reçue.",
                                ],
                                [
                                    { b: 'Nécessité technique' },
                                    " pour le stockage local des préférences, dispensé de consentement car strictement nécessaire au service demandé.",
                                ],
                            ],
                        },
                    ],
                },
                {
                    title: 'Conservation des données',
                    blocks: [
                        {
                            list: [
                                [
                                    { b: 'Messages de contact :' },
                                    " conservés pendant la durée de la relation ou de l'intérêt professionnel puis, ensuite, le temps nécessaire pour répondre à d'éventuelles obligations légales.",
                                ],
                                [
                                    { b: "Conversations de l'assistant :" },
                                    " elles restent dans votre navigateur jusqu'à ce que vous les supprimiez ou effaciez les données du site. Aucune copie liée à une identité n'est conservée.",
                                ],
                                [
                                    { b: 'Préférences de langue et de thème :' },
                                    " jusqu'à l'effacement des données du navigateur.",
                                ],
                            ],
                        },
                    ],
                },
                {
                    title: 'Destinataires',
                    blocks: [
                        {
                            p: [
                                { b: "Aucune donnée n'est cédée ni vendue à des tiers." },
                                " Seuls interviennent les prestataires nécessaires au fonctionnement du site, agissant comme sous-traitants ou prestataires de services :",
                            ],
                        },
                        {
                            list: [
                                "Hébergeur web et infrastructure de l'assistant IA.",
                                "Fournisseur du service de messagerie par lequel les messages sont reçus.",
                                [
                                    "Services de distribution de polices et d'icônes (Google Fonts et jsDelivr), qui reçoivent l'adresse IP du navigateur au chargement de ces ressources. Détaillé dans la ",
                                    { to: '/cookies', label: 'Politique de Cookies' },
                                    '.',
                                ],
                            ],
                        },
                        {
                            p: "Certains de ces prestataires peuvent réaliser des transferts internationaux de données, encadrés par les garanties prévues au chapitre V du RGPD.",
                        },
                    ],
                },
                {
                    title: 'Droits',
                    blocks: [
                        { p: 'Toute personne peut exercer les droits suivants sur ses données :' },
                        {
                            list: [
                                [{ b: 'Accès' }, " — savoir quelles données vous concernant sont traitées."],
                                [{ b: 'Rectification' }, ' — corriger des données inexactes.'],
                                [{ b: 'Effacement' }, ' — en demander la suppression.'],
                                [{ b: 'Opposition' }, ' — vous opposer à un traitement précis.'],
                                [{ b: 'Limitation' }, ' — restreindre temporairement le traitement.'],
                                [{ b: 'Portabilité' }, ' — recevoir les données dans un format structuré.'],
                                [{ b: 'Retrait du consentement' }, ' — à tout moment, sans effet rétroactif.'],
                            ],
                        },
                        {
                            p: [
                                'Pour les exercer, il suffit d\'écrire à ',
                                { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                                " en indiquant le droit que vous souhaitez exercer. La demande est traitée dans un délai maximal d'un mois.",
                            ],
                        },
                        {
                            p: [
                                "Si vous estimez que le traitement n'est pas conforme à la réglementation, vous avez le droit d'introduire une réclamation auprès de l'Agence espagnole de protection des données : ",
                                { a: 'www.aepd.es', href: 'https://www.aepd.es' },
                                '.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Sécurité',
                    blocks: [
                        {
                            p: "Des mesures techniques et organisationnelles raisonnables sont appliquées pour protéger les informations : communication chiffrée via HTTPS, accès restreint à la boîte mail de réception des messages et minimisation des données traitées, limitées au strict nécessaire.",
                        },
                        {
                            p: "Aucun système ne peut garantir une sécurité absolue, mais tout incident affectant des données personnelles serait géré conformément au RGPD.",
                        },
                    ],
                },
                {
                    title: 'Contact',
                    blocks: [
                        {
                            p: [
                                'Pour toute question sur cette politique ou sur le traitement des données : ',
                                { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                                '.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Modifications de cette politique',
                    blocks: [
                        {
                            p: "Cette politique peut être mise à jour si les fonctionnalités du site ou la réglementation applicable évoluent. La version en vigueur est toujours celle publiée sur cette page, et la date de dernière mise à jour figure en haut du document.",
                        },
                    ],
                },
            ],
        },

        // -------------------------------------------------------------- /cookies
        cookies: {
            title: ['Politique de', 'cookies'],
            docTitle: 'Politique de Cookies',
            sections: [
                {
                    title: "Que sont les cookies",
                    blocks: [
                        {
                            p: "Un cookie est un petit fichier qu'un site web enregistre dans le navigateur pour mémoriser des informations d'une visite à l'autre. À côté des cookies existent d'autres technologies de stockage sur l'appareil, comme le stockage local (localStorage), soumises aux mêmes règles lorsqu'elles ne sont pas strictement nécessaires.",
                        },
                    ],
                },
                {
                    title: 'Cookies utilisés par ce site',
                    blocks: [
                        {
                            p: [
                                'Ce site ',
                                { b: "n'installe aucun cookie, ni propre ni tiers" },
                                " : pas de cookies d'analyse, de publicité, de suivi ni de réseaux sociaux. C'est pourquoi aucune bannière de consentement n'est affichée.",
                            ],
                        },
                        {
                            p: "Ce qui est utilisé, en revanche, c'est le stockage local du navigateur, strictement technique et nécessaire au fonctionnement de ce que vous demandez. Le détail figure dans la section suivante.",
                        },
                    ],
                },
                {
                    title: 'Stockage local utilisé',
                    blocks: [
                        {
                            p: "Ces données restent dans le navigateur de votre appareil, ne sont transmises à aucun serveur et n'identifient personne :",
                        },
                        {
                            kv: [
                                { k: 'ht-portfolio-lang', v: "Langue choisie (ES / EN / FR), pour ne pas la redemander à chaque visite." },
                                { k: 'ht-portfolio-theme', v: 'Thème clair ou sombre sélectionné.' },
                                { k: 'ht-chat-conversations', v: "Historique des conversations de l'assistant, pour pouvoir le retrouver au retour." },
                            ],
                        },
                        {
                            p: "Il n'expire pas automatiquement : il subsiste jusqu'à l'effacement des données du site depuis le navigateur.",
                        },
                    ],
                },
                {
                    title: 'Services tiers',
                    blocks: [
                        {
                            p: "Le site charge des polices et des icônes depuis des réseaux de distribution externes. Ces services n'installent pas de cookies ici, mais lors de la requête ils reçoivent l'adresse IP du navigateur ainsi que des données techniques de base :",
                        },
                        {
                            list: [
                                [
                                    { b: 'Google Fonts' },
                                    ' — polices du site. ',
                                    { a: 'Politique de confidentialité', href: 'https://policies.google.com/privacy' },
                                    '.',
                                ],
                                [
                                    { b: 'jsDelivr' },
                                    ' — icônes de technologies. ',
                                    { a: 'Politique de confidentialité', href: 'https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net' },
                                    '.',
                                ],
                            ],
                        },
                        {
                            p: "Les liens sortants vers GitHub, LinkedIn ou Medium peuvent installer leurs propres cookies, mais seulement une fois ce site quitté et selon les politiques de chaque plateforme.",
                        },
                    ],
                },
                {
                    title: 'Comment supprimer ces données',
                    blocks: [
                        {
                            p: "Le stockage local peut être effacé à tout moment depuis le navigateur, sans empêcher l'utilisation du site : vous perdrez seulement les préférences enregistrées et l'historique de l'assistant.",
                        },
                        {
                            list: [
                                [{ b: 'Chrome' }, " — Paramètres → Confidentialité et sécurité → Effacer les données de navigation."],
                                [{ b: 'Firefox' }, ' — Paramètres → Vie privée et sécurité → Cookies et données de sites.'],
                                [{ b: 'Safari' }, ' — Préférences → Confidentialité → Gérer les données de sites web.'],
                                [{ b: 'Edge' }, ' — Paramètres → Cookies et autorisations de site.'],
                            ],
                        },
                    ],
                },
                {
                    title: 'Modifications de cette politique',
                    blocks: [
                        {
                            p: "Si des cookies ou des outils de mesure sont ajoutés à l'avenir, cette politique sera mise à jour et, lorsque la réglementation l'exige, le consentement préalable sera recueilli au moyen de l'avis correspondant.",
                        },
                    ],
                },
                {
                    title: 'Contact',
                    blocks: [
                        {
                            p: [
                                'Pour toute question sur cette politique : ',
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

export default fr;
