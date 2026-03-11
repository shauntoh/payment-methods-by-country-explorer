const PAYMENT_CATEGORY_COLORS = {
  cards: "#2563eb",
  bank_transfer: "#7c3aed",
  wallet: "#16a34a",
  cash_voucher: "#f97316",
  carrier_billing: "#0d9488",
  bnpl: "#ec4899",
  crypto: "#4f46e5",
  other: "#6b7280"
};

const PAYMENT_METHOD_KEYWORDS = {
  cards: [
    "cards",
    "card",
    "credit",
    "debit",
    "visa",
    "mastercard",
    "amex",
    "jcb",
    "rupay",
    "verve"
  ],
  bank_transfer: [
    "bank transfer",
    "account-to-account",
    "account to account",
    "a2a",
    "rtp",
    "paynow",
    "pix",
    "upi",
    "payid",
    "fpx",
    "fps",
    "interac",
    "sepa",
    "spei",
    "poli",
    "promptpay",
    "instant eft",
    "eft",
    "transfer"
  ],
  wallet: [
    "wallet",
    "e-wallet",
    "ewallet",
    "apple pay",
    "google pay",
    "grabpay",
    "alipay",
    "wechat pay",
    "paypal",
    "paytm",
    "phonepe",
    "gopay",
    "ovo",
    "dana",
    "shopeepay",
    "paypay",
    "gcash",
    "maya",
    "momo",
    "zalopay",
    "line pay",
    "jkopay",
    "kakaopay",
    "naverpay",
    "mpesa",
    "m-pesa"
  ],
  cash_voucher: [
    "cash voucher",
    "voucher",
    "convenience store",
    "boleto",
    "oxxo",
    "konbini",
    "efecty",
    "baloto",
    "over-the-counter",
    "over the counter",
    "otc",
    "cash"
  ],
  carrier_billing: ["carrier billing", "direct carrier"],
  bnpl: ["bnpl", "buy now pay later", "afterpay", "klarna", "affirm"],
  crypto: ["crypto", "bitcoin", "btc", "eth", "ethereum", "usdt"]
};

export function getPaymentMethodCategory(methodName = "") {
  const normalized = String(methodName || "").trim().toLowerCase();

  if (!normalized) {
    return "other";
  }

  if (normalized === "other") {
    return "other";
  }

  for (const [category, keywords] of Object.entries(PAYMENT_METHOD_KEYWORDS)) {
    if (keywords.some((keyword) => normalized.includes(keyword))) {
      return category;
    }
  }

  return "other";
}

export function getPaymentMethodColor(methodName = "") {
  const category = getPaymentMethodCategory(methodName);
  return PAYMENT_CATEGORY_COLORS[category] || PAYMENT_CATEGORY_COLORS.other;
}