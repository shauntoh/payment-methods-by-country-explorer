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
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              color: methodColor,
              borderColor: `${methodColor}66`,
              background: `${methodColor}1A`
            }}
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