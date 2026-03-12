interface NavigationProps {
  currentView:
    | "dashboard"
    | "invoices"
    | "clients"
    | "contacts"
    | "analytics"
    | "settings";
  onNavigate: (
    view:
      | "dashboard"
      | "invoices"
      | "clients"
      | "contacts"
      | "analytics"
      | "settings",
  ) => void;
}

export function Navigation({ currentView, onNavigate }: NavigationProps) {
  const menuItems = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "invoices", label: "Invoices", icon: "📄" },
    { id: "clients", label: "Clients", icon: "👥" },
    { id: "contacts", label: "Contacts", icon: "📞" },
    { id: "analytics", label: "Analytics", icon: "📈" },
    { id: "settings", label: "Settings", icon: "⚙️" },
  ];

  return (
    <nav className="sidebar-nav">
      <div className="nav-brand">
        <div className="brand-icon">💼</div>
        <div className="brand-text">
          <h1>InvoiceApp</h1>
          <p>Pro</p>
        </div>
      </div>

      <ul className="nav-menu">
        {menuItems.map((item) => (
          <li key={item.id}>
            <button
              className={`nav-link ${currentView === item.id ? "active" : ""}`}
              onClick={() =>
                onNavigate(
                  item.id as
                    | "dashboard"
                    | "invoices"
                    | "clients"
                    | "contacts"
                    | "analytics"
                    | "settings",
                )
              }
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-footer">
        <div className="user-profile">
          <div className="avatar">👤</div>
          <div className="user-info">
            <p className="user-name">User Account</p>
            <p className="user-email">user@company.com</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
