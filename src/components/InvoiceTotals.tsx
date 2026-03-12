import type { Invoice } from "../types";
import { calculateSubtotal, calculateTax } from "../utils";

interface InvoiceTotalsProps {
  invoice: Invoice;
}

export const InvoiceTotals: React.FC<InvoiceTotalsProps> = ({ invoice }) => {
  const subtotal = calculateSubtotal(invoice.items);
  const invoiceDiscount = subtotal * (invoice.discount / 100);
  const afterDiscount = subtotal - invoiceDiscount;
  const tax = calculateTax(afterDiscount, invoice.taxRate);
  const grandTotal = afterDiscount + tax;

  const getCurrencySymbol = (currency: string) => {
    const symbols: { [key: string]: string } = {
      USD: "$",
      EUR: "€",
      GBP: "£",
      JPY: "¥",
      CAD: "$",
      AUD: "$",
      INR: "₹",
      MXN: "$",
    };
    return symbols[currency] || "$";
  };

  const formatCurrency = (amount: number) => {
    return `${getCurrencySymbol(invoice.currency)}${amount.toFixed(2)}`;
  };

  return (
    <div className="totals-section">
      <div className="total-row">
        <span>Subtotal:</span>
        <span>{formatCurrency(subtotal)}</span>
      </div>
      {invoice.discount > 0 && (
        <div className="total-row">
          <span>Discount ({invoice.discount}%):</span>
          <span>-{formatCurrency(invoiceDiscount)}</span>
        </div>
      )}
      <div className="total-row">
        <span>Tax ({invoice.taxRate}%):</span>
        <span>{formatCurrency(tax)}</span>
      </div>
      <div className="total-row grand-total">
        <span>Total Due:</span>
        <span>{formatCurrency(grandTotal)}</span>
      </div>
    </div>
  );
};
