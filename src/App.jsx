import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import CountryDetails from "./components/CountryDetails";
import FilterBar from "./components/FilterBar";
import paymentsData from "./data/paymentsData";

const COUNTRY_THEME_COLORS = {
  China: "rgba(200, 0, 0, 0.04)",
  Japan: "rgba(200, 0, 0, 0.04)",
  Brazil: "rgba(0, 150, 0, 0.04)",
  Australia: "rgba(0, 120, 255, 0.04)",
  Singapore: "rgba(200, 0, 0, 0.04)",
  India: "rgba(255, 140, 0, 0.04)",
  "United States": "rgba(0, 120, 255, 0.04)",
  Canada: "rgba(0, 120, 255, 0.04)",
  Mexico: "rgba(0, 150, 0, 0.04)",
  Chile: "rgba(0, 120, 255, 0.04)",
  Colombia: "rgba(255, 170, 0, 0.04)",
  Thailand: "rgba(200, 0, 0, 0.04)",
  Vietnam: "rgba(200, 0, 0, 0.04)",
  Korea: "rgba(0, 120, 255, 0.04)",
  Taiwan: "rgba(0, 120, 255, 0.04)",
  Indonesia: "rgba(0, 150, 0, 0.04)",
  Malaysia: "rgba(0, 150, 0, 0.04)",
  Philippines: "rgba(0, 120, 255, 0.04)",
  Pakistan: "rgba(0, 150, 0, 0.04)",
  Bangladesh: "rgba(0, 150, 0, 0.04)",
  Turkey: "rgba(200, 0, 0, 0.04)",
  "South Africa": "rgba(0, 150, 0, 0.04)",
  Egypt: "rgba(255, 170, 0, 0.04)",
  Kenya: "rgba(0, 150, 0, 0.04)",
  "Hong Kong": "rgba(200, 0, 0, 0.04)",
  "New Zealand": "rgba(0, 120, 255, 0.04)"
};

function getCountryThemeColor(countryName = "") {
  return COUNTRY_THEME_COLORS[countryName] || "rgba(15, 23, 42, 0.03)";
}

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [selectedCountryId, setSelectedCountryId] = useState(paymentsData[0]?.id ?? null);

  const filteredCountries = useMemo(() => {
    return paymentsData.filter((country) => {
      const matchesRegion =
        selectedRegion === "All" || country.region === selectedRegion;

      const matchesSearch = country.country
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesRegion && matchesSearch;
    });
  }, [searchTerm, selectedRegion]);

  const selectedCountry = useMemo(() => {
    const countryInFilteredList = filteredCountries.find(
      (country) => country.id === selectedCountryId
    );

    if (countryInFilteredList) {
      return countryInFilteredList;
    }

    return filteredCountries[0] ?? null;
  }, [filteredCountries, selectedCountryId]);

  const handleSelectCountry = (country) => {
    setSelectedCountryId(country.id);
  };

  const selectedThemeColor = getCountryThemeColor(selectedCountry?.country);

  return (
    <div className="app-shell">
      <Sidebar
        countries={filteredCountries}
        selectedCountry={selectedCountry}
        onSelectCountry={handleSelectCountry}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main
        className="main-content"
        style={{ "--selected-country-accent": selectedThemeColor }}
      >
        <FilterBar
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />

        {filteredCountries.length === 0 ? (
          <div className="card empty-results">
            <h2>No markets found</h2>
            <p>Try a different search term or region filter.</p>
          </div>
        ) : (
          <CountryDetails country={selectedCountry} />
        )}
      </main>
    </div>
  );
}

export default App;