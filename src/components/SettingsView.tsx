import type { CompanyInfo } from "../types";
import { CompanyBranding } from "./CompanyBranding";

interface SettingsViewProps {
  company: CompanyInfo;
  onCompanyChange: (updates: Partial<CompanyInfo>) => void;
  onBack: () => void;
}

export const SettingsView: React.FC<SettingsViewProps> = ({
  company,
  onCompanyChange,
  onBack,
}) => {
  return (
    <div className="settings-view">
      <div className="settings-header">
        <button onClick={onBack} className="btn btn-back">
          ← Back to Dashboard
        </button>
        <h1>⚙️ Company Settings</h1>
      </div>

      <div className="settings-form">
        <CompanyBranding company={company} onCompanyChange={onCompanyChange} />

        <div className="settings-footer">
          <button onClick={onBack} className="btn btn-primary">
            ✓ Save & Return
          </button>
        </div>
      </div>
    </div>
  );
};
