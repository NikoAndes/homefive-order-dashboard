/**
 * HomeFive Order Dashboard - Main Application
 * Author: Nicolas Isaza Sierra (NikoAndes)
 * Prototype with fictional data for portfolio demonstration.
 */

// ─── State ───────────────────────────────────────────────────────────────────
let allOrders = [];
let activeStatus = 'ALL';
let searchQuery = '';

// ─── DOM References ──────────────────────────────────────────────────────────
const tbody = document.getElementById('ordersTableBody');
const tableCount = document.getElementById('tableCount');
const searchInput = document.getElementById('searchInput');
const lastUpdated = document.getElementById('lastUpdated');

// ─── Status labels map ───────────────────────────────────────────────────────
const STATUS_LABELS = {
  NEW: 'New',
  CONFIRMED: 'Confirmed',
  IN_PROCESS: 'In Process',
  DISPATCHED: 'Dispatched',
  DELIVERED: 'Delivered',
  RETURNED: 'Returned',
  CANCELLED: 'Cancelled'
};

// ─── Format currency COP ─────────────────────────────────────────────────────
function formatCOP(value) {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0
  }).format(value);
}

// ─── Format date ─────────────────────────────────────────────────────────────
function formatDate(dateStr) {
  const d = new Date(dateStr + 'T00:00:00');
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

// ─── Update metric cards ─────────────────────────────────────────────────────
function updateMetrics(orders) {
  const counts = {
    total: orders.length,
    new: 0, confirmed: 0, in_process: 0,
    dispatched: 0, delivered: 0, returned: 0, cancelled: 0
  };
  orders.forEach(o => {
    const k = o.status.toLowerCase();
    if (counts[k] !== undefined) counts[k]++;
  });
  document.getElementById('m-total').textContent = allOrders.length;
  document.getElementById('m-new').textContent = allOrders.filter(o => o.status === 'NEW').length;
  document.getElementById('m-confirmed').textContent = allOrders.filter(o => o.status === 'CONFIRMED').length;
  document.getElementById('m-in_process').textContent = allOrders.filter(o => o.status === 'IN_PROCESS').length;
  document.getElementById('m-dispatched').textContent = allOrders.filter(o => o.status === 'DISPATCHED').length;
  document.getElementById('m-delivered').textContent = allOrders.filter(o => o.status === 'DELIVERED').length;
  document.getElementById('m-returned').textContent = allOrders.filter(o => o.status === 'RETURNED').length;
  document.getElementById('m-cancelled').textContent = allOrders.filter(o => o.status === 'CANCELLED').length;
}

// ─── Render table ────────────────────────────────────────────────────────────
function renderTable(orders) {
  if (orders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="no-results">No orders match your search.</td></tr>`;
    tableCount.textContent = '0 orders';
    return;
  }
  tableCount.textContent = `${orders.length} order${orders.length !== 1 ? 's' : ''}`;
  tbody.innerHTML = orders.map(o => `
    <tr>
      <td><span class="order-id">${o.id}</span></td>
      <td>${formatDate(o.date)}</td>
      <td>${o.customer}</td>
      <td>${o.city}</td>
      <td class="amount-cell">${formatCOP(o.amount)}</td>
      <td>${o.carrier}</td>
      <td><span class="badge badge-${o.status}">${STATUS_LABELS[o.status] || o.status}</span></td>
    </tr>
  `).join('');
}

// ─── Apply filters ───────────────────────────────────────────────────────────
function applyFilters() {
  let filtered = allOrders;
  if (activeStatus !== 'ALL') {
    filtered = filtered.filter(o => o.status === activeStatus);
  }
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(o =>
      o.customer.toLowerCase().includes(q) ||
      o.city.toLowerCase().includes(q) ||
      o.id.toLowerCase().includes(q)
    );
  }
  renderTable(filtered);
}

// ─── Filter button listeners ─────────────────────────────────────────────────
document.getElementById('filterButtons').addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeStatus = btn.dataset.status;
  applyFilters();
});

// ─── Search listener ─────────────────────────────────────────────────────────
searchInput.addEventListener('input', e => {
  searchQuery = e.target.value;
  applyFilters();
});

// ─── Load orders ─────────────────────────────────────────────────────────────
async function loadOrders() {
  try {
    const res = await fetch('data/orders.json');
    if (!res.ok) throw new Error('Network response was not ok');
    allOrders = await res.json();
  } catch (err) {
    console.warn('Could not load orders.json, using fallback data.', err);
    allOrders = getFallbackOrders();
  }
  allOrders.sort((a, b) => new Date(b.date) - new Date(a.date));
  updateMetrics(allOrders);
  applyFilters();
  lastUpdated.textContent = 'Last updated: ' + new Date().toLocaleTimeString();
}

// ─── Fallback sample data ────────────────────────────────────────────────────
function getFallbackOrders() {
  return [
    { id: 'HF-1001', customer: 'Laura Gomez', city: 'Bogota', amount: 149900, status: 'DELIVERED', carrier: 'InterRapidisimo', date: '2026-06-01' },
    { id: 'HF-1002', customer: 'Carlos Ramirez', city: 'Medellin', amount: 89900, status: 'DISPATCHED', carrier: 'Servientrega', date: '2026-06-02' },
    { id: 'HF-1003', customer: 'Maria Torres', city: 'Cali', amount: 210000, status: 'IN_PROCESS', carrier: 'Coordinadora', date: '2026-06-03' },
    { id: 'HF-1004', customer: 'Andres Perez', city: 'Barranquilla', amount: 75000, status: 'NEW', carrier: 'TCC', date: '2026-06-04' },
    { id: 'HF-1005', customer: 'Sofia Vargas', city: 'Bucaramanga', amount: 320000, status: 'CONFIRMED', carrier: 'Envia', date: '2026-06-05' }
  ];
}

// ─── Init ────────────────────────────────────────────────────────────────────
loadOrders();
