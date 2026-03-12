import type { Invoice } from "../types";

interface InvoiceHeaderProps {
  invoice: Invoice;
  onInvoiceNumberChange: (value: string) => void;
  onDateChange: (value: string) => void;
  onDueDateChange: (value: string) => void;
}

export const InvoiceHeader: React.FC<InvoiceHeaderProps> = ({
  invoice,
  onInvoiceNumberChange,
  onDateChange,
  onDueDateChange,
}) => {
  return (
    <div className="invoice-metadata">
      <div className="left">
        <h1>INVOICE</h1>
      </div>
      <div className="right">
        <div className="meta-item">
          <span>Invoice #</span>
          <input
            type="text"
            value={invoice.invoiceNumber}
            onChange={(e) => onInvoiceNumberChange(e.target.value)}
            className="meta-input"
          />
        </div>
        <div className="meta-item">
          <span>Date</span>
          <input
            type="date"
            value={invoice.date}
            onChange={(e) => onDateChange(e.target.value)}
            className="meta-input"
          />
        </div>
        <div className="meta-item">
          <span>Due Date</span>
          <input
            type="date"
            value={invoice.dueDate}
            onChange={(e) => onDueDateChange(e.target.value)}
            className="meta-input"
          />
        </div>
      </div>
    </div>
  );
};
