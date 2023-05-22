export function MenuItemSellerDetailsList({ header, text }) {
  return (
    <>
      <div className="ListHeader" style={{ fontWeight: "600" }}>
        {header}
      </div>
      <div className="ListText" style={{ color: "rgb(102, 102, 102)" }}>
        {text}
      </div>
    </>
  );
}
