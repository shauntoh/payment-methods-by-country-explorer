import PaymentMethodTags from "./PaymentMethodTags";

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
        <div className="flag" aria-label={`${country.country} flag`}>
          {country.flag}
        </div>
        <div>
          <h2>{country.country}</h2>
          <p className="region">{country.region}</p>
        </div>
      </div>

      <div className="details-grid">
        <div className="detail-item">
          <p className="label">Dominant Payment Method</p>
          <p>{country.dominantPaymentMethod}</p>
        </div>
        <div className="detail-item">
          <p className="label">Settlement Speed</p>
          <p>{country.settlementSpeed}</p>
        </div>
        <div className="detail-item">
          <p className="label">Card Penetration</p>
          <p>{country.cardPenetration}</p>
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
