import React, { useState } from 'react';
import CustomerList from './Components/Customert';
import CustomerDetails from './Components/Countomertdetails.';
import PhotoGrid from './Components/Photogride';
import './App.css';

const App = () => {
  const [customers,setcustomers] = useState([
    { id: 1, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 2, name: 'Leo', title: 'Mng', address: '123 Main St' },
    { id: 3, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 4, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 5, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 6, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 7, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 8, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 9, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 10, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 11, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 12, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 13, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 14, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 15, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 16, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 17, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 18, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 19, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    { id: 20, name: 'John Doe', title: 'CEO', address: '123 Main St' },
    
    
  ]);
  const [selectedCustomerId, setSelectedCustomerId] = useState(null);

  const selectedCustomer = customers.find(customer => customer.id === selectedCustomerId);

  return (
    <div className="app">
      <div className="sidebar">
        <CustomerList
          customers={customers}
          selectedCustomerId={selectedCustomerId}
          onSelectCustomer={setSelectedCustomerId}
        />
      </div>
      <div className="main-content">
        {selectedCustomer && <CustomerDetails customer={selectedCustomer} />}
        <PhotoGrid />
      </div>
    </div>
  );
};

export default App;
