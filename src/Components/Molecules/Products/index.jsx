import React, { useState } from 'react';
import './index.css';

const Products = () => {
  const [products, setProducts] = useState([
    { name: '', details: '', stock: '', image: '' } // Initial product row
  ]);
  const [showInputRow, setShowInputRow] = useState(false);

  const addProduct = () => {
    setShowInputRow(true);
  };

  const handleChange = (index, field, value) => {
    const updatedProducts = [...products];
    updatedProducts[index][field] = value;
    setProducts(updatedProducts);
  };

  const handleSubmit = () => {
    // Handle submission logic here
    console.log('Products submitted:', products);
    setShowInputRow(false); // Hide the input row after submission
  };

  const tableStyle = {
    border: '1px solid black',
    width: '500px', // Adjusted to fill container
   // Added to prevent column width from exceeding the table width
  };

  const cellStyle = {
    border: '1px solid black',
    padding: '8px', // Added padding for better mobile view
    textAlign: 'center', // Center align text in cells
  };

  

  const buttonStyle1 = {
    padding: '0.5rem 1rem',
    fontSize: '14px',
    cursor: 'pointer',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    width:"70px",
    textAlign:'left',
    borderRadius: '5px',
  };

  const containerStyle = {
    overflowX: 'auto', // Enable horizontal scrolling on small screens
  };

  return (
    <div>
      <br></br>
      <h1>Manage Products</h1><br/>
      <hr></hr>
      <button id="bt" onClick={addProduct}>Add Product</button>
      <div id="containertble">
        <table style={tableStyle}>
          <tbody>
            <tr>
              <th style={cellStyle}>Product name</th>
              <th style={cellStyle}>Details</th>
              <th style={cellStyle}>Stock</th>
              <th style={cellStyle}>Image</th>
              <th style={cellStyle}>Action</th>
            </tr>
            
            {showInputRow && (
              <tr>
                <td style={cellStyle}>
                  <input
                    type="text"
                    placeholder="Product name"
                    value={products[0].name}
                    onChange={(e) => handleChange(0, 'name', e.target.value)}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    placeholder="Details"
                    value={products[0].details}
                    onChange={(e) => handleChange(0, 'details', e.target.value)}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    placeholder="Stock"
                    value={products[0].stock}
                    onChange={(e) => handleChange(0, 'stock', e.target.value)}
                  />
                </td>
                <td style={cellStyle}>
                  <input
                    type="text"
                    placeholder="Image"
                    value={products[0].image}
                    onChange={(e) => handleChange(0, 'image', e.target.value)}
                  />
                </td>
                <td style={cellStyle}>
                  <button style={buttonStyle1} onClick={handleSubmit}>Submit</button>
                </td>
              </tr>
            )}
            <tr>
              <td style={cellStyle}>shampoo</td>
              <td style={cellStyle}>good product</td>
              <td style={cellStyle}>21</td>
              <td style={cellStyle}>shampoo</td>
              <td style={cellStyle}>----</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
