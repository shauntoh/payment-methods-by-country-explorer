import { getFlagEmoji } from "../utils/flags";

function Sidebar({
  countries,
  selectedCountry,
  onSelectCountry,
  searchTerm,
  onSearchChange
}) {
  return (
    <aside className="sidebar card">
      <h1>Video Gaming Payments Explorer</h1>
      <p className="sidebar-subtitle">Local payment methods for gaming and digital goods markets</p>

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
          const flag = getFlagEmoji(country.code);

          return (
            <li key={country.id}>
              <button
                type="button"
                className={`country-button ${isSelected ? "selected" : ""}`}
                onClick={() => onSelectCountry(country)}
              >
                <span>{flag}</span>
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
