export function AnalyticsView() {
  const stats = [
    {
      label: "Total Revenue",
      value: "$0.00",
      icon: "💰",
      type: "primary",
      subtext: "All time",
    },
    {
      label: "Paid Invoices",
      value: "$0.00",
      icon: "✓",
      type: "success",
      subtext: "Completed",
    },
    {
      label: "Unpaid Invoices",
      value: "$0.00",
      icon: "⏳",
      type: "warning",
      subtext: "Outstanding",
    },
    {
      label: "Overdue Invoices",
      value: "$0.00",
      icon: "⚠️",
      type: "danger",
      subtext: "Action needed",
    },
  ];

  const revenueCharts = [
    {
      title: "Revenue Trends",
      icon: "📈",
      description: "Monthly revenue growth",
    },
    {
      title: "Invoice Status",
      icon: "📊",
      description: "Paid vs Unpaid breakdown",
    },
    {
      title: "Client Performance",
      icon: "👥",
      description: "Top clients by revenue",
    },
    {
      title: "Payment Analysis",
      icon: "💳",
      description: "Payment method breakdown",
    },
  ];

  return (
    <div className="analytics-view">
      <div className="view-header">
        <h2 className="view-title">📊 Analytics & Reports</h2>
      </div>

      <div className="analytics-section">
        <h3 className="section-title">Key Metrics</h3>
        <div className="stats-grid">
          {stats.map((stat, idx) => (
            <div key={idx} className={`stat-card stat-${stat.type}`}>
              <div className="stat-icon-container">{stat.icon}</div>
              <div className="stat-content">
                <div className="stat-label">{stat.label}</div>
                <div className="stat-value">{stat.value}</div>
                <div className="stat-subtext">{stat.subtext}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="analytics-section">
        <h3 className="section-title">Reports</h3>
        <div className="reports-grid">
          {revenueCharts.map((chart, idx) => (
            <div key={idx} className="report-card">
              <div className="report-icon">{chart.icon}</div>
              <h4 className="report-title">{chart.title}</h4>
              <p className="report-description">{chart.description}</p>
              <button className="btn btn-ghost btn-small">
                View Details →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
