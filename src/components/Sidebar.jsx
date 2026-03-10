function Sidebar({
  countries,
  selectedCountry,
  onSelectCountry,
  searchTerm,
  onSearchChange
}) {
  return (
    <aside className="sidebar card">
      <h1>Payment Explorer</h1>
      <p className="sidebar-subtitle">Payment Methods by Country</p>

      <input
        type="text"
        className="search-input"
        placeholder="Search countries..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <ul className="country-list">
        {countries.map((country) => {
          const isSelected = selectedCountry?.id === country.id;

          return (
            <li key={country.id}>
              <button
                type="button"
                className={`country-button ${isSelected ? "selected" : ""}`}
                onClick={() => onSelectCountry(country)}
              >
                <span>{country.flag}</span>
                <span>{country.country}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
