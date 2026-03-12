import { useState, useMemo } from "react";
import "./App.css";
import type { Invoice, InvoiceItem, CompanyInfo } from "./types";
import { getInitialDates } from "./utils";
import { Dashboard } from "./components/Dashboard";
import { InvoiceEditor } from "./components/InvoiceEditor";
import { SettingsView } from "./components/SettingsView";

function App() {
  const initialDates = useMemo(() => getInitialDates(), []);

  const [view, setView] = useState<"dashboard" | "editor" | "settings">(
    "dashboard",
  );

  const [company, setCompany] = useState<CompanyInfo>({
    name: "Your Company",
    email: "contact@company.com",
    phone: "+1 (555) 000-0000",
    address: "123 Business St, City, State 12345",
    logo: "",
  });

  const [invoices, setInvoices] = useState<Invoice[]>([
    {
      id: "inv-1",
      invoiceNumber: "INV-001",
      clientName: "",
      clientEmail: "",
      clientAddress: "",
      date: initialDates.date,
      dueDate: initialDates.dueDate,
      items: [{ id: "1", description: "", quantity: 1, rate: 0, discount: 0 }],
      currency: "USD",
      taxRate: 10,
      discount: 0,
      status: "draft",
      recurring: false,
      recurringInterval: "monthly",
      template: "modern",
      notes: "",
    },
  ]);

  const [invoice, setInvoice] = useState<Invoice>(invoices[0]);

  const addItem = () => {
    const newItem: InvoiceItem = {
      id: Date.now().toString(),
      description: "",
      quantity: 1,
      rate: 0,
      discount: 0,
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

  const createNewInvoice = () => {
    const newInvoice: Invoice = {
      id: `inv-${Date.now()}`,
      invoiceNumber: `INV-${String(invoices.length + 1).padStart(3, "0")}`,
      clientName: "",
      clientEmail: "",
      clientAddress: "",
      date: initialDates.date,
      dueDate: initialDates.dueDate,
      items: [{ id: "1", description: "", quantity: 1, rate: 0, discount: 0 }],
      currency: "USD",
      taxRate: 10,
      discount: 0,
      status: "draft",
      recurring: false,
      recurringInterval: "monthly",
      template: "modern",
      notes: "",
    };
    setInvoices([...invoices, newInvoice]);
    setInvoice(newInvoice);
    setView("editor");
  };

  const saveInvoice = () => {
    setInvoices(invoices.map((inv) => (inv.id === invoice.id ? invoice : inv)));
    setView("dashboard");
  };

  const updateInvoice = (updates: Partial<Invoice>) => {
    setInvoice({ ...invoice, ...updates });
  };

  const updateCompany = (updates: Partial<CompanyInfo>) => {
    setCompany({ ...company, ...updates });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="app">
      {view === "dashboard" && (
        <Dashboard
          invoices={invoices}
          onNewInvoice={createNewInvoice}
          onEditInvoice={(inv) => {
            setInvoice(inv);
            setView("editor");
          }}
          onSettings={() => setView("settings")}
          onPrintInvoice={handlePrint}
        />
      )}

      {view === "editor" && (
        <InvoiceEditor
          invoice={invoice}
          company={company}
          onUpdateInvoice={updateInvoice}
          onUpdateItem={updateItem}
          onRemoveItem={removeItem}
          onAddItem={addItem}
          onSave={saveInvoice}
          onBack={() => setView("dashboard")}
        />
      )}

      {view === "settings" && (
        <SettingsView
          company={company}
          onCompanyChange={updateCompany}
          onBack={() => setView("dashboard")}
        />
      )}
    </div>
  );
}

export default App;
