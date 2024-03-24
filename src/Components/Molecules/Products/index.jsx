import './index.css'

const Products = () => {

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center', // Center content horizontally
    
    minHeight: '100vh', // Ensure the container takes up the full viewport height
    
};

const tableStyle = {
    border: '1px solid black',
};

const cellStyle = {
    border: '1px solid black',
};

    return (
        <div>
            <h1>Manage Products</h1>
            <button id="bt">Add Product</button>
            <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={cellStyle}>Product name</th>
                            <th style={cellStyle}>Details</th>
                            <th style={cellStyle}>Stock</th>
                            <th style={cellStyle}>Image</th>
                        </tr>
                    </thead>
                    <tbody> 
                        <tr>
                            <td style={cellStyle}>Frocks</td>
                            <td style={cellStyle}>mmm</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                        </tr>
                    </tbody>
                </table>
        </div>
    );
}
export default Products;