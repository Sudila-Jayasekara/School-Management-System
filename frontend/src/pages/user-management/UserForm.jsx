import React, { useEffect, useState } from 'react';

const UserForm = ({addUser,updateUser, submitted, data, isEdit}) => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('ID:', id);
        console.log('Name:', name);

        //pass data to addUser funcion in User.jsx
        const data = { id, name };
        isEdit ? updateUser(data) : addUser(data);
    };

    useEffect(()=>{
        if(!submitted){
            setId('');
            setName('');
        }
    },[submitted]);

    useEffect(()=>{
        if(data && data && data.id !== 0){
            setId(data.id);
            setName(data.name);
        }
    },[data]);

    return (
        <div className='flex flex-row items-center justify-center min-h-screen'>
                <form onSubmit={handleSubmit} className='w-1/5 flex flex-col  px-10 py-10 rounded-md bg-gray-100'>
                    <label htmlFor="id">User ID:</label>
                    <input
                        type="text"
                        id="id"
                        value={id || ''}
                        onChange={(e) => setId(e.target.value)}
                        className='rounded-md px-4 py-2'
                    />

                    <label htmlFor="name" className='mt-10'>Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name || ''}
                        onChange={(e) => setName(e.target.value)}
                        className='rounded-md px-4 py-2'
                    />

                    <button type="submit" className='mt-10 py-2 rounded-md bg-blue-400'>{isEdit? 'Update' : 'Add'}</button>
                </form>

        </div>
    );
};

export default UserForm;