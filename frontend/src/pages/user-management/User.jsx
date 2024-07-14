import React, { useEffect, useState } from 'react'
import UserForm from './UserForm'
import UsersTable from './UsersTable';
import Axios from "axios"

const User = () => {
  const [users,setUsers] = useState([]);
  const [submitted,setSubmitted] = useState(false);
  const [selectedUser,setSelectedUser] = useState({})
  const [isEdit,setIsEdit] = useState(false);

  useEffect(()=>{
    getUsers();
  },[]);

  const getUsers = () => {
    Axios.get('http://localhost:8080/api/v1/getusers')
    .then(response =>{
      console.log(response.data);
      setUsers(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const addUser = (data) =>{
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    }
    Axios.post('http://localhost:8080/api/v1/adduser',payload)
    .then(()=>{
      getUsers();
      setSubmitted(false);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const updateUser = (data) =>{
    setSubmitted(true);

    const payload = {
      id: data.id,
      name: data.name,
    }
    Axios.put('http://localhost:8080/api/v1/updateuser',payload)
    .then(()=>{
      getUsers();
      setSubmitted(false);
    })
    .catch(error => {
      console.log(error);
    })
  }

  const deleteUser = (data) =>{
    Axios.delete(`http://localhost:8080/api/v1/deleteuser/${data.id}`)
    .then(()=>{
      getUsers();
    })
    .catch(error => {
      console.log(error);
    })
  }

  return (
    <>
      <UserForm 
        addUser={addUser} 
        updateUser={updateUser}
        submitted={submitted} 
        data={selectedUser}
        isEdit={isEdit}
        />
      <UsersTable 
        rows={users} 
        selectedUser = {data =>{
          setSelectedUser(data);
          setIsEdit(true)
        }}
        deleteUser={data => {
          deleteUser(data);
        }}
      />
    </>
  )
}

export default User