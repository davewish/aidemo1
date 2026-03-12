import type { Invoice } from "../types";

interface InvoiceSettingsProps {
  invoice: Invoice;
  onCurrencyChange: (value: string) => void;
  onTaxRateChange: (value: number) => void;
  onDiscountChange: (value: number) => void;
  onStatusChange: (value: "draft" | "sent" | "paid") => void;
  onRecurringChange: (value: boolean) => void;
  onRecurringIntervalChange: (
    value: "monthly" | "quarterly" | "yearly",
  ) => void;
}

export const InvoiceSettings: React.FC<InvoiceSettingsProps> = ({
  invoice,
  onCurrencyChange,
  onTaxRateChange,
  onDiscountChange,
  onStatusChange,
  onRecurringChange,
  onRecurringIntervalChange,
}) => {
  return (
    <div className="settings-section">
      <div className="settings-grid">
        <div className="setting">
          <label>Currency</label>
          <select
            value={invoice.currency}
            onChange={(e) => onCurrencyChange(e.target.value)}
          >
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
            <option>CAD</option>
            <option>AUD</option>
            <option>INR</option>
            <option>MXN</option>
          </select>
        </div>
        <div className="setting">
          <label>Tax Rate (%)</label>
          <input
            type="number"
            value={invoice.taxRate}
            onChange={(e) => onTaxRateChange(parseFloat(e.target.value) || 0)}
            min="0"
            max="100"
            step="0.01"
          />
        </div>
        <div className="setting">
          <label>Invoice Discount (%)</label>
          <input
            type="number"
            value={invoice.discount}
            onChange={(e) => onDiscountChange(parseFloat(e.target.value) || 0)}
            min="0"
            max="100"
            step="0.01"
          />
        </div>
        <div className="setting">
          <label>Status</label>
          <select
            value={invoice.status}
            onChange={(e) =>
              onStatusChange(e.target.value as "draft" | "sent" | "paid")
            }
          >
            <option value="draft">Draft</option>
            <option value="sent">Sent</option>
            <option value="paid">Paid</option>
          </select>
        </div>
      </div>

      <div className="recurring-section">
        <label>
          <input
            type="checkbox"
            checked={invoice.recurring}
            onChange={(e) => onRecurringChange(e.target.checked)}
          />
          Recurring Invoice
        </label>
        {invoice.recurring && (
          <select
            value={invoice.recurringInterval}
            onChange={(e) =>
              onRecurringIntervalChange(
                e.target.value as "monthly" | "quarterly" | "yearly",
              )
            }
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        )}
      </div>
    </div>
  );
};
