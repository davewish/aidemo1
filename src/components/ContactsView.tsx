export function ContactsView() {
  return (
    <div>
      <div className="view-header">
        <h2 className="view-title">Contacts</h2>
        <div className="view-actions">
          <button className="btn btn-primary">➕ Add Contact</button>
        </div>
      </div>

      <div className="card">
        <div className="card-header">All Contacts</div>
        <div style={{ padding: "40px", textAlign: "center", color: "#6b7280" }}>
          <p style={{ margin: "0 0 16px 0", fontSize: "32px" }}>📞</p>
          <p style={{ margin: "0", fontSize: "16px", fontWeight: "500" }}>
            No contacts yet
          </p>
          <p style={{ margin: "8px 0 0 0", fontSize: "14px" }}>
            Manage your contacts and email addresses
          </p>
        </div>
      </div>
    </div>
  );
}
