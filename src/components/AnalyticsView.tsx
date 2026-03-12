export function AnalyticsView() {
  const stats = [
    { label: "Total Revenue", value: "$0.00", icon: "💰", type: "success" },
    { label: "Paid Invoices", value: "$0.00", icon: "✓", type: "success" },
    { label: "Unpaid Invoices", value: "$0.00", icon: "⏳", type: "warning" },
    { label: "Overdue Invoices", value: "$0.00", icon: "⚠️", type: "danger" },
  ];

  return (
    <div>
      <div className="view-header">
        <h2 className="view-title">Analytics & Reports</h2>
      </div>

      <div className="dashboard-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className={`stat-card ${stat.type}`}>
            <div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-value">{stat.value}</div>
            </div>
            <div className="stat-icon">{stat.icon}</div>
          </div>
        ))}
      </div>

      <div className="card mt-24">
        <div className="card-header">Revenue Trends</div>
        <div style={{ padding: "40px", textAlign: "center", color: "#6b7280" }}>
          <p style={{ margin: "0 0 16px 0", fontSize: "32px" }}>📈</p>
          <p style={{ margin: "0", fontSize: "16px", fontWeight: "500" }}>
            Chart coming soon
          </p>
          <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>
            Monthly revenue and trend analysis will appear here
          </p>
        </div>
      </div>
    </div>
  );
}
