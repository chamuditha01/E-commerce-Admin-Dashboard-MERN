import React, { useState } from 'react';
import './index.css';
import axios from 'axios';
import { useEffect } from 'react';

const Products = () => {

  const [products, setProducts] = useState([{ name: '', details: '', stock: '' }]);
  const [image, setImage] = useState(null);
  const [showInputRow, setShowInputRow] = useState(false);
  const [getProducts, setgetProducts] = useState([]);
  const [types, setTypes] = useState(['cosmetics', 'garden', 'kitchen','Veternary']); // Available types
  const [filteredTypes, setFilteredTypes] = useState([]); // Filtered types based on user input
  const [selectedType, setSelectedType] = useState(''); // Selected type

  const addProduct = () => {
    setShowInputRow(true);
  };

  const handleTypeChange = (value) => {
    setSelectedType(value);
  };

  const filterTypes = (input) => {
    const filtered = types.filter((type) => type.toLowerCase().includes(input.toLowerCase()));
    setFilteredTypes(filtered);
  };


  const handleChange = (index, field, value) => {
    const updatedProducts = [...products];
    
        updatedProducts[index][field] = value; // Update other fields as before
    
    setProducts(updatedProducts);
};

const fetchProducts = async () => {
  try {
    const response = await axios.get("http://localhost:5002/getProducts");
    setgetProducts(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

useEffect(() => {
  // Fetch data from the backend API when the component mounts
  fetchProducts();
  
}, []);
  
const handleDeleteproduct = async (productid) => {
  try {
    // Send a DELETE request to delete the person
    await axios.delete(`http://localhost:5002/deleteproduct/${productid}`);

    // Fetch updated data after deletion
    fetchProducts();

  } catch (error) {
    console.error("Error deleting person:", error.response.data);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
      const formData = new FormData();
      formData.append("name", products[0].name || ''); // Append other fields
      formData.append("details", products[0].details || '');
      formData.append("stock", products[0].stock || '');
      formData.append("type", selectedType || '');
      formData.append("image", image);
       // Append the image file

      // Send a POST request to the backend API using Axios
      const response = await axios.post("http://localhost:5002/products", formData, {
          headers: {
              "Content-Type": "multipart/form-data",
          },
      });

      if (!response.data.success) {
          throw new Error("Failed to insert product");
      }

      // Optionally handle success response
      console.log("Product inserted successfully");

      // Optionally clear form fields or update UI
      setProducts([{ name: "", details: "", stock: "" }]);
      setImage(null);
      setShowInputRow(false);
      setSelectedType('');
      fetchProducts();
      // Optionally fetch updated data after adding a new product
      // fetchData();
  } catch (error) {
      console.error("Error inserting product:", error);
      // Optionally handle error
      // setMessage("Failed to insert product");
  }
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
              <th style={cellStyle}>Type</th>
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
                    type="number"
                    min={0}
                    placeholder="Stock"
                    value={products[0].stock}
                    onChange={(e) => handleChange(0, 'stock', e.target.value)}
                  />
                </td>
                <td style={{ border: '1px solid black', padding: '8px', textAlign: 'center' }}>
                <input
                  type="text"
                  placeholder="Type"
                  value={selectedType}
                  onChange={(e) => {
                    handleTypeChange(e.target.value);
                    filterTypes(e.target.value);
                  }}
                  
                />
                {selectedType && filteredTypes.length > 0 && (
                  <ul>
                    {filteredTypes.map((type, index) => (
                      <p style={{cursor:'pointer',marginLeft:'-30px',border:'1px solid black',marginTop:'5px'}} key={index} onClick={() => handleTypeChange(type)}>{type}</p>
                    ))}
                  </ul>
                )}
              </td>
                <td style={cellStyle}>
                <input type="file" onChange={(e) => setImage(e.target.files[0])} />
                </td>
                <td style={cellStyle}>
                  <button style={buttonStyle1} onClick={handleSubmit}>Submit</button>
                </td>
              </tr>
            )}
            {getProducts.map((product) => (
              <tr key={product._id}>
                <td style={cellStyle}>{product.name}</td>
                <td style={cellStyle}>{product.details}</td>
                <td style={cellStyle}>{product.stock}</td>
                <td style={cellStyle}>{product.type}</td>
                <td style={cellStyle}>
                  {/* Assuming product.image is the file path */}
                  {product.image && (
                    <img
                      style={{ width: "60px", objectFit: "cover", height: "60px" }}
                      src={`data:image/jpeg;base64,${product.image}`}
                      alt={product.name}
                    />
                  )}
                </td>
                
                <td style={cellStyle}><button style={buttonStyle1} onClick={() => handleDeleteproduct(product._id)}>Delete</button></td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
