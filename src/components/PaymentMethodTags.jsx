import {
  FaCreditCard,
  FaExchangeAlt,
  FaReceipt,
  FaWallet,
  FaMobileAlt
} from "react-icons/fa";
import { SiApplepay, SiGooglepay, SiPaypal } from "react-icons/si";

function getPaymentIcon(method = "") {
  const value = method.toLowerCase();

  if (value.includes("paypal")) {
    return SiPaypal;
  }

  if (value.includes("apple pay")) {
    return SiApplepay;
  }

  if (value.includes("google pay")) {
    return SiGooglepay;
  }

  const cardMethods = ["visa", "mastercard", "amex", "jcb", "rupay", "verve"];
  if (cardMethods.some((card) => value.includes(card))) {
    return FaCreditCard;
  }

  const transferMethods = [
    "pix",
    "upi",
    "paynow",
    "interac",
    "sepa",
    "spei",
    "faster payments",
    "eft",
    "nip transfer",
    "ozow",
    "flutterwave",
    "bank transfer",
    "transfer"
  ];
  if (transferMethods.some((transfer) => value.includes(transfer))) {
    return FaExchangeAlt;
  }

  const cashVoucherMethods = ["boleto", "oxxo", "konbini", "voucher", "cash"];
  if (cashVoucherMethods.some((cash) => value.includes(cash))) {
    return FaReceipt;
  }

  const mobileMoneyMethods = ["mobile", "momo", "mpesa"];
  if (mobileMoneyMethods.some((mobile) => value.includes(mobile))) {
    return FaMobileAlt;
  }

  const walletMethods = ["wallet", "grabpay", "paytm", "paypay"];
  if (walletMethods.some((wallet) => value.includes(wallet))) {
    return FaWallet;
  }

  return FaWallet;
}

function PaymentMethodTags({ methods = [] }) {
  return (
    <div className="tag-list">
      {methods.map((method) => {
        const Icon = getPaymentIcon(method);

        return (
          <span
            key={method}
            className="tag"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <Icon size={12} aria-hidden="true" />
            <span>{method}</span>
          </span>
        );
      })}
    </div>
  );
}

export default PaymentMethodTags;
