import './index.css';

const Orders = () => {
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
        <div style={containerStyle}>
            <div>
                <h1>New Orders</h1>
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={cellStyle}>Order Id</th>
                            <th style={cellStyle}>User Id</th>
                            <th style={cellStyle}>Product Id</th>
                            <th style={cellStyle}>Quantity</th>
                            <th style={cellStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={cellStyle}>1</td>
                            <td style={cellStyle}>2</td>
                            <td style={cellStyle}>12</td>
                            <td style={cellStyle}>2</td>
                            <td style={cellStyle}><button id="bt">Confirm</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Orders;
