export function getFlagEmoji(countryCode = "") {
  if (!countryCode || countryCode.length !== 2) {
    return "";
  }

  const code = countryCode.toUpperCase();
  const isValid = /^[A-Z]{2}$/.test(code);

  if (!isValid) {
    return "";
  }

  const OFFSET = 127397;
  return String.fromCodePoint(
    code.charCodeAt(0) + OFFSET,
    code.charCodeAt(1) + OFFSET
  );
}
