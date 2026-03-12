import type { Invoice, InvoiceItem } from "../types";
import { formatCurrency, calculateItemTotal } from "../utils";

interface LineItemsTableProps {
  invoice: Invoice;
  onUpdateItem: (
    id: string,
    field: keyof InvoiceItem,
    value: string | number,
  ) => void;
  onRemoveItem: (id: string) => void;
}

export const LineItemsTable: React.FC<LineItemsTableProps> = ({
  invoice,
  onUpdateItem,
  onRemoveItem,
}) => {
  return (
    <div className="line-items-section">
      <label className="section-label">📋 Line Items</label>
      <table className="items-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Quantity</th>
            <th>Rate</th>
            <th>Discount %</th>
            <th>Amount</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {invoice.items.map((item) => (
            <tr key={item.id}>
              <td>
                <input
                  type="text"
                  value={item.description}
                  onChange={(e) =>
                    onUpdateItem(item.id, "description", e.target.value)
                  }
                  placeholder="Service or product"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    onUpdateItem(
                      item.id,
                      "quantity",
                      parseFloat(e.target.value) || 0,
                    )
                  }
                  min="0"
                  step="0.01"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.rate}
                  onChange={(e) =>
                    onUpdateItem(
                      item.id,
                      "rate",
                      parseFloat(e.target.value) || 0,
                    )
                  }
                  min="0"
                  step="0.01"
                  placeholder="0.00"
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.discount}
                  onChange={(e) =>
                    onUpdateItem(
                      item.id,
                      "discount",
                      parseFloat(e.target.value) || 0,
                    )
                  }
                  min="0"
                  max="100"
                  step="0.01"
                  placeholder="0"
                />
              </td>
              <td className="amount">
                {formatCurrency(calculateItemTotal(item), invoice.currency)}
              </td>
              <td>
                <button
                  onClick={() => onRemoveItem(item.id)}
                  className="btn btn-danger btn-small"
                >
                  🗑️ Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
