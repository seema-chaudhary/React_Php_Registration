import './Style.css';
import React, {useState} from 'react'
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if(name.length === 0 ){
      alert('Name has left blank!')
    }
    else if(mobile.length === 0 ){
      alert('Mobilehas left blank!')
    }
    else if(email.length === 0){
      alert('Email has left blank!')
    }
    else{
      alert('Registration Successfull')
      const url = "http://localhost:80/react-php-Registration-project/frontend/";
     
      let fromData = new FormData();
      fromData.append('name', name);
      fromData.append('mobile', mobile);
      fromData.append('email', email);
     
      axios.post(url, fromData)
      .then(res => alert(res.data))
      .catch(err => alert(err));
    }
  }

  return (
    <>
    <div className="container">
      <h1>Registraion</h1><br></br>
      <label htmlFor='name'>Name</label>
      <input className='form-control' type='text' id='name' name='name' placeholder='Enter Name Hear' value={name} onChange={(e)=> setName(e.target.value)} />
      <label htmlFor='mobile'>Mobile</label>
      <input className='form-control' type='text' id='mobile' name='mobile' placeholder='Enter Mobile Hear' value={mobile} onChange={(e)=> setMobile(e.target.value)}/>
      <label htmlFor='email'>Email</label>
      <input className='form-control' type='text' id='email' name='email' placeholder='Enter Email Hear' value={email} onChange={(e)=> setEmail(e.target.value)}/>
      <input className='btn btn-success' type='button' id='send' name='send' value='Send' onClick={handleSubmit} />
    </div>
    </>
  );
}

export default App;
