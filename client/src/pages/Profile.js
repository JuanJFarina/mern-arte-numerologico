import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LoginForm from '../components/LoginForm';

export default function Profile() {
  const [data, setData] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data');
      setData(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="container-fluid">
      <div className="row">
        <div className="col-1 col-sm-2"></div>
        <div className="col-10 col-sm-8">
          <h2 style={{textAlign:'center'}}>{data}</h2>
          <LoginForm />
        </div>
        <div className="col-1 col-sm-2"></div>
      </div>
    </main>
  )
}