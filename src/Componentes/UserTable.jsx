import React, {Fragment} from 'react';

const UserTable = (props) => {
    console.log(props.users);

    return ( 
        <Fragment>
            <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>UserName</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.users.map(user =>(
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className="button muted-button">Edit</button> <button className="button muted-button">Delete</button>
                            </td>
                        </tr>
                        )
                    )
                }
            </tbody>
        </table>

        </Fragment>
             );
}
 
export default UserTable;

