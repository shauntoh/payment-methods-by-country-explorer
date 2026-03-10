import PaymentMethodTags from "./PaymentMethodTags";
import { getFlagEmoji } from "../utils/flags";

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

function CountryDetails({ country }) {
  if (!country) {
    return (
      <div className="card country-card">
        <p className="empty-state">No country selected.</p>
      </div>
    );
  }

  const flag = getFlagEmoji(country.code);

  return (
    <div className="card country-card">
      <div className="country-header">
        <div className="country-title-block">
          <div className="country-title-row">
            <span className="flag-inline" aria-label={`${country.country} flag`}>
              {flag}
            </span>
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
          <p className="label">Economic Strength</p>
          <p className="detail-meta">GDP per capita</p>
          <p className="detail-value">{formatCurrency(country.gdp_per_capita)}</p>
        </div>
      </div>

      <div className="payment-mix">
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

      <div className="gaming-notes">
        <p className="label">Market Payment Insight</p>
        <p>{country.payment_insight}</p>
      </div>

      <div>
        <p className="label">Dominant Payment Methods</p>
        <PaymentMethodTags methods={country.dominantMethods} />
      </div>
    </div>
  );
}

export default CountryDetails;
