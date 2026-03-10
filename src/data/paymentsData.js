const paymentsData = [
  {
    id: 1,
    country: "Singapore",
    flag: "🇸🇬",
    region: "APAC",
    dominantPaymentMethod: "PayNow / Cards",
    settlementSpeed: "Instant for PayNow, T+1 for cards",
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
    settlementSpeed: "T+1 to T+2",
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
    settlementSpeed: "Instant",
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
    settlementSpeed: "Instant to T+2",
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
    settlementSpeed: "T+1 to T+2",
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
    settlementSpeed: "Near real-time to T+1",
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
    settlementSpeed: "Instant to T+1",
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
    settlementSpeed: "T+1",
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
    settlementSpeed: "Instant to T+1",
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
    settlementSpeed: "T+1",
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
    settlementSpeed: "Instant",
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
    settlementSpeed: "Near real-time",
    cardPenetration: "Low to medium",
    gamingNotes: "Local transfers and wallet systems are key for accessibility.",
    dominantMethods: ["NIP Transfer", "Verve", "Visa", "Flutterwave"]
  }
];

export default paymentsData;
