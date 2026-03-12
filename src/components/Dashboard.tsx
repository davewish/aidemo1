import type { Invoice } from "../types";
import { InvoiceCard } from "./InvoiceCard";

interface DashboardProps {
  invoices: Invoice[];
  onNewInvoice: () => void;
  onEditInvoice: (invoice: Invoice) => void;
  onSettings: () => void;
  onPrintInvoice: () => void;
}

export const Dashboard: React.FC<DashboardProps> = ({
  invoices,
  onNewInvoice,
  onEditInvoice,
  onSettings,
  onPrintInvoice,
}) => {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>📊 Invoice Manager</h1>
        <button onClick={onNewInvoice} className="btn btn-primary">
          ➕ Create New Invoice
        </button>
      </div>

      <div className="toolbar">
        <button onClick={onSettings} className="btn btn-secondary">
          ⚙️ Company Settings
        </button>
      </div>

      {invoices.length === 0 ? (
        <div className="empty-state">
          <p className="empty-icon">📋</p>
          <p className="empty-title">No invoices yet</p>
          <p className="empty-description">
            Start by creating your first invoice
          </p>
        </div>
      ) : (
        <>
          <div className="invoices-header">
            <p className="invoices-count">
              Total Invoices: <strong>{invoices.length}</strong>
            </p>
          </div>
          <div className="invoices-grid">
            {invoices.map((inv) => (
              <InvoiceCard
                key={inv.id}
                invoice={inv}
                onEdit={(invoice) => onEditInvoice(invoice)}
                onPrint={onPrintInvoice}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
