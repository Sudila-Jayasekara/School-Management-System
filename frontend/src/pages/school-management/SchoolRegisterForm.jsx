import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom'; // Assuming you are using React Router for routing
import { useNavigate } from 'react-router-dom';

const SchoolRegisterForm = () => {
    const { id } = useParams(); // Retrieve id from URL params
    const [schoolName, setSchoolName] = useState('');
    const [schoolAddress, setSchoolAddress] = useState('');
    const [schoolPhone, setSchoolPhone] = useState('');
    const [schoolType, setSchoolType] = useState('');
    const [schoolEmail, setSchoolEmail] = useState('');
    const [schoolPassword, setSchoolPassword] = useState('');

    const navigate = useNavigate();
    
    const [errors, setErrors] = useState({});
    
    useEffect(() => {
        // Fetch school details if id exists in URL params
        if (id) {
            Axios.get(`http://localhost:8080/api/v1/schools/${id}`)
                .then(response => {
                    const { schoolName, schoolAddress, schoolPhone, schoolType, schoolEmail, schoolPassword } = response.data;
                    setSchoolName(schoolName);
                    setSchoolAddress(schoolAddress);
                    setSchoolPhone(schoolPhone);
                    setSchoolType(schoolType);
                    setSchoolEmail(schoolEmail);
                    setSchoolPassword(schoolPassword);
                })
                .catch(error => {
                    console.error('Error fetching school details:', error);
                    // Handle error fetching details
                });
        }
    }, [id]); // Trigger effect when id changes

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm();

        if (Object.keys(formErrors).length === 0) {
            const formData = {
                id,
                schoolName,
                schoolAddress,
                schoolPhone,
                schoolType,
                schoolEmail,
                schoolPassword
            };
            
            // Determine whether to POST (create) or PUT (update) based on id presence
            const apiMethod = id ? Axios.put(`http://localhost:8080/api/v1/schools/${id}`, formData) : Axios.post('http://localhost:8080/api/v1/schools', formData);

            apiMethod
                .then(response => {
                    console.log('Form submitted successfully:', response.data);
                    resetForm();
                    navigate('/schoolTable');
                })
                .catch(error => {
                    console.error('Form submission failed:', error);
                    // Handle error response here
                }); 

        } else {
            setErrors(formErrors);
        }
    };

    const validateForm = () => {
        const errors = {};
        if (!schoolName) errors.schoolName = true;
        if (!schoolAddress) errors.schoolAddress = true;
        if (!schoolPhone) errors.schoolPhone = true;
        if (!schoolType) errors.schoolType = true;
        if (!schoolEmail) errors.schoolEmail = true;
        if (!schoolPassword) errors.schoolPassword = true;
        return errors;
    };

    const resetForm = () => {
        setSchoolName('');
        setSchoolAddress('');
        setSchoolPhone('');
        setSchoolType('');
        setSchoolEmail('');
        setSchoolPassword('');
        setErrors({});
    };

    const inputClassName = (field) => errors[field] ? 'py-3 px-4 rounded-md border border-red-500' : 'py-3 px-4 rounded-md';
    const labelClassName = (field) => errors[field] ? 'text-red-500' : '';

    return (
            <form onSubmit={handleSubmit} className='flex flex-col'>
                <label htmlFor="schoolName" className={labelClassName('schoolName')}>School Name</label>
                <input
                    type="text"
                    id="schoolName"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    className={inputClassName('schoolName')}
                />
                
                <label htmlFor="schoolAddress" className={`mt-5 ${labelClassName('schoolAddress')}`}>School Address</label>
                <input 
                    type="text"
                    id="schoolAddress"
                    value={schoolAddress}
                    onChange={(e) => setSchoolAddress(e.target.value)}
                    className={inputClassName('schoolAddress')}
                />
                
                <label htmlFor="schoolPhone" className={`mt-5 ${labelClassName('schoolPhone')}`}>School Phone</label>
                <input
                    type='text'
                    id='schoolPhone'
                    value={schoolPhone}
                    onChange={(e) => setSchoolPhone(e.target.value)}
                    className={inputClassName('schoolPhone')}
                />
                
                <label htmlFor="schoolType" className={`mt-5 ${labelClassName('schoolType')}`}>School Type</label>
                <select
                    id="schoolType"
                    value={schoolType}
                    onChange={(e) => setSchoolType(e.target.value)}
                    className={inputClassName('schoolType')}
                >
                    <option value="">Select School Type</option>
                    <option value="National Schools">National Schools</option>
                    <option value="Provincial Schools">Provincial Schools</option>
                    <option value="Central Schools">Central Schools</option>
                    <option value="Navodya Schools">Navodya Schools</option>
                </select>
                
                <label htmlFor='schoolEmail' className={`mt-5 ${labelClassName('schoolEmail')}`}>School Email</label>
                <input
                    type='email'
                    id='schoolEmail'
                    value={schoolEmail}
                    onChange={(e) => setSchoolEmail(e.target.value)}
                    className={inputClassName('schoolEmail')}
                />
                
                <label htmlFor="schoolPassword" className={`mt-5 ${labelClassName('schoolPassword')}`}>School Password</label>
                <input
                    type='password'
                    id='schoolPassword'
                    value={schoolPassword}
                    onChange={(e) => setSchoolPassword(e.target.value)}
                    className={inputClassName('schoolPassword')}
                />
                
                <button type='submit' className='mt-10 py-4 bg-blue-400 rounded-md'>{id ? 'Update' : 'Submit'}</button>
            </form>
    );
};

export default SchoolRegisterForm;
