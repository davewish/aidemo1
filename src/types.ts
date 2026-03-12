export interface InvoiceItem {
  id: string;
  description: string;
  quantity: number;
  rate: number;
  discount: number;
}

export interface CompanyInfo {
  name: string;
  email: string;
  phone: string;
  address: string;
  logo: string;
}

export interface Invoice {
  id: string;
  invoiceNumber: string;
  clientName: string;
  clientEmail: string;
  clientAddress: string;
  date: string;
  dueDate: string;
  items: InvoiceItem[];
  currency: string;
  taxRate: number;
  discount: number;
  status: "draft" | "sent" | "paid";
  recurring: boolean;
  recurringInterval: "monthly" | "quarterly" | "yearly";
  template: string;
  notes: string;
}
