const REGIONS = [
  "All",
  "APAC",
  "LATAM",
  "North America",
  "Europe",
  "MEA",
  "Emerging"
];

function FilterBar({ selectedRegion, onRegionChange }) {
  return (
    <div className="filter-bar card">
      <span className="filter-label">Filter by Region:</span>
      <div className="filter-buttons">
        {REGIONS.map((region) => (
          <button
            key={region}
            type="button"
            className={`filter-button ${selectedRegion === region ? "active" : ""}`}
            onClick={() => onRegionChange(region)}
          >
            {region}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
