import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SchoolList = () => {
    const [schools, setSchools] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        Axios.get('http://localhost:8080/api/v1/schools')
            .then(response => {
                setSchools(response.data);
            })
            .catch(error => {
                console.error('Error fetching schools:', error);
            });
    }, []);

    const handleUpdate = (id) => {
        navigate(`/schoolform/${id}`);
    };

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:8080/api/v1/schools/${id}`)
            .then(response => {
                setSchools(schools.filter(school => school.id !== id));
            })
            .catch(error => {
                console.error('Error deleting school:', error);
            });
    };

    return (
        <div className='flex justify-center  min-h-screen bg-gray-100 p-6'>
            <div className='w-full'>
                <table className='table-auto w-full bg-white shadow-md rounded-lg overflow-hidden'>
                    <thead className='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                        <tr>
                            <th className='py-3 px-6 text-left'>School Name</th>
                            <th className='py-3 px-6 text-left'>School Address</th>
                            <th className='py-3 px-6 text-left'>School Phone</th>
                            <th className='py-3 px-6 text-left'>School Type</th>
                            <th className='py-3 px-6 text-left'>School Email</th>
                            <th className='py-3 px-6 text-center'>Actions</th>
                        </tr>
                    </thead>
                    <tbody className='text-gray-600 text-sm font-light'>
                        {schools.map((school) => (
                            <tr key={school.id} className='border-b border-gray-200 hover:bg-gray-100'>
                                <td className='py-3 px-6 text-left whitespace-nowrap'>{school.schoolName}</td>
                                <td className='py-3 px-6 text-left'>{school.schoolAddress}</td>
                                <td className='py-3 px-6 text-left'>{school.schoolPhone}</td>
                                <td className='py-3 px-6 text-left'>{school.schoolType}</td>
                                <td className='py-3 px-6 text-left'>{school.schoolEmail}</td>
                                <td className='py-3 px-6 text-center'>
                                    <button
                                        onClick={() => handleUpdate(school.id)}
                                        className='bg-blue-500 text-white py-1 px-3 rounded-full text-xs mr-2 hover:bg-blue-700 transition duration-200'
                                    >
                                        Update
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (window.confirm("Are you sure you want to delete this school?")) {
                                                handleDelete(school.id);
                                            }
                                        }}
                                        className='bg-red-500 text-white py-1 px-3 rounded-full text-xs hover:bg-red-700 transition duration-200'
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SchoolList;
