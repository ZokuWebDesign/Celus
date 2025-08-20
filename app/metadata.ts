export const metadata = {
  title: {
    template: '%s | Celus',
    default: 'Celus - Avaliação Inteligente de Nódulos Tireoidianos ⚕️',
  },
  description: 'Aplicação clínica para avaliação estruturada de nódulos tireoidianos usando o protocolo ACR TI-RADS. Suporte profissional para interpretação de ultrassom com clareza, velocidade e precisão.',
  metadataBase: new URL('https://celus.com.br'),
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://celus.com.br',
    siteName: 'Celus',
    title: 'Celus - Avaliação Inteligente de Nódulos Tireoidianos ⚕️',
    description: 'Aplicação clínica para avaliação estruturada de nódulos tireoidianos usando o protocolo ACR TI-RADS. Suporte profissional para interpretação de ultrassom com clareza, velocidade e precisão.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Celus - Avaliação Inteligente de Nódulos Tireoidianos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Celus - Avaliação Inteligente de Nódulos Tireoidianos ⚕️',
    description: 'Aplicação clínica para avaliação estruturada de nódulos tireoidianos usando o protocolo ACR TI-RADS. Suporte profissional para interpretação de ultrassom.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Adicione seu código de verificação do Google
  },
};
