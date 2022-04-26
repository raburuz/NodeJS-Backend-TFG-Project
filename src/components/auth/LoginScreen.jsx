import { Alert, Button, FormControl, FormGroup, TextField } from '@mui/material';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  startLogin } from '../../actions/auth';

import { formHook } from '../../hooks/formHook';
import '../auth/auth.css'

export const LoginScreen = () => {

 const dispatch =  useDispatch();
 const estadoError = useSelector(state => state.auth);


 const [formValues,handleInputChange ] = formHook({
    username:'',
    email:'',
    password:''
  });

  const [formErrors, setFormErrors] = useState({
    errores:{

    }
  });
  const [isSubmit, setIsSubmit] = useState(false);
  useEffect(() => {
    
    if(Object.keys(formErrors).length === 0 && isSubmit){
      
    }

  }, [formErrors])
  

  const {username,email,password} = formValues;


  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validator(formValues)
    
     setFormErrors(errores);
   
     if(Object.keys(formErrors).length === 0){    //dentro de keys poner errores
        setIsSubmit(true);
         console.log(username, email, password);
         dispatch(startLogin(username, email, password));
     
       
      
      } 

      if(estadoError){

          console.log(estadoError);

      }
   

    

  }
  const validator = (values) => {
    const errors ={};
    const regex =  /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if(!values.username){
      errors.username = "Username is requerid";
    }
    if(!values.email){
      errors.email = "Email is requerid";
    }else if(!regex.test(values.email)){
      errors.email = "Email is not valid";
   
    }
    if(!values.password){
      errors.password = "Password is requerid";
    }else if(values.password.length < 4){
      errors.password = "Password must be more than 4 characters";
    }
    console.log(errors)
    return errors;
  } 
  return (
    <div className='login-container'>
        <div className='box-login'>
          <form className='box-form' onSubmit={handleSubmit}>
            <FormControl>
            
            <TextField 
                    id="outlined-basic"
                    label="Username"
                    name='username'
                    value={username} 
                    variant="outlined"
                    onChange={handleInputChange} 
                    sx={{marginBottom:5}}
  
                    error={formErrors.username ? true : false}
                    helperText={formErrors?.username}
                    />
                <TextField 
                    id="outlined-basic"
                    label="Email"
                    name='email'
                    value={email} 
                    variant="outlined"
                    onChange={handleInputChange} 
                  

                    
                    error={formErrors.email ? true : false}
                    helperText={formErrors?.email}
                    />


                <TextField sx={{marginTop:5}}
                  id="outlined-basic"
                  label="Password"
                  name='password'
                  value={password}
                  variant="outlined"
                  onChange={handleInputChange} 
                  error={formErrors.password ? true : false}
                    helperText={formErrors?.password}
                  type='password'
                  />
                  

                <Button sx={{marginTop:5}} type='submit' variant="contained">Login</Button>
            </FormControl>
            
            
          </form>  
         
          
        </div>  
          
        {
            ( !Object.keys(estadoError.errors).length == 0) ?  <Alert severity="error">{JSON.stringify(estadoError.errors)}</Alert> : ''
          }
    </div>
  )
}
