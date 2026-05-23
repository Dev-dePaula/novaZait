// ICONES VETORIAIS LINEARES DO BRAND BOARD DE ALTA FIDELIDADE
const Icons = {
  dashboard: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19V10"/><path d="M10 19V5"/><path d="M16 19v-7"/><path d="M22 19H2"/><path d="M18 6l2-2 2 2"/></svg>`,
  clientes: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="8" r="3"/><path d="M3 20c.7-3.2 3-5 6-5s5.3 1.8 6 5"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 15.5c2.7.4 4.6 2 5.2 4.5"/></svg>`,
  extratos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2h9l5 5v15H6z"/><path d="M14 2v6h6"/><path d="M9 13h text-6"/><path d="M9 17h6"/><path d="M9 9h2"/></svg>`,
  conta: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="13" rx="2"/><path d="M16 10h5"/><circle cx="17.5" cy="12.5" r="1"/><path d="M6 9h6"/></svg>`,
  pix: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2L4 14h7l-1 8 10-13h-7z"/></svg>`,
  cartao: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 10h19"/><path d="M6 15h3"/><path d="M13 15h2"/></svg>`,
  boletos: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 7v10"/><path d="M11 7v10"/><path d="M15 7v10"/><path d="M18 7v10"/></svg>`,
  links: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.1.2l2.1-2.1a5 5 0 0 0-7.1-7.1L11 5"/><path d="M14 11a5 5 0 0 0-7.1-.2l-2.1 2.1a5 5 0 0 0 7.1 7.1L13 19"/></svg>`,
  api: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M8 9l-4 3 4 3"/><path d="M16 9l4 3-4 3"/><path d="M14 4l-4 16"/></svg>`,
  webhooks: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M10 21h4"/><path d="M12 3v2"/></svg>`,
  split: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.5"/><circle cx="6" cy="18" r="2.5"/><path d="M20 4L8 16"/><path d="M14 14l6 6"/><path d="M8 8l4 4"/></svg>`,
  eyeOpen: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  eyeClosed: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="eye-icon"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 19c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>`
};

const zaitAdminMenus = [
  ['dashboard','Dashboard Geral', Icons.dashboard], 
  ['clientes', 'Clientes Cadastrados', Icons.clientes], 
  ['extratos', 'Extratos Globais', Icons.extratos],
  ['conta','Conta Nominal PJ/PF', Icons.conta], 
  ['pix','PIX Admin', Icons.pix], 
  ['cartao','Cartões Crédito/Débito', Icons.cartao], 
  ['boletos','Boletos Admin', Icons.boletos], 
  ['links','Links de Pagamento', Icons.links], 
  ['api','API BAAS', Icons.api], 
  ['webhooks','Webhooks', Icons.webhooks], 
  ['split','Split de Pagamentos', Icons.split]
];

const voltzAdminMenus = [
  ['dashboard','Dashboard Geral', Icons.dashboard], 
  ['clientes', 'Clientes Cadastrados', Icons.clientes], 
  ['pix','PIX', Icons.pix], 
  ['extratos', 'EXTRATO', Icons.extratos],
  ['api','API PARA BAAS E ADQUIRENTES', Icons.api], 
  ['webhooks','WEBHOOK', Icons.webhooks], 
  ['split','SPLIT DE PAGAMENTOS', Icons.split]
];

const clientMenus = [
  ['client_dashboard', 'Dashboard', Icons.dashboard], 
  ['client_extrato', 'Meu Extrato', Icons.extratos], 
  ['client_pix', 'Área PIX', Icons.pix], 
  ['client_boletos', 'Meus Boletos', Icons.boletos], 
  ['client_links', 'Links de Pagamento', Icons.links]
];

const defaultData = {
  users: [
    { id: 'USR-ADMIN', name: 'Anderson Admin', email: 'admin@pay.com', password: '123456', role: 'admin', isLogged: false, type: 'PF', doc: '000.000.000-00' },
    { id: 'USR-CLI1', name: 'Tech Store SP', email: 'loja@tech.com', password: '123456', role: 'client', isLogged: false, type: 'PJ', doc: '12.345.678/0001-99', allowedMode: 'all', apiAtiva: true }
  ],
  ledgers: { 
    'USR-ADMIN': { zait: { balance: 750000.00, transactions: [], boletos: [], links: [] }, voltz: { balance: 230000.00, transactions: [], boletos:[], links:[] } },
    'USR-CLI1': { 
      zait: { 
        balance: 15200.00, 
        transactions: [
          { id: 'PIX-E55291', method:'PIX', type:'Entrada', value: 500, description:'PIX Recebido: Carlos Silva', date:'20/05/2026 10:14' },
          { id: 'CART-C11920', method:'CARTAO', type:'Entrada', cardType: 'Crédito', installments: 3, merchant: 'Tech Store SP', value: 1200, description:'Venda via Checkout Link', date:'19/05/2026 14:22' },
          { id: 'CART-D88291', method:'CARTAO', type:'Saída', cardType: 'Débito', installments: 1, merchant: 'Posto Ipiranga Centro', value: 150, description:'Compra no Débito Estabelecimento', date:'18/05/2026 17:05' }
        ], 
        boletos: [
          { id: 'BOL-9921A', value: 450, desc: 'Fatura Consultoria', status: 'Pago' },
          { id: 'BOL-1102B', value: 900, desc: 'Venda de Equipamentos', status: 'Pendente' }
        ], 
        links: [
          { id: 'LNK-402', desc: 'Monitor Gamer 4K', value: 2500, parc: 12, emailDestino: 'comprador@gmail.com' }
        ] 
      }, 
      voltz: { balance: 300.00, transactions: [], boletos:[], links:[] } 
    }
  }
};

let db = JSON.parse(localStorage.getItem('paySystemData_ZaitV6_Final') || JSON.stringify(defaultData));
let currentUser = JSON.parse(localStorage.getItem('activeUser')) || null;
let account = localStorage.getItem('activeAccount') || 'voltz';
let page = currentUser && currentUser.role === 'client' ? 'client_dashboard' : 'dashboard';
let balancesHidden = localStorage.getItem('balancesHidden') === 'true';

const API_ONLINE = () => !!window.zaitApi;
function persistSession(user, token) {
  currentUser = {
    id: user.id || user._id || user.uuid || user.userId || 'USR-API',
    name: user.name || user.nome || user.razaoSocial || user.email || 'Usuário ZaitPay',
    email: user.email || '',
    role: user.role || user.perfil || user.tipoAcesso || 'client',
    type: user.type || user.tipo || user.personType || 'PF',
    doc: user.doc || user.document || user.cpfCnpj || user.cpf || user.cnpj || '',
    allowedMode: user.allowedMode || user.modoOperacao || 'all',
    isLogged: true,
    apiAtiva: true
  };
  if (!db.users.find(u => u.id === currentUser.id || u.email === currentUser.email)) {
    db.users.push(currentUser);
  }
  if (!db.ledgers[currentUser.id]) {
    db.ledgers[currentUser.id] = {
      zait: { balance: 0, transactions: [], boletos: [], links: [] },
      voltz: { balance: 0, transactions: [], boletos: [], links: [] }
    };
  }
  save();
  localStorage.setItem('activeUser', JSON.stringify(currentUser));
  if (token) window.zaitApi.setToken(token);
}
function openAppFor(user) {
  document.getElementById('authScreen').classList.add('hidden');
  document.getElementById('app').classList.remove('hidden');
  page = user.role === 'admin' ? 'dashboard' : 'client_dashboard';
  enforceOperationMode(); render();
}
function normalizeApiUser(payload) {
  return payload?.user || payload?.usuario || payload?.data?.user || payload?.data?.usuario || payload?.cliente || payload?.data || payload;
}
function normalizeApiToken(payload) {
  return payload?.token || payload?.accessToken || payload?.access_token || payload?.jwt || payload?.data?.token || payload?.data?.accessToken;
}


function save() { localStorage.setItem('paySystemData_ZaitV6_Final', JSON.stringify(db)); }
function money(v) { return Number(v || 0).toLocaleString('pt-BR', { style:'currency', currency:'BRL' }); }
function displayMoney(v) { return balancesHidden ? "R$ ••••••" : money(v); }
function uid(prefix='ID') { return prefix + '-' + Math.random().toString(36).slice(2,8).toUpperCase(); }

// ==================== SISTEMA DE MÁSCARAS REAL-TIME ====================
function maskCPFCNPJ(value) {
  let v = value.replace(/\D/g, "");
  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d)/, "$1.$2");
    v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  } else {
    v = v.substring(0, 14);
    v = v.replace(/^(\d{2})(\d)/, "$1.$2");
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    v = v.replace(/\.(\d{3})(\d)/, ".$1/$2");
    v = v.replace(/(\d{4})(\d{1,2})$/, "$1-$2");
  }
  return v;
}

function maskCurrency(value) {
  let v = value.replace(/\D/g, "");
  v = (v / 100).toFixed(2) + "";
  v = v.replace(".", ",");
  v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
  return "R$ " + v;
}

function parseCurrency(str) {
  if(!str) return 0;
  return Number(str.replace(/[^0-9,]/g, "").replace(",", "."));
}

function setupMaskListeners() {
  const docInput = document.getElementById('regDoc');
  if(docInput) {
    docInput.addEventListener('input', e => { e.target.value = maskCPFCNPJ(e.target.value); });
  }
  const currInputs = ['pixValue', 'bolValue', 'lnkValue'];
  currInputs.forEach(id => {
    const el = document.getElementById(id);
    if(el) { el.addEventListener('input', e => { e.target.value = maskCurrency(e.target.value); }); }
  });
}

// ==================== INTERACTION METHODS ====================
window.togglePrivacy = function() {
  balancesHidden = !balancesHidden;
  localStorage.setItem('balancesHidden', balancesHidden);
  render();
};

function showToast(msg) {
  const el = document.getElementById('toast');
  if(el) { el.textContent = msg; el.style.display = 'block'; setTimeout(() => el.style.display = 'none', 2600); }
}

function openModal(title, bodyHtml) {
  document.getElementById('modalTitle').textContent = title;
  document.getElementById('modalBody').innerHTML = bodyHtml;
  document.getElementById('systemModal').classList.remove('hidden');
}

window.closeModal = function() { document.getElementById('systemModal').classList.add('hidden'); };

// Simulações de Upload KYC
window.simulateUpload = function(div) {
  div.style.borderColor = 'var(--success)';
  div.style.background = 'rgba(34, 197, 94, 0.05)';
  div.querySelector('.upload-text').innerHTML = '<strong>Arquivo carregado com sucesso!</strong>';
};

window.handleRegTypeChange = function() {
  const type = document.getElementById('regType').value;
  const label = document.getElementById('regDocLabel');
  const input = document.getElementById('regDoc');
  input.value = "";
  label.innerText = type === 'PF' ? 'CPF' : 'CNPJ';
};

window.goToKycStep = function() {
  if(!document.getElementById('regName').value || !document.getElementById('regEmail').value || !document.getElementById('regPassword').value || !document.getElementById('regDoc').value) {
    alert("Por favor, preencha todos os campos obrigatórios da etapa 1."); return;
  }
  document.getElementById('regStep1').classList.add('hidden');
  document.getElementById('regStep2').classList.remove('hidden');
};

window.goBackToStep1 = function() {
  document.getElementById('regStep2').classList.add('hidden');
  document.getElementById('regStep1').classList.remove('hidden');
};

window.toggleAuthMode = function(e, mode) {
  e.preventDefault();
  if(mode === 'register') {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('registerForm').classList.remove('hidden');
    goBackToStep1();
  } else {
    document.getElementById('registerForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
  }
};

// Submissão Cadastro Real
window.processRegistration = async function(e) {
  e.preventDefault();
  const name = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const password = document.getElementById('regPassword').value.trim();
  const type = document.getElementById('regType').value;
  const doc = document.getElementById('regDoc').value.trim();

  if (!name || !email || !password || !doc) { alert('Preencha todos os campos obrigatórios.'); return; }

  try {
    if (API_ONLINE()) {
      const payload = { name, nome: name, email, password, senha: password, type, tipo: type, doc, documento: doc, cpfCnpj: doc };
      const res = await window.zaitApi.register(payload);
      const apiUser = normalizeApiUser(res);
      const token = normalizeApiToken(res);
      persistSession(apiUser || payload, token);
      openAppFor(currentUser);
      showToast('Cadastro enviado para a API própria ZaitPay.');
      return;
    }
  } catch (err) {
    console.error('Erro no cadastro via API:', err);
    alert('A API retornou erro no cadastro: ' + err.message);
    return;
  }

  if(db.users.find(u => u.email === email)) { alert('E-mail já cadastrado!'); return; }
  const newUserId = uid('USR');
  const newClient = { id: newUserId, name, email, password, role: 'client', isLogged: true, allowedMode: 'all', type, doc };
  db.users.push(newClient);
  db.ledgers[newUserId] = {
    zait: { balance: 2500.00, transactions: [{ id: uid('PIX'), method:'PIX', type:'Entrada', value:2500, description:'Liquidação Abertura Conta Zait', date:new Date().toLocaleString('pt-BR').slice(0,16) }], boletos:[], links:[] },
    voltz: { balance: 500.00, transactions: [{ id: uid('PIX'), method:'PIX', type:'Entrada', value:500, description:'Liquidação Abertura Conta Voltz', date:new Date().toLocaleString('pt-BR').slice(0,16) }], boletos:[], links:[] }
  };
  save();
  currentUser = newClient; localStorage.setItem('activeUser', JSON.stringify(newClient));
  openAppFor(currentUser);
  showToast('Conta criada em modo local.');
};

document.getElementById('loginForm').addEventListener('submit', async e => {
  e.preventDefault();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  try {
    if (API_ONLINE()) {
      const res = await window.zaitApi.login(email, password);
      const apiUser = normalizeApiUser(res);
      const token = normalizeApiToken(res);
      persistSession(apiUser || { email, name: email, role: 'client' }, token);
      openAppFor(currentUser);
      showToast('Login autenticado na API própria.');
      return;
    }
  } catch (err) {
    console.error('Erro no login via API:', err);
    alert('Falha no login pela API: ' + err.message);
    return;
  }

  const user = db.users.find(u => u.email === email && u.password === password);
  if(user) {
    user.isLogged = true; save();
    currentUser = user; localStorage.setItem('activeUser', JSON.stringify(user));
    openAppFor(user);
  } else { alert('Credenciais inválidas!'); }
});

function logout() {
  if(currentUser) {
    const user = db.users.find(u => u.id === currentUser.id);
    if(user) user.isLogged = false; save();
  }
  localStorage.removeItem('activeUser'); location.reload();
}

document.querySelectorAll('.switch-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetAccount = btn.dataset.account;
    if(currentUser.role === 'client') {
      const freshUser = db.users.find(u => u.id === currentUser.id);
      if(freshUser && freshUser.allowedMode !== 'all' && freshUser.allowedMode !== targetAccount) {
        showToast('Esta bandeira está bloqueada para você.'); return;
      }
    }
    account = targetAccount;
    localStorage.setItem('activeAccount', account);
    if(currentUser.role === 'admin') page = 'dashboard';
    render();
  });
});

function enforceOperationMode() {
  if (!currentUser) return;
  const btnZait = document.getElementById('btnSwitchZait');
  const btnVoltz = document.getElementById('btnSwitchVoltz');
  if (!btnZait || !btnVoltz) return;
  btnZait.removeAttribute('disabled'); btnVoltz.removeAttribute('disabled');
  if (currentUser.role === 'client') {
    const freshUser = db.users.find(u => u.id === currentUser.id);
    const mode = freshUser ? freshUser.allowedMode : 'all';
    if (mode === 'zait') { btnVoltz.setAttribute('disabled', 'true'); account = 'zait'; }
    else if (mode === 'voltz') { btnZait.setAttribute('disabled', 'true'); account = 'voltz'; }
    localStorage.setItem('activeAccount', account);
  }
}

function applyTheme() {
  const isZait = account === 'zait';
  document.getElementById('brandName').innerHTML = isZait ? 'ZAIT<span class="light">PAY</span>' : 'VOLTZ<span class="light">PAY</span>';
  document.querySelectorAll('.switch-btn').forEach(b => b.classList.toggle('active', b.dataset.account === account));
}

function renderNav() {
  const nav = document.getElementById('nav');
  let menus = currentUser.role === 'admin' ? (account === 'voltz' ? voltzAdminMenus : zaitAdminMenus) : clientMenus;
  nav.innerHTML = menus.map(([key, label, svgIcon]) => {
    const activeClass = page === key ? 'class="active"' : '';
    return `<button ${activeClass} onclick="openPage('${key}')">${svgIcon} <span>${label}</span></button>`;
  }).join('');
}

function openPage(key) { page = key; render(); }
function userLedger(userId = currentUser.id) { return db.ledgers[userId] ? db.ledgers[userId][account] : { balance: 0, transactions: [], boletos:[], links:[] }; }

function render() {
  if(!currentUser) return;
  enforceOperationMode(); applyTheme(); renderNav();
  
  document.getElementById('userName').textContent = currentUser.name;
  document.getElementById('userRole').textContent = currentUser.role === 'admin' ? 'Acesso Master' : 'Cliente';
  document.getElementById('userAvatar').textContent = currentUser.name.charAt(0).toUpperCase();
  
  if(currentUser.role === 'admin') document.getElementById('btnAdminPanel').classList.remove('hidden');

  const map = { dashboard, clientes, extratos, conta, pix, cartao, boletos, links, api, webhooks, split, client_dashboard, client_extrato, client_pix, client_boletos, client_links };
  document.getElementById('content').innerHTML = (map[page] || dashboard)();
  setupMaskListeners();
}

// ======================== ENGINE DE SEGURANÇA E REDE MOCK (MUITO REAL) ========================
function initSecurityGate(onSuccess) {
  const modalHtml = `
    <div style="text-align:center; padding:10px 0;">
      <p class="muted" style="margin-bottom:20px;">Digite sua senha transacional de 4 dígitos para autorizar o procedimento na rede BaaS Zait.</p>
      <input type="password" id="pinCode" maxlength="4" style="font-size:24px; text-align:center; letter-spacing:12px; width:160px; display:block; margin:0 auto 20px; padding:10px;" placeholder="••••" />
      <button class="btn full" onclick="validatePinGate()">Confirmar Assinatura Digital</button>
    </div>
  `;
  openModal("Assinatura Transacional Exigida", modalHtml);
  
  window.validatePinGate = function() {
    const pin = document.getElementById('pinCode').value;
    if(pin.length !== 4) { alert("Insira o PIN de 4 dígitos."); return; }
    
    // Inicia Loader de rede simulado
    openModal("Processando Solicitação", `
      <div style="text-align:center; padding:30px 0;">
        <div class="loader-spinner"></div>
        <p style="margin-top:20px; font-weight:500;">Conectando ao Gate da CIP e Banco Central...</p>
        <p class="muted" style="font-size:12px;">Validando chaves criptográficas e liquidação de saldo.</p>
      </div>
    `);
    
    setTimeout(() => { closeModal(); onSuccess(); }, 1800); // Latência de 1.8 segundos perfeita
  };
}

function showComprovanteModal(title, detailsHtml) {
  const receiptId = uid('AUTH');
  const html = `
    <div class="receipt-card">
      <div class="receipt-header">ZAIT<span>PAY</span></div>
      <div style="text-align:center; margin-bottom:20px;">
        <span class="pill ok">Transação Autenticada</span>
      </div>
      ${detailsHtml}
      <hr style="border:0; border-top:1px dashed var(--border); margin:20px 0;" />
      <p style="font-size:11px; color:var(--muted); margin:0; word-break:break-all;"><strong>ID de Autenticação BaaS:</strong><br>${receiptId}</p>
      <p style="font-size:11px; color:var(--muted); margin:5px 0 0 0;"><strong>Data de Processamento:</strong> ${new Date().toLocaleString('pt-BR')}</p>
      <button class="btn ghost full" style="margin-top:24px;" onclick="closeModal(); openPage('client_dashboard');">Fechar Comprovante</button>
    </div>
  `;
  openModal(title, html);
}

// ======================== ADMIN ABAS IMPLEMENTADAS ========================
function dashboard() {
  const d = userLedger('USR-ADMIN');
  return `<div class="grid cards">
    <div class="card" style="position:relative;">
      <span class="pill ok">Balanço Central</span>
      <div class="metric" style="color:var(--zait-primary)">${displayMoney(d.balance)}</div>
      <span class="muted">Segurança Operacional</span>
      <button class="privacy-toggle" onclick="togglePrivacy()">${balancesHidden ? Icons.eyeClosed : Icons.eyeOpen}</button>
    </div>
    <div class="card"><span class="pill">Ecossistema</span><div class="metric">${db.users.length}</div><span class="muted">Contas registradas</span></div>
  </div><br><div class="card"><h3>Engenharia Financeira Integrada</h3><p class="muted">Selecione uma partição no menu lateral para auditoria técnica e gestão de operações.</p></div>`;
}

function clientes() {
  const clients = db.users.filter(u => u.role === 'client');
  let rows = clients.map(u => {
    const ledgZ = db.ledgers[u.id]?.zait || { balance: 0 };
    const ledgV = db.ledgers[u.id]?.voltz || { balance: 0 };
    return `<tr>
      <td><strong>${u.name}</strong><br><small class="muted">${u.email}</small></td>
      <td>${u.isLogged ? '<span class="pill ok">Online</span>' : '<span class="muted">Offline</span>'}</td>
      <td><span style="color:var(--zait-primary)">Zait:</span> ${money(ledgZ.balance)}<br><span style="color:var(--voltz-primary)">Voltz:</span> ${money(ledgV.balance)}</td>
      <td>
        <select class="table-select" onchange="setClientOperatingMode('${u.id}', this.value)">
          <option value="all" ${u.allowedMode === 'all'?'selected':''}>Liberar as 2 Contas</option>
          <option value="zait" ${u.allowedMode === 'zait'?'selected':''}>Apenas Zait Bank</option>
          <option value="voltz" ${u.allowedMode === 'voltz'?'selected':''}>Apenas Voltz Pay</option>
        </select>
      </td>
    </tr>`;
  }).join('');
  return `<div class="card"><h3>Gestão Operacional de Clientes</h3><div class="table-responsive"><table><thead><tr><th>Cliente</th><th>Status</th><th>Saldos</th><th>Trava Operacional</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Nenhum cliente.</td></tr>'}</tbody></table></div></div>`;
}

function setClientOperatingMode(userId, mode) {
  const user = db.users.find(u => u.id === userId);
  if (user) { user.allowedMode = mode; save(); showToast(`Configuração operacional salva.`); render(); }
}

function extratos() {
  let all = [];
  db.users.forEach(u => {
    if(db.ledgers[u.id]?.zait?.transactions) db.ledgers[u.id].zait.transactions.forEach(t => all.push({...t, u: u.name, b: 'Zait Premium'}));
    if(db.ledgers[u.id]?.voltz?.transactions) db.ledgers[u.id].voltz.transactions.forEach(t => all.push({...t, u: u.name, b: 'Voltz Simples'}));
  });
  all.sort((a,b) => b.date.localeCompare(a.date));
  let rows = all.map(t => `<tr><td><strong>${t.u}</strong></td><td><span class="pill">${t.b}</span></td><td>${t.method}</td><td><span class="pill ${t.type==='Entrada'?'ok':'warn'}">${t.type}</span></td><td>${t.description}</td><td><strong>${money(t.value)}</strong></td></tr>`).join('');
  return `<div class="card"><h3>Extrato Consolidado Geral</h3><div class="table-responsive"><table><thead><tr><th>Cliente</th><th>Bandeira</th><th>Método</th><th>Fluxo</th><th>Descrição</th><th>Valor</th></tr></thead><tbody>${rows || '<tr><td colspan="6">Sem movimentações.</td></tr>'}</tbody></table></div></div>`;
}

function conta() {
  const clients = db.users.filter(u => u.role === 'client');
  const pjs = clients.filter(u => u.type === 'PJ');
  const pfs = clients.filter(u => u.type === 'PF' || !u.type);
  const buildRows = (arr) => arr.map(u => `<tr>
    <td><strong>${u.name}</strong><br><small class="muted">${u.doc || 'Falta Documento'}</small></td>
    <td>${u.email}</td>
    <td><button class="btn ghost" style="padding:6px 12px; font-size:11px;" onclick="editClientUi('${u.id}')">Editar Cadastro</button></td>
  </tr>`).join('');
  return `
    <div class="grid two" style="grid-template-columns: 1fr 1fr;">
      <div class="card">
        <h3>Contas Pessoa Jurídica (PJ)</h3>
        <div class="table-responsive"><table><thead><tr><th>Razão Social / CNPJ</th><th>E-mail</th><th>Ações</th></tr></thead><tbody>${buildRows(pjs) || '<tr><td colspan="3">Nenhum PJ.</td></tr>'}</tbody></table></div>
      </div>
      <div class="card">
        <h3>Contas Pessoa Física (PF)</h3>
        <div class="table-responsive"><table><thead><tr><th>Nome Completo / CPF</th><th>E-mail</th><th>Ações</th></tr></thead><tbody>${buildRows(pfs) || '<tr><td colspan="3">Nenhum PF.</td></tr>'}</tbody></table></div>
      </div>
    </div>
  `;
}

window.editClientUi = function(id) {
  const user = db.users.find(u => u.id === id);
  if(!user) return;
  const html = `
    <label>Nome / Razão Social</label><input id="editName" value="${user.name}" />
    <label>E-mail Corporativo</label><input id="editEmail" value="${user.email}" />
    <label>Tipo (PF/PJ)</label><select id="editType"><option value="PF" ${user.type==='PF'?'selected':''}>PF</option><option value="PJ" ${user.type==='PJ'?'selected':''}>PJ</option></select>
    <label>Documento de Identificação</label><input id="editDoc" value="${user.doc || ''}" />
    <button class="btn full" onclick="saveClientEdit('${id}')">Gravar Alterações</button>
  `;
  openModal(`Editar Cliente: ${user.name}`, html);
};

window.saveClientEdit = function(id) {
  const user = db.users.find(u => u.id === id);
  user.name = document.getElementById('editName').value;
  user.email = document.getElementById('editEmail').value;
  user.type = document.getElementById('editType').value;
  user.doc = document.getElementById('editDoc').value;
  save(); closeModal(); showToast('Base de clientes atualizada.'); render();
};

function pix() {
  setTimeout(() => renderPixTable(), 50);
  return `
    <div class="card">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <h3>Monitoramento de Entradas PIX</h3>
        <button class="btn" style="padding: 8px 16px; font-size:12px;" onclick="alert('Relatório de Auditoria PIX processado com sucesso.')">⬇️ Exportar Extrato (PDF)</button>
      </div>
      <input type="text" id="pixSearch" placeholder="🔍 Buscar por Nome do Cliente..." onkeyup="renderPixTable()" style="max-width:400px;" />
      <div class="table-responsive">
        <table>
          <thead><tr><th>Data/Hora</th><th>Conta Destinatária</th><th>Descrição / Pagador</th><th>Valor</th></tr></thead>
          <tbody id="pixTableBody"></tbody>
        </table>
      </div>
    </div>
  `;
}

window.renderPixTable = function() {
  const term = (document.getElementById('pixSearch')?.value || '').toLowerCase();
  let entries = [];
  db.users.forEach(u => {
    const tr = db.ledgers[u.id]?.[account]?.transactions || [];
    tr.filter(t => t.method === 'PIX' && t.type === 'Entrada').forEach(t => entries.push({...t, clientName: u.name}));
  });
  if(term) entries = entries.filter(e => e.clientName.toLowerCase().includes(term));
  const tbody = document.getElementById('pixTableBody');
  if(!tbody) return;
  tbody.innerHTML = entries.map(e => `<tr><td>${e.date}</td><td><strong>${e.clientName}</strong></td><td>${e.description}</td><td><strong style="color:var(--success)">${money(e.value)}</strong></td></tr>`).join('') || '<tr><td colspan="4">Nenhuma liquidação PIX encontrada.</td></tr>';
};

function cartao() {
  let entries = [];
  db.users.forEach(u => {
    const tr = db.ledgers[u.id]?.[account]?.transactions || [];
    tr.filter(t => t.method === 'CARTAO').forEach(t => entries.push({...t, clientName: u.name}));
  });
  const rows = entries.map(e => {
    const splitText = e.cardType === 'Crédito' && e.installments > 1 ? `<span class="pill">Em ${e.installments}x</span>` : '<span class="muted">À vista</span>';
    return `<tr>
      <td><strong>${e.clientName}</strong></td>
      <td>${e.cardType === 'Crédito' ? '💳 Crédito' : '🏧 Débito'}</td>
      <td><span class="pill ${e.type==='Entrada'?'ok':'warn'}">${e.type}</span></td>
      <td>${e.merchant || e.description}</td>
      <td>${splitText}</td>
      <td><strong>${money(e.value)}</strong></td>
    </tr>`;
  }).join('');
  return `<div class="card"><h3>Movimentação Global de Cartões</h3><div class="table-responsive"><table><thead><tr><th>Cliente Titular</th><th>Modalidade</th><th>Fluxo</th><th>Estabelecimento Comercial</th><th>Parcelamento</th><th>Valor</th></tr></thead><tbody>${rows || '<tr><td colspan="6">Sem transações capturadas nas maquininhas / links.</td></tr>'}</tbody></table></div></div>`;
}

function boletos() {
  let allBoletos = [];
  db.users.forEach(u => {
    const bls = db.ledgers[u.id]?.[account]?.boletos || [];
    bls.forEach(b => allBoletos.push({...b, clientName: u.name}));
  });
  const rows = allBoletos.map(b => `<tr>
    <td><small class="muted">${b.id}</small></td>
    <td><strong>${b.clientName}</strong></td>
    <td>${b.desc}</td>
    <td>${money(b.value)}</td>
    <td><span class="pill ${b.status==='Pago'?'ok':'warn'}">${b.status || 'Pendente'}</span></td>
  </tr>`).join('');
  return `<div class="card"><h3>Central de Monitoramento de Boletos</h3><div class="table-responsive"><table><thead><tr><th>ID do Título</th><th>Cliente Cedente</th><th>Sacado / Descrição</th><th>Valor Nominale</th><th>Status Liquidação</th></tr></thead><tbody>${rows || '<tr><td colspan="5">Nenhum boleto registrado.</td></tr>'}</tbody></table></div></div>`;
}

function links() {
  let allLinks = [];
  db.users.forEach(u => {
    const lnks = db.ledgers[u.id]?.[account]?.links || [];
    lnks.forEach(l => allLinks.push({...l, clientName: u.name}));
  });
  const rows = allLinks.map(l => `<tr>
    <td><strong>${l.clientName}</strong></td>
    <td>${l.desc}</td>
    <td>${money(l.value)} <small class="muted">(Parc. Máx ${l.parc}x)</small></td>
    <td>${l.emailDestino || '<span class="muted">Direto via App</span>'}</td>
  </tr>`).join('');
  return `<div class="card"><h3>Auditoria de Links de Checkout</h3><div class="table-responsive"><table><thead><tr><th>Cliente Criador</th><th>Nome do Item Comercial</th><th>Valor Configurado</th><th>Destino (E-mail Notificado)</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Nenhum link ativo no ecossistema.</td></tr>'}</tbody></table></div></div>`;
}

function api() {
  const clientsWithApi = db.users.filter(u => u.apiAtiva);
  const rows = clientsWithApi.map(u => `<tr><td><strong>${u.name}</strong></td><td><span class="pill ok">Ativo</span></td><td><small class="muted">${uid('KEY')}</small></td><td>${Math.floor(Math.random()*4500)+500} req/h</td></tr>`).join('');
  return `<div class="grid two">
    <div class="card">
      <h3>Configuração Endpoint API REST Core</h3>
      <label>URL Gateway Produção</label><input value="https://api.zaitpay.com.br" disabled />
      <label>Rate Limit Global (Requisições por minuto)</label><input type="number" value="3000" />
      <button class="btn full" onclick="showToast('Rate limit salvo.')">Atualizar Parâmetros</button>
    </div>
    <div class="card">
      <h3>Acessos Ativos por Clientes Dev</h3>
      <div class="table-responsive"><table><thead><tr><th>Cliente Integrado</th><th>Status</th><th>API Key Credencial</th><th>Métrica Trafego</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Nenhum client usando API BaaS.</td></tr>'}</tbody></table></div>
    </div>
  </div>`;
}

function webhooks() {
  return `<div class="grid two">
    <div class="card">
      <h3>Configuração e Callbacks Webhook</h3>
      <label>Destino Principal Logs S/A</label><input value="https://webhook.zaitbank.com/disparos" disabled />
      <div style="margin-bottom:20px;">
        <label>Eventos Habilitados para Disparo</label>
        <label style="display:flex; gap:10px; text-transform:none; color:#fff; font-weight:normal; margin-bottom:6px;"><input type="checkbox" checked /> pix.received (Entradas)</label>
        <label style="display:flex; gap:10px; text-transform:none; color:#fff; font-weight:normal; margin-bottom:6px;"><input type="checkbox" checked /> invoice.paid (Boleto Pago)</label>
        <label style="display:flex; gap:10px; text-transform:none; color:#fff; font-weight:normal;"><input type="checkbox" /> link.expired (Checkout Expirado)</label>
      </div>
      <button class="btn full" onclick="showToast('Configurações de webhooks propagadas.')">Salvar Escopo</button>
    </div>
    <div class="card">
      <h3>Monitor de Entrega Webhook (Tempo Real)</h3>
      <div class="table-responsive"><table><thead><tr><th>Evento</th><th>Mapeamento HTTP</th><th>Status Retorno</th></tr></thead><tbody>
        <tr><td>pix.received</td><td>POST 200 OK</td><td>Hoje, 11:32</td></tr>
        <tr><td>invoice.paid</td><td>POST 200 OK</td><td>Hoje, 09:15</td></tr>
        <tr><td>cc.checkout</td><td>POST <span style="color:var(--danger)">500 ERR</span></td><td>Ontem, 21:04</td></tr>
      </tbody></table></div>
    </div>
  </div>`;
}

function split() {
  return `
    <div class="card" style="margin-bottom:20px;">
      <h3>Motor de Split de Pagamentos (Split Rule)</h3>
      <p class="muted">Automatize a divisão de taxas e receitas instantaneamente na captura de qualquer transação de link ou checkout comercial.</p>
    </div>
    <div class="grid two">
      <div class="card">
        <h3>Nova Configuração de Divisão</h3>
        <label>Cliente Beneficiário</label>
        <select id="splitClient"><option value="all">Todos os Contratos (Global)</option>${db.users.filter(u=>u.role==='client').map(u=>`<option value="${u.id}">${u.name}</option>`).join('')}</select>
        <label>Fee Retido para Zait Bank (%)</label><input type="text" value="3,5%" />
        <label>Repasse para Conta de Destino (%)</label><input type="text" value="96,5%" />
        <button class="btn full" onclick="showToast('Regra de Split ativa no core bancário!')">Implantar Regra de Distribuição</button>
      </div>
      <div class="card">
        <h3>Regras e Comissões Vigentes</h3>
        <div class="table-responsive"><table><thead><tr><th>Alvo</th><th>Retenção Zait</th><th>Repasse Líquido</th></tr></thead><tbody>
          <tr><td>Global (Padrão)</td><td>3.5%</td><td>96.5%</td></tr>
          <tr><td>Tech Store SP</td><td>4.5%</td><td>95.5%</td></tr>
        </tbody></table></div>
      </div>
    </div>
  `;
}

// ======================== OPERAÇÕES DA ÁREA DO CLIENTE ========================
function client_dashboard() {
  const cl = userLedger();
  return `
    <div class="grid cards" style="grid-template-columns: 1fr;">
      <div class="card" style="position:relative; max-width:400px;">
        <span class="pill ok">Saldo Disponível em Conta</span>
        <div class="metric" style="color:var(--zait-primary)">${displayMoney(cl.balance)}</div>
        <span class="muted">Liquidação Garantida Zait S/A</span>
        <button class="privacy-toggle" onclick="togglePrivacy()">${balancesHidden ? Icons.eyeClosed : Icons.eyeOpen}</button>
      </div>
    </div>
    <br>
    <div class="grid two">
      <div class="card">
        <h3>Ações Financeiras</h3>
        <button class="btn full" onclick="openPage('client_pix')">⚡ Enviar Pix Imediato</button><br>
        <button class="btn ghost full" onclick="openPage('client_boletos')">🧾 Emitir Boleto Registrado</button><br>
        <button class="btn ghost full" onclick="openPage('client_links')">🔗 Gerar Checkout Link</button>
      </div>
      <div class="card"><h3>Últimas Transações</h3>${tableTransactions(cl.transactions.slice(-3))}</div>
    </div>
  `;
}

function client_extrato() { return `<div class="card"><h3>Demonstrativo Financeiro da Conta</h3>${tableTransactions(userLedger().transactions)}</div>`; }

function client_pix() {
  return `<div class="card" style="max-width:500px;"><h3>Área de Transferências PIX</h3><form onsubmit="handleClientPix(event)">
    <label>Fluxo da Operação</label><select id="pixType"><option value="Saída">Efetuar Pagamento / Enviar Pix</option><option value="Entrada">Simular Recebimento PIX</option></select>
    <label>Valor da Operação</label><input id="pixValue" type="text" placeholder="R$ 0,00" required />
    <label>Chave Pix de Identificação</label><input id="pixDesc" placeholder="CPF, CNPJ, E-mail ou Chave Aleatória" required />
    <button class="btn full">Iniciar Processamento</button></form></div>`;
}

window.handleClientPix = async function(e) {
  e.preventDefault();
  const type = document.getElementById('pixType').value;
  const rawValue = parseCurrency(document.getElementById('pixValue').value);
  const desc = document.getElementById('pixDesc').value;
  const ledger = db.ledgers[currentUser.id][account];

  if(type === 'Saída' && ledger.balance < rawValue) { alert('Erro: Saldo Insuficiente.'); return; }
  if(rawValue <= 0) { alert('Insira um valor válido.'); return; }

  initSecurityGate(async () => {
    try {
      if (API_ONLINE()) {
        const payload = {
          account,
          tipo: type,
          type,
          valor: rawValue,
          amount: rawValue,
          chavePix: desc,
          pixKey: desc,
          descricao: type==='Saída' ? `PIX Enviado para: ${desc}` : `PIX Recebido de: ${desc}`
        };
        await window.zaitApi.createPix(payload);
      }
      ledger.transactions.push({ id: uid('PIX'), method: 'PIX', type, value: rawValue, description: type==='Saída' ? `PIX Enviado para: ${desc}` : `PIX Recebido de: ${desc}`, date: new Date().toLocaleString('pt-BR').slice(0,16) });
      ledger.balance += type === 'Entrada' ? rawValue : -rawValue; save();
      showComprovanteModal("Comprovante de Operação PIX", `
        <p style="text-align:center; font-size:24px; font-weight:700; color:${type==='Entrada'?'var(--success)':'#fff'}; margin:10px 0;">${money(rawValue)}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Tipo de Fluxo:</strong> ${type === 'Entrada' ? 'Recebimento Comercial' : 'Transferência Efetuada'}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Detalhamento Chave:</strong> ${desc}</p>
      `);
    } catch (err) {
      console.error('Erro PIX API:', err);
      alert('Erro ao processar PIX na API: ' + err.message);
    }
  });
};

function client_boletos() {
  const bList = userLedger().boletos || [];
  const rows = bList.map(b => `<tr><td>${b.id}</td><td>${b.desc}</td><td>${money(b.value)}</td><td><span class="pill ${b.status==='Pago'?'ok':'warn'}">${b.status}</span></td><td><button class="btn ghost" style="padding:4px 8px; font-size:11px;" onclick="alert('Download do PDF do Boleto CIP iniciado.')">PDF</button></td></tr>`).join('');
  return `<div class="grid two"><form class="card" onsubmit="handleClientBoleto(event)"><h3>Registrar Novo Boleto</h3>
    <label>Valor do Título</label><input id="bolValue" type="text" placeholder="R$ 0,00" required />
    <label>Nome Completo / Sacado</label><input id="bolDesc" placeholder="Quem vai pagar o boleto" required /><button class="btn full">Gerar Título</button></form>
    <div class="card"><h3>Boletos Registrados na CIP</h3><div class="table-responsive"><table><thead><tr><th>ID</th><th>Sacado</th><th>Valor</th><th>Status</th><th>Ações</th></tr></thead><tbody>${rows || '<tr><td colspan="5">Nenhum boleto encontrado.</td></tr>'}</tbody></table></div></div></div>`;
}

window.handleClientBoleto = async function(e) {
  e.preventDefault();
  const val = parseCurrency(document.getElementById('bolValue').value);
  const desc = document.getElementById('bolDesc').value;
  const userSpace = db.ledgers[currentUser.id][account];
  if(val <= 0) { alert('Insira um valor válido.'); return; }

  initSecurityGate(async () => {
    try {
      const bId = uid('BOL');
      if (API_ONLINE()) {
        await window.zaitApi.createBoleto({
          account,
          valor: val,
          amount: val,
          sacado: desc,
          pagador: desc,
          descricao: desc
        });
      }
      if(!userSpace.boletos) userSpace.boletos = [];
      userSpace.boletos.push({ id: bId, value: val, desc, status: 'Pendente' });
      save();
      showComprovanteModal("Registro de Cobrança Bancária", `
        <p style="text-align:center; font-size:24px; font-weight:700; margin:10px 0;">${money(val)}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Pagador / Sacado:</strong> ${desc}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Registro de Compensação:</strong> Enviado para API própria ZaitPay</p>
      `);
    } catch (err) {
      console.error('Erro boleto API:', err);
      alert('Erro ao emitir boleto na API: ' + err.message);
    }
  });
};

function client_links() {
  const lList = userLedger().links || [];
  const rows = lList.map(l => `<tr><td>${l.desc}</td><td>${money(l.value)}</td><td>Até ${l.parc}x</td><td>${l.emailDestino}</td></tr>`).join('');
  return `<div class="grid two"><form class="card" onsubmit="handleClientLink(event)"><h3>Gerar Link de Checkout</h3>
    <label>Descrição Comercial do Item</label><input id="lnkDesc" placeholder="Ex: Cadeira Executiva" required />
    <label>Valor de Cobrança</label><input id="lnkValue" type="text" placeholder="R$ 0,00" required />
    <label>E-mail do Cliente Comprador</label><input id="lnkEmail" type="email" placeholder="cliente@email.com" required />
    <label>Parcelamento Permitido</label><select id="lnkParc"><option value="1">À vista (No PIX ou 1x Cartão)</option><option value="3">Até 3x sem juros</option><option value="12">Até 12x com juros de tabela</option></select>
    <button class="btn full">Gerar Link Informativo</button></form>
    <div class="card"><h3>Links de Checkout Ativos</h3><div class="table-responsive"><table><thead><tr><th>Item Comercial</th><th>Valor</th><th>Modalidade</th><th>E-mail do Cliente</th></tr></thead><tbody>${rows || '<tr><td colspan="4">Nenhum link gerado ainda.</td></tr>'}</tbody></table></div></div></div>`;
}

window.handleClientLink = async function(e) {
  e.preventDefault();
  const val = parseCurrency(document.getElementById('lnkValue').value);
  const desc = document.getElementById('lnkDesc').value;
  const parc = document.getElementById('lnkParc').value;
  const emailDestino = document.getElementById('lnkEmail').value;
  const userSpace = db.ledgers[currentUser.id][account];
  if(val <= 0) { alert('Insira um valor válido.'); return; }

  initSecurityGate(async () => {
    try {
      if (API_ONLINE()) {
        await window.zaitApi.createPaymentLink({
          account,
          descricao: desc,
          description: desc,
          valor: val,
          amount: val,
          parcelas: Number(parc),
          installments: Number(parc),
          emailDestino,
          customerEmail: emailDestino
        });
      }
      if(!userSpace.links) userSpace.links = [];
      userSpace.links.push({ id: uid('LNK'), value: val, desc, parc, emailDestino });
      save();
      showComprovanteModal("Checkout Link Criado com Sucesso", `
        <p style="text-align:center; font-size:24px; font-weight:700; color:var(--zait-primary); margin:10px 0;">${money(val)}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Item Disponibilizado:</strong> ${desc}</p>
        <p style="margin:5px 0; font-size:13px;"><strong>Notificação de Faturamento:</strong> Enviada para ${emailDestino}</p>
      `);
    } catch (err) {
      console.error('Erro link API:', err);
      alert('Erro ao gerar link na API: ' + err.message);
    }
  });
};

function tableTransactions(rows) {
  if(!rows || !rows.length) return '<p class="muted">Nenhum registro lançado no livro razão da conta.</p>';
  return `<div class="table-responsive"><table><thead><tr><th>Data/Hora</th><th>Método</th><th>Fluxo</th><th>Descrição</th><th>Valor Líquido</th></tr></thead><tbody>${rows.map(t=>`<tr><td>${t.date || '--'}</td><td>${t.method}</td><td><span class="pill ${t.type==='Entrada'?'ok':'warn'}">${t.type}</span></td><td>${t.description}</td><td><strong>${money(t.value)}</strong></td></tr>`).join('')}</tbody></table></div>`;
}

if(currentUser) { document.getElementById('authScreen').classList.add('hidden'); document.getElementById('app').classList.remove('hidden'); render(); }