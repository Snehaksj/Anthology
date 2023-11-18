import React, { useState, useEffect, useContext } from 'react';
import './login.module.css'
import { TextField, Box, Button, Typography, styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { API } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
    background-color:white;
    width: 400px;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;

const ErrorPara = styled(Typography)`
    justify-content: center;
    flex-direction: column;
    padding: 0 2px;
    color:red;
    font-size:13px;
    text-align: center;
`;
const LoginValError = styled(Typography)`
  justify-content: center;
  flex-direction: column;
  padding: 4px;
  margin-bottom:20px;
  color: red;
  font-size: 13px;
  text-align: center;
  background: ${({ hasErrors }) => (hasErrors ? 'rgba(255, 0, 0, 0.15)' : 'transparent')};
`;
const SignupValError = styled(Typography)`
justify-content: center;
flex-direction: column;
padding: 4px;
margin-bottom:20px;
color: red;
font-size: 13px;
text-align: center;
  background: ${({ hasErrors }) => (hasErrors ? 'rgba(255, 0, 0, 0.15)' : 'transparent')};
`;


const loginInitialValues = {
    username: '',
    password: ''
};

const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};

const Login = ({ isUserAuthenticated }) => {
    const [login, setLogin] = useState(loginInitialValues);
    const [signup, setSignup] = useState(signupInitialValues);
    const [loginErrors, setloginErrors] = useState('');
    const [signupErrors, setsignupErrors] = useState('');
    const [account, toggleAccount] = useState('login');
    const [loginvalidationError,setloginvalidationError] = useState('');
    const [signupvalidationError,setsignupvalidationError] = useState('');

    const navigate = useNavigate();
    const { setAccount } = useContext(DataContext);

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    }

    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const loginUser = async () => {
        const usernameErrors = usernamevalidation(login);
        const passwordErrors = passwordvalidation(login);
    
      setloginErrors({
        username: usernameErrors.username || '',
        password: passwordErrors.password || '',
      });
      console.log(loginErrors);
      if(
      Object.keys(usernameErrors).length === 0 &&
      Object.keys(passwordErrors).length === 0){
        try{
            console.log("enters here")
            let response = await API.userLogin(login);
        if (response.isSuccess) {
            setloginvalidationError('');

            sessionStorage.setItem('accessToken', `Bearer ${response.data.accessToken}`);
            sessionStorage.setItem('refreshToken', `Bearer ${response.data.refreshToken}`);
            setAccount({ name: response.data.name, username: response.data.username });
            
            isUserAuthenticated(true)
            setLogin(loginInitialValues);
            navigate('/');
        } else {
            setloginvalidationError('Invalid username or password');
        }
    }
    catch(err){
        setloginvalidationError('Invalid username or password');
    }
    }
    }
    const signupUser = async () => {
        const nameErrors = namevalidation(signup);
        const usernameErrors = usernamevalidation(signup);
        const passwordErrors = passwordvalidation(signup);
    
      setsignupErrors({
        name: nameErrors.name || '',
        username: usernameErrors.username || '',
        password: passwordErrors.password || '',
      });
      if(Object.keys(nameErrors).length === 0 &&
      Object.keys(usernameErrors).length === 0 &&
      Object.keys(passwordErrors).length === 0){
        try{
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
            signupvalidationError('');
            setSignup(signupInitialValues);
            toggleAccount('login');
        } else {
            setsignupvalidationError('Username already exists');
        }
      }
      catch(err){
        setsignupvalidationError('Username already exists');
      }
    }
    }
    const handleloginusernameBlur = () => {
        const errors = usernamevalidation(login);
        setloginErrors(prevErrors => ({
          ...prevErrors,
          username: errors.username || '',
      }));
    };
    const handleloginpasswordBlur = () => {
      const errors=passwordvalidation(login);
      setloginErrors(prevErrors => ({
        ...prevErrors,
        password: errors.password || '',
    }));
  };

  const handlesignupusernameBlur = () => {
    const errors = usernamevalidation(signup);
    setsignupErrors(prevErrors => ({
        ...prevErrors,
        username: errors.username || '',
    }));
  };

  const handlesignuppasswordBlur = () => {
    const errors = passwordvalidation(signup);
    setsignupErrors(prevErrors => ({
        ...prevErrors,
        password: errors.password || '',
    }));
  };

  const handlesignupnameBlur = () => {
    const errors = namevalidation(signup);
    setsignupErrors(prevErrors => ({
        ...prevErrors,
        name: errors.name || '',
    }));
  };
    const usernamevalidation = (values) =>{
        const errors={};
        const usernameregex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if(!values.username){
            errors.username = "Username is required";
          }
          else if(!usernameregex.test(values.username)){
            errors.username = "Invalid Username";
          }
        return errors;
      };
      const passwordvalidation = (values) =>{
        const errors={};
        if(!values.password){
          errors.password = "Password is required";
        }
        else if(values.password.length<8){
          errors.password = "Password must be minimum 8 characters";
        }
        return errors;
      };
      const namevalidation = (values) =>{
        const errors={};
          if(!values.name){
            errors.name = "Name is required";
          }
        return errors;
      };
    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    const loginStyle={ fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif'",
    fontSize:'40px'
    };
    const boxStyle={background:'rgba(255, 255, 255, 0.923)',
    width:'350px',
    height:'490px',
    textAlign: 'center',
    top:'50%',
    left:'50%',
    position:'absolute',
    transform:'translate(-50%,-50%)',
    boxSizing: 'borderbox',
    borderRadius: '3mm',
    padding:'20px 35px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)'
    };
    const boxStyle2 = {
        display:'flex',
        flexDirection:'column',
        flex:'1'
    };
    const textStyle={
        
        marginBottom:'8px'
    };
    const orStyle={
        color:'#878787',
        fontSize:'14px'
    };
    const loginButtonStyle={
        marginTop:'10px',
        marginBottom:'20px'
    };
    const SignUpButtonStyle ={
        boxShadow:'0 2px 4px 0 rgba(0,0,0,0.2)',
        marginTop:'10px',
    };
    return (
        <body>
        <Component>
            <Box style={boxStyle}>
                {
                    account === 'login' ?
                    <>
                    <p style={loginStyle}>Login</p>
                    <LoginValError hasErrors={Boolean(loginvalidationError)}>
                    {loginvalidationError}
                    </LoginValError> 
                        <Box style={boxStyle2}>
                            
                            <TextField variant="standard" value={login.username}  style={textStyle} onChange={(e) => onValueChange(e)} name='username' label='Enter Username'onBlur={() =>
                              handleloginusernameBlur()}/>
                        <ErrorPara>{loginErrors.username}</ErrorPara>
                            <TextField  variant="standard" type="password" value={login.password}  style={textStyle} onChange={(e) => onValueChange(e)} name='password' label='Enter Password'onBlur={() =>
                              handleloginpasswordBlur()}/>
                        <ErrorPara>{loginErrors.password}</ErrorPara>


                            <Button variant="contained" style={loginButtonStyle} onClick={() => loginUser()} >Login</Button>
                            <Text style={orStyle}>OR</Text>
                            <Button onClick={() => toggleSignup()} style={SignUpButtonStyle}>Create an account</Button>
                        </Box> 
                        </>
                        :
                        <>
                        <p style={loginStyle}>Sign Up</p>
                        <SignupValError hasErrors={Boolean(signupvalidationError)}>
                        {signupvalidationError}
                        </SignupValError>
                        <Box style={boxStyle2}>
                            <TextField variant="standard" style={textStyle} value={signup.name} onChange={(e) => onInputChange(e)} name='name' label='Enter Name' onBlur={() =>
                              handlesignupnameBlur()}/>
                              <ErrorPara>{signupErrors.name}</ErrorPara>
                            <TextField variant="standard" style={textStyle} value={signup.username} onChange={(e) => onInputChange(e)} name='username' label='Enter Username' onBlur={() =>
                              handlesignupusernameBlur()}/>
                              <ErrorPara>{signupErrors.username}</ErrorPara>
                            <TextField variant="standard" type="password" style={textStyle} value={signup.password} onChange={(e) => onInputChange(e)} name='password' label='Enter Password' onBlur={() =>
                              handlesignuppasswordBlur()}/>
                                <ErrorPara>{signupErrors.password}</ErrorPara>
                            <Button variant="contained" style={loginButtonStyle} onClick={() => signupUser()} >Signup</Button>
                            <Text style={orStyle}>OR</Text>
                            <Button  style={SignUpButtonStyle} onClick={() => toggleSignup()}>Already have an account</Button>
                        </Box>
                        </>
                }
            </Box>
        </Component>
        </body>
    )
}

export default Login;