// Preencha estes campos quando os canais oficiais estiverem definidos.
export const siteConfig = {
  whatsapp: '5562998086685',
  email: '',
  instagram: '',
  contactEndpoint: '', // URL HTTPS que recebe POST JSON do formulário
}

export function whatsappUrl(message = 'Olá! Gostaria de conversar sobre um projeto.') {
  return siteConfig.whatsapp
    ? `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`
    : ''
}
