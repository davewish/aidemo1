import { InvoiceItem } from "./types";

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

export const formatCurrency = (amount: number, currency: string = "USD") => {
  const symbol = currencySymbols[currency] || "$";
  return `${symbol}${amount.toFixed(2)}`;
};

export const calculateItemTotal = (item: InvoiceItem) => {
  const subtotal = item.quantity * item.rate;
  return subtotal - (subtotal * item.discount) / 100;
};

export const calculateSubtotal = (items: InvoiceItem[]) => {
  return items.reduce((sum, item) => sum + calculateItemTotal(item), 0);
};

export const calculateTax = (subtotal: number, taxRate: number) => {
  return subtotal * (taxRate / 100);
};

export const getInitialDates = () => {
  const today = new Date();
  const dueDate = new Date(today.getTime() + 30 * 24 * 60 * 60 * 1000);
  return {
    date: today.toISOString().split("T")[0],
    dueDate: dueDate.toISOString().split("T")[0],
  };
};

export const getCurrencySymbol = (currency: string) => {
  return currencySymbols[currency] || "$";
};
