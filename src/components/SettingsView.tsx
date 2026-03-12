import type { CompanyInfo } from "../types";

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
        <button onClick={onBack} className="btn-back">
          ← Back
        </button>
        <h1>Company Settings</h1>
      </div>

      <div className="settings-form">
        <div className="form-group">
          <label>Company Name</label>
          <input
            type="text"
            value={company.name}
            onChange={(e) => onCompanyChange({ name: e.target.value })}
            placeholder="Your Company Name"
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={company.email}
            onChange={(e) => onCompanyChange({ email: e.target.value })}
            placeholder="contact@company.com"
          />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            value={company.phone}
            onChange={(e) => onCompanyChange({ phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            value={company.address}
            onChange={(e) => onCompanyChange({ address: e.target.value })}
            placeholder="123 Business St, City, State 12345"
            rows={3}
          />
        </div>

        <div className="form-group">
          <label>Company Logo URL</label>
          <input
            type="url"
            value={company.logo}
            onChange={(e) => onCompanyChange({ logo: e.target.value })}
            placeholder="https://example.com/logo.png"
          />
        </div>

        {company.logo && (
          <div className="logo-preview">
            <img src={company.logo} alt="Logo Preview" />
          </div>
        )}

        <button onClick={onBack} className="btn-primary">
          Save & Return
        </button>
      </div>
    </div>
  );
};
