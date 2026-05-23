(function () {
  const cfg = window.ZAITPAY_API_CONFIG || {};
  const BASE_URL = String(cfg.BASE_URL || "https://api.zaitpay.com.br").replace(/\/+$/, "");
  const PREFIX = String(cfg.PREFIX || "").replace(/^\/+|\/+$/g, "");
  const TOKEN_KEY = cfg.TOKEN_KEY || "zaitpay_access_token";

  function buildUrl(path) {
    const clean = String(path || "").replace(/^\/+/, "");
    const fullPath = PREFIX ? `${PREFIX}/${clean}` : clean;
    return `${BASE_URL}/${fullPath}`;
  }

  async function request(path, options = {}) {
    const token = localStorage.getItem(TOKEN_KEY);
    const headers = {
      "Content-Type": "application/json",
      ...(options.headers || {})
    };

    if (token) headers.Authorization = `Bearer ${token}`;

    const res = await fetch(buildUrl(path), {
      ...options,
      headers,
      body: options.body && typeof options.body !== "string" ? JSON.stringify(options.body) : options.body
    });

    const text = await res.text();
    let data = null;
    try { data = text ? JSON.parse(text) : null; } catch { data = text; }

    if (!res.ok) {
      const message = data?.message || data?.error || data?.erro || `Erro HTTP ${res.status}`;
      throw new Error(message);
    }
    return data;
  }

  async function tryRoutes(routes, options) {
    let lastError;
    for (const route of routes) {
      try {
        return await request(route, options);
      } catch (err) {
        lastError = err;
        // continua tentando rotas alternativas comuns do backend
      }
    }
    throw lastError;
  }

  window.zaitApi = {
    baseUrl: BASE_URL,
    setToken(token) {
      if (token) localStorage.setItem(TOKEN_KEY, token);
    },
    clearToken() {
      localStorage.removeItem(TOKEN_KEY);
    },
    request,

    login(email, password) {
      return tryRoutes(["auth/login", "login", "usuarios/login", "users/login"], {
        method: "POST",
        body: { email, password, senha: password }
      });
    },

    register(payload) {
      return tryRoutes(["auth/register", "register", "clientes", "users", "usuarios"], {
        method: "POST",
        body: payload
      });
    },

    createPix(payload) {
      return tryRoutes(["pix", "transactions/pix", "transacoes/pix", "payments/pix"], {
        method: "POST",
        body: payload
      });
    },

    createBoleto(payload) {
      return tryRoutes(["boletos", "boleto", "cobrancas/boleto", "charges/boleto"], {
        method: "POST",
        body: payload
      });
    },

    createPaymentLink(payload) {
      return tryRoutes(["payment-links", "links-pagamento", "links", "checkout/links"], {
        method: "POST",
        body: payload
      });
    }
  };
})();
