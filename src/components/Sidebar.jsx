import { useMemo, useState } from "react";
import CountryFlag from "./CountryFlag";

const SORT_OPTIONS = [
  { value: "alphabetical", label: "Alphabetical" },
  { value: "population", label: "Population" },
  { value: "gdp_per_capita", label: "GDP per capita" },
  { value: "gaming_age", label: "Gaming Age Demographic" }
];

function sortMarkets(markets = [], sortBy = "alphabetical") {
  const sorted = [...markets];

  if (sortBy === "population") {
    return sorted.sort((a, b) => (b.population || 0) - (a.population || 0));
  }

  if (sortBy === "gdp_per_capita") {
    return sorted.sort((a, b) => (b.gdp_per_capita || 0) - (a.gdp_per_capita || 0));
  }

  if (sortBy === "gaming_age") {
    return sorted.sort((a, b) => {
      const aGamingAgePopulation = (a.population || 0) * (a.gaming_age_percent || 0);
      const bGamingAgePopulation = (b.population || 0) * (b.gaming_age_percent || 0);
      return bGamingAgePopulation - aGamingAgePopulation;
    });
  }

  return sorted.sort((a, b) => (a.country || "").localeCompare(b.country || ""));
}

function Sidebar({
  countries,
  selectedCountry,
  onSelectCountry,
  searchTerm,
  onSearchChange
}) {
  const [sortBy, setSortBy] = useState("alphabetical");

  const displayMarkets = useMemo(() => {
    return sortMarkets(countries, sortBy);
  }, [countries, sortBy]);

  return (
    <aside className="sidebar card">
      <h1>Video Gaming Payments Explorer</h1>
      <p className="sidebar-subtitle">Local payment methods for gaming and digital goods markets</p>

      <input
        type="text"
        className="search-input"
        placeholder="Search markets..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <label className="sort-label" htmlFor="sort-markets">
        Sort By
      </label>
      <select
        id="sort-markets"
        className="sort-select"
        value={sortBy}
        onChange={(event) => setSortBy(event.target.value)}
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <ul className="country-list">
        {displayMarkets.map((country) => {
          const isSelected = selectedCountry?.id === country.id;

          return (
            <li key={country.id}>
              <button
                type="button"
                className={`country-button ${isSelected ? "selected" : ""}`}
                onClick={() => onSelectCountry(country)}
              >
                <CountryFlag isoCode={country.iso_code || country.code} countryName={country.country} />
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