function PaymentMethodTags({ methods = [] }) {
  return (
    <div className="tag-list">
      {methods.map((method) => (
        <span key={method} className="tag">
          {method}
        </span>
      ))}
    </div>
  );
}

export default PaymentMethodTags;
