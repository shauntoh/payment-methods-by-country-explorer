import PaymentMethodTags from "./PaymentMethodTags";
import CountryFlag from "./CountryFlag";
import { formatLargeNumber } from "../utils/formatters";

const RISK_COLOR_MAP = {
  Low: "#22c55e",
  "Medium-Low": "#84cc16",
  Medium: "#eab308",
  "Medium-High": "#f97316",
  High: "#ef4444",
  "Very High": "#7f1d1d"
};

const REGULATION_COLOR_MAP = {
  Light: "#22c55e",
  Moderate: "#eab308",
  Strict: "#f97316",
  "Very Strict": "#ef4444",
  Restricted: "#7f1d1d"
};

function formatPopulationInMillions(population) {
  return `${Math.round(population / 1000000)}M`;
}

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(value);
}

function getRiskLevelColor(level, isRegulation = false) {
  if (isRegulation) {
    return REGULATION_COLOR_MAP[level] || "#64748b";
  }

  return RISK_COLOR_MAP[level] || "#64748b";
}

function RiskIndicator({ value, isRegulation = false }) {
  const color = getRiskLevelColor(value, isRegulation);

  return (
    <span className="risk-indicator" style={{ color }}>
      <span className="risk-dot" style={{ backgroundColor: color }} />
      {value}
    </span>
  );
}

function CountryDetails({ country }) {
  if (!country) {
    return (
      <div className="card country-card">
        <p className="empty-state">No market selected.</p>
      </div>
    );
  }

  const riskProfile = country.risk_profile || {};
  const gamingAgePercent = country.gaming_age_percent || 0;
  const gamingAgePopulation = Math.round((country.population || 0) * gamingAgePercent);
  const gamingAgeDisplay = `${Math.round(gamingAgePercent * 100)}% (~${formatLargeNumber(gamingAgePopulation)} people)`;

  return (
    <div className="card country-card">
      <div className="country-header country-header-panel">
        <div className="country-title-block">
          <div className="country-title-row">
            <CountryFlag
              isoCode={country.iso_code || country.code}
              countryName={country.country}
              className="flag-inline-img"
            />
            <h2>{country.country}</h2>
          </div>
          <p className="region">{country.region}</p>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-item">
          <p className="label">Dominant Payment Method</p>
          <p className="detail-value">{country.dominantPaymentMethod}</p>
        </div>
        <div className="detail-item">
          <p className="label">Card Penetration</p>
          <p className="detail-value">{country.cardPenetration}</p>
        </div>
        <div className="detail-item">
          <p className="label">Market Size</p>
          <p className="detail-meta">Population</p>
          <p className="detail-value">{formatPopulationInMillions(country.population)}</p>
        </div>
        <div className="detail-item">
          <p className="label">Gaming Age Demographic</p>
          <p className="detail-meta">Population Age 15-34</p>
          <p className="detail-value">{gamingAgeDisplay}</p>
        </div>
        <div className="detail-item">
          <p className="label">Economic Strength</p>
          <p className="detail-meta">GDP per capita</p>
          <p className="detail-value">{formatCurrency(country.gdp_per_capita)}</p>
        </div>
        <div className="detail-item detail-item-wide">
          <p className="label">Digital Services Tax / VAT</p>
          <p className="detail-value">{country.digital_tax}</p>
          <p className="detail-meta">
            Reference information only. Tax rules vary by transaction type and jurisdiction.
            Please consult a qualified tax advisor before making compliance decisions.
          </p>
        </div>
      </div>

      <div className="risk-regulation-card section-panel">
        <p className="label">Payment Risk & Regulation</p>
        <div className="risk-row">
          <span className="risk-key">Fraud Risk</span>
          <RiskIndicator value={riskProfile.fraud_risk || "Medium"} />
        </div>
        <div className="risk-row">
          <span className="risk-key">Chargeback Risk</span>
          <RiskIndicator value={riskProfile.chargeback_risk || "Medium"} />
        </div>
        <div className="risk-row">
          <span className="risk-key">Gaming Content Regulation</span>
          <RiskIndicator value={riskProfile.gaming_regulation || "Moderate"} isRegulation />
        </div>
      </div>

      <div className="payment-mix section-panel">
        <div className="payment-mix-header">
          <p className="label">Payment Method Mix</p>
          <span className="mix-estimated">Estimated</span>
        </div>

        <div className="payment-mix-list">
          {(country.payment_share || []).map((item) => (
            <div key={item.method} className="mix-row">
              <div className="mix-row-top">
                <span className="mix-method">{item.method}</span>
                <span className="mix-share">{item.share}%</span>
              </div>
              <div className="mix-track" role="presentation">
                <div className="mix-fill" style={{ width: `${item.share}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="gaming-notes section-panel">
        <p className="label">Market Payment Insight</p>
        <p>{country.payment_insight}</p>
      </div>

      <div className="method-tags-panel section-panel">
        <p className="label">Dominant Payment Methods</p>
        <PaymentMethodTags methods={country.dominantMethods} />
      </div>
    </div>
  );
}

export default CountryDetails;