import PaymentMethodTags from "./PaymentMethodTags";

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

  return (
    <div className="card country-card">
      <div className="country-header">
        <div>
          <h2>{`${country.flag} ${country.country}`}</h2>
          <p className="region">{country.region}</p>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-item">
          <p className="label">Dominant Payment Method</p>
          <p>{country.dominantPaymentMethod}</p>
        </div>
        <div className="detail-item">
          <p className="label">Card Penetration</p>
          <p>{country.cardPenetration}</p>
        </div>
        <div className="detail-item">
          <p className="label">Market Size</p>
          <p>Population: {formatPopulationInMillions(country.population)}</p>
        </div>
        <div className="detail-item">
          <p className="label">Economic Strength</p>
          <p>GDP per capita: {formatCurrency(country.gdp_per_capita)}</p>
        </div>
      </div>

      <div className="gaming-notes">
        <p className="label">Gaming Notes</p>
        <p>{country.gamingNotes}</p>
      </div>

      <div>
        <p className="label">Dominant Payment Methods</p>
        <PaymentMethodTags methods={country.dominantMethods} />
      </div>
    </div>
  );
}

export default CountryDetails;
