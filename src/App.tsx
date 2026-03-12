import { useState, useMemo } from "react";
import "./App.css";

interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
}

interface Invoice {
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  date: string;
  dueDate: string;
  items: InvoiceItem[];
}

function App() {
  const getInitialDates = () => {
    const today = new Date();
    const dueDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
    return {
      date: today.toISOString().split("T")[0],
      dueDate: dueDate.toISOString().split("T")[0],
    };
  };

  const initialDates = useMemo(() => getInitialDates(), []);

  const [invoice, setInvoice] = useState<Invoice>({
    invoiceNumber: "INV-001",
    clientName: "",
    clientEmail: "",
    date: initialDates.date,
    dueDate: initialDates.dueDate,
    items: [{ id: "1", description: "", quantity: 1, rate: 0 }],
  });

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: "",
      quantity: 1,
      rate: 0,
    };
    setInvoice({ ...invoice, items: [...invoice.items, newItem] });
  };

  const removeItem = (id: string) => {
    setInvoice({
      ...invoice,
      items: invoice.items.filter((item) => item.id !== id),
    });
  };

  const updateItem = (
    id: string,
    field: keyof InvoiceItem,
    value: string | number,
  ) => {
    setInvoice({
      ...invoice,
      items: invoice.items.map((item) =>
        item.id === id ? { ...item, [field]: value } : item,
      ),
    });
  };

  const calculateTotal = () => {
    return invoice.items.reduce(
      (sum, item) => sum + item.quantity * item.rate,
      0,
    );
  };

  const total = calculateTotal();
  const tax = total * 0.1;
  const grandTotal = total + tax;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="invoice-container">
      <div className="invoice-header">
        <h1>Invoice Generator</h1>
        <button onClick={handlePrint} className="btn-print">
          Print Invoice
        </button>
      </div>

      <div className="invoice-box">
        <div className="invoice-top">
          <div className="invoice-info">
            <h2>Invoice</h2>
            <p>Invoice #: {invoice.invoiceNumber}</p>
            <p>Date: {invoice.date}</p>
            <p>Due Date: {invoice.dueDate}</p>
          </div>
        </div>

        <div className="client-section">
          <div className="form-group">
            <label>Client Name</label>
            <input
              type="text"
              value={invoice.clientName}
              onChange={(e) =>
                setInvoice({ ...invoice, clientName: e.target.value })
              }
              placeholder="Enter client name"
            />
          </div>
          <div className="form-group">
            <label>Client Email</label>
            <input
              type="email"
              value={invoice.clientEmail}
              onChange={(e) =>
                setInvoice({ ...invoice, clientEmail: e.target.value })
              }
              placeholder="Enter client email"
            />
          </div>
        </div>

        <table className="items-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Quantity</th>
              <th>Rate</th>
              <th>Amount</th>
              <th>Action</th>
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
                      updateItem(item.id, "description", e.target.value)
                    }
                    placeholder="Service or product"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) =>
                      updateItem(
                        item.id,
                        "quantity",
                        parseFloat(e.target.value) || 0,
                      )
                    }
                    min="0"
                    step="1"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={item.rate}
                    onChange={(e) =>
                      updateItem(
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
                <td className="amount">
                  ${(item.quantity * item.rate).toFixed(2)}
                </td>
                <td>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="btn-remove"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <button onClick={addItem} className="btn-add">
          + Add Item
        </button>

        <div className="invoice-totals">
          <div className="total-row">
            <span>Subtotal:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="total-row">
            <span>Tax (10%):</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="total-row grand-total">
            <span>Total:</span>
            <span>${grandTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
