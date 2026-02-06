// =====================================
// ACAMP² — App Financeiro (app.js)
// =====================================

// ===============================
// BD USUÁRIOS (front-only)
// ===============================

// status — regular, pendente e vaga
const DB = [
  {
    id: 1,
    nome: "Ivo Anderson Menezes Costa",
    token: "AC0134",
    status: "pendente",
    pagoCentavos: 2000,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 2,
    nome: "Maria Eduarda Sousa Barros Costa",
    token: "AC0233",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 3,
    nome: "Leonardo Farias dos Santos",
    token: "AC0332",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 4,
    nome: "Jeanderson de Oliveira",
    token: "AC0431",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 5,
    nome: "Larissa Câmara",
    token: "AC0530",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },

  // Novos inscritos (a partir do ID 6), status = "vaga"
  {
    id: 6,
    nome: "Larissa Martins Sousa Barros",
    token: "AC0629",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 7,
    nome: "Vinícius de Oliveira Gomes Braga",
    token: "AC0728",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 8,
    nome: "Ana Cintia Avelino Alves",
    token: "AC0827",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 9,
    nome: "Eduardo Duarte",
    token: "AC0926",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 10,
    nome: "Carla Cristina Sousa Barros",
    token: "AC1025",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 11,
    nome: "Elias Aragão Aguiar",
    token: "AC1124",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 12,
    nome: "Bruna Aragão",
    token: "AC1223",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 13,
    nome: "Edinilson Alcântara de Aguiar",
    token: "AC1322",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 14,
    nome: "Lawany kelly Santiago Gomes",
    token: "AC1421",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 15,
    nome: "Kassio Filho",
    token: "AC1520",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
  {
    id: 16,
    nome: "Luzirene",
    token: "AC1619",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 6000,
    dependentesNome: "Alisson e Kalebe",
    professorNome: "Yvo, Jeanderson e Eduarda"
  },
    {
    id: 17,
    nome: "Pedro Avelino",
    token: "AC1718",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 18,
    nome: "Amanda Nacimento",
    token: "AC1817",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 19,
    nome: "José Gleison",
    token: "AC1916",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 20,
    nome: "Ana Lúcia",
    token: "AC2015",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 21,
    nome: "Eder",
    token: "AC2114",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 22,
    nome: "Ciene",
    token: "AC2213",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 23,
    nome: "Gomes",
    token: "AC2312",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 4000,
    dependentesNome: "Abner",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 24,
    nome: "Dalila",
    token: "AC2411",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "Abner",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 25,
    nome: "Mariene Rodrígues",
    token: "AC2510",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 26,
    nome: "Cristina Moura",
    token: "AC2609",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 2000,
    dependentesNome: "",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 27,
    nome: "Ivanildo Nunes Braga",
    token: "AC2708",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 6000,
    dependentesNome: "Francisca e Dedim",
    professorNome: "Prof. Pedro Avelino"
  },
  {
    id: 28,
    nome: "Lena",
    token: "AC2807",
    status: "vaga",
    pagoCentavos: 0,
    totalFaturas: 6,
    valorParcelaCentavos: 4000,
    dependentesNome: "Zé Gomes",
    professorNome: "Prof. Pedro Avelino"
  }
];


// ===============================
// BD FATURAS (vem do arquivo externo assets/faturas.db.js)
// ===============================
const FATURAS_DB = window.FATURAS_DB || [];

// ===============================
// PIX CONFIG (troque pela sua chave real)
// ===============================
const PIX_KEY = "dfd4dbcd-16f0-44a3-a48e-12a78063d925"; // ex: email@dominio.com | cpf | chave aleatória

// ===============================
// DOM helper
// ===============================
const $ = (s) => document.querySelector(s);

// ===============================
// Screens
// ===============================
const screenLogin = $("#screen-login");
const screenPanel = $("#screen-panel");
const screenFaturaDetalhe = $("#screen-fatura-detalhe");
const screenExtrato = $("#screen-extrato");
const screenDependentes = $("#screen-dependentes");
const screenDados = $("#screen-dados");

// ===============================
// Login
// ===============================
const loginName = $("#loginName");
const loginToken = $("#loginToken");
const btnLogin = $("#btnLogin");
const loginError = $("#loginError");

// ===============================
// Painel
// ===============================
const userName = $("#userName");
const userStatusBadge = $("#userStatusBadge");
const paidValue = $("#paidValue");
const faturasCount = $("#faturasCount");
const faturasMini = $("#faturasMini");

const msgVaga = $("#statusMsgVaga");
const msgPendente = $("#statusMsgPendente");

const btnLogout = $("#btnLogout");
const btnPay = $("#btnPay");

// ===============================
// Fatura detalhe
// ===============================
const btnBackFaturaDetalhe = $("#btnBackFaturaDetalhe");
const invMesRef = $("#invMesRef");
const invStatusChip = $("#invStatusChip");
const invValor = $("#invValor");
const invVenc = $("#invVenc");
const invPayArea = $("#invPayArea");
const btnEfetuarPagamento = $("#btnEfetuarPagamento");
const invInfoPaid = $("#invInfoPaid");

// ===============================
// Extrato
// ===============================
const btnBackExtrato = $("#btnBackExtrato");
const extTotalPago = $("#extTotalPago");
const extQtd = $("#extQtd");
const extList = $("#extList");
const extEmpty = $("#extEmpty");

// ===============================
// Dependentes
// ===============================
const btnBackDependentes = $("#btnBackDependentes");
const depNome = $("#depNome");
const depEmpty = $("#depEmpty");

// ===============================
// Dados pessoais
// ===============================
const btnBackDados = $("#btnBackDados");
const dpNome = $("#dpNome");
const dpId = $("#dpId");
const dpStatus = $("#dpStatus");
const dpPago = $("#dpPago");
const dpProfessor = $("#dpProfessor");
const dpDependentes = $("#dpDependentes");

// ===============================
// Toast
// ===============================
const toast = $("#toast");

// ===============================
// Utils
// ===============================
function formatBRLFromCentavos(v){
  const n = (v / 100).toFixed(2);
  const [a,b] = n.split(".");
  return `R$ ${a.replace(/\B(?=(\d{3})+(?!\d))/g,".")},${b}`;
}

function showToast(msg){
  toast.textContent = msg;
  toast.classList.remove("hidden");
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => toast.classList.add("hidden"), 2200);
}

function setScreen(which){
  screenLogin.classList.remove("screen--active");
  screenPanel.classList.remove("screen--active");
  if (screenFaturaDetalhe) screenFaturaDetalhe.classList.remove("screen--active");
  if (screenExtrato) screenExtrato.classList.remove("screen--active");
  if (screenDependentes) screenDependentes.classList.remove("screen--active");
  if (screenDados) screenDados.classList.remove("screen--active");

  if (which === "login") screenLogin.classList.add("screen--active");
  else if (which === "panel") screenPanel.classList.add("screen--active");
  else if (which === "fatura-detalhe") screenFaturaDetalhe.classList.add("screen--active");
  else if (which === "extrato") screenExtrato.classList.add("screen--active");
  else if (which === "dependentes") screenDependentes.classList.add("screen--active");
  else if (which === "dados") screenDados.classList.add("screen--active");
}

function badgeForStatus(status){
  if (status === "vaga") return "⛔ Vaga não confirmada";
  if (status === "regular") return "✅ Regular";
  if (status === "pendente") return "⚠️ Pendente";
  return "—";
}

// ===============================
// Helpers BD
// ===============================
function findUserById(id){
  return DB.find(u => u.id === id) || null;
}

function parseISODate(iso){
  const [y,m,d] = iso.split("-").map(Number);
  return new Date(y, m-1, d);
}

function fmtDateBR(d){
  return `${String(d.getDate()).padStart(2,"0")}/${String(d.getMonth()+1).padStart(2,"0")}/${d.getFullYear()}`;
}

function refLabel(ref){
  const [y,m] = ref.split("-").map(Number);
  const meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  return `${meses[m-1]} / ${y}`;
}

// ===============================
// FATURAS — regras
// ===============================
function getFaturasDoUsuario(userId){
  return FATURAS_DB
    .filter(f => f.userId === userId && f.status !== "indisponivel")
    .sort((a,b) => a.ref.localeCompare(b.ref));
}

function pickFaturaAtual(userId){
  const list = getFaturasDoUsuario(userId);
  if (!list.length) return null;
  return list.find(f => f.status === "atrasada")
      || list.find(f => f.status === "aberta")
      || list[list.length - 1];
}

function countFaturasPagas(userId){
  const list = getFaturasDoUsuario(userId);
  const pagas = list.filter(f => f.status === "paga").length;
  return { pagas, total: list.length };
}

function pickFaturaParaPagamento(userId){
  // para pagamento: só aceita atrasada/aberta
  const list = getFaturasDoUsuario(userId);
  return list.find(f => f.status === "atrasada") || list.find(f => f.status === "aberta") || null;
}

// ===============================
// Render painel
// ===============================
function renderPanel(u){
  userName.textContent = u.nome;
  userStatusBadge.textContent = badgeForStatus(u.status);

  msgVaga.classList.add("hidden");
  msgPendente.classList.add("hidden");

  if (u.status === "vaga") msgVaga.classList.remove("hidden");
  if (u.status === "pendente") msgPendente.classList.remove("hidden");

  paidValue.textContent = formatBRLFromCentavos(u.pagoCentavos);

  const c = countFaturasPagas(u.id);
  faturasCount.textContent = `${c.pagas} de ${c.total} faturas pagas`;

  const total = u.totalFaturas * u.valorParcelaCentavos;
  faturasMini.textContent =
    `Parcelas: ${formatBRLFromCentavos(u.valorParcelaCentavos)} • Total: ${formatBRLFromCentavos(total)}`;
}

// ===============================
// Render fatura detalhe
// ===============================
let currentInvoice = null;

function setInvoiceStatusChip(status){
  invStatusChip.classList.remove("invStatus--aberta","invStatus--atrasada","invStatus--paga");
  if (status === "aberta"){ invStatusChip.textContent="Aberta"; invStatusChip.classList.add("invStatus--aberta"); }
  else if (status === "atrasada"){ invStatusChip.textContent="Atrasada"; invStatusChip.classList.add("invStatus--atrasada"); }
  else if (status === "paga"){ invStatusChip.textContent="Paga"; invStatusChip.classList.add("invStatus--paga"); }
}

function renderFaturaDetalhe(f){
  invMesRef.textContent = refLabel(f.ref);
  setInvoiceStatusChip(f.status);
  invValor.textContent = formatBRLFromCentavos(f.valorCentavos);
  invVenc.textContent = fmtDateBR(parseISODate(f.vencimento));

  if (f.status === "paga"){
    invPayArea.classList.add("hidden");
    invInfoPaid.classList.remove("hidden");
  } else {
    invPayArea.classList.remove("hidden");
    invInfoPaid.classList.add("hidden");
  }
}

// ===============================
// Render extrato
// ===============================
function renderExtrato(userId){
  const pagas = getFaturasDoUsuario(userId).filter(f => f.status === "paga");
  pagas.sort((a,b) => b.ref.localeCompare(a.ref));

  const totalCentavos = pagas.reduce((acc,f)=> acc + f.valorCentavos, 0);

  extTotalPago.textContent = formatBRLFromCentavos(totalCentavos);
  extQtd.textContent = `${pagas.length} fatura${pagas.length === 1 ? "" : "s"}`;

  extList.innerHTML = "";

  if (!pagas.length){
    extEmpty.classList.remove("hidden");
    return;
  }
  extEmpty.classList.add("hidden");

  pagas.forEach(f=>{
    const item = document.createElement("div");
    item.className = "extItem";
    item.innerHTML = `
      <div class="extTop">
        <div class="extTitle">${refLabel(f.ref)}</div>
        <div class="extStatus">Paga</div>
      </div>
      <div class="extMeta">
        <div>
          <div class="muted">Valor</div>
          <div class="extValue">${formatBRLFromCentavos(f.valorCentavos)}</div>
        </div>
        <div style="text-align:right">
          <div class="muted">Vencimento</div>
          <div class="extValue">${fmtDateBR(parseISODate(f.vencimento))}</div>
        </div>
      </div>
    `;
    extList.appendChild(item);
  });
}

// ===============================
// Dependentes + Dados pessoais
// ===============================
function getLoggedUser(){
  const userId = Number(localStorage.getItem("acamp2_user_id"));
  if (!userId) return null;
  return findUserById(userId);
}

function renderDependentes(u){
  const nome = (u.dependentesNome || "").trim();
  if (!nome){
    depEmpty.classList.remove("hidden");
    depNome.textContent = "—";
  } else {
    depEmpty.classList.add("hidden");
    depNome.textContent = nome;
  }
}

function renderDadosPessoais(u){
  dpNome.textContent = u.nome || "—";
  dpId.textContent = String(u.id ?? "—");

  const statusTxt = badgeForStatus(u.status).replace(/^(\S+\s)/, "");
  dpStatus.textContent = statusTxt || "—";

  dpPago.textContent = formatBRLFromCentavos(u.pagoCentavos || 0);

  const prof = (u.professorNome || "").trim();
  dpProfessor.textContent = prof ? prof : "Não informado";

  const deps = (u.dependentesNome || "").trim();
  dpDependentes.textContent = deps ? deps : "Nenhum cadastrado";
}

// ===============================
// Sessão
// ===============================
function saveSession(u){
  localStorage.setItem("acamp2_user_id", u.id);
  localStorage.setItem("acamp2_user_name", u.nome);
}

function clearSession(){
  localStorage.removeItem("acamp2_user_id");
  localStorage.removeItem("acamp2_user_name");
}

// ===============================
// PAGAMENTO — modal compartilhado (Painel e Detalhe)
// ===============================
let paymentModalEl = null;

function ensurePaymentModal(){
  if (paymentModalEl) return paymentModalEl;

  const overlay = document.createElement("div");
  overlay.id = "payModalOverlay";
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.background = "rgba(15,23,42,.55)";
  overlay.style.display = "none";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.padding = "14px";
  overlay.style.zIndex = "9999";

  overlay.innerHTML = `
    <div id="payModalCard" style="
      width: min(560px, 100%);
      background: #fff;
      border: 1px solid rgba(230,234,242,.9);
      box-shadow: 0 18px 50px rgba(15,23,42,.22);
      padding: 16px;
    ">
      <div style="display:flex; align-items:center; justify-content:space-between; gap:12px;">
        <div style="font-weight:1000; font-size:16px;">Pagamento via Pix</div>
        <button id="payClose" class="btn btn--ghost btn--mini" style="width:auto; margin-top:0;">Fechar</button>
      </div>

      <div style="margin-top:12px; font-size:13px; font-weight:800;">
        Copie a chave Pix e efetue o pagamento no valor da fatura.
      </div>

      <div style="margin-top:10px; padding:10px 12px; border:1px solid rgba(230,234,242,.9); background:#f7f9fd; font-weight:900; font-size:13px;">
        <div class="muted" style="font-size:12px; font-weight:800; margin-bottom:6px;">Chave Pix</div>
        <div id="payPixKey" style="word-break: break-all;">—</div>
      </div>

      <div style="margin-top:10px; display:flex; gap:10px;">
        <button id="payCopy" class="btn btn--ghost" style="margin-top:0;">Copiar</button>
        <button id="payConfirm" class="btn btn--primary" style="margin-top:0;">Confirmar pagamento</button>
      </div>

      <div class="muted" id="payHint" style="margin-top:10px; font-size:12px;">
        Valor: <span id="payAmount">R$ 0,00</span> • Referência: <span id="payRef">—</span>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  paymentModalEl = overlay;

  // fechar clicando fora
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) closePaymentModal();
  });

  // botão fechar
  overlay.querySelector("#payClose").addEventListener("click", closePaymentModal);

  // copiar
  overlay.querySelector("#payCopy").addEventListener("click", async () => {
    const key = overlay.querySelector("#payPixKey").textContent.trim();
    if (!key || key === "—") return;

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(key);
      } else {
        // fallback antigo
        const ta = document.createElement("textarea");
        ta.value = key;
        ta.style.position = "fixed";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      showToast("Chave Pix copiada ✅");
    } catch {
      showToast("Não foi possível copiar. Copie manualmente.");
    }
  });

  // confirmar
  overlay.querySelector("#payConfirm").addEventListener("click", () => {
    const ok = confirm("Tem certeza que quer confirmar o pagamento?");
    if (!ok) return;

    alert("Obrigado! Seu pagamento será processado e logo constará no seu extrato.");
    closePaymentModal();
  });

  return paymentModalEl;
}

function openPaymentModal({ pixKey, amountText, refText }){
  const modal = ensurePaymentModal();
  modal.querySelector("#payPixKey").textContent = pixKey || "—";
  modal.querySelector("#payAmount").textContent = amountText || "R$ 0,00";
  modal.querySelector("#payRef").textContent = refText || "—";
  modal.style.display = "flex";
}

function closePaymentModal(){
  if (!paymentModalEl) return;
  paymentModalEl.style.display = "none";
}

function openPaymentFlowFromPanelOrDetail(){
  const userId = Number(localStorage.getItem("acamp2_user_id"));
  if (!userId){
    showToast("Faça login novamente.");
    setScreen("login");
    return;
  }

  // preferir a fatura em aberto/atrasada
  const f = pickFaturaParaPagamento(userId);
  if (!f){
    showToast("Nenhuma fatura em aberto para pagamento.");
    return;
  }

  currentInvoice = f; // mantém coerência
  openPaymentModal({
    pixKey: PIX_KEY,
    amountText: formatBRLFromCentavos(f.valorCentavos),
    refText: refLabel(f.ref)
  });
}

// ===============================
// INIT
// ===============================
(function init(){
  loginName.innerHTML = "";
  DB.forEach(u=>{
    const opt = document.createElement("option");
    opt.value = u.id;
    opt.textContent = u.nome;
    loginName.appendChild(opt);
  });

  const savedId = localStorage.getItem("acamp2_user_id");
  if (savedId){
    const u = findUserById(Number(savedId));
    if (u){
      renderPanel(u);
      setScreen("panel");
      return;
    }
  }
  setScreen("login");
})();

// ===============================
// EVENTS
// ===============================
btnLogin.addEventListener("click", ()=>{
  loginError.classList.add("hidden");

  const id = Number(loginName.value);
  const token = loginToken.value.trim();
  const u = findUserById(id);

  if (!u || u.token !== token){
    loginError.classList.remove("hidden");
    return;
  }

  saveSession(u);
  renderPanel(u);
  setScreen("panel");
  showToast("Login realizado");
});

btnLogout.addEventListener("click", ()=>{
  clearSession();
  loginToken.value = "";
  setScreen("login");
  showToast("Você saiu");
});

document.querySelectorAll(".tile").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const action = btn.getAttribute("data-action");

    if (action === "fatura"){
      const userId = Number(localStorage.getItem("acamp2_user_id"));
      if (!userId) return;

      const f = pickFaturaAtual(userId);
      if (!f){ showToast("Nenhuma fatura disponível"); return; }

      currentInvoice = f;
      renderFaturaDetalhe(f);
      setScreen("fatura-detalhe");
      return;
    }

    if (action === "extrato"){
      const userId = Number(localStorage.getItem("acamp2_user_id"));
      if (!userId) return;

      renderExtrato(userId);
      setScreen("extrato");
      return;
    }

    if (action === "dependentes"){
      const u = getLoggedUser();
      if (!u){ showToast("Faça login novamente."); setScreen("login"); return; }

      renderDependentes(u);
      setScreen("dependentes");
      return;
    }

    if (action === "dados"){
      const u = getLoggedUser();
      if (!u){ showToast("Faça login novamente."); setScreen("login"); return; }

      renderDadosPessoais(u);
      setScreen("dados");
      return;
    }

    showToast(`Abrir: ${action} (em breve)`);
  });
});

btnBackFaturaDetalhe.addEventListener("click", ()=> setScreen("panel"));
btnBackExtrato.addEventListener("click", ()=> setScreen("panel"));
btnBackDependentes.addEventListener("click", ()=> setScreen("panel"));
btnBackDados.addEventListener("click", ()=> setScreen("panel"));

// ===== ATIVAÇÃO REAL: pagamento (painel e detalhe) =====
btnPay.addEventListener("click", () => {
  openPaymentFlowFromPanelOrDetail();
});

btnEfetuarPagamento.addEventListener("click", () => {
  openPaymentFlowFromPanelOrDetail();
});
