const paymentsData = [
  {
    id: 1,
    country: "Singapore",
    flag: "🇸🇬",
    region: "APAC",
    dominantPaymentMethod: "PayNow / Cards",
    population: 5920000,
    gdp_per_capita: 84700,
    cardPenetration: "Very high",
    gamingNotes: "Strong adoption of wallet top-ups and instant bank transfers.",
    dominantMethods: ["PayNow", "Visa", "Mastercard", "GrabPay"]
  },
  {
    id: 2,
    country: "Japan",
    flag: "🇯🇵",
    region: "APAC",
    dominantPaymentMethod: "Cards + Konbini",
    population: 124000000,
    gdp_per_capita: 32487,
    cardPenetration: "High",
    gamingNotes: "Convenience-store payments remain important for younger users.",
    dominantMethods: ["JCB", "Visa", "Konbini", "PayPay"]
  },
  {
    id: 3,
    country: "Brazil",
    flag: "🇧🇷",
    region: "LATAM",
    dominantPaymentMethod: "PIX",
    population: 203000000,
    gdp_per_capita: 10500,
    cardPenetration: "Medium to high",
    gamingNotes: "PIX is dominant for fast deposits and withdrawals.",
    dominantMethods: ["PIX", "Boleto", "Visa", "Mastercard"]
  },
  {
    id: 4,
    country: "Mexico",
    flag: "🇲🇽",
    region: "LATAM",
    dominantPaymentMethod: "Cash vouchers + Cards",
    population: 129000000,
    gdp_per_capita: 13300,
    cardPenetration: "Medium",
    gamingNotes: "Cash-based voucher flows still matter in many segments.",
    dominantMethods: ["OXXO Pay", "Visa", "Mastercard", "SPEI"]
  },
  {
    id: 5,
    country: "United States",
    flag: "🇺🇸",
    region: "North America",
    dominantPaymentMethod: "Cards",
    population: 334000000,
    gdp_per_capita: 82769,
    cardPenetration: "Very high",
    gamingNotes: "Cards dominate, with growing wallet usage for mobile players.",
    dominantMethods: ["Visa", "Mastercard", "Amex", "PayPal", "Apple Pay"]
  },
  {
    id: 6,
    country: "Canada",
    flag: "🇨🇦",
    region: "North America",
    dominantPaymentMethod: "Cards + Interac",
    population: 40200000,
    gdp_per_capita: 53400,
    cardPenetration: "Very high",
    gamingNotes: "Interac is widely trusted for bank-linked transfers.",
    dominantMethods: ["Interac", "Visa", "Mastercard", "PayPal"]
  },
  {
    id: 7,
    country: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    dominantPaymentMethod: "Cards + Open Banking",
    population: 68400000,
    gdp_per_capita: 49400,
    cardPenetration: "Very high",
    gamingNotes: "Open banking rails are growing for lower-cost account transfers.",
    dominantMethods: ["Visa", "Mastercard", "Faster Payments", "PayPal"]
  },
  {
    id: 8,
    country: "Germany",
    flag: "🇩🇪",
    region: "Europe",
    dominantPaymentMethod: "Cards + Bank Transfer",
    population: 84200000,
    gdp_per_capita: 52900,
    cardPenetration: "High",
    gamingNotes: "Bank transfer and wallet options remain strong alongside cards.",
    dominantMethods: ["SEPA", "Visa", "Mastercard", "PayPal", "Sofort"]
  },
  {
    id: 9,
    country: "United Arab Emirates",
    flag: "🇦🇪",
    region: "MEA",
    dominantPaymentMethod: "Cards + Wallets",
    population: 10100000,
    gdp_per_capita: 51000,
    cardPenetration: "High",
    gamingNotes: "Fast growth in mobile wallet payments and prepaid usage.",
    dominantMethods: ["Visa", "Mastercard", "Apple Pay", "Google Pay"]
  },
  {
    id: 10,
    country: "South Africa",
    flag: "🇿🇦",
    region: "MEA",
    dominantPaymentMethod: "Cards + EFT",
    population: 62000000,
    gdp_per_capita: 6400,
    cardPenetration: "Medium",
    gamingNotes: "EFT and card mix supports broad payment coverage.",
    dominantMethods: ["EFT", "Visa", "Mastercard", "Ozow"]
  },
  {
    id: 11,
    country: "India",
    flag: "🇮🇳",
    region: "Emerging",
    dominantPaymentMethod: "UPI",
    population: 1430000000,
    gdp_per_capita: 2698,
    cardPenetration: "Medium",
    gamingNotes: "UPI drives very high transaction velocity in digital commerce.",
    dominantMethods: ["UPI", "RuPay", "Visa", "Paytm"]
  },
  {
    id: 12,
    country: "Nigeria",
    flag: "🇳🇬",
    region: "Emerging",
    dominantPaymentMethod: "Bank Transfer",
    population: 223000000,
    gdp_per_capita: 2140,
    cardPenetration: "Low to medium",
    gamingNotes: "Local transfers and wallet systems are key for accessibility.",
    dominantMethods: ["NIP Transfer", "Verve", "Visa", "Flutterwave"]
  }
];

export default paymentsData;
