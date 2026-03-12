import type { CompanyInfo } from "../types";

interface CompanyBrandingProps {
  company: CompanyInfo;
  onCompanyChange: (updates: Partial<CompanyInfo>) => void;
}

export const CompanyBranding: React.FC<CompanyBrandingProps> = ({
  company,
  onCompanyChange,
}) => {
  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64 = event.target?.result as string;
        onCompanyChange({ logo: base64 });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleLogoUrlChange = (url: string) => {
    onCompanyChange({ logo: url });
  };

  return (
    <div className="branding-section">
      <div className="branding-header">
        <h2>Company Branding</h2>
        <p>Customize your company logo and appearance</p>
      </div>

      <div className="branding-content">
        {/* Logo Upload */}
        <div className="branding-upload">
          <div className="upload-area">
            <div className="logo-preview-large">
              {company.logo ? (
                <img src={company.logo} alt="Company Logo" />
              ) : (
                <div className="logo-placeholder">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" />
                  </svg>
                  <p>No logo uploaded</p>
                </div>
              )}
            </div>

            <div className="upload-controls">
              <label htmlFor="logo-upload" className="upload-button">
                <span>📤 Upload Logo</span>
                <input
                  id="logo-upload"
                  type="file"
                  accept="image/*"
                  onChange={handleLogoChange}
                  style={{ display: "none" }}
                />
              </label>

              {company.logo && (
                <button
                  onClick={() => onCompanyChange({ logo: "" })}
                  className="btn-remove-logo"
                >
                  Remove Logo
                </button>
              )}
            </div>

            <div className="divider">OR</div>

            <div className="url-input-group">
              <label>Logo URL</label>
              <input
                type="url"
                value={company.logo}
                onChange={(e) => handleLogoUrlChange(e.target.value)}
                placeholder="https://example.com/logo.png"
                className="url-input"
              />
            </div>
          </div>
        </div>

        {/* Company Info */}
        <div className="company-info-form">
          <h3>Company Information</h3>

          <div className="form-group">
            <label>Company Name</label>
            <input
              type="text"
              value={company.name}
              onChange={(e) => onCompanyChange({ name: e.target.value })}
              placeholder="Your Company Name"
              className="form-input-large"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={company.email}
                onChange={(e) => onCompanyChange({ email: e.target.value })}
                placeholder="contact@company.com"
                className="form-input-large"
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={company.phone}
                onChange={(e) => onCompanyChange({ phone: e.target.value })}
                placeholder="+1 (555) 000-0000"
                className="form-input-large"
              />
            </div>
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              value={company.address}
              onChange={(e) => onCompanyChange({ address: e.target.value })}
              placeholder="123 Business St, City, State 12345"
              rows={3}
              className="form-input-large"
            />
          </div>
        </div>
      </div>

      {/* Logo Preview in Invoice */}
      {company.logo && (
        <div className="logo-preview-invoice">
          <h3>Preview in Invoice</h3>
          <div className="invoice-header-preview">
            <img src={company.logo} alt="Logo Preview" />
            <div className="company-preview-info">
              <h4>{company.name}</h4>
              <p>{company.email}</p>
              <p>{company.phone}</p>
              <p>{company.address}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
