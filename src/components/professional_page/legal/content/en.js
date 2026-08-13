import { CONTACT_EMAIL, OWNER_NAME, OWNER_LOCATION, OWNER_TAX_ID, OWNER_ADDRESS } from '../legalInfo.js';

// English translation of the legal documents. Same structure as content/es.js —
// see that file for the block/rich-text format. Spanish is the source of truth:
// any change to the legal wording starts there and is mirrored here and in fr.js.
const en = {
    ui: {
        eyebrow: 'Legal',
        updatedLabel: 'Last updated',
        back: 'Back to portfolio',
    },

    docs: {
        // ---------------------------------------------------------------- /legal
        notice: {
            title: ['Legal', 'notice'],
            docTitle: 'Legal Notice',
            sections: [
                {
                    title: 'Site owner',
                    blocks: [
                        {
                            p: 'In compliance with the disclosure duty set out in Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following details are provided:',
                        },
                        {
                            kv: [
                                { k: 'Owner', v: OWNER_NAME },
                                { k: 'Location', v: OWNER_LOCATION },
                                { k: 'Tax ID', v: OWNER_TAX_ID },
                                { k: 'Address', v: OWNER_ADDRESS },
                                { k: 'Email', v: { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` } },
                                { k: 'Activity', v: 'Professional portfolio, informational purposes only' },
                            ],
                        },
                    ],
                },
                {
                    title: 'Purpose',
                    blocks: [
                        {
                            p: 'This website is a professional portfolio. Its purpose is purely informational: to present experience, projects, articles and professional contact channels.',
                        },
                        {
                            p: 'No products or services are sold through this site, there is no user registration, and no financial transactions of any kind take place here.',
                        },
                    ],
                },
                {
                    title: 'Terms of use',
                    blocks: [
                        {
                            p: 'Access to this site is free and open, and requires no prior registration. Browsing it implies acceptance of this legal notice as published at the time of access.',
                        },
                        { p: 'Visitors agree to:' },
                        {
                            list: [
                                'Make appropriate use of the content and not use it for unlawful purposes or in ways harmful to third parties.',
                                'Not introduce malicious code or perform actions that could damage, overload or disable the site.',
                                'Not attempt to access restricted areas or systems.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Intellectual property',
                    blocks: [
                        {
                            p: [
                                'The design, texts, source code, images and other original content on this site belong to ',
                                { b: OWNER_NAME },
                                ', unless another author is credited.',
                            ],
                        },
                        {
                            p: 'Reproduction, distribution or modification for commercial purposes without express authorisation is prohibited. Quoting or linking to the content is allowed, provided the source is credited.',
                        },
                        {
                            p: 'Third-party trademarks, logos and trade names appearing on the site (technologies, previous employers, publications) belong to their respective owners and are shown for descriptive or informational purposes only.',
                        },
                    ],
                },
                {
                    title: 'Third-party links',
                    blocks: [
                        {
                            p: 'This site contains links to external pages (GitHub, LinkedIn, Medium, among others). Their content and privacy practices are outside our control, and no responsibility is accepted for them. Their inclusion implies no relationship, endorsement or supervision.',
                        },
                    ],
                },
                {
                    title: 'Disclaimer',
                    blocks: [
                        {
                            p: 'The content of this site is provided with all reasonable care, but it may contain inaccuracies or become outdated. Uninterrupted availability and freedom from technical errors are not guaranteed.',
                        },
                        {
                            p: 'The information published is informative in nature and does not constitute professional advice of any kind.',
                        },
                    ],
                },
                {
                    title: 'Data protection',
                    blocks: [
                        {
                            p: [
                                'The processing of personal data arising from the use of this site is described in the ',
                                { to: '/privacy', label: 'Privacy Policy' },
                                '. Information about cookies and local storage is available in the ',
                                { to: '/cookies', label: 'Cookie Policy' },
                                '.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Applicable law',
                    blocks: [
                        {
                            p: 'This legal notice is governed by Spanish law. Any dispute arising from the use of the site shall be settled by the courts having jurisdiction under the applicable regulations.',
                        },
                    ],
                },
                {
                    title: 'Contact',
                    blocks: [
                        {
                            p: [
                                'For any question regarding this legal notice: ',
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
            title: ['Privacy', 'policy'],
            docTitle: 'Privacy Policy',
            sections: [
                {
                    title: 'Data controller',
                    blocks: [
                        {
                            kv: [
                                { k: 'Controller', v: OWNER_NAME },
                                { k: 'Location', v: OWNER_LOCATION },
                                { k: 'Tax ID', v: OWNER_TAX_ID },
                                { k: 'Address', v: OWNER_ADDRESS },
                                { k: 'Email', v: { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` } },
                            ],
                        },
                        {
                            p: 'This site has no Data Protection Officer, as none of the circumstances requiring one apply.',
                        },
                    ],
                },
                {
                    title: 'Data collected',
                    blocks: [
                        {
                            p: [
                                'This site has ',
                                { b: 'no user database' },
                                ' and no registration system. The only data that may be processed is:',
                            ],
                        },
                        {
                            list: [
                                [
                                    { b: 'Contact form.' },
                                    ' Name, email address and message content. The form ',
                                    { b: 'sends nothing to any server of ours' },
                                    ': it composes an email and opens it in the device\'s own mail client, so the message is only sent if you press "send" there. The data therefore arrives directly in the controller\'s inbox.',
                                ],
                                [
                                    { b: 'Conversational assistant.' },
                                    ' When the AI assistant is active, the content of the messages you write is sent to the service that generates the reply and is processed for that purpose only. Conversations are also stored in your own browser (see the ',
                                    { to: '/cookies', label: 'Cookie Policy' },
                                    ').',
                                ],
                                [
                                    { b: 'Browsing preferences.' },
                                    ' Language and theme (light/dark), stored locally in the browser. They identify no one and never leave the device.',
                                ],
                                [
                                    { b: 'Technical hosting data.' },
                                    ' As with any website, the hosting provider may log IP addresses and connection data for security and service-operation purposes.',
                                ],
                            ],
                        },
                        {
                            p: [
                                { b: 'No analytics, tracking, profiling or advertising tools are used' },
                                ', and no automated decisions with legal effects on individuals are made.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Purpose of processing',
                    blocks: [
                        {
                            list: [
                                'Replying to enquiries, proposals or job offers received through the contact form or by email.',
                                'Generating the conversational assistant\'s replies when you choose to use it.',
                                'Remembering your language and theme preferences between visits.',
                                'Maintaining the security and correct operation of the site.',
                            ],
                        },
                        {
                            p: 'Data is never used to send marketing communications or for any purpose other than those listed above.',
                        },
                    ],
                },
                {
                    title: 'Legal basis',
                    blocks: [
                        {
                            list: [
                                [
                                    { b: 'Consent' },
                                    ' (art. 6.1.a GDPR) for submitting the contact form and using the conversational assistant. It is given explicitly by ticking the form checkbox or by voluntarily writing in the chat, and may be withdrawn at any time.',
                                ],
                                [
                                    { b: 'Legitimate interest' },
                                    ' (art. 6.1.f GDPR) for keeping the site secure and handling incoming professional correspondence.',
                                ],
                                [
                                    { b: 'Technical necessity' },
                                    ' for storing preferences locally — exempt from consent, as it is storage strictly necessary to provide the service requested.',
                                ],
                            ],
                        },
                    ],
                },
                {
                    title: 'Data retention',
                    blocks: [
                        {
                            list: [
                                [
                                    { b: 'Contact messages:' },
                                    ' kept for as long as the professional relationship or interest lasts and, afterwards, for the period needed to address any legal liabilities.',
                                ],
                                [
                                    { b: 'Assistant conversations:' },
                                    ' they stay in your browser until you delete them or clear the site data. No identity-linked copies are retained.',
                                ],
                                [
                                    { b: 'Language and theme preferences:' },
                                    ' until browser data is cleared.',
                                ],
                            ],
                        },
                    ],
                },
                {
                    title: 'Recipients',
                    blocks: [
                        {
                            p: [
                                { b: 'Data is neither sold nor transferred to third parties.' },
                                ' Only the providers needed to run the site are involved, acting as processors or service providers:',
                            ],
                        },
                        {
                            list: [
                                'Web hosting provider and the infrastructure behind the AI assistant.',
                                'Email service provider through which messages are received.',
                                [
                                    'Font and icon delivery services (Google Fonts and jsDelivr), which receive the browser\'s IP address when those resources load. Detailed in the ',
                                    { to: '/cookies', label: 'Cookie Policy' },
                                    '.',
                                ],
                            ],
                        },
                        {
                            p: 'Some of these providers may carry out international data transfers, covered by the safeguards set out in Chapter V of the GDPR.',
                        },
                    ],
                },
                {
                    title: 'Your rights',
                    blocks: [
                        { p: 'Anyone may exercise the following rights over their data:' },
                        {
                            list: [
                                [{ b: 'Access' }, ' — find out what data about you is processed.'],
                                [{ b: 'Rectification' }, ' — correct inaccurate data.'],
                                [{ b: 'Erasure' }, ' — request its deletion.'],
                                [{ b: 'Objection' }, ' — object to a specific processing activity.'],
                                [{ b: 'Restriction' }, ' — temporarily limit the processing.'],
                                [{ b: 'Portability' }, ' — receive the data in a structured format.'],
                                [{ b: 'Withdrawal of consent' }, ' — at any time, without retroactive effect.'],
                            ],
                        },
                        {
                            p: [
                                'To exercise them, simply write to ',
                                { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                                ' stating which right you wish to exercise. Requests are answered within one month at most.',
                            ],
                        },
                        {
                            p: [
                                'If you believe the processing does not comply with the regulations, you have the right to lodge a complaint with the Spanish Data Protection Agency: ',
                                { a: 'www.aepd.es', href: 'https://www.aepd.es' },
                                '.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Security',
                    blocks: [
                        {
                            p: 'Reasonable technical and organisational measures are applied to protect the information: encrypted communication over HTTPS, restricted access to the mailbox where messages are received, and data minimisation — only what is strictly necessary is processed.',
                        },
                        {
                            p: 'No system can guarantee absolute security, but any incident affecting personal data would be handled as required by the GDPR.',
                        },
                    ],
                },
                {
                    title: 'Contact',
                    blocks: [
                        {
                            p: [
                                'For any question about this policy or about data processing: ',
                                { a: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
                                '.',
                            ],
                        },
                    ],
                },
                {
                    title: 'Changes to this policy',
                    blocks: [
                        {
                            p: 'This policy may be updated if the site\'s features or the applicable regulations change. The version in force is always the one published on this page, and the last-updated date appears at the top of the document.',
                        },
                    ],
                },
            ],
        },

        // -------------------------------------------------------------- /cookies
        cookies: {
            title: ['Cookie', 'policy'],
            docTitle: 'Cookie Policy',
            sections: [
                {
                    title: 'What cookies are',
                    blocks: [
                        {
                            p: 'A cookie is a small file that a website stores in your browser to remember information between visits. Alongside cookies there are other device-storage technologies, such as local storage (localStorage), subject to the same rules when they are not strictly necessary.',
                        },
                    ],
                },
                {
                    title: 'Cookies used by this site',
                    blocks: [
                        {
                            p: [
                                'This site sets ',
                                { b: 'no first-party or third-party cookies' },
                                ': there are no analytics, advertising, tracking or social-media cookies. That is why no cookie consent banner is shown.',
                            ],
                        },
                        {
                            p: 'What it does use is browser local storage, strictly technical and necessary for the functionality you request. It is detailed in the next section.',
                        },
                    ],
                },
                {
                    title: 'Local storage used',
                    blocks: [
                        {
                            p: 'This data stays in your device\'s browser, never travels to any server and identifies no one:',
                        },
                        {
                            kv: [
                                { k: 'ht-portfolio-lang', v: 'Chosen language (ES / EN / FR), so it is not asked again on every visit.' },
                                { k: 'ht-portfolio-theme', v: 'Selected light or dark theme.' },
                                { k: 'ht-chat-conversations', v: 'Assistant conversation history, so it can be restored when you come back.' },
                            ],
                        },
                        {
                            p: 'It does not expire automatically: it remains until the site data is cleared from the browser.',
                        },
                    ],
                },
                {
                    title: 'Third-party services',
                    blocks: [
                        {
                            p: 'The site loads fonts and icons from external delivery networks. Those services set no cookies here, but when the resource is requested they receive the browser\'s IP address and basic technical data about the request:',
                        },
                        {
                            list: [
                                [
                                    { b: 'Google Fonts' },
                                    ' — site typefaces. ',
                                    { a: 'Privacy policy', href: 'https://policies.google.com/privacy' },
                                    '.',
                                ],
                                [
                                    { b: 'jsDelivr' },
                                    ' — technology icons. ',
                                    { a: 'Privacy policy', href: 'https://www.jsdelivr.com/terms/privacy-policy-jsdelivr-net' },
                                    '.',
                                ],
                            ],
                        },
                        {
                            p: 'Outbound links to GitHub, LinkedIn or Medium may set their own cookies, but only once you have left this site and under each platform\'s own policies.',
                        },
                    ],
                },
                {
                    title: 'How to delete this data',
                    blocks: [
                        {
                            p: 'Local storage can be cleared from your browser at any time without preventing you from using the site: you will only lose the saved preferences and the assistant history.',
                        },
                        {
                            list: [
                                [{ b: 'Chrome' }, ' — Settings → Privacy and security → Clear browsing data.'],
                                [{ b: 'Firefox' }, ' — Settings → Privacy & Security → Cookies and Site Data.'],
                                [{ b: 'Safari' }, ' — Preferences → Privacy → Manage Website Data.'],
                                [{ b: 'Edge' }, ' — Settings → Cookies and site permissions.'],
                            ],
                        },
                    ],
                },
                {
                    title: 'Changes to this policy',
                    blocks: [
                        {
                            p: 'If cookies or measurement tools are added in the future, this policy will be updated and, where the regulations require it, prior consent will be requested through the appropriate notice.',
                        },
                    ],
                },
                {
                    title: 'Contact',
                    blocks: [
                        {
                            p: [
                                'For any question about this policy: ',
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

export default en;
