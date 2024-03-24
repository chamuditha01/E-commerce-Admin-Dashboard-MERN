import './index.css';

const Users = () => {

    const tblestyle={
        textAlign:'center',
        border:'1px solid black'
    }

    
    return (
        <div>
            <h1>Manage Users</h1>
            <table >
                    <th style={tblestyle}> name</th>
                    <th style={tblestyle}>Email</th>
                    <th style={tblestyle}>Address</th>
                    <th style={tblestyle}>Actions</th>
                    <tbody>
                        <tr>
                            <td style={tblestyle}>Yasiry</td>
                            <td style={tblestyle}>yasiru@gmail.com</td>
                            <td style={tblestyle}>Galle</td>
                            <td style={tblestyle}><button id="bt">Delete</button></td>
                        </tr>
                    </tbody>
            </table>
        </div>
    );
}
export default Users;