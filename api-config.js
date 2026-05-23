window.ZAITPAY_CONFIG = {
  BASE_URL: 'https://api.zaitpay.com.br',
  PREFIX: '',
  TIMEOUT: 20000,
  // Altere aqui caso seu backend use nomes diferentes.
  ENDPOINTS: {
    login: ['/auth/login', '/login', '/api/auth/login'],
    register: ['/auth/register', '/clientes', '/users/register', '/api/auth/register'],
    me: ['/auth/me', '/me', '/api/auth/me'],
    clientes: ['/clientes', '/users', '/api/clientes'],
    extrato: ['/extrato', '/transactions', '/api/extrato'],
    pix: ['/pix', '/pix/transfer', '/transactions/pix', '/api/pix'],
    boleto: ['/boletos', '/boleto', '/api/boletos'],
    paymentLink: ['/links-pagamento', '/payment-links', '/checkout/links', '/api/payment-links'],
    webhooks: ['/webhooks', '/api/webhooks'],
    baas: ['/baas', '/api/baas']
  }
};
