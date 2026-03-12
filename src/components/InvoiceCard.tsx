import type { Invoice } from "../types";

interface InvoiceCardProps {
  invoice: Invoice;
  onEdit: (invoice: Invoice) => void;
  onPrint: () => void;
}

export const InvoiceCard: React.FC<InvoiceCardProps> = ({
  invoice,
  onEdit,
  onPrint,
}) => {
  const calculateTotal = () => {
    return invoice.items.reduce((sum, item) => {
      const subtotal = item.quantity * item.rate;
      return sum + (subtotal - (subtotal * item.discount) / 100);
    }, 0);
  };

  const total = calculateTotal();
  const grandTotal = total * (1 + invoice.taxRate / 100);

  const currencySymbols: { [key: string]: string } = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    JPY: "¥",
    CAD: "$",
    AUD: "$",
    INR: "₹",
    MXN: "$",
  };

  const symbol = currencySymbols[invoice.currency] || "$";

  return (
    <div className={`invoice-card status-${invoice.status}`}>
      <div className="card-header">
        <div>
          <h3 className="invoice-number">{invoice.invoiceNumber}</h3>
          <p className="client-name">
            📧 {invoice.clientName || "Unnamed Client"}
          </p>
        </div>
        <span className={`status-badge ${invoice.status}`}>
          {invoice.status.toUpperCase()}
        </span>
      </div>

      <div className="card-content">
        <div className="invoice-meta">
          <div className="meta-item">
            <span className="meta-label">Amount</span>
            <span className="meta-value">
              {symbol}
              {grandTotal.toFixed(2)}
            </span>
          </div>
          <div className="meta-item">
            <span className="meta-label">Date</span>
            <span className="meta-value">📅 {invoice.date}</span>
          </div>
        </div>

        {invoice.recurring && (
          <div className="recurring-indicator">
            <span className="recurring-badge">
              🔄 Recurring {invoice.recurringInterval}
            </span>
          </div>
        )}
      </div>

      <div className="card-actions">
        <button
          onClick={() => onEdit(invoice)}
          className="btn btn-secondary btn-small"
        >
          ✏️ Edit
        </button>
        <button onClick={onPrint} className="btn btn-primary btn-small">
          🖨️ Print
        </button>
      </div>
    </div>
  );
};
