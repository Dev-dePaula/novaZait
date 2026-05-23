(function () {
  const cfg = window.ZAITPAY_CONFIG || {};

  function normalizeUrl(path) {
    const base = (cfg.BASE_URL || '').replace(/\/$/, '');
    const prefix = (cfg.PREFIX || '').replace(/^\//, '').replace(/\/$/, '');
    const cleanPath = String(path || '').replace(/^\//, '');
    return [base, prefix, cleanPath].filter(Boolean).join('/');
  }

  function getToken() {
    return localStorage.getItem('zaitpay_token') || localStorage.getItem('token') || '';
  }

  function saveAuth(payload) {
    if (!payload || typeof payload !== 'object') return;
    const token = payload.token || payload.accessToken || payload.access_token || payload.jwt;
    if (token) {
      localStorage.setItem('zaitpay_token', token);
      localStorage.setItem('token', token);
    }
    const user = payload.user || payload.usuario || payload.data?.user || payload.data?.usuario;
    if (user) localStorage.setItem('activeUser', JSON.stringify(user));
  }

  async function request(path, options = {}) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), cfg.TIMEOUT || 20000);
    const token = getToken();

    try {
      const res = await fetch(normalizeUrl(path), {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
          ...(options.headers || {})
        }
      });

      const text = await res.text();
      let data = null;
      try { data = text ? JSON.parse(text) : null; } catch { data = text; }

      if (!res.ok) {
        const msg = (data && (data.message || data.error || data.erro)) || `Erro HTTP ${res.status}`;
        const error = new Error(msg);
        error.status = res.status;
        error.data = data;
        throw error;
      }
      return data;
    } finally {
      clearTimeout(timeout);
    }
  }

  async function tryEndpoints(group, options) {
    const endpoints = cfg.ENDPOINTS?.[group] || [];
    let lastError;
    for (const endpoint of endpoints) {
      try {
        return await request(endpoint, options);
      } catch (err) {
        lastError = err;
        // Se o endpoint existe, mas rejeitou por senha/token/validação, não tenta outros.
        if (![404, 405].includes(err.status)) throw err;
      }
    }
    throw lastError || new Error(`Nenhum endpoint configurado para ${group}`);
  }

  window.ZaitPayApi = {
    request,
    saveAuth,
    async login(email, password) {
      const data = await tryEndpoints('login', { method: 'POST', body: JSON.stringify({ email, password }) });
      saveAuth(data);
      return data;
    },
    async register(payload) {
      const data = await tryEndpoints('register', { method: 'POST', body: JSON.stringify(payload) });
      saveAuth(data);
      return data;
    },
    async createPix(payload) {
      return await tryEndpoints('pix', { method: 'POST', body: JSON.stringify(payload) });
    },
    async createBoleto(payload) {
      return await tryEndpoints('boleto', { method: 'POST', body: JSON.stringify(payload) });
    },
    async createPaymentLink(payload) {
      return await tryEndpoints('paymentLink', { method: 'POST', body: JSON.stringify(payload) });
    },
    async getClientes() { return await tryEndpoints('clientes', { method: 'GET' }); },
    async getExtrato() { return await tryEndpoints('extrato', { method: 'GET' }); }
  };
})();
