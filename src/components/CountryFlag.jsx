import { useMemo, useState } from "react";
import { getCountryFlagImageUrl, getCountryIsoCode } from "../utils/flags";

function CountryFlag({ isoCode = "", countryName = "", className = "" }) {
  const [hasError, setHasError] = useState(false);
  const resolvedIsoCode = useMemo(() => getCountryIsoCode(isoCode), [isoCode]);
  const imageUrl = useMemo(() => getCountryFlagImageUrl(resolvedIsoCode), [resolvedIsoCode]);

  if (!resolvedIsoCode || hasError || !imageUrl) {
    return (
      <span className={`country-flag-fallback ${className}`.trim()} aria-label={`${countryName} code`}>
        {resolvedIsoCode || "--"}
      </span>
    );
  }

  return (
    <img
      className={`country-flag ${className}`.trim()}
      src={imageUrl}
      alt={`${countryName} flag`}
      loading="lazy"
      onError={() => setHasError(true)}
      width="24"
      height="18"
    />
  );
}

export default CountryFlag;