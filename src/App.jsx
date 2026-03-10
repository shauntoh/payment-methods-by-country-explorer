import { useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
import CountryDetails from "./components/CountryDetails";
import FilterBar from "./components/FilterBar";
import paymentsData from "./data/paymentsData";

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

  return (
    <div className="app-shell">
      <Sidebar
        countries={filteredCountries}
        selectedCountry={selectedCountry}
        onSelectCountry={handleSelectCountry}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />

      <main className="main-content">
        <FilterBar
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
        />

        {filteredCountries.length === 0 ? (
          <div className="card empty-results">
            <h2>No countries found</h2>
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
