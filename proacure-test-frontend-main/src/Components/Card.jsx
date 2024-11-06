import React from "react";

const Card = ({ item }) => {
  return (
    <div className="card" key={item.id}>
      <h5>{item.name}</h5>
      <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
  <h6>Country:</h6> <span>{item.country}</span>
</div>

<div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h6>Compliance Score:</h6> <span>{item.compliance_score}</span>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h6>Delivery Time:</h6> <span>{item.contract_terms?.delivery_time}</span>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h6>Quality Standard:</h6> <span>{item.contract_terms?.quality_standard}</span>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h6>Discount Rate:</h6> <span>{item.contract_terms?.discount_rate}%</span>
      </div>
      <div className="" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h6>Last Audit:</h6> <span>{item.last_audit || "No audit details available"}</span>
      </div>
    </div>
  );
};

export default Card;
