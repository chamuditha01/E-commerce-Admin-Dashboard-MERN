import './index.css';

const Users = () => {

    const tableStyle = {
        border: '1px solid black',
        borderCollapse: 'collapse',
         // Set a maximum width for the table
    };

    const thStyle = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'center',
    };

    const tdStyle = {
        border: '1px solid black',
        padding: '8px',
        textAlign: 'center',
    };


    return (
        <div>
            <br></br>
            <h1>Manage Users</h1>
            <br></br>
            <hr></hr>
            <br></br>
            <div id="containertble">
                <table id="tble" style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>Name</th>
                            <th style={thStyle}>Email</th>
                            <th style={thStyle}>Contact</th>
                            <th style={thStyle}>Address</th>
                            <th style={thStyle}>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={tdStyle}>Yasiru</td>
                            <td style={tdStyle}>yasiru@gmail.com</td>
                            <td style={tdStyle}>0774589654</td>
                            <td style={tdStyle}>Galle</td>
                            <td style={tdStyle}><button id="bt">Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Users;
