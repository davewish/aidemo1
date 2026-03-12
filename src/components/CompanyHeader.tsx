import type { CompanyInfo } from "../types";

interface CompanyHeaderProps {
  company: CompanyInfo;
}

export const CompanyHeader: React.FC<CompanyHeaderProps> = ({ company }) => {
  return (
    <div className="company-header">
      {company.logo && <img src={company.logo} alt="Logo" />}
      <div className="company-info">
        <h2>{company.name}</h2>
        <p>{company.email}</p>
        <p>{company.phone}</p>
        <p>{company.address}</p>
      </div>
    </div>
  );
};
