// import React, { useState, useEffect } from 'react'
import React from 'react'

// import axios from 'axios'
import Users from './components/Users'
import CreateUser from './components/CreateUser'
import MaxLv from './components/MaxLv'
import Layout from './components/Layout'
// import logo from './logo.svg';
import './App.css';

function App() {
  // const [users, setUsers] = useState(null)

  // const [username, setUsername] = useState('')
  // const [email, setEmail] = useState('')
  // useEffect(() => {
  //   axios
  //     .get('/api/users')
  //     .then((users) => setUsers(users))
  //     .catch((err) => console.log(err))
  // }, [])

  // const submitForm = () => {
  //   if (username === '') {
  //     alert('Please fill the username field')
  //     return
  //   }
  //   if (email === '') {
  //     alert('Please fill the email field')
  //     return
  //   }
  //   axios
  //     .post('/api/users', {
  //       username: username,
  //       email: email,
  //     })
  //     .then(function () {
  //       alert('Account created successfully')
  //       window.location.reload()
  //     })
  //     .catch(function () {
  //       alert('Could not creat account. Please try again')
  //     })
  // }
  return (
    <Layout>
      <CreateUser />
      <Users />
      <MaxLv />
    </Layout>
  )
}

export default App;
