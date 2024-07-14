import React, { useState } from 'react';
import SchoolRegisterForm from './school-management/SchoolRegisterForm';
import TeacherRegisterForm from './teacher-management/TeacherRegisterForm';

const RegisterForm = () => {
    const [userType, setUserType] = useState('school'); // Default to 'school' for initial rendering

    const handleUserTypeChange = (type) => {
        setUserType(type);
    };

    return (   
        <>
            <div className="flex justify-center items-center min-h-screen">
                <div className='w-1/3 py-10 px-10 rounded-lg bg-gray-100'>
                <h2 className='text-2xl font-bold mb-5 text-center'>Register Form</h2>
                <div className="flex justify-between mb-5">
                    <button
                        onClick={() => handleUserTypeChange('school')}
                        className={`flex-grow py-2 ${userType === 'school' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        School
                    </button>
                    <button
                        onClick={() => handleUserTypeChange('teacher')}
                        className={`flex-grow py-2 border-l border-r border-black ${userType === 'teacher' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        Teacher
                    </button>
                    <button
                        onClick={() => handleUserTypeChange('student')}
                        className={`flex-grow py-2 ${userType === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
                    >
                        Student
                    </button>
                </div>
                    {userType === 'school' && <SchoolRegisterForm />}
                    {userType === 'teacher' && <TeacherRegisterForm />}
                </div>
            </div>

            </>
    );
};

export default RegisterForm;
