import type { Invoice } from "../types";

interface ClientSectionProps {
  invoice: Invoice;
  onClientNameChange: (value: string) => void;
  onClientEmailChange: (value: string) => void;
  onClientAddressChange: (value: string) => void;
}

export const ClientSection: React.FC<ClientSectionProps> = ({
  invoice,
  onClientNameChange,
  onClientEmailChange,
  onClientAddressChange,
}) => {
  return (
    <div className="client-section">
      <div className="form-section">
        <label>Bill To:</label>
        <input
          type="text"
          placeholder="Client Name"
          value={invoice.clientName}
          onChange={(e) => onClientNameChange(e.target.value)}
          className="form-input"
        />
        <input
          type="email"
          placeholder="Client Email"
          value={invoice.clientEmail}
          onChange={(e) => onClientEmailChange(e.target.value)}
          className="form-input"
        />
        <textarea
          placeholder="Client Address"
          value={invoice.clientAddress}
          onChange={(e) => onClientAddressChange(e.target.value)}
          className="form-textarea"
        />
      </div>
    </div>
  );
};
