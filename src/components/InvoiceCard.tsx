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
        <h3>{invoice.invoiceNumber}</h3>
        <span className={`status-badge ${invoice.status}`}>
          {invoice.status}
        </span>
      </div>
      <p className="client-name">{invoice.clientName || "Unnamed Client"}</p>
      <p className="invoice-total">
        {symbol}
        {grandTotal.toFixed(2)}
      </p>
      <p className="invoice-date">{invoice.date}</p>
      {invoice.recurring && (
        <span className="recurring-badge">🔄 Recurring</span>
      )}
      <div className="card-actions">
        <button onClick={() => onEdit(invoice)} className="btn-edit">
          Edit
        </button>
        <button onClick={onPrint} className="btn-print">
          Print
        </button>
      </div>
    </div>
  );
};
