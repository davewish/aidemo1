import type { Invoice } from "../types";

interface NotesProps {
  invoice: Invoice;
  onNotesChange: (value: string) => void;
}

export const NotesSection: React.FC<NotesProps> = ({
  invoice,
  onNotesChange,
}) => {
  return (
    <div className="notes-section">
      <label>Notes</label>
      <textarea
        value={invoice.notes}
        onChange={(e) => onNotesChange(e.target.value)}
        placeholder="Add any additional notes or payment terms..."
        rows={4}
      />
    </div>
  );
};
