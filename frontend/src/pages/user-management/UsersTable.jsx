import React from 'react';

const UsersTable = ({ rows, selectedUser, deleteUser }) => {
    return (
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th scope="col" className="w-1/3 px-6 py-3 text-gray-500 uppercase tracking-wider">
                        ID
                    </th>
                    <th scope="col" className="w-1/3 px-6 py-3 text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th scope="col" className="w-1/3 px-6 py-3 text-gray-500 uppercase tracking-wider">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
                {
                    rows.length > 0 ? rows.map(row => (
                        <tr key={row.id}>
                            <td className="w-1/3 text-center px-6 py-4 text-gray-500">{row.id}</td>
                            <td className="w-1/3 text-center px-6 py-4 text-gray-500">{row.name}</td>
                            <td className="w-1/3 text-center space-x-2 px-6 py-4 text-gray-500">
                                <button onClick={()=> selectedUser({id:row.id, name:row.name})} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Update
                                </button>
                                <button onClick={()=>deleteUser({id:row.id, name:row.name})} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )) : (
                        <tr>
                             <td className="text-center px-6 py-4 text-gray-500">No Data</td>
                             <td className="text-center px-6 py-4 text-gray-500">No Data</td>
                             <td className="text-center px-6 py-4 text-gray-500">No Data</td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default UsersTable;
