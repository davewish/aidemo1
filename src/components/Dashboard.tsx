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
        <h1>Modern Invoice Manager</h1>
        <button onClick={onNewInvoice} className="btn-primary">
          + New Invoice
        </button>
      </div>

      <div className="toolbar">
        <button onClick={onSettings} className="btn-secondary">
          ⚙️ Company Settings
        </button>
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
    </div>
  );
};
