import type { Invoice } from "../types";
import { CompanyHeader } from "./CompanyHeader";
import { InvoiceHeader } from "./InvoiceHeader";
import { ClientSection } from "./ClientSection";
import { LineItemsTable } from "./LineItemsTable";
import { InvoiceSettings } from "./InvoiceSettings";
import { NotesSection } from "./NotesSection";
import { InvoiceTotals } from "./InvoiceTotals";
import type { CompanyInfo, InvoiceItem } from "../types";

interface InvoiceEditorProps {
  invoice: Invoice;
  company: CompanyInfo;
  onUpdateInvoice: (updates: Partial<Invoice>) => void;
  onUpdateItem: (
    id: string,
    field: keyof InvoiceItem,
    value: string | number,
  ) => void;
  onRemoveItem: (id: string) => void;
  onAddItem: () => void;
  onSave: () => void;
  onBack: () => void;
}

export const InvoiceEditor: React.FC<InvoiceEditorProps> = ({
  invoice,
  company,
  onUpdateInvoice,
  onUpdateItem,
  onRemoveItem,
  onAddItem,
  onSave,
  onBack,
}) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="editor">
      <div className="editor-header">
        <button onClick={onBack} className="btn btn-back">
          ← Back to Dashboard
        </button>
        <h1>✏️ Edit Invoice</h1>
        <div className="editor-actions">
          <button onClick={onSave} className="btn btn-secondary">
            💾 Save Invoice
          </button>
          <button onClick={handlePrint} className="btn btn-primary">
            🖨️ Print
          </button>
        </div>
      </div>

      <div className={`invoice-preview template-${invoice.template}`}>
        <CompanyHeader company={company} />

        <InvoiceHeader
          invoice={invoice}
          onInvoiceNumberChange={(value) =>
            onUpdateInvoice({ invoiceNumber: value })
          }
          onDateChange={(value) => onUpdateInvoice({ date: value })}
          onDueDateChange={(value) => onUpdateInvoice({ dueDate: value })}
        />

        <ClientSection
          invoice={invoice}
          onClientNameChange={(value) => onUpdateInvoice({ clientName: value })}
          onClientEmailChange={(value) =>
            onUpdateInvoice({ clientEmail: value })
          }
          onClientAddressChange={(value) =>
            onUpdateInvoice({ clientAddress: value })
          }
        />

        <LineItemsTable
          invoice={invoice}
          onUpdateItem={onUpdateItem}
          onRemoveItem={onRemoveItem}
        />

        <button onClick={onAddItem} className="btn btn-secondary">
          ➕ Add Line Item
        </button>

        <InvoiceSettings
          invoice={invoice}
          onCurrencyChange={(value) => onUpdateInvoice({ currency: value })}
          onTaxRateChange={(value) => onUpdateInvoice({ taxRate: value })}
          onDiscountChange={(value) => onUpdateInvoice({ discount: value })}
          onStatusChange={(value) => onUpdateInvoice({ status: value })}
          onRecurringChange={(value) => onUpdateInvoice({ recurring: value })}
          onRecurringIntervalChange={(value) =>
            onUpdateInvoice({ recurringInterval: value })
          }
        />

        <NotesSection
          invoice={invoice}
          onNotesChange={(value) => onUpdateInvoice({ notes: value })}
        />

        <InvoiceTotals invoice={invoice} />
      </div>
    </div>
  );
};
