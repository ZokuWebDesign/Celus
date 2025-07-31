
// WhatsApp Links
export const WHATSAPP_LINKS = {
  PATIENT: {
    CONTACT: 'https://api.whatsapp.com/send/?phone=5515996945695&text=oi,%20gostaria%20de%20agendar%20uma%20consulta',
    FAQ: 'https://api.whatsapp.com/send/?phone=5515996945695&text=Tenho+dúvidas%2C+poderia+me+ajudar%3F&type=phone_number&app_absent=0'
  },
  PROFESSIONAL: {
    CONTACT: 'https://api.whatsapp.com/send/?phone=5515996945695&text=Ol%C3%A1%21+Tenho+interesse+em+atender+pelo+Syd+e+gostaria+de+saber+mais.&type=phone_number&app_absent=0',
    FAQ: 'https://api.whatsapp.com/send/?phone=5515996945695&text=Ol%C3%A1%21+Tenho+interesse+em+atender+pelo+Syd+e+gostaria+de+saber+mais.&type=phone_number&app_absent=0'
    
  },
  RH: {
    CONTACT: 'https://api.whatsapp.com/send/?phone=5515996945695&text=oi,%20gostaria%20de%20agendar%20uma%20consulta',
    PITCH: 'https://api.whatsapp.com/send/?phone=5515996945695&text=Olá%21+Tenho+interesse%21+Quero+agendar+uma+apresentação+para+minha+empresa%21&type=phone_number&app_absent=0',
    FAQ: 'https://api.whatsapp.com/send/?phone=5515996945695&text=Tenho+dúvidas%2C+poderia+me+ajudar%3F&type=phone_number&app_absent=0'
  }
} as const;

// Authentication and Registration Links
export const AUTH_LINKS = {
  PROFESSIONAL: {
    SIGNUP: 'https://syd-83174.bubbleapps.io/auth?t=cadastro&p=Profissional',
    LOGIN: 'https://syd-83174.bubbleapps.io/auth?t=login&p=Profissional',
    FORGOT_PASSWORD: 'https://syd-83174.bubbleapps.io/auth?t=esqueci_senha&p=Profissional'
  },
  PATIENT: {
    SIGNUP: 'https://syd-83174.bubbleapps.io/auth?t=cadastro&p=Paciente',
    LOGIN: 'https://syd-83174.bubbleapps.io/auth?t=login&p=Paciente',
    FORGOT_PASSWORD: 'https://syd-83174.bubbleapps.io/auth?t=esqueci_senha&p=Paciente'
  },
  RH: {
    SIGNUP: 'https://syd-83174.bubbleapps.io/auth?t=cadastro&p=RH',
    LOGIN: 'https://syd-83174.bubbleapps.io/auth?t=login&p=RH',
    FORGOT_PASSWORD: 'https://syd-83174.bubbleapps.io/auth?t=esqueci_senha&p=RH'
  }
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  FACEBOOK: 'https://www.facebook.com/people/Syd-App/61578179043071/',
  INSTAGRAM: 'https://instagram.com/syd.app',
  LINKEDIN: 'https://linkedin.com/company/sydapp',
  YOUTUBE: 'https://youtube.com/@sydapp',
  TIKTOK: 'https://tiktok.com/@syd.app8',
  X: 'https://x.com/syd_app',
  MAIL: 'mailto:suporte@sydapp.com.br',
  NUMBER: 'tel:+5515996945695',
  LOCAL: 'https://maps.app.goo.gl/ghBRMu5z5WcXG5MSA'
} as const;

// App Store Links
export const STORE_LINKS = {
  GOOGLE_PLAY: 'https://play.google.com/store/apps/details?id=com.syd.app',
  APP_STORE: 'https://apps.apple.com/app/syd/id123456789'
} as const;

// Legal Links
export const LEGAL_LINKS = {
  PRIVACY_POLICY: '/politica',
  TERMS_OF_USE: '/termos',
  COOKIES_POLICY: '/cookies'
} as const;

// External Resources
export const RESOURCE_LINKS = {
  HELP_CENTER: 'https://help.syd.app',
  BLOG: 'https://blog.syd.app',
  CONTACT: 'https://syd.app/contact'
} as const;

// Dev Resources
export const DEV_LINKS = {
  API: {
    RENDER: 'https://api.sydapp.com.br'
  }
} as const;