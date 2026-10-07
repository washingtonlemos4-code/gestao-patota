* {
  box-sizing: border-box;
}

:root {
  --bg: #f3f7fb;
  --panel: #ffffff;
  --panel-soft: #f7fafc;
  --primary: #1e8e5a;
  --primary-dark: #146d45;
  --secondary: #0f172a;
  --muted: #64748b;
  --border: #e2e8f0;
  --success: #22c55e;
  --warning: #f59e0b;
  --danger: #ef4444;
  --info: #3b82f6;
  --shadow: 0 10px 25px rgba(15, 23, 42, 0.08);
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: var(--bg);
  color: var(--secondary);
}

button, input, select, textarea {
  font: inherit;
}

.app-shell {
  display: flex;
  min-height: 100vh;
}

.sidebar {
  width: 260px;
  background: linear-gradient(180deg, #0f172a, #1e293b);
  color: white;
  padding: 24px 16px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.brand-badge {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  background: rgba(255,255,255,0.12);
  font-size: 1.5rem;
}

.brand h1 {
  margin: 0;
  font-size: 1.1rem;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.menu-item {
  border: none;
  background: transparent;
  color: #dfeaf5;
  text-align: left;
  padding: 12px 14px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.menu-item:hover,
.menu-item.active {
  background: rgba(255,255,255,0.08);
}

.main-content {
  flex: 1;
  padding: 28px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
}

.topbar h2 {
  margin: 0;
}

.primary-btn, .secondary-btn, .ghost-btn, .danger-btn {
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 10px 18px;
  font-weight: 700;
  transition: all 0.2s ease;
}

.primary-btn {
  background: var(--primary);
  color: white;
}

.primary-btn:hover { background: var(--primary-dark); }

.secondary-btn {
  background: #e2e8f0;
  color: var(--secondary);
}

.danger-btn {
  background: var(--danger);
  color: white;
}

.page {
  display: none;
}

.page.active {
  display: block;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
  margin-bottom: 20px;
}

.stats-grid.small {
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
}

.stat-card {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px;
  box-shadow: var(--shadow);
}

.stat-card .label {
  color: var(--muted);
  font-size: 0.82rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.stat-card .value {
  margin-top: 12px;
  font-size: 1.8rem;
  font-weight: 700;
}

.panel {
  background: var(--panel);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 18px;
  margin-bottom: 20px;
  box-shadow: var(--shadow);
}

.panel h3 {
  margin-top: 0;
}

.content-grid.two-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.list-compact {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.compact-item {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 10px 12px;
  background: var(--panel-soft);
  border-radius: 10px;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: var(--muted);
  font-size: 0.88rem;
  font-weight: 700;
}

input, select, textarea {
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 10px 12px;
  resize: vertical;
  background: white;
}

.wide {
  grid-column: 1 / -1;
}

.form-actions {
  display: flex;
  gap: 10px;
  align-items: center;
}

.filters-row {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 12px;
  margin: 16px 0;
}

.table-wrapper {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 12px;
}

th, td {
  padding: 12px 10px;
  border-bottom: 1px solid var(--border);
  text-align: left;
  font-size: 0.94rem;
}

th {
  color: var(--muted);
  font-size: 0.8rem;
  text-transform: uppercase;
}

.badge {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.8rem;
  font-weight: 700;
}

.badge.green { background: rgba(34, 197, 94, 0.12); color: #15803d; }
.badge.red { background: rgba(239, 68, 68, 0.12); color: #b91c1c; }
.badge.yellow { background: rgba(245, 158, 11, 0.12); color: #b45309; }
.badge.blue { background: rgba(59, 130, 246, 0.12); color: #1d4ed8; }

.action-buttons {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.action-buttons button {
  border: none;
  border-radius: 8px;
  padding: 8px 10px;
  cursor: pointer;
}

.action-buttons .edit { background: #dbeafe; color: #1d4ed8; }
.action-buttons .delete { background: #fee2e2; color: #b91c1c; }
.action-buttons .view { background: #dcfce7; color: #166534; }

.summary-boxes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
  margin-bottom: 16px;
}

.summary-box {
  background: var(--panel-soft);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 14px;
}

.summary-box strong {
  display: block;
  font-size: 1.1rem;
}

.modal {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}

.modal.hidden { display: none; }

.modal-content {
  background: white;
  border-radius: 16px;
  width: min(900px, 92vw);
  max-height: 88vh;
  overflow: auto;
  box-shadow: var(--shadow);
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  padding: 18px;
}

.close-btn {
  border: none;
  background: #e2e8f0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2rem;
}

#gameModalBody {
  padding: 18px;
}

.gol-form {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr auto;
  gap: 10px;
  margin-top: 12px;
}

.empty-state {
  padding: 24px;
  text-align: center;
  color: var(--muted);
}

@media (max-width: 900px) {
  .app-shell {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }

  .menu {
    display: grid;
    grid-template-columns: repeat(2, minmax(120px, 1fr));
  }

  .main-content {
    padding: 18px;
  }

  .content-grid.two-cols {
    grid-template-columns: 1fr;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
