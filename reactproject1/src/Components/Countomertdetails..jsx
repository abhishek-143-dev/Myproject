import React from 'react';

const CustomerDetails = ({ customer }) => {
  return (
    <div className="customer-details">
      <h2>{customer.name}</h2>
      <p>{customer.title}</p>
      <p>{customer.address}</p>
    </div>
  );
};

export default CustomerDetails;
