function roundToOneDecimal(value) {
  return Math.round((value + Number.EPSILON) * 10) / 10;
}

export function formatLargeNumber(value) {
  const number = Number(value);

  if (!Number.isFinite(number)) {
    return "0";
  }

  const absValue = Math.abs(number);

  if (absValue >= 1_000_000_000) {
    return `${roundToOneDecimal(number / 1_000_000_000).toFixed(1).replace(/\.0$/, "")}B`;
  }

  if (absValue >= 1_000_000) {
    return `${roundToOneDecimal(number / 1_000_000).toFixed(1).replace(/\.0$/, "")}M`;
  }

  if (absValue >= 1_000) {
    return `${Math.round(number / 1_000)}K`;
  }

  return `${Math.round(number)}`;
}