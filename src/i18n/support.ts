export const supportTranslations = {
  de: {
    htmlLang: 'de',
    appStoreBadgeLocale: 'de-de',
    pageTitle: 'Support – Shimmr',
    pageDescription: 'Erhalte Hilfe und Support für die Shimmr App.',
    headings: {
      customerSupport: 'Kundensupport',
      contactUs: 'Kontakt',
      download: 'Shimmr herunterladen',
      faq: 'Häufig gestellte Fragen',
      legal: 'Rechtliche Informationen',
    },
    body: {
      customerSupport:
        'Willkommen auf der Shimmr-Supportseite. Wir helfen dir, das Beste aus deiner Klangerfahrung herauszuholen. Bei Fragen, Feedback oder Hilfe mit der App steht unser Team bereit.',
      contactUs:
        'Der einfachste Weg, uns zu erreichen, ist per E-Mail. Wir bemühen uns, alle Anfragen innerhalb von 24–48 Stunden an Werktagen zu beantworten.',
      contactEmail: 'Schreib uns an:',
      download: 'Hol dir die neueste Version von Shimmr im App Store:',
      faq: 'Wir arbeiten an einem umfassenden FAQ-Bereich. Zögere nicht, uns bei Fragen zu Shimmr zu kontaktieren.',
      legal:
        'Informationen darüber, wie wir deine Daten verarbeiten und die Nutzungsbedingungen unseres Dienstes findest du in unseren rechtlichen Dokumenten:',
    },
    links: {
      privacyPolicy: 'Datenschutzrichtlinie',
      termsOfService: 'Nutzungsbedingungen',
    },
    appStoreBadgeAlt: 'Laden im App Store',
  },
  es: {
    htmlLang: 'es',
    appStoreBadgeLocale: 'es-es',
    pageTitle: 'Soporte – Shimmr',
    pageDescription: 'Obtén ayuda y soporte para la app Shimmr.',
    headings: {
      customerSupport: 'Atención al cliente',
      contactUs: 'Contáctanos',
      download: 'Descargar Shimmr',
      faq: 'Preguntas frecuentes',
      legal: 'Información legal',
    },
    body: {
      customerSupport:
        'Bienvenido a la página de soporte de Shimmr. Estamos aquí para ayudarte a sacar el máximo partido de tu experiencia sonora. Si tienes preguntas, comentarios o necesitas ayuda con la app, nuestro equipo está listo.',
      contactUs:
        'La forma más fácil de contactarnos es por correo electrónico. Respondemos todas las consultas en un plazo de 24–48 horas en días laborables.',
      contactEmail: 'Escríbenos a:',
      download: 'Obtén la última versión de Shimmr en el App Store:',
      faq: 'Estamos preparando una sección de preguntas frecuentes. Mientras tanto, no dudes en contactarnos con cualquier pregunta sobre Shimmr.',
      legal:
        'Para obtener información sobre cómo gestionamos tus datos y los términos de uso de nuestro servicio, consulta nuestros documentos legales:',
    },
    links: {
      privacyPolicy: 'Política de privacidad',
      termsOfService: 'Términos de servicio',
    },
    appStoreBadgeAlt: 'Descargar en el App Store',
  },
  fr: {
    htmlLang: 'fr',
    appStoreBadgeLocale: 'fr-fr',
    pageTitle: 'Support – Shimmr',
    pageDescription: "Obtenez de l'aide et du support pour l'app Shimmr.",
    headings: {
      customerSupport: 'Service client',
      contactUs: 'Nous contacter',
      download: 'Télécharger Shimmr',
      faq: 'Questions fréquentes',
      legal: 'Informations légales',
    },
    body: {
      customerSupport:
        "Bienvenue sur la page d'assistance de Shimmr. Nous sommes là pour vous aider à profiter pleinement de votre expérience sonore. Pour toute question, commentaire ou aide avec l'app, notre équipe est prête à vous aider.",
      contactUs:
        'Le moyen le plus simple de nous contacter est par e-mail. Nous répondons à toutes les demandes dans un délai de 24 à 48 heures les jours ouvrés.',
      contactEmail: 'Écrivez-nous à :',
      download: "Obtenez la dernière version de Shimmr sur l'App Store :",
      faq: "Nous préparons une section FAQ complète. En attendant, n'hésitez pas à nous contacter pour toute question sur Shimmr.",
      legal:
        "Pour en savoir plus sur la façon dont nous traitons vos données et les conditions d'utilisation de notre service, consultez nos documents légaux :",
    },
    links: {
      privacyPolicy: 'Politique de confidentialité',
      termsOfService: "Conditions d'utilisation",
    },
    appStoreBadgeAlt: "Télécharger dans l'App Store",
  },
  ja: {
    htmlLang: 'ja',
    appStoreBadgeLocale: 'ja-jp',
    pageTitle: 'サポート – Shimmr',
    pageDescription: 'Shimmrアプリのヘルプとサポートをご覧ください。',
    headings: {
      customerSupport: 'カスタマーサポート',
      contactUs: 'お問い合わせ',
      download: 'Shimmrをダウンロード',
      faq: 'よくある質問',
      legal: '法的情報',
    },
    body: {
      customerSupport:
        'Shimmrのサポートページへようこそ。サウンドセラピー体験を最大限に活用するお手伝いをいたします。ご質問、フィードバック、またはアプリに関するサポートが必要な場合は、お気軽にお問い合わせください。',
      contactUs:
        'お問い合わせはメールが最も簡単です。営業日の24〜48時間以内にご返答いたします。',
      contactEmail: 'メールはこちら：',
      download: 'App StoreからShimmrの最新バージョンをダウンロード：',
      faq: '包括的なFAQセクションを準備中です。Shimmrに関するご質問はお気軽にお問い合わせください。',
      legal:
        'データの取り扱いおよびサービス利用規約については、以下の法的文書をご参照ください：',
    },
    links: {
      privacyPolicy: 'プライバシーポリシー',
      termsOfService: '利用規約',
    },
    appStoreBadgeAlt: 'App Storeでダウンロード',
  },
} as const;

export type SupportLocale = keyof typeof supportTranslations;
