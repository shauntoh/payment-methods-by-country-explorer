export function getCountryIsoCode(countryCode = "") {
  const code = String(countryCode || "").trim().toUpperCase();

  if (!/^[A-Z]{2}$/.test(code)) {
    return "";
  }

  return code;
}

export function getCountryFlagImageUrl(countryCode = "") {
  const isoCode = getCountryIsoCode(countryCode);

  if (!isoCode) {
    return "";
  }

  return `https://flagcdn.com/24x18/${isoCode.toLowerCase()}.png`;
}