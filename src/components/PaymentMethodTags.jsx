import {
  FaCreditCard,
  FaExchangeAlt,
  FaReceipt,
  FaWallet,
  FaMobileAlt,
  FaBitcoin
} from "react-icons/fa";
import { SiApplepay, SiGooglepay, SiPaypal } from "react-icons/si";
import {
  getPaymentMethodCategory,
  getPaymentMethodColor
} from "../utils/paymentMethodColors";

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

  const category = getPaymentMethodCategory(method);

  if (category === "cards") {
    return FaCreditCard;
  }

  if (category === "bank_transfer") {
    return FaExchangeAlt;
  }

  if (category === "cash_voucher") {
    return FaReceipt;
  }

  if (category === "carrier_billing") {
    return FaMobileAlt;
  }

  if (category === "crypto") {
    return FaBitcoin;
  }

  return FaWallet;
}

function PaymentMethodTags({ methods = [] }) {
  return (
    <div className="tag-list">
      {methods.map((method) => {
        const Icon = getPaymentIcon(method);
        const methodColor = getPaymentMethodColor(method);

        return (
          <span
            key={method}
            className="tag"
            style={{
              "--tag-color": methodColor,
              "--tag-border": `${methodColor}55`,
              "--tag-bg": `${methodColor}14`
            }}
          >
            <Icon className="tag-icon" size={12} aria-hidden="true" />
            <span className="tag-text">{method}</span>
          </span>
        );
      })}
    </div>
  );
}

export default PaymentMethodTags;